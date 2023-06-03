import { ref } from "vue";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/config";
let error = ref(null);

let loginAccount = async (email, password) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("can't login!something wrong!");
    }
    return res;
  } catch (e) {
    error.value = e.message;
  }
}

let useLogin = () => {
  return { loginAccount, error };
}

export default useLogin;