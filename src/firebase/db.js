import { db } from "./init";
import {
  collection,
  query,
  getDocs,
  addDoc,
} from "firebase/firestore";


const getOffers = async () => {
  const q = query(collection(db, "offers"));
  const querySnapshot = await getDocs(q);
  const offers = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    offers.push(doc.data());
  });
  return offers;
}

const addOffer = async (data) => {
  console.log(`data`, data);
  try {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "offers"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(`error`, error.message);
  }
}

export {
  getOffers,
  addOffer,
}