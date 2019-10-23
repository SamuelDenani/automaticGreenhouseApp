import * as firebase from 'firebase/app'
import 'firebase/firestore';

let getPlantInfo = (plantName) => {
	console.log(plantName);
	
	const db = firebase.firestore();
	//  db.get()
  // .then((snapshot) => {
  //   snapshot.forEach((doc) => {
  //     console.log(doc.data());
  //   });
  // })
  // .catch((err) => {
  //   console.log('Error getting documents', err);
	// });
	let plantRef = db.collection('plants').doc(plantName);
	let getDoc = plantRef.get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
			let plantInfo = doc.data();
			this.props.navigation.navigate('ResultScreen')
      console.log('Plant info:', plantInfo);
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
	});
}

export default getPlantInfo;