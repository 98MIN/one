import * as React from 'react'

import { fetchCurrentList } from 'apis/apis'

export interface Result {
  id?: string
  ad?: []
  content_list?: Content[]
  date?: string
  menu?: Object
  weather?: {
    city_name?: string
    date?: string
    temperature?: string
    humidity?: string
    climate?: string
    wind_direction?: string
    hurricane?: string
    icons?: { day: string; night: string }
  }
}

export interface Content {
  id: string
  category: string
  display_category: string
  item_id: string
  title: string
  forward: string
  img_url: string
  like_count: number
  post_date: string
  last_update_date: string
  author: {}
  video_url: string
  audio_url: string
  audio_platform: number
  start_video: string
  has_reading: number
  volume: string
  pic_info: string
  words_info: string
  subtitle: string
  number: number
  serial_id: number
  serial_list: []
  movie_story_id: number
  ad_id: number
  ad_type: number
  ad_pvurl: string
  ad_linkurl: string
  ad_makettime: string
  ad_closetime: string
  ad_share_cnt: string
  ad_pvurl_vendor: string
  content_id: string
  content_type: string
  content_bgcolor: string
  share_url: string
  share_info: {
    url: string
    image: string
    title: string
    content: string
  }
  share_list: {
    wx: {
      title: string
      desc: string
      link: string
      imgUrl: string
      audio: string
    }
    wx_timeline: {
      title: string
      desc: string
      link: string
      imgUrl: string
      audio: string
    }
    weibo: {
      title: string
      desc: string
      link: string
      imgUrl: string
      audio: string
    }
    qq: { title: string; desc: string; link: string; imgUrl: string; audio: string }
  }
  tag_list: []
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
