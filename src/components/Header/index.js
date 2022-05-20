import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { MotiView, MotiText } from "moti";

import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({userName}) {
  return (
    <View style={styles.conatainer}>
      <StatusBar backgroundColor="#ffd700" />
      <MotiView 
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type:"timing",
          duration:800,
          delai:300
        }}
      > 
        <MotiText style={styles.userName}
          from={{
            translateX: -300
          }}
          animate={{
            translateX:0
          }}
          transition={{
            type:"timing",
            duration:800,
            delay: 800
          }}
        >{userName}</MotiText>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: "#ffd700",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd:16,
    paddingBottom: 44
  },
  content:{
      flex:1 ,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between"
  },
  userName:{
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold"
  },
  buttonUser:{
      width: 44,
      height:44,
      backgroundColor:'rgba(255,255,255,0.5)',
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 44 /2,
  }
});
