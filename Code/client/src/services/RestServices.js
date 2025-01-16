import axios from 'axios'

let serverUrl = "http://<SERVER_ALB_URL>" //this value is replaced by AWS CodeBuild 

export default {
    async getAllProducts() {
        return await axios.get(serverUrl+"/api/getAllProducts");
    },
}
