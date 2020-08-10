import axios from "axios";

class ApiClient {
    constructor() {
        this.apiClient = axios.create({
            baseURL: process.env.front
        });
    }


    itemsGet() {
        return this.apiClient.get("/items");
    }

    itemsGetByName(name) {
        return this.apiClient.get(`/items/${name}`);
    }
    playerGet() {
        return this.apiClient.get("/player");
    }

    playerGetByName(name) {
        return this.apiClient.get(`/player/${name}`);
    }

}

const apiClient = new ApiClient();
export default apiClient;