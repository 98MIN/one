import * as React from 'react'

import { fetchCurrentList } from 'apis/apis'

const useCurrentList = (reload, uuid) => {
  const [data, setData] = React.useState<string[]>([])

  React.useEffect(() => {
    async function fetchData() {
      if (uuid) {
        const { data } = await fetchCurrentList(uuid)

        setData(data)
      }
    }

    fetchData()
  }, [reload, uuid])

  console.log(data, 'two')
  return data
}

export default useCurrentList
