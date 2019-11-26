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
