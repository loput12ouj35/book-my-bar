import { identity } from './functions'

/** 응답형식이 Json인 경우만 사용할 것. */
class Fetcher {
  doFetch: SimpleRequestMethod = async (url, init = {}, decoder = identity) => {
    try {
      const response = await fetch(url, {
        ...init,
        body: JSON.stringify(init.body),
        headers: { ...init.headers, 'Content-Type': 'application/json' },
      })

      if (!response.ok) throw new Error('응답 에러')

      const data = await response.json()

      return decoder(data)
    } catch (error) {
      console.error(error)
    }
  }

  get: SimpleRequestMethod = (url, init, decoder) => this.doFetch(url, { ...init, method: 'GET' }, decoder)

  post: SimpleRequestMethod = (url, init, decoder) => this.doFetch(url, { ...init, method: 'POST' }, decoder)

  put: SimpleRequestMethod = (url, init, decoder) => this.doFetch(url, { ...init, method: 'PUT' }, decoder)

  delete: SimpleRequestMethod = (url, init, decoder) => this.doFetch(url, { ...init, method: 'DELETE' }, decoder)
}

const fetcher = new Fetcher()

export default fetcher

interface SimpleRequestInit extends Omit<RequestInit, 'body'> {
  body?: object
}

type SimpleRequestMethod = <T>(url: string, init?: SimpleRequestInit, decoder?: (response: any) => T) => Promise<T>
