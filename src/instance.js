import axios from "axios"
const AxiosInstance=axios.create({   baseURL:"http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=e8ee08ec1c66047435b56384150f0f20"
})
export default AxiosInstance