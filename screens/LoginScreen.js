/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {InputItem} from '@ant-design/react-native';
import BrandLogo from '../shared/components/BrandLogo';
import ClickableButton from '../shared/components/ClickableButton';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    const {email, password} = this.state;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'column', margin: 20}}>
        {/* Header */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BrandLogo size="sm" />
          <Text style={{fontWeight: '700'}}>TheProject</Text>
        </View>

        {/* Input fields */}
        <View style={{marginBottom: 10}}>
          <InputItem
            onChange={value => this.setState({email: value})}
            placeholder="Your email"
            value={email}
          />
        </View>

        <InputItem
          onChange={value => this.setState({password: value})}
          placeholder="Your password"
          value={password}
          type="password"
        />

        {/* Action buttons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 20,
          }}>
          <ClickableButton title="Back" onPress={() => navigation.pop()} />
          <ClickableButton
            type="secondary"
            title="Done"
            onPress={() => navigation.push('Onboarding')}
          />
        </View>
        <Text style={{textAlign: 'center', textDecorationLine: 'underline'}}>
          Forgot your password?
        </Text>
      </View>
    );
  }
}

export default LoginScreen;
