import * as firebase from 'firebase/app'
import 'firebase/database'

sendPlantInfo = (plantInfo) => {
	const db = firebase.database().ref()
	db.remove()
	db.set(plantInfo)
}

export default sendPlantInfo

