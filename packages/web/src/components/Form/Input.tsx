import { InputProps } from "./types";

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:zinc-400"
    />
  );
}
