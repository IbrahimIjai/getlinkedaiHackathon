interface Props {
  text: string;
  isWhite?: boolean;
  type?: "h1" | "h3" | "p";
}
export default function Text({ text, isWhite, type }: Props) {
  switch (type) {
    case "h1":
      return <H1 text={text} isWhite={isWhite} />;
    case "h3":
      return <H3 text={text} isWhite={isWhite} />;
    case "p":
      return <P text={text} isWhite={isWhite} />;
    default:
      return <P text={text} isWhite={isWhite} />;
  }
}
function H1({ text, isWhite }: Props) {
  return (
    <h1
      className={`text-3xl font-bold ${
        isWhite ? "text-white" : "text-primary"
      }`}
    >
      {text}
    </h1>
  );
}
function H3({ text, isWhite }: Props) {
  return (
    <h3
      className={`text-xl font-bold ${isWhite ? "text-white" : "text-primary"}`}
    >
      {text}
    </h3>
  );
}
function P({ text, isWhite }: Props) {
  return (
    <p
      className={`text-base font-bold ${
        isWhite ? "text-white" : "text-primary"
      }`}
    >
      {text}
    </p>
  );
}
