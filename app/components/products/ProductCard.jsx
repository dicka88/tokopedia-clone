import Link from 'next/link'

function productCard({ thumbnail, link, title, flashSale, discount, price, priceDiscount, sellerCity, rating, sold }) {
  return (
    <Link href={link}>
      <a>
        <div className="card rounded-xl overflow-hidden shadow pb-4 bg-white" style={{ maxWidth: '140px', minWidth: '140px' }}>
          <div className="w-full">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="p-2">
            <p className="font-light leading-5 mb-1 overflow-ellipsis" style={{ fontSize: '0.9em' }}>{title}</p>
            <div className="flex" style={{ fontSize: '0.7em' }}>
              {discount > 0 &&
                <>
                  <span className="p-0\.5 px-1 font-bold mr-1 rounded text-red-500 bg-red-50">{discount}%</span>
                  <span className="text-gray-500 line-through">{priceDiscount}</span>
                </>
              }
            </div>
            <span className="font-bold mb-4">{price}</span>
            <div className="flex items-center overflow-hidden align-middle mb-2">
              <img src="/images/category/official-store.png" alt="" className="mr-1"
                style={{ height: '13px', width: '13px' }} />
              <span className="text-gray-400 text-xs">{sellerCity}</span>
            </div>
            {
              flashSale
                ?
                <div className="flex">
                  <img className="mr-1"
                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/9527c778.svg"
                    style={{ height: '13px', width: '13px' }} alt="" />
                  <span className="text-gray-400 text-xs">{rating} | Terjual {sold}</span>
                </div>
                :
                <div className="block">
                  <div className="block w-full bg-red-600 relative rounded-lg" style={{ height: '3px' }}>
                    <svg className="inline-block absolute -right-2 -top-2" viewBox="0 0 24 24" width="16" height="16" fill="var(--Y400, #FF8B00)"><path d="M19.9 14c0-3.2-1.5-6.7-2.3-8.2-.3-.5-1-.7-1.5-.3-.5.4-1.1.9-1.6 1.3-1-1-2.1-3.1-3-4.4-.3-.4-.9-.6-1.4-.3-1.8 1.2-5.5 5.3-6 10.6-.3 3.3 1.2 6.3 3.6 8 0 0-1.6-4.9.4-9.7.2-.4.8-.3.8.2-.1 3.5.5 10.6 6.1 10.2 3-.4 4.9-4 4.9-7.3V14z"></path></svg>
                  </div>
                  <span className="text-red-600 font-bold text-sm">Segera Habis</span>
                </div>
            }
          </div>
        </div>
      </a>
    </Link>
  )
}

export default productCard