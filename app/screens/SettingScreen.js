import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
});

export default SettingScreen;
