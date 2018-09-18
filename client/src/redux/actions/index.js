const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

export default instance;