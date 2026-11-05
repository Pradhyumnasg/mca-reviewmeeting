import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ParticleBackdrop from "@/components/common/ParticleBackdrop";

const MainLayout = () => {
  return (
    <div className="site-shell flex min-h-screen flex-col">
      <ParticleBackdrop />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" className="flex-1 min-w-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
