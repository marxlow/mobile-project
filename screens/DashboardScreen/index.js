/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import TabNavButton from '../../shared/components/TabNavButton';
import ActivityTab from './components/ActivityTab';
import GroupTab from './components/GroupTab';
import FriendsTab from './components/FriendsTab';

const spacingSize = 15;
class DashboardScreen extends React.Component {
  state = {
    selectedTab: 'activity',
  };
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
  getTabContent = () => {
    switch (this.state.selectedTab) {
      case 'activity':
        return <ActivityTab spacingSize={spacingSize} />;
      case 'group':
        return <GroupTab spacingSize={spacingSize} />;
      default:
        return <FriendsTab spacingSize={spacingSize} />;
    }
  };

  render() {
    const navButtonTitles = ['activity', 'group', 'friends'];
    return (
      <View style={{flexDirection: 'column', flex: 1}}>
        {/* ~~~~~~~~~~~ */}
        {/* Top Nav Bar */}
        {/* ~~~~~~~~~~~ */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#57b5a4',
            paddingTop: spacingSize,
          }}>
          <View
            style={{
              width: '100%',
              paddingHorizontal: spacingSize,
              paddingBottom: spacingSize * 2,
            }}>
            <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>
              TheProject
            </Text>
          </View>
          {/* Nav buttons */}
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginHorizontal: spacingSize,
            }}>
            {navButtonTitles.map((title, index) => {
              const isActive = this.state.selectedTab === title;
              return (
                <View key={index} style={{flex: 1}}>
                  <TabNavButton
                    buttonStyle={{paddingBottom: 10}}
                    originalTitle={title}
                    isActive={isActive}
                    onPress={() => this.onChangeTab(title)}
                  />
                </View>
              );
            })}
          </View>
        </View>
        {this.getTabContent()}
      </View>
    );
  }
}

export default DashboardScreen;
