import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import FreeTrialCard from '~components/FreeTrialCard/FreeTrialCard';
import GetStartedSection from '~modules/Home/components/GetStartedSection/GetStartedSection';
import { useGetQuestionsListQuery } from '~services/QuestionsService';
import { useGetCategoryListQuery } from '~services/CategoriesService';
import CategoryList from '~modules/Home/components/CategoryList/CategoryList';
import { useAppDispatch } from '~store/hooks';
import { setOnboardingCompleteAction } from '~store/slices/appInitSlice';
import { setOnboardingComplete } from '~secureStore/secureStore';

const HomeScreen = () => {
  //#region hooks
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  //#endregion

  //#region states
  const [text, onChangeText] = useState<string>('');
  //#endregion

  //#region queries

  const {
    data: questionsData,
    error: questionsError,
    isLoading: isLoadingQuestions,
  } = useGetQuestionsListQuery();

  const {
    data: categoryData,
    error: categoryError,
    isLoading: isLoadingCategories,
    isFetching: isFetchingMoreCategories,
  } = useGetCategoryListQuery();

  //#endregion

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      <View style={styles.header}>
        {/* TODO: give bg image here */}
        {/* TODO: get the name from userSlice if name nickname etc exists use that */}
        <Text style={styles.helloText}>Hi, plant lover!</Text>
        {/* // TODO: change greeting based on time of day */}
        <Text
          onPress={() => {
            dispatch(setOnboardingCompleteAction(false));
            setOnboardingComplete(false);
          }}
          style={styles.greetingsText}>
          Good Afternoon! ⛅
        </Text>
        <TextInput
          placeholder="Search for plants"
          style={styles.searchInput}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        <FreeTrialCard containerStyle={{ marginHorizontal: 24 }} />
        <GetStartedSection
          data={questionsData}
          isLoading={isLoadingQuestions}
          hasError={questionsError}
        />
        <CategoryList
          data={categoryData?.data}
          isLoading={isLoadingCategories}
          hasError={categoryError}
          isFetchingMore={isFetchingMoreCategories}
        />
        <View style={styles.footerDivider} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
