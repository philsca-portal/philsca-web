"use client"

import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table";
import { Minus, MoreHorizontal, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTheme } from "next-themes";
import { Request } from "./column";

interface RowActionProps {
    row: Row<Request>
}


const formSchema = z.object({
    reference_number: z.string().min(1, "Reference number is required"),
    student_number: z.string().min(1, "Student number is required"),
    name: z.string().min(1, "Name is required"),
    document_type: z.string().min(1, "Document type is required"),
    status: z.string().min(1, "Status is required"),
    request_date: z.string().min(1, "Request date is required").regex(/^\d{4}-\d{2}-\d{2}$/, "Request date must be in YYYY-MM-DD format"),
    estimate_completion: z.string().min(1, "Estimated completion date is required").regex(/^\d{4}-\d{2}-\d{2}$/, "Estimated completion date must be in YYYY-MM-DD format")
});

const RowAction: React.FC<RowActionProps> = ({
    row
}) => {

    const { theme } = useTheme();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            reference_number: row.original.reference_number,
            student_number: row.original.student_number,
            name: row.original.name,
            document_type: row.original.document_type,
            status: row.original.status,
            request_date: row.original.request_date,
            estimate_completion: row.original.estimate_completion
        },
    });

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    }

    const handleOnOpenChange = (open: boolean) => {
        if (!open) {
            setOpen(false);
        }
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            const id = row.original.reference_number;
            const response = await axios.post('/api/editInventory', {
                values,
                id
            });

            if (response.data.status === 200) {
                toast.success("Data changed.");
            }
        } catch (error) {
            console.log(error);
            toast.error('Someting went wrong.');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }


    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit flex flex-col gap-1">
                <div className="text-sm font-bold">
                    Action
                </div>
                <Separator />
                <Dialog open={open} onOpenChange={handleOnOpenChange}>
                    <DialogTrigger onClick={onOpen} asChild>
                        <Button variant={"ghost"} size={"sm"} className="text-xs cursor-pointer">
                            Edit
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-fit">
                        <DialogTitle>Update Inventory</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently change your data from the server.
                        </DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Status</FormLabel>
                                            <FormControl>
                                                <Select value={field.value} defaultValue={field.value} onValueChange={field.onChange}>
                                                    <SelectTrigger>
                                                        <SelectValue defaultValue={field.value} placeholder="Select a status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Available">Available</SelectItem>
                                                        <SelectItem value="Low Stock">Low Stock</SelectItem>
                                                        <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="estimate_completion"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Estimate Completion</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Location" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button disabled={loading} className="w-full" type="submit">
                                    {
                                        loading ? (
                                            <div className={`h-6 w-6 rounded-full border-2 border-solid ${theme === 'dark' ? 'border-black' : 'border-white'} border-e-transparent animate-spin`} />
                                        ) :
                                            'Save'
                                    }
                                </Button>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </PopoverContent>
        </Popover>
    )
}

export default RowAction;