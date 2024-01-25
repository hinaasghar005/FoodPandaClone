import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {searchBarLeftIcon} from '../../../Svg';
import {useThemeAwareObject} from '../../../Theme';
import SearchBar from '../../../Components/Custom/SearchBar';
import {useNavigation} from '@react-navigation/native';
import {
  colors,
  fontFamily,
  fontSize,
  radius,
} from '../../../Components/Constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
//import { useNavigation } from '@react-navigation/native';

const Home = ({navigation}) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  // const styles = useThemeAwareObject(styles);
  const cardData = [
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Food delivery',
      subTitle: 'Order food you love',
      imgBg: require('../../../../assets/Images/Food.png'),
    },
    {
      borderColor: 'white',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'pandamart',
      subTitle: 'Essentials to delivered',
      text: 'fast',
      imgBg: require('../../../../assets/Images/pandago.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      color: '#DB00FF',
      title: 'Shops',
      subTitle: 'Top brands to',
      text: 'your door',
      imgBg: require('../../../../assets/Images/shop.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: '#49FFE9',
      title: 'Pick-Up',
      subTitle: 'Self-collect for 50% off',
      text: '50% off',
      imgBg: require('../../../../assets/Images/pickup.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      color: '#FFFFF',
      title: 'Dine-in ',
      subTitle: 'Go out to eat',
      text: 'for 25% off',
      imgBg: require('../../../../assets/Images/Dinein.png'),
    },
    {
      borderColor: '#FF0000',

      shadowColorTwo: 'white',
      color: '#FF0000',
      title: 'Pandago',
      subTitle: 'Send parcels in a tap',
      text: 'in a tap',
      imgBg: require('../../../../assets/Images/parcel.png'),
    },
  ];
  const ResturantData = [
    {
      //   borderColor: "#49FFE9",

      shadowColorTwo: 'white',
      //   color: "black",
      title: 'KFC - Akbar Chowk',
      subTitle: '$$ . Broast, Wraps & Rolls, Burgers,..',
      text: 'PKR 50 delivery fee',
      RSimg: require('../../../../assets/Images/Resimg.png'),
    },
    {
      borderColor: 'white',

      shadowColorTwo: 'white',
      //   color: "black",
      title: 'Johnny & Jugnu - Johar Town',
      subTitle: '$$$ . Burgers, Western, Fast Food',
      text: 'PKR 0 delivery fee',
      RSimg: require('../../../../assets/Images/Resimg.png'),
    },
    {
      //   borderColor: "#DB00FF",

      shadowColorTwo: 'white',
      //   color: "#DB00FF",
      title: 'What a Paratha - Johar Town',
      subTitle: '$$ . Pakistani, Beverges, Paratha,..',
      text: 'PKR 0 delivery fee',
      RSimg: require('../../../../assets/Images/Resimg.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      //   color: "#49FFE9",
      title: "McDonald's - Model Town",
      subTitle: '$$$ . Fast Food, Shakes, Beverages,',
      text: 'PKR 0 delivery fee',
      RSimg: require('../../../../assets/Images/Resimg.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      //   color: "#FFFFF",
      title: 'What a Paratha - Johar Town',
      subTitle: '$$ . Pakistani, Beverges, Paratha,..',
      text: 'PKR 0 delivery fee',
      RSimg: require('../../../../assets/Images/Resimg.png'),
    },
    {
      borderColor: '#FF0000',

      shadowColorTwo: 'white',
      //   color: "#FF0000",
      title: 'What a Paratha - Johar Town',
      subTitle: '$$ . Pakistani, Beverges, Paratha,..',
      text: 'PKR 0 delivery fee',
      RSimg: require('../../../../assets/Images/Resimg.png'),
    },
  ];
  const cuisinesData = [
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Biryani',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: 'white',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Pizza',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      color: '#DB00FF',
      title: 'Burgers',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: '#49FFE9',
      title: 'Desserts',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      color: '#FFFFF',
      title: 'Pulao',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#FF0000',
      shadowColorTwo: 'white',
      color: '#FF0000',
      title: 'Nihari',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#FF0000',
      shadowColorTwo: 'white',
      color: '#FF0000',
      title: 'Nihari',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#FF0000',
      shadowColorTwo: 'white',
      color: '#FF0000',
      title: 'Nihari',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#FF0000',
      shadowColorTwo: 'white',
      color: '#FF0000',
      title: 'Paratha',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#FF0000',
      shadowColorTwo: 'white',
      color: '#FF0000',
      title: 'Samosa',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Biryani',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: 'white',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Pizza',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      color: '#DB00FF',
      title: 'Burgers',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Biryani',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: 'white',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Pizza',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      color: '#DB00FF',
      title: 'Burgers',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Biryani',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: 'white',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Pizza',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      color: '#DB00FF',
      title: 'Burgers',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Biryani',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: 'white',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Pizza',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      color: '#DB00FF',
      title: 'Burgers',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Biryani',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: 'white',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Pizza',
      img: require('../../../../assets/Images/chines.png'),
    },
    {
      borderColor: '#DB00FF',

      shadowColorTwo: 'white',
      color: '#DB00FF',
      title: 'Burgers',
      img: require('../../../../assets/Images/chines.png'),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10, backgroundColor: '#D60665'}}>
        <View style={styles.notiCard}>
          <View style={styles.profileView}>
            <TouchableOpacity onPress={openDrawer}>
              <Image
                source={require('../../../../assets/Images/menu.png')}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textView}>
            <Text style={styles.cardMessage}>82 Khayaban e Firdousi</Text>
            <Text style={styles.cardUsername}>Lahore</Text>
          </View>

          <View style={styles.actionView}>
            <Image
              style={styles.cartimg}
              source={require('../../../../assets/Images/cart.png')}
            />
          </View>
        </View>
        <SearchBar
          onPressIn={() => navigation.navigate('SearchRecipient')}
          placeholder={'Search for shops & restarunts'}
        />
      </View>

      <View style={{flex: 1}}>
        <ScrollView contentstretcherStyle={styles.scrollViewStyle}>
          <View style={styles.cardContainer}>
            {cardData.map((card, index) => (
              <View
                style={[
                  styles.mainCard,
                  index == 0 || index == 1 ? {height: '45%'} : {},
                ]}>
                <View style={{paddingHorizontal: 10}}>
                  <Text style={styles.connectFriendstitle}>{card.title}</Text>
                  <Text style={styles.connectFriends}>{card.subTitle}</Text>
                  <Text style={styles.connectFriends}>{card.text}</Text>
                </View>
                <View
                  style={{height: '35%', width: '90%', alignItems: 'flex-end' }}>
                  <Image style={index == 0 || index == 1 ?{height: 65, width: 80, marginTop:10,}:{height: 45, width: 60}} source={card.imgBg} />
                </View>
              </View>
            ))}
          </View>
          <View style={{backgroundColor: 'white'}}>
            <Text style={styles.Resturanttext}>Popular restaurants</Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              //   contentContainerStyle={{flexGrow: 1}}
            >
              <View style={styles.RScard}>
                <FlatList
                  horizontal
                  data={ResturantData}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => (
                    <View style={styles.RSmain}>
                      <TouchableOpacity
                        style={{height: '60%', width: '100%'}}
                        onPress={() => navigation.navigate('Invitefriend')}>
                        <Image
                          resizeMode="stretch"
                          style={{height: '100%', width: '100%'}}
                          source={item.RSimg}
                        />
                      </TouchableOpacity>

                      <View style={{flex: 1, padding: 5}}>
                        <Text style={styles.connectFriendstitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.RStexttitle}>{item.subTitle}</Text>
                        <Text style={styles.RStext}>{item.text}</Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            </ScrollView>
          </View>

          <View style={{backgroundColor: 'white'}}>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <Text style={styles.Resturanttext}>Cuisines</Text>
              <View style={{flex: 1, padding: 10}}>
                <ScrollView
                  horizontal
                  style={{}}
                  contentContainerStyle={{flexGrow: 1}}>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      {cuisinesData.map((item, index) => (
                        <View
                          style={{
                            marginRight: 7,
                            height: heightPercentageToDP(12),
                            width: widthPercentageToDP(22),

                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: '#F5F5F5',
                              borderRadius: 5,
                            }}>
                            <Image
                              style={{
                                height: heightPercentageToDP(9),
                                width: widthPercentageToDP(20),
                              }}
                              source={item.img}
                            />
                          </View>

                          <Text style={styles.RSte}>{item.title}</Text>
                        </View>
                      ))}
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      {cuisinesData.map((item, index) => (
                        <View
                          style={{
                            marginRight: 7,
                            height: heightPercentageToDP(12),
                            width: widthPercentageToDP(22),

                            //  backgroundColor:'#F2F3F4',
                            justifyContent: 'center',
                            alignItems: 'center',
                            //  borderRadius:8,
                          }}>
                          <View
                            style={{
                              backgroundColor: '#F5F5F5',
                              borderRadius: 5,
                            }}>
                            <Image
                              style={{
                                height: heightPercentageToDP(9),
                                width: widthPercentageToDP(20),
                              }}
                              source={item.img}
                            />
                          </View>

                          <Text style={styles.RSte}>{item.title}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
          </View>

          <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
            <View
              style={{
                flex: 1,
                padding: 10,
                borderWidth: 1,
                borderRadius: 8,
                marginTop: 10,
                borderColor: '#C4C4C4',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View
                  style={{
                    height: heightPercentageToDP(10),
                    width: widthPercentageToDP(50),
                    // padding: 5,
                  }}>
                  <Text style={styles.Protext}>Become a pro</Text>
                  <Text style={styles.deliverRS}>Get 10 FREE deliveries</Text>
                </View>
                <View
                  style={{
                    height: heightPercentageToDP(10),
                    width: widthPercentageToDP(15),
                    //  backgroundColor:'red'
                  }}>
                  <Image
                    style={{
                      height: heightPercentageToDP(8),
                      width: widthPercentageToDP(15),
                    }}
                    source={require('../../../../assets/Images/logo.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
            <View
              style={{
                flex: 1,

                //backgroundColor: 'red',
                marginTop: 10,
              }}>
             <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View
                  style={{
                    height: heightPercentageToDP(13),
                    width: widthPercentageToDP(25),

                    borderRadius: 12,
                  }}>
                  <Image
                    resizeMode="stretch"
                    style={{
                      height: heightPercentageToDP(13),
                      width: widthPercentageToDP(25),
                    }}
                    source={require('../../../../assets/Images/mart.png')}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'white',
                    marginLeft: 5,
                    padding: 5,
                  }}>
                  <Text style={styles.connectFriendstitle}>
                    Pandamart - Model Town
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      // backgroundColor: 'blue',
                    }}>
                    <Image
                      style={{
                        height: heightPercentageToDP(2),
                        width: widthPercentageToDP(5),
                        margin: 3,
                      }}
                      source={require('../../../../assets/Images/tym.png')}
                    />
                    <View style={{marginLeft: 5, flexDirection: 'row'}}>
                      <Text style={{color: '#A8A8A8', fontWeight: '500'}}>
                        30 mins
                      </Text>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontWeight: 'bold',
                          color: '#C4C4C4',
                        }}>
                        .
                      </Text>
                    </View>
                    <View style={{marginLeft: 5, flexDirection: 'row'}}>
                      <Image
                        style={{
                          height: heightPercentageToDP(2.5),
                          width: widthPercentageToDP(6),
                        }}
                        source={require('../../../../assets/Images/bikeimg.png')}
                      />
                      <Text
                        style={{
                          color: '#A8A8A8',
                          marginLeft: 5,
                          fontWeight: '500',
                        }}>
                        Free
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      background: 'red',
                      flexDirection: 'row',
                      borderWidth: 1,
                      marginTop: 5,
                      borderRadius: 12,
                      borderColor: '#C4C4C4',
                      height: heightPercentageToDP(3.5),
                      paddingHorizontal: 3,
                      width: widthPercentageToDP(55),
                    }}>
                    <Image
                      style={{
                        height: heightPercentageToDP(2),
                        width: widthPercentageToDP(5),
                        marginTop: 3,
                      }}
                      source={require('../../../../assets/Images/p.png')}
                    />
                    <Text
                      style={{
                        color: '#6B6E70',
                        marginLeft: 5,
                        fontWeight: '800',
                      }}>
                      Welcome gift:.... +1 more
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cartimg: {
    height: 25,
    width: 30,
    // backgroundColor:'blue'
  },

  scrollViewStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notiCard: {
    flexDirection: 'row',
    width: '100%',

    backgroundColor: '#D60665',

    paddingVertical: 2,
  },
  profileView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: 5,
    padding: 10,
    // backgroundColor:'pink'
  },

  textViewcard: {
    backgroundColor: 'pink',
  },
  actionView: {
    flex: 1,

    justifyContent: 'center',
  },
  profileImage: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  normalText: {
    color: 'white',
    //fontSize: theme.size.statusSize,
  },
  cardMessage: {
    color: 'white',

    // fontFamily: theme.family.semiBold,
    // fontSize: theme.size.small,
  },
  cardUsername: {
    color: 'white',
    // fontFamily: theme.family.regular,
    // fontSize: theme.size.small,
  },
  cardContainer: {
    paddingTop: 15,
    paddingBottom: 50,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    flex: 1,
//marginRight:10,
    flexDirection: 'row',
    flexWrap: 'wrap',
gap:5,
    backgroundColor: 'white',
  },
  mainCard: {
    backgroundColor: 'white',

    height: '32%',
    width: '48%',
//marginRight:2,
    // borderColor: theme.color.white,
  //  marginBottom: 8,
    borderRadius: radius.radius2,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    shadowOffset: {
      // Shadow offset (x, y)
      width: 0,
      height: 4,
    },
    elevation: 50,
  },
  card: {
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 95,
    height: 50,
    borderColor: 'yellow',
    backgroundColor: 'blue',

    borderWidth: 5,
    borderRadius: radius.radius2,
    shadowOpacity: 10,
    shadowRadius: 20,
    shadowOffset: {
      // Shadow offset (x, y)
      width: 0,
      height: 0,
    },
    elevation: 50,
  },
  container: {
    flex: 1,

    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'black',

    gap: 3,

    justifyContent: 'space-evenly',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    width: '50%',
    height: '50%',
    padding: 20,
  },
  inner: {
    height: '50%',
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 9,
  },
  inner2: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  inner3: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  inner4: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  boxtextV: {
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    borderRadius: 5,
  },
  card: {
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 95,
    height: 25,
    borderWidth: 5,
    borderRadius: radius.radius2,
    shadowOpacity: 10,
    shadowRadius: 20,
    shadowOffset: {
      // Shadow offset (x, y)
      width: 0,
      height: 0,
    },
    elevation: 50,
  },
  connectFriendstitle: {
    color: 'black',
    fontSize: fontSize.small,
    fontWeight: '800',
    fontFamily: fontFamily.regular,
  },
  connectFriends: {
    color: 'black',
    fontSize: fontSize.avgSmall,
    fontWeight: '500',
  },
  RStext: {
    color: 'black',
    fontSize: fontSize.regSmall,
    fontWeight: '500',
  },
  RStexttitle: {
    color: 'grey',
    fontSize: fontSize.avgSmall,
    fontWeight: '300',
  },
  RSte: {
    color: 'black',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    // paddingHorizontal:10
  },
  RSt: {
    color: 'black',
    lineHeight: 20,
    fontSize: fontSize.avgSmall,
    fontWeight: '800',
    textAlign: 'left',
    // paddingHorizontal:10
  },
  deliverRS: {
    color: 'black',
    lineHeight: 20,
    fontSize: fontSize.avgSmall,
    fontWeight: '400',
    textAlign: 'left',
    // paddingHorizontal:10
  },
  Resturanttext: {
    color: 'black',
    fontSize: fontSize.statusSize,
    fontWeight: '700',
    fontFamily: fontFamily.regular,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  Protext: {
    color: 'black',
    fontSize: fontSize.statusSize,
    fontWeight: '700',
    fontFamily: fontFamily.regular,
  },
  boxFlatlist: {
    marginHorizontal: 13,
    height: 13,
  },
  cuicard: {
    paddingVertical: 10,
    backgroundColor: 'yellow',
  },
  cuimain: {
    height: heightPercentageToDP(50),
    width: widthPercentageToDP(60),
    marginRight: 10,

    backgroundColor: 'yellow',

    //    borderWidth:1,
    // borderRadius: 12,
    //     shadowOpacity: 0.8,
    //     shadowRadius: 20,
    //     shadowOffset: {
    //       // Shadow offset (x, y)
    //       width: 0,
    //       height: 4,
    //     },
    //     elevation: 50,
  },
  RScard: {
    paddingVertical: 10,
  },
  RSmain: {
    height: heightPercentageToDP(30),
    width: widthPercentageToDP(60),
    marginRight: 5,
    //paddingHorizontal:8,
    // backgroundColor: 'yellow',
    marginLeft: 10,
  },
});
export default Home;
