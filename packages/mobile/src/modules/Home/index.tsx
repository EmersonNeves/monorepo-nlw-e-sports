import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

import { styles } from "./styles";

import imageLogo from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { gameCardProps, GamesCard } from "../../components/GamesCard";

import { GAMES } from "../../utils/games";


const [games, setGames] = useState<gameCardProps[]>([]);

export function Home() {
  // async function getGames() {
  //   const data = await api;
  //   setGames(data);
  // }

  // useEffect(() => {
  //   getGames();
  // }, []);
  return (
    <View style={styles.container}>
      <Image source={imageLogo} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        contentContainerStyle={styles.contentList}
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GamesCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
