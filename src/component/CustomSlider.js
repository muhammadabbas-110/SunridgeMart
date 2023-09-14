import {
    View,
    StyleSheet,
    Image,
  } from 'react-native';
  import React, { useRef} from 'react';
  import {height, width} from 'react-native-dimension';
  import Carousel, {Pagination} from 'react-native-snap-carousel';
  import {vh, vw} from '../constant';
  import FastImage from 'react-native-fast-image';

export default function CustomSlider(props) {
    const ref = useRef();
    const CarouselCardItem = ({item, index}) => {
        return (
          <View style={styles.carasolmain}>
            <FastImage
              source={props.imagedata}
              style={styles.carasolsliderimage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.paginationview}>
              <Pagination
                dotsLength={props.dotsLength}
                activeDotIndex={props.activeDotIndex}
                carouselRef={ref}
                dotStyle={styles.paginationdotstyle}
                inactiveDotColor={'#707070'}
                inactiveDotScale={0.6}
                tappableDots={true}
              />
            </View>
          </View>
        );
      };
  return (
    <Carousel
    layout="normal"
    ref={ref}
    pagingEnabled={true}
    data={props.data}
    activeSlideAlignment={"start"}
    renderItem={CarouselCardItem}
    sliderWidth={vw * 100}
    itemWidth={vw * 100}
    activeDotIndex={props.activeDotIndex}
    onSnapToItem={props.onSnapToItem}
   // useScrollView={true}
    autoplay={true}
    
    loopClonesPerSide={props.loopClonesPerSide} 
  />
  )
}
const styles = StyleSheet.create({

  
    carasolmain: {
      width: '100%',
      position: 'relative',
      height: height(25),
      alignItems: 'center',
  
    },
    carasolsliderimage: {
      height: '100%',
      width: '100%',
      borderRadius: 20,
    },
  
    paginationview: {
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: 0,
    },
    paginationdotstyle: {
      width: 18,
      height: 6,
      borderRadius: 5,
      marginHorizontal: -5,
      backgroundColor: '#FF2A00',
    },
  
  });