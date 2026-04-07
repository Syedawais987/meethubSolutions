"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { bookingFormSchema, type BookingFormData } from "@/lib/schemas";
import { getStoredUtm } from "@/hooks/use-utm-params";

interface BookingFormProps {
  packageName: string;
}

export function BookingForm({ packageName }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema) as never,
    defaultValues: {
      package: packageName,
    },
  });

  async function onSubmit(data: BookingFormData) {
    setSubmitting(true);
    try {
      const utm = getStoredUtm();
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utm }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // handle error
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-brand-teal" />
        <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
          Inquiry Sent!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our travel team will contact you within 24 hours with a customized
          quote for <strong>{packageName}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border bg-card p-6 space-y-4"
    >
      <h3 className="font-heading text-lg font-semibold text-foreground">
        Book This Package
      </h3>

      <input type="hidden" {...register("package")} />

      <div>
        <Label htmlFor="booking-name">Full Name *</Label>
        <Input
          id="booking-name"
          {...register("name")}
          placeholder="Your full name"
          className="mt-1.5"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="booking-email">Email *</Label>
        <Input
          id="booking-email"
          type="email"
          {...register("email")}
          placeholder="you@email.com"
          className="mt-1.5"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="booking-phone">Phone / WhatsApp *</Label>
        <Input
          id="booking-phone"
          type="tel"
          {...register("phone")}
          placeholder="+92 3XX XXXXXXX"
          className="mt-1.5"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="booking-date">Preferred Travel Date *</Label>
        <Input
          id="booking-date"
          type="date"
          {...register("travelDate")}
          className="mt-1.5"
        />
        {errors.travelDate && (
          <p className="mt-1 text-sm text-destructive">
            {errors.travelDate.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="booking-travelers">Number of Travelers *</Label>
        <Input
          id="booking-travelers"
          type="number"
          min={1}
          max={100}
          {...register("travelers")}
          placeholder="10"
          className="mt-1.5"
        />
        {errors.travelers && (
          <p className="mt-1 text-sm text-destructive">
            {errors.travelers.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="booking-requirements">Special Requirements</Label>
        <Textarea
          id="booking-requirements"
          {...register("requirements")}
          placeholder="Dietary needs, accessibility, custom activities..."
          rows={3}
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="booking-referral">How did you hear about us?</Label>
        <select
          id="booking-referral"
          {...register("referralSource")}
          className="mt-1.5 flex h-9 w-full appearance-none rounded-lg border border-input bg-background px-3 py-1 text-sm text-foreground shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none [&>option]:bg-background [&>option]:text-foreground"
        >
          <option value="">Select (optional)...</option>
          <option value="google">Google Search</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral</option>
          <option value="other">Other</option>
        </select>
      </div>

      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Booking Inquiry"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        This is an inquiry, not a confirmed booking. Our team will follow up
        with availability and a detailed quote.
      </p>
    </form>
  );
}
