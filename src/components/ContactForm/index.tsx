"use client";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import {
  CONTACT_FORM_SUBTITLE,
  CONTACT_FORM_TITLE,
} from "./constants";
import { useContactForm } from "./hooks/useContactForm";

const inputClass =
  "color-fade mt-2 w-full rounded-sm border-2 border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none ring-0 placeholder:text-steel shadow-[inset_0_2px_6px_rgb(0_0_0_/_0.2)] transition-shadow duration-300 ease-industrial focus:border-accent focus:ring-1 focus:ring-accent";

const labelClass =
  "font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-bright";

export const ContactForm = () => {
  const { state, honeypotName, setField, submit } = useContactForm();

  return (
    <Reveal>
      <form
        className="relative space-y-10 border-2 border-border bg-surface p-8 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)] sm:p-10"
        onSubmit={(e) => {
          e.preventDefault();
          void submit();
        }}
        noValidate
      >
        <div className="space-y-3 border-b border-border pb-8">
          <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
            {CONTACT_FORM_TITLE}
          </h1>
          <p className="text-sm font-medium leading-relaxed text-muted">
            {CONTACT_FORM_SUBTITLE}
          </p>
        </div>

        <div className="sr-only" aria-hidden>
          <label htmlFor={honeypotName}>Company website</label>
          <input
            tabIndex={-1}
            id={honeypotName}
            name={honeypotName}
            type="text"
            autoComplete="off"
            value={state.companyWebsite}
            onChange={(e) => setField("companyWebsite", e.target.value)}
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className={inputClass}
              value={state.name}
              onChange={(e) => setField("name", e.target.value)}
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              value={state.email}
              onChange={(e) => setField("email", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className={labelClass}>
              Phone{" "}
              <span className="font-normal normal-case tracking-normal text-muted">
                (optional)
              </span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
              value={state.phone}
              onChange={(e) => setField("phone", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className={cn(inputClass, "resize-y")}
              value={state.message}
              onChange={(e) => setField("message", e.target.value)}
              placeholder="Materials, quantities, timeline, drawings / specs, delivery location in Berthoud or Northern Colorado…"
            />
          </div>
        </div>

        {state.errorMessage ? (
          <p className="text-sm font-medium text-red-500" role="alert">
            {state.errorMessage}
          </p>
        ) : null}

        {state.status === "success" ? (
          <p
            className="font-mono text-xs font-semibold uppercase tracking-widest text-accent"
            role="status"
          >
            Thanks — your message is on its way. We will follow up shortly.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={state.status === "submitting"}
          className="font-display color-fade inline-flex h-14 min-h-14 items-center justify-center border-2 border-accent bg-accent px-10 text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] transition-[opacity,transform] duration-300 ease-industrial hover:border-accent-hover hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state.status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </form>
    </Reveal>
  );
};
