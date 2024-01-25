import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {fontSize} from '../../../Components/Constants';

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.notiCard}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <Image
          style={{
            height: heightPercentageToDP(3),
            width: widthPercentageToDP(5),
            margin: 10,
          }}
          source={require('../../../../assets/Images/close.png')}
        /></TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.cardMessage}>Cart</Text>
          <Text style={styles.cardUsername}>Subway-Johar Town</Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 25,
            backgroundColor: 'white',
            paddingVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',

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
              padding: 10,
            }}>
            <Image
              style={{
                height: heightPercentageToDP(5),
                width: widthPercentageToDP(10.5),
                margin: 10,
              }}
              source={require('../../../../assets/Images/Character.png')}
            />
            <View style={{padding: 10}}>
              <Text style={styles.cardUsername}>Estimated delivery</Text>
              <Text
                style={{
                  color: 'black',

                  fontSize: fontSize.avgSmall,
                  fontWeight: '600',
                }}>
                Now (25 min)
              </Text>
            </View>
          </View>
        </View>

        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: heightPercentageToDP(4),
                backgroundColor: '#C4C4C4',
                width: widthPercentageToDP(8),
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: 'black',
                  textAlign: 'center',
                }}>
                1
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                flex: 1,

                //  backgroundColor:'red'
              }}>
              <View style={{marginLeft: 15}}>
                <Text
                  style={{fontSize: 15, fontWeight: '500', color: '#D60665'}}>
                  Exclusive Subway Deal 1
                </Text>
                <Text style={styles.RStexttitle}>
                  Chicken Teriyaki,Mirinda..
                </Text>
              </View>

              <Text style={[styles.RStexttitle, {padding: 5}]}>Rs.560.00</Text>
            </View>
          </View>
        </View>
        <View style={{padding: 15, backgroundColor: 'white', marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: 5,
            }}>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
              Subtotal
            </Text>

            <Text style={styles.Rstext}>Rs.560.00</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              // paddingHorizontal:10,
              padding: 5,
            }}>
            <Text
              style={{
                color: 'gray',

                fontSize: fontSize.avgSmall,
                fontWeight: '400',
              }}>
              Discount
            </Text>

            <View
              style={{
                backgroundColor: '#F0D4DD',

                borderRadius: 8,

                paddingHorizontal: 5,
                height: heightPercentageToDP(2.5),
              }}>
              <Text
                style={{textAlign: 'center', color: '#D60665', fontSize: 10}}>
                -Rs.227.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: 5,
            }}>
            <Text
              style={{
                color: 'gray',

                fontSize: fontSize.avgSmall,
                fontWeight: '400',
              }}>
              Delivery fee
            </Text>

            <Text style={styles.RStexttitle}>Rs.60.00</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: 5,
            }}>
            <Text
              style={{
                color: 'gray',

                fontSize: fontSize.avgSmall,
                fontWeight: '400',
              }}>
              VAT
            </Text>

            <Text style={styles.RStexttitle}>Rs.80.00</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',

            backgroundColor: 'white',

            padding: 15,
            // borderColor:'#C4C4C4'
          }}>
          <Image
            style={{
              height: heightPercentageToDP(4),
              width: widthPercentageToDP(7),
              margin: 5,
            }}
            source={require('../../../../assets/Images/bma.png')}
          />
          <View style={{margin: 10}}>
            <Text
              style={{
                color: '#D60665',

                fontSize: fontSize.avgSmall,
                fontWeight: '600',
              }}>
              Apply a Voucher
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          height: heightPercentageToDP(14),
          paddingHorizontal: 10,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderWidth: 1,
          borderColor: '#E5E5E5',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            //   backgroundColor: 'red',
            margin: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            Total
          </Text>

          <Text style={styles.Rstext}>Rs.560.00</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            style={styles.loginButton}
            //  onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.returnToLogic}>Place order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textView: {
    paddingHorizontal: 15,
    //   backgroundColor:'pink'
  },

  cardMessage: {
    color: 'black',

    fontSize: fontSize.statusSize,
  },
  notiCard: {
    flexDirection: 'row',

    backgroundColor: 'white',

    borderWidth: 1,
    padding: 10,
    borderColor: '#C4C4C4',
  },
  cardUsername: {
    color: 'black',

    fontSize: fontSize.regSmall,
  },
  profileView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Rstext: {
    textAlign: 'center',
    color: '#616161',
    fontSize: 15,
  },
  RStexttitle: {
    color: 'gray',

    fontSize: fontSize.regSmall,
    fontWeight: '400',
  },
  loginButton: {
    justifyContent: 'center',
    width: widthPercentageToDP(90),
    backgroundColor: '#D60665',
    marginTop: 2,
    borderRadius: 9,
    // borderWidth: scale(1),
    // borderColor: 'rgba(0,0,0,0.15)',
    paddingVertical: 12,
    flexDirection: 'row',
    // left: normalized.width(1.8),
  },
  returnToLogic: {
    color: 'white',
    fontWeight: '600',
    fontSize: fontSize.avgSmall,
  },
});
export default NotificationsScreen;
