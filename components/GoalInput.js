import { StyleSheet, TextInput, View, Button} from 'react-native';
import { useState } from 'react';



function GoalInput(props){
    //      state           state 설정 함수           초기값
    const [enteredGoalText, setGoalText ] = useState(''); // 입력 칸에 들어있는 text

    function goalInputHandler(enteredText){ //입력시 입력값으로 갱신하는 함수
        setGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);   //App에서 전달 받은 함수(변수값을 goal list에 추가) 실행시킴
        setGoalText('');    //현재 입력값 초기화
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput  
                style={styles.textInput} 
                placeholder="your Goal" 
                onChangeText={goalInputHandler} //바뀔 때마다 저장 값 바꿈
                value={enteredGoalText}
            />

            <Button 
                title="Add Goal"
                onPress={addGoalHandler}    //버튼 누루면 
            />
        </View>
    );
}


export default GoalInput;


const styles =  StyleSheet.create({
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

});