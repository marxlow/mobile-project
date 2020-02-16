/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createForm} from 'rc-form';
import {InputItem, Toast} from '@ant-design/react-native';
import {View, Text} from 'react-native';
import ClickableButton from '../../../shared/components/ClickableButton';

class ProfileTab extends React.Component {
  state = {
    isLoading: false,
    formErrors: {},
    formFields: ['email', 'mobile'],
    email: 'hello@gmail.com',
    mobile: '87764551',
  };

  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (error) {
        let formErrors = {};
        for (const key in error) {
          formErrors[key] = error[key].errors[0].message;
        }
        this.setState({formErrors});
        return;
      }
    });
  };

  onErrorClick = key => {
    Toast.info(this.state.formErrors[key], 1);
  };

  onMobileChange = value => {
    // Validation for mobile errors
    const hasAlphabets = /[a-z]/.test(value);
    this.setState({mobile: {value, error: hasAlphabets}});
  };

  render() {
    const {formErrors, email, mobile} = this.state;
    const {spacingSize, form} = this.props;
    const {getFieldDecorator} = form;
    return (
      <>
        <View style={{flex: 7, padding: spacingSize}}>
          <View style={{paddingBottom: spacingSize}}>
            <Text>Email</Text>
            {getFieldDecorator('email', {
              initialValue: email,
              rules: [{required: true}],
            })(
              <InputItem
                clear
                error={formErrors.email}
                onErrorClick={() => this.onErrorClick('email')}
                onChange={value => this.setState({email: value})}
              />,
            )}
          </View>
          <View style={{paddingBottom: spacingSize}}>
            <Text>Mobile</Text>
            {getFieldDecorator('mobile', {
              initialValue: mobile,
              rules: [{required: true}],
            })(
              <InputItem
                clear
                type="digit"
                error={formErrors.mobile}
                onErrorClick={() => this.onErrorClick('mobile')}
                onChange={value => this.setState({mobile: value})}
              />,
            )}
          </View>
          <ClickableButton title="Save changes" onPress={this.submit} />
        </View>
      </>
    );
  }
}

export default createForm()(ProfileTab);
