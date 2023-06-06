import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
let useCollection = (_collection) => {
  let error = ref(null);
  let dbAddDoc = async (_doc) => {
    try {
      let dbCollection = collection(db, _collection);
      let dbDoc = await addDoc(dbCollection, _doc)
    } catch (e) {
      error.value = e.message;
      console.log(e.message)
    }
    //don't forget the set the rule
  };

  return { error, dbAddDoc }
}

export default useCollection;