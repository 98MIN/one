import * as React from 'react'

import { TabBar } from 'antd-mobile'

import One from 'views/one/One'
import Me from 'views/me'
import All from 'views/all'

interface IndexProps {
  page: string
  match?: any
  history?: any
}

const Index: React.FC<IndexProps> = ({ match, history }) => {
  const [selectedTab, setSelectedTab] = React.useState('ONE')

  const items = [
    { title: 'ONE', icon: 'icon-fasong' },
    { title: 'ALL', icon: 'icon-fenlei' },
    { title: 'ME', icon: 'icon-wode' },
  ]

  const renderTab = (page: string) => {
    switch (page) {
      case 'ONE':
        return <One match={match} history={history} />
      case 'ALL':
        return <All match={match} history={history} />
      case 'ME':
        return <Me match={match} history={history} />
    }
  }

  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" prerenderingSiblingsNumber={0}>
        {items.map((v) => {
          const { title, icon } = v

          return (
            <TabBar.Item
              title={title}
              key={title}
              icon={<span className={`iconfont ${icon}`}></span>}
              selectedIcon={<span className={`iconfont ${icon}`}></span>}
              selected={selectedTab === title}
              onPress={() => {
                setSelectedTab(title)
              }}
            >
              {renderTab(title)}
            </TabBar.Item>
          )
        })}
      </TabBar>
    </div>
  )
}

export default Index
