import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eleições Passadas</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.election}>Eleições 2024</Text>
      <Text style={styles.election}>Eleições 2022</Text>
      <Text style={styles.election}>Eleições 2020</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  election: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1228d5'
  },
});
