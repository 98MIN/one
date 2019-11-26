import * as React from 'react'

import { fetchNavigationList } from 'apis/apis'

const useNavigationList = (type, date) => {
  const [data, setData] = React.useState<any>([])
  React.useEffect(() => {
    async function fetchData() {
      const { data } = await fetchNavigationList(type, date)

      setData(data.map((v) => ({ ...v, uuid: v[`${type}_id`] })))
    }

    fetchData()
  }, [type, JSON.stringify(date)])

  return data
}

export default useNavigationList
