import Beneficiary from "../../models/Beneficiary.js";
import shortid from "shortid";
import { dataToQrFnx } from "../../services/qr/qr.js";
import { BeneficiaryValidation } from "../../services/validation/beneficiary.js";

const getBeneficiary = async (req, res, next) => {
  try {
    const { input } = req.body;
    if (!input) {
      return res.json({ msg: "field is required" });
    }
    let users;
    if (/^\d+$/.test(input)) {
      users = await Beneficiary.find({ cnic: input });
    } else {
      users = await Beneficiary.find({ token: input });
    }
    if (!users || users.length === 0) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json(users);
  } catch (error) {
   next(error)
  }
};

const createBeneficiaryRequest = async (req, res, next) => {
  try {
    let { cnic, name, phone, address, purpose } = req.body;
    if (!cnic || !name || !phone || !address || !purpose) {
      const err = new Error("field are required")
      err.statusCode = 400;
      throw err
    }
    cnic = Number(cnic)
    let data = { cnic, name, phone, address, purpose }
    const token = shortid.generate();
    const qrCodeURL = (await dataToQrFnx({...data, token}, token)) || "qrCodeURL";
    data = { qrCodeURL, token,  ...data }
    try {
      BeneficiaryValidation.parse(data)
    } catch (validationError) {
      return res
        .status(400)
        .json({ msg: "validation failed", error: validationError.errors })
    }
    const newUser = new Beneficiary(data)
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}

export { getBeneficiary, createBeneficiaryRequest }
