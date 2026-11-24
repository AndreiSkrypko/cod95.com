import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const src = path.join(root, "public", "logo-baza.png");
const outDir = path.join(root, "public", "brand");

function removeWhiteBackground(rgba, width, height) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = rgba[i];
      const g = rgba[i + 1];
      const b = rgba[i + 2];
      const a = rgba[i + 3];
      if (a < 16) continue;
      const isNearWhite = r > 235 && g > 235 && b > 235;
      if (isNearWhite) rgba[i + 3] = 0;
    }
  }
}

/** Обрезка по непрозрачным пикселям с небольшим паддингом. */
function findContentBounds(rgba, width, height, padding = 4) {
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = rgba[(y * width + x) * 4 + 3];
      if (a < 48) continue;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
  return {
    left: Math.max(0, minX - padding),
    top: Math.max(0, minY - padding),
    width: Math.min(width, maxX - minX + 1 + padding * 2),
    height: Math.min(height, maxY - minY + 1 + padding * 2),
  };
}

/** Верхняя зона — только BAZA (без подписи снизу). */
function findWordmarkCrop(rgba, width, height) {
  const rowInk = new Array(height).fill(0);
  for (let y = 0; y < height; y++) {
    let count = 0;
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      if (rgba[i + 3] < 48) continue;
      const r = rgba[i];
      const g = rgba[i + 1];
      const b = rgba[i + 2];
      if (r < 200 || g < 200 || b < 200) count++;
    }
    rowInk[y] = count;
  }
  let gapStart = -1;
  let splitY = height;
  const inkThreshold = width * 0.02;
  for (let y = Math.floor(height * 0.35); y < height - 8; y++) {
    if (rowInk[y] < inkThreshold) {
      if (gapStart === -1) gapStart = y;
    } else if (gapStart !== -1 && y - gapStart > 12) {
      splitY = gapStart;
      break;
    }
  }
  const topCrop = { left: 0, top: 0, width, height: Math.max(80, splitY) };
  const cropped = Buffer.from(rgba);
  return findContentBounds(cropped, width, topCrop.height);
}

async function rasterize(srcPath) {
  const { data, info } = await sharp(srcPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const rgba = Buffer.from(data);
  removeWhiteBackground(rgba, info.width, info.height);
  return { rgba, info };
}

async function writePng(rgba, info, extract, dest) {
  let pipeline = sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } });
  if (extract) pipeline = pipeline.extract(extract);
  await pipeline.png({ compressionLevel: 9 }).toFile(dest);
  const meta = await sharp(dest).metadata();
  return meta;
}

await mkdir(outDir, { recursive: true });

const { rgba, info } = await rasterize(src);
const fullBounds = findContentBounds(rgba, info.width, info.height, 8);
const markBounds = findWordmarkCrop(rgba, info.width, info.height);

const fullPath = path.join(outDir, "logo-baza-lockup.png");
const markPath = path.join(outDir, "logo-baza-mark.png");

const fullMeta = await writePng(rgba, info, fullBounds, fullPath);
const markMeta = await writePng(rgba, info, markBounds, markPath);

console.log("full", fullMeta.width, "x", fullMeta.height, "->", fullPath);
console.log("mark", markMeta.width, "x", markMeta.height, "->", markPath);