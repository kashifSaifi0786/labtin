import React from "react";
import "./PakagesTab.css";
import LabTestCards from "../components/LabTestCards";
import PakagesCard from "../components/PakagesCard";
import Data from "../testData/individual.json";
import InSlider from "../components/InSlider";
const PakagesTab = () => {
  const indivualData = Data.Individualdata;
  const pakageData = Data.PakagesData;

  const individualTestDiv = indivualData.map((data, index) => {
    return (
      <div key={"bCard " + data.heading + index}>
        <LabTestCards
          heading={data.heading}
          requirement={data.requirement}
          offPercentage={data.offPercentage}
          description={data.description}
          previousPrice={data.previousPrice}
          currentPrice={data.currentPrice}
          diagnostics={data.diagnostics}
        />
      </div>
    );
  });
  const pakageTestDiv = pakageData.map((data, index) => {
    return (
      <div key={"bCard " + data.heading + index}>
        <PakagesCard
          heading={data.heading}
          requirement={data.requirement}
          description={data.description}
          previousPrice={data.previousPrice}
          currentPrice={data.currentPrice}
        />
      </div>
    );
  });
  const handleClick = (e: any) => {
    e.preventDefault();

    const tabbed: any = document.querySelector(".tabbed");
    const tablist = tabbed.querySelector("ul");
    const tabs = tablist.querySelectorAll("a");
    const panels = tabbed.querySelectorAll('[id^="section"]');
    const switchTab = (oldTab: any, newTab: any) => {
      newTab.focus();
      // Make the active tab focusable by the user (Tab key)
      newTab.removeAttribute("tabindex");
      // Set the selected state
      newTab.setAttribute("aria-selected", "true");
      oldTab.removeAttribute("aria-selected");
      oldTab.setAttribute("tabindex", "-1");
      // Get the indices of the new and old tabs to find the correct
      // tab panels to show and hide
      let index = Array.prototype.indexOf.call(tabs, newTab);
      let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
      panels[oldIndex].hidden = true;
      panels[index].hidden = false;
    };
    let currentTab = tablist.querySelector("[aria-selected]");
    if (e.currentTarget !== currentTab) {
      switchTab(currentTab, e.currentTarget);
    }
  };
  return (
    <div className="pakagesTab_div">
      <div className="third_section desktopElement">
        <InSlider />
      </div>
      <div className="tabPakage_main">
        <div className="tabbed">
          <ul role="tablist">
            <li role="presentation">
              <a
                href="#login"
                id="loginTab"
                role="tab"
                aria-selected={true}
                className="fromRight "
                onClick={handleClick}
              >
                Individual Tests
              </a>
            </li>
            <li role="presentation" className="noBorder">
              <a
                href="#register"
                id="registerTab"
                role="tab"
                tabIndex={-1}
                className="fromLeft"
                onClick={handleClick}
              >
                Packages
              </a>
            </li>
          </ul>
          <section id="sectionLogin" role="tabpanel" aria-labelledby="loginTab">
            {individualTestDiv}
          </section>
          <section
            id="sectionRegister"
            role="tabpanel"
            aria-labelledby="registerTab"
            hidden={true}
          >
            {pakageTestDiv}
          </section>
        </div>
      </div>
    </div>
  );
};

export default PakagesTab;
