/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createForm} from 'rc-form';
import {InputItem, Toast} from '@ant-design/react-native';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import ClickableButton from '../../../shared/components/ClickableButton';
import BrandLogo from '../../../shared/components/BrandLogo';

class ProfileTab extends React.Component {
  state = {
    isLoading: false,
    logo: 'https://picsum.photos/200/200',
    formErrors: {},
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
    // TODO: Doesn't work at the moment. Investigate for alternative feedbacks
    Toast.info(this.state.formErrors[key], 1);
  };

  onImagePressed = () => {
    const options = {
      title: 'Select logo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      this.setState({logo: response.uri});
    });
  };

  render() {
    const {formErrors, email, mobile} = this.state;
    const {spacingSize, form} = this.props;
    const {getFieldDecorator} = form;
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            padding: spacingSize,
            backgroundColor: 'lightgrey',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableWithoutFeedback onPress={this.onImagePressed}>
              <View>
                <BrandLogo
                  size="sm"
                  rounded={true}
                  imageSrcUrl={this.state.logo}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
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
