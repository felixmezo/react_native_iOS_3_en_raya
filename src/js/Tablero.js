import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

const Casilla = require("./Casilla.js");

var Tablero = React.createClass({
	tableroClick: function (numeroFila, numeroColumna) {
		this.props.manejadorTableroClick(numeroFila,numeroColumna);
	},
	render: function () {
		let tablero = this.props.valores.map(function (valoresFila, indiceFila) {
			let fila = valoresFila.map(function (valor, indiceColumna) {
				let mykey = "" + indiceFila + indiceColumna;
				return (
					<Casilla valor={valor} 
						     indiceFila={indiceFila} 
						     indiceColumna={indiceColumna}
						     key={mykey} 
						     manejadorClick={this.tableroClick}
						     partida={this.props.partida}/>
				)
			}, this);
			return (
				<View key={"fila"+indiceFila} style={styles.fila}>
					{fila}
				</View>			
			)
		}, this);
		return (
			<View style={styles.tablero}>
				{tablero}
			</View>
		);
	}
});

const styles = StyleSheet.create({
	tablero:{
		flex: 4,
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 1,
	},
	fila:{
		flex: 1,
		flexDirection:'row',
		justifyContent:'space-between'
	}
});

module.exports = Tablero;