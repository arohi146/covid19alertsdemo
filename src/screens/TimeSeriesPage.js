import React, { Component } from 'react';
//custom
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { material } from 'react-native-typography';
const { height, width } = Dimensions.get('window');

class TimeSeriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'true',
      Data: [],
      pincode:'',
    };
  }

  componentDidMount() {
    this.makeRequest("560001");
  }
  tagClickEventListener = (pincode) => {
    if(pincode=='')
    Alert.alert('Enter Pin');
    else
    {
      Alert.alert(this.state.pincode);
      this.makeRequest(this.state.pincode);
    }
  }
  makeRequest = (pincode) => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    var temp= date + '-' + month + '-' + year;//format: dd-mm-yyyy;
    this.setState(this.setState({ loading: true }), async () => {
      const API_URL = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pincode+'&date='+temp;
      const res = await fetch(API_URL);
      const info = await res.json();
      const data = info.sessions;
      this.setState({ Data: data, loading: false });
    });
    
  };
  render() {
    return (
      <View style={{ height, width, backgroundColor: '#fff' }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            height: 50,
            width: 50,
            borderRadius: 40,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: 20,
            left: 20,
            backgroundColor: 'grey',
            zIndex: 999,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          }}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        {this.state.loading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : (
          <ScrollView>
          <View style={styles.container}>
         
         <View style={styles.formContent}>
         
           <View style={styles.inputContainer}>
           <TextInput style={styles.inputs}
               ref={'txtSearch'}
               placeholder="Enter OTP"
               underlineColorAndroid='transparent'
               onChangeText={(pincode) =>{ 
                // this.setState({name_address})               
                 this.setState({pincode})
                 }}/>
                  <TouchableOpacity style={styles.btnColor} onPress={() => {
                   this.tagClickEventListener(this.state.pincode)
                    }}>
           <Text>Search</Text>
         </TouchableOpacity> 
         </View> 
                    
         </View>
         </View>
         
                      
            {this.state.Data.map((day) => (
              <View key={day.date}>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    //   backgroundColor: 'grey',
                    flexDirection: 'row',
                  }}>
                  <View //rod
                    style={{
                      backgroundColor: 'teal',
                      height: '100%',
                      width: 5,
                      position: 'absolute',
                      left: 120,
                    }}
                  />

                  <View //contentbox
                    style={{
                      // right: 20,
                      right: 25,
                      borderRadius: 5,
                      top: 50,
                      paddingTop: 5,
                      position: 'absolute',
                      height: 115,
                      width: 250,
                      backgroundColor: 'grey',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,

                      elevation: 8,
                    }}>
                    <Text
                      style={{
                        ...material.display1White,
                        textAlign: 'center',
                        lineHeight: 18,
                        fontSize: 18,
                      }}>
                      Address: {day.address}
                    </Text>
                    <Text
                      style={{
                        ...material.display1White,
                        textAlign: 'center',
                        fontSize: 18,
                        lineHeight: 18,
                      }}>
                      Available Dose 1: {day.available_capacity_dose1}
                    </Text>
                    <Text
                      style={{
                        ...material.display1White,
                        textAlign: 'center',
                        lineHeight: 18,
                        fontSize: 18,
                      }}>
                     Available Dose 2: {day.available_capacity_dose2}
                    </Text>
                    <Text
                      style={{
                        ...material.display1White,
                        textAlign: 'center',
                        fontSize: 18,
                        lineHeight: 18,
                      }}>
                      Available Vaccine: {day.vaccine}
                    </Text>
                    <Text
                      style={{
                        ...material.display1White,
                        textAlign: 'center',
                        fontSize: 18,
                        lineHeight: 18,
                      }}>
                      Fee : {day.fee}
                    </Text>
                  </View>
                  <View //circle
                    style={{
                      backgroundColor: 'lightblue',
                      height: 20,
                      width: 20,
                      position: 'absolute',
                      top: 90,
                      borderRadius: 10,
                      left: 120 - 7.5,
                      zIndex: 99999999999,
                    }}
                  />
                  <View //datetbox
                    style={{
                      left: 20,
                      top: 65,
                      position: 'absolute',
                      height: 80,
                      width: 80,
                      borderRadius: 40,
                      backgroundColor: 'pink',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        ...material.display1,
                        fontSize: 18,
                        textAlign: 'center',
                        lineHeight: 20,
                      }}>
                      {day.date} 2020
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 30,
    elevation: 2,
    
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent:{
    flexDirection: 'row',
    marginTop:30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:60,
    height:60,
    borderRadius:30,
  },
  name:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:10,
    alignSelf: 'center'
  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
}); 

export default TimeSeriesPage;
