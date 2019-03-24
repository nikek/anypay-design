import React from "react";
import NavButton from "./NavButton";
import { ReactComponent as Logo } from "../SVG/logo.svg";
import { ReactComponent as User } from "../SVG/user.svg";
import { ReactComponent as Folder } from "../SVG/folder.svg";
import { ReactComponent as Upload } from "../SVG/upload.svg";
import { ReactComponent as Menu } from "../SVG/menu.svg";

export default function Nav() {
  return (
    <nav className="nav card-shadow">
      <Logo className="app-logo" alt="logo" />
      <div className="nav__center">
        <NavButton active={true} count="4">
          <Folder />
        </NavButton>
        <NavButton>
          <Upload />
        </NavButton>
        <NavButton>
          <User />
        </NavButton>
      </div>
      <a href="#main" style={{ marginBottom: 20 }}>
        <Menu />
      </a>
    </nav>
  );
}
