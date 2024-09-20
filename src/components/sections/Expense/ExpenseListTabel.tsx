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

import NoDataPreivew from "../no-data-preview/NoDataPreivew";
import ExpenseResizableRowDetail from "./ExpenseResizableRowDetail";
import SalaryResizableRowDetail from "./SalaryResizableRowDetail";
// const data: ExpenseDetails[] = [];
const data: ExpenseDetails[] = [
  {
    particulars: "Aadarsha Lamichhane",
    amount: "12,000",
    type: "Salary",
    createdAt: "21 July, 2024",
    status: "Reconciled",
    attachments: 1,
    action: "view",
  },
  {
    particulars: "Expense Description",
    amount: "12,000",
    type: "Expense",
    createdAt: "21 July, 2024",
    status: "Pending",
    attachments: 1,
    action: "view",
  },
  {
    particulars: "Invoice Description",
    amount: "12,000",
    type: "Expense",
    createdAt: "21 July, 2024",
    status: "Reconciled",
    attachments: 1,
    action: "view",
  },
  {
    particulars: "Aadarsha Lamichhane",
    amount: "12,000",
    type: "Salary",
    createdAt: "21 July, 2024",
    status: "Pending",
    attachments: 1,
    action: "view",
  },
  {
    particulars: "Aadarsha Lamichhane",
    amount: "12,000",
    type: "Salary",
    createdAt: "21 July, 2024",
    status: "Reconciled",
    attachments: 1,
    action: "view",
  },
  {
    particulars: "Aadarsha Lamichhane",
    amount: "12,000",
    type: "Salary",
    createdAt: "21 July, 2024",
    status: "Reconciled",
    attachments: 1,
    action: "view",
  },
  {
    particulars: "Aadarsha Lamichhane",
    amount: "12,000",
    type: "Salary",
    createdAt: "21 July, 2024",
    status: "Pending",
    attachments: 1,
    action: "view",
  },
  {
    particulars: "Aadarsha Lamichhane",
    amount: "12,000",
    type: "Salary",
    createdAt: "21 July, 2024",
    status: "Reconciled",
    attachments: 1,
    action: "view",
  },
  {
    particulars: "Aadarsha Lamichhane",
    amount: "12,000",
    type: "Salary",
    createdAt: "21 July, 2024",
    status: "Reconciled",
    attachments: 1,
    action: "view",
  },
  {
    particulars: "Aadarsha Lamichhane",
    amount: "12,000",
    type: "Salary",
    createdAt: "21 July, 2024",
    status: "Reconciled",
    attachments: 1,
    action: "view",
  },
];

export type ExpenseDetails = {
  particulars: string;
  amount: string;
  type: string;
  createdAt: string;
  status: string;
  attachments: number;
  action: string;
};

export function ExpenseListTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [selectedResizableRow, setSelectedResizableRow] =
    React.useState<ExpenseDetails>();

  const columns: ColumnDef<ExpenseDetails>[] = [
    {
      accessorKey: "particulars",
      header: "Particulars",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("particulars")}</div>
      ),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("amount")}</div>
      ),
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => (
        <div className="capitalize bg-gray-100 flex justify-center items-center text-green-700 rounded-2xl h-8 w-24">
          {row.getValue("type")}
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("createdAt")}</div>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) =>
        row.getValue("status") === "Reconciled" ? (
          <div className="bg-green-100 flex justify-center items-center text-green-700 rounded-2xl h-8 w-24">
            Reconciled
          </div>
        ) : (
          <div className="bg-red-100 flex justify-center items-center text-red-700 rounded-2xl h-8 w-24">
            Pending
          </div>
        ),
    },
    {
      accessorKey: "attachments",
      header: "Attachments",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("attachments")}</div>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <div className="flex gap-2 items-center">
            <Eye
              onClick={() => {
                setSelectedResizableRow(payment as any);
              }}
              className="h-5 w-5 cursor-pointer"
            />
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
                  Expense
                </h1>
                <p className="text-gray-500 font-normal text-sm">
                  Track all the expense reports here
                </p>
              </div>
              <div className="flex flex-col ml-auto">
                {/* <ClosePayRunDailog /> */}
              </div>
            </div>
            <Table className="">
              <div className="flex items-center mb-6 pt-2">
                <Input
                  className="rounded mr-2"
                  placeholder="Search Expense"
                  type="text"
                  value={
                    (table
                      .getColumn("particulars")
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(e) =>
                    table
                      .getColumn("particulars")
                      ?.setFilterValue(e.target.value)
                  }
                />
                <Select>
                  <SelectTrigger className="w-[350px] font-medium mr-2">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {data.map((d) => (
                      <SelectItem key={d.status} value={d.status.toString()}>
                        {d.status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[350px] font-medium mr-2">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {data.map((d) => (
                      <SelectItem key={d.status} value={d.status.toString()}>
                        {d.status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mr-2">
                      View <Settings2 className="mr-2 h-4 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {table
                      .getAllColumns()
                      .filter((column) => column.getCanHide())
                      .map((column) => {
                        return (
                          <DropdownMenuCheckboxItem
                            key={column.id}
                            className="capitalize"
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) =>
                              column.toggleVisibility(!!value)
                            }
                          >
                            {column.id}
                          </DropdownMenuCheckboxItem>
                        );
                      })}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button className="bg-blue-600 ml-auto">
                  <Plus className="mr-2" size={20} strokeWidth={2} />
                  Add Expense
                </Button>
              </div>
              <ScrollArea className="h-[calc(100vh-390px)]">
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
            {/* <hr /> */}
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

          {selectedResizableRow && (
            <>
              {console.log({ selectedResizableRow })}
              <ResizableHandle className="ml-4" />
              <ResizablePanel defaultSize={37} minSize={37} maxSize={37}>
                {selectedResizableRow.type === "Salary" ? (
                  <SalaryResizableRowDetail
                    selectedRow={selectedResizableRow}
                    setSelectedRow={setSelectedResizableRow}
                  />
                ) : (
                  <ExpenseResizableRowDetail
                    selectedRow={selectedResizableRow}
                    setSelectedRow={setSelectedResizableRow}
                  />
                )}
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
