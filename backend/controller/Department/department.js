import Beneficiary from "../../models/Beneficiary.js"
import { dataToQrFnx } from "../../services/qr/qr.js"

const getBeneficiarybyDepartment = async (req, res, next) => {
  try {
    const { input } = req.body;
    if (!input) {
      return res.json({ msg: "field is required" })
    }
    let users
    if (/^\d+$/.test(input)) {
      users = await Beneficiary.find({ cnic: input })
    } else {
      users = await Beneficiary.find({ token: input })
    }
    if (!users || users.length === 0) {
      return res.status(404).json({ msg: "user not found" })
    }
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

const updateDataByDepartment = async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) {
      return res.status(400).json({ msg: "Beneficiary id is required" })
    }
    const { status, remarks } = req.body
    if(!status || !remarks){
      const err = new Error("field are required");
      err.statusCode = 400;
      throw err
    }
    const data = { status, remarks }
    const updatedUser = await Beneficiary.findByIdAndUpdate(
        id,
       data,
      { new: true }
    )
    updatedUser.qrCodeURL = (await dataToQrFnx({updatedUser}, updatedUser.token)) || "qrCodeURL"
    await Beneficiary.findByIdAndUpdate(id, updatedUser, {new: true})
    if (!updatedUser) {
      const err = new Error("data not found")
      err.statusCode = 400
      throw err
    }
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}
export {
    getBeneficiarybyDepartment,
    updateDataByDepartment,
}