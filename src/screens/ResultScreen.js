import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default class ResultScreen extends React.Component {
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
        <Text style={styles.text}>Pode deixar comigo! A partir de agora eu cuido da estufa por você.</Text>
				<CustomButton
					title='Mudei de ideia, quero plantar outra coisa!'
					onPress={() => this.props.navigation.goBack()}
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
		color: '#fff',
		textAlign: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 35
  },
});
