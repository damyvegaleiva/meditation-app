import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affimartion-gallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-3xl font-bold text-zinc-50">
            Change your beliefs with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((img) => (
              <GuidedAffirmationsGallery
                key={img.title}
                title={img.title}
                previews={img.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
