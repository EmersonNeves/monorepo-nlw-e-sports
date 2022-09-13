import React from "react";
import { Text, View, ViewProps, Image } from "react-native";

import { styles } from "./styles";
import imageDuo from "../../assets/duo.png";

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}
export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={imageDuo} />
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
