import { api } from '@/api/instance'

export const GetMemberJoinType = async (memberID) => {
  return await api({
    url: `https://sz-bot-dev.deta.dev/cacheData/joinType/${memberID} `,
    method: 'GET',
  })
}

export const TemporaryJoin = async ({
  memberID,
}) => {
  return await api({
    url: 'https://sz-bot-dev.deta.dev/cacheData/joinType/temporary ',
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
    url: 'https://sz-bot-dev.deta.dev/cacheData/joinType/permanent ',
    method: 'POST',
    data: {
      memberID,
    },
  })
}
