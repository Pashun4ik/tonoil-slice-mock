import { FC } from "react";
import { Outlet } from "react-router-dom";
import { MenuWidget } from "@/widgets/menu-widget";

const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <main>
        <Outlet />
      </main>
      <MenuWidget />
    </div>
  );
};

export default Layout;
