import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Sidebar.module.css";
import { PATH } from "../Pages";
import closeIcon from "./closeOutline.svg";

type PropsType = {
  open: boolean;
  handleClose: () => void;
};

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {
  const sidebarClass = s.sidebar + (open ? " " + s.open : "");
  let location = useLocation();
  let juniorClass = location.pathname === PATH.JUNIOR;
  let preJuniorClass = location.pathname === PATH.PRE_JUNIOR;
  let juniorPlusClass = location.pathname === PATH.JUNIOR_PLUS;

  console.log( location.pathname === PATH.JUNIOR);

  return (
    <>
      {/*затемнение справа от открытого меню*/}
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={sidebarClass}>
        <button className={s.close} onClick={handleClose}>
          <img src={closeIcon} alt="close sidebar" id={"hw5-menu-close"} />
        </button>

        <nav id={"hw5-menu"} className={s.nav}>
          <NavLink
            id={"hw5-pre-junior-link"}
            to={PATH.PRE_JUNIOR}
            onClick={handleClose}
            className={!preJuniorClass ? "": s.active}

          >
            Pre-junior
          </NavLink>
          <NavLink
            id={"hw5-junior-link"}
            to={PATH.JUNIOR}
            onClick={handleClose}
            className={!juniorClass ? "": s.active}
          >
            Junior
          </NavLink>
          <NavLink
            id={"hw5-junior-plus-link"}
            to={PATH.JUNIOR_PLUS}
            onClick={handleClose}
            className={!juniorPlusClass ? "": s.active}

          >
            Junior Plus
          </NavLink>
        </nav>
      </aside>
    </>
  );
};
