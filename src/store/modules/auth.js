import { GetDCAuthorizeUrl, GetDCAccessToken } from '@/api/oauth'
import { FindMe } from '@/api/user'

const auth = ({
  state: {
    loggedIn: false,
    user: null,
    accessToken: null,
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ACCESS_TOKEN: (state, accessToken) => {
      state.accessToken = accessToken
    },
    SET_LOGGEDIN: (state, loggedIn) => {
      state.loggedIn = loggedIn
    },
  },
  actions: {
    async getDCAuthorizeUrl () {
      const [res, err] = await GetDCAuthorizeUrl({
        redirectUri: `${location.protocol}//${location.host}/sz-single-entrance/#/callback`,
      })
      if (err) return [null, err]
      return [res, null]
    },
    async getDCAccessToken ({ commit }, { code }) {
      const [res, err] = await GetDCAccessToken({
        code,
        redirectUri: `${location.protocol}//${location.host}/sz-single-entrance/#/callback`,
      })
      if (err) return [null, err]
      commit('SET_ACCESS_TOKEN', res.access_token)
      return [res, null]
    },
    async findMe ({ state, commit }) {
      const [res, err] = await FindMe(state.accessToken)
      if (err) return [null, err]
      commit('SET_USER', res)
      return [res, null]
    },
  },
})

export default auth
