import { db } from "./init";
import {
  collection,
  query,
  getDocs,
  where,
  onSnapshot,
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

export {
  getOffers,
}