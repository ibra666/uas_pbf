import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "../firebase.config";
  
  // Save item baru
  export const saveItem = async (data) => {
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
      merge: true,
    });
  };
  
  // get all food items
  export const getAllFoodItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
  };

  export const getAllMemberItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "memberItems"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
  };

  export const saveCheckout = async (userid, data) => {
    await setDoc(doc(firestore, "checkoutItems", userid), data, {
      merge: true,
    });
  };