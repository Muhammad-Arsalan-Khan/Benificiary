import mongoose from "mongoose"

const beneficiarySchema = new mongoose.Schema({
  cnic: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  qrCodeURL:{
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'In Progress', 'Completed', 'Rejected' ]
  },
  remarks: {
    type: String,
    default: ""
  }
}, {
  timestamps: true
})

const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema)

export default Beneficiary
