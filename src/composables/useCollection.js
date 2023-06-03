import { ref } from "vue";
import { db } from "../firebase/config";
// import { collection, addDoc } from "firebase/firestore";
let useCollection = (_collection) => {
  let error = ref(null);
  let addDoc = async (_doc) => {
    try {
      await db.collection(_collection).add(_doc);
      // let dbCollection = collection(db, _collection);
      // let dbDoc = await addDoc(dbCollection, _doc)
      // console.log(dbDoc);
    } catch (e) {
      error.value = e.message;
      console.log(e.message)
    }

  };

  return { error, addDoc }
}

export default useCollection;