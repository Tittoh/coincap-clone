import React from "react";
import { HeaderWrap, LogoImg, LogoLink } from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <LogoLink href="/">
        <LogoImg />
      </LogoLink>
    </HeaderWrap>
  );
};

export { Header };
