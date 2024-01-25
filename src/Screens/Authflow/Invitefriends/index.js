import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {fontSize} from '../../../Components/Constants';

const Invitefriend = ({navigation}) => {
  const [click, setClick] = useState(1);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: heightPercentageToDP(40),
          width: widthPercentageToDP(100),
          backgroundColor: '#EBDBE2',
        }}>
        <ImageBackground
          style={styles.imgstyle}
          source={require('../../../../assets/Images/rimg.png')}>
          <View
            style={{
              height: heightPercentageToDP(20),
              width: widthPercentageToDP(100),
              // backgroundColor:'blue',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrView}>

                <Image
                  style={styles.arrimg}
                  source={require('../../../../assets/Images/leftarr.png')}
                />
              </TouchableOpacity>
              {/* {click == 1&& */}
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  right: 15,

                  gap: 10,
                  //  backgroundColor:'red'
                }}>
                <View style={styles.shareView}>
                  <Image
                    style={styles.shareimg}
                    source={require('../../../../assets/Images/share.png')}
                  />
                </View>

                <View style={styles.shareView}>
                  <Image
                    style={styles.shareimg}
                    source={require('../../../../assets/Images/info.png')}
                  />
                </View>
              </View>
              {/* } */}
            </View>
            <View
              style={{
                height: heightPercentageToDP(10),
                width: widthPercentageToDP(100),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
                // backgroundColor:'yellow',
              }}>
              <Text style={[styles.DealText, {padding: 5}]}>
                Subway-Johar Town
              </Text>
              <View
                style={{
                  height: heightPercentageToDP(5),
                  width: widthPercentageToDP(30),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 12,
                  borderColor: 'white',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    color: 'white',

                    fontSize: fontSize.regSmall,
                    fontWeight: '500',
                  }}>
                  Delivery: 30 min
                </Text>
              </View>
              <View
                style={{
                  height: heightPercentageToDP(5),
                  width: widthPercentageToDP(25),
                  marginTop: 5,
                  padding: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: heightPercentageToDP(2),
                      width: widthPercentageToDP(4),
                    }}
                    source={require('../../../../assets/Images/star.png')}
                  />
                  <Text
                    style={{
                      color: 'white',

                      fontSize: fontSize.regSmall,
                      fontWeight: '500',
                    }}>
                    4.2
                  </Text>
                  <Text
                    style={{
                      color: 'white',

                      fontSize: fontSize.regSmall,
                      fontWeight: '500',
                    }}>
                    (5k+)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#D60665',
              textAlign: 'center',
              padding: 10,
            }}>
            Get Rs 50 off of your first order with Everyday {'\n'}favourite by
            using code: HCNC. T&C apply
          </Text>

          <Image
            style={{
              height: heightPercentageToDP(8),
              width: widthPercentageToDP(15),
              marginLeft: 5,
            }}
            source={require('../../../../assets/Images/logo.png')}
          />
        </View>
      </View>
      <View
        style={{
          height: heightPercentageToDP(14),
          width: widthPercentageToDP(100),
         // paddingHorizontal: 20,
          backgroundColor: 'white',
          shadowOpacity: 0.8,
          shadowRadius: 20,
          shadowOffset: {
            // Shadow offset (x, y)
            width: 0,
            height: 4,
          },
          elevation: 5,
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderColor: '#C4C4C4',
        }}>
        <View style={{padding:15}}>
          <TouchableOpacity
            style={styles.loginButton}
            //  onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.returnToLogic}>Fast Food Deals</Text>
          </TouchableOpacity>
        </View>
       <ScrollView
         horizontal contentContainerStyle={{flexGrow: 1}}
       >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'white', gap:20
  , paddingHorizontal:20     
        }}
        >
<TouchableOpacity   onPress={() => setClick(1)}
 style={{borderColor:'#D60665',   borderBottomWidth:click === 1?5:0}}>
          <Text style={[styles.fltext, {marginBottom:4 ,}]}>Popular</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={() => setClick(2)}
 style={{borderColor:'#D60665',   borderBottomWidth:click === 2?5:0}}>
          <Text style={[styles.fltext, {marginBottom:4, }]}>Exclusion Subway Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => setClick(3)}
          style={{borderColor:'#D60665',  borderBottomWidth:click === 3?5:0}}>
          <Text style={[styles.fltext, {marginBottom:4}]}>Crazy Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => setClick(4)}
          style={{borderColor:'#D60665',  borderBottomWidth:click === 4?5:0}}>
          <Text style={[styles.fltext, {marginBottom:4}]}>Snacks</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => setClick(5)}
          style={{borderColor:'#D60665',  borderBottomWidth:click === 5?5:0}}>
          <Text style={[styles.fltext, {marginBottom:4}]}>Promotion</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
      {click=== 1 &&
      <ScrollView 
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{flexDirection: 'row', gap: 3, marginTop: 30}}>
            <Image source={require('../../../../assets/Images/fire.png')} />
            <Text
              style={{
                fontSize: 17,
                fontWeight: '800',
                color: 'black',
                textAlign: 'center',
              }}>
              Popular
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontWeight: '500',
              paddingVertical: 5,
            }}>
            Most Order right now
          </Text>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{}}>
                <Text style={styles.fltext}>Exclusive Subway Deal 1</Text>
                <Text
                  style={{
                    color: 'gray',

                    fontSize: fontSize.avgSmall,
                    fontWeight: '400',
                    paddingVertical: 3,
                  }}>
                  6 inch sub & 250 ml drink
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 555.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image source={require('../../../../assets/Images/bgr.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/cookies.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/cookies.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
        </View>
      </ScrollView>}
      {click=== 2 &&
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{flexDirection: 'row', gap: 3, marginTop: 30}}>
            <Image source={require('../../../../assets/Images/fire.png')} />
            <Text
              style={{
                fontSize: 17,
                fontWeight: '800',
                color: 'black',
                textAlign: 'center',
              }}>
              Popular
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontWeight: '500',
              paddingVertical: 5,
            }}>
            Most Order right now
          </Text>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{}}>
                <Text style={styles.fltext}>Exclusive Subway Deal 1</Text>
                <Text
                  style={{
                    color: 'gray',

                    fontSize: fontSize.avgSmall,
                    fontWeight: '400',
                    paddingVertical: 3,
                  }}>
                  6 inch sub & 250 ml drink
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 555.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image source={require('../../../../assets/Images/bgr.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/cookies.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/cookies.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
        </View>
      </ScrollView>}
      {click=== 3 &&
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{flexDirection: 'row', gap: 3, marginTop: 30}}>
            <Image source={require('../../../../assets/Images/fire.png')} />
            <Text
              style={{
                fontSize: 17,
                fontWeight: '800',
                color: 'black',
                textAlign: 'center',
              }}>
              Popular
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontWeight: '500',
              paddingVertical: 5,
            }}>
            Most Order right now
          </Text>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{}}>
                <Text style={styles.fltext}>Exclusive Subway Deal 1</Text>
                <Text
                  style={{
                    color: 'gray',

                    fontSize: fontSize.avgSmall,
                    fontWeight: '400',
                    paddingVertical: 3,
                  }}>
                  6 inch sub & 250 ml drink
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 555.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image source={require('../../../../assets/Images/cookies.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/bgr.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/cookies.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
        </View>
      </ScrollView>
}
{click=== 4 &&
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{flexDirection: 'row', gap: 3, marginTop: 30}}>
            <Image source={require('../../../../assets/Images/fire.png')} />
            <Text
              style={{
                fontSize: 17,
                fontWeight: '800',
                color: 'black',
                textAlign: 'center',
              }}>
              Popular
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontWeight: '500',
              paddingVertical: 5,
            }}>
            Most Order right now
          </Text>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{}}>
                <Text style={styles.fltext}>Exclusive Subway Deal 1</Text>
                <Text
                  style={{
                    color: 'gray',

                    fontSize: fontSize.avgSmall,
                    fontWeight: '400',
                    paddingVertical: 3,
                  }}>
                  6 inch sub & 250 ml drink
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 555.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image source={require('../../../../assets/Images/bgr.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/cookies.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/cookies.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
        </View>
      </ScrollView>}
      {click=== 5 &&
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{flexDirection: 'row', gap: 3, marginTop: 30}}>
            <Image source={require('../../../../assets/Images/fire.png')} />
            <Text
              style={{
                fontSize: 17,
                fontWeight: '800',
                color: 'black',
                textAlign: 'center',
              }}>
              Popular
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontWeight: '500',
              paddingVertical: 5,
            }}>
            Most Order right now
          </Text>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{}}>
                <Text style={styles.fltext}>Exclusive Subway Deal 1</Text>
                <Text
                  style={{
                    color: 'gray',

                    fontSize: fontSize.avgSmall,
                    fontWeight: '400',
                    paddingVertical: 3,
                  }}>
                  6 inch sub & 250 ml drink
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 555.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image source={require('../../../../assets/Images/cookies.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/cookies.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
          <View style={{paddingVertical: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.fltext}>Drink & Cookies</Text>

                <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 333.00
                  </Text>
                  <Text
                    style={{
                      color: 'black',

                      fontSize: fontSize.avgSmall,
                      fontWeight: '400',
                    }}>
                    Rs. 250.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('orderScreen')}>
                <Image
                  source={require('../../../../assets/Images/cookies.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderline}></View>
        </View>
      </ScrollView>}

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'yellow'
  },
  imgstyle: {
    height: heightPercentageToDP(30),
    width: '100%',
  },
  arrView: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(10),
    marginTop: 20,
    left: 10,
    borderRadius: 30,
    backgroundColor: '#EBDBE2',
    // borderColor: '#D60665',

    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  arrimg: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(6),
  },
  shareimg: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(4),
    alignSelf: 'center',
  },
  shareView: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(10),
    marginTop: 20,

    borderRadius: 30,
    backgroundColor: '#EBDBE2',
    // borderColor: '#D60665',
    //  marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    // justifyContent: 'center',
    width: widthPercentageToDP(90),
    backgroundColor: '#D60665',
    marginTop: 2,
    borderRadius: 9,
    // borderWidth: scale(1),
    // borderColor: 'rgba(0,0,0,0.15)',
    paddingVertical: 12,
    flexDirection: 'row',
    //  marginHorizontal:10
    // left: normalized.width(1.8),
  },
  returnToLogic: {
    color: 'white',
    fontWeight: '600',
    fontSize: fontSize.avgSmall,
    marginLeft: 10,
  },
  fltext: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  DealText: {
    fontSize: 17,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    // padding: 5,
  },
  fltext: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  borderline: {
    height: heightPercentageToDP(0.1),
    width: '100%',
    backgroundColor: '#C4C4C4',

    // marginHorizontal: 5,
  },
});
export default Invitefriend;
