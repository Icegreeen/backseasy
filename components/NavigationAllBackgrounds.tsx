import Link from "next/link";
import Image from "next/image";

export default function NavigationAllBackgrounds() {
    return (
        <div className="flex">
            <Link href={"/all_backgrounds"} className="flex items-center ms-12 justify-center transition-transform opacity-45 hover:opacity-25 ">
              <p>See more</p> <Image src="/Arrowright.svg" alt="Arrow" width={16} height={16} />
            </Link>
          </div>
    )
}