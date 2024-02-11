

import {View, Text, Button, StyleSheet, Image} from 'react-native'; 


const AlphaScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
      <Image
      style={styles.viewLogo}
      source={require('../assets/bcit4295.png')}
      />
        <Text
         style={{
          textAlign:'center', 
          fontWeight: 800,
          fontSize: 24, 
          color: '#217F91', 
          marginVertical: 15, 
       }}
        >Alpha Screen</Text>
         <Text
         style={{
            textAlign:'center', 
            fontSize: 18, 
            color: 'black', 
            marginBottom: 20, 
         }}>This is the alpha screen   
        </Text>
        <Button
            title="Return Home"
            onPress={() => navigation.navigate('Home')}
            color="#217F91"
          />
        </View>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent: 'flex-start',
    alignItems: 'center',
  }, 
  buttonContainer: {
    width: '75%',
    paddingHorizontal: 15,
  },
  button: {
    marginBottom: 15,
    borderRadius: 5,
  },
   viewLogo:{
    width:250, 
    height: 250, 

   }, 
})

export default AlphaScreen;


