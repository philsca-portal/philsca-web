"use client";

import { Box, Files, Footprints, HandHelping, Handshake, Home, LayoutDashboard, Mail, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Skeleton } from "../ui/skeleton";

interface MainNavigationProps {
    isMounted: boolean
}

const MainNavigation: React.FC<MainNavigationProps> = ({
    isMounted
}) => {

    const { theme } = useTheme();
    const pathname = usePathname();

    const skeletonArray = [1, 2, 3, 4];

    const routes = [
        {
            href: '/dashboard',
            icon: <LayoutDashboard className="h-6 w-6" />,
            active: pathname === '/dashboard'
        },
        {
            href: '/request',
            icon: <HandHelping className="h-6 w-6" />,
            active: pathname === '/request'
        },
        {
            href: '/message',
            icon: <Mail className="h-6 w-6" />,
            active: pathname === '/message'
        },
        {
            href: '/settings',
            icon: <Settings className="h-6 w-6" />,
            active: pathname === '/settings'
        }
    ];

    return (
        <nav className="mx-6 hidden lg:flex lg:flex-col space-y-6 items-center">
            {
                !isMounted ?
                    <React.Fragment>
                        {
                            skeletonArray.map((_, index) => (
                                <Skeleton key={index} className="h-12 w-12 p-3" />
                            ))
                        }
                    </React.Fragment>
                    :
                    <React.Fragment>
                        {routes.map((route) => (
                            <Link key={route.href} href={route.href}
                                className={`${route.active ? ` ${theme === 'dark' ? ' bg-[#172030]' : 'bg-[#16763a]'} text-white` : ''} flex items-center hover:scale-105 cursor-pointer transition p-3 rounded-xl`}>
                                {route.icon}
                            </Link>
                        ))}
                    </React.Fragment>
            }
        </nav>
    )
}

export default MainNavigation;