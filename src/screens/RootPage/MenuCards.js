import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Divider } from 'react-native-elements';
import { material } from 'react-native-typography';
import InfoCards from './InfoCards';

const MenuCards = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch('https://covid19.mathdro.id/api');
    let data = await res.json();
    setData(data);
    setIsLoading(false);
  };

  // const cured = Data.recovered.value;
  // const deaths = Data.deaths.value;
  const getWidth = (x) => {
    if (isLoading) {
      return 0;
    } else {
      if (x == 'deaths') {
        const num = Math.floor(
          (Data.deaths.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      } else if (x == 'recovered') {
        const num = Math.floor(
          (Data.recovered.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      }
    }
  };

  return (
    <>
      <View
            style={{
              paddingLeft: 10,
              backgroundColor: '#fff',
              height: 100,
              marginVertical: 10,
              marginBottom: 15,
            }}>
            <Text style={material.headline}>
              using{' '}
              <Text style={{ ...material.headline, fontWeight: '700' }}>
              covid19 mathdro api !
              </Text>
              
            </Text>
          </View>
          
      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //GLOBAL STATS
          onPress={() => navigation.push('Global')}
          style={{
            backgroundColor: '#804000',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="stats-chart"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            Fetch
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            Location
          </Text>
        </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //SAFETY TIPS
          onPress={() => navigation.push('Tips')}
          style={{
            backgroundColor: '#b30059',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="fitness-outline"
            size={35}
            color="#fff"
          />
          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            SAFETY
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            TIPS
          </Text>
        </TouchableOpacity>
        
      </View>
      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //DATA SEARCH
          onPress={() => navigation.push('Search')}
          style={{
            backgroundColor: '#000080',
            borderWidth: 0,
            borderRadius: 0,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="search"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            DATA
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            SEARCH
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default MenuCards;
