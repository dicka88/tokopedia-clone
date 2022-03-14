import Link from 'next/link';
import { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import Skeleton from 'react-loading-skeleton';

function liveStreamSection() {
  const [time, setTime] = useState(0);

  setTimeout(() => {
    setTime(1);
  }, 800);

  if (!time) return (
    <div className="my-4">
      <div className="mx-4 flex justify-between">
        <Skeleton width={120}></Skeleton>
        <Skeleton width={100}></Skeleton>
      </div>
      <div className="flex pl-4">
        <div className="pr-2">
          <Skeleton width={110} height={150}></Skeleton>
        </div>
        <div className="pr-2">
          <Skeleton width={110} height={150}></Skeleton>
        </div>
        <div className="pr-2">
          <Skeleton width={110} height={150}></Skeleton>
        </div>
      </div>
    </div>
  );

  return (
    <section className="mt-4" >
      <div className="flex mx-4 mb-2 justify-between">
        <h2 className="font-bold text-lg text-gray-700">Nonton yang seru-seru</h2>
        <Link href="/nonton">
          <a className="text-green-600 font-bold">Lihat Semua</a>
        </Link>
      </div>
      <div className="overflow-x-auto disable-scrollbars ">
        <ScrollContainer vertical={false}>
          <div className="pb-4">
            <div className="flex pl-2">
              {
                [...new Array(5)].map(i =>
                  <div className="ml-2 cursor-pointer" key={i}>
                    <div className="bg-gray-200 rounded-lg relative" style={{ width: '110px', height: '150px' }}>
                      <img className="object-cover rounded-lg h-full w-full" src="https://images.tokopedia.net/img/cache/144/jJtrdn/2021/8/21/d1d48433-ccd4-4227-806c-f7da3cccb628.png?b=UIPP.UM%7C.SxC-%3BoeRkWC.Tn%24DiX9MxR%2B%25Mt6.webp" alt="" />
                      <div className="absolute top-0 rounded-lg overlay w-full h-full bg-gradient-to-b from-white to-gray-900 opacity-50"></div>
                      <div className="absolute top-0 flex flex-col h-full p-2 pb-4">
                        <div>
                          <div className="rounded-md inline-block overflow-hidden opacity-90">
                            <div className="flex items-center">
                              <div className="bg-red-400 text-white align-middle p-1 font-bold" style={{ fontSize: '6px' }}>
                                <span className="text-xs">LIVE</span>
                              </div>
                              <div className="bg-gray-500 text-white align-middle p-1 font-bold" style={{ fontSize: '6px' }}>
                                <span className="text-xs">12</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-auto">
                          <span className="font-bold text-white">
                            Tanaman Murah Mulai 500 Perak
                          </span>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 text-center w-full">
                        <span className="bg-red-500 rounded-md p-1 text-xs text-white">
                          Kupon Spesial
                        </span>
                      </div>
                    </div>
                  </div>
                )
              }
              <div className={`ml-2 pr-4`}>
                <Link href="/live">
                  <a>
                    <div className="bg-gray-200 rounded-lg relative" style={{ width: '110px', height: '150px' }}>
                      <img className="object-cover h-full w-full" src="https://ecs7.tokopedia.net/play/widget-banner-small.webp" alt="" />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </ScrollContainer>
      </div>
    </section >
  );
}

export default liveStreamSection;