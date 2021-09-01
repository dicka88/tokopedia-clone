import BottomNavbar from 'app/components/bottombars/Navbar'
import Head from 'app/components/Head'
import TopbarMain from 'app/components/topbars/Main'
import Link from 'next/link'

function OfficialStore() {
  return (
    <>
      <Head title="Official Store" />
      <TopbarMain />
      <main>
        <div style={{ height: '52px' }}></div>
        <div className="flex">
          <div className="border-b-2">a</div>
          <div className="border-b-2">ad</div>
        </div>
      </main>
      <BottomNavbar />
    </>
  );
}

export default OfficialStore;