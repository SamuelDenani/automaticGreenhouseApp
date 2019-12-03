import React from 'react'
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import CustomButton from '../components/CustomButton'


export default class HomeScreen extends React.Component {

	static navigationOptions = {
    header: null
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Parece que {this.props.navigation.state.params.plantInput} não está cadastrado no meu banco de dados! D:</Text>
				<Text style={styles.text}>Vou pedir pra minha amiga IA pesquisar pra mim!</Text>
				<CustomButton
					title='Vamos plantar alguma outra coisa?'
					onPress={() => this.props.navigation.goBack()}
				/>
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
		color: '#fff',
		textAlign: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 35
  },
})