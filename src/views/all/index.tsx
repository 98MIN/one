import * as React from 'react'
import NavBar from 'components/navBar'
import { Icon } from 'antd-mobile'

const All: React.FC<any> = () => {
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
    </div>
  )
}
export default All
