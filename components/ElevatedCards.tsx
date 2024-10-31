import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ElevatedCards() {
  return (
    <View>
        <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.cards,styles.ElevatedCard]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.cards,styles.ElevatedCard]}>
                <Text>Me</Text>
            </View>
            <View style={[styles.cards,styles.ElevatedCard]}>
                <Text>To</Text>
            </View>
            <View style={[styles.cards,styles.ElevatedCard]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.cards,styles.ElevatedCard]}>
                <Text>More...</Text>
            </View>
            <View style={[styles.cards,styles.ElevatedCard]}>
                <Text>😉</Text>
            </View>
        </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
    headingText:{
        fontSize:22,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    container:{
        padding:8,
    },
    cards:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    ElevatedCard:{
        elevation:10,
        shadowColor:'#000',
        shadowRadius:10,
        backgroundColor:"#CAD5E2"
    }
})