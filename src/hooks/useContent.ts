import * as React from 'react'

import { fetchContent } from 'apis/apis'

const useContent = (uuid) => {
  const [data, setData] = React.useState<any>([])
  React.useEffect(() => {
    async function fetchData() {
      const { data } = await fetchContent(uuid)

      setData(data)
    }

    fetchData()
  }, [uuid])

  return data
}

export default useContent
