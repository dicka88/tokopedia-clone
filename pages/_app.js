import 'tailwindcss/tailwind.css'
import 'swiper/swiper.min.css';
import 'swiper/components/lazy/lazy.min.css'
import 'app/styles/main.css';

import axios from 'axios';

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }

    return config
  }
)

function myApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 w-100">
      <div id="app" className="relative bg-white mx-auto pb-16x min-h-screen">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default myApp;