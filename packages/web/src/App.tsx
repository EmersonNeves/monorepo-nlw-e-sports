import { MagnifyingGlassPlus } from "phosphor-react";
import "./styles/main.css";

import logoImage from "./assets/games/logo-nlw-esports.png";

function App() {
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
        <a className="relative" href="">
          <img src="/game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative" href="">
          <img src="/game-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0">
            <strong className="font-bold text-white block">DOTA</strong>
            <span className="text-sm text-zinc-300 block mt-1">2 anúncios</span>
          </div>
        </a>
        <a className="relative" href="">
          <img src="/game-3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike GO
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">5 anúncios</span>
          </div>
        </a>
        <a className="relative" href="">
          <img src="/game-4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0">
            <strong className="font-bold text-white block">APEX LEGENDS</strong>
            <span className="text-sm text-zinc-300 block mt-1">6 anúncios</span>
          </div>
        </a>
        <a className="relative" href="">
          <img src="/game-5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0">
            <strong className="font-bold text-white block">FORTNITE</strong>
            <span className="text-sm text-zinc-300 block mt-1">2 anúncios</span>
          </div>
        </a>
        <a className="relative" href="">
          <img src="/game-6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400">
              Crie um anúncio para encontrar novos players
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
