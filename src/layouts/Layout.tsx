import Footer from "./Footer";
import Header from "./Navbar";
import Sidebar from "./Sidebar";
import "./../index.scss";
import { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import bgImage from "./../assets/image/sidebar.jpg";
import logo from "./../assets/image/reactlogo.jpg";
import { Outlet } from "react-router-dom";

const Layout = ({ ...rest }) => {
  const [image] = useState(bgImage);
  const [color] = useState("blue");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainPanel = useRef<any>(null);

  const resizeFunction = () => {
    if (window.innerWidth >= 900) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    let ps: any;
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className="relative top-0 h-screen">
      <Sidebar
        logoText={"Online School"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        bgColor={color}
        {...rest}
      />
      <div
        className="relative lg:w-[calc(100%-260px)] max-h-full transitionLayout float-right w-full"
        ref={mainPanel}
      >
        <Header handleDrawerToggle={handleDrawerToggle} {...rest} />

        <div className="mt-[70px] py-[30px] px-[15px] min-h-[calc(100vh-123px)]">
          <div className="mt-[30px]">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
