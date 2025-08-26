import jwt from "jsonwebtoken";
import { UserModel } from "../Models/UserModel.js";
import bcrypt from "bcryptjs";

export default async function ResetPassController(req, res) {
  const { password:{confirmpassword}, resetToken } = req.body;

  try {
    const decoded = jwt.verify(resetToken, 'mvtechhai'); // throws if invalid
    const { email } = decoded;

    if (!email) {
      return res.status(404).json({
        statusCode: 404,
        user_exist: false
      });
    }

    const user = await UserModel.findOne({
      email,
      "auth.resetPasstoken": resetToken
    });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        resetPass: false,
        message: "Invalid token or user not found"
      });
    }

    // Update password
    const updateResult = await resetPassword(email,confirmpassword );

    if (updateResult) {
      return res.json({
        statusCode: 200,
        passReset: true
      });
    } else {
      return res.status(500).json({
        statusCode: 500,
        passReset: false,
        message: "Failed to reset password"
      });
    }

  } catch (error) {
    console.error("Reset token verification failed:", error.message);
    return res.status(401).json({
      statusCode: 401,
      resetPass: false,
      message: "Invalid or expired token"
    });
  }
}

// Helper function to update password
async function resetPassword(email, newPassword) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
             
  try {
    await UserModel.updateOne(
      { email },
      { $set: { password: hashedPassword } } // In production: hash this!
    );


    
    return true;
  } catch (error) {
    console.error("Password update error:", error.message);
    return false;
  }
}
