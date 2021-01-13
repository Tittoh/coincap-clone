import React from "react";
import { AppContainer, Main } from "./AppStyle";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CurrencyList } from "./pages/CurrencyList/CurrencyList";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <CurrencyList />
      </Main>
      <Footer />
    </AppContainer>
  );
};

export { App };
