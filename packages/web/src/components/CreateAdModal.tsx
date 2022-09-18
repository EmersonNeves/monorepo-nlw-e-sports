import api from "@nlw-monorepo/fetch-config";
import * as CheckBox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import axios from "axios";
import { Check, GameController } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { Input } from "./Form";
import { GameProps } from "./types/game-ad-modal.type";

export function CreateAdModal() {
  const [games, setGames] = useState<GameProps[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  async function gamesData() {
    const data = await api;
    setGames(data);
  }

  async function handleCreateAd(event:FormEvent) {
    event.preventDefault();

    console.log('event', new FormData(event.target as HTMLFormElement))    
    const formData = new FormData(event.target as HTMLFormElement);

    console.log(formData)
    const data = Object.fromEntries(formData);

    console.log(data)


    console.log('teste')
    try {
      await axios.post(`http://192.168.2.103:8000/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });

      alert("Anúncio cadastrado com sucesso");
    } catch (error) {
      alert("Erro ao cadastrar anúncio");
    }
  }

  useEffect(() => {
    gamesData();
  }, []);
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]">
        <Dialog.Title className="text-white text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form className="mt-8 flex flex-col gap-6" onSubmit={handleCreateAd}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="game">
              Qual o game?
            </label>
            <select
              id="game"
              name="game"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:zinc-400"
              defaultValue=""
            >
              <option disabled value="">Selecione o game que deseja jogar</option>
              {games.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Como te chamam dentro do game?"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input
                id="yearsPlaying"
                name="yearsPlaying"
                type="text"
                placeholder="Tudo bem ser 0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual o seu discord?</label>
              <Input
                name="discord"
                id="discord"
                type="text"
                placeholder="Usuário#0123"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>

              <ToggleGroup.Root
                className="grid grid-cols-4 gap-2"
                type="multiple"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Domingo"
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Segunda"
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Terça"
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Quarta"
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Quinta"
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Sexta"
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Sábado"
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="discord">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-1">
                <Input
                  type="time"
                  name="hourStart"
                  id="hoursStart"
                  placeholder="De"
                />
                <Input
                  type="time"
                  name="hourEnd"
                  id="hoursEnd"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <CheckBox.Root
                checked={useVoiceChannel}
                onCheckedChange={(checked) =>
                  checked ? setUseVoiceChannel(true) : setUseVoiceChannel(false)
                }
                className="w-6 h-6 p-1 rounded bg-zinc-900"
              >
                <CheckBox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </CheckBox.Indicator>
              </CheckBox.Root>
              Costumo me conectar ao chat de voz
            </label>
          </div>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-[48px] rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button  
              className="bg-violet-500 px-5 h-[48px] rounded-md font-semibold flex items-center gap-3 hover:bg-violet-700"
              type="submit"
            >
              <GameController className="w-6 h-6" />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
