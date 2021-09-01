import TabsButton from "app/components/tabs/TabsButton"
import TopbarWithBack from "app/components/topbars/Withback"

import Head from 'app/components/Head'

import Link from "next/link"

function TransactionSection() {
  const transationStatus = [
    {
      title: 'Menunggu Konfirmasi',
      icon: 'https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/8877a538.png?ect=4g'
    }, {
      title: 'Diproses',
      icon: 'https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/310f0ebe.png?ect=4g'
    }, {
      title: 'Dikirim',
      icon: 'https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/c425f6fe.png?ect=4g'
    }, {
      title: 'Tiba di Tujuan',
      icon: 'https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/011838c2.png?ect=4g'
    }
  ]

  return (
    <div className="p-4">
      <div className="flex justify-between pb-4">
        <h1 className="font-bold text-lg">Pembelian</h1>
        <Link href="/notif-center/all">
          <a className="text-green-500">
            Lihat Semua
          </a>
        </Link>
      </div>
      <div className="pb-4 border-b">
        <span>Menunggu Pembayaran</span>
      </div>
      <div className="py-4 border-b-8 border-gray-100">
        <div className="flex justify-around">
          {
            transationStatus.map(({ title, icon }, i) =>
              <div className="w-1/4 text-center" key={i}>
                <Link href="/a">
                  <a>
                    <div className="flex justify-center items-center p-2">
                      <div className="p-2" style={{ width: '40px', height: '40px' }}>
                        <img className="mx-auto h-full w-full" src={icon} alt="" />
                      </div>
                    </div>
                    <span className="text-sm leading-3">{title}</span>
                  </a>
                </Link>
              </div>
            )
          }
        </div>
      </div>
      <div className="flex justify-between pb-4">
        <h1 className="font-bold text-lg">Untuk Kamu</h1>
      </div>
      <div className="mt-4">
        {
          [...new Array(2)].map((it, i) =>
            <div className="py-4 border-b" key={i}>
              <div className="mb-2 flex items-center">
                <div className="mr-2">
                  <img src="https://cdn.tokopedia.net/img/notif-center/belanja.png?ect=3g" style={{ height: '15px' }} alt="" />
                </div>
                <span className="mr-2 text-gray-500">Belanja</span>
                <span className="text-gray-500">18 Agu</span>
              </div>
              <div className="mb-4">
                <span className="font-bold">Pesananmu sudah selesai, beri ulasan yuk</span>
                <p className="text-gray-500">Terima kasih kamu tetap aman di rumah jaga kesehatan diri dan keluarga</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

const tabs = [
  {
    title: "Transaksi",
    content: <TransactionSection />
  },
  {
    title: "Update",
    content: "x"
  }
]

function notifCenter() {
  return (
    <>
      <Head title="Notifikasi" />
      <div className="sticky top-0">
        <TopbarWithBack title="Notifikasi" backLink="/" />
        <TabsButton tabs={tabs} />
      </div>
    </>
  )
}

export default notifCenter