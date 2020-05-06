import * as React from 'react';
import {View, Animated, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import styled from 'styled-components';
import {useState} from 'react';
import {deviceinfo} from '../common/device';

const HEADER_MAX_HEIGHT = Math.round(deviceinfo.screenHeight / 3);
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Home = styled(View)`
  flex: 1;
`;

const VideoItem = styled(TouchableOpacity)`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding: 15px 10px;
  justify-content: space-between;
`;

const BlackBox = styled(View)`
  width: 125px;
  height: 125px;
  background-color: black;
`;

const ImageWrapper = styled(View)``;
const VideoContent = styled(View)`
  flex: 1;
`;

const ContentHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled(Text)`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
const Time = styled(Text)``;
const Description = styled(Text)`
  padding-top: 10px;
  padding-left: 7px;
`;
const Content = styled(View)``;

const renderVideoItem = () => (
  <VideoItem>
    <ImageWrapper>
      <Image source={require('../assets/images/thumbnail.jpg')} />
    </ImageWrapper>
    <VideoContent>
      <ContentHeader>
        <Title>Bu bir Film</Title>
        <Time>33:24</Time>
      </ContentHeader>
      <Content>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus libero massa, vitae sollicitudin neque sagittis sed. Quisque eleifend sodales lectus a commodo.</Description>
      </Content>
    </VideoContent>
  </VideoItem>
);

const Videos = [{}, {}, {}, {}, {}, {}, {}];

const HomeScreen = () => {
  const [scrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  return (
    <Home>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <Animated.Image  style={[
            styles.image,
      {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
          ]}
          source={require('../assets/images/header.jpg')}
        />
      </Animated.View>
      <Animated.ScrollView
        style={[styles.scroll, {marginTop: headerHeight}]}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}]
        )}
      >
        {Videos.map(() => renderVideoItem())}
      </Animated.ScrollView>
    </Home>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#bab82f',
    overflow: 'hidden',
  },
  scroll: {
    flex: 1,
    marginTop: HEADER_MAX_HEIGHT,
  },
  image: {
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
