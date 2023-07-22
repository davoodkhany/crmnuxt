<template>
  <div class="h-screen">
    <div class="absolute overflow-hidden md:flex xs:flex-col">
      <div class="md:w-[580px] px-8 py-auto bg-white h-screen my-auto">
        <div class="mt-5">
          <h3 class="text-lg text-[#31474D] font-bold">بیا شروع کن</h3>
          <p class="text-xs text-[#81A4AE] mt-2">برای ادامه ثبت نام کن</p>
        </div>
        <div class="flex items-center justify-center my-10">
          <div class="bg-[#F2F5F6] flex justify-around p-2 rounded-xl">
            <nuxt-link class="px-8 py-1 ml-4 border-none" to="/auth/login/"
              >ورود</nuxt-link
            >
            <nuxt-link
              class="bg-[#FBFCFC] text-[#31474D] border px-8 py-1 rounded-md border-none cursor-pointer"
              to="/auth/register/"
              >ثبت نام</nuxt-link
            >
          </div>
        </div>
        <div>
          <form action="" @submit.prevent="AuthStore.RegisterUser()">
            <div class="mb-6">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-[#31474D]"
                >نام<span class="text-red-600"> *</span></label
              >
              <input
                type="text"
                id="name"
                length="10"
                v-model="AuthStore.name"
                class="invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-lg focus:ring-blue-500 text-[#587E89] text-sm w-full p-2.5 outline-none bg-[#F2F5F6] border-[#F2F5F6] ring-blue-500 focus:border-blue-500"
                placeholder="داود خانی"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-[#31474D]"
                >ایمیل<span class="text-red-600"> *</span></label
              >
              <input
                type="email"
                id="email"
                v-model="AuthStore.email"
                class="text-left rounded-lg focus:ring-blue-500 text-[#587E89] text-sm w-full p-2.5 outline-none bg-[#F2F5F6] border-[#F2F5F6] ring-blue-500 focus:border-blue-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="test@company.com"
                required
              />
              <p
                v-if="AuthStore.errors.email"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                {{ AuthStore.errors.email[0] }}
              </p>
            </div>

            <div class="mb-2">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-[#31474D]"
                >پسورد<span class="text-red-600"> *</span></label
              >
              <div
                class="flex justify-between text-sm rounded-lg focus:ring-blue-500 w-full p-2.5 bg-[#F2F5F6] border-[#F2F5F6] ring-blue-500 focus:border-blue-500"
              >
                <i
                  class="cursor-pointer fa-sharp fa-light fa-eye left-2 text-[#587E89]"
                  @click="showPassword = !showPassword"
                  v-if="showPassword == true"
                ></i>
                <i
                  class="cursor-pointer fa-sharp fa-solid fa-eye-slash left-2 text-[#587E89]"
                  @click="showPassword = !showPassword"
                  v-if="showPassword == false"
                ></i>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="AuthStore.password"
                  class="bg-[#F2F5F6] text-left border-[#F2F5F6] border-none outline-none ltr text-[#587E89] w-full"
                  placeholder="@#Aa123456"
                  pattern=".{7,}"
                  required
                />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <input class="ml-2" type="checkbox" name="Rememberme" id="" />
                <label class="text-sm" for="Rememberme"
                  >مرا به خاطر بسپار</label
                >
              </div>
              <div>
                <a href="" class="text-[#34A18D] text-xs">فراموشی رمز</a>
              </div>
            </div>
            <div>
              <button
                class="w-full bg-[#34A18D] py-2 rounded-lg my-6 text-white font-medium text-xl"
                type="submit"
              >
                ثبت نام
              </button>
              <p class="text-sm text-justify">
                با ثبت نام، شما با شرایط و قوانین ما موافقت می‌کنید و ما تضمین
                می‌کنیم که حریم خصوصی شما رعایت خواهد شد.
              </p>
            </div>
          </form>
        </div>
        <div class="relative my-4">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center">
            <span class="px-2 text-sm text-gray-500 bg-white">ادامه با</span>
          </div>
        </div>

        <div class="mb-4">
          <a
            class="flex items-center py-1 px-4.5 justify-center border-2 rounded-xl"
            href=""
            >ورود با فیس بوک
            <svg
              class="mr-5"
              width="8%"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Pro 6.0.0-beta1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
              <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              /></svg
          ></a>
        </div>
      </div>
    </div>
    <div>
      <div class="hidden md:flex">
        <img
          src="/assets/images/backlogin.webp"
          class="w-screen h-screen"
          style=""
          alt=""
        />
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, watchEffect } from "vue";

// UserStore Import
import { useRegisterUser } from "@/store/UserStore.js";

// Axios Import
import axios from "axios";

// store connect
const AuthStore = useRegisterUser();

const showPassword = ref(true);

// seo config
useHead({
  title: "Register App",
  meta: [
    { name: "description", content: "davood" },
    { name: "title", content: "title" },
  ],
});

// Email Verification

watchEffect(() => {
  if (AuthStore.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    axios
      .post("/auth/email-verified", { email: AuthStore.email })
      .then((res) => {
        if (res.data.errors) {
          AuthStore.errors = res.data.errors;
        } else {
          AuthStore.errors = "";
        }
      })
      .catch((err) => {
       AuthStore.errors = err.response.data.errors
      });
  }
});
</script>
