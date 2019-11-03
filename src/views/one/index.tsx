import * as React from 'react'

import Find from 'components/find'

import useOneList from 'hooks/useOneList'
import useCurrentList from 'hooks/useCurrentList'

const One = () => {
  const [reload, setReload] = React.useState<number>(0)
  const data = useOneList(reload)
  const cur_data = useCurrentList(reload, data[0])
  console.log(cur_data)
  return (
    <Find
      picture="http://image.wufazhuce.com/Fhtls7PgldVmNGYftTdx8YLEAHKo"
      type="摄影"
      author="Alvaro Matzumura"
      forward="一般来说，外在事件和我们的目标就像两股方向相反的力，这两股力之间形成的对角线，就是我们生活的轨迹。"
      word_info="叔本华《人生的智慧》"
      like_count={'999+'}
    />
  )
}
export default One
