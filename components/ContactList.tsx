import React from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'John Doe',
      status: 'Online',
      imgUrl:
        'https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png',
    },
    {
      uid: '2',
      name: 'Jane Smith',
      status: 'Offline',
      imgUrl:
        'https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png',
    },
    {
      uid: '3',
      name: 'Michael Johnson',
      status: 'Busy',
      imgUrl:
        'https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png',
    },
    {
      uid: '4',
      name: 'Emily Davis',
      status: 'Online',
      imgUrl:
        'https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png',
    },
    {
      uid: '5',
      name: 'Chris Lee',
      status: 'Away',
      imgUrl:
        'https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png',
    },
    {
      uid: '6',
      name: 'Sarah Brown',
      status: 'Offline',
      imgUrl:
        'https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png',
    },
    {
      uid: '7',
      name: 'David Wilson',
      status: 'Do Not Disturb',
      imgUrl:
        'https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png',
    },
    {
      uid: '8',
      name: 'Mia Clark',
      status: 'Online',
      imgUrl:
        'https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List </Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imgUrl}) => {
          return (
            <View key={uid} style={styles.userCard}>
              <View style={styles.card}>
                <Image source={{uri: imgUrl}} style={styles.userImage} />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    height: 'auto',
  },
  userCard: {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  userImage: {
    width: 50,
    height: '80%',
    borderRadius: 50,
    borderWidth:2,
    borderColor:'black',
    padding: 5,
  },
  card:{
    flex:1,
    paddingTop:10,
    paddingLeft:10,
    flexDirection: 'row',
    width:'90%',
    backgroundColor:'#a9a9a9',
    height:80
  },
  userName: {
    fontSize: 18,
    paddingHorizontal:10,
    padding: 5,
  },
  userStatus: {
    fontSize: 13,
    paddingHorizontal:15,
  },
});
