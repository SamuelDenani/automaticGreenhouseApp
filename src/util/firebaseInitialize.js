import * as firebase from 'firebase/app'
import firebaseCredentials from '../credentials/google-services.json'

let apiKey = firebaseCredentials.client[0].api_key[0].current_key,
projectId = firebaseCredentials.project_info.project_id,
storageBucket = firebaseCredentials.project_info.storage_bucket,
appID = firebaseCredentials.client[0].client_info.mobilesdk_app_id

let firebaseConfig = {
	apiKey,
  authDomain: projectId + '.firebaseapp.com',
  databaseURL: 'https://' + projectId + '.firebaseio.com',
  projectId,
  storageBucket,
  appID,
};

let firebaseInitialize = () => {
  firebase.initializeApp(firebaseConfig)
}

export default firebaseInitialize