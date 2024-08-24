import { View, Text, Button } from 'react-native';

const Header = () => (
  <View >
    <Text className="text-l font-bold">fitdrop</Text>
    <Button title="Settings" onPress={() => { /* Navigate to settings */ }} />
  </View>
);

export default Header;