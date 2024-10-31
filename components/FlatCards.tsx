import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function FlatCards() {
  return (
    <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
            <View style={[styles.cards, styles.RedCard]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.cards, styles.GreenCard]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.cards, styles.BlueCard]}>
                <Text>Blue</Text>
            </View>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:22,
        fontWeight:'bold',
        paddingHorizontal:10,
    },

    container:{
        display:'flex',
        flexDirection:'row',
        padding:5
    },

    cards:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8
    },

    RedCard:{
        backgroundColor:"#EF5354"
    },

    GreenCard:{
        backgroundColor:"#8BC34A"
    },

    BlueCard:{
        backgroundColor:"#2196F3"
    }
})

export default FlatCards
