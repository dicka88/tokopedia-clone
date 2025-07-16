import Link from 'next/link'
import { useRouter } from 'next/router'

function Register() {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="w-full mb-4">
          <div className="flex justify-between items-center">
            <div>
              <button className="p-4" onClick={() => router.back()}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--N500, #52565E)"><path d="M20 11H5.39l5.3-5.29a1.004 1.004 0 00-1.42-1.42l-7.1 7.1a1 1 0 000 1.42l7.1 7.1a1 1 0 00.71.29.998.998 0 00.71-1.71L5.19 13H20a1 1 0 100-2z"></path></svg>
              </button>
            </div>
            <div className="w-full">
              <span className="font-bold">Daftar</span>
            </div>
            <div className="p-4">
              <Link href="/register">
                <a className="text-green-500">Masuk</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full p-4">
          <div className="h-full">
            <div className="text-gray-400">Nama Lengkap</div>
            <input type="text" className="w-full border-b mb-4" />
            <div className="text-gray-400">Nomor HP atau Email</div>
            <input type="text" className="w-full border-b mb-4" />
            <div className="text-right my-2">
            </div>
            <div>
              <button className="px-4 py-3 w-full rounded-lg bg-gray-200 text-gray-400 text-center text-lg font-bold">
                Selanjutnya
              </button>
            </div>
            <div className="my-4 text-center text-gray-400">
              atau masuk dengan
            </div>
            <div>
              <button className="px-4 py-3 w-full rounded-lg border-gray-300 border text-gray-400 text-center text-lg font-bold">
                Metode Lain
              </button>
            </div>
            <div className="my-4 text-center text-gray-400">
              Sudah punya akun?
              <Link href="/register">
                <a className="text-green-500">Daftar</a>
              </Link>
            </div>
          </div>
          <div className="mt-auto text-center">
            <span>Butuh bantuan ?
              <Link href="/care">
                <a className="text-green-500">Hubungi Tokopedia Care</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register