import { api } from '@/api/instance'

export const GetEntryCode = async ({
  country,
  id,
  source,
  ip,
}) => {
  return await api({
    url: 'https://sz-entry-check.deta.dev/encode',
    method: 'POST',
    data: {
      country,
      id,
      source,
      ip,
    },
  })
}
