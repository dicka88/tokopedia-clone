import Link from 'next/link'
import { useRouter } from 'next/router'

function BottomBar() {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <div id="bottom-navbar" className="fixed bottom-0 flex border justify-around bg-white w-full p-1 z-10">
      <div className="text-center w-full">
        <Link href="/">
          <a>
            <img src={currentPath == '/' ? "/images/bottombar/home.active.svg" : "/images/bottombar/home.svg"} className="mx-auto block" width="25px" height="25px" alt="" />
            <span className="text-xs text-gray-500">Home</span>
          </a>
        </Link>
      </div>
      <div className="text-center w-full">
        <Link href="/feeds">
          <a>
            <img src={currentPath == '/feeds' ? "/images/bottombar/feed.active.svg" : "/images/bottombar/feed.svg"} className="mx-auto block" width="25px" height="25px" alt="" />
            <span className="text-xs text-gray-500">Feed</span>
          </a>
        </Link>
      </div>
      <div className="text-center w-full">
        <Link href="/official-store">
          <a>
            <img src={currentPath == '/official-store' ? "/images/bottombar/offical-store.active.svg" : "/images/bottombar/offical-store.svg"} className="mx-auto block" width="25px" height="25px" alt="" />
            <span className="text-xs text-gray-500">Offical Store</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

module.exports = BottomBar;