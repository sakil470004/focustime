import { Text, SafeAreaView, StyleSheet, View, Platform ,StatusBar} from 'react-native';
import {useState} from 'react'

// You can import supported modules from npm
import {Focus} from './src/Features/Focus'
import {colors} from './src/utlis/colors'
import {Timer} from './src/Features/Timer'
import {FocusHistory} from './src/Features/FocusHistory'

export default function App() {
  const [currentSubject,setCurrentSubject]=useState(null);
  const [history,setHistory]=useState([])
  return (
    <SafeAreaView style={styles.container}>
     {
       !currentSubject?
       <>
       <Focus addSubject={setCurrentSubject}/>
       <FocusHistory history={history}/>
       </>
       :
       (<Timer focusSubject={currentSubject}
       onTimerEnd={(subject)=>{setHistory(...history,subject)}}
       clearSubject={()=>{setCurrentSubject(null)}}
       />)
     }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor:colors.darkBlue
  },
});
