import dbConnect from "../../lib/dbConnect";
import Claim from "../../models/Claim";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await dbConnect();

    const recentClaims = await Claim.find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .select("username location -_id")
      .lean();

    const totalClaims = await Claim.countDocuments();

    return res.status(200).json({ recentClaims, totalClaims });
  } catch (err) {
    console.error("Fetch claims error:", err);
    return res.status(500).json({ error: "Could not load claims." });
  }
}
