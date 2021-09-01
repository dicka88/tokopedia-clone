import link from "next/link"
import { useRouter } from "next/router"

function topbarWithBack({ title, backLink = '/' }) {
  const router = useRouter()

  return (
    <div className="sticky top-0">
      <div className="flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <button className="p-4" onClick={() => router.push(backLink)}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--N500, #52565E)" ><path d="M20 11H5.39l5.3-5.29a1.004 1.004 0 00-1.42-1.42l-7.1 7.1a1 1 0 000 1.42l7.1 7.1a1 1 0 00.71.29.998.998 0 00.71-1.71L5.19 13H20a1 1 0 100-2z"></path></svg>
          </button>
          <h1 className="font-bold text-xl block">{title}</h1>
        </div>
        <div className="p-4">
          <button>
            <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/485aef89.svg?ect=4g" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default topbarWithBack