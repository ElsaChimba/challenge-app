import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ImageBackground, StatusBar } from 'react-native';
import ProductCard from '../components/ProductCard';
const DATA = [
{id:'1', title:'Serviço Premium', price:'€120', short:'Consultoria completa de marca', image:require('../../assets/product1.jpg')},
{id:'2', title:'Website One-page', price:'€80', short:'Landing page profissional', image:require('../../assets/product2.jpg')},
{id:'3', title:'Identidade Visual', price:'€150', short:'Logo + Paleta + Guideline', image:require('../../assets/product3.jpg')},
]
export default function HomeScreen({navigation}){
return (
<SafeAreaView style={s.container}>
<StatusBar barStyle="light-content" />
<ImageBackground source={require('../../assets/banner.jpg')} style={s.banner} imageStyle={{opacity:0.9}}>
<View style={s.bannerOverlay} />
<Text style={s.title}>Portfólio</Text>
<Text style={s.subtitle}>Projetos e serviços profissionais</Text>
</ImageBackground>
<View style={s.listHeader}>
<Text style={s.listHeaderText}>Nossos serviços</Text>
</View>
<FlatList
data={DATA}
keyExtractor={item=>item.id}
contentContainerStyle={{paddingHorizontal:16, paddingBottom:40}}
renderItem={({item})=> (
<ProductCard item={item} onPress={()=>navigation.navigate('Detail',{item})} />
)}
/>
<View style={s.footer}>
<Text style={s.footerText}>Feito por Elsa Chimba</Text>
</View>
</SafeAreaView>
)
}
const s = StyleSheet.create({
container:{flex:1, backgroundColor:'#f6fbff'},
banner:{height:200, justifyContent:'center', alignItems:'center'},
bannerOverlay:{...StyleSheet.absoluteFillObject, backgroundColor:'rgba(3,37,76,0.45)'},
title:{color:'#fff', fontSize:32, fontWeight:'700'},
subtitle:{color:'#dbeafe', marginTop:6},
listHeader:{padding:16},
listHeaderText:{fontSize:18, fontWeight:'600', color:'#02314b'},
footer:{position:'absolute', bottom:10, left:0, right:0, alignItems:'center'},
footerText:{color:'#64748b'}
})