import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import bgImage from "./../assets/image/sidebar.jpg";
import logo from "./../assets/image/reactlogo.jpg";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

const Layout = ({ ...rest }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainPanel = useRef<HTMLDivElement | null>(null);

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  useEffect(() => {
    let ps: PerfectScrollbar | null = null; // Biến lưu trữ instance của PerfectScrollbar
    if (navigator.platform.indexOf("Win") > -1) {
      if (mainPanel.current) {
        ps = new PerfectScrollbar(mainPanel.current, {
          suppressScrollX: true,
          suppressScrollY: false,
        });
        document.body.style.overflow = "hidden";
      }
    }

    window.addEventListener("resize", resizeFunction);

    // Cleanup function cho useEffect
    return () => {
      if (navigator.platform.indexOf("Win") > -1 && ps) {
        ps.destroy(); // Hủy bỏ instance của PerfectScrollbar khi component unmount
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div>
      <Sidebar
        logoText={"Online School"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        bgColor={"blue"}
        {...rest}
      />
      <div ref={mainPanel}>
        <Navbar handleDrawerToggle={handleDrawerToggle} {...rest} />

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
