<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 ml-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        فروشگاه
      </a>
      <div
        class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8"
      >
        <h2
          class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          تغییر رمز عبور
        </h2>
        <form
          class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
          action="#"
          @submit.prevent="AuthStore.ResetPassword()"
        >
          <input type="text" v-model="AuthStore.token" hidden />
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ایمیل شما</label
            >
            <input
              v-model="AuthStore.email"
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 disabled text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
              disabled
              readonly
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >پسورد جدید</label
            >
            <input
              v-model="AuthStore.password"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
            <p
              v-if="AuthStore.errors.password"
              class="mt-2 text-sm text-red-600 dark:text-red-500"
            >
              {{ AuthStore.errors.password[0] }}
            </p>
          </div>
          <div>
            <label
              for="confirm-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >تکرار پسور جدید</label
            >
            <input
              v-model="AuthStore.password_confirmation"
              type="confirm-password"
              name="password_confirmation"
              id="confirm-password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
            <p
              v-if="AuthStore.errors.password_confirmation"
              class="mt-2 text-sm text-red-600 dark:text-red-500"
            >
              {{ AuthStore.errors.password_confirmation[0] }}
            </p>
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="newsletter"
                aria-describedby="newsletter"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div class="mr-3 text-sm">
              <label
                for="newsletter"
                class="font-light text-gray-500 dark:text-gray-300"
              >
                <a
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                  >من شرایط و ضوابط را می‌پذیرم</a
                ></label
              >
            </div>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            تغییر رمز
          </button>
          <!-- <p
              v-if="AuthStore.status"
              class=" alert mt-2 text-sm p-2 rounded-sm font-bold text-center text-white dark:text-white bg-green-600 dark:bg-green-600"
            >
              {{ AuthStore.status }}
            </p> -->
          <div
            v-if="AuthStore.status"
            class="absolute top-0 start-0 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
            role="alert"
          >
            <div class="flex p-4">
              <div class="flex-shrink-0">
                <svg
                  class="flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                  />
                </svg>
              </div>
              <div class="ms-4">
                <p class="text-sm text-gray-700 dark:text-gray-400">
                  {{ AuthStore.status }}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, onUpdated } from "vue";
import { useRoute } from "vue-router";

import { useRegisterUser } from "/store/AuthStore";

const AuthStore = useRegisterUser();

const route = useRoute();

onMounted(() => {
  AuthStore.token = route.query.token;
  AuthStore.email = route.query.email;
});


 onUpdated(() => {
      if (AuthStore.status != null) {
        // Clear the message
        setTimeout(async () => {
          await AuthStore.ResetPassword();
          navigateTo("/auth/login");
          AuthStore.status = "";
        }, 12000);
      }
    });


</script>
