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
    playerInsertItem(data) {
        return this.apiClient.post(`/player`, data);
    }
    playerUpdateItem(data) {
        return this.apiClient.patch(`/player`, data);
    }

    enemyGet() {
        return this.apiClient.get("/enemy");
    }
    enemyGetByName(name) {
        return this.apiClient.get(`/enemy/${name}`);
    }
}

const apiClient = new ApiClient();
export default apiClient;