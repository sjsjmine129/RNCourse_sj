import { StyleSheet, Text, View} from 'react-native';

function GoalItem(props){
    return (
        <View  style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
}

export default GoalItem;

const styles =  StyleSheet.create({
    goalItem:{
        borderRadius: 6,
        padding: 8,
        margin: 5,
        backgroundColor: '#5e0acc',
    },

    goalText:{
        color: 'white',
    },

});