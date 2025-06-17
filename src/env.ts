import { z } from "zod/v4";

const envSchema = z.object({
  CLERK_SECRET_KEY: z.string().min(1, { message: "CLERK_SECRET_KEY is required" }),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1, { message: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is required" }),

  DATABASE_URL: z.string().url({ message: "Invalid DATABASE_URL format" }),
  DATABASE_URL_UNPOOLED: z.string().url({ message: "Invalid DATABASE_URL_UNPOOLED format" }),
  POSTGRES_URL: z.string().url({ message: "Invalid POSTGRES_URL format" }),
  POSTGRES_URL_NON_POOLING: z.string().url({ message: "Invalid POSTGRES_URL_NON_POOLING format" }),
  POSTGRES_URL_NO_SSL: z.string().url({ message: "Invalid POSTGRES_URL_NO_SSL format" }),
  POSTGRES_PRISMA_URL: z.string().url({ message: "Invalid POSTGRES_PRISMA_URL format" }),

  PGDATABASE: z.string(),
  PGHOST: z.string(),
  PGHOST_UNPOOLED: z.string(),
  PGPASSWORD: z.string(),
  PGUSER: z.string(),
  POSTGRES_DATABASE: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_USER: z.string(),

  VERCEL_OIDC_TOKEN: z.string().optional(),
});

export const env = envSchema.parse(process.env);

export type EnvVars = z.infer<typeof envSchema>;
