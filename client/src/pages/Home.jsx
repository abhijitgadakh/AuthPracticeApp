import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils/utils";

function Home() {
  const [user, setUser] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setUser(localStorage.getItem("loggedInUserName"));
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const url = "http://localhost:8080/products";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    setProducts(data);
  };

  const handleLogout = () => {
    handleSuccess("Logging you out...");
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUserName");
    localStorage.removeItem("loggedInUserEmail");
    localStorage.removeItem("loggedInUserId");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="home-container">
      <div className="greeting">
        Hello, <span className="username">{user}</span>
      </div>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((p, i) => (
            <div key={i} className="product-item">
              <span className="product-name">{p.name}</span>
              <span className="product-price">${p.price}</span>
            </div>
          ))
        ) : (
          <p className="no-products">No products available</p>
        )}
      </div>
      <button className="btn-logout" onClick={handleLogout}>
        Logout
      </button>
      <ToastContainer />
    </div>
  );
}

export default Home;
