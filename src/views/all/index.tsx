import * as React from 'react'
import { match } from 'react-router'
import * as H from 'history'

import NavBar from 'components/navBar'
import Card from 'components/card'
import { Icon } from 'antd-mobile'

import useClassification, { IClassification } from 'hooks/useClassification'

interface IAll {
  history?: H.History
  match?: match
}

const All: React.FC<IAll> = ({ history, match }) => {
  const [reload, setReload] = React.useState(0)

  const list = useClassification(reload)

  const handleClick = (uuid: string) => {
    history.push(`${match.url}/topical/${uuid}`)
  }

  const renderNavigation = (web_url: string, content: string, key: number) => {
    return (
      <Card
        key={key}
        style={{
          position: 'relative',
          height: 80,
          width: 80,
        }}
        cover={<img src={web_url} />}
        content={content}
        onClick={() => console.log(1)}
        bodyStyle={{
          position: 'absolute',
          bottom: 0,
          height: 20,
          width: '90%',
          textAlign: 'center',
          background: 'rgba(0,0,0,0.1)',
          border: '1px solid red'
        }}
      />
    )
  }

  const items = [
    { weburl: '', content: '连载111111' },
    { weburl: '', content: '音乐' },
    { weburl: '', content: '问答' },
    { weburl: '', content: '图文' },
  ]

  return (
    <div>
      <NavBar
        centerComponent={
          <div>
            ONE<span style={{ paddingRight: 10, paddingLeft: 10 }}>IS</span>ALL
          </div>
        }
        rightComponent={<Icon type="search" />}
      />
      <Card
        title="内容导航"
        content={items.map((v, index) => renderNavigation(v.weburl, v.content, index))}
        bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
      />
      {list.map(({ id, content_id, title, cover }: IClassification) => (
        <Card
          key={id}
          onClick={() => handleClick(content_id)}
          cover={<img src={cover} style={{ height: 150, width: '100%' }} />}
          content={title}
          bodyStyle={{ fontSize: 16, color: '#000', fontFamily: '微软雅黑' }}
        />
      ))}
    </div>
  )
}
export default All
