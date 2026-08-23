import dbConnect from "../../lib/dbConnect";
import Claim from "../../models/Claim";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, firstName, lastName, email, location } = req.body || {};

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "A username is required." });
  }

  const cleanUsername = username.trim().toLowerCase();

  if (!/^[a-z0-9_]{2,24}$/.test(cleanUsername)) {
    return res.status(400).json({
      error:
        "Usernames must be 2-24 characters and can only contain letters, numbers, and underscores.",
    });
  }

  const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

  if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  try {
    await dbConnect();

    const existingUsername = await Claim.findOne({ username: cleanUsername });
    if (existingUsername) {
      return res.status(409).json({ error: "That username is already taken." });
    }

    if (cleanEmail) {
      const existingEmail = await Claim.findOne({ email: cleanEmail });
      if (existingEmail) {
        return res.status(409).json({ error: "Email is already taken" });
      }
    }

    const claim = await Claim.create({
      username: cleanUsername,
      firstName: typeof firstName === "string" ? firstName.trim().slice(0, 60) : "",
      lastName: typeof lastName === "string" ? lastName.trim().slice(0, 60) : "",
      email: cleanEmail,
      location: typeof location === "string" ? location.trim().slice(0, 60) : "",
    });

    const totalClaims = await Claim.countDocuments();

    return res.status(201).json({
      username: claim.username,
      location: claim.location,
      totalClaims,
    });
  } catch (err) {
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern || {})[0];
      if (field === "email") {
        return res.status(409).json({ error: "Email is already taken" });
      }
      return res.status(409).json({ error: "That username is already taken." });
    }
    console.error("Claim error:", err);
    return res.status(500).json({ error: "Something went wrong. Try again." });
  }
}
