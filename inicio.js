import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import MyButton from './src/js/MyButton';

var IndexScene = React.createClass({
	render: function(){
		return(
			<View style={styles.view}>
				<Text style={styles.texto}>BIENVENIDO AL 3 EN RAYA DE IWEB</Text>
				<Text style={styles.text}>Félix Mezo Gómez - felix.mezog@alumnos.upm.es</Text>
				<Text style={styles.text2}>Asier Culebras Porras - asier.culebras@alumnos.upm.es</Text>	
				<MyButton onPress={this.props.onForward} text={"Iniciar Partida"} />
			</View>
		)
	}
});

const styles = StyleSheet.create({
	view: {
		marginTop: 200
	},
	texto: {
		marginBottom: 25,
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold"
	},
	text: {
		textAlign: "center",
		fontStyle: "italic"
	},
	text2: {
		textAlign: "center",
		fontStyle: "italic",
		marginBottom: 50
	}
});

module.exports = IndexScene;