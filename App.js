import { StyleSheet, Text, View, Button, TextInput } from 'react-native'; //recat native 에서 가져온 특수 헤더


export default function App() { // app component

  




  return (
    <View style={styles.appContainer}> 

      <View style={styles.inputContainer}>
        <TextInput  style={styles.textInput} placeholder="your Goal" />
        <Button title="Add Goal"/>
      </View>

      <View style={styles.goalsContainer}>
        <Text>List</Text>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({  //or inline style  -> CSS 불가능
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer:{
    flex: 1,
    flexDirection: 'row',  //옆으로 작동
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '73%',
    marginRight: 8,
    padding: 8,
  },

  goalsContainer:{
    flex: 5,
  }
});
