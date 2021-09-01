import Link from 'next/link'

function ProductCardMore({ link }) {
  return (
    <Link href={link}>
      <a className="pr-5">
        <div className="bg-white rounded-xl shadow pb-4 h-full" style={{ maxWidth: '140px', minWidth: '140px' }}>
          <div className="flex justify-center h-full items-center">
            <div className="px-4 text-xs text-center">
              <img className="mx-auto" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/69dbc796.svg" alt="" />
              <span className="text-green-500 font-bold">Lihat Produk Lainnya</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductCardMore