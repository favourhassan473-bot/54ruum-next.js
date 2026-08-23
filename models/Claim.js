import mongoose from "mongoose";

const ClaimSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 2,
      maxlength: 24,
      match: /^[a-z0-9_]+$/,
    },
    firstName: {
      type: String,
      trim: true,
      maxlength: 60,
      default: "",
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 60,
      default: "",
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: 120,
      default: "",
    },
    location: {
      type: String,
      trim: true,
      maxlength: 60,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Claim || mongoose.model("Claim", ClaimSchema);
