import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {

    const config = useRuntimeConfig();

    axios.defaults.baseURL = config.public.apiBase
    axios.defaults.withCredentials = true;
    axios.defaults.proxyHeaders = false;
    axios.defaults.headers.head.Accept = "application/json"

    if (process.client) {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }
    return {
        provide: {
            axios: axios
        }
    }
})