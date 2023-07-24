<script setup>
import axios from "axios";
import path from "path";

import { GoogleSignInButton, decodeCredential } from "vue3-google-signin";
import { useOneTap } from "vue3-google-signin";

useOneTap({
  onSuccess: (response) => {
    const { credential } = response;
    const decodedCredential = decodeCredential(credential);

    axios.post("/auth/google-login", decodedCredential)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigateTo({ path: "/dashboard" });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  onError: () => console.error("Error with One Tap Login"),
  // options
});

const handleSignInSuccess = (response) => {
  const { credential } = response;
  const decodedCredential = decodeCredential(credential);

  axios
    .post("/auth/google-login", decodedCredential)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      navigateTo({ path: "/dashboard" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleSignInError = () => {
  console.error("Signin Failed");
};
</script>

<template>
  <GoogleSignInButton
    @success="handleSignInSuccess"
    @error="handleSignInError"
  />
</template>
