import * as firebase from 'firebase/app'
import 'firebase/firestore';

let plantInfo;

let getPlantInfo = async (plantName) => {
 const db = firebase.firestore();
	let plantRef = db.collection('plants').doc(plantName);
	let getDoc = await plantRef.get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      plantInfo = doc.data();
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });
  return plantInfo;
}

export default getPlantInfo;