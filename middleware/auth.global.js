import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

import axios from "axios";


async function isAuthenticated() {

    let token = localStorage.getItem("token")
        // console.log(token);
    if (token == null) {
        return false;
        // console.log('test');
    }
    try {
        const res = await axios.get("/user", {
            headers: {
                Authorization: `Bearer ${token}`,
                token: token,
            },
        });
        return true;
    } catch (err) {
        return false;
    }
}



export default defineNuxtRouteMiddleware(async(to, from) => {

    const isAuth = await isAuthenticated()

    const isDashboardRoute = /^\/dashboard/.test(to.fullPath);

    if (isDashboardRoute && !isAuth) {
        return navigateTo("/auth/login");
    }

    if (to.fullPath === "/auth/login" && isAuth) {

        return navigateTo("/dashboard");
    }

    if (to.fullPath === "/auth/register" && isAuth) {
        return navigateTo("/dashboard");
    }


});