import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import { styles } from "./styles";

import imageLogo from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GamesCard } from "../../components/GamesCard";

import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={imageLogo} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      /> 
      <FlatList
        contentContainerStyle={styles.contentList}
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GamesCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
