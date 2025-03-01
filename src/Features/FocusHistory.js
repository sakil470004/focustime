import React from 'react';
import { View, Text, StyleSheet ,FlatList} from 'react-native';

export const FocusHistory = ({ history }) => {

  if(!history || !history.length) return null;

  const renderItem=({item})=><Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.historyWrapper}>
      <Text style={styles.history}> Things we foused on</Text>
      <FlatList
      data={history}
      renderItem = {renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  historyWrapper: {
    flex:1,
    color: '#fff',
    justifyContent:'top',
  },
  history: {
    color: '#fff',
    fontSize:20
  },
  item:{
    fontSize:18,
    color:'white',
    paddingLeft:20
  }
  
});
