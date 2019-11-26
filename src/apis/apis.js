import fetch from 'utils/fetch'

export function fetchIDList() {
  return fetch('/onelist/idlist')
}

export function fetchCurrentList(uuid) {
  return fetch(`/onelist/${uuid}/0`)
}

export function fetchContent(uuid) {
  return fetch(`/essay/${uuid}`)
}

export function fetchClassification() {
  return fetch(`/banner/list/4?last_id=0&channel=cool`)
}

export function fetchTopical(uuid) {
  return fetch(`/topic/htmlcontent/${uuid}?channel=cool`)
}

export function fetchNavigationList(type, date) {
  return fetch(`/${type}/bymonth/${date}`)
}

/**
 * api/serialcontent/bymonth/2019-11  连载
 * api/question/bymonth/2019-11  问答
 * api/essay/bymonth/2019-11  文章
 * api/music/bymonth/2019-11  音乐
 * api/hp/bymonth/2019-11  图文
 */
