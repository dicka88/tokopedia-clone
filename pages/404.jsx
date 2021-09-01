import Link from 'next/link'
import { useRouter } from 'next/router'

import TopBarHeader from 'app/components/topbars/Main'

export default function custom404() {
  const router = useRouter()
  return (
    <>
      <TopBarHeader />
      <div style={{ height: '58px' }} />
      <div className="p-10">
        <div className="flex justify-center flex-col text-center">
          <div className="px-4">
            <img className="mb-5" src="https://ecs7.tokopedia.net/assets-unify/img/il-error-not-found.png" alt="" />
          </div>
          <div className="mb-4">
            <h1 className="text-xl font-bold">Waduh, tujuanmu nggak ada!</h1>
            <span className="text-md text-gray-400">Mungkin kamu salah jalan atau alamat. Ayo balik sebelum gelap!</span>
          </div>
          <div>
            <button onClick={() => router.back()} className="py-2 px-16 bg-green-500 rounded-lg text-white text-bold font-bold text-lg ">Ke Homepage</button>
          </div>
        </div>
      </div>
    </>
  )
}