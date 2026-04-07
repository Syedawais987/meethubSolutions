"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { services } from "@/data/services";
import { getStoredUtm } from "@/hooks/use-utm-params";

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function goToStep2() {
    const valid = await trigger(["name", "email", "phone"]);
    if (valid) setStep(2);
  }

  async function onSubmit(data: ContactFormData) {
    if (data.website) return; // honeypot triggered
    setSubmitting(true);
    try {
      const utm = getStoredUtm();
      const res = await fetch("/api/contact", {
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-border bg-card p-8 text-center"
      >
        <CheckCircle className="mx-auto h-12 w-12 text-brand-teal" />
        <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
          Thank You!
        </h3>
        <p className="mt-2 text-muted-foreground">
          We&apos;ve received your inquiry and will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      {/* Progress indicator */}
      <div className="mb-6 flex items-center gap-2">
        <div
          className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`}
        />
        <div
          className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}
        />
      </div>
      <p className="mb-6 text-sm text-muted-foreground">
        Step {step} of 2
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot */}
        <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="font-heading text-xl font-semibold">
                Tell us about yourself
              </h3>

              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Your full name"
                  className="mt-1.5"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="you@company.com"
                  className="mt-1.5"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone / WhatsApp *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+92 3XX XXXXXXX"
                  className="mt-1.5"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  {...register("company")}
                  placeholder="Your company (optional)"
                  className="mt-1.5"
                />
              </div>

              <Button type="button" onClick={goToStep2} className="w-full">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <h3 className="font-heading text-xl font-semibold">
                How can we help?
              </h3>

              <div>
                <Label htmlFor="service">Service Interest *</Label>
                <select
                  id="service"
                  {...register("service")}
                  className="mt-1.5 flex h-9 w-full appearance-none rounded-lg border border-input bg-background px-3 py-1 text-sm text-foreground shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none [&>option]:bg-background [&>option]:text-foreground"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.shortTitle}
                    </option>
                  ))}
                  <option value="other">Not Sure (Let Us Guide You)</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <select
                  id="budget"
                  {...register("budget")}
                  className="mt-1.5 flex h-9 w-full appearance-none rounded-lg border border-input bg-background px-3 py-1 text-sm text-foreground shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none [&>option]:bg-background [&>option]:text-foreground"
                >
                  <option value="">Select (optional)...</option>
                  <option value="under-50k">Under PKR 50,000</option>
                  <option value="50k-200k">PKR 50,000 - 200,000</option>
                  <option value="200k-500k">PKR 200,000 - 500,000</option>
                  <option value="500k+">PKR 500,000+</option>
                </select>
              </div>

              <div>
                <Label htmlFor="referralSource">How did you hear about us?</Label>
                <select
                  id="referralSource"
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

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell us briefly about your needs..."
                  rows={4}
                  className="mt-1.5"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="flex-1"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
