import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function TabTreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Voto</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.imageContainer}>
        <View>
        <Text>Prefeito</Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://pbs.twimg.com/profile_images/1577341269205991424/8NsJKd2O_400x400.jpg' }}  // ou {uri: 'https://exemplo.com/imagem.jpg'}
        />
        </View>
        <View>
        <Text>Vereador</Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://pbs.twimg.com/profile_images/1577341269205991424/8NsJKd2O_400x400.jpg' }}  // ou {uri: 'https://exemplo.com/imagem.jpg'}
        />
        </View>
      </View>
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
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    margin: 15,
    width: 100, 
    height: 100
  },
});
