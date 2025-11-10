import { execFileSync } from "child_process";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { percentile, category = "GEN", branch = "" } = req.body;
  const userPct = Number(percentile);
  if (isNaN(userPct)) return res.status(400).json({ error: "Invalid percentile" });

  try {
    const pyPath = path.join(process.cwd(), "scripts", "predict_with_model.py");
    const payload = Buffer.from(JSON.stringify({ percentile: userPct, category, branch })).toString("base64");
    const pythonCommand = process.platform === 'win32' ? 'python' : 'python3';
    const result = execFileSync(pythonCommand, [pyPath, payload], { 
      encoding: "utf8",
      cwd: process.cwd()
    });
    const parsed = JSON.parse(result);
    return res.status(200).json(parsed);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Prediction failed: " + err.message });
  }
}