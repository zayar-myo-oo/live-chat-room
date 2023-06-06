<template>
  <form>
    <textarea placeholder="text message and hit enter to send" v-model="message"
      @keypress.enter="handleSubmit"></textarea>
  </form>
</template>

<script>
import { ref } from 'vue';
import { auth, timestamp } from '../firebase/config';
import useCollection from '@/composables/useCollection';
export default {
  setup() {
    
    let message = ref("");
    let { error, dbAddDoc } = useCollection("messages");
    let handleSubmit = () => {
      let chat = {
        message:message.value,
        name: auth.currentUser.displayName,
        created_at: timestamp
      }
      dbAddDoc(chat);
      message.value=""
    }
    return{message,handleSubmit}
  }
}
</script>

<style>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>