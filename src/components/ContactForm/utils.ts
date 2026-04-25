import { ZodError } from "zod";

export const formatSubmitError = (error: unknown): string => {
  if (error instanceof ZodError)
    return error.issues[0]?.message ?? "Please check the form.";
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
};
