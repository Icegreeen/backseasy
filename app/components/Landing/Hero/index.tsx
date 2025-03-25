import localFont from "next/font/local";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import BlackHole from "../../black-hole/black-hole";
import Link from "next/link";
const hanson = localFont({
    src: "../../../hanson.woff2",
    display: "swap",
  });

export default function Hero() {
    return (
        <div className="relative items-center w-full mb-[100px] px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-6xl md:px-12">
          <div className="flex pb-[70px] w-full justify-center">
            <BlackHole />
          </div>
        
          <div className="relative flex-col items-start m-auto align-middle">
                <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                  <div className="relative items-center gap-1 m-auto lg:inline-flex">
                    <div className="max-w-xl lg:text-left">
                      <div className="flex flex-col max-w-[1800px] w-full pt-[120px] py-[50px] gap-24">
                      <div className="flex flex-col ">

                        <p className="text-body mb-8">Made by <Link className="text-purple text-[18px]" href="https://github.com/Icegreeen">Flávio Áquila</Link></p>
                        
                        <h1
                          className={`${hanson.className} bg-gradient-to-t from-zinc-100 via-slate-300 to-slate-400 bg-clip-text 
                          text-transparent text-[56px] max-[670px]:text-1 max-[450px]:text-2 leading-none`}
                        >
                          Backseasy
                        </h1>

                        <p className="mt-3 text-slate-300">Make the best background for your aplications</p>
                      </div>

                      <div className="flex flex-wrap gap-24">
                        <PrimaryButton text="Explorer" type="primary" link="/all_backgrounds" />
                        <SecondaryButton
                          text="Tutorial"
                          type="secondary"
                          link="/blogs"
                        />
                      </div>
                  </div> 
                </div>
              </div>
                </div>
              </div>
        </div>
    )
}