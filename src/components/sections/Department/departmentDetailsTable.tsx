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
import ResizableRowDetail from "./resizeableRowDetail";
// import { ClosePayRunDailog } from "./close-payrun-modal";
import NoDataPreivew from "../no-data-preview/NoDataPreivew";
import { AddDeparmentForm } from "./addDepartmentDailog";
import { EditDeparmentForm } from "./editDepartmentDailog";
const data: DepartmentDetails[] = [
  {
    name: "Project Demo 1",
    department: "Aadarsha Lamichhane",
  },
];

// const data: DepartmentDetails[] = [];

//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Paid",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Paid",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Partial",
//   },
//   {
//     employee: "test Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Paid",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Paid",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
//   {
//     employee: "Aadarsha Lamichhane",
//     department: "Backend Development",
//     total: "Rs 5,00,000",
//     status: "Due",
//   },
// ];

export type DepartmentDetails = {
  name: string;
  department: string;
};

export function DepartmentTableDetails() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [selectedResizableRow, setSelectedResizableRow] = React.useState();

  const columns: ColumnDef<DepartmentDetails>[] = [
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("department")}</div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
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
            {/* <Button variant="ghost" className="h-8 w-8 p-0">
              <Eye
                onClick={() => {
                  setSelectedResizableRow(department as any);
                }}
                className="h-5 w-5 cursor-pointer"
              />
            </Button> */}

            <EditDeparmentForm />
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
                  Pay Run (December, 2024)
                </h1>
                <p className="text-gray-500 font-normal text-sm">
                  Track all the PayRuns reports here
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
                  placeholder="Filter Name"
                  type="text"
                  value={
                    (table.getColumn("employee")?.getFilterValue() as string) ??
                    ""
                  }
                  onChange={(e) =>
                    table.getColumn("employee")?.setFilterValue(e.target.value)
                  }
                />

                {/* <Select>
                  <SelectTrigger className="w-[350px] font-medium mr-2">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {data.map((d) => (
                      <SelectItem key={d.status} value={d.status.toString()}>
                        {d.status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select> */}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mr-2 gap-2">
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

                <AddDeparmentForm />
              </div>
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

          {selectedResizableRow && (
            <>
              <ResizableHandle className="ml-4" />
              <ResizablePanel defaultSize={37} minSize={37} maxSize={37}>
                <ResizableRowDetail
                  selectedRow={selectedResizableRow}
                  setSelectedRow={setSelectedResizableRow}
                />
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
