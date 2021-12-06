import { db } from "./init";
import {
  collection,
  query,
  getDocs,
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
  // add this data to a document in db
}

export {
  getOffers,
  addOffer,
}