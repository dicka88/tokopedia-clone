import { useState, useEffect, useRef } from 'react'
import router, { useRouter } from 'next/router'

function tabsButton({ tabs = [], ...props }) {
  const router = useRouter()
  const { query } = router

  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    if (!query.tab) return
    const index = tabs.findIndex(({ title }) => {
      return title.toLowerCase() == query.tab.toLowerCase()
    })

    if (index < 0) return
    setActiveTab(index)
  })

  const changeTab = (index, title) => {
    if (index === activeTab) return;
    router.push(router.pathname + '?tab=' + title.toLowerCase())
  }

  return (
    <>
      <div className="flex w-full justify-between border-b sticky bg-white" style={{ top: '53px' }} {...props}>
        {tabs.map(({ title }, index) =>
          <div key={index} className={`text-center py-4 w-full cursor-pointer ${activeTab == index ? 'border-b-2 border-green-600' : ''}`} onClick={() => changeTab(index, title)}>
            <span className={`font-bold  ${activeTab == index ? 'text-green-600' : 'text-gray-400'}`}>{title}</span>
          </div>
        )}
      </div>
      <div className="tab-content">
        {tabs.map(({ content }, index) =>
          activeTab == index ?
            <div key={index} className={`transition-all duration-500`}>
              {content}
            </div>
            : ''
        )}
      </div>
    </>
  )
}

export default tabsButton