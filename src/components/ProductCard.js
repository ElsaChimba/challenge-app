import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
export default function ProductCard({item, onPress}){
return (
<TouchableOpacity style={c.card} onPress={onPress}>
<Image source={item.image} style={c.image} />
<View style={c.content}>
<Text style={c.title}>{item.title}</Text>
<Text style={c.short}>{item.short}</Text>
<Text style={c.price}>{item.price}</Text>
</View>
</TouchableOpacity>
)
}
const c = StyleSheet.create({
card:{backgroundColor:'#fff', borderRadius:12, overflow:'hidden', marginBottom:14, elevation:2, shadowColor:'#000', shadowOpacity:0.05, shadowRadius:6},
image:{width:'100%', height:140},
content:{padding:12},
title:{fontSize:16, fontWeight:'700', color:'#02314b'},
short:{marginTop:6, color:'#64748b'},
price:{marginTop:8, fontWeight:'700', color:'#0369a1'}
})