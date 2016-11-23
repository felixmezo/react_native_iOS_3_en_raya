import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';

var Cabecera = React.createClass({
	render: function () {
		return (
			<Text style = {styles.cabecera}>
				{this.props.texto}
			</Text>
		)
	}
});

const styles = StyleSheet.create({
	cabecera: {
		textAlign: "center",
		color: 'black'
	}
});

module.exports = Cabecera;