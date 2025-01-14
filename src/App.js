import { Routes, Route } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { OnShopList } from "./onShopList";
import { OnStockList } from "./onStockList";
import { TotalSoldList } from "./soldList";
import { SpecialOffer } from "./specialOffer";
import { products } from "./products";
import { useState } from "react";
import { ShoppingCart } from "./shoppingCart";

function App() {
  const [active, setActive] = useState(false);
  const [activeProduct, setActiveProduct] = useState("");
  const [soldProducts, setSoldProducts] = useState([]);
  const [updatedProductsList, setUpdatedProductLIst] = useState(products);
  const [totalSold, setTotalSold] = useState([]);

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

  const soldStuff = (item) => {
    setTotalSold((prevItem) => [...prevItem, ...item]);
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
        <Route
          path="/TotalSoldList"
          element={<TotalSoldList totalSold={totalSold} />}
        />
        <Route path="/SpecialOffer" element={<SpecialOffer />} />
      </Routes>
      <ShoppingCart
        active={active}
        setActive={setActive}
        soldProducts={soldProducts}
        setSoldProducts={setSoldProducts}
        soldStuff={soldStuff}
      />
      <Footer />
    </div>
  );
}

export default App;
