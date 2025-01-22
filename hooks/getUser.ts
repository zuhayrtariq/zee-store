"use server";

import wixClientServer from "@/lib/wixClientServer";

export const getUser = async () => {
    const wixClient = await wixClientServer();
    try {
        const member = (await wixClient.members.getCurrentMember()).member?.profile;
        return member
    } catch (e) {
        return undefined
    }
}