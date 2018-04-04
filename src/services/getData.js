import Axios from './Api'

export default function (URL) {
  return Axios.get(URL)
    .then(res => res.data)
}