import { api } from '@/api/instance'

export const GetDCAuthorizeUrl = async ({ redirectUri }) => {
  return await api({
    method: 'POST',
    url: 'https://sz-bot-dev.deta.dev/oauth/getDCAuthorizeUrl',
    data: {
      redirectUri,
    },
  })
}

export const GetDCAccessToken = async ({ code, redirectUri }) => {
  return await api({
    method: 'POST',
    url: 'https://sz-bot-dev.deta.dev/oauth/getDCAccessToken',
    data: {
      code,
      redirectUri,
    },
  })
}
