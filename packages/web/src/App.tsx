import "./styles/main.css";

import { useEffect, useState } from "react";
import logoImage from "./assets/games/logo-nlw-esports.png";

import { GameBanner } from "./components/GameBanner";
import { GameProps } from "./types/Game.type";

import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { CreateAdsBanner, Input } from "./components";

import api from "@nlw-monorepo/fetch-config";
import { CreateAdModal } from "./components/CreateAdModal";

function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  async function gamesData() {
    const data = await api
    setGames(data)
  }

  useEffect(() => {
    gamesData();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImage} alt="Logo e-Sports NLW" />
      <h1 className="text-[64px] text-white font-black my-5">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-4">
        {games.map(({ title, bannerUrl, _count }, index) => (
          <GameBanner
            key={index}
            title={title}
            bannerUrl={bannerUrl}
            adsCount={_count.Ads}
          />
        ))}
      </div>
      <Dialog.Root>
        <CreateAdsBanner />
        <CreateAdModal/>
      </Dialog.Root>
    </div>
  );
}

export default App;
