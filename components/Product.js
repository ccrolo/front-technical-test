export default function Product({ products }) {


  return (
    <>

      <div className="product__card">
        <div className="image">
          <img src={products.thumbnail}></img>
        </div>
        <div className="info">
          <p>{products.title}</p>
          <p>{products.price}€</p>
        </div>

      </div>

      {/* TODO */}
    </>
  )
}
