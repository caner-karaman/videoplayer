import * as React from 'react';
import {View, Animated, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import styled from 'styled-components';
import {useState} from 'react';
import {deviceinfo} from '../common/device';

const HEADER_MAX_HEIGHT = Math.round(deviceinfo.screenHeight / 3);
const HEADER_MIN_HEIGHT = Math.round(deviceinfo.screenHeight / 6);
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Home = styled(View)`
  flex: 1;
`;

interface VideoItemProp {
  index: number;
}
const VideoItem = styled(TouchableOpacity)`
  flex-direction: row;
  padding: 15px 10px;
  justify-content: space-between;
  background-color: ${props => props.index % 2 === 0 ? 'lightgray' : 'white'};
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

const handleGoToDetail = (navigation, video) => {
  navigation.navigate('VideoDetail', video);
};

const renderVideoItem = ({navigation, video}) => (
  <VideoItem
    key={`${video.title} - ${video.id}`}
    onPress={() => handleGoToDetail(navigation, video)}
    index={video.id}>
    <ImageWrapper>
      <Image source={require('../assets/images/thumbnail.jpg')} />
    </ImageWrapper>
    <VideoContent>
      <ContentHeader>
        <Title>{video.title}</Title>
        <Time>{video.time}</Time>
      </ContentHeader>
      <Content>
        <Description>{video.description}</Description>
      </Content>
    </VideoContent>
  </VideoItem>
);

const Videos = [
  {
    id: 0,
    title: 'Video',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus libero massa, vitae sollicitudin neque sagittis sed. Quisque eleifend sodales lectus a commodo.',
    time: '33:24',
    video: require('../assets/videos/small.mp4'),
  },
  {
    id: 1,
    title: 'Video 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus libero massa, vitae sollicitudin neque sagittis sed. Quisque eleifend sodales lectus a commodo.',
    time: '33:24',
    video: require('../assets/videos/grb.mp4'),
  },
  {
    id: 2,
    title: 'Video 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus libero massa, vitae sollicitudin neque sagittis sed. Quisque eleifend sodales lectus a commodo.',
    time: '33:24',
    video: require('../assets/videos/small.mp4'),
  },
  {
    id: 3,
    title: 'Video 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus libero massa, vitae sollicitudin neque sagittis sed. Quisque eleifend sodales lectus a commodo.',
    time: '33:24',
    video: require('../assets/videos/grb.mp4'),
  },
  {
    id: 4,
    title: 'Video 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus libero massa, vitae sollicitudin neque sagittis sed. Quisque eleifend sodales lectus a commodo.',
    time: '33:24',
    video: require('../assets/videos/small.mp4'),
  },
  {
    id: 5,
    title: 'Video 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus libero massa, vitae sollicitudin neque sagittis sed. Quisque eleifend sodales lectus a commodo.',
    time: '33:24',
    video: require('../assets/videos/grb.mp4'),
  },
  {
    id: 6,
    title: 'Video 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus libero massa, vitae sollicitudin neque sagittis sed. Quisque eleifend sodales lectus a commodo.',
    time: '33:24',
    video: require('../assets/videos/small.mp4'),
  },
];

const HomeScreen = ({navigation}) => {
  const [scrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
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
      {transform: [{translateY: imageTranslate}]},
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
        {Videos.map(video => renderVideoItem({navigation, video}))}
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
