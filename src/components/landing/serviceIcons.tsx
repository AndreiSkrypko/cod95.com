import {
  Building2,
  CarFront,
  CreditCard,
  FileBadge,
  FlaskConical,
  Globe,
  GraduationCap,
  Home,
  Laptop,
  RefreshCw,
  Sparkles,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ServiceId } from "@/content/landing";

export const SERVICE_ICONS: Record<ServiceId, LucideIcon> = {
  "short-course": Timer,
  "long-course": GraduationCap,
  "long-no-exam": FileBadge,
  "long-online": Laptop,
  "code95-lt": Sparkles,
  residence: Home,
  adr: FlaskConical,
  invitation: Globe,
  license: CreditCard,
  "extra-driving": CarFront,
  "lt-retrain": RefreshCw,
  employment: Users,
  company: Building2,
};
