import * as React from "react";
import { Title } from "./Top/Title";
import { Topmenu } from "./Top/Topmenu";
import { Searchbar } from "./Top/Searchbar";
import { Screen } from "./Mid/Screen";
import { Screenfooter } from "./Mid/Screenfooter";
import { Leftmenu } from "./Right/Leftmenu";
import { Chat } from "./Right/Chat";

export const Main: React.SFC<{}> = () => {
  return (
    <div className="main-content">
      <div className="main-div">
        <div className="top">
          <div className="title-menu">
            <Title />
            <Topmenu />
          </div>
          <Searchbar />
        </div>
        <Screen />
        <Screenfooter />
      </div>
      <div className="left-panel">
        <Leftmenu />
        <Chat />
      </div>
    </div>
  );
};
