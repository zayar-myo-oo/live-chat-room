<template>
<h2>Sign Up</h2>  
<form @submit.prevent="signUp">
  <input type="text" placeholder="display name" v-model="displayName">
  <input type="email" placeholder="email" v-model="email">
  <input type="password" placeholder="password" v-model="password">
  <button>sign up</button>
</form>
</template>

<script>
import { ref } from 'vue';
/* eslint-disable */
/* eslint-disable no-debugger, no-console */
export default {
  setup() {
    let displayName = ref("");
    let email = ref(""); 
    let password = ref("");
    let signUp=()=>{
      console.log(displayName.value,email.value,password.value)
    }
    return { displayName,email,password,signUp}
}

}
</script>

<style>

</style>