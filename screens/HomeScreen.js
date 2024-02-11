
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
         <Text
                style={{
                fontWeight: 800, 
                fontSize: 24, 
                color: '#217F91', 
                textAlign: 'center', 
                marginVertical: 15,  
                }}>MDIA 4295 - Assign 1
         </Text>
        <Text
         style={{
            textAlign:'center', 
            fontSize: 18, 
            color: 'black', 
            marginBottom: 20, 
         }}>Choose your screen below   
        </Text>
          <Button
            title="Go to Alpha"
            onPress={() => navigation.navigate('Alpha')}
            color="#217F91"
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Go to Beta"
            onPress={() => navigation.navigate('Beta')}
            color="#217F91"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
  button: {
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default HomeScreen;
