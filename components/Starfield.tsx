// Fundo estrelado global (estilos em app/globals.css). Server component: zero JS no cliente.
export default function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      <i />
      <i />
      <i />
      <span className="shoot" style={{ ["--x" as string]: "12%", ["--y" as string]: "6%", ["--t" as string]: "17s", ["--d" as string]: "3s" }} />
      <span className="shoot" style={{ ["--x" as string]: "58%", ["--y" as string]: "14%", ["--t" as string]: "26s", ["--d" as string]: "11s" }} />
    </div>
  );
}
