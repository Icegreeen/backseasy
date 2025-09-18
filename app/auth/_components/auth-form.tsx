'use client'
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image";
import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/react';
import { toast } from "@/components/ui/use-toast";

export default function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit( async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false });

      toast({
        title: 'Check your email',
        description: 'A magic link has been sent to your email. Click on the link to login.'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send magic link. Please try again later.',
      })
    }
  })

  return (
    <main className="my-18 h-full">
      <div className=" max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip" id="streams">
      <form onSubmit={handleSubmit} className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-12">
          <div className="grid gap-2 text-center">
            <h2 className="text-2 font-medium text-center">Login</h2>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-12">
            <div className="grid gap-12">
              <Label htmlFor="email">Email</Label>
              <input
                className="sm:p-8 py-3 px-4 border-solid border-1 border-gray-500 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                id="email"
                type="email"
                placeholder="Email@example.com"
                required

                {...form.register('email')}
              />
            </div>
            <div className="grid">
              <button 
                type="submit" 
                className="sm:p-8 py-3 px-4 bg-purple ">

                Login
              </button>                                    
            </div>

            <div className="grid">
              <button 
                type="submit" 
                className="sm:p-8 py-3 px-4 border-solid border-1 border-gray-500 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-12" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Continue with Github
              </button>                                    
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Upgrade Now
            </Link>
          </div>
        </div>
      </form>

      <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[1280px]:gap-24 h-fit items-start">
        <h2 className="text-2 font-medium">Backseasy | Collection resource</h2>

        <p className="text-purple">Gold Subscription⭐</p>

        <h2 className="text-1 font-medium text-right">$ 11 / <span className="text-2 font-medium text-[#949494] text-right">$19</span></h2>

        <p className="text-body leading-[120%]">
          - Access to all platform features.
        </p>

        <p className="text-body  leading-[120%]">
        - The vods, and clips are uploaded to YouTube. 
        </p>

        <p className="text-body  leading-[120%]">
        - Dedicated technical support.
        </p>

        <div className="flex flex-wrap gap-12">
          <Link
            href={""}
            className="bg-purple/75 border-stroke-2 text-white hover:bg-purple active:bg-purple/50 disabled:bg-purple/25
      text-body border w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in
      hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30"
          >
            Upgrade Now
            <img className="h-18" src="/star.png" alt="star" />
          </Link>
          
          {/*
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
          */}

        </div>
      </div>
      </div>
    </main>
  )
}



