import * as React from 'react'

import useOneList from 'hooks/useOneList'
import useCurrentList from 'hooks/useCurrentList'

const One = () => {
  const [reload, setReload] = React.useState<number>(0)
  const data = useOneList(reload)
  const cur_data = useCurrentList(reload, data[0])

  return null
}
export default One
