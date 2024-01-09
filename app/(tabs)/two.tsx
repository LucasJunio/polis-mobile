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
          source={{ uri: 'https://s2-g1.glbimg.com/jhZZxvyyfXoq0J5iUZJ4xq3_yD0=/0x0:995x969/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/0/f/yNJOJXTcWRE7OtMMnhBw/fuadok.jpg' }}  // ou {uri: 'https://exemplo.com/imagem.jpg'}
        />
      </View>

      <Text style={styles.title}>Vereador</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Fernando_Henrique_Cardoso_%281999%29.jpg' }}  // ou {uri: 'https://exemplo.com/imagem.jpg'}
        />

        <Image
          style={styles.image}
          source={{ uri: 'https://osdivergentes.com.br/wp-content/uploads/2021/02/juscelino-kubitschek-jk.jpg' }}  // ou {uri: 'https://exemplo.com/imagem.jpg'}
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
