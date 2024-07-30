import { ImageBackground, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import home_daily_life from "@/assets/images/home-daily-life.jpg";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

export default function HomeScreen() {

  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={home_daily_life}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"]}
        >
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Daily Life
              </Text>
              <Text className="text-center text-white font-normal text-2xl mt-3">
                To be a money smarter and life professional.
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push('/test')}
                title="Get Started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
