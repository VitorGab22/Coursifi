import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";

import api from '../services/api';

import Logo from '../images/logo-2.png'
import Work from '../images/work.png'
import Bar from '../images/logo-coursify-w.png'

export default function App() {
  const { navigate } = useNavigation();
  const [categories, setCategories] = useState({
    id: Number(),
    name: String()
  });


  function Link() {
    Linking.openURL('https://coursify.me/')
  }

  async function loadCategoria() {
    const response = await api.get('/categories')
    console.log(response)

    setCategories(response.data);
  }

  useEffect(() => {
    loadCategoria();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <TouchableOpacity
          onPress={loadCategoria}
        >
          <Image source={Logo} />

        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="microsoft-xbox-controller-menu"
            size={55}
            color="#3CB371"
          />
        </TouchableOpacity>
      </View>


      <View style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: '100%',
        width: '100%',
      }}>
        <ScrollView >


          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text style={styles.text4}>CURSOS ONLINE</Text>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
              marginTop: 70
            }}>

              <Text style={styles.text5}>VER MAIS</Text>
              <Foundation
                name="play"
                size={15}
                color="#808080"
              />
            </View>
            {/* <Text>{
            categories.map(categorie => categorie.name)}</Text> */}
          </View>

          <ScrollView horizontal={true}>
            <TouchableOpacity
              style={styles.border}
              onPress={() => {
                navigate("Page");
              }}
            >
              <View style={{
                width: '100%',
                paddingHorizontal: 10
              }}>

                <Image style={styles.banner} source={Work} />

                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>

                  <Text style={styles.text1}>Como gerar tráfego para o seu site..</Text>

                </View>

                <Text style={styles.text2}>Elearning in business is a growing trend nowadays Thanks to the internet and new tecnologies</Text>

                <View>

                  <Text style={styles.text3}>Leia mais</Text>
                </View>

              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.border}
              onPress={() => {
                navigate("Page");
              }}
            >
              <View style={{
                width: '100%'
              }}>

                <Image style={styles.banner} source={Work} />

                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>

                  <Text style={styles.text1}>Como gerar tráfego para o seu site..</Text>



                </View>

                <Text style={styles.text2}>Elearning in business is a growing trend nowadays Thanks to the internet and new tecnologies</Text>

                <View>

                  <Text style={styles.text3}>Leia mais</Text>
                </View>

              </View>
            </TouchableOpacity>

          </ScrollView>

          <View style={{
            flexDirection: 'row',
            // height: 50
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text style={styles.text4}>DIGITAL MARKETING</Text>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
              marginTop: 70
            }}>

              <Text style={styles.text5}>VER MAIS</Text>
              <Foundation
                name="play"
                size={15}
                color="#808080"
              />
            </View>
            {/* <Text>{
            categories.map(categorie => categorie.name)}</Text> */}
          </View>



          <TouchableOpacity
            style={styles.border}
          >
            <View>

              <Image style={styles.banner} source={Work} />
              <Text style={styles.text1}> DESCUBRA COMO PUEDE BENEFICIARSE DE..</Text>
              <Text style={styles.text2}>Elearning in business is a growing trend nowadays Thanks to the internet and new tecnologies</Text>
            </View>

            <Text style={styles.text3}>Leia mais</Text>
          </TouchableOpacity>


          <View style={{
            flexDirection: 'row',
            // height: 50
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text style={styles.text4}>DIGITAL MARKETING</Text>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
              marginTop: 70
            }}>

              <Text style={styles.text5}>VER MAIS</Text>
              <Foundation
                name="play"
                size={15}
                color="#808080"
              />
            </View>
            {/* <Text>{
            categories.map(categorie => categorie.name)}</Text> */}
          </View>

          <TouchableOpacity
            style={styles.border}
          >
            <View>

              <Image style={styles.banner} source={Work} />
              <Text style={styles.text1}> DESCUBRA COMO PUEDE BENEFICIARSE DE..</Text>
              <Text style={styles.text2}>Elearning in business is a growing trend nowadays Thanks to the internet and new tecnologies</Text>
            </View>

            <Text style={styles.text3}>Leia mais</Text>
          </TouchableOpacity>




          <View style={styles.bar}>
            <Image source={Bar} style={{
              marginTop: 20
            }} />
            <Text style={styles.textBar}>O Coursify.me é uma plataforma de ensino a distância, onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet.</Text>

            <TouchableOpacity
              onPress={Link}
              style={styles.buttonBar}>
              <Text style={styles.textBar2}>Quero conhecer a plataforma!</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </View>



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
    width: 280,
    height: 120,
    borderRadius: 10,
    marginTop: 30,
  },
  text1: {
    color: '#2E8B57',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 13,
    paddingLeft: 5
  },
  text2: {
    color: '#808080',
    fontSize: 15,
    marginTop: 20,
    width: 250,
    paddingLeft: 5
  },
  text3: {
    color: '#FFA500',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    paddingLeft: 5
  },
  text4: {
    color: '#2E8B57',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 70,
    paddingHorizontal: 10
  },
  text5: {
    color: '#808080',
    fontSize: 18,
    paddingHorizontal: 10
    // marginTop: 70,
  },
  textBar: {
    color: '#FFF',
    fontSize: 14,
    width: 300,
    marginTop: 20
  },
  textBar2: {
    color: '#FFF',
    fontSize: 14,
  },
  button2: {
    flexDirection: 'row',
  },
  buttonBar: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    borderRadius: 24,
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  border: {
    borderWidth: 0.5,
    borderColor: '#D3D3D3'
  },
  header: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  bar: {
    backgroundColor: '#40E0D0',
    width: '100%',
    height: 350,
    marginTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // zIndex: 99
    // flexDirection: 'row',
    // paddingHorizontal: 15
  }
});
