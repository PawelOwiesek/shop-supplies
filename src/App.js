import { Routes, Route } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { OnShopList } from "./onShopList";
import { OnStockList } from "./onStockList";
import { SoldList } from "./soldList";
import { SpecialOffer } from "./specialOffer";
import { products } from "./products";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [activeProduct, setActiveProduct] = useState("");
  const [soldProducts, setSoldProducts] = useState([]);
  const [updatedProductsList, setUpdatedProductLIst] = useState(products);

  const onButtonBuyClick = (id) => {
    const activeProduct = products.find((product) => product.id === id);
    setActiveProduct(activeProduct);
    setActive(true);
    setSoldProducts([...soldProducts, activeProduct]);
    setUpdatedProductLIst((prevList) => [
      ...prevList.slice(0, id - 1),
      {
        ...prevList[id - 1],
        quantity: prevList[id - 1].quantity - 1,
      },
      ...prevList.slice(id),
    ]);
  };

  return (
    <div>
      <Header active={active} setActive={setActive} />
      <Routes>
        <Route
          path="/"
          element={
            <OnShopList
              products={products}
              updatedProductsList={updatedProductsList}
              active={active}
              setActive={setActive}
              onButtonBuyClick={onButtonBuyClick}
              activeProduct={activeProduct}
              soldProducts={soldProducts}
              setSoldProducts={setSoldProducts}
            />
          }
        />
        <Route path="/OnStockList" element={<OnStockList />} />
        <Route path="/SoldList" element={<SoldList />} />
        <Route path="/SpecialOffer" element={<SpecialOffer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
