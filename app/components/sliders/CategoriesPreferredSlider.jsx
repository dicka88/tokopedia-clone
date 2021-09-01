import Link from 'next/link'

function categoriesPreferredSldier({title, link, data}) {
  return (
    <>
      <div className="mx-4">
        <div className="flex justify-between mb-4">
          <h1 className="font-bold" style={{ fontSize: '1.1em' }}>{title}</h1>
          <Link href={link}>
            <a className="font-bold text-green-500">Lihat Semua</a>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto disable-scrollbars">
        <div className="flex pl-4 pb-2" style={{ flexFlow: 'column wrap', maxHeight: '410px' }}>
          {data.map(({title, image, link}, index) => 
            <div className={ `item mr-2 mb-2 ${index === data.length - 1 ? 'pr-4' : ''}` } key={index}>
              <Link href={link}>
                <a>
                  <div style={{width: '100px' }}>
                    <img className="rounded-t-lg" src={image} alt="" />
                    <div className="text-center rounded-b-lg border-b border-r py-1 border-l flex justify-center items-center overflow-ellipsis overflow-hidden"
                      style={{ height: '55px' }}>
                      <span className="text-gray-500 font-bold text-sm">{title}</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default categoriesPreferredSldier;