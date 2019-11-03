import fetch from 'utils/fetch'

//获取最近十天的图文集合数组
export function fetchIDList() {
  return fetch('/onelist/idlist')
}

//获取当天的图文集合
export function fetchCurrentList(uuid) {
  return fetch(`/onelist/${uuid}/0`)
}
