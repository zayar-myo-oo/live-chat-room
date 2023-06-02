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
import { auth } from "../firebase/config";
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  setup() {
    let displayName = ref("");
    let email = ref(""); 
    let password = ref("");
    let error=ref(null)
    let signUp =async ()=>{
      try{
        let res=await createUserWithEmailAndPassword(auth,email.value,password.value);//async code so use await
        console.log(res);
        if(!res){
          throw new Error("Could not create new User");
        }
      }catch(e){
        error =e.message;
      }
      
    }
    return { displayName,email,password,signUp,error}
}

}
</script>

<style>

</style>