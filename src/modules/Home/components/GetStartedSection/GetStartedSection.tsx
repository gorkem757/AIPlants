import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { GetStartedSectionProps } from './types';
import QuestionListItem from '../QuestionListItem/QuestionListItem';
import { IGetQuestionListItem } from '~services/QuestionsService/interfaces';
import { calcWidth } from '~helpers/responsiveHelpers';

const ITEM_WIDTH = calcWidth(240);

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
    // TODO implement skeleton on isLoading
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <FlatList
        data={data}
        horizontal
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: (ITEM_WIDTH + 16) * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContentContainer}
        renderItem={renderItem}
      />
    </View>
  );
};
export default GetStartedSection;
