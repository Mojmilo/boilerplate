'use client';

import {Button} from "@/components/ui/button";
import {ChevronRight, HomeIcon, MenuIcon} from "lucide-react";
import {useState} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex h-screen flex-col items-center justify-between bg-primary/5">
      <div className="fixed top-0 left-0 h-full p-2">
        <div
          className={`relative ${open ? 'w-[200px]' : 'w-[60px]'} duration-300 transition-all flex flex-col justify-between gap-20 h-full bg-background p-2 rounded-xl`}>
          <Button variant={'ghost'} size={'icon'}
                  className={'relative bg-transparent hover:bg-transparent w-full h-11 rounded-xl'}
                  onClick={() => setOpen(!open)}>
            <MenuIcon className={'absolute left-3 w-5 h-5'}/>
            <span
              className={`absolute left-10 ${open ? 'opacity-100' : 'opacity-0'} duration-300 transition-all`}>Text</span>
          </Button>

          <div className="h-full">
            <div className="flex flex-col items-center justify-between gap-4">
              <Button variant={'ghost'} size={'icon'}
                      className={'relative bg-primary/5 hover:bg-primary/10 w-full h-11 rounded-xl group'}>
                <HomeIcon className={'absolute left-3 w-5 h-5'}/>
                <span
                  className={`absolute left-10 ${open ? 'opacity-100' : 'opacity-0'} duration-300 transition-all`}>Text</span>

                <div className="absolute top-0 left-full translate-x-2 h-60 w-60 bg-red-500 rounded-xl opacity-0 group-hover:opacity-100 duration-300 transition-all"></div>
              </Button>
              <Button variant={'ghost'} size={'icon'}
                      className={'relative bg-primary/5 hover:bg-primary/10 w-full h-11 rounded-xl'}>
                <HomeIcon className={'absolute left-3 w-5 h-5'}/>
                <span
                  className={`absolute left-10 ${open ? 'opacity-100' : 'opacity-0'} duration-300 transition-all`}>Text</span>
              </Button>
              <Button variant={'ghost'} size={'icon'}
                      className={'relative bg-primary/5 hover:bg-primary/10 w-full h-11 rounded-xl'}>
                <HomeIcon className={'absolute left-3 w-5 h-5'}/>
                <span
                  className={`absolute left-10 ${open ? 'opacity-100' : 'opacity-0'} duration-300 transition-all`}>Text</span>
              </Button>
            </div>
          </div>

          <Button variant={'ghost'} size={'icon'}
                  className={'relative bg-transparent hover:bg-transparent w-full h-11 rounded-xl'}>
            <Avatar className={'absolute left-0'}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span
              className={`absolute left-12 ${open ? 'opacity-100' : 'opacity-0'} duration-300 transition-all`}>Text</span>
          </Button>

          {/*<Button variant={'ghost'} size={'icon'}
                  className={'absolute top-20 right-0 translate-x-1/2 bg-background rounded-full border-2 border-primary/5 w-8 h-8'}
                  onClick={() => setOpen(!open)}>
            <ChevronRight className={`absolute w-5 h-5 ${open && 'rotate-180'} duration-500 transition-all`}/>
          </Button>*/}
        </div>
      </div>
    </main>
  );
}
