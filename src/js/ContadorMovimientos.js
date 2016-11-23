import React, {Component} from 'react';
import { Text, StyleSheet, View, ListView } from 'react-native';

let ContadorMovimientos = React.createClass({
	_renderRow: function(rowData){
		return(
			<View>
				<Text style={{fontSize:15}}>{rowData}</Text>
			</View>
		)
	},
	render: function () {
		return (
			<View style={{flex:1, marginTop:10}}>	
				<ListView
				  	dataSource={this.props.movimientos}
				  	renderRow = {this._renderRow}
				/>	
			 </View>
		)
	}
});

module.exports = ContadorMovimientos;
