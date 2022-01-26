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
  const errMsg = error.response.data.error.message
  return [null, errMsg || error.response.data]
}

//= > use
api.interceptors.response.use(handleSuccessRes, handleErrorRes)
