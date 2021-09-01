import BottomNavbar from 'app/components/bottombars/Navbar'
import Head from 'app/components/Head'
import Footer from 'app/components/Footer'
import TopbarMain from 'app/components/topbars/Main'
import Tabs from 'app/components/tabs/TabsButton'

// feed tab component
import FeedUpdateTab from 'app/components/feeds/update'
import FeedExploreTab from 'app/components/feeds/explore'

function feeds() {
  const tabs = [
    {
      title: "Update",
      content: <FeedUpdateTab />
    }, {
      title: 'Explore',
      content: <FeedExploreTab />
    }
  ]

  return (
    <>
      <Head title="Feeds" />
      <TopbarMain scrollShadow={false} />
      <main>
        <div style={{ height: '53px' }}></div>
        <Tabs tabs={tabs} />
      </main>
      <Footer />
      <BottomNavbar />
    </>
  );
}

export default feeds;