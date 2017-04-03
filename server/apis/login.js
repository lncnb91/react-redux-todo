/**
 * Created by truong.tuan.quang on 4/1/17.
 */

import HttpRequest from './base'
import { apiUrl } from '../../config/site.config'

// region Helper Http request
const fSegment = '/v2/5185415ba171ea3a00704eed'
const request = new HttpRequest({ baseUrl: apiUrl.login, fSegment })
// endregion

const login = async () => {
  try {
    const rs = await request.get(
      { path: 'http://www.mocky.io/v2/5185415ba171ea3a00704eed', req: undefined, override: true }
    )
    return rs
  } catch (error) {
    console.log(error)
  }
}

export default {
  login
}
