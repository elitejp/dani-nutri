import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledContainerNotMobile, StyledHeader, StyledLogo } from "./styles";

import logo from "../../assets/logo-01.png";
import instragram from "../../assets/icon-instagram.svg";
import whatsapp from "../../assets/icon-whatsapp.svg";
import mail from "../../assets/icon-mail.svg";

import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <StyledHeader>
      <StyledContainerNotMobile>
        <li>Sobre mim</li>
        <li>Serviços</li>
      </StyledContainerNotMobile>

      <Link to="/">
        <StyledLogo src={logo} alt="logo" />
      </Link>

      <StyledContainerNotMobile>
        <li>Contato</li>
        <StyledContainerNotMobile>
          <img src={instragram} alt="isntagram" />
          <img src={whatsapp} alt="whatsapp" />
          <img src={mail} alt="mail" />
        </StyledContainerNotMobile>
      </StyledContainerNotMobile>

      <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} />

      <motion.nav
        layout
        data-isOpen={isOpenMenu}
        className="animatedMenu"
        animate={
          isOpenMenu ? { x: 0, y: 118, opacity: 1 } : { x: 0, y: 0, opacity: 0 }
        }
        transition={{ duration: 0.4 }}
      >
        <ul>
          <li>Sobre mim</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </motion.nav>
    </StyledHeader>
  );
};

export default Header;
