import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";

export default function Home() {
  // TODO: Implement search component
  // TODO: Implement product list component
  return (
    <>
      <h1 className="title">VINISSIMUS</h1>
      <hr />
      <Search />
      <ProductList />
    </>
  )
}
