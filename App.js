import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native'; //recat native 에서 가져온 특수 헤더
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() { // app component

  const [myGoals, setMyGoals ] = useState([]); //모든 goal 들 list

  function addGoalHandler(enteredGoalText){  //버튼 누르면 변수 받아서 새 goal로 추가
    setMyGoals(currentCourseGoal=>[
      ...currentCourseGoal, 
      {text: enteredGoalText, id: Math.random().toString() } 
    ]);
  }


  function deleteGoalHandler(id){
    setMyGoals(currentCourseGoal=>{
      return currentCourseGoal.filter( (goal)=>  goal.id !== id ); //안에 함수 true면 유지 아니면 삭제
    });
  }

  return (
    <View style={styles.appContainer}> 

      <GoalInput onAddGoal={addGoalHandler/*새 goal추가 함수 넘겨줌*/} />

      <View style={styles.goalsContainer}>
        {/* flatList 함수로 전달할 데이터, data가 전달됨 */}
        <FlatList data={myGoals} 
          renderItem={ (itemData) =>{ 
            return <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} 
            />;
          }} 
          keyExtractor={(item, index)=>{
            return item.id;
          }}
        />
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

  goalsContainer:{
    flex: 8,
    flexDirection:'column',
  },

});
