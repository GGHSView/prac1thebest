import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F24smi.org%2Fpublic%2Fmedia%2Fresize%2F800x-%2Fcelebrity%2F2017%2F10%2F18%2F1YzqVVfpQ5ok_grant-gastin.jpg&f=1&nofb=1&ipt=830335a9c7bb19a784e7c02d8d749afa98fab7bf93d2cb47afd205e426108481' }}
        />
        <Pressable style={styles.boxBack}>
          <Ionicons name="arrow-back" size={24}></Ionicons>
        </Pressable>
        <Pressable style={styles.boxForward}>
          <Ionicons name="arrow-forward" size={24}></Ionicons>
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Гран Гастин</Text>
          <Text style={styles.title}>Middle Frontend Developer</Text>
          <Text style={styles.bio}>
            Люблю React Native, сниматься в кино и гулять с собакой. Разрабатываю обильные
            приложения уже 50 лет, а также снимаюсь в кино.
          </Text>
        </View>
        <View style={styles.skills}>
          <Text style={styles.skill}>Visual</Text>
          <Text style={styles.skill}>Adobe</Text>
          <Text style={styles.skill}>Pomogite</Text>
        </View>
        <Pressable style={styles.boxBtn}>
          <Text style={styles.textBtn}>Подписаться</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    // Тень для iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    // Тень для Android
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Делаем круг
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: '#636363',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  skill: {
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#614051',
  },
  skills: {
    marginTop: 12,
    gap: 10,
    flexDirection: 'row',
  },
  textBtn: {
    fontSize: 15,
    fontWeight: 600,
    color: '#fff',
  },
  boxBtn: {
    marginTop: 15,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#0F9D7F',
  },
  boxBack: {
    top: '7%',
    left: '3%',
    position: 'absolute',
  },
  boxForward: {
    top: '7%',
    right: '3%',
    position: 'absolute',
  },
});
export default App;
