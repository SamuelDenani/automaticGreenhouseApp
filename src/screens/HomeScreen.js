import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';
import getPlantInfo from '../util/firebase';
import translateInput from '../util/translateInput'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
    header: null
	}
	
	constructor() {
		super();
		state = {
			plantInput: " "
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
          onPress={ () => {
						translateInput(this.state.plantInput)
						// getPlantInfo(this.state.translatedPlantName)
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
    color: '#fff'
  },
  plantInput: {
		color: '#fff',
		textAlign: 'center',
		marginTop: 30,
    marginBottom: 50
  },
});
