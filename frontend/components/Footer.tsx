import { View, Text, Button } from 'react-native';

const Footer = () => (
  <View >
    <Text className="text-l font-bold">fitdrop</Text>
    <Button title="Settings" onPress={() => { /* Navigate to settings */ }} />
  </View>
);

export default Footer;