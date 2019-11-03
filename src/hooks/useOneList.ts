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

  console.log(data,'one')
  return data
}

export default useOnelist
