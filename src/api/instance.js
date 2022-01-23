import axios from 'axios'

//= > api-auth
export const api = axios.create()

api.interceptors.request.use(async (config) => {
  return config
})

//= > handler
const handleSuccessRes = (response) => {
  return [response.data, null]
}

const handleErrorRes = (error) => {
  const errCode = error.response.data.errorCode
  let msg = error.response.data.msg
  if (errCode) msg = `${errCode}: ${msg}`
  return [null, msg || error]
}

//= > use
api.interceptors.response.use(handleSuccessRes, handleErrorRes)
