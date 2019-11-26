import * as React from 'react'

import { fetchTopical } from 'apis/apis'

export interface ITopical {
  uthor_list: []
  bg_color: string
  category: number
  commentnum: number
  enable_comment: boolean
  font_color: string
  html_content: string
  id: string
  praisenum: number
  share_list: object
  tag_list: []
  title: string
  web_url: string
}

const useTopical = (uuid) => {
  const [data, setData] = React.useState<ITopical>({
    uthor_list: [],
    bg_color: '',
    category: 0,
    commentnum: 0,
    enable_comment: true,
    font_color: '',
    html_content: '',
    id: '',
    praisenum: 0,
    share_list: {},
    tag_list: [],
    title: '',
    web_url: '',
  })
  React.useEffect(() => {
    async function fetchData() {
      const { data } = await fetchTopical(uuid)

      setData(data)
    }

    fetchData()
  }, [uuid])

  return data
}

export default useTopical
