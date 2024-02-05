import { Link } from "react-router-dom";
import "./navlinks.css";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "profile", text: "Profile" },
  // { id: 3, url: "database", text: "Database" },
];

const NavLinks = () => {
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const canAccessDatabase = role === "admin" || role === "editor";

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <div key={id}>
            <Link to={url}>{text}</Link>
          </div>
        );
      })}

      {canAccessDatabase && (
        <div>
          <Link to={"/database"}>Database</Link>
        </div>
      )}

      <div id="navbar-role">Role: {role}</div>
      <div>Welcome, {email}</div>
    </div>
  );
};

export default NavLinks;
