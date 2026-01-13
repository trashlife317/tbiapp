import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../src/theme/theme';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to TBI Link</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: theme.colors.text,
  },
});
