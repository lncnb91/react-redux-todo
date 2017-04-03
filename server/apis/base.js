import fetch from 'node-fetch'

/**
 * Helper Http request
 */
export default class HttpRequest {
  constructor (props) {
    const { baseUrl, fSegment } = props
    if (!baseUrl) {
      throw new Error('baseUrl is required')
    }
    this.baseUrl = baseUrl
    this.fSegment = fSegment
    this.commonHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    this.post = this.post.bind(this)
    this.put = this.put.bind(this)
    this.del = this.del.bind(this)
  }

  /**
   * HTTP POST Method
   * @param path
   * @param req
   * @returns {Promise.<*|Promise>}
   */
  async get ({ path, req, override }) {
    const url = override ? path : `${this.baseUrl}${this.fSegment}${path}`
    let body
    req && (body = JSON.stringify(req)) // eslint-disable-line no-unused-expressions
    const resp = await fetch(url, {
      method: 'get',
      headers: {
        ...this.commonHeaders
      },
      body
      // credentials: 'include',
    })
    const status = resp.status
    let data
    switch (status) {
      case 200:
      case 201: {
        data = await resp.json()
        return {
          data,
          status
        }
      }
      default: {
        data = await resp.text()
        const err = new Error(data)
        err.status = status
        throw err
      }
    }
  }

  /**
   * HTTP POST Method
   * @param path
   * @param req
   * @returns {Promise.<*|Promise>}
   */
  async post ({ path, req, override }) {
    const url = override ? path : `${this.baseUrl}${this.fSegment}${path}`
    let body
    req && (body = JSON.stringify(req)) // eslint-disable-line no-unused-expressions
    const resp = await fetch(url, {
      method: 'post',
      headers: {
        ...this.commonHeaders
      },
      body
      // credentials: 'include',
    })
    const status = resp.status
    let data
    switch (status) {
      case 200:
      case 201: {
        data = await resp.json()
        return {
          data,
          status
        }
      }
      default: {
        data = await resp.text()
        const err = new Error(data)
        err.status = status
        throw err
      }
    }
  }

  /**
   * HTTP PUT Method
   * @param path
   * @param req
   * @returns {Promise.<Promise|*>}
   */
  async put ({ path, req, override }) {
    const url = override ? path : `${this.baseUrl}${this.fSegment}${path}`
    const resp = await fetch(url, {
      method: 'put',
      headers: {
        ...this.commonHeaders
      },
      body: req
      // credentials: 'include',
    })
    const status = resp.status
    let data
    switch (status) {
      case 200:
      case 201: {
        data = await resp.json()
        return {
          data,
          status
        }
      }
      default: {
        data = await resp.text()
        const err = new Error(data)
        err.status = status
        throw err
      }
    }
  }

  /**
   * HTTP DELETE Method
   * @param path
   * @returns {int} status code
   */
  async del ({ path, override }) {
    try {
      const url = override ? path : `${this.baseUrl}${this.fSegment}${path}`
      const resp = await fetch(url, {
        method: 'delete',
        headers: {
          ...this.commonHeaders
        }
      })
      return resp.status
    } catch (e) {
      throw e
    }
  }
}
