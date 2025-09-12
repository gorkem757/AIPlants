import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
// TODO : move to components directory right under src
interface Props {
  totalSteps: number;
  currentStep: number;
  containerStyle?: StyleProp<ViewStyle>;
}

const ProgressIndicatorSteps: React.FC<Props> = ({
  totalSteps,
  currentStep,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentStep ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

export default ProgressIndicatorSteps;

//TODO: move to separate styles file
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginVertical: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#13231B', // dark active dot
  },
  inactiveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#13231B40', // light gray inactive
  },
});
