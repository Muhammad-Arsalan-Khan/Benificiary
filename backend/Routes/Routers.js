import express from "express"
const Router = express.Router()
import { signup , login, verifyEmailOTP, resendEmail, logout } from "../controller/auth/auth.js"
import { getBeneficiaryInprogress, getBeneficiaryReject, getBeneficiaryPendding, getBeneficiaryComplete,getAllBeneficiary, getVerifieduser, getNonVerifieduser, updateUserByAdmin, deleteUserByAdmin} from "../controller/admin/admin.js"
import {getBeneficiary, createBeneficiaryRequest} from "../controller/Receptionist/Receptionist.js"
import { getBeneficiarybyDepartment, updateDataByDepartment } from "../controller/Department/department.js"
import { authCheck } from "../middleware/authcheck.js"
import { authCheckAdmin } from "../middleware/admin/authcheck.js"

//Auth
Router.post("/login", login)
Router.post("/verifyotp/:id", verifyEmailOTP)
Router.post("/resendemail", resendEmail)
Router.post("/auth/logout", authCheck, logout)

//receptionist
Router.post("/receptionist/getdata" , authCheck, getBeneficiary)
Router.post("/receptionist" , authCheck, createBeneficiaryRequest)

Router.post("/department/getdata", authCheck, getBeneficiarybyDepartment)
Router.post("/department/:id", authCheck, updateDataByDepartment)


//admin
Router.get("/admin/getallbeneficiary",        authCheckAdmin, getAllBeneficiary       )
Router.get("/admin/getbeneficiaryinprogress", authCheckAdmin, getBeneficiaryInprogress)
Router.get("/admin/getbeneficiaryreject",     authCheckAdmin, getBeneficiaryReject    )
Router.get("/admin/getbeneficiarypendding",   authCheckAdmin, getBeneficiaryPendding  )
Router.get("/admin/getbeneficiarycomplete",   authCheckAdmin, getBeneficiaryComplete  )
Router.put("/admin/updateuser/:id",          authCheckAdmin, updateUserByAdmin       )
Router.delete("/admin/deleteuser/:id",        authCheckAdmin, deleteUserByAdmin       )
Router.post("/admin/createUser",              authCheckAdmin, signup                  )
Router.get("/admin/getverifieduser",          authCheckAdmin, getVerifieduser         )
Router.get("/admin/getnonverifieduser",       authCheckAdmin, getNonVerifieduser      )


export default Router