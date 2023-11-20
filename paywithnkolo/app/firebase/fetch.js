import {firebaseApp} from "./fbconfig.js";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp).collection("Core");


export async function updatePayment(uid, inid, data){
  let result = null;
    let error = null;

    const database = db.doc(uid); 

    try {
        result = await setDoc(doc(db, "Invoices", inid), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getInvoice(uid, inid ){
  const reference = db.doc(uid).collection('Invoices').doc(inid); 
   
  let result = null;
  let error = null;

  try {
        result = await getDoc(reference);
    } catch (e) {
        error = e;
    }

  return { result, error }; 
}

