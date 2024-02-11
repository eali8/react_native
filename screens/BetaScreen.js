

import { View, Text, Button, StyleSheet, Image} from 'react-native';

const BetaScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Image
          style={styles.image}
          source={{ uri: 'https://media.mdia.ca/img/flowers/flower-01-md.png' }} 
        />
     <Text
         style={{
          textAlign:'center', 
          fontWeight: 800,
          fontSize: 24, 
          color: '#217F91', 
          marginVertical: 15, 
       }}
        >Beta Screen</Text>
         <Text
         style={{
            textAlign:'center', 
            fontSize: 18, 
            color: 'black', 
            marginBottom: 20, 
         }}>This is the beta screen   
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
    justifyContent:'flex-start', 
    alignItems:'center',
  }, 
  buttonContainer: {
    width: '75%',
    paddingHorizontal: 15,
  },
  button: {
    marginBottom: 15,
    borderRadius: 5,
  },
  image:{
    width:250, 
    height: 250,  
  }, 
})

export default BetaScreen;

