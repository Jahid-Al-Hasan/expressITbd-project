import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3F4F6]">
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
