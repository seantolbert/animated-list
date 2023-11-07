import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  RollInLeft,
  RollOutRight,
  SlideInLeft,
  SlideOutRight,
} from "react-native-reanimated";

const Card = (movie) => {
  const { id, title, description, posterUrl } = movie;

  return (
    <Animated.View
      layout={Layout.stiffness()}
      //   entering={RollInLeft}
      //   exiting={RollOutRight}
      //   entering={SlideInLeft}
      //   exiting={SlideOutRight}
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.card}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{description}</Text>
      <Image source={{ uri: posterUrl }} style={styles.poster} />
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 16,
    marginVertical: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#383838",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: "#575757",
  },
  poster: {
    height: 345,
    width: "100%",
    marginTop: 20,
    borderRadius: 14,
  },
});
