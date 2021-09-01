import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

import MainMenuModal from '../modals/Mainmenu.modal';

function MainHeader({ scrollShadow = true }) {
  const headerRef = useRef('header');
  const [scrolledDown, setScrolledDown] = useState(false);
  const [mainMenuModalOpen, setMainMenuModalOpen] = useState(false)

  const [message, setMessage] = useState({
    count: 3,
    items: []
  });

  const [bell, setBell] = useState({
    count: 0,
    items: []
  })

  const [cart, setCart] = useState({
    count: 2,
    items: []
  });


  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!firstRender) return;
    setFirstRender(false)

    if (!scrollShadow) return

    window.addEventListener('scroll', function () {
      const scrollHeight = window.scrollY
      if (scrollHeight > 10) {
        setScrolledDown(true)
      } else {
        setScrolledDown(false)
      }
    })

  })

  return (
    <>
      <header id="top-header" ref={headerRef} className={`fixed w-full ${scrollShadow ? 'bg-transparent' : 'bg-white'} z-10 transition-all duration-300 ${scrolledDown ? 'bg-white shadow-lg' : ''}`} >
        <div className="py-3 px-4">
          <div className="flex items-center justify-between">
            <div className="w-full mr-2">
              <div className="flex rounded-lg border bg-white p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" fillRule="evenodd">
                    <path fillRule="nonzero" d="M0 0h24v24H0z" />
                    <path fill="#9FA6B0"
                      d="M11.002 14.125a3.128 3.128 0 0 1-3.127-3.123c0-1.724 1.4-3.126 3.123-3.127 1.723 0 3.127 1.4 3.127 3.123 0 1.724-1.4 3.126-3.123 3.127m6.728 2.28l-2.137-2.135a.919.919 0 0 0-.606-.262A4.974 4.974 0 0 0 16 10.997 5 5 0 1 0 11.003 16a4.974 4.974 0 0 0 3.01-1.016c.013.22.094.437.263.605l2.137 2.135a.93.93 0 1 0 1.317-1.318" />
                  </g>
                </svg>
                <input className="w-full outline-none overflow-ellipsis" type="text"
                  placeholder="Cari kipas angin" />
              </div>
            </div>
            <div className="whitespace-nowrap">
              <a href="/" className="relative px-1" data-info="inbox">
                {message.count > 0 && (
                  <div
                    className="absolute -top-1 -right-1 px-1 rounded-md bg-red-500 text-white text-xs inline-block text-center"
                    style={{ height: '16px', minWidth: '16px', lineHeight: '16px', fontSize: '10px' }}>
                    <span>{message.count}</span>
                  </div>
                )}
                <svg className="unf-icon inline-block align-middle" viewBox="0 0 24 24" width="24" height="24" fill="#525867">
                  <path
                    d="M20 3.9H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2v-12a1.891 1.891 0 00-2-2zm-1.7 2l-5.63 4.29a1.1 1.1 0 01-1.22 0L5.71 5.9H18.3zM4 17.9V7.11l6.27 4.7a3 3 0 001.77.56 3.15 3.15 0 001.81-.57L20 7.12V17.9H4z">
                  </path>
                </svg>
              </a>
              <Link href="/notif-center">
                <a className="relative px-1" data-info="notification">
                  {bell.count > 0 &&
                    <div
                      className="absolute -top-1 -right-1 px-1 rounded-md bg-red-500 text-white text-xs inline-block text-center"
                      style={{ height: '16px', minWidth: '16px', lineHeight: '16px', fontSize: '10px' }}>
                      <span>{bell.count}</span>
                    </div>
                  }
                  <svg className="unf-icon inline-block align-middle" viewBox="0 0 24 24" width="24" height="24" fill="#525867">
                    <path
                      d="M21 17h-1v-6a8 8 0 00-6-7.74A2.301 2.301 0 0014 3a2 2 0 10-4 0 2.301 2.301 0 000 .26A8 8 0 004 11v6H3a1 1 0 000 2h5a4 4 0 108 0h5a1 1 0 000-2zm-9 4a2 2 0 01-2-2h4a2 2 0 01-2 2zm-6-4v-6a6 6 0 1112 0v6H6z">
                    </path>
                  </svg>
                </a>
              </Link>
              <a href="/" className="relative px-1" data-info="cart">
                {cart.count > 0 && (
                  <div
                    className="absolute -top-1 -right-1 px-1 rounded-md bg-red-500 text-white text-xs inline-block text-center"
                    style={{ height: '16px', minWidth: '16px', lineHeight: '16px', fontSize: '10px' }}>
                    <span>{cart.count}</span>
                  </div>
                )}
                <svg className="unf-icon inline-block align-middle" viewBox="0 0 24 24" width="24" height="24" fill="#525867">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M20 4c.6 0 1.1.3 1.5.7.4.5.6 1.1.5 1.7l-1.5 6.5c-.4 1.8-2 3.1-3.9 3.1H9.4c-1.9 0-3.5-1.3-3.9-3.1L3.4 4H2c-.6 0-1-.4-1-1s.4-1 1-1h1.2c1.3 0 2.1.7 2.3 2v.1c.1-.1.3-.1.5-.1h14zm-3.4 10c.9 0 1.7-.7 1.9-1.6L20 6H6l1.5 6.4c.2 1 1 1.6 1.9 1.6h7.2zm-7.1 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7.1 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                  </path>
                </svg>
              </a>
              <button className="relative ml-2 px-1" data-info="nav" onClick={() => setMainMenuModalOpen(true)}>
                <svg className="unf-icon inline-block align-middle" viewBox="0 0 24 24" width="24" height="24" fill="#525867" >
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M19.1 7H4.9a.9.9 0 01-.9-.9v-.2a.9.9 0 01.9-.9H19a.92.92 0 011 .9V6a.92.92 0 01-.9 1zM19.1 13H4.9a.9.9 0 01-.9-.9V12a.92.92 0 01.9-1H19a.9.9 0 01.9.9v.1a.81.81 0 01-.8 1zM19.1 19H4.9a.9.9 0 01-.9-.9V18a.92.92 0 01.9-1H19a.9.9 0 01.9.9v.1a.81.81 0 01-.8 1z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MainMenuModal show={mainMenuModalOpen} setMainMenuModalOpen={setMainMenuModalOpen} />
    </>
  )
}

module.exports = MainHeader