import * as React from 'react'

import NavBar from 'components/navBar'
import Card from 'components/card'
import { Icon } from 'antd-mobile'

import useClassification, { IClassification } from 'hooks/useClassification'

const All: React.FC<any> = () => {
  const [reload, setReload] = React.useState(0)

  const list = useClassification(reload)

  console.log(list)

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
      {list.map((v: IClassification) => (
        <Card
          cover={<img src={v.cover} style={{ height: 150, width: '100%' }} key={v.id} />}
          content={v.title}
          bodyStyle={{ fontSize: 16, color: '#000', fontFamily: '微软雅黑' }}
        />
      ))}
    </div>
  )
}
export default All
