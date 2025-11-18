import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function DetailScreen({route, navigation}){
const {item} = route.params;
const whatsappNumber = '244900000000';
const message = `Olá! Tenho interesse no ${item.title} - ${item.price}`;
const openWhatsApp = ()=>{
const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g,'')}?text=${encodeURIComponent(message)}`;
Linking.openURL(url).catch(()=>{});
}
return (
<SafeAreaView style={s.container}>
<TouchableOpacity style={s.back} onPress={()=>navigation.goBack()}>
<MaterialIcons name="arrow-back" size={28} color="#02314b" />
</TouchableOpacity>
<Image source={item.image} style={s.image} />
<View style={s.card}>
<Text style={s.title}>{item.title}</Text>
<Text style={s.price}>{item.price}</Text>
<Text style={s.desc}>{item.short}</Text>
<TouchableOpacity style={s.whatsappButton} onPress={openWhatsApp}>
<MaterialIcons name="chat" size={20} color="#fff" />
<Text style={s.whatsappText}>Contactar via WhatsApp</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
)
}
const s = StyleSheet.create({
container:{flex:1, backgroundColor:'#fff'},
back:{padding:12},
image:{width:'100%', height:220, resizeMode:'cover'},
card:{padding:20},
title:{fontSize:22, fontWeight:'700', color:'#02314b'},
price:{fontSize:18, fontWeight:'600', color:'#0369a1', marginTop:6},
desc:{marginTop:12, color:'#475569', lineHeight:20},
whatsappButton:{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:18, backgroundColor:'#0077cc', paddingVertical:12, borderRadius:10},
whatsappText:{color:'#fff', marginLeft:10, fontWeight:'600'}
})