import { defineStore } from 'pinia'
import axios from 'axios'


export const useRegisterUser = defineStore({
    id: 'register',
    state: () => {
        return {
            email: '',
            password: '',
            name: '',
            company: '',
            status: null,
            errors: '',
            results: '',
            user: '',
            auth: '',
            token: '',
            password_confirmation: ''
        }
    },

    getters: {

    },

    actions: {
        //Register User  
        RegisterUser() {
            const formData = {
                email: this.email,
                name: this.name,
                password: this.password,
            }
            axios.post('/auth/register',
                    formData
                )
                .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    navigateTo({ path: '/dashboard' });
                })
                .catch(err => {
                    this.errors = err.response.data.errors
                })
        },


        // Login User

        LoginUser() {
            const formData = {
                email: this.email,
                password: this.password
            }

            axios.post('/auth/login', formData)
                .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    navigateTo({ path: '/dashboard' })
                })

            .catch((err) => {
                this.errors = err.response.data.errors


            })
        },
        //SignOut User
        SignOut() {

            axios.post('/auth/sign-out', )
                .then((res) => {
                    if (res.status == 200) {
                        localStorage.removeItem('token');

                        navigateTo({ path: '/' });
                    }
                })

            .catch((err) => {
                console.log(err);

            })

        },


        GoogleLogin() {
            axios.get('/auth/google')
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        ForgetPassword() {
            const formData = {
                email: this.email
            }
            axios.post('/auth/forget-password', formData)
                .then((res) => {
                    console.log('ایمیل ارسال شد');
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        ResetPassword() {
            const formData = {
                email: this.email,
                password: this.password,
                token: this.token,
                password_confirmation: this.password_confirmation
            };

            axios.post('/auth/reset-password', formData)
                .then((res) => {
                    this.status = res.data.message;
                    this.errors = "";
                })
                .catch((err) => {
                    this.errors = err.response.data.errors
                })

        }
    }
})