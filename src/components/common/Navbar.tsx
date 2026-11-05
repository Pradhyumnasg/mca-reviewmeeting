import { Link } from "react-router-dom";
import logo from "@/assets/bitm-logo.png";
import mcaLogo from "@/assets/mca-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => <header className="site-header">
  <div className="container px-4 md:px-8 py-5">
    {/* Logo */}
    <Link to="/" className="brand-row" aria-label="Ballari Institute Of Technology & Management home">
      <img src={logo} alt="BITM" className="brand-logo" />
      <div className="brand-copy"><p className="college-name">Ballari Institute Of Technology &amp; Management</p><p className="college-affiliation">Autonomus Institute Under VTU, Belagavi</p><p className="department-name">Department of Master of Computer Applications</p></div>
      <span className="brand-logo mca-logo-frame"><img src={mcaLogo} alt="MCA Department" className="mca-logo-zoom" /></span>
    </Link>
    <div className="mt-2 flex justify-end"><ThemeToggle /></div>
  </div>
</header>;
export default Navbar;
