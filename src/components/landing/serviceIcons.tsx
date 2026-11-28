import {
  CreditCard,
  GraduationCap,
  RefreshCw,
  Sparkles,
  Timer,
  type LucideIcon,
} from "lucide-react";
import type { ServiceId } from "@/content/landing";

export const SERVICE_ICONS: Record<ServiceId, LucideIcon> = {
  "short-course": Timer,
  "long-course": GraduationCap,
  "code95-lt-short": Sparkles,
  "code95-lt-long": Sparkles,
  "driver-card": CreditCard,
  "lt-retrain": RefreshCw,
};
