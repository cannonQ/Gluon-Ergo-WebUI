import React, { useState } from "react";
import CardContainer from "./Common/CardContainer";
import {
  Fission as FissionTitle,
  Fusion as FusionTitle,
  TransmuteFromGold as TransmuteFromGold,
  TransmuteToGold as TransmuteToGold,
  Reactor as ReactorTitle,
  GAU_Stablecoin as gauStablecoinTitle,
  GAUC_Reservecoin as gaucReservecoinTitle
} from "./constant";
import { Fission } from "./Fission";
import { Fusion } from "./Fusion";
import TransumuteRsvToGold from "./TransumuteRsvToGold";
import TransumuteGoldToRsv from "./TransumuteGoldToRsv";

interface IProps {
  reactorActiveTab: string;
  setReactorActiveTab: (tab: string) => void;
}

const Reactor = (props: IProps) => {
  const { reactorActiveTab, setReactorActiveTab } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        {/* Menu for small screens (Hamburguer)*/}
        <TabButton title="Fission" reactorActiveTab={reactorActiveTab} setReactorActiveTab={setReactorActiveTab} />
        <TabButton title="Fusion" reactorActiveTab={reactorActiveTab} setReactorActiveTab={setReactorActiveTab} />
        <TabButton title="TransmuteToGold" reactorActiveTab={reactorActiveTab} setReactorActiveTab={setReactorActiveTab} />
        <TabButton title="TransmuteFromGold" reactorActiveTab={reactorActiveTab} setReactorActiveTab={setReactorActiveTab} />
      </div>
      <div className="reactor-nav-container">
          <h1 className="reactor-title">Gluon Reactor</h1>
          {/* Menu for larger screens */}
          <TabButton title="Fission" reactorActiveTab={reactorActiveTab} setReactorActiveTab={setReactorActiveTab} />
          <TabButton title="Fusion" reactorActiveTab={reactorActiveTab} setReactorActiveTab={setReactorActiveTab} />
          <TabButton title={gauStablecoinTitle} reactorActiveTab={reactorActiveTab} setReactorActiveTab={setReactorActiveTab} />
          <TabButton title={gaucReservecoinTitle} reactorActiveTab={reactorActiveTab} setReactorActiveTab={setReactorActiveTab} />
      </div>
      
      {reactorActiveTab === "Fission" && <Fission />}
      {reactorActiveTab === "Fusion" && <Fusion />}
      {reactorActiveTab === gauStablecoinTitle && <TransumuteGoldToRsv />}
      {reactorActiveTab === gaucReservecoinTitle && <TransumuteRsvToGold />}
    </>
  );
}

const TabButton = ({ title, reactorActiveTab, setReactorActiveTab }: { title: string, reactorActiveTab: string, setReactorActiveTab: (tab: string) => void }) => (
  <button
    onClick={() => setReactorActiveTab(title)}
    className={`reactor-tab-button ${reactorActiveTab === title ? 'active' : ''}`}
  >
    {title}
  </button>
);

export default Reactor;
