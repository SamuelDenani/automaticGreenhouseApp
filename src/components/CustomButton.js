import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class CustomButton extends React.Component {
	render() {
		const { title, onPress} = this.props;
		return(
			<View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onPress()}
				>
					<Text
						style={styles.text}
					>
						{title}
					</Text>
				</TouchableOpacity>
			</View>	
		)
	}
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		height: 50,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3dad59',
	},
	text: {
		color: '#fff'
	}
})