import React,{useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import  {heightPercentageToDP as hp,
//   widthPercentageToDP as wp,} from 'react-native-responsive-screen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {fontSize} from '../../../Components/Constants';
import {RadioButton} from 'react-native-paper';

import RBSheet from 'react-native-raw-bottom-sheet';

const orderScreen = ({navigation}) => {

  const [isClicked , setIsClicked] = useState(0)
  const [click, setClick] = useState(0);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgstyle}
        source={require('../../../../assets/Images/orderimg.png')}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrView}>
          <Image
            style={styles.arrimg}
            source={require('../../../../assets/Images/leftarr.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
      
     
      <View
        style={{
          padding: 18,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.DealText}>Exclusive Subway Deal 1</Text>
            <Text style={styles.RStexttitle}>6 inch sub & 250 ml drink</Text>
          </View>
          <View
            style={{
              //  backgroundColor: '#F0D4DD',
              flexDirection: 'row',
            }}>
            <Text style={styles.Rstext}>Rs. </Text>
            <Text style={styles.Rstext}>333.00</Text>
          </View>
        </View>
      </View>
     
        <View style={styles.borderline}></View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            //  flex:1,
            paddingVertical: 5,
            paddingHorizontal: 15,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <View>
              <Text style={styles.fltext}>Choose your Flavor</Text>
              <Text style={styles.RStexttitle}>Select</Text>
            </View>
            <View
              style={{
                backgroundColor: 'lightblue',

                borderRadius: 8,

                paddingHorizontal: 5,
                height: heightPercentageToDP(2.5),
              }}>
              <Text style={{textAlign: 'center', color: 'black', fontSize: 10}}>
                1 Required
              </Text>
            </View>
          </View>
          
              {/* {isClicked.map((item , index)=>( */}
              
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
<View style={styles.radioButtonContainer}>
   <TouchableOpacity onPress={() => setClick(1)}  style={[styles.radioButton ,
 ]}>
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:click===1?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Chicken Tikka</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setClick(2)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:click===2?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Chicken Teriyaki</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setClick(3)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:click===3?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Chicken Fajita</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setClick(4)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:click===4?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>BBQ</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 </ScrollView>

{/* ))} */}
            {/* </View> */}
            {/* <View style={{flexDirection: 'row'}}>
              <Pressable>
                <RadioButton.Item
                  mode="android"
                  style={{
                    width: widthPercentageToDP(10),
                    height: heightPercentageToDP(5),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // right: (25),
                    // padding:10
                  }}
                  value={'yes'}
                  uncheckedColor={'#D60665'}
                />
              </Pressable>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  flex: 1,
                  padding: 5,
                }}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                  Chicken Teriyaki
                </Text>

                <Text style={styles.Rstext}>RS.0.00</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable>
                <RadioButton.Item
                  mode="android"
                  style={{
                    width: widthPercentageToDP(10),
                    height: heightPercentageToDP(5),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // right: (25),
                    // padding:10
                  }}
                  value={'yes'}
                  uncheckedColor={'#D60665'}
                />
              </Pressable>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  flex: 1,
                  padding: 5,
                }}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                  Chiken Fajita
                </Text>

                <Text style={styles.Rstext}>RS.0.00</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable>
                <RadioButton.Item
                  mode="android"
                  style={{
                    width: widthPercentageToDP(10),
                    height: heightPercentageToDP(5),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // right: (25),
                    // padding:10
                  }}
                  value={'yes'}
                  uncheckedColor={'#D60665'}
                />
              </Pressable>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  flex: 1,
                  padding: 5,
                }}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                  BBQ
                </Text>

                <Text style={styles.Rstext}>RS.0.00</Text>
              </View>
            </View> */}
          {/* </View> */}
        </View>
        <View
          style={{
            // flex:1,
            paddingVertical: 5,
            paddingHorizontal: 15,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
              backgroundColor: 'white',
            }}>
            <View>
              <Text style={styles.fltext}>Choose your Flavor</Text>
              <Text style={styles.RStexttitle}>Select</Text>
            </View>
            <View
              style={{
                backgroundColor: 'lightblue',

                borderRadius: 8,

                paddingHorizontal: 5,
                height: heightPercentageToDP(2.5),
              }}>
              <Text style={{textAlign: 'center', color: 'black', fontSize: 10}}>
                1 Required
              </Text>
            </View>
          </View>
          
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.radioButtonContainer}>
   <TouchableOpacity onPress={() => setIsClicked(1)}  style={[styles.radioButton ,
 ]}>
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:isClicked===1?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Pepsi</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setIsClicked(2)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:isClicked===2?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>7up</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setIsClicked(3)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:isClicked===3?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Mirinda</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setIsClicked(4)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:isClicked===4?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Mountain Duew</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 </ScrollView>
 </View>
 <View
          style={{
            //  flex:1,
            paddingVertical: 5,
            paddingHorizontal: 15,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <View>
              <Text style={styles.fltext}>Choose your Flavor</Text>
              <Text style={styles.RStexttitle}>Select</Text>
            </View>
            <View
              style={{
                backgroundColor: 'lightblue',

                borderRadius: 8,

                paddingHorizontal: 5,
                height: heightPercentageToDP(2.5),
              }}>
              <Text style={{textAlign: 'center', color: 'black', fontSize: 10}}>
                1 Required
              </Text>
            </View>
          </View>
          
              {/* {isClicked.map((item , index)=>( */}
              
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
<View style={styles.radioButtonContainer}>
   <TouchableOpacity onPress={() => setClick(1)}  style={[styles.radioButton ,
 ]}>
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:click===1?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Chicken Tikka</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setClick(2)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:click===2?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Chicken Teriyaki</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setClick(3)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:click===3?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Chicken Fajita</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setClick(4)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:click===4?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>BBQ</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 </ScrollView>
 
{/* ))} */}
            {/* </View> */}
            {/* <View style={{flexDirection: 'row'}}>
              <Pressable>
                <RadioButton.Item
                  mode="android"
                  style={{
                    width: widthPercentageToDP(10),
                    height: heightPercentageToDP(5),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // right: (25),
                    // padding:10
                  }}
                  value={'yes'}
                  uncheckedColor={'#D60665'}
                />
              </Pressable>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  flex: 1,
                  padding: 5,
                }}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                  Chicken Teriyaki
                </Text>

                <Text style={styles.Rstext}>RS.0.00</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable>
                <RadioButton.Item
                  mode="android"
                  style={{
                    width: widthPercentageToDP(10),
                    height: heightPercentageToDP(5),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // right: (25),
                    // padding:10
                  }}
                  value={'yes'}
                  uncheckedColor={'#D60665'}
                />
              </Pressable>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  flex: 1,
                  padding: 5,
                }}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                  Chiken Fajita
                </Text>

                <Text style={styles.Rstext}>RS.0.00</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable>
                <RadioButton.Item
                  mode="android"
                  style={{
                    width: widthPercentageToDP(10),
                    height: heightPercentageToDP(5),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // right: (25),
                    // padding:10
                  }}
                  value={'yes'}
                  uncheckedColor={'#D60665'}
                />
              </Pressable>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  flex: 1,
                  padding: 5,
                }}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                  BBQ
                </Text>

                <Text style={styles.Rstext}>RS.0.00</Text>
              </View>
            </View> */}
          {/* </View> */}
        </View>
        <View
          style={{
            // flex:1,
            paddingVertical: 5,
            paddingHorizontal: 15,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
              backgroundColor: 'white',
            }}>
            <View>
              <Text style={styles.fltext}>Choose your Flavor</Text>
              <Text style={styles.RStexttitle}>Select</Text>
            </View>
            <View
              style={{
                backgroundColor: 'lightblue',

                borderRadius: 8,

                paddingHorizontal: 5,
                height: heightPercentageToDP(2.5),
              }}>
              <Text style={{textAlign: 'center', color: 'black', fontSize: 10}}>
                1 Required
              </Text>
            </View>
          </View>
          
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.radioButtonContainer}>
   <TouchableOpacity onPress={() => setIsClicked(1)}  style={[styles.radioButton ,
 ]}>
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:isClicked===1?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Pepsi</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setIsClicked(2)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:isClicked===2?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>7up</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setIsClicked(3)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:isClicked===3?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Mirinda</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 <View style={styles.radioButtonContainer}>
 <TouchableOpacity onPress={() => setIsClicked(4)}  style={[styles.radioButton ,
      ]}>
     {/* <View style={styles.radioButtonIcon} /> */}
     <View style={[styles.radioButtonIcon,{backgroundColor:'white', backgroundColor:isClicked===4?'#D60665':'white'}]} />
   </TouchableOpacity>
   <TouchableOpacity  
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex:1
                
                }} onPress={() => {}}>
     <Text style={styles.radioButtonText}>Mountain Duew</Text>
     <Text style={styles.Rstext}>RS.0.00</Text>
   </TouchableOpacity>
 </View>
 </ScrollView>
 </View>
 
{/* 
          <View style={{flexDirection: 'row', backgroundColor: 'red'}}>
            <Pressable>
              <RadioButton.Item
                mode="android"
                style={{
                  width: widthPercentageToDP(10),
                  height: heightPercentageToDP(5),
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // right: (25),
                  // padding:10
                }}
                value={'yes'}
                uncheckedColor={'#D60665'}
              />
            </Pressable>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                flex: 1,
                padding: 5,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                Chicken Tikka
              </Text>

              <Text style={styles.Rstext}>RS.0.00</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Pressable>
              <RadioButton.Item
                mode="android"
                style={{
                  width: widthPercentageToDP(10),
                  height: heightPercentageToDP(5),
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // right: (25),
                  // padding:10
                }}
                value={'yes'}
                uncheckedColor={'#D60665'}
              />
            </Pressable>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                flex: 1,
                padding: 5,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                Chicken Teriyaki
              </Text>

              <Text style={styles.Rstext}>RS.0.00</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Pressable>
              <RadioButton.Item
                mode="android"
                style={{
                  width: widthPercentageToDP(10),
                  height: heightPercentageToDP(5),
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // right: (25),
                  // padding:10
                }}
                value={'yes'}
                uncheckedColor={'#D60665'}
              />
            </Pressable>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                flex: 1,
                padding: 5,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                Chiken Fajita
              </Text>

              <Text style={styles.Rstext}>RS.0.00</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <Pressable>
              <RadioButton.Item
                mode="android"
                style={{
                  width: widthPercentageToDP(10),
                  height: heightPercentageToDP(5),
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // right: (25),
                  // padding:10
                }}
                value={'yes'}
                uncheckedColor={'#D60665'}
              />
            </Pressable>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                flex: 1,
                padding: 5,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                BBQ
              </Text>

              <Text style={styles.Rstext}>RS.0.00</Text>
            </View>
          </View>
        </View> */}
        {/* <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
           <View
                style={{flexDirection: 'row', }}>
               <View style={{flexDirection: 'row',padding:5}}>
<Image style={{height:heightPercentageToDP(4), width:widthPercentageToDP(7.5),marginLeft:5 }} source={require('../../../../assets/Images/minus.png')}/>

<Text style={{fontSize: 20,
fontWeight: '600',
color: 'black',marginLeft:10}}>1</Text>
<Image style={{height:heightPercentageToDP(4), width:widthPercentageToDP(7.5), marginLeft:10}} source={require('../../../../assets/Images/plus.png')}/>

                </View>
                <View style={{marginLeft:30}}>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')} style={{height:heightPercentageToDP(5.5),backgroundColor:'#D60665',width:widthPercentageToDP(50), borderRadius:8,justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'white', textAlign:'center', fontSize:15}}>Add to Cart</Text>
</TouchableOpacity>
                </View>
               </View>
        </RBSheet> */}
      </ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.BottomView}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', padding: 5}}>
              <Image
                style={{
                  height: heightPercentageToDP(4),
                  width: widthPercentageToDP(7.5),
                  marginLeft: 5,
                }}
                source={require('../../../../assets/Images/minus.png')}
              />

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: 'black',
                  marginLeft: 10,
                }}>
                1
              </Text>
              <Image
                style={{
                  height: heightPercentageToDP(4),
                  width: widthPercentageToDP(7.5),
                  marginLeft: 10,
                }}
                source={require('../../../../assets/Images/plus.png')}
              />
            </View>
            <View style={{marginLeft: 30}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NotificationsScreen')}
                style={{
                  height: heightPercentageToDP(5.5),
                  backgroundColor: '#D60665',
                  width: widthPercentageToDP(50),
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: 'white', textAlign: 'center', fontSize: 15}}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'red',
  },
  imgstyle: {
    height: heightPercentageToDP(30),
    width: '100%',
  },
  arrView: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(10),
    marginTop: 20,

    borderRadius: 30,
    backgroundColor: 'white',
    // borderColor: '#D60665',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrimg: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(6),
  },
  Dealview: {
    padding: 15,
    // backgroundColor:'red',
    borderBottomWidth: 1,
    //  borderColor:'#C4C4C4'
  },
  deltextview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //  backgroundColor:'red',
    // padding:5
  },
  DealText: {
    fontSize: 17,
    fontWeight: '800',
    color: 'black',
  },
  Rstext: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 15,
  },
  RStexttitle: {
    color: 'gray',
    fontSize: fontSize.avgSmall,
    fontWeight: '400',
    marginTop: 5,
  },
  borderline: {
    height: heightPercentageToDP(0.1),
    width: '90%',
    backgroundColor: '#C4C4C4',

    marginHorizontal: 15,
  },
  fltext: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  BottomView: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  Bottominner: {
    flexDirection: 'row',
    //  backgroundColor: 'yellow',
    padding: 5,
    justifyContent: 'space-evenly',
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 8,
    backgroundColor:'white',
   marginRight:12,
    paddingVertical:5
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D60665',
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
   // backgroundColor: "#98CFB6"
  },
  radioButtonText: {
    // fontSize: 16,
    marginLeft: 15,
    // color:'black',
    // fontWeight:'400'
    fontSize: 15, fontWeight: '500', color: 'black'
  }
});
export default orderScreen;
