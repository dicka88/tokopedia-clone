import Link from 'next/link'

function smallBannerCards({title, data}) {
  return (
    <div className="mx-4">
      <div className="mb-4">
        <h1 className="font-bold" style={{fontSize: '1.1em' }}>{title}</h1>
      </div>
      <div className="flex flex-wrap">
        {data.map(({image, link}, i) => 
          <div key={i} className="w-1/2">
            <div className="mr-2 mb-2">
              <Link href={link}>
                <a>
                  <img src={image} alt=""
                    className="rounded-lg" />
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default smallBannerCards