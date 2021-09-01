import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useEffect } from 'react/cjs/react.development';

function postSection() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1100)

  if (isLoading) return (
    <div className="mx-4">
      {
        [...new Array(5)].map((item, i) =>
          <div className="mb-2" key={i}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Skeleton className="mr-2" circle height={25} width={25} />
                <Skeleton height={15} width={150} />
              </div>
              <Skeleton height={20} width={20} />
            </div>
            <Skeleton height={250} />
          </div>
        )
      }
    </div >
  )

  return (
    <section className="mb-4 mx-4">
      {[...new Array(10)].map((item, i) =>
        <div className="mb-4" key={i}>
          <div className="flex justify-between">
            <div>
              <img className="inline-block rounded-full mr-2" style={{ height: '30px' }} src="https://images.tokopedia.net/img/cache/215-square/shops-1/2020/6/15/8714000/8714000_d6082202-94c6-4a32-84ee-375fc90a0407.jpg.webp" alt="" />
              <span className="font-bold">Supplier Termurah Official</span>
            </div>
            <button>
              <svg className="inline-block align-middle" viewBox="0 0 24 24" width="24" height="24" fill="var(--color-icon-enabled, #525867)">
                <path d="M12 14a2 2 0 100-4 2 2 0 000 4zM19 14a2 2 0 100-4 2 2 0 000 4zM5 14a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <div className="mb-4">
              <img src="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/c6d85d30-daa1-4f5b-90b2-fb5ed542b4be.jpg.webp" alt="" className="w-full rounded-lg" />
            </div>
            <div className="flex justify-between mb-2">
              <button>
                <svg className="inline-block align-middle" viewBox="0 0 24 24" width="24" height="24" fill="var(--G500, #03AC0E)" ><path fillRule="evenodd" clip-rule="evenodd" d="M13.511 8.568h4.392c1.713 0 3.1 1.387 3.1 3.087 0 1.074-.516 2.012-1.373 2.556l-.53 4.175c-.136 1.563-1.469 2.774-3.087 2.774H8.018a2.002 2.002 0 01-2-2v-6.404c0-.15.028-.299.096-.435l1.999-4.08V4.503c0-.421.177-.83.49-1.115.299-.272.72-.421 1.142-.38 3.114.285 3.766 2.42 3.766 4.16v1.401zM3 13.164c0-.557.449-1.006 1.006-1.006.558 0 1.006.449 1.006 1.006v7.003c0 .557-.448 1.006-1.006 1.006A1.004 1.004 0 013 20.167v-7.003z"></path></svg>
              </button>
              <button>
                <svg className="inline-block align-middle" viewBox="0 0 24 24" width="24" height="24" fill="var(--color-icon-enabled, #525867)"><path d="M18.28 14.6a3.16 3.16 0 00-2.43 1.15l-6.43-3.39a3.43 3.43 0 00.06-.56 2.67 2.67 0 00-.07-.64l6.69-3.07a3.05 3.05 0 002.18.91 3.2 3.2 0 10-3.2-3.12c0 .15.05.3.08.44l-6.7 3.07h-.05a3.22 3.22 0 00-5.33 2.49A3.28 3.28 0 006.28 15a3.18 3.18 0 002.19-.88l6.64 3.5A3.28 3.28 0 0018.28 21a3.2 3.2 0 100-6.4zm0-10a1.2 1.2 0 010 2.4 1.29 1.29 0 01-1.2-1.2 1.22 1.22 0 011.2-1.2zm-12 8.4a1.29 1.29 0 01-1.2-1.2 1.2 1.2 0 111.2 1.2zm12 6a1.29 1.29 0 01-1.2-1.2 1.2 1.2 0 111.2 1.2z"></path></svg>
              </button>
            </div>
            <p>
              <span className="font-bold">Supplier Termurah Official</span> Kadang kita butuh sesuatu yang baru untuk hidup lebih maju. Ribuan barang ditoko kami siap bantu keperluan kamu.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default postSection