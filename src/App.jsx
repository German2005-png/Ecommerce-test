import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cookie from "js-cookie";
import "./App.css";
export function App({ Products, allProduct, setallProduct, contador, setcontador, coutproduct, setcoutproduct }) {
  function onSendProduct(product) {
    if(allProduct.find(prd => prd.id === product.id)) {
      const products = allProduct.map(e => 
        e.id === product.id
        ? { ...e, unidad: e.unidad + 1 } 
        : e
      );
      setcontador(contador + product.unidad)
      setcoutproduct(coutproduct + product.precio)
      return setallProduct([...products]);
    }
     setallProduct([...allProduct, product]);
     setcontador(contador + product.unidad)
     setcoutproduct(coutproduct + product.precio)
  }
  return (
    <>
      {Products.map((product) => (
        <article key={product.id} className="cont-art">
          <img src={product.url} alt="" />
          <div className="cont-title">
            <h3>{product.title}</h3>
          </div>
          <h1>${product.precio}</h1>
          <button onClick={() => onSendProduct(product)}>
            Agregar al carrito
          </button>
        </article>
      ))}
    </>
  );
}
export function Navegation({ allProduct, setallProduct, contador, setcontador ,coutproduct, setcoutproduct }) {
  const [fe, setfe] = useState(false);
  function onDeleteProduct(product){
    const fef = allProduct.filter(e => e.id !== product.id)
    setcontador(contador - product.unidad)
    setcoutproduct(coutproduct - (product.precio * product.unidad))
    setallProduct(fef)
  }
  return (
    <>
      <nav className="navegation" id="d">
        <h2>Shopping cart</h2>
        <div className="cart-btn">
          <button onClick={() => setfe(!fe)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
              />
            </svg>
          </button>
        </div>
        <div className={`flex-contCart ${fe ? "" : "fe"}`}>
          <div className="contentCart" id="contentCart">
            <h3>Cart</h3>
            <ul className="flex-products">
              {allProduct.length ? (
                <>
                  <div>
                  {allProduct.map(product => (
                  <>
                    <li key={product.id}>
                    <p>{product.unidad}</p>
                    <h4 title={product.title}>{product.title}</h4>
                    <p title={product.precio}>${product.precio}</p>
                    <button className="x" onClick={()=>{onDeleteProduct(product)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="black" d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326a.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042L6.94 8L3.72 4.78a.75.75 0 0 1 0-1.06Z"/></svg></button>
                  </li>
                  </>
                  ))}
                  <div className="flex-value">
                  <div className="value1">
                    <p>Units</p>
                    <h3>{contador}</h3>
                  </div>
                  <div className="value2">
                    <p>Price</p>
                    <h3>${coutproduct}</h3>
                  </div>
                  </div>
                  <button className="btn-buy">Buy</button>
                  </div>
                </>
              ) : (
                <li>No hay productos</li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
