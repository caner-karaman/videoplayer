import * as React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Home = styled(View)`
  background-color: blue;
  flex: 1;
`;

const Header = styled(View)`
  flex: 1;
  background-color: red;
`;

const Body = styled(View)`
  flex: 2;
  background-color: green;
`;

const HomeScreen = () => {
  return (
    <Home>
      <Header>
        <Text>Home Screen</Text>
      </Header>
      <Body />
    </Home>
  );
};

export default HomeScreen;
