import { ref } from "vue";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../firebase/config";
let error = ref(null);

let createAccount = async (email, password, displayName) => {
  try {
    console.log(email, password, displayName);
    let res = await createUserWithEmailAndPassword(auth, email, password);//async code so use await
    updateProfile(res.user, { displayName })
    if (!res) {
      throw new Error("Could not create new User");
    }
    return res;
  } catch (e) {
    error.value = e.message;
  }

}

let useSignup = () => {

  return { error, createAccount };
}

export default useSignup; 