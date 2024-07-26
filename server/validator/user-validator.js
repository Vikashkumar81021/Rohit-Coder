import { z } from "zod";

const signUpSchema = z.object({
  userName: z
    .string({ required_error: "userName is required" })
    .trim()
    .max(255, {
      message: "userName must not be contain more than 255 character",
    })
    .min(3, { message: "userName must be atleast atleast 3 character" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, {
      message: "email must not be contain more than 255 character",
    })
    .min(3, { message: "email must be atleast atleast 3 character" }),
  phone: z
    .string({ required_error: "  phone is required" })
    .trim()
    .max(20, {
      message: "  phone must not be contain more than 255 character",
    })
    .min(10, { message: "  phone must be atleast atleast 10 character" }),
  password: z
    .string({ required_error: "  password is required" })
    .trim()
    .max(255, {
      message: "  password must not be contain more than 255 character",
    })
    .min(7, { message: "  password must be atleast atleast 7 character" }),
});

export default signUpSchema;
