import Link from 'next/link'

function categoriesSlider({ data, ...props }) {
  return (
    <div className="overflow-auto disable-scrollbars">
      <div className="flex px-4 mr-4 pr-4">
        {data.map(({ link, image, title }, index) => (
          <div className={`flex-nowrap mx-1 ${index == data.length - 1 ? 'pr-4' : ''}`} key={index}>
            <Link href={link}>
              <a>
                <div className="flex justify-center pb-2" style={{ maxWidth: '48px', minWidth: '48px' }}>
                  <img style={{ width: '68%' }} className="w-full" src={image} alt="" />
                </div>
                <p className="text-xs text-center text-gray-500">{title}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default categoriesSlider