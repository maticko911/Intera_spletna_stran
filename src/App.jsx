import React, { useState } from "react";
import ButtonGradiant from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefit from "./components/Benefit";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import NewAccount from "./components/NewAccount";

const App = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isNewAccountOpen, setIsNewAccountOpen] = useState(false);

  const openSignIn = () => setIsSignInOpen(true);
  const closeSignIn = () => setIsSignInOpen(false);

  const openNewAccount = () => setIsNewAccountOpen(true);
  const closeNewAccount = () => setIsNewAccountOpen(false);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header openSignIn={openSignIn} openNewAccount={openNewAccount} />
        <Hero />
        <Benefit />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradiant />
      {isSignInOpen && <SignIn closeModal={closeSignIn} />}
      {isNewAccountOpen && <NewAccount closeModal={closeNewAccount} />}
    </>
  );
};

export default App;
