import ProductCard from "../products/ProductCard"
import ProductCardMore from "../products/ProductCardMore"
import Link from "next/link"

function productsSlider({title, link, data}) {
  return (
    <>
      <div className="mx-4">
        <div className="flex justify-between mb-4">
          <h1 className="font-bold" style={{fontSsize: '1.1em'}}>{title}</h1>
          <Link href={link}>
            <a className="font-bold text-green-500">Lihat Semua</a>
          </Link>
        </div>
      </div>
      <div className="overflow-x-scroll disable-scrollbars">
        <div className="flex h-full px-4 mr-4 pb-2">
          {data.map((product, i) => 
            <div key={i} className="item mr-2">
              <ProductCard {...product} />
            </div>
          )}
          <ProductCardMore link="/" />
        </div>
      </div>
    </>
  )
}

export default productsSlider