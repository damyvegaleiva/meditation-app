import {
  View,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { GalleryPreviewData } from "@/components/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affimartion-gallery";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";

const AffirmationPractice = () => {
  const router = useRouter();
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationsData = AFFIRMATION_GALLERY[idx].data;

      const affirmationToStart = affirmationsData.find(
        (a) => a.id === Number(itemId)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmationsArray = affirmationToStart.text.split(".");

        // Remove the last element if it's an empty string
        if (affirmationsArray[affirmationsArray.length - 1] === "") {
          affirmationsArray?.pop();
        }

        setSentences(affirmationsArray);

        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.9)"]}>
          <Pressable onPress={() => router.back()}>
            <AntDesign
              name="leftcircleo"
              size={50}
              color="white"
              className="absolute z-10 top-16 left-6"
            />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="justify-center h-full ">
              <View className="justify-center h-4/5">
                {sentences.map((sentence, idx) => (
                  <Text
                    key={idx}
                    className="mb-12 text-3xl font-bold text-center text-white"
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
