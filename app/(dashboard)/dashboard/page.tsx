"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BadgePercent, Bell, ChevronRight, ListChecks, Menu, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { DataTable } from "./table/data.table";
import { Request, columns } from "./table/column";
import { Progress } from "@/components/ui/progress";
import useMenuModal from "@/hook/use-menu-modal";
import MobileMenu from "@/components/mobile-menu";
import { useRouter } from "next/navigation";
import useMount from "@/hook/use-mount";
import { Skeleton } from "@/components/ui/skeleton";

type CustomTooltipProps = {
    active?: boolean;
    payload?: Array<{ value: number }>; // Adjust this type according to your data structure
    label?: string | number;
};

const Dashboard = () => {

    const { theme } = useTheme();
    const router = useRouter();
    const menuModal = useMenuModal();

    const openMenu = () => {
        menuModal.onOpen();
    }

    const { isMounted } = useMount();

    const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 rounded-lg border-2 border-gray-200">
                    <p className="poppins-bold text-sm">{`${label} : ${payload[0].value} request/s`}</p>
                    {/* You can customize the tooltip content and style here */}
                </div>
            );
        }

        return null;
    };

    const data = [
        { name: 'Jan', request: 40 },
        { name: 'Feb', request: 30 },
        { name: 'Mar', request: 20 },
        { name: 'Apr', request: 27 },
        { name: 'May', request: 18 },
        { name: 'Jun', request: 23 },
        { name: 'Jul', request: 34 },
        { name: 'Aug', request: 44 },
        { name: 'Sep', request: 29 },
        { name: 'Oct', request: 22 },
        { name: 'Nov', request: 17 },
        { name: 'Dec', request: 15 },
    ];

    const requestData: Request[] = [
        {
            "reference_number": "REF2024-001",
            "student_number": "S12345",
            "name": "John Doe",
            "document_type": "Transcript",
            "status": "Pending",
            "request_date": "2024-06-23",
            "estimate_completion": "2024-06-30"
        },
        {
            "reference_number": "REF2024-002",
            "student_number": "S67890",
            "name": "Jane Smith",
            "document_type": "Diploma",
            "status": "Completed",
            "request_date": "2024-06-20",
            "estimate_completion": "2024-06-25"
        },
        {
            "reference_number": "REF2024-003",
            "student_number": "S54321",
            "name": "Michael Johnson",
            "document_type": "Certificate",
            "status": "In Progress",
            "request_date": "2024-06-18",
            "estimate_completion": "2024-06-28"
        }
    ];


    return (
        <div className="flex flex-col md:grid md:grid-cols-12 h-full">
            {menuModal.isOpen && <MobileMenu />}
            <Menu onClick={() => openMenu()} className="absolute right-0 top-4 flex md:hidden hover:scale-110 cursor-pointer transition mr-4" size={30} />
            <div className="flex flex-col gap-8 col-span-9 pl-8 mt-12 sm:mt-0 lg:pl-0 py-6 pr-8 sm:border-r-2 sm:border-slate-200">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-2">
                        {
                            !isMounted ?
                                <Skeleton className="h-12 w-60" />
                                :
                                <div className="text-5xl poppins-bold">
                                    Dashboard
                                </div>
                        }
                        {
                            !isMounted ?
                                <Skeleton className="h-5 w-48" />
                                :
                                <div className="flex flex-row  gap-1">
                                    <div className="text-sm font-bold text-gray-500 poppins-bold">
                                        Today's Total Requests:
                                    </div>
                                    <div className="text-sm poppins-extrabold">
                                        12
                                    </div>
                                </div>
                        }
                    </div>
                    {
                        !isMounted ?
                            <Skeleton className="h-6 w-6" />
                            :
                            <Bell className="h-6 w-6" />
                    }
                </div>
                {
                    !isMounted ?
                        <Skeleton className="h-56 w-full" />
                        :
                        <div className="relative flex flex-col">
                            <div className="flex flex-row justify-between">
                                <div className="text-xl poppins-extrabold">
                                    Requests
                                </div>
                                <Select>
                                    <SelectTrigger className="w-32">
                                        <SelectValue placeholder="📆 Jan-Aug" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <ResponsiveContainer className={'absolute -left-6 top-12'} width="100%" height={180}>
                                <BarChart data={data}>
                                    <defs>
                                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#F68A4C" />
                                            <stop offset="100%" stopColor="#ED7556" />
                                        </linearGradient>
                                    </defs>
                                    <XAxis fontWeight={500} fontSize={12} stroke={theme === 'dark' ? '#fafbfc' : '#000000'} tick={{ fill: '#6B7280' }} tickLine={false} axisLine={false} dataKey="name" />
                                    <YAxis fontWeight={500} fontSize={12} stroke="#6B7280" tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                                    <Bar cursor={'pointer'} barSize={20} radius={[4, 4, 4, 4]} dataKey="request" stackId="a" fill="url(#colorGradient)" label={{
                                        position: 'top',
                                        formatter: (value: number) => (value === 0 ? '' : ''),
                                        style: {
                                            fontWeight: 'bolder',
                                            fontSize: 12,
                                            fill: '#6B7280',
                                            transform: 'translateY(-5px)'
                                        }
                                    }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                }
                {
                    !isMounted ?
                        <Skeleton className="h-56 w-full" />
                        :
                        <div className="relative flex flex-col mt-40">
                            <div className="flex flex-row justify-between">
                                <div className="text-xl poppins-extrabold">
                                    Latest Requests List
                                </div>
                            </div>
                            <div className="mt-2">
                                <DataTable columns={columns} data={requestData} />
                            </div>
                        </div>
                }
            </div>
            <div className="flex flex-col gap-4 py-6 px-4 col-span-3">
                {
                    !isMounted ?
                        <>
                            <Skeleton className="h-[185px] w-full" />
                            <Skeleton className="h-[185px] w-full" />
                            <Skeleton className="h-[185px] w-full" />
                        </>
                        :
                        <><div className={`flex justify-center item-center ${theme === 'dark' ? 'bg-[#172030]' : 'bg-[#e3f4eb]'} p-4 rounded-lg`}>
                            <div className="flex flex-col space-y-4 w-full">
                                <div className="flex flex-row items-center justify-between">
                                    <div className={`text-lg poppins-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        Request
                                    </div>
                                    <div onClick={() => router.push('/request')} className="flex flex-row items-center text-xs poppins-extrabold text-gray-500 cursor-pointer hover:scale-105">
                                        See All
                                        <ChevronRight className="h-3 w-3" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-white w-full rounded-lg p-4">
                                    <div className="flex flex-row item-center justify-between w-full">
                                        <div className="flex flex-col">
                                            <div className="poppins-extrabold text-2xl text-black">
                                                42
                                            </div>
                                            <div className="poppins-semibold text-xs text-gray-500">
                                                The number of requests
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <ListChecks className="h-8 w-8 text-white bg-black rounded-full p-1" />
                                        </div>
                                    </div>
                                    <div>
                                        <Progress className="h-3 [&>*]:bg-[#16763a]" value={33} />
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className={`flex justify-center item-center ${theme === 'dark' ? 'bg-[#172030]' : 'bg-[#e3f4eb]'} p-4 rounded-lg`}>
                                <div className="flex flex-col space-y-4 w-full">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className={`text-lg poppins-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            Request Rate
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 bg-white w-full rounded-lg p-4">
                                        <div className="flex flex-row item-center justify-between w-full">
                                            <div className="flex flex-col">
                                                <div className="poppins-extrabold text-2xl text-black">
                                                    100%
                                                </div>
                                                <div className="poppins-semibold text-xs text-gray-500">
                                                    Percentage of requests
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <BadgePercent className="h-8 w-8 text-white bg-black rounded-full p-1" />
                                            </div>
                                        </div>
                                        <div>
                                            <Progress className="h-3 [&>*]:bg-[#16763a]" value={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex justify-center item-center ${theme === 'dark' ? 'bg-[#172030]' : 'bg-[#e3f4eb]'} p-4 rounded-lg`}>
                                <div className="flex flex-col space-y-4 w-full">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className={`text-lg poppins-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            Efficiency
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 bg-white w-full rounded-lg p-4">
                                        <div className="flex flex-row item-center justify-between w-full">
                                            <div className="flex flex-col">
                                                <div className="poppins-extrabold text-2xl text-black">
                                                    100%
                                                </div>
                                                <div className="poppins-semibold text-xs text-gray-500">
                                                    % of completed requests
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Sparkles className="h-8 w-8 text-white bg-black rounded-full p-1" />
                                            </div>
                                        </div>
                                        <div>
                                            <Progress className="h-3 [&>*]:bg-[#16763a]" value={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Dashboard;