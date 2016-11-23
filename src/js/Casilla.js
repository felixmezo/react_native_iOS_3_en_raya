import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

let Casilla = React.createClass({
	casillaClick: function () {
		if (this.props.partida===0 && this.props.valor === "-") {
			this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
		}
	},
	comprobarClickable: function(){
		if (this.props.partida !== 0 || this.props.valor!=="-") {
			return "no_clickable"
		}
		return "clickable"
	},
	render: function () {
		
		return (
			<TouchableHighlight style={styles.casillaStyle} onPress={this.casillaClick} >
				<Text style={styles.casillaStyleText}>{this.props.valor}</Text>
			</TouchableHighlight>
		)
	}
});

const styles = StyleSheet.create({
	casillaStyle:{
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 1,
		backgroundColor: 'green',

	},
	casillaStyleText:{
		flex: 1,
		fontSize: 9
	}
});

module.exports = Casilla;