import {Route, Routes} from "react-router-dom";
import GBNavigation from "./Navigation";
import Home from "./Home";
import Account from "./Account";
import Search from "./Search";
import Details from "./Details";

export default function Geekbook() {
  return (
    <div className="geekbook">
      <GBNavigation>
        <div className="gb-main-content-offset p-3">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Account" element={<Account />} />
            <Route path="Search" element={<Search />} />
            <Route path="Details/:id" element={<Details />} />
          </Routes>
        </div>
      </GBNavigation>
    </div>
  );
}
