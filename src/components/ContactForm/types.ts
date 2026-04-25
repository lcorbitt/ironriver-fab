export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  companyWebsite: string;
  status: ContactFormStatus;
  errorMessage: string | null;
}
