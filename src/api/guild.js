import { api } from '@/api/instance'

export const GuildWidget = async () => {
  return await api({
    method: 'get',
    url: 'https://discord.com/api/guilds/445157253385814016/widget.json',
  })
}

export const GetGuildMembers = async ({ limit, page }) => {
  return await api({
    method: 'GET',
    url: 'https://sz-dashboard.deta.dev/guild/members',
    params: {
      limit, page,
    },
  })
}
