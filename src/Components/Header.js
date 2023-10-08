import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color:isActive? "red":"blue"
    };
  };
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <NavLink style={navLinkStyles} to={"/"}>Home </NavLink>
          </div>
          <div className="col">
            <NavLink style={navLinkStyles} to={"/about"}>About </NavLink>
          </div>
          <div className="col">
            <NavLink style={navLinkStyles} to={"/contact"}>Contact </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
