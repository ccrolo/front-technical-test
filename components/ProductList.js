import { useState, useEffect } from 'react'
import Product from "./Product";


export function ProductList(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=10')
      .then(res => res.json())
      .then(data => setProducts(data.products)
      )

  }, [])



  return (
    <>
      {/* TODO: List of products */}
      <form className='form'>
        <input className='form__elements' type='text' placeholder='Search product'></input>
        <button className='form__elements'>Search</button>
      </form>

      <div className='container'>
        {products.map((element, id) => <Product key={id} products={element} />)}
      </div>

      <button className='form__elements'>prev</button>
      <button className='form__elements'>next</button>
    </>
  )
}