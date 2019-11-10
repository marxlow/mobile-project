/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Carousel} from '@ant-design/react-native';
import {NavigationActions} from 'react-navigation';
import BrandLogo from '../shared/components/BrandLogo';

const onboardingTexts = [
  {
    title: 'Welcome to TheProject, Marx!',
    description: 'TheProject is an awesome project.',
  },
  {
    title: 'Add expenses',
    description: 'Split expesnses with groups or with individuals.',
  },
  {
    title: 'Settle up',
    description: 'Pay your friends back anytime.',
  },
];

class OnboardingScreen extends React.Component {
  onOnboardingStepChange = index => {
    if (index === onboardingTexts.length) {
      // Upon reaching the end of onboarding, wait 1s before navigating to dashboard
      setTimeout(() => {
        this.props.navigation.reset([
          NavigationActions.navigate({routeName: 'Dashboard'}),
        ]);
      }, 500);
    }
  };
  render() {
    return (
      <View>
        <Carousel
          selectedIndex={0}
          style={{backgroundColor: '#57b5a4'}}
          afterChange={this.onOnboardingStepChange}
          dotActiveStyle={{backgroundColor: 'white'}}>
          {onboardingTexts.map(({title, description}, index) => (
            <View
              key={index}
              style={{
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flex: 7, justifyContent: 'center'}}>
                <BrandLogo rounded={true} />
              </View>
              <View style={{flex: 3}}>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  {/* Title for onboarding */}
                  <View style={{width: '60%'}}>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 20,
                        textAlign: 'center',
                        color: 'white',
                        flexWrap: 'wrap',
                      }}>
                      {title}
                    </Text>
                  </View>
                  {/* Decsription */}
                  <View style={{width: '90%'}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 18,
                        marginTop: 20,
                      }}>
                      {description}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '700', fontSize: 20, color: 'white'}}>
              Let's begin
            </Text>
          </View>
        </Carousel>
      </View>
    );
  }
}

export default OnboardingScreen;
