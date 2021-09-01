import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const exploreList = [
  {
    storeName: 'Monorose cell',
    storeIcon: 'https://images.tokopedia.net/img/cache/215-square/shops-1/2019/11/8/7180822/7180822_6b8ea70c-155b-45e9-8e77-4099b89c58e7.jpg.webp',
    storeThumbnail: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/15/7180822/7180822_7897821a-9858-420e-8eff-0d7d79f4a129_531_531.jpg.webp',
    storeFeed: null
  }, {
    storeName: 'Snack n Stuff impor',
    storeIcon: 'https://images.tokopedia.net/img/cache/215-square/shops-1/2018/7/1/2491203/2491203_59302017-8670-4b4a-85c1-5e74caae8b43.jpg.webp',
    storeThumbnail: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2021/8/22/inv/inv_afdddd1d-e1a1-4667-af58-aaf87d6b6ef6.jpg.webp',
    storeFeed: "Keren ya jaket multi fungsi ini. Bisa dipakai untuk berolahraga (ada anti UV), acara santai bahkan untuk sekedar menahan hawa dingin ruangan 🌟👍 #jaket #airism #UVProtect #Uniqlo #original #LebihUntung"
  }, {
    storeName: 'Sukawati Art Olshop',
    storeIcon: 'https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/4/4/6b25f21b-79b9-491d-829f-4c756af2a354.png.webp',
    storeThumbnail: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2021/8/22/inv/inv_e73a4df6-2971-4920-aebe-59b4de222253.jpg.webp',
    storeFeed: null
  }, {
    storeName: 'Jam sepatu original JSO',
    storeIcon: 'https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/4/4/6b25f21b-79b9-491d-829f-4c756af2a354.png.webp',
    storeThumbnail: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2021/8/21/inv/inv_e3edf045-2d05-4420-9175-1e204043454e.jpg.webp',
    storeFeed: null
  }, {
    storeName: 'Lily Cellular',
    storeIcon: 'https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/4/4/6b25f21b-79b9-491d-829f-4c756af2a354.png.webp',
    storeThumbnail: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2021/8/19/inv/inv_cbcb578b-439a-4f9c-8221-d9aa54c42d00.jpg.webp',
    storeFeed: `eady For : 
    Xiaomi, Oppo, Vivo, Samsung, Realme & Iphone
    
    Grosir, Retail, Dropship Wellcome..`
  }, {
    storeName: 'DK Cell',
    storeIcon: 'https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/4/4/6b25f21b-79b9-491d-829f-4c756af2a354.png.webp',
    storeThumbnail: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2021/8/20/inv/inv_46e6d594-b990-45b2-bc31-5fc1f256ee75.jpg.webp',
    storeFeed: `#makarizo#pewarnarambut#catrambut#feedtoday#recomendedseller#haircare#perawatanrambut Ini nih yang paling banyak dicari!Tunggu apa lagi? Yuk, beli sekarangAda barang baru, lho! Buruan order, sebelum kehabisan!`
  }
]

function StoreCard({ data }) {
  return (
    <Link href={data.link || '/'}>
      <a>
        <div className="overflow-hidden rounded-lg pb-4 shadow-lg mb-2">
          <div className="mb-2">

            <img src={data.storeThumbnail} alt="" className="w-100" />
          </div>
          <div className="flex mb-2 p-2">
            <img className="rounded-full mr-2" src={data.storeIcon} alt="" style={{ weight: '25px', width: '25px' }} />
            <span className="font-bold text-sm">{data.storeName}</span>
          </div>
          <div className="px-2">
            <p className="overflow-hidden block overflow-ellipsis text-sm text-gray-500 " style={{ maxHeight: '40px' }}>{data.storeFeed}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

function navPill() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(false);

  const tabChange = i => {
    setActiveTab(i)
  }

  return (
    <div>
      <div className="overflow-x-auto mb-4">
        <div className="flex pt-2 pb-4 px-4">
          {
            [...new Array(5)].map((val, i) =>

              <div className={`mr-4 `}>
                <div className={`border overflow-hidden rounded-xl p-2 py-1 ${activeTab === i && 'bg-green-500 text-white'}`} onChange={() => tabChange(i)} style={{ maxWidth: '130px' }}>
                  <span className="text-gray-500 block whitespace-nowrap overflow-hidden overflow-ellipsis ">Perawatan Kulit & Makanan</span>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className="mx-4">
        <div className="flex">
          <div className="w-1/2 px-1">
            {
              exploreList.map((item, i) =>
                <StoreCard key={i} data={item} />
              )
            }
          </div>
          <div className="w-1/2 px-1">
            {
              exploreList.reverse().map((item, i) =>
                <StoreCard key={i} data={item} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default navPill