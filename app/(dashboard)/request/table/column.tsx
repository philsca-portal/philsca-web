"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import RowAction from "./row-action"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Request = {
    reference_number: string
    student_number: string
    name: string
    document_type: string
    status: string
    request_date: string
    estimate_completion: string
}

export const columns: ColumnDef<Request>[] = [
    {
        accessorKey: "student_number",
        header: "Student #",
        cell: ({ row }) => (
            <div className='font-semibold text-base'>
                {row.original.student_number}
            </div>
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className='font-semibold text-base'>
                {row.original.name}
            </div>
        ),
    },
    {
        accessorKey: "document_type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className='font-semibold text-base'>
                {row.original.document_type}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className='flex flex-row items-center gap-1 font-semibold text-base'>
                <div className={`h-2 w-2 ${row.original.status === 'Pending' ? 'bg-yellow-500' : `${row.original.status === 'Completed' ? 'bg-green-500' : `${row.original.status === 'In Progress' ? 'bg-blue-500' : ''}`}`} rounded-full`} />
                {row.original.status}
            </div>
        ),
    },
    {
        accessorKey: "request_date",
        header: "Request Date",
        cell: ({ row }) => (
            <div className='font-semibold text-base'>
                {row.original.request_date}
            </div>
        ),
    },
    {
        accessorKey: "estimate_completion",
        header: "Estimate Completion",
        cell: ({ row }) => (
            <div className='font-semibold text-base'>
                {row.original.estimate_completion}
            </div>
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return (
                <RowAction row={row} />
            )
        },
    },

]
