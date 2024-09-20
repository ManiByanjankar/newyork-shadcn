"use client";

import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  ChevronDown,
  Eye,
  HandCoins,
  Pencil,
  Plus,
  Search,
  Settings2,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
// import { ClosePayRunDailog } from "./close-payrun-modal";
import NoDataPreivew from "../no-data-preview/NoDataPreivew";

const data: UserHistoryDetails[] = [
  {
    date: "12-12-2024",
    payrun: "25000",
    department: "IT",
    status: "paid",
  },
  {
    date: "12-12-2024",
    payrun: "25000",
    department: "IT",
    status: "paid",
  },
  {
    date: "12-12-2024",
    payrun: "25000",
    department: "IT",
    status: "paid",
  },
  {
    date: "12-12-2024",
    payrun: "25000",
    department: "IT",
    status: "paid",
  },
  {
    date: "12-12-2024",
    payrun: "25000",
    department: "IT",
    status: "paid",
  },
  {
    date: "12-12-2024",
    payrun: "25000",
    department: "IT",
    status: "paid",
  },
  {
    date: "12-12-2024",
    payrun: "25000",
    department: "IT",
    status: "paid",
  },
  {
    date: "12-12-2024",
    payrun: "25000",
    department: "IT",
    status: "paid",
  },
  {
    date: "12-12-2024",
    payrun: "25000",
    department: "IT",
    status: "paid",
  },
];

export type UserHistoryDetails = {
  date: string;
  payrun: string;
  department: string;
  status: string;
};

export function UsersHistoryTableDetails() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<UserHistoryDetails>[] = [
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("date")}</div>
      ),
    },
    {
      accessorKey: "payrun",
      header: "Payrun",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("payrun")}</div>
      ),
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("department")}</div>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) =>
        row.getValue("status") === "paid" && (
          <div className="bg-green-100 flex justify-center items-center text-black-700 rounded-2xl h-8 w-20">
            Paid
          </div>
        ),
    },

    {
      id: "actions",
      header: () => <div className="text-center">Actions</div>,
      enableHiding: false,
      cell: ({ row }) => {
        const department = row.original;

        return (
          <div className="items-center text-center">
            <Button variant="ghost" className="p-0">
              <Eye size={20} strokeWidth={1.5} color="#3D3D5A" />
            </Button>
          </div>
        );
      },
    },
  ];
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel className="p-4">
            <div className="flex items-center gap-1 my-3">
              <div className="flex flex-col gap-1 my-3">
                <h1 className="text-2xl font-semibold text-gray-900">
                  PayRun History: Aadarsha Lamichhane
                </h1>
                <p className="text-gray-500 font-normal text-sm">
                  Here is the history of user’s payrun
                </p>
              </div>
              <div className="flex flex-col ml-auto"></div>
            </div>
            <Table className="">
              <ScrollArea className="h-[calc(100vh-380px)]">
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead
                            className="text-sm text-black-900"
                            key={header.id}
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        className="text-sm text-black-500"
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-[calc(100vh-380px)] text-center"
                      >
                        <NoDataPreivew />
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </ScrollArea>
            </Table>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
