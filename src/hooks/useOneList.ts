import * as React from 'react'

import { fetchIDList } from 'apis/apis'

const useOnelist = (reload) => {
  const [data, setData] = React.useState<string[]>([])
  React.useEffect(() => {
    async function fetchData() {
      const { data } = await fetchIDList()

      setData(data)
    }

    fetchData()
  }, [reload])

  return data
}

export default useOnelist
