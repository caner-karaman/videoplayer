import * as React from 'react';
import {View, Text} from 'react-native';
import styled from "styled-components";
import Video from 'react-native-video';

const VideoWrapper = styled(Video)`
  background-color: black;
  height: 400px;
  margin-bottom: 20px;
`;

const Content = styled(View)`
  padding: 0 10px;
`;

const Title = styled(Text)`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 4px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-bottom: 10px;
`;

const Description = styled(Text)`
  font-size: 16px;
`;

const VideoDetail = (props: any) => {
  const { params } = (props.route);

  return (
    <>
      <VideoWrapper source={params.video} repeat />
      <Content>
        <Title>{params.title}</Title>
        <Description>{params.description}</Description>
      </Content>
    </>
  );
};

export default VideoDetail;
