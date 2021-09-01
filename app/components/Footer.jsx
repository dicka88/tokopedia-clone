import Link from 'next/link'

function footer() {
  return (
    <footer className="pb-16">
      <div className="border p-4">
        <h1 className="font-bold mb-4">Mau Cari Apa di Tokopedia?</h1>
        <p className="text-gray-500">
          <Link href={'/'}>
            <a>Promo | </a>
          </Link>
          <Link href={'/'}>
            <a>Kategori | </a>
          </Link>
          <Link href={'/'}>
            <a>Official Store | </a>
          </Link>
          <Link href={'/'}>
            <a>Tokopedia Salam | </a>
          </Link>
          <Link href={'/'}>
            <a>Tiket Pesawat | </a>
          </Link>
          <Link href={'/'}>
            <a>Tiket Kereta Api | </a>
          </Link>
          <Link href={'/'}>
            <a>Hotel | </a>
          </Link>
          <Link href={'/'}>
            <a>Deals | </a>
          </Link>
          <Link href={'/'}>
            <a>Blog | </a>
          </Link>
          <Link href={'/'}>
            <a>Situs Desktop | </a>
          </Link>
        </p>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <p className="text-gray-500">
            <Link href="/care">
              <a>Tokopedia Care | </a>
            </Link>
            <Link href="/syarat">
              <a>Syarat & Ketentuan | </a>
            </Link>
            <Link href="/privacy-policy">
              <a>Kebijakan Privasi</a>
            </Link>
          </p>
        </div>
        <h1 className="font-bold mb-4">Gunakan Aplikasi Tokopedia</h1>
        <div className="flex">
          <div className="mr-4">
            <a target="_blank" href='https://play.google.com/store/apps/details?id=com.tokopedia.tkpd&hl=en&gl=US'>
              <img src="/images/footer/playstore.svg" alt="" />
            </a>
          </div>
          <div className="mr-4">
            <a target="_blank" href='https://apps.apple.com/us/app/tokopedia-bebas-ongkir/id1001394201'>
              <img src="/images/footer/appstore.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-4 pb-4">
        <div className="rounded inline-block bg-gray-100">
          <button className="rounded-lg py-1 px-5 font-bold text-white"
            style={{ backgroundColor: '#03AC0E' }}>Indonesia</button>
          <button className="rounded-lg py-1 px-5 font-bold text-gray-400 bg-green">English</button>
        </div>
      </div>
      <div className="mx-4 mt-2 mb-6">
        <span className="text-xs text-gray-400">© 2009-2021, PT Tokopedia</span>
      </div>
    </footer>
  )
}

export default footer