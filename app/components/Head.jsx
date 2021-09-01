import Head from 'next/head';

function metahead({title, description, children}) {
  return (
    <Head>
      <title>{title ? `${title} | Tokopedia` : 'Tokopedia | Belanja aman, murah, dan lengkap'}</title>
      <meta name="description" content={description || 'Learn more of Tokopedia'} />
      <meta name="theme-color" content="#42b549" />
      <link rel="icon" type="image/png" sizes="144x144" href="https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/icon144.png"></link>
      {
        children
      }
    </Head>
  )
}

export default metahead