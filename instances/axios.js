import axios from "axios";

const Axios = axios.create({
    baseURL: "",
    timeout: 100000
})

export default Axios