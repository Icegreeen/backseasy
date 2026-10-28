import Link from "next/link";
import Image from "next/image";

export default function NavigationAllBackgrounds({ category }: { category?: string }) {
    return (
        <div className="flex">
            <Link href={"/all_backgrounds"} className="flex items-center ms-12 justify-center transition-transform opacity-80 hover:opacity-60 ">
              <p>See more<span className="sr-only"> {category ?? "backgrounds"}</span></p> <Image src="/Arrowright.svg" alt="" width={16} height={16} />
            </Link>
          </div>
    )
}