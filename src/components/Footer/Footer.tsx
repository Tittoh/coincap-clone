import React from "react";
import { FooterContainer, FooterText } from "./FooterStyle";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        Disclaimer: That isn&apos;t my site. It&apos;s a copy of CoinCap.io.
      </FooterText>
    </FooterContainer>
  );
};

export { Footer };
