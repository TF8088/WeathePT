import React, { useEffect , useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RouteManager() {
    const [firststart, setfirststart] = useState(Boolean);
    useEffect(() => {
        AsyncStorage.getItem('@firststart').then(value => {
            if (value === null) /* Never was Opened */  {
                AsyncStorage.setItem('@firststart', value = 'true'); 
                setfirststart(true);
            } else /* Was Opened */ {
                setfirststart(false);
            }
        })
    }, [])
     /* Print the status just for tests*/
     console.log(firststart); 

     if (firststart == true) {
        /* Start -> First load */
        return Start();
    } else {
        /* Load Home Page */
        return Start();
    }
}