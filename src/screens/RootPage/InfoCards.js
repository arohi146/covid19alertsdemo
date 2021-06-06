import React from 'react';
import { TouchableOpacity, ActivityIndicator, Linking } from 'react-native';
import { Image } from 'react-native-elements';

const InfoCards = () => (
  <>
    <TouchableOpacity
      onPress={() =>
        Linking.openURL('https://www.cowin.gov.in/')
      }>
      <Image
        resizeMode="cover"
        containerStyle={{
          borderRadius: 7,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
          height: 125,
          borderWidth: 0,
          width: 350,
          marginRight: 10,
        }}
        source={{
          uri:
            'https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5',
        }}
        PlaceholderContent={
          <ActivityIndicator
            style={{ height: '100%' }}
            size="large"
            color="black"
          />
        }
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        Linking.openURL('https://transformingindia.mygov.in/sectors/')
      }>
      <Image
        resizeMode="cover"
        containerStyle={{
          borderRadius: 7,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
          height: 125,
          borderWidth: 0,
          width: 350,
          marginRight: 10,
        }}
        source={{
          uri:
            'https://transformingindia.mygov.in/wp-content/uploads/2019/05/Banner_Final.jpg',
        }}
        PlaceholderContent={
          <ActivityIndicator
            style={{ height: '100%' }}
            size="large"
            color="black"
          />
        }
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(
          'https://transformingindia.mygov.in/aatmanirbharbharat/',
        )
      }>
      <Image
        resizeMode="cover"
        containerStyle={{
          borderRadius: 7,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
          height: 125,
          borderWidth: 0,
          width: 350,
          marginRight: 10,
        }}
        source={{
          uri:
            'https://transformingindia.mygov.in/wp-content/uploads/2020/05/AatmaNirbharBharat-Abhiyan.jpg',
        }}
        PlaceholderContent={
          <ActivityIndicator
            style={{ height: '100%' }}
            size="large"
            color="black"
          />
        }
      />
    </TouchableOpacity>
  </>
);

export default InfoCards;
