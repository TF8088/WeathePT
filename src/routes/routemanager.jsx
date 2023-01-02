import React, { useEffect , useState } from "react";
import { View, Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Start } from "../screens/start/start";
import { Home } from "../screens/home/home";

export default function RouteManager() {
    const [firststart, setfirststart] = useState(Boolean);
    useEffect(() => {
        AsyncStorage.getItem('@firststart').then(value => {
            if (value === null) /* Never was Opened */  {
                AsyncStorage.setItem('@firststart', 'true'); 
                setfirststart(true);
            } else /* Was Opened */ {
                setfirststart(false);
            }
        }).catch((err) => {console.error(err)});
    }, []);
     /* Print the status just for tests*/
    // console.log(firststart); 
      if (firststart == true) {
         /* Start -> First load */
         return <Start />;
     } else {
         return <Home />;
     }
}