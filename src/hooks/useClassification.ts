import * as React from 'react'

import { fetchClassification } from 'apis/apis'

export interface IClassification {
  category: number
  content_id: string
  cover: string
  id: number
  is_stick: boolean
  link_url: string
  serial_list: []
  title: string
}

const useClassification = (reload) => {
  const [data, setData] = React.useState<IClassification[]>([])
  React.useEffect(() => {
    async function fetchData() {
      const { data } = await fetchClassification()

      setData(data)
    }

    fetchData()
  }, [reload])

  return data
}

export default useClassification
