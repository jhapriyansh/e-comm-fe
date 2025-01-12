import React, { useEffect, useState } from "react";
import "./App.css";

const E_COMM_NSCC_PROJECT_KEY = "E_COMM_NSCC_PROJECT_KEY";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pomegranate",
      cost: 100,
      qty: 0,
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Pineapple",
      cost: 150,
      qty: 0,
      img: "https://images.pexels.com/photos/4195527/pexels-photo-4195527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Cream",
      cost: 300,
      qty: 0,
      img: "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Camera",
      cost: 4000,
      qty: 0,
      img: "https://images.pexels.com/photos/3802602/pexels-photo-3802602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      name: "Lemon",
      cost: 50,
      qty: 0,
      img: "https://images.pexels.com/photos/4197824/pexels-photo-4197824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "Cherry",
      cost: 99,
      qty: 0,
      img: "https://images.pexels.com/photos/5218037/pexels-photo-5218037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      name: "Banana",
      cost: 70,
      qty: 0,
      img: "https://images.pexels.com/photos/4114144/pexels-photo-4114144.jpeg",
    },
    {
      id: 8,
      name: "Donut",
      cost: 200,
      qty: 0,
      img: "https://images.pexels.com/photos/7474254/pexels-photo-7474254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);

  const [emptyCart, setEmptyCart] = useState(false);

  const fetchLocalStorage = () => {
    const localData = localStorage.getItem(E_COMM_NSCC_PROJECT_KEY);
    if (localData) {
      setProducts(JSON.parse(localData));
    }
  };

  useEffect(() => {
    fetchLocalStorage();
  }, []);

  useEffect(() => {
    let totalProds = 0;
    Array.from(products)?.map((p) => (totalProds += p?.qty));
    if (totalProds) {
      setEmptyCart(false);
    } else {
      setEmptyCart(true);
    }
  }, [products]);

  const updateItem = (id, action) => {
    const productsData = Array.from(products);
    action === "add"
      ? productsData?.map((p) => (p?.id === id ? { ...p, qty: p.qty++ } : p))
      : productsData?.map((p) => (p?.id === id ? { ...p, qty: p.qty-- } : p));
    setProducts(productsData);
    localStorage.setItem(E_COMM_NSCC_PROJECT_KEY, JSON.stringify(productsData));
  };

  const resetCart = () => {
    setProducts([
      {
        id: 1,
        name: "Pomegranate",
        cost: 100,
        qty: 0,
        img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 2,
        name: "Pineapple",
        cost: 150,
        qty: 0,
        img: "https://images.pexels.com/photos/4195527/pexels-photo-4195527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 3,
        name: "Cream",
        cost: 300,
        qty: 0,
        img: "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 4,
        name: "Camera",
        cost: 4000,
        qty: 0,
        img: "https://images.pexels.com/photos/3802602/pexels-photo-3802602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 5,
        name: "Lemon",
        cost: 50,
        qty: 0,
        img: "https://images.pexels.com/photos/4197824/pexels-photo-4197824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 6,
        name: "Cherry",
        cost: 99,
        qty: 0,
        img: "https://images.pexels.com/photos/5218037/pexels-photo-5218037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 7,
        name: "Banana",
        cost: 70,
        qty: 0,
        img: "https://images.pexels.com/photos/4114144/pexels-photo-4114144.jpeg",
      },
      {
        id: 8,
        name: "Donut",
        cost: 200,
        qty: 0,
        img: "https://images.pexels.com/photos/7474254/pexels-photo-7474254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ]);
    localStorage.removeItem(E_COMM_NSCC_PROJECT_KEY);
  };

  const total = () => {
    let totalCost = 0;
    products?.map((e) => {
      return (totalCost += e?.qty * e?.cost);
    });
    return totalCost;
  };

  return (
    <div className="main_cont">
      <div className="title">NSCC SHOP</div>
      <hr />
      <div style={{ textAlign: "center" }} className="prodCat">
        OUR PRODUCT CATALOGUE
      </div>
      <div className="prods">
        {products?.map((prod, index) => (
          <div key={index} className="prodCard">
            <img className="card-img" src={prod?.img} alt="" />
            <div className="prodInfo">
              <div className="prodName">{prod.name}</div>
              <p className="prodCost">{" $" + prod?.cost}</p>
              <button
                className="cartBtn"
                onClick={() => {
                  updateItem(prod?.id, "add");
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart">
        <p style={{ textAlign: "center", textDecoration: "underline" }}>
          My Cart
        </p>
        <div
          className="emptyCart"
          style={{ display: emptyCart ? "block" : "none" }}
        >
          Your cart is empty :(
        </div>
        {products?.map((prod) => (
          <div className="singleProducts" key={prod?.id}>
            {prod?.qty > 0 && (
              <>
                <span>{`${prod?.name}  $${prod?.cost}`}</span>
                <button
                  className="addCart"
                  onClick={() => {
                    updateItem(prod?.id, "rem");
                  }}
                >
                  -
                </button>
                <span>{prod?.qty}</span>
                <button
                  className="remCart"
                  onClick={() => {
                    updateItem(prod?.id, "add");
                  }}
                >
                  +
                </button>
              </>
            )}
          </div>
        ))}
        <p>My Total</p>
        <div className="tot">
          <p className="cost">{"$" + total()}</p>
          <button className="resCart" onClick={resetCart}>
            Reset Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
