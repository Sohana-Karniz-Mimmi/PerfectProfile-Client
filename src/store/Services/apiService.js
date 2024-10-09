import axios from "axios";

const api = axios.create({
        baseURL: `${import.meta.env.VITE_LOCALHOST}`, // Adjust the base URL
});

export const getUsers = async (page = 1, limit = 10) => {
        const response = await api.get(`/users?page=${page}&limit=${limit}`);
        return response.data;
};

export const getPredefinedTemplates = async () => {
        const response = await api.get("/predefined-templates");
        return response.data; // Return only the templates
};