import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';



export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prefeitura</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://pbs.twimg.com/profile_images/1577341269205991424/8NsJKd2O_400x400.jpg' }}  // ou {uri: 'https://exemplo.com/imagem.jpg'}
        />

        <Image
          style={styles.image}
          source={{ uri: 'https://pbs.twimg.com/profile_images/1577341269205991424/8NsJKd2O_400x400.jpg' }}  // ou {uri: 'https://exemplo.com/imagem.jpg'}
        />
      </View>

      <Text style={styles.title}>Vereador</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://pbs.twimg.com/profile_images/1577341269205991424/8NsJKd2O_400x400.jpg' }}  // ou {uri: 'https://exemplo.com/imagem.jpg'}
        />

        <Image
          style={styles.image}
          source={{ uri: 'https://pbs.twimg.com/profile_images/1577341269205991424/8NsJKd2O_400x400.jpg' }}  // ou {uri: 'https://exemplo.com/imagem.jpg'}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
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
