import Link from "next/link";

export default function NavigationAllBackgrounds() {
    return (
        <div className="flex">
            <Link href={"/all_backgrounds"} className="flex items-center ms-12 justify-center transition-transform opacity-45 hover:opacity-25 ">
              <p>See more</p> <img src="./Arrowright.svg" alt="Arrow" />
            </Link>
          </div>
    )
}