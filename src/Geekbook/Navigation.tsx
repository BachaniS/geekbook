import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import React from "react";
import "./styles.css";

interface GBNavigationProps {
  children: React.ReactNode;
}

export default function GBNavigation({ children }: GBNavigationProps) {
  const { pathname } = useLocation();
  const links = [
    { label: "Home", path: "/Home", icon: FaHome },
    { label: "Account", path: "/Account", icon: FaRegCircleUser },
    { label: "Search", path: "/Search", icon: FaSearch },
  ];
  return (
    <div
      id="gb-nav"
      className="list-group rounded-0 position-fixed top-0 bottom-0 bg-black border-right d-none d-md-block z-2"
    >
      <Link
        to="/Home"
        className="list-group-item list-group-item-action bg-black text-white border-0 text-center"
      >
        <img src="/res/logo.png" alt="Geekbook" />
      </Link>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item list-group-item-action bg-black text-white ${
            pathname === link.path ? "active" : ""
          }`}
        >
          <link.icon className="icon" />
          {link.label}
        </Link>
      ))}
      <div>{children}</div>
    </div>
  );
}
