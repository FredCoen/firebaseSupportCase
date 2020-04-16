import { WriteBatch } from './WriteBatch';
import { firestore } from "firebase-admin"
import * as functions from 'firebase-functions';



export const  batching = functions.https.onRequest(async(req,resp)=>{
    const writes = new WriteBatch();
    const ref = firestore().doc('users/userOne')
    writes.create(ref, {content:'content'})
    await writes.commit() 
    resp.send("doc added");

})
