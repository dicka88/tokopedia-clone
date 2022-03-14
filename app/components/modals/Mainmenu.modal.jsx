import { useState, useEffect } from "react";
import Link from 'next/link';

function LinkItem({ title, link, iconSvgPath, iconImgUrl }) {
  return (
    <div className="flex items-center py-2">
      <div className="mr-4">
        {
          iconSvgPath ?
            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--color-icon-enabled, #525867)">
              <path fillRule="evenodd" clipRule="evenodd" d={iconSvgPath}></path>
            </svg>
            :
            <img src={iconImgUrl} style={{ width: '24px' }} alt="" />
        }
      </div>
      <span className="text-gray-700">
        {title}
      </span>
    </div>
  );
}

function mainmenuModal({ show = false, setMainMenuModalOpen }) {
  const activityMenu = [
    {
      title: 'Daftar Transaksi',
      link: '/',
      iconSvgPath: "M19 2H5c-1.2 0-2 .8-2 2v17c0 .4.2.8.6.9.4.2.8.1 1.1-.2L6 20.4l1.3 1.3c.4.4 1 .4 1.4 0l1.3-1.3 1.3 1.3c.4.4 1 .4 1.4 0l1.3-1.3 1.3 1.3c.4.4 1 .4 1.4 0l1.3-1.3 1.3 1.3c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.2.6-.5.6-.9V4c0-1.2-.9-2-2-2zm0 16.6l-.3-.3c-.4-.4-1-.4-1.4 0L16 19.6l-1.3-1.3c-.2-.2-.5-.3-.7-.3-.2 0-.5.1-.7.3L12 19.6l-1.3-1.3c-.4-.4-1-.4-1.4 0L8 19.6l-1.3-1.3c-.4-.4-1-.4-1.4 0l-.3.3V4h14v14.6zM7 7h4c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1zm4 3H7c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1zm-4 3h4c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1zm4 3H7c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1zm3-9a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 100-2 1 1 0 000 2zm-2 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0z"
    }, {
      title: 'Wishlist',
      link: '/',
      iconSvgPath: "M12.19 21a1.921 1.921 0 01-1.07-.33c-2.13-1.27-6-4-7.93-7.67a7 7 0 010-7.33A5.56 5.56 0 018 3.05a6 6 0 014.16 1.62 5.84 5.84 0 014.14-1.62A5.73 5.73 0 0121 5.71a7.859 7.859 0 01.2 7.29c-2.35 4.22-7.08 7.2-8 7.76a1.76 1.76 0 01-1.01.24zM8 5.05a3.6 3.6 0 00-3.18 1.74c-.18.26-1.51 2.31.13 5.28C6.68 15.43 10.57 18 12.18 19c.76-.46 5.19-3.25 7.22-6.92a5.77 5.77 0 00-.07-5.28 3.7 3.7 0 00-3-1.73A3.86 3.86 0 0013 6.74l-.76 1-.82-1A4.32 4.32 0 008 5.05z"
    }, {
      title: 'Ulasan',
      link: '/',
      iconSvgPath: "M16.55 21a2.58 2.58 0 01-1.23-.31L12.08 19l-3.23 1.7A2.63 2.63 0 015 17.92l.61-3.61L3 11.76a2.63 2.63 0 011.49-4.49l3.61-.52 1.62-3.28a2.64 2.64 0 014.73 0l1.61 3.28 3.62.52a2.63 2.63 0 011.46 4.49l-2.62 2.55.62 3.61A2.652 2.652 0 0116.55 21zm-4.47-4.27l4.17 2.19a.6.6 0 00.67-.05.61.61 0 00.25-.62l-.8-4.63 3.37-3.29a.6.6 0 00.16-.65.61.61 0 00-.51-.43l-4.65-.68-2.09-4.22a.63.63 0 00-1.13 0L9.43 8.57l-4.65.68a.63.63 0 00-.36 1.08l3.37 3.29L7 18.25a.61.61 0 00.25.62.601.601 0 00.67.05l4.16-2.19z"
    }, {
      title: 'Toko Favorit',
      link: '/',
      iconSvgPath: "M17.5 2c-1.2 0-2.3.4-3.2 1H5.7c-.9 0-1.7.6-1.9 1.4L2 9.7v.3c0 1 .4 1.9 1 2.6V19c0 1.2.8 2 2 2h14c1.2 0 2-.8 2-2v-6.4c.5-.5.8-1.2.9-1.9.7-.9 1.1-2 1.1-3.3C23 4.5 20.5 2 17.5 2zM4 10.1L5.7 5h6.9c-.4.7-.6 1.6-.6 2.5 0 1.5.6 2.8 1.5 3.8-.4.4-.9.7-1.5.7-.9 0-2-.3-2-2 0-.6-.4-1-1-1s-1 .4-1 1c0 1.1-.9 2-2 2s-1.9-.8-2-1.9zM19 19h-4v-2c0-1.2-.8-2-2-2h-2c-1.2 0-2 .8-2 2v2H5v-5.1c.3 0 .6.1 1 .1 1.2 0 2.2-.5 2.9-1.3.7.8 1.8 1.3 3.1 1.3 1.2 0 2.3-.5 3-1.3.7.8 1.8 1.3 3 1.3.4 0 .7-.1 1-.1V19zm1.2-11.1c-.7 1.2-2.1 2.2-2.6 2.5-.1.1-.2.1-.3 0-.5-.3-1.9-1.2-2.6-2.5-.5-1-.3-1.8 0-2.1.3-.5.7-.8 1.3-.8.7 0 1.2.3 1.5 1 .2-.7.9-1 1.5-1 .5 0 .9.3 1.2.7.2.4.5 1.2 0 2.2z"
    }
  ];

  const categoryMenu = [
    {
      title: 'Kategori',
      link: '/',
      iconSvgPath: '',
      iconImgUrl: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/4/6/7ce91856-1759-4707-9348-87a26dfbaa5c.png'
    }, {
      title: 'Top-Up & Tagihan',
      link: '/',
      iconSvgPath: '',
      iconImgUrl: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/4/6/03b2a7ba-8503-49d1-b3cf-6ad12e3edc0a.png'
    }, {
      title: 'Travel & Entertaiment',
      link: '/',
      iconSvgPath: '',
      iconImgUrl: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/4/6/198c44e1-19fd-4eae-9962-d272ac46adab.png'
    }, {
      title: 'Keuangan',
      link: '/',
      iconSvgPath: '',
      iconImgUrl: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/4/6/7f3c4432-1f75-4ed1-8727-3f619c6d198a.png'
    }, {
      title: 'Layanan Lainnya',
      link: '/',
      iconSvgPath: '',
      iconImgUrl: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/4/6/a40efe16-a224-4938-82bf-291cbf64e2b8.png'
    }
  ];

  const helpCenterMenu = [
    {
      title: 'Pesanan Dikomplain',
      link: '/',
      iconSvgPath: 'M16.5 13c3 0 5.5-2.5 5.5-5.5S19.5 2 16.5 2c-2.3 0-4.2 1.4-5 3.3-.6-.2-1.1-.3-1.7-.3-2.6 0-4.6 2-4.6 4.5 0 1.3.6 2.5 1.4 3.3-.5.3-1 .6-1.5 1.1C3.8 15.2 3 17.1 3 19v.9C3 21 4 22 5.2 22h9.2c1.2 0 2.2-1 2.2-2.1v-1.1c0-2.6-1.4-4.9-3.6-6 .2-.2.4-.4.6-.7.7.6 1.8.9 2.9.9zm-1-8c0-.6.4-1 1-1s1 .4 1 1v2.8c0 .6-.4 1-1 1s-1-.4-1-1V5zm1 4.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM9.8 7c1.4 0 2.5 1.1 2.5 2.5S11.2 12 9.8 12s-2.5-1.1-2.5-2.5S8.3 7 9.8 7zm4.7 11.7v1.1c0 .1-.1.1-.1.1H5.2c-.1.1-.2 0-.2 0V19c0-1.4.6-2.7 1.6-3.7.9-.9 2-1.3 3.2-1.3h.1c2.6.1 4.6 2.1 4.6 4.7z',
      iconImgUrl: ''
    }, {
      title: 'Bantuan Tokopedia Care',
      link: '/',
      iconSvgPath: 'M22 10v-.57A2.52 2.52 0 0019.38 7a1.56 1.56 0 00-.44.08A8 8 0 005 7.08 1.56 1.56 0 004.58 7 2.52 2.52 0 002 9.43v2.14A2.52 2.52 0 004.57 14a8 8 0 0014.82 0 2.69 2.69 0 001.14-.26 9.05 9.05 0 01-3.19 4.49 7.318 7.318 0 01-1.76 1.05A1 1 0 0016 21.2a1.09 1.09 0 00.39-.08 9 9 0 002.21-1.32A11.08 11.08 0 0023 11a1 1 0 00-1-1zm-10 7a6 6 0 110-12 6 6 0 010 12zm-1 3a1 1 0 000 2h2a1 1 0 000-2h-2zm3.293-8.707A1 1 0 0116 12a4 4 0 11-8 0 1 1 0 112 0 2 2 0 004 0 1 1 0 01.293-.707z',
      iconImgUrl: ''
    },
  ];

  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  });

  return (
    <>
      <div className={`fixed w ${show ? 'h-full' : 'h-0'} z-20 bg-black opacity-50 delay-300`} />
      <div className={`absolute bottom-0 w-full z-50 bg-white overflow-y-auto transition-all ease-out duration-500 ${show ? 'top-0' : 'top-full'}`}>
        <header className="flex bg-white items-center sticky top-0 border-b">
          <button className="p-4" onClick={() => setMainMenuModalOpen(false)}>
            <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/03833eed.svg" alt="" />
          </button>
          <h1 className="font-bold text-xl block">Menu Utama</h1>
        </header>
        <div className="p-4">
          <div className="flex justify-between pb-4 border-b mb-2">
            <Link href="/login">
              <a className="w-full py-2 font-bold text-sm rounded-lg mr-2 bg-green-500 text-white text-center">Masuk</a>
            </Link>
            <Link href="/register">
              <a className="w-full py-2 font-bold text-sm rounded-lg border border-green-500 text-green-500 text-center">Daftar</a>
            </Link>
          </div>
          <div className="pb-4">
            <div className="pb-2">
              <h1 className="font-bold text-lg">Aktivitas saya</h1>
            </div>
            {
              activityMenu.map((item, i) =>
                <LinkItem key={i} {...item} />
              )
            }
          </div>
          <div className="pb-4">
            <div className="pb-2">
              <h1 className="font-bold text-lg">Semua Kategori</h1>
            </div>
            {
              categoryMenu.map((item, i) =>
                <LinkItem key={i} {...item} />
              )
            }
          </div>
          <div className="pb-4">
            <div className="pb-2">
              <h1 className="font-bold text-lg">Pusat Bantuan</h1>
            </div>
            {
              helpCenterMenu.map((item, i) =>
                <LinkItem key={i} {...item} />
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default mainmenuModal;