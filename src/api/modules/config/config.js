import http from '@/api/http';
import * as url from '@/api/const';

export function getConfig(params) {
  return http.get(url.config.apiError, params);
}
