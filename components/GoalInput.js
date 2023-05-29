import { StyleSheet, TextInput, View, Button, Modal, Image} from 'react-native';
import { useState } from 'react';



function GoalInput(props){
    //      state           state 설정 함수        초기값
    const [enteredGoalText, setGoalText ] = useState(''); // 입력 칸에 들어있는 text

    function goalInputHandler(enteredText){ //입력시 입력값으로 갱신하는 함수
        setGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);   //App에서 전달 받은 함수(변수값을 goal list에 추가) 실행시킴
        setGoalText('');    //현재 입력값 초기화
    }

    function cancleModal(){
        props.onCancel();
        setGoalText('');    //현재 입력값 초기화
    }

    return (
        <Modal visible={props.showModal} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goals.png')}
                    style={styles.image}
                />
                <TextInput  
                    style={styles.textInput} 
                    placeholder="your Goal" 
                    onChangeText={goalInputHandler} //바뀔 때마다 저장 값 바꿈
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color='white' />  
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancle" onPress={cancleModal} color='white' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}


export default GoalInput;


const styles =  StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'column',  //옆으로 작동
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,

        backgroundColor: '#5e0acc'
    },
    
    textInput: {
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        borderColor: '#e4d0ff',
        color: '#120438',
        width: '90%',
        padding: 8,
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },

    button:{
        width: '25%',
        marginHorizontal: 2,

    },

    image:{
        width: 100,
        height:100,
        margin: 20
    },

});