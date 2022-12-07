import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const data = {
    lat: 0,
    long: 0,
    city: 'null'
}

export async function getCords() {
    const [location, setLocation] = useState(null);
    const [city, setCity] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            let city = await Location.reverseGeocodeAsync(location.coords);
            setLocation(location);
            setCity(city);
            setLoaded(true);
        })();
    }, []);

    if (loaded == true) {
        data.lat = location.coords.lat
        data.long = location.coords.long
        data.city = city
    }

    console.log(data);
}