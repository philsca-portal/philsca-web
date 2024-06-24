"use client";

import MobileMenu from "@/components/mobile-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import useMenuModal from "@/hook/use-menu-modal";
import useMount from "@/hook/use-mount";
import { Menu, Send } from "lucide-react";
import { useTheme } from "next-themes";

const Message = () => {

    const { theme } = useTheme();
    const menuModal = useMenuModal();

    const { isMounted } = useMount();

    const openMenu = () => {
        menuModal.onOpen();
    }

    return (
        <div className="pl-8 pr-8 py-6 lg:pl-0 h-full w-full">
            {menuModal.isOpen && <MobileMenu />}
            <Menu onClick={() => openMenu()} className="absolute right-0 top-4 flex md:hidden hover:scale-110 cursor-pointer transition mr-4" size={30} />
            <div className="flex flex-col gap-4 mt-12 sm:mt-0 h-full w-full">
                <div className="flex flex-row">
                    <div className="flex flex-col gap-2">
                        {
                            !isMounted ?
                                <Skeleton className="h-12 w-56" />
                                :
                                <div className="text-5xl poppins-bold">
                                    Messages
                                </div>
                        }
                        {
                            !isMounted ?
                                <Skeleton className="h-5 w-96" />
                                :
                                <div className="text-sm font-bold text-gray-500 poppins-bold">
                                    Easily manage and view all your messages in one place
                                </div>
                        }
                    </div>
                </div>
                {
                    !isMounted ?
                        <div className="flex flex-row gap-4">
                            <Skeleton className="h-[500px] w-[390px]" />
                            <Skeleton className="h-[500px] w-full" />
                        </div>
                        :
                        <div className="grid grid-cols-12 gap-4 h-full">
                            <div className={`flex flex-col gap-4 col-span-4 ${theme === 'dark' ? 'bg-[#172030]' : 'bg-[#e3f4eb]'} rounded-2xl p-4`}>
                                <div className="text-2xl poppins-semibold">
                                    Chats
                                </div>
                                <ScrollArea className="h-[420px] px-4">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-row items-center w-full hover:bg-gray-300 bg-white cursor-pointer p-4 rounded-2xl gap-2">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <div className={`text-base text-black poppins-semibold`}>
                                                    John Doe
                                                </div>
                                                <div className="flex flex-row gap-1 text-xs poppins-medium text-gray-500">
                                                    Hello! how are you today.
                                                    <div>
                                                        -31m
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center w-full p-4 rounded-2xl gap-2">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <div className="text-base poppins-semibold">
                                                    John Doe
                                                </div>
                                                <div className="flex flex-row gap-1 text-xs poppins-medium text-gray-500">
                                                    Hello! how are you today.
                                                    <div>
                                                        -31m
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center w-full p-4 rounded-2xl gap-2">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <div className="text-base poppins-semibold">
                                                    John Doe
                                                </div>
                                                <div className="flex flex-row gap-1 text-xs poppins-medium text-gray-500">
                                                    Hello! how are you today.
                                                    <div>
                                                        -31m
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center w-full p-4 rounded-2xl gap-2">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <div className="text-base poppins-semibold">
                                                    John Doe
                                                </div>
                                                <div className="flex flex-row gap-1 text-xs poppins-medium text-gray-500">
                                                    Hello! how are you today.
                                                    <div>
                                                        -31m
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center w-full p-4 rounded-2xl gap-2">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <div className="text-base poppins-semibold">
                                                    John Doe
                                                </div>
                                                <div className="flex flex-row gap-1 text-xs poppins-medium text-gray-500">
                                                    Hello! how are you today.
                                                    <div>
                                                        -31m
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center w-full p-4 rounded-2xl gap-2">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <div className="text-base poppins-semibold">
                                                    John Doe
                                                </div>
                                                <div className="flex flex-row gap-1 text-xs poppins-medium text-gray-500">
                                                    Hello! how are you today.
                                                    <div>
                                                        -31m
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollArea>
                            </div>
                            <div className={`flex flex-col gap-4 col-span-8 ${theme === 'dark' ? 'bg-[#172030]' : 'bg-[#e3f4eb]'} rounded-2xl p-4 h-full w-full`}>
                                <div className="flex flex-row items-center px-4 gap-4 h-[15%] bg-white rounded-lg">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <div className={`text-base text-black poppins-semibold`}>
                                            John Doe
                                        </div>
                                        <div className="flex flex-row items-center gap-1 text-xs poppins-medium text-gray-500">
                                            <div className="h-2 w-2 bg-green-500 rounded-full">

                                            </div>
                                            <div>
                                                Active now
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col h-[85%] bg-white rounded-lg p-4 w-full">
                                    <div className="h-[90%]">
                                        <ScrollArea className="flex flex-row gap-2 h-[300px] px-4">
                                            <div className="flex flex-row items-center gap-2 justify-start">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div className={`bg-[#f4f4f4] p-2 rounded-2xl poppins-medium text-sm text-black`}>
                                                    Hello there, how can i help you.
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className={`w-fit p-2 rounded-2xl poppins-medium text-sm bg-[#e3f4eb] text-black`}>
                                                    Good morning ma&apos;am/sir!
                                                </div>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                    <div className="flex flex-row h-[10%] w-full">
                                        <div className="w-[90%]">
                                            <Input placeholder="Type a message here..." />
                                        </div>
                                        <div className="flex justify-center items-center w-[10%]">
                                            <Button className="bg-black">
                                                <Send className="h-6 w-6" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Message;