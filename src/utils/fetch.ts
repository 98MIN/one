export const BASE_URL = 'http://v3.wufazhuce.com:8000/api'

export default function fetch<T>(api: string, request?: object, timeout: number = 10000): Promise<T> {
  const url: string = BASE_URL + api
  let isTimeout: boolean = false

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      isTimeout = true
      reject(new Error('fetch timeout'))
    }, timeout)

    window
      .fetch(url, request)
      .then((v) => {
        clearTimeout(timer)

        resolve(v.json())
      })
      .catch((e) => reject(e))
  })
}
