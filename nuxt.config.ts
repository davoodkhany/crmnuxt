// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  css: ["~/assets/css/tailwind.css", "~/assets/fontawesome/css/all.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@pinia/nuxt",
    "@nuxt/devtools",
    "nuxt-icon",
    'nuxt-vue3-google-signin'
  ],
  googleSignIn: {
    clientId: '547858332775-4ik3eeg5a0edjp52834nhm8ut4380s20.apps.googleusercontent.com',
  },
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },

// API URL CONFIG
  runtimeConfig:{
    public:{
      apiBase:process.env.baseURL
    }
  },


ssr:false,

})