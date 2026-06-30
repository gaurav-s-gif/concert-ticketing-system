interface Props {
  text: string;
}

export default function Badge({ text }: Props) {
  return (
    <span
      className="
        rounded-full
        bg-purple-600/20
        px-4
        py-1
        text-sm
        font-medium
        text-purple-300
      "
    >
      {text}
    </span>
  );
}