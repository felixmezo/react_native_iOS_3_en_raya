import React, {Component} from 'react'
import { StyleSheet, Text, TouchableHighlight} from 'react-native'

var MyButton = React.createClass({
	render: function(){
		return(
			<TouchableHighlight onPress={this.props.onPress}>
				<Text style={styles.mybutton}> {this.props.text}</Text>
			</TouchableHighlight>
		)
	}
});

const styles = StyleSheet.create({
	mybutton: {
		textAlign: "center",
		padding: 5,
		margin: 5,
		backgroundColor: 'yellow',
		color: 'black',
		borderWidth: 3,
		borderColor:'green'
	}
});

export default MyButton;
