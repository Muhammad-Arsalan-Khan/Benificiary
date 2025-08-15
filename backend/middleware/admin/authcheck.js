import { verifyUser } from "../../utils/jwt.js"
import User from "../../models/userSchema.js" 

async function authCheckAdmin(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
      return res.status(401).json({ message: "unauthorized access" })
    }
    const isVerify = verifyUser(token)
    if (isVerify?.id) {
      const user = await User.findById(isVerify.id)
      if (!user.isAdmin) {
        return res.status(400).json({
          message: "only admin can access this API",
          status: false,
        });
      }
      req.user = isVerify
      next()
    } else {
      res.status(400).json({
        message: "unAuthorization user",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "catch unAuthorization user",
    });
  }
}

export {
    authCheckAdmin
}