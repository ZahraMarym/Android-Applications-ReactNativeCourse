import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places </Text>
      <View style={[styles.cards, styles.ElevatedCards]}>
      <Image
        source={{ uri: 'https://visitinpakistan.com/wp-content/uploads/2020/02/1920px-Faisal_Masjid_From_Damn_e_koh-1024x585.jpg' }}
        style={styles.CardImage}
        />
        <View style={styles.CardBody}>
            <Text style={styles.cardTitle}>Faisal Mosque</Text>
            <Text style={styles.cardLabel}>Islamabad, Pakistan</Text>
            <Text style={styles.CardDescription}>Faisal Mosque, located in Islamabad, Pakistan, is the largest mosque in the country and a symbol of modern Islamic architecture.</Text>
            <Text style={styles.cardFooter}>30 mins Away</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  cards: {
    width: 380,
    height: 360,
    borderRadius: 5,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginVertical: 12,
    marginHorizontal: 16
  },
  ElevatedCards: {
    elevation: 10,
    shadowColor: '#000',
    shadowRadius: 10,
    backgroundColor: '#dbaef7',
  },
  CardImage: {
    width: '100%',  
    paddingTop:0,
    marginTop:0,
    height: 200,
    marginBottom:10
  },
  CardBody:{
    width: 320,
    flex:1,
    flexGrow:1,
  },
  cardTitle:{
    fontSize: 20,
    marginBottom:2,
    fontWeight:'bold',
    color:'#000000'
  },
  cardLabel:{
    fontSize: 14,
    color:'#000000'
  },
  CardDescription:{
    fontSize: 15,
    color:'#000000',
    marginBottom:8,
  },
  cardFooter:{
    color:'#000000'

  }
});
