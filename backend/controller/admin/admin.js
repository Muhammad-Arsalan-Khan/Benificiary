import Beneficiary from "../../models/Beneficiary.js"
import User from "../../models/userSchema.js"
import bcrypt from "bcryptjs"

async function getAllBeneficiary(req, res, next) {
  try {
    const response = await Beneficiary.find();
    return res.json({ msg: "all Beneficiary application ", data: response });
  } catch (error) {
    const err = new Error(
      "Something went wrong while getting the Beneficiary application"
    );
    err.statusCode = 400;
    next(err);
  }
}

async function getBeneficiaryInprogress(req, res, next) {
  try {
    const response = await Beneficiary.find({ status: "In Progress" });
    return res.json({
      msg: "all  in progress Beneficiary application ",
      data: response,
    });
  } catch (error) {
    const err = new Error(
      "Something went wrong while getting in progress the Beneficiary application"
    );
    err.statusCode = 400;
    next(err);
  }
}

async function getBeneficiaryReject(req, res, next) {
  try {
    const response = await Beneficiary.find({ status: "Rejected" });
    return res.json({
      msg: "all rejected Beneficiary application ",
      data: response,
    });
  } catch (error) {
    const err = new Error(
      "Something went wrong while getting the Beneficiary loan application"
    );
    err.statusCode = 400;
    next(err);
  }
}

async function getBeneficiaryPendding(req, res, next) {
  try {
    const response = await Beneficiary.find({ status: "Pending" });
    return res.json({
      msg: "all pendding Beneficiary application ",
      data: response,
    });
  } catch (error) {
    const err = new Error(
      "Something went wrong while getting the pendding Beneficiary application"
    );
    err.statusCode = 400;
    next(err);
  }
}

async function getBeneficiaryComplete(req, res, next) {
  try {
    const response = await Beneficiary.find({ status: "Completed" });
    return res.json({ msg: "all complete  Beneficiary ", data: response });
  } catch (error) {
    const err = new Error(
      "Something went wrong while getting the completed Beneficiary application"
    );
    err.statusCode = 400;
    next(err);
  }
}

async function getNonVerifieduser(req, res, next) {
  try {
    const response = await User.find({ isVerified: false , isAdmin: false})
    return res.json({ msg: "get non verified users ", data: response })
  } catch (error) {
    const err = new Error(
      "Something went wrong while getting the non verified users"
    );
    err.statusCode = 400;
    next(err);
  }
}

async function getVerifieduser(req, res, next) {
  try {
    const response = await User.find({ isVerified: true, isAdmin: false })
    return res.json({ msg: "get verified user ", data: response })
  } catch (error) {
    const err = new Error(
      "Something went wrong while getting the verified users"
    );
    err.statusCode = 400;
    next(err);
  }
}

async function updateUserByAdmin(req, res, next) {
  try {
    const id = req.params.id
    console.log(id)
    if (!id) {
      return res.status(400).json({ msg: "user id is required" });
    }
    const { name, email, cnic, password, isVerified, type } = req.body;
    let data = {  name, email, cnic, password, isVerified, type }
    console.log(data)
    if(password){
      const hashedPassword = await bcrypt.hash(password, 10)
      data = { ...data, password: hashedPassword }
    }
    const updatedUser = await User.findByIdAndUpdate(id, data, {
      new: true,
    })
    console.log(updatedUser)
    if (!updatedUser) {
      const err = new Error("user not found")
      err.statusCode = 400
      throw err;
    }
    res.status(200).json(updatedUser)
  } catch (error) {
    console.log("error",error, "msg" ,error.message, "code", error.code)
    const err = new Error("Something went wrong while updating user");
    err.statusCode = 500;
    next(err);
  }
}

async function deleteUserByAdmin(req, res , next){
  try {
     const id = req.params.id
    if (!id) {
      return res.status(400).json({ msg: "user id is required" });
    }
    const deletedUser = await User.findByIdAndDelete(id)
    if(!deletedUser){
      const err = new Error("user not found")
      err.statusCode = 400
      throw err
    }
    res.json({msg: "user deleted", id: deletedUser._id})
  } catch (error) {
    const err = new Error("Something went wrong while delete user")
    err.statusCode = 500;
    next(err);
  }
}

export {
  getAllBeneficiary,
  getBeneficiaryInprogress,
  getBeneficiaryReject,
  getBeneficiaryPendding,
  getBeneficiaryComplete,
  updateUserByAdmin,
  deleteUserByAdmin,
  getVerifieduser,
  getNonVerifieduser,
}
