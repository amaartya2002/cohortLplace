import crypto from "crypto"

const generateResetToken = async () => {
  const rawToken = crypto.randomBytes(32).toString("hex")

  const hashToken = crypto.createHash("sha256").update(rawToken).digest("hex")

  return { rawToken, hashToken }
}

export { generateResetToken }