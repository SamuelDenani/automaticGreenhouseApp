import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import getPlantInfo from '../util/getPlantInfo';
import sendPlantInfo from '../util/sendPlantInfo';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
    header: null
	}
	
	constructor() {
		super();
		this.state = {
			plantInput: "",
		}
	}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>O que vamos plantar hoje?</Text>
        <TextInput
          placeholder="Me conte o que você quer cultivar"
					onChangeText={t => this.setState({plantInput: t})}
          style={styles.plantInput}
        />
        <CustomButton
          title="Plantar!"
          onPress={ async () => {
						if (this.state.plantInput.length) {
							await sendPlantInfo(await getPlantInfo(this.state.plantInput.toLowerCase()));
							this.props.navigation.navigate('ResultScreen')
						} else {
							Alert.alert('Ah não!', 'Parece que você esqueceu de me dizer o que você vai plantar :(')
						}
					} }
        />
      </View>
    );
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
});
