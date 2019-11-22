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
