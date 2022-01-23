import { api } from '@/api/instance'

export const GetClientInfo = async () => {
  return await api({
    url: 'http://ip-api.com/json/',
    method: 'GET',
  })
}
