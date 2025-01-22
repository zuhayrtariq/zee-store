import UserProfileDropdown from "./UserProfileDropdown";
import ShoppingCartDropdown from "./ShoppingCartDropdown";
import { getUser } from "@/hooks/getUser";
const NavIcons = async () => {
  const user = await getUser();
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <UserProfileDropdown user={"a"} />

      <ShoppingCartDropdown />
    </div>
  );
};

export default NavIcons;
