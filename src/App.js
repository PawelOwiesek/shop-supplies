import { Routes, Route } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { OnShopList } from "./onShopList";
import { OnStockList } from "./onStockList";
import { SoldList } from "./soldList";
import { SpecialOffer } from "./specialOffer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<OnShopList />} />
        <Route path="/OnStockList" element={<OnStockList />} />
        <Route path="/SoldList" element={<SoldList />} />
        <Route path="/SpecialOffer" element={<SpecialOffer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
