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
  const [updatedProductsList, setUpdatedProductList] = useState(products);
  const [totalSold, setTotalSold] = useState([]);

  const findActiveProduct = (id) => {
    return products.find((product) => product.id === id);
  };

  const updateProductQuantity = (id) => {
    setUpdatedProductList((prevList) => [
      ...prevList.slice(0, id - 1),
      {
        ...prevList[id - 1],
        quantity: prevList[id - 1].quantity - 1,
      },
      ...prevList.slice(id),
    ]);
  };

  const addToSoldProducts = (product) => {
    setSoldProducts((prevSoldProducts) => [...prevSoldProducts, product]);
  };

  const openCart = () => {
    setActive(true);
  };

  const onButtonBuyClick = (id) => {
    const activeProduct = findActiveProduct(id);
    setActiveProduct(activeProduct);
    openCart();
    addToSoldProducts(activeProduct);
    updateProductQuantity(id);
  };

  const soldStuff = (item) => {
    setTotalSold((prevItem) => [...prevItem, ...item]);
  };

  return (
    <div>
      <>
        <Header active={active} setActive={setActive} />
        <Routes>
          <Route
            path="/"
            element={
              <OnShopList
                updatedProductsList={updatedProductsList}
                active={active}
                onButtonBuyClick={onButtonBuyClick}
              ></OnShopList>
            }
          />
          <Route
            path="/OnStockList"
            element={
              <OnStockList
                updatedProductsList={updatedProductsList}
                setUpdatedProductList={setUpdatedProductList}
              />
            }
          />
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
      </>
    </div>
  );
}

export default App;
