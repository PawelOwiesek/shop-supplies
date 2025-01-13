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
      <OnShopList />
      <OnStockList />
      <SoldList />
      <SpecialOffer />
      <Footer />
    </div>
  );
}

export default App;
