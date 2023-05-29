import { StyleSheet, Text, View, Pressable} from 'react-native';

function GoalItem(props) {
    return (
        <Pressable 
            onPress = {props.onDeleteItem.bind(this, props.id)}
            style = {({pressed})=> pressed && styles.pressedItem} //누름 이 true면 스타일 재적용
        >
            <View  style={styles.goalItem}>
                <Text style={styles.goalText}>{props.id +". "+ props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;



const styles =  StyleSheet.create({
    goalItem:{
        borderRadius: 6,
        margin: 5,
        backgroundColor: '#5e0acc',
    },

    pressedItem:{
        opacity: 0.5,
    },


    goalText:{
        padding: 8,
        color: 'white',
    },

});