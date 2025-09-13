import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { setOnboardingComplete } from '~secureStore/secureStore';
import { useAppDispatch } from '~store/hooks';
import { setOnboardingCompleteAction } from '~store/slices/appInitSlice';
import { styles } from './styles';
import FreeTrialCard from '~components/FreeTrialCard/FreeTrialCard';

const HomeScreen = () => {
  //#region hooks
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  //#endregion

  //#region states
  const [text, onChangeText] = useState<string>('Search for plants');
  //#endregion

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      <View style={styles.header}>
        {/* TODO: give bg image here */}
        {/* TODO: get the name from userSlice if name nickname etc exists use that */}
        <Text style={styles.helloText}>Hi, plant lover!</Text>
        {/* // TODO: change greeting based on time of day */}
        <Text style={styles.greetingsText}>Good Afternoon! ⛅</Text>
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        <FreeTrialCard containerStyle={{ marginHorizontal: 24 }} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
