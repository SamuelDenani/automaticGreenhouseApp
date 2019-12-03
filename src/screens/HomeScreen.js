import React from 'react'
import { StyleSheet, Text, View, TextInput, Alert, Image } from 'react-native'
import CustomButton from '../components/CustomButton'
import getPlantInfo  from '../util/getPlantInfo'
import sendPlantInfo from '../util/sendPlantInfo'
import { Assets } from 'react-navigation-stack'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
    header: null
	}
	
	constructor() {
		super();
		this.state = {
      plantInput: "",
      show: false
    }
    this.searchPlant = this.searchPlant.bind(this)
  }
  
  searchPlant = async () => {
    if (this.state.plantInput.length) {
      this.setState({ show: true })
      try {
        await sendPlantInfo(await getPlantInfo(this.state.plantInput))
        this.setState({ show: false })
        this.props.navigation.navigate('ResultScreen', { plantInput: this.state.plantInput})
      } catch(e) {
        this.setState({ show: false })
        !e ? this.props.navigation.navigate('ErrorScreen', { plantInput: this.state.plantInput }) : Alert.alert('Uh-oh!', 'Aparentemente você está tendo problemas de conexão e assim eu não consigo aprender a cuidar da sua planta D:')
      }
    } else {
      Alert.alert('Ah não!', 'Parece que você esqueceu de me dizer o que você vai plantar :(')
    }
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>O que vamos plantar hoje?</Text>
        <TextInput
          placeholder="Me conte o que você quer cultivar"
          onChangeText={t => this.setState({ plantInput: t.toLowerCase().trim() })}
          onSubmitEditing ={ this.searchPlant }
          style={styles.plantInput}
        />
        <CustomButton
          title="Plantar!"
          onPress={ this.searchPlant }
        />
        {this.state.show && <Image
          style={styles.loading}
          source={require('../../assets/loading.gif')}
        /> }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39874d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
		fontSize: 35,
    color: '#fff'
  },
  plantInput: {
		fontSize: 20,
		color: '#fff',
		textAlign: 'center',
		borderBottomColor: '#bbb',
		borderBottomWidth: 1,
		marginTop: 30,
		marginBottom: 50,
		paddingLeft: 5,
		paddingRight: 5
  },
  loading: {
    height: 80,
    width: 80,
    marginTop: 10
  }
})
