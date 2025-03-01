import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utlis/colors';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from '../utlis/sizes'
export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(val) => setSubject(val)}
          label="What would you like to focus on ?"
        />
        <View style={styles.button} >
        <RoundedButton title="+" size={50} onPress={()=>addSubject(subject)}></RoundedButton>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  },
  button:{
    justifyContent:'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    flexDirection:'row',
    padding: spacing.lg,
    justifyContent: 'top',
  },
});
