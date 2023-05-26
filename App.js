import { StyleSheet, Text, View, Button } from 'react-native'; //recat native 에서 가져온 특수 헤더


export default function App() { // app component
  return (
    <View style={styles.container}> 
      <View>
        <Text style={styles.testText}>Test the text!!!</Text>
      </View>
      {/* inline style */}
      <Text style={styles.testText}>Hello, React Native</Text>
      <Button title="[TAP]" />
    </View>
    
  );
}

const styles = StyleSheet.create({  //or inline style  -> CSS 불가능
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testText:{
    margin: 16, 
    borderWidth: 2, 
    borderColor: 'blue', 
    padding: 16,
  },
});
