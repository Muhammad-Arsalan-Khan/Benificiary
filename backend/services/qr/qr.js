import cloudinary from "../cloudinary/cloudinary.js"
import qr from "qrcode"

export async function dataToQrFnx(qrJson, token) {
  const qrBase64 = await qr.toDataURL(JSON.stringify(qrJson))
  try {
    const uploadRes = await cloudinary.uploader.upload(qrBase64, {
      folder: "Beneficiary-qrcodes",
      public_id: `qr-${token}`,
    })

    return uploadRes.secure_url
  } catch (uploadErr) {
    throw new Error("QR code upload failed: " + uploadErr.message)
  }
}