import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
      width: '100%',
      textAlign: 'center',
      fontSize: 42,
      color: '#e96e50',
    },
    subtitle: {
      fontSize: 24,
      marginVertical: 12,
      marginLeft: 4,
      color: '#e96e50',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    loading: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    current: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
    },
    currentTemp: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },  
    currentDescription: {
      width: '100%',
      textAlign: 'center',
      fontWeight: '200',
      fontSize: 24,
      marginBottom: 24
    },
    hour: {
      padding: 6,
      alignItems: 'center',
    },
    day: {
      flexDirection: 'row',
    },
    dayDetails: {
      justifyContent: 'center',
    },
    dayTemp: {
      marginLeft: 12,
      alignSelf: 'center',
      fontSize: 20
    },
    largeIcon: {
      width: 250,
      height: 200,
    },
    smallIcon: {
      width: 100,
      height: 100,
    }
  });

export default styles