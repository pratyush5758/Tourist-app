import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IMAGES} from '../assets';

const DetailsScreen = () => {
  const route = useRoute();
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <View>
          <ImageBackground
            source={route.params.Detail.Image}
            style={styles.img}>
            <View style={styles.icon}>
              <View style={styles.left}>
                <AntDesign name="left" size={30} color={'grey'} />
              </View>
              <View style={styles.heart}>
                <AntDesign name="hearto" size={30} color={'grey'} />
              </View>
            </View>
            <View style={styles.maincontainer}>
              <View style={styles.mountainview}>
                <Image source={IMAGES.MOUNTAIN} style={styles.mountain} />
              </View>
              <View style={styles.natureview}>
                <Image source={IMAGES.NATURE} style={styles.nature} />
              </View>
              <View style={styles.sunview}>
                <ImageBackground
                  source={IMAGES.SUN}
                  style={styles.sun}
                  imageStyle={{borderRadius: 10}}>
                  <View style={styles.container}>
                    <Text style={styles.text}>+10</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.viewcontainer}>
          <View style={styles.title}>
            <View>
              <Text style={styles.titletext}>{route.params.Detail.Title}</Text>
            </View>
            <View>
              <Text style={styles.person}>$96/person</Text>
            </View>
          </View>
        <View style={styles.overviewcontainer}>
          <View style={styles.overview}>
            <Text style={styles.overviewtext}>Overview</Text>
          </View>
          <View style={styles.review}>
            <Text style={styles.reviewtext}>Reviews</Text>
          </View>
        </View>
        <View style={styles.detailcontainer}>
          <View style={styles.clock}>
            <AntDesign name='clockcircle'size={25} color={`#6495ed`}/>
          </View>
          <View style={styles.duration}>
            <Text>DURATION</Text>
            <Text style={styles.durationtext}>{route.params.Detail.duration}</Text>
          </View>
          <View style={styles.star}>
            <AntDesign name='star' size={25} color={`#6495ed`}/>
          </View>
          <View style={styles.rating}>
            <Text>RATING</Text>
            <Text style={styles.ratetext}>{route.params.Detail.rate}</Text>
          </View>
        </View>
        <View style={styles.maintextview}>
          <Text style={styles.maintext}>The most common type of accommodation in the hotel industry, a hotel is defined as an establishment that offers overnight accommodation, meals and other services. They are mainly aimed at travellers or tourists, although locals may also use them.</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>BOOK Now</Text>
          <AntDesign name='arrowright'size={20} color={'#fff'} style={styles.righticon}/>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  img: {
    width: 420,
    height: 400,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  left: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    alignItems: 'center',
    borderRadius: 30,
    padding: 4,
    borderWidth: 2,
    borderColor: 'grey',
  },
  heart: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    alignItems: 'center',
    borderRadius: 30,
    padding: 7,
    borderWidth: 2,
    borderColor: 'grey',
  },
  mountain: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  nature: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  sun: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  mountainview: {
    width: 50,
    height: 50,
    borderRadius: 10,
    padding: 4,

    alignItems: 'center',
    backgroundColor: '#fff',
  },
  natureview: {
    width: 50,
    height: 50,
    borderRadius: 10,
    padding: 4,
    marginTop: 15,

    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sunview: {
    width: 50,
    height: 50,
    borderRadius: 10,
    padding: 4,

    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 15,
  },
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  maincontainer: {
    marginLeft: 350,
    marginVertical: 30,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  viewcontainer: {
    marginTop: -40,
    backgroundColor: 'white',
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    height: 400,
  },
  titletext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    width: 120,
  },
  person: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  overviewcontainer:{
    flexDirection:'row',
    marginHorizontal:20,
  },
  review:{
    marginLeft:15,
  },
  reviewtext:{
    fontSize:16,
    color:'black',
    fontWeight:'400',
  },
  overviewtext:{
    fontSize:16,
    color:`#6495ed`,
    fontWeight:'bold',
  },
  detailcontainer:{
    flexDirection:'row',
    marginHorizontal:20,
    marginVertical:20,
    alignItems:'center'
  },
  duration:{
    marginLeft:20,
  },
  rating:{
    marginLeft:20,
  },
  star:{
    marginLeft:25,
    backgroundColor:'#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
    width:35,
    height:35,
    alignItems:'center',
    padding:5,
    borderRadius:10,
    
  },
  clock:{
    backgroundColor:'#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
    width:35,
    height:35,
    alignItems:'center',
    padding:5,
    borderRadius:10,
  },
  durationtext:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
  },
  ratetext:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
  },
  maintextview:{
    marginHorizontal:20,
    
  },
  maintext:{
    letterSpacing:1,
    fontSize:16,
    fontWeight:'bold',
    color:'black',
  },
    btn:{
      flexDirection:'row',
      backgroundColor:`#6495ed`,
      alignItems:'center',
      marginVertical:20,
      height:60,
      marginHorizontal:20,
      borderRadius:10,
      justifyContent:'center'
    },
    btntext:{
      fontSize:20,
      color:'#fff',
    },
    righticon:{
      marginLeft:50
    }
});
