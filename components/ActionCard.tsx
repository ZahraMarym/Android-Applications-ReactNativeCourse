import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ActionCard() {
  function OpenWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card </Text>
      <View style={[styles.cards, styles.ElevatedCards]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's New in Javscript 21 (ES12)
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fj6oj8iztahq8gblrhgio.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContainer}>
          <Text numberOfLines={5}>
            ES12 (ES2021) introduced logical assignment operators, numeric
            separators, Promise.any(), WeakRef for better memory management, and
            improved Intl support, enhancing JavaScript's efficiency and
            readability for modern development.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              OpenWebsite(
                'https://dev.to/eswaraprakash/some-of-new-es12-es2021-javascript-features-3pmo',
              )
            }>
            <Text style={styles.LinkButton}>Ream Me</Text>
          </TouchableOpacity>
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
    height: 420,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 16,
    padding: 10,
  },
  ElevatedCards: {
    elevation: 10,
    shadowColor: '#000',
    shadowRadius: 10,
    backgroundColor: '#ffe8af',
  },
  headingContainer: {
    height:30,
  },
  headerText: {  
    fontSize:20,
    fontWeight:'bold', 
    color:'#000000'
},
  cardImage: {
    width: '100%', 
    paddingTop:10,
    marginTop:10,
    height: 200,
    marginBottom:10
  },
  cardContainer: {
    height: 100,
    fontSize:16
  },
  footerContainer: {
    height: 50,
    paddingBottom:10,
  },
  LinkButton:{
    backgroundColor:"#faba1c",
    padding:10,
    borderRadius: 10,

  }
});
