'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Paintbrush } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export default function PickerExample() {
  const [background, setBackground] = useState('url(https://github.com/Icegreeen/backseasy/assets/56550632/a1b71648-6f93-4a19-a46e-e7c71a8e3e1d)')

  return (
    <div
      className="preview flex h-full min-h-[350px] w-full items-center justify-center rounded-24 rounded !bg-cover !bg-center p-10 transition-all"
      style={{ background }}
    >
      <GradientPicker background={background} setBackground={setBackground} />
    </div>
  )
}

export function GradientPicker({
  background,
  setBackground,
  className,
}: {
  background: string
  setBackground: (background: string) => void
  className?: string
}) {
  const solids = [
    '#E2E2E2',
    '#ff75c3',
    '#ffa647',
    '#ffe83f',
    '#9fff5b',
    '#70e2ff',
    '#cd93ff',
    '#09203f',
  ]

  const gradients = [
    'linear-gradient(to bottom right,#accbee,#e7f0fd)',
    'linear-gradient(to bottom right,#d5d4d0,#d5d4d0,#eeeeec)',
    'linear-gradient(to bottom right,#000000,#434343)',
    'linear-gradient(to bottom right,#09203f,#537895)',
    'linear-gradient(to bottom right,#AC32E4,#7918F2,#4801FF)',
    'linear-gradient(to bottom right,#f953c6,#b91d73)',
    'linear-gradient(to bottom right,#ee0979,#ff6a00)',
    'linear-gradient(to bottom right,#00c6ff,#0072ff)',
    'linear-gradient(to bottom right,#4facfe,#00f2fe)',
    'linear-gradient(to bottom right,#0ba360,#3cba92)',
    'linear-gradient(to bottom right,#8a2be2,#0000cd,#228b22,#ccff00)',
    'linear-gradient(to bottom right,#40E0D0,#FF8C00,#FF0080)',
    'linear-gradient(to bottom right,#fcc5e4,#fda34b,#ff7882,#c8699e,#7046aa,#0c1db8,#020f75)',
    'linear-gradient(to bottom right,#ff75c3,#ffa647,#ffe83f,#9fff5b,#70e2ff,#cd93ff)',
  ]

  const images = [
    'url(https://github.com/Icegreeen/backseasy/assets/56550632/14d59415-97b3-42aa-8c42-188cd0c8a37b)',
    'url(https://github.com/Icegreeen/backseasy/assets/56550632/25619a25-c6aa-4603-acea-f5b30c6e917a)',
    'url(https://github.com/Icegreeen/backseasy/assets/56550632/a1b71648-6f93-4a19-a46e-e7c71a8e3e1d)',
    'url(https://github.com/Icegreeen/backseasy/assets/56550632/4908cbb2-6f2a-4723-b2b7-b638e1aa1108)',
    'url(https://github.com/Icegreeen/backseasy/assets/56550632/5e38e791-6cb9-4409-b8c7-2aa869ba7c5c)',
  ]

  const defaultTab = useMemo(() => {
    if (background.includes('url')) return 'image'
    if (background.includes('gradient')) return 'gradient'
    return 'solid'
  }, [background])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[320px] justify-start text-left font-normal rounded-24 hover:scale-110 hover:opacity-75 transition transform duration-300',
            !background && 'text-muted-foreground',
            className
          )}
        >
          <div className="flex w-full items-center gap-2 ">
            {background ? (
              <div
                className="h-4 w-4 rounded  !bg-cover !bg-center transition-all "
                style={{ background }}
              ></div>
            ) : (
              <Paintbrush className="h-4 w-4" />
            )}
            <div className="flex-1  py-8 truncate">

              {background ? background : 'Pick a color'}
            </div>
          </div>
        </Button>
      </PopoverTrigger>

    <PopoverContent className="w-80 p-12 rounded-24">
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="mb-4 gap-8 w-full">
            <TabsTrigger className="flex-1" value="solid">
              Solid
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="gradient">
              Gradient
            </TabsTrigger>
            <TabsTrigger className="flex-1 rounded-[15px] py-4" value="image">
              Image
            </TabsTrigger>
          </TabsList>

          <TabsContent value="solid" className="p-2 flex flex-wrap gap-4">
            {solids.map((s) => (
              <div
                key={s}
                style={{ background: s }}
                className="h-56 w-56 cursor-pointer rounded-full  active:scale-105"
                onClick={() => setBackground(s)}
              />
            ))}
          </TabsContent>

          <TabsContent value="gradient" className="mt-8">
            <div className="mb-2 flex flex-wrap gap-4">
              {gradients.map((s) => (
                <div
                  key={s}
                  style={{ background: s }}
                  className="h-56 w-56 cursor-pointer rounded-lg active:scale-105"
                  onClick={() => setBackground(s)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="image" className="mt-8">
            <div className="mb-2 flex flex-wrap gap-4">
              {images.map((s) => (
                <div
                  key={s}
                  style={{ backgroundImage: s }}
                  className="h-56 w-56 cursor-pointer bg-cover rounded-lg bg-center active:scale-105"
                  onClick={() => setBackground(s)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <Input
          id="custom"
          value={background}
          className="col-span-2 rounded-24 mt-8 h-20 bg-transparent"
          onChange={(e) => setBackground(e.currentTarget.value)}
        />
        
    </PopoverContent>

    </Popover>
  )
}

const GradientButton = ({
  background,
  children,
}: {
  background: string
  children: React.ReactNode
}) => {
  return (
    <div
      className="relative rounded-md !bg-cover !bg-center p-0.5 transition-all"
      style={{ background }}
    >
      <div className="rounded-md bg-popover/80 p-1 text-center text-xs">
        {children}
      </div>
    </div>
  )
}