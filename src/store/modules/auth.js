import { GetDCAuthorizeUrl, GetDCAccessToken } from '@/api/oauth'

const auth = ({
  state: {
    loggedIn: false,
    user: null,
    accesstoken: null,
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ACCESSTOKEN: (state, accesstoken) => {
      state.accesstoken = accesstoken
    },
    SET_LOGGEDIN: (state, loggedIn) => {
      state.loggedIn = loggedIn
    },
  },
  actions: {
    async getDCAuthorizeUrl () {
      const [res, err] = await GetDCAuthorizeUrl({
        redirectUri: `${location.protocol}//${location.host}/callback`,
      })
      if (err) return [null, err]
      return [res, null]
    },
    async getDCAccessToken ({ commit }, { code }) {
      const [res, err] = await GetDCAccessToken({
        code,
        redirectUri: `${location.protocol}//${location.host}/callback`,
      })
      if (err) return [null, err]
      commit('SET_ACCESSTOKEN', res.access_token)
      return [res, null]
    },
  },
})

export default auth
