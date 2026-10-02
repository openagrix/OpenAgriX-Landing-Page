import Image from "next/image";

export function Brand({
  tagline,
  size = "header",
}: {
  tagline: string;
  size?: "header" | "footer";
}) {
  return (
    <span className={`brand brand-${size}`}>
      <Image
        className="brand-logo"
        src="/logo.png"
        width={1600}
        height={474}
        alt=""
        sizes="148px"
        priority={size === "header"}
      />
      <span className="brand-tag">{tagline}</span>
    </span>
  );
}
