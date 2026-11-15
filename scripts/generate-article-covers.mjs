import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "src", "assets");
const outDir = join(assets, "articles");

const W = 1600;
const H = 900;

function gradientSvg(stops, direction = "horizontal") {
  const grad =
    direction === "horizontal"
      ? `<linearGradient id="g" x1="0" y1="0" x2="1" y2="0">${stops}</linearGradient>`
      : `<linearGradient id="g" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient>`;
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs>${grad}</defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`,
  );
}

function vignetteSvg() {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><radialGradient id="v" cx="50%" cy="45%" r="68%"><stop offset="0%" stop-color="black" stop-opacity="0"/><stop offset="100%" stop-color="#0a0f18" stop-opacity="0.55"/></radialGradient><rect width="100%" height="100%" fill="url(#v)"/></svg>`,
  );
}

async function resizeCover(input, position = "centre") {
  return sharp(join(assets, input))
    .rotate()
    .resize(W, H, { fit: "cover", position })
    .modulate({ saturation: 1.08, brightness: 1.02 })
    .toBuffer();
}

async function writeCover(name, layers) {
  let img = sharp(layers[0]);
  if (layers.length > 1) {
    img = sharp(layers[0]).composite(
      layers.slice(1).map((input) => ({
        input,
        blend: "over",
      })),
    );
  }
  await img.jpeg({ quality: 90, mozjpeg: true }).toFile(join(outDir, name));
  // eslint-disable-next-line no-console
  console.log("wrote", name);
}

// Короткий vs длинный: класс + практика на площадке
async function coverShortLong() {
  const left = await sharp(join(assets, "classroom.jpg"))
    .rotate()
    .resize(Math.round(W * 0.58), H, { fit: "cover", position: "centre" })
    .toBuffer();
  const right = await sharp(join(assets, "training-trucks.jpg"))
    .rotate()
    .resize(Math.round(W * 0.5), H, { fit: "cover", position: "right" })
    .toBuffer();
  const base = await sharp({
    create: { width: W, height: H, channels: 3, background: "#141c2e" },
  })
    .composite([
      { input: left, left: 0, top: 0 },
      { input: right, left: Math.round(W * 0.5), top: 0 },
    ])
    .jpeg()
    .toBuffer();
  const tint = gradientSvg(
    `<stop offset="0%" stop-color="#e86b2f" stop-opacity="0.22"/><stop offset="45%" stop-color="#141c2e" stop-opacity="0.1"/><stop offset="100%" stop-color="#0a0f18" stop-opacity="0.35"/>`,
    "horizontal",
  );
  await writeCover("article-korotkiy-dlinnyy.jpg", [base, tint, vignetteSvg()]);
}

// Беларусь — Варшава: ночная трасса + тёплый свет консультации
async function coverBelarus() {
  const road = await resizeCover("story-highway.jpg", "centre");
  const office = await sharp(join(assets, "consult-office.jpg"))
    .rotate()
    .resize(W, H, { fit: "cover", position: "left" })
    .linear(1.05, -(128 * 0.12))
    .toBuffer();
  const officeFade = await sharp(office)
    .ensureAlpha()
    .composite([
      {
        input: gradientSvg(
          `<stop offset="0%" stop-color="white" stop-opacity="0.55"/><stop offset="55%" stop-color="white" stop-opacity="0.08"/><stop offset="100%" stop-color="white" stop-opacity="0"/>`,
          "horizontal",
        ),
        blend: "dest-in",
      },
    ])
    .toBuffer();
  const base = await sharp(road).composite([{ input: officeFade, blend: "over" }]).jpeg().toBuffer();
  const warm = gradientSvg(
    `<stop offset="0%" stop-color="#f07838" stop-opacity="0.28"/><stop offset="35%" stop-color="#1a2438" stop-opacity="0.15"/><stop offset="100%" stop-color="#0a0f18" stop-opacity="0.45"/>`,
    "horizontal",
  );
  await writeCover("article-belarus-varshava.jpg", [base, warm, vignetteSvg()]);
}

// Польша / Литва: карта Европы с акцентом маршрута
async function coverPolandLithuania() {
  const map = await sharp(join(assets, "europe-map.jpg"))
    .rotate()
    .resize(W, H, { fit: "cover", position: "centre" })
    .modulate({ saturation: 1.15, brightness: 0.92 })
    .toBuffer();
  const night = gradientSvg(
    `<stop offset="0%" stop-color="#0f1a2e" stop-opacity="0.25"/><stop offset="50%" stop-color="#141c2e" stop-opacity="0.2"/><stop offset="100%" stop-color="#0a0f18" stop-opacity="0.5"/>`,
    "vertical",
  );
  const route = gradientSvg(
    `<stop offset="35%" stop-color="#e86b2f" stop-opacity="0"/><stop offset="50%" stop-color="#f07838" stop-opacity="0.35"/><stop offset="65%" stop-color="#e86b2f" stop-opacity="0"/>`,
    "horizontal",
  );
  await writeCover("article-polsha-litva.jpg", [map, night, route, vignetteSvg()]);
}

await coverShortLong();
await coverBelarus();
await coverPolandLithuania();