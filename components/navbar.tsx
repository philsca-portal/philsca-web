"use client";

import Image from "next/image";
import philscaIcon from "@/public/assets/images/philsca_icon.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LayoutDashboard, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import useMount from "@/hook/use-mount";
import { useEffect } from "react";
import useMenuModal from "@/hook/use-menu-modal";
import MainNavigation from "./navigation/main-navigation";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

const Navbar = () => {

    const { theme } = useTheme();
    const { isMounted, setIsMounted } = useMount();

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 2000);
    }, []);

    return (
        <>
            <div className="lg:flex lg:flex-col justify-between items-center h-full py-4 w-2/3 border-r-2 border-slate-200">
                {
                    !isMounted ?
                        <Skeleton className="h-14 w-14" />
                        :
                        <Link href={'/dashboard'} className=" hover:scale-105 transition">
                            <div className="h-14 w-14">
                                <Image className="w-full h-full object-contain" src={philscaIcon} alt={`icon`} priority />
                            </div>
                        </Link>
                }
                <MainNavigation isMounted={isMounted} />
                {
                    !isMounted ?
                        <Skeleton className="h-10 w-10 rounded-full" />
                        :
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                }
            </div>
        </>
    )
}

export default Navbar;