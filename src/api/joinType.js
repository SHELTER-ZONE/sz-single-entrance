import { api } from '@/api/instance'
import { guildID } from '@/static/variables.js'

export const GetMemberJoinType = async (memberID) => {
  return await api({
    url: `https://sz-bot.deta.dev/cacheData/${guildID}/joinType/${memberID} `,
    method: 'GET',
  })
}

export const TemporaryJoin = async ({
  memberID,
}) => {
  return await api({
    url: `https://sz-bot.deta.dev/cacheData/${guildID}/joinType/temporary `,
    method: 'POST',
    data: {
      memberID,
    },
  })
}

export const PermanentJoin = async ({
  memberID,
}) => {
  return await api({
    url: `https://sz-bot.deta.dev/cacheData/${guildID}/joinType/permanent `,
    method: 'POST',
    data: {
      memberID,
    },
  })
}
