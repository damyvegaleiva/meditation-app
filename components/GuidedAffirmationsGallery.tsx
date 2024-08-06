import { View, Text, FlatList, Pressable, Image } from "react-native";
import { GalleryPreviewData } from "./models/AffirmationCategory";
import { Link } from "expo-router";

type GuidedAffirmationsGalleryPros = {
  title: string;
  previews: GalleryPreviewData[];
};

const GuidedAffirmationsGallery: React.FC<GuidedAffirmationsGalleryPros> = ({
  title,
  previews,
}) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-xl font-bold text-white">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="w-32 mr-4 rounded-md h-36">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
