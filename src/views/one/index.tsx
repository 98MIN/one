import * as React from 'react'

import Find from 'components/find'

import useOneList from 'hooks/useOneList'
import useCurrentList from 'hooks/useCurrentList'

const One = () => {
  const [reload, setReload] = React.useState<number>(0)
  const data = useOneList(reload)
  const cur_data = useCurrentList(reload, data[0])

  return <Find picture="http://image.wufazhuce.com/Fhtls7PgldVmNGYftTdx8YLEAHKo" type="摄影" author="Alvaro Matzumura" />
}
export default One
