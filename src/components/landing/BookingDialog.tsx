import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button, type ButtonProps } from "@/components/ui/button";
import { LeadForm } from "./LeadForm";
import { useLocale } from "@/i18n/locale";

const BookingContext = createContext<(service?: string) => void>(() => {});

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");
  const { m } = useLocale();

  const openBooking = (next?: string) => {
    setService(next ?? "");
    setOpen(true);
  };

  return (
    <BookingContext.Provider value={openBooking}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="z-[80] max-h-[92vh] overflow-y-auto border-border bg-background sm:max-w-xl sm:rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-extrabold">{m.booking.title}</DialogTitle>
            <DialogDescription>{m.booking.description}</DialogDescription>
          </DialogHeader>
          <LeadForm
            key={`${service}-${open}`}
            plain
            title=""
            defaultService={service}
            formId="booking-modal"
          />
        </DialogContent>
      </Dialog>
    </BookingContext.Provider>
  );
}

export function BookButton({
  service,
  children,
  ...props
}: ButtonProps & { service?: string }) {
  const openBooking = useBooking();
  return (
    <Button type="button" {...props} onClick={() => openBooking(service)}>
      {children}
    </Button>
  );
}
