import {Swiper, SwiperSlide} from 'swiper/react'
import Link from 'next/link'

function bannerSlider({data, ...props}) {
  return (
    <Swiper
      spaceBetween={10}
      direction="horizontal"
      loop={false}
      speed={700}
      delay={3000}
      autoplay
      centeredSlides
      grabCursor
      slidesPerView={1.1}>
        {data.map(({image, link}, i) =>
          <SwiperSlide key={i}>
            <Link href={link}>
              <a>
                <img className="rounded-lg swiper-lazy" src={image}
                  alt="Image load" />
              </a>
            </Link>
          </SwiperSlide>
        )}
    </Swiper>
  )
}

export default bannerSlider