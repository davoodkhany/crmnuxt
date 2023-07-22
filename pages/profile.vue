<script setup>
import { useOneTap } from "vue3-google-signin";

const { isReady, login } = useOneTap({
  onSuccess: (response) => {
    console.log("Success:", response);
  },
  onError: () => console.error("Error with One Tap Login"),
  // options
});
</script>

<template>
  <button :disabled="!isReady" @click="() => login()">
    Trigger One Tap Login Manually
  </button>
</template>


