import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "./styles";

import imageBackground from '../../assets/background-galaxy.png'

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground resizeMode="cover" source={imageBackground} defaultSource={imageBackground} style={styles.container}>
      {children}
    </ImageBackground>
  );
}
