import { StatusBar } from 'expo-status-bar';
import React,{ useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id:1,
    title:"ITEM 1"
  },
  {
    id:2,
    title:"ITEM 2"
  },
  {
    id:3,
    title:"ITEM 3"
  },
  {
    id:4,
    title:"ITEM 4"
  },
  {
    id:5,
    title:"ITEM 5"
  },
  {
    id:7,
    title:"ITEM 6"
  },
  {
    id:8,
    title:"ITEM 7"
  },
  {
    id:9,
    title:"ITEM 8"
  },
  {
    id:10,
    title:"ITEM 9"
  }
]

export default function App() {
  const [currentIndex,setCurrentIndex] = useState(0);
  const ref = useRef<FlatList>(null);
  const [index,setIndex] = useState(0);

  React.useEffect(()=>{

    ref.current?.scrollToIndex({
      index,
      animated:true,
      //viewOffset:20, View Offset
      viewPosition:0 // 0.5 For Center 1 For RIght and 0 for Left Align
    });

    

  },[index]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref} 
        initialScrollIndex={index}
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index: fIndex  }) => {
          return <Text 
          onPress={()=>{
            setCurrentIndex(item.id);
          }}
          style={{ 
          borderWidth:1,
          borderColor:"red",
          height:40,
          backgroundColor: item.id === currentIndex ? "red": "#fff",
          color: item.id === currentIndex ? "#fff": "#000",
          padding:10,
          margin:10,
        }}>
          {item.title} {fIndex}
        </Text>
        }}
         
      />

      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
        <TouchableOpacity onPress={()=>{
          if(index === 0){
            return
          }
          setIndex(index-1);
          setCurrentIndex(index-1);
        }}>
          <Text style={styles.navigation}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          if(index === DATA.length -1){
            return
          }
          setIndex(index+1);
          setCurrentIndex(index+2);
        }}>
        <Text style={styles.navigation}>Next</Text>
        </TouchableOpacity>
      </View>
      <Text>
        {index}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
  },
  navigation:{
    backgroundColor:"gold",
    paddingHorizontal:30,
    paddingVertical:5,
    textAlign:"center", 
    margin:20,
  }
});
