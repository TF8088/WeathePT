import { Text, View, Image, ActivityIndicator, SafeAreaView, ScrollView, FlatList, Alert, RefreshControl, ImageBackground} from 'react-native';
import React, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import styles from "./home-style";

let url = `http://api.weatherapi.com/v1/current.json?key=9e5c05017a34483c96a150714221504&q=`

export function Home() {
    const [forecast, setForecast] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const loadForecast = async () => {
        setRefreshing(true);

        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

        const response = await fetch(`${url}${location.coords.latitude},${location.coords.longitude}`);
        const data = await response.json();

        if (!response.ok) {
            Alert.alert(`Error retrieving weather data: ${data.message}`);
        } else {
            setForecast(data);
        }

        setRefreshing(false);
        console.log(data); 
    }

    useEffect(() => {
        if (!forecast) {
            loadForecast();
        }
    })
    
    if (!forecast) {
        return <SafeAreaView style={styles.loading}>
          <ActivityIndicator size="large" />
          </SafeAreaView>;
    }

    const current = forecast.current;

  /*  return (<SafeAreaView style={styles.container}>
        <ScrollView 
          refreshControl={
            <RefreshControl 
              onRefresh={() => {  loadForecast() }} 
              refreshing={refreshing}
            />}
        >
          <Text style={styles.title}>Current Weather</Text>
          <View style={styles.current}>
            <Image
              style={styles.largeIcon}
              source={{
                uri: `http://openweathermap.org/img/wn/${current.icon}@4x.png`,
              }}
            />
            <Text style={styles.currentTemp}>{Math.round(forecast.current.temp)}°C</Text>
          </View>
          
          <Text style={styles.currentDescription}>{current.description}</Text>
          <View>
            <Text style={styles.subtitle}>Hourly Forecast</Text>
            <FlatList horizontal
              data={forecast.hourly.slice(0, 24)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(hour) => {
                const weather = hour.item.weather[0];
                var dt = new Date(hour.item.dt * 1000);
                return <View style={styles.hour}>
                  <Text>{dt.toLocaleTimeString().replace(/:\d+ /, ' ')}</Text>
                  <Text>{Math.round(hour.item.temp)}°C</Text>
                  <Image
                    style={styles.smallIcon}
                    source={{
                      uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
                    }}
                  />
                  <Text>{weather.description}</Text>
                </View>
              }}
            />
          </View>
  
          <Text style={styles.subtitle}>Next 5 Days</Text>
          {forecast.daily.slice(0,5).map(d => { //Only want the next 5 days
            const weather = d.weather[0];
            var dt = new Date(d.dt * 1000);
            return <View style={styles.day} key={d.dt}>
              <Text style={styles.dayTemp}>{Math.round(d.temp.max)}°C</Text>
              <Image
                style={styles.smallIcon}
                source={{
                  uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
                }}
              />
              <View style={styles.dayDetails}>
                <Text>{dt.toLocaleDateString()}</Text>
                <Text>{weather.description}</Text>
              </View>
            </View>
          })}
        </ScrollView>
      </SafeAreaView>
    );*/
}