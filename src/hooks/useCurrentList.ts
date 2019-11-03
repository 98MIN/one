import * as React from 'react'

import { fetchCurrentList } from 'apis/apis'

interface Result {
  ad: []
  content_list: []
  date: string
  menu: Object
  weather: Object
}

const useCurrentList = (reload, uuid) => {
  const [data, setData] = React.useState<Result>({
    ad: [],
    content_list: [],
    date: '',
    menu: {},
    weather: {},
  })

  React.useEffect(() => {
    async function fetchData() {
      if (uuid) {
        const { data } = await fetchCurrentList(uuid)

        setData(data)
      }
    }

    fetchData()
  }, [reload, uuid])

  return data
}

export default useCurrentList
