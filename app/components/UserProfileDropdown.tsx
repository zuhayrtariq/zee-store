"use client";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User2Icon, UserCircle2 } from "lucide-react";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
const UserProfileDropdown = ({ user }: { user: any }) => {
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();
  console.log(isLoggedIn);
  const login = async () => {
    const loginRequestData = wixClient.auth.generateOAuthData(
      process.env.NEXT_CALLBACK_URL || "http://localhost:3000"
    );
    localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
    const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
    window.location.href = authUrl;
  };

  const logout = async () => {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    window.location.href = logoutUrl;
  };
  const verifyLogin = async () => {
    const data = JSON.parse(localStorage.getItem("oAuthRedirectData")!);

    try {
      const { code, state } = await wixClient.auth.parseFromUrl();
      console.log(code, state);
      const tokens = await wixClient.auth.getMemberTokens(code, state, data);
      console.log("These", tokens);
      Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken));
      Cookies.set("accessToken", JSON.stringify(tokens.accessToken));
      wixClient.auth.setTokens(tokens);
    } catch (e) {
      console.log("Something went wrong : ", e);
    }
  };
  useEffect(() => {
    verifyLogin();
  }, [user]);
  return (
    <>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <UserCircle2 className="w-6 h-6 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:font-semibold cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={logout}
              className="text-red-500 hover:font-semibold cursor-pointer"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <User2Icon onClick={login} className="w-6 h-6 cursor-pointer" />
      )}
    </>
  );
};

export default UserProfileDropdown;
