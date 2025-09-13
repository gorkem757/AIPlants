import React, { useCallback } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { IGetQuestionListItem } from '~services/QuestionsService/interfaces';

type Props = {
  question: IGetQuestionListItem;
  onPress?: (id: number) => void;
};

const QuestionListItem: React.FC<Props> = ({ question, onPress }) => {
  const handlePress = useCallback(() => {
    onPress?.(question.id);
  }, [onPress, question.id]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}>
      <ImageBackground
        src={question.image_uri}
        style={styles.image}
        resizeMode="cover">
        <Text numberOfLines={2} style={styles.title}>
          {question.title}
        </Text>
        <View style={styles.overlay} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default QuestionListItem;
