"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_STREAM_API_SECRET;

export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error("L'utilisateur ne pas connecter");
  if (!apiKey) throw new Error("Pas de clé API");
  if (!apiSecret) throw new Error("Pas clé Secret");

  const client = new StreamClient(apiKey, apiSecret);

  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

  const isseud = Math.floor(Date.now() / 1000) - 60;

  const token = client.createToken(user.id, exp, isseud);

  return token;
};
