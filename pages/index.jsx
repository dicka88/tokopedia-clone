import TopbarMain from 'app/components/topbars/Main'
import BottomNavbar from 'app/components/bottombars/Navbar'
import Head from 'app/components/Head'
// import Link from 'next/link'
import { useEffect } from 'react'

// component
import CategoriesSlider from 'app/components/sliders/CategoriesSlider'
import CategoriesPreferredSlider from 'app/components/sliders/CategoriesPreferredSlider'
import BannerSlider from 'app/components/sliders/BannerSlider'
import ProductSlider from 'app/components/sliders/ProductsSlider'
import ProductSliderWithBackground from 'app/components/sliders/ProductsSliderWithBackground'
import CategoryCardSection from 'app/components/sections/CategoryCardSection';
import OverviewSection from 'app/components/dashboard/Overview'

import Footer from 'app/components/Footer'

const categories = [
  {
    link: '/official-store',
    image: '/images/category/official-store.png',
    title: 'Official Store'
  }, {
    link: '/all',
    image: '/images/category/see-all.png',
    title: 'Lihat Semua'
  }, {
    link: '/handphone',
    image: '/images/category/handphone.png',
    title: 'Handphone & Tablet'
  }, {
    link: '/topup',
    image: '/images/category/topup.png',
    title: 'Top-Up & Tagihan'
  }, {
    link: '/official-store',
    image: '/images/category/sport.png',
    title: 'Olahraga'
  }, {
    link: '/official-store',
    image: '/images/category/pet-care.png',
    title: 'Perawatan Hewan'
  }, {
    link: '/official-store',
    image: '/images/category/finance.png',
    title: 'Keuangan'
  }, {
    link: '/official-store',
    image: '/images/category/travel.png',
    title: 'Travel & Entertaiment'
  }, {
    link: '/official-store',
    image: '/images/category/muslim-fashion.png',
    title: 'Fashion Muslim'
  }, {
    link: '/official-store',
    image: '/images/category/electronic.png',
    title: 'Elektronik'
  }
]

const programs = [
  {
    link: '/bangkit',
    image: '/images/program/bangkit.png',
    title: 'Bangkit Bersama'
  }, {
    link: '/bangkit',
    image: '/images/program/wib.png',
    title: 'Promo Ultah'
  }, {
    link: '/bangkit',
    image: '/images/program/bazar.png',
    title: 'Bazar Hari Ini'
  }, {
    link: '/bangkit',
    image: '/images/program/live.png',
    title: 'Live Shopping'
  }, {
    link: '/bangkit',
    image: '/images/program/tokomart.png',
    title: 'Belanja Harian'
  }, {
    link: '/bangkit',
    image: '/images/program/cod.png',
    title: 'Bayar Ditempat'
  }, {
    link: '/bangkit',
    image: '/images/program/bangga.png',
    title: 'Bangga Lokal'
  },
]

const bannerSlider = [
  { image: '/images/slider/slide-1.webp', link: "/" },
  { image: '/images/slider/slide-2.webp', link: "/" },
  { image: '/images/slider/slide-3.webp', link: "/" }
]

const safetyHome = {
  title: 'Selalu #Aman Dari Rumah',
  data: [
    { image: '/images/safety/1.webp', link: '/' },
    { image: '/images/safety/2.webp', link: '/' },
    { image: '/images/safety/3.webp', link: '/' },
    { image: '/images/safety/4.webp', link: '/' },
  ]
}

const specialDiscount = {
  title: 'Kejar Diskon Spesial',
  link: '/discount',
  backgroundImage: 'https://images.tokopedia.net/img/cache/200/PYbRbC/2021/8/19/303d38c2-c277-4e96-ae03-5884c4ee0179.png.webp?ect=4g',
  backgroundColors: ['#1ec182', '#1ec182'],
  data: [
    {
      thumbnail: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/7/3/38543826-9760-4e32-8c77-cd14c460501e.jpg.webp?ect=4g',
      link: '/product/h',
      title: "Masker Kf94 94 4p ly 4 ply Emboss",
      discount: 0,
      price: "Rp 16.500",
      priceDiscount: null,
      sellerCity: 'Kota Depok',
      rating: 4.9,
      sold: '27 Rb'
    }, {
      thumbnail: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/7/3/38543826-9760-4e32-8c77-cd14c460501e.jpg.webp?ect=4g',
      link: '/product/h',
      title: "Masker Kf94 94 4p ly 4 ply Emboss",
      discount: 0,
      price: "Rp 16.500",
      priceDiscount: null,
      sellerCity: 'Kota Depok',
      rating: 4.9,
      sold: '27 Rb'
    }
  ]
}

const discountHot = {
  title: 'Diskon Terlaris',
  link: '/discount',
  data: [
    {
      thumbnail: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/7/3/38543826-9760-4e32-8c77-cd14c460501e.jpg.webp?ect=4g',
      link: '/product/h',
      title: "Masker Kf94 94 4p ly 4 ply Emboss",
      discount: 0,
      price: "Rp 16.500",
      priceDiscount: null,
      sellerCity: 'Kota Depok',
      rating: 4.9,
      sold: '27 Rb'
    }, {
      thumbnail: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/7/3/38543826-9760-4e32-8c77-cd14c460501e.jpg.webp?ect=4g',
      link: '/product/h',
      title: "Masker Kf94 94 4p ly 4 ply Emboss",
      discount: 0,
      price: "Rp 16.500",
      priceDiscount: null,
      sellerCity: 'Kota Depok',
      rating: 4.9,
      sold: '27 Rb'
    }, {
      thumbnail: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/7/3/38543826-9760-4e32-8c77-cd14c460501e.jpg.webp?ect=4g',
      link: '/product/h',
      title: "Masker Kf94 94 4p ly 4 ply Emboss",
      discount: 0,
      price: "Rp 16.500",
      priceDiscount: null,
      sellerCity: 'Kota Depok',
      rating: 4.9,
      sold: '27 Rb'
    }, {
      thumbnail: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/7/3/38543826-9760-4e32-8c77-cd14c460501e.jpg.webp?ect=4g',
      link: '/product/h',
      title: "Masker Kf94 94 4p ly 4 ply Emboss",
      discount: 0,
      price: "Rp 16.500",
      priceDiscount: null,
      sellerCity: 'Kota Depok',
      rating: 4.9,
      sold: '27 Rb'
    }, {
      thumbnail: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/7/3/38543826-9760-4e32-8c77-cd14c460501e.jpg.webp?ect=4g',
      link: '/product/h',
      title: "Masker Kf94 94 4p ly 4 ply Emboss",
      discount: 0,
      price: "Rp 16.500",
      priceDiscount: null,
      sellerCity: 'Kota Depok',
      rating: 4.9,
      sold: '27 Rb'
    },
  ]
}

const categoriesPreferred = {
  title: 'Kategori Pilihan',
  link: '/preferred-category',
  data: [
    {
      title: 'Handphone & Tablet',
      image: '/images/kategori-pilihan/handphone.webp',
      link: '/ddd'
    }, {
      title: 'Komputer & Laptop',
      image: '/images/kategori-pilihan/laptop.webp',
      link: '/ddd'
    }, {
      title: 'Kecantikan',
      image: '/images/kategori-pilihan/beauty.webp',
      link: '/ddd'
    }, {
      title: 'Fashion Anak & Bayi',
      image: '/images/kategori-pilihan/baby.webp',
      link: '/ddd'
    }, {
      title: 'Kamera',
      image: '/images/kategori-pilihan/camera.webp',
      link: '/ddd'
    }, {
      title: 'Fashion Muslim',
      image: '/images/kategori-pilihan/muslim.webp',
      link: '/ddd'
    }, {
      title: 'Dapur',
      image: '/images/kategori-pilihan/kitchen.webp',
      link: '/ddd'
    }, {
      title: 'Olahraga',
      image: '/images/kategori-pilihan/sport.webp',
      link: '/ddd'
    }, {
      title: 'Mainan',
      image: '/images/kategori-pilihan/toy.webp',
      link: '/ddd'
    }, {
      title: 'Gaming',
      image: '/images/kategori-pilihan/games.webp',
      link: '/ddd'
    }, {
      title: 'Hewan',
      image: '/images/kategori-pilihan/pets.webp',
      link: '/ddd'
    }, {
      title: 'Rumah Tangga',
      image: '/images/kategori-pilihan/perabot.webp',
      link: '/ddd'
    }, {
      title: 'Otomotif',
      image: '/images/kategori-pilihan/wheel.webp',
      link: '/ddd'
    }, {
      title: 'Kesehatan',
      image: '/images/kategori-pilihan/vitamin.webp',
      link: '/ddd'
    }, {
      title: 'Fashion Wanita',
      image: '/images/kategori-pilihan/fashion.webp',
      link: '/ddd'
    }
  ]
}

export default function Home() {
  return (
    <>
      <Head />
      <TopbarMain />
      <main>
        {/* Address  */}
        <section className="mb-2 px-4 bg-green-50 pb-10">
          <div style={{ height: '52px' }}></div>
          <div className="flex text-xs">
            <a href="">
              <svg className="unf-icon inline-block align-middle" viewBox="0 0 24 24" width="14" height="14" fill="var(--color-icon-enabled, #525867)">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M11.5 21.87a1 1 0 00.5.13 1 1 0 00.514-.138C12.974 21.587 20 17.399 20 10a7.909 7.909 0 00-8-8 7.91 7.91 0 00-8 8c0 7.399 7.025 11.587 7.486 11.862l.014.008zM9.694 4.44A5.94 5.94 0 0112 4a5.94 5.94 0 016 6c0 5.28-4.48 8.81-6 9.81-1.52-1.03-6-4.51-6-9.81a5.94 5.94 0 013.694-5.56zm.084 8.886a4 4 0 104.444-6.652 4 4 0 00-4.444 6.652zm1.11-4.989a2 2 0 112.223 3.326 2 2 0 01-2.222-3.326z">
                </path>
              </svg>
              <span>Dikirim ke <span className="font-bold">Alamat Rumah Anda</span></span>
            </a>
          </div>
        </section>
        {/* Dashboard */}
        <section className="mb-2 pb-2">
          <OverviewSection />
        </section>
        {/* Category */}
        <section className="mb-2 pb-2">
          <CategoriesSlider data={categories} />
        </section>
        {/* Slider */}
        <section className="mb-2 pb-2">
          <div className="overflow-x-auto">
            <BannerSlider data={bannerSlider} />
          </div>
        </section>
        {/* Program */}
        <section className="mb-2 pb-2">
          <CategoriesSlider data={programs} />
        </section>
        <section className="mb-2 pb-2">
          <ProductSliderWithBackground {...specialDiscount} />
        </section>
        {/* Safety from home */}
        <section className="mb-2 pb-2">
          <CategoryCardSection title={safetyHome.title} data={safetyHome.data} />
        </section>
        {/* Discount */}
        <section className="mb-2 pb-2">
          <ProductSlider {...discountHot} />
        </section>
        {/* Preferred Categories */}
        <section className="mb-2 pb-2">
          <CategoriesPreferredSlider {...categoriesPreferred} />
        </section>
      </main>
      <Footer />
      <BottomNavbar />
    </>
  )
}
