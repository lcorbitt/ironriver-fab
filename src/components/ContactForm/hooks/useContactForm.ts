"use client";

import { useCallback, useState } from "react";
import { contactFormSchema } from "@/lib/contact-schema";
import { HONEYPOT_FIELD_NAME } from "../constants";
import type { ContactFormState, ContactFormStatus } from "../types";
import { formatSubmitError } from "../utils";

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  companyWebsite: "",
  status: "idle",
  errorMessage: null,
};

export interface UseContactFormResult {
  state: ContactFormState;
  honeypotName: string;
  setField: (
    field: keyof Pick<
      ContactFormState,
      "name" | "email" | "phone" | "message" | "companyWebsite"
    >,
    value: string,
  ) => void;
  submit: () => Promise<void>;
  reset: () => void;
}

export const useContactForm = (): UseContactFormResult => {
  const [state, setState] = useState<ContactFormState>(initialState);

  const setField = useCallback(
    (
      field: keyof Pick<
        ContactFormState,
        "name" | "email" | "phone" | "message" | "companyWebsite"
      >,
      value: string,
    ) => {
      setState((prev) => ({
        ...prev,
        [field]: value,
        errorMessage: null,
        status: prev.status === "success" ? "idle" : prev.status,
      }));
    },
    [],
  );

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  const submit = useCallback(async () => {
    setState((prev) => ({
      ...prev,
      status: "submitting" as ContactFormStatus,
      errorMessage: null,
    }));

    try {
      const parsed = contactFormSchema.safeParse({
        name: state.name,
        email: state.email,
        phone: state.phone,
        message: state.message,
        companyWebsite: state.companyWebsite,
      });

      if (!parsed.success) {
        const message = formatSubmitError(parsed.error);
        setState((prev) => ({
          ...prev,
          status: "error",
          errorMessage: message,
        }));
        return;
      }

      if (parsed.data.companyWebsite && parsed.data.companyWebsite.trim()) {
        setState((prev) => ({
          ...prev,
          status: "success",
          errorMessage: null,
        }));
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          message: parsed.data.message,
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!res.ok) {
        setState((prev) => ({
          ...prev,
          status: "error",
          errorMessage: data?.error ?? "Could not send your message.",
        }));
        return;
      }

      setState({
        ...initialState,
        status: "success",
      });
    } catch (e) {
      setState((prev) => ({
        ...prev,
        status: "error",
        errorMessage: formatSubmitError(e),
      }));
    }
  }, [state]);

  return {
    state,
    honeypotName: HONEYPOT_FIELD_NAME,
    setField,
    submit,
    reset,
  };
};
