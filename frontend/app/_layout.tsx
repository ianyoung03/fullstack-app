import { Stack } from "expo-router";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { View } from "react-native"
export default function RootLayout() {
  return (
    <View className="flex-1">
      <Header/>
      <View className="flex-1">
        <Stack>
        <Stack.Screen name="index" />
        </Stack>
      </View>
      <Footer/>
    </View>
  );
}
