/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View, Text, TouchableHighlight} from 'react-native';
import BrandLogo from '../../../shared/components/BrandLogo';
import {Icon} from '@ant-design/react-native';

const HistoricalSettle = ({
  iconUrl = 'https://picsum.photos/200/200',
  name,
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
      }}>
      <View style={{flex: 2}}>
        <BrandLogo size="xs" rounded={true} imageSrcUrl={iconUrl} />
      </View>
      <View style={{flex: 4}}>
        <Text style={{fontSize: 15}}>{name}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={{fontSize: 12, color: '#4f4f4f'}}>Settled up</Text>
      </View>
    </View>
  );
};

const ActivityTab = ({spacingSize}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#e4e5e7',
          padding: spacingSize,
          flexDirection: 'row',
        }}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <BrandLogo size="sm" rounded={true} bordered />
        </View>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 12, marginBottom: 12, color: '#4f4f4f'}}>
              TOTAL BALANCE
            </Text>
            <Text style={{fontSize: 12, color: '#eb5c0de3'}}>
              You owe US$10,000.56
            </Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableHighlight
            style={{
              backgroundColor: 'transparent',
              borderRadius: 100,
              borderWidth: 0,
            }}>
            <Icon name="menu" style={{color: '#9b9b9b'}} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={{flex: 6, paddingHorizontal: spacingSize}}>
        <FlatList
          data={[
            {id: '1', name: 'Albert'},
            {id: '2', name: 'Faye'},
            {id: '3', name: 'Gwen'},
          ]}
          renderItem={({item}) => <HistoricalSettle name={item.name} />}
        />
      </View>
    </>
  );
};

export default ActivityTab;
