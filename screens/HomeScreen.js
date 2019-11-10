/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text} from 'react-native';
import ClickableButton from '../shared/components/ClickableButton';
import BrandLogo from '../shared/components/BrandLogo';

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <View style={{flex: 7}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <BrandLogo />
          </View>
        </View>
        <View style={{flex: 2, alignSelf: 'stretch'}}>
          <View style={{flex: 1}}>
            <ClickableButton
              title="Log In"
              wrapperStyle={{marginHorizontal: '5%', marginBottom: 10}}
            />
            <ClickableButton
              type="secondary"
              title="Sign Up"
              wrapperStyle={{marginHorizontal: '5%'}}
            />
          </View>
        </View>
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          <Text style={{textAlign: 'center'}}>
            Terms | Privacy Policy | Contact Us
          </Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
