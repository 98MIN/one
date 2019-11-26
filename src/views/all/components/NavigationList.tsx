import * as React from 'react'
import * as H from 'history'
import { match } from 'react-router'

import useNavigationList from 'hooks/useNavigationList'
import { List } from 'antd-mobile'

interface INavigationList {
  history?: H.History
  match?: match<{ type: string }>
}

const NavigationList: React.FC<INavigationList> = ({
  history,
  match: {
    params: { type },
  },
}) => {
  const date = '2019-10'
  const data = useNavigationList(type, date)

  console.log(data)
  if (!data.length) {
    return null
  }

  const handleDetail = (uuid: string) => {
    history.push('/')
  }

  return (
    <List>
      {data.map((v) => (
        <React.Fragment key={v.uuid}>
          <List.Item thumb={v.author_list[0].web_url} onClick={() => handleDetail(v.uuid)} style={{ padding: 10, borderBottom: '1px solid #ccc'  }}>
            {v.question_title}
          </List.Item>
        </React.Fragment>
      ))}
    </List>
  )
}

export default NavigationList
