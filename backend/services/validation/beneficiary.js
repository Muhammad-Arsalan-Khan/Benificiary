import { z } from 'zod'

const BeneficiaryValidation = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  purpose: z.string().min(1,{ message: "purpose is required" }),
  cnic: z.number().min(1, { message: "CNIC must be exactly 13 digits" }),
  token: z.string().min(1, "Token is required"),
  qrCodeURL: z.string().min(1, "QR Code URL is required"),
  address: z.string().min(1, "address is required"),
  phone: z.string()
    .min(11, { message: "Phone number must be at least 11 digits" })
    .regex(/^\d{11}$/, { message: "Phone number must contain only digits" }),
})

export {
    BeneficiaryValidation
}