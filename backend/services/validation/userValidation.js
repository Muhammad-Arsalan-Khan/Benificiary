import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, { message: "Password must contain at least one special character" }),
  cnic: z.number().min(1, { message: "CNIC must be exactly 13 digits" }),
  type: z.string().min(1, {message: "define the user type"})
})

const userValidationSchemalogin = z.object({
  cnic: z.number().min(1, { message: "CNIC must be exactly 13 digits" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, { message: "Password must contain at least one special character" }),
})

export { userValidationSchema, userValidationSchemalogin }
