import { api } from '@/api/instance'

export const FindMe = async (accessToken) => {
  return await api({
    method: 'get',
    url: 'https://discord.com/api/v9/users/@me',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}
