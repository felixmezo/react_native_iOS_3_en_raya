import React, { Component } from 'react';
import { View } from 'react-native';

import MyButton from './src/js/MyButton';

const Historial = require('./src/js/Historial.js')
const Cabecera = require('./src/js/Cabecera'); 
const Tablero = require('./src/js/Tablero');
const ContadorMovimientos = require('./src/js/ContadorMovimientos');

var PartidaScene = React.createClass({ 
	render: function(){
		var texto = "Turno del " + this.props.turno; 
		return (
			<View style={{flex: 1, margin: 10}}>
				<Cabecera texto={texto} />
				<Tablero style={{flex:3}}
						 valores={this.props.valores}
						 manejadorTableroClick={this.props.manejadorClick}
						 partida={this.props.partida} />
				<MyButton style={{flex:1}}
						  onPress={this.props.onBack} 
						  text={"Volver"} />
				<MyButton style={{flex:1}}
						  onPress={this.props.saveState} 
						  text={"Guardar Partida"} />
				<MyButton style={{flex:1}} 
						  onPress={this.props.loadState} 
						  text={"Restaurar Partida"} />
				<MyButton style={{flex:1}} 
						  onPress={this.props.resetClick} 
						  text={"Reiniciar"} />
				<ContadorMovimientos movimientos={this.props.movimientos}
									 turnosX = {this.props.turnosX}
									 turnos0 = {this.props.turnos0} />
				<Historial historial={this.props.historial} />
			</View> 
		)
	} 
});

export default PartidaScene;