
interface ButtonProps {
    value: string
  }
  
export function ButtonBackgroundShine(props: ButtonProps) {
    return (
      <button className="inline-flex animate-shine items-center justify-center rounded-lg text-sm border 
      border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2
      font-medium text-neutral-400 transition-colors">
      {props.value}
    </button>
    );
}