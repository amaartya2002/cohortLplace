import { log } from "node:console";
import zod from "zod";

const envSchema = zod.object({
  PORT: zod.string().optional().default("3000"),
});

function parseMyEnv(env: NodeJS.ProcessEnv) {
  const validate = envSchema.safeParse(env);

  if (!validate.success) throw new Error(validate.error.message);
  //console.log(validate.data);

  return validate.data;
}

export const env = parseMyEnv(process.env);
