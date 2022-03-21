import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import Logo from '../images/logo-2.png'
import Work from '../images/work.png'

import api from '../services/api';

export default function App() {
  const [categories, setCategories] = useState({
    id: Number(),
    name: String()
  });

  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: '#FFF',
        // flex: 1,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 0.5,        
      }}>

        <Image source={Logo} />
      </View>


      <View style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: '100%'
      }}>
        <ScrollView >



          <Text style={styles.text4}>Como gerar tráfego para o seu site usando um Blog</Text>


          <Text style={styles.text2}>Elearning in business is a growing trend nowadays Thanks to the internet and new tecnologies</Text>


          <View>

            <Image style={styles.banner} source={Work} />

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // paddingRight: 50
            }}>



            </View>

            <Text style={styles.text2}>Elearning in business is a growing trend nowadays Thanks to the internet and new tecnologies</Text>
            <Text style={styles.text2}>Elearning in business is a growing trend nowadays Thanks to the internet and new tecnologies</Text>
            <Text style={styles.text2}>Elearning in business is a growing trend nowadays Thanks to the internet and new tecnologies</Text>

          </View>







        </ScrollView>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  banner: {
    width: '100%',
    height: 240,
    borderRadius: 10,
    marginTop: 30
  },
  text1: {
    color: '#017e39',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 13
  },
  text2: {
    color: '#808080',
    fontSize: 22,
    marginTop: 20,
    // width: 250
  },
  text3: {
    color: '#FFA500',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text4: {
    color: '#017e39',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 70
  },
  text5: {
    color: '#808080',
    fontSize: 15,
    // marginTop: 70
  },
});
