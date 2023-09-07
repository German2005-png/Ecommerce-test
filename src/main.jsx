import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {App, Navegation} from './App.jsx'
import './index.css'
import {products} from '../products.json';
import Cookies from 'js-cookie';
function Content(){
  const [allProduct, setallProduct] = useState([]);
  const [contador, setcontador] = useState(0);
  const [coutproduct, setcoutproduct] = useState(0);
  return(
    <>
      <Navegation allProduct={allProduct} setallProduct={setallProduct} contador={contador} setcontador={setcontador} coutproduct={coutproduct} setcoutproduct={setcoutproduct}/>
      <main>
      <div className='content'>
        <App Products={products} allProduct={allProduct} setallProduct={setallProduct} contador={contador} setcontador={setcontador} coutproduct={coutproduct} setcoutproduct={setcoutproduct}/>
      </div>
      </main>
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
)