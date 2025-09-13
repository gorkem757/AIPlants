import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import {  GetStartedSectionProps } from './models';
import QuestionListItem from '../QuestionListItem/QuestionListItem';
import { IGetQuestionListItem } from '~services/QuestionsService/interfaces';

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  data,
  isLoading,
  hasError,
}) => {
  const handleOnPressItem = useCallback((id: number) => {
    // todo handle onpress to navigate to question detail later
    console.log({ id });
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: IGetQuestionListItem }) => (
      <QuestionListItem
        key={item.id}
        question={item}
        onPress={() => handleOnPressItem(item.id)}
      />
    ),
    [handleOnPressItem]
  );

  if (!data || isLoading || hasError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContentContainer}
        renderItem={renderItem}
      />
    </View>
  );
};
export default GetStartedSection;
