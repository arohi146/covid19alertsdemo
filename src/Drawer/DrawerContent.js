import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export function DrawerContent(props) {
  return (
    <View style={styles.drawer}>
      <Icon style={styles.icon} name="customerservice" size={100} color="#000" />

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Root');
        }}>
        <Text style={styles.text}>
        <Icon
           
            name="home"
            size={25}
            color="#FB0C2C"
          />
        Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          Alert.alert("Latest News will be implemented");
         // props.navigation.navigate('News');
        }}>
        <Text style={styles.text}>
        <Icon
           
            name="linechart"
            size={25}
            color="#FB0C2C"
          />
          News</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          Alert.alert("Search option will be implemented");
         //props.navigation.navigate('Search');
        }}>
        <Text style={styles.text}>
        <Icon
           
           name="search1"
           size={25}
           color="#FB0C2C"
         />
         Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          Alert.alert("Global links will be implemented");
         //props.navigation.navigate('Global');
        }}>
        <Text style={styles.text}>
        <Icon
           
           name="dashboard"
           size={25}
           color="#FB0C2C"
         />
         C19info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          Alert.alert("Time line will be implemented");
         //props.navigation.navigate('Time');
        }}>
        <Text style={styles.text}>
        <Icon
           
           name="adduser"
           size={25}
           color="#FB0C2C"
         />
         Slots</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          Alert.alert("Tips will be implemented");
         //props.navigation.navigate('Tips');
        }}>
        <Text style={styles.text}>Tips</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {Alert.alert(" will be implemented");
         //props.navigation.navigate('Links');
        }}>
        <Text style={styles.text}>Links</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          BackHandler.exitApp();
        }}>
        <Text style={styles.text}>Exit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footertext}>
          Learnt with Enthu{'  '}
          <Icon
            style={{ marginLeft: 20 }}
            name="heart"
            size={11}
            color="#FB0C2C"
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#D9E3ED',
  },
  links: {
    // backgroundColor: 'grey',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  text: {
    fontSize: 25,
    color: '#000',
  },
  icon: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  footertext: {
    color: '#000',
    opacity: 0.5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },
});
