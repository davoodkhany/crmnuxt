<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    type="button"
                    class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                  
                  </button>
                </div>
              </TransitionChild>
              <div class="flex items-center flex-shrink-0 px-4">
                <img
                  class="w-auto h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                  alt="Your Company"
                />
              </div>
              <div class="flex-1 h-0 mt-5 overflow-y-auto">
                <!-- <nav class="px-2 space-y-1">
                  <nuxt-link
                    keep-alive
                    v-for="item in navigation"
                    :to="item.href"
                    :key="item.name"
                    :class="[
                      item.current == true
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100 hover:text-portage-500',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md active active:text-portage-500',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      class="flex-shrink-0 w-6 h-6 mr-4 text-indigo-300"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </nuxt-link>
                </nav> -->
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
        <div class="flex items-center justify-center flex-shrink-0 px-4">
          <img
            class="w-auto h-8"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
            alt="Your Company"
          />
        </div>
        <hr class="mt-3" />
        <div class="flex flex-col">
          <nav class="flex-1 px-2">
            <ul v-for="item in navigation" :key="item.name">
              <nuxt-link
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current
                    ? 'text-portage-500'
                    : 'text-black hover:text-portage-500',
                  'group px-2 text-xs font-medium rounded-md active active:text-portage-500',
                ]"
                @click="toggleSubMenu(item)"
              >
                <div
                  class="flex items-center justify-between text-base text-center"
                >
                  <div>
                    <i class="ml-2" :class="item.Icon"></i>
                    {{ item.name }}
                  </div>
                  <i
                    v-if="item.subMenu && !item.showSubMenu"
                    class="left-0 ml-4 fa-regular fa-chevron-right fa-2xs"
                  ></i>
                  <i
                    v-if="item.subMenu && item.showSubMenu"
                    class="left-0 ml-4 fa-regular fa-chevron-down fa-2xs"
                  ></i>
                </div>
              </nuxt-link>

              <!-- Show Sub Menu -->
              <ul
                v-if="item.subMenu && item.showSubMenu"
                class="mr-4"
                :class="['sub-menu', item.showSubMenu ? 'show' : '']"
              >
                <li
                  v-for="subItem in item.subMenu"
                  :key="subItem.name"
                  class=""
                >
                  <nuxt-link :to="subItem.href">
                    <div class="mb-4">
                      <i :class="subItem.Icon" class="text-xs"></i>
                      {{ subItem.name }}
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 md:pr-64">
      <div class="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow">
        <button
          type="button"
          class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
       
        </button>
        <div class="flex justify-between flex-1 px-4">
          <div class="flex flex-1">
            <form class="flex w-full md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                >
                 
                </div>
                <input
                  id="search-field"
                  class="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="flex items-center ml-4 md:ml-6">
            <button
              type="button"
              class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">View notifications</span>
           
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-44">
              <div>
                <MenuButton
                  class="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      v-if="item.name !== 'Sign out'"
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</a
                    >
                    <a
                      v-else
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                      ]"
                      @click.prevent="AuthStore.SignOut"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main>
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">
              <slot name="header"></slot>
            </h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <div class="py-4">
              <div
                class="border-4 border-gray-200 border-dashed rounded-lg h-96"
              >
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

import { useRegisterUser } from "@/store/AuthStore.js";

const AuthStore = useRegisterUser();

definePageMeta({
  layout: true,
  //   middleware: [
  //   'auth'
  // ],
});

import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const navigation = reactive([
  {
    name: "داشبورد",
    href: "/dashboard",
    current: true,
    Icon: "fa-solid fa-house",
  },
  {
    name: "اشخاص",
    href: "/dashboard/customers",
    current: false,
    Icon: "fa-solid fa-user",
    subMenu: [
      {
        name: "افزودن شخص جدید",
        href: "/dashboard/customers/add",
        Icon: "fa-solid fa-angle-right",
      },
      {
        name: "همه اشخاص",
        href: "/dashboard/customers",
        Icon: "fa-solid fa-angle-right",
      },
    ],
    showSubMenu: false,
  },

  { name: "پروفایل", href: "/profile", current: false, Icon: "" },
]);

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);

function toggleSubMenu(item) {
  item.showSubMenu = !item.showSubMenu;
}



function isActive(item) {
  return item.active;
}

</script>

<style>

.sub-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-hight 0.3s ease;
}

.sub-menu.show {
  max-height: 1000px;
}


</style>
