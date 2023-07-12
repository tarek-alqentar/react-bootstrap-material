/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "../assets/Sidebar.css";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <button
        className={`btn btn-outline-primary d-md-none ${
          sidebarVisible ? "show-button" : "hide-button"
        }`}
        onClick={toggleSidebar}
        style={{
          zIndex: 1000,
          position: "fixed",
          top: "4rem",
          width: "45px",
          height: "45px",
        }}
        data-bs-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar ${
          sidebarVisible ? "slide-in" : "slide-out"
        }
        }`}
      >
        <div className="p-4 m-2"></div>
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <CustomLink to="/Components/Badge">Badge</CustomLink>
          <CustomLink to="/Components/Button">Button</CustomLink>
          <CustomLink to="/Components/Card">Card</CustomLink>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className="nav-item">
      <Link
        className={`nav-link link-body-emphasis ${isActive ? "active" : ""}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
