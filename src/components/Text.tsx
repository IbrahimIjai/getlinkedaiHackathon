interface Props {
  text: string;
  isWhite?: boolean;
  type?: "h1" | "h3" | "p";
  className?: string;
}
export default function Text({ text, isWhite, type, className }: Props) {
  switch (type) {
    case "h1":
      return <H1 text={text} isWhite={isWhite} className={className} />;
    case "h3":
      return <H3 text={text} isWhite={isWhite} className={className} />;
    case "p":
      return <P text={text} isWhite={isWhite} className={className} />;
    default:
      return <P text={text} isWhite={isWhite} className={className} />;
  }
}
function H1({ text, isWhite, className }: Props) {
  return (
    <h1
      className={`text-lg lg:text-3xl font-bold ${
        isWhite ? "text-white" : "text-primary"
      } ${className ? className : ""}`}
    >
      {text}
    </h1>
  );
}
function H3({ text, isWhite, className }: Props) {
  return (
    <h3
      className={`text-xl font-bold ${
        isWhite ? "text-white" : "text-primary"
      } ${className ? className : ""}`}
    >
      {text}
    </h3>
  );
}
function P({ text, isWhite, className }: Props) {
  return (
    <p
      className={`text-base ${isWhite ? "text-white" : "text-primary"}
      ${className ? className : ""}
      `}
    >
      {text}
    </p>
  );
}
