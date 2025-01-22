import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products, } from "@wix/stores";
import { cookies } from "next/headers";
import { currentCart, orders } from "@wix/ecom";
import { members } from '@wix/members'

const wixClientServer = async () => {
  const cookieStore = await cookies();
  const refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  const wixClient = createClient({
    modules: {
      products,
      collections,
      // currentCart,
      members, orders
    },

    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });
  return wixClient
};

export default wixClientServer;

