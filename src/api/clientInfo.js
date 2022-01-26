import { api } from '@/api/instance'

export const GetClientIP = async () => {
  return await api({
    url: 'https://api.ipify.org?format=json',
    method: 'GET',
  })
}

export const GetIPInfo = async ({ ip }) => {
  return await api({
    url: `https://ipapi.co/${ip}/json/`,
    method: 'GET',
  })
}
