import { GameBannerProps } from "./types/game-banner.type";

export function GameBanner({ bannerUrl, adsCount, title }: GameBannerProps) {
  return (
    <a className="relative rounded-lg overflow-hidden" href="">
      <img src={bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0">
        <strong className="font-bold text-white block">
          {title}
        </strong>
        <span className="text-sm text-zinc-300 block mt-1">{adsCount} anúncio(s)</span>
      </div>
    </a>
  );
}
