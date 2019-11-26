import * as React from 'react'
import { match } from 'react-router'
import * as H from 'history'

import { TabBar } from 'antd-mobile'

import One from 'views/one/One'
import Me from 'views/me'
import All from 'views/all'

interface IndexProps {
  match?: match<{ page: string }>
  history?: H.History
}

interface IItems {
  title: string
  icon: string
}

const Index: React.FC<IndexProps> = ({
  match: {
    params: { page },
  },
  match,
  history,
}) => {
  const items: IItems[] = [
    { title: 'one', icon: 'icon-fasong' },
    { title: 'all', icon: 'icon-fenlei' },
    { title: 'me', icon: 'icon-wode' },
  ]

  const renderTabs = () => {
    switch (page) {
      case 'one':
        return <One match={match} history={history} />
      case 'all':
        return <All match={match} history={history} />
      case 'me':
        return <Me match={match} history={history} />
    }
  }

  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" prerenderingSiblingsNumber={0}>
        {items.map((v: IItems) => {
          const { title, icon } = v
          const _title = title.toLocaleUpperCase()

          return (
            <TabBar.Item
              title={_title}
              key={_title}
              icon={<span className={`iconfont ${icon}`}></span>}
              selectedIcon={<span className={`iconfont ${icon}`}></span>}
              selected={title === page}
              onPress={() => {
                history.push(`/main/${title}`)
              }}
            >
              {renderTabs()}
            </TabBar.Item>
          )
        })}
      </TabBar>
    </div>
  )
}

export default Index
