import React, {Component} from 'react';
import { Text, StyleSheet, View, ListView } from 'react-native';

let Historial = React.createClass({
	_renderRow: function(rowData){
		return(
			<View>
				<Text style={{fontSize:15}}>{rowData}</Text>
			</View>
		)
	},
	render: function () {
		return (
			<View style={{flex:2}}>	
				<ListView
				  	dataSource={this.props.historial}
				  	renderRow = {this._renderRow}
				/>	
			 </View>
		)
	}
});

module.exports = Historial;
