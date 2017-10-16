import http from '@/api/http';
import * as url from '@/api/const';

export function initData(params) {
  return http.get(url.user.apiUrl, params);
}
