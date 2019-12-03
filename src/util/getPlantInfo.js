import * as firebase from 'firebase/app'
import 'firebase/firestore'

let getPlantInfo = async (plantName) => {
  let plantInfo = null;
  const db = firebase.firestore()
	let plantRef = db.collection('plants').doc(plantName)
	let getDoc = await plantRef.get()
  .then(doc => {
    if (!doc.exists) {
      throw false
    } else {
      plantInfo = doc.data()
    }
  })
  .catch(err => {
    throw err
  });
  return plantInfo
}

export default getPlantInfo