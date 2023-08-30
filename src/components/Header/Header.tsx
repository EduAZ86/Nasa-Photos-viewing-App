import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const Header = () => {

    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text
                style={styles.title}
                >Explore</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/nasa-logo.png')} 
                    />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height:65,
        flexDirection:'row',
        alignItems:'center',        
    },
    leftContainer:{
        flex:1,
        alignItems:'flex-start'
    },
    rightContainer:{
        flex:1,
        alignItems:'flex-end'
    },
    image:{
        width:60,
        height:60
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:'white'
    }

  })

export default Header