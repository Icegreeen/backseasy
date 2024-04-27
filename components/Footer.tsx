import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex max-[450px]:flex-col gap-32 p-28 place-content-between border border-stroke-1 rounded-out place-items-center max-[450px]:align-middle max-[450px]:place-content-center max-w-[1800px] w-full">
      <div className="flex flex-col gap-16 max-[450px]:items-center">
        <Link href={"https://google.com"}>
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="Logo"
            className="hover-active-effect"
          />

          <Link
            href={"https://google.com"}
            className="text-4 hover:text-selected active:text-selected/75 duration-150 max-[450px]:text-center"
          >
            @ Backseasy 
          </Link>
        </Link>
      </div>

      <div className="p-8 border border border-stroke-1 rounded-out flex items-center hover-active-effect">
        {/*
        <Image
            src={"/icons/coffee.png"}
            width={40}
            height={40}
            alt="Coffee"
            className=""
          />
        <a 
          href="https://www.buymeacoffee.com/icegreen"
          className=""
        >
          Buy me a coffee
          </a>

        */}
          <Link
            href={"https://www.buymeacoffee.com/icegreen"}
            className="bg-yellow border-stroke-2 text-white hover:bg-yellow/75 active:bg-yellow/50 disabled:bg-yellow/25
            text-body border w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in
            hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30"
          >
            <Image
            src={"/icons/coffee.png"}
            width={40}
            height={40}
            alt="Coffee"
            className=""
          />
            Buy me a coffee
          </Link>
      </div>

      {/*
      <div>
          <Image
            src={"/icons/bymycoffee/white-button.png"}
            width={160}
            height={160}
            alt="Coffee"
            className=""
          />
      </div>
      */}

      <div className="flex flex-col gap-8 place-items-end max-[450px]:place-items-center">
        <div className="flex gap-16">
          <Link href={"https://github.com/Icegreeen"}>
            <Image
              src={"/icons/github.png"}
              alt={"github"}
              width={32}
              height={32}
              className="hover-active-effect"
            />
          </Link>
        </div>

        <Link
          href={"https://github.com/Icegreeen"}
          className="text-sub hover:text-selected active:text-selected/75 duration-150 max-[450px]:text-center"
        >
          Build by Flávio Aquila 
        </Link>
      </div>
    </footer>
  );
}
