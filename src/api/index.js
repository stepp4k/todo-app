import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api/',
    timeout: 5000,
    headers: {'Authorization': 'basic 9908eff4-41ee-4814-9591-ddf29ce0ea69'}
  });

export default instance;