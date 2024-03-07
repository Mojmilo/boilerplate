'use client';

import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuPortal,
  DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar} from "@/components/ui/avatar";
import Image from "next/image";
import {logout} from "@/actions/auth";
import {CreditCardIcon, DribbbleIcon, UserIcon, Settings02Icon, Logout01Icon, UserAdd01Icon, Mail01Icon} from "hugeicons-react";
import {useSession} from "next-auth/react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const { data } = useSession();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed flex justify-between items-center w-full px-10 ${isScrolled ? 'h-14' : 'h-20'} duration-300 transition-all backdrop-blur-sm bg-background/80`}>
      <Link href={'/dashboard'}>
        <div className="flex flex-row justify-center items-center gap-2">
          <DribbbleIcon/>
          <span className={'font-semibold'}>Boilerplate</span>
        </div>
      </Link>
      <div className="flex flex-row justify-center items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className={'cursor-pointer'}>
              <Image
                src={data?.user?.image ? data?.user?.image : `https://api.dicebear.com/7.x/adventurer/svg?seed=${data?.user?.id}`}
                alt={data?.user?.email ? data?.user?.email : 'Unknown'} width={100} height={100}/>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={'end'} className="w-56">
            <DropdownMenuLabel className={'truncate'}>{data?.user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuGroup>
              <DropdownMenuItem disabled>
                <UserIcon className="mr-2 h-4 w-4"/>
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <CreditCardIcon className="mr-2 h-4 w-4"/>
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Settings02Icon className="mr-2 h-4 w-4"/>
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserAdd01Icon className="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem disabled>
                      <Mail01Icon className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator/>
            <DropdownMenuGroup>
              <Link href={'/dashboard/stripe/checkout'}>
                <DropdownMenuItem>
                  <CreditCardIcon className="mr-2 h-4 w-4"/>
                  <span>Checkout</span>
                  <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <Logout01Icon className="mr-2 h-4 w-4"/>
              <span onClick={async () => {
                await logout();
              }}>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar;