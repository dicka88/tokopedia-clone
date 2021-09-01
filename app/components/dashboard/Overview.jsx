import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import { useState } from 'react'

function overview() {
  const [isLoaded, setIsloaded] = useState(false)

  setTimeout(() => {
    setIsloaded(true)
  }, 1500)

  if (!isLoaded) {
    return (
      <div className="mx-4 -mt-10">
        <div className="rounded-lg bg-white shadow-md">
          <div className="flex flex-wrap p-2">
            {
              [...new Array(4)].map((it, i) =>
                <div className="w-1/2" key={i}>
                  <div className="flex items-center">
                    <div className="mr-2">
                      <Skeleton circle height={20} width={20} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <Skeleton height={10} width={100}></Skeleton>
                      <Skeleton height={7} width={70}></Skeleton>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className="mx-4 -mt-10">
      <div className="rounded-lg bg-white shadow-md">
        <div className="flex flex-wrap p-2">
          <div className="w-1/2">
            <div className="flex items-center">
              <img src="/images/dashboard/f56a358c.png" className="mr-2" style={{ width: '20px', height: '20px' }}
                alt="" />
              <div>
                <span className="font-semibold block" style={{ fontSize: '12px' }}>Rp414.000</span>
                <a href="" className="text-green-500 block" style={{ fontSize: '12px' }}>Top-up OVO</a>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center">
              <img src="/images/dashboard/BebasOngkir.png" className="mr-2" style={{ width: '20px', height: '20px' }}
                alt="" />
              <div>
                <span className="font-semibold block" style={{ fontSize: '12px' }}>Bebas Ongkir</span>
                <span className="text-gray-400 block" style={{ fontSize: '12px' }}>3x Lagi</span>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center">
              <img src="/images/dashboard/tokopoints.png" className="mr-2" style={{ width: '20px', height: '20px' }}
                alt="" />
              <div>
                <span className="font-semibold block" style={{ fontSize: '12px' }}>Rp740.500</span>
                <span className="text-gray-400 block" style={{ fontSize: '12px' }}>(74.050 Points)</span>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center">
              <img src="/images/dashboard/kupon-saya.png" className="mr-2" style={{ width: '20px', height: '20px' }}
                alt="" />
              <div>
                <span className="font-semibold block" style={{ fontSize: '12px' }}>Kupon Saya</span>
                <span className="text-gray-400 block" style={{ fontSize: '12px' }}>14 Kupon Baru</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default overview