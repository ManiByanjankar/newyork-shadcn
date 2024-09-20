"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowLeftRight,
  CircleChevronUp,
  CircleEllipsis,
  Coins,
  FolderDot,
  HandCoins,
  Home,
  LayoutDashboard,
  LineChart,
  Package,
  Package2,
  Settings,
  Shapes,
  ShoppingCart,
  Users,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SideNavbar = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LayoutDashboard size={20} strokeWidth={1.5} />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3D3D5A]  transition-colors hover:text-foreground md:h-10 md:w-10"
              >
                <HandCoins size={20} strokeWidth={2} color="#fff" />
                <span className="sr-only">Payrun</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Payrun</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Coins size={20} strokeWidth={1.5} />
                <span className="sr-only">Expense</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Expense</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <ArrowLeftRight size={20} strokeWidth={1.5} />
                <span className="sr-only">Transactions</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Transactions</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users size={20} strokeWidth={1.5} />
                <span className="sr-only">Users</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Users</TooltipContent>
          </Tooltip>
          <Tooltip>
            {!showMoreMenu ? (
              <>
                <TooltipTrigger onClick={() => setShowMoreMenu(true)}>
                  <CircleEllipsis className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                  <span className="sr-only">More</span>
                </TooltipTrigger>
                <TooltipContent side="right">More</TooltipContent>
              </>
            ) : null}
          </Tooltip>
          {showMoreMenu && (
            <nav className="flex flex-col items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <FolderDot className="h-5 w-5" />
                    <span className="sr-only">Project</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Project</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Shapes size={20} strokeWidth={2} />
                    <span className="sr-only">Department</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Department</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger onClick={() => setShowMoreMenu(false)}>
                  <CircleChevronUp size={20} strokeWidth={1.5} />
                  <span className="sr-only">Collapse</span>
                </TooltipTrigger>
                <TooltipContent side="right">Collapse</TooltipContent>
              </Tooltip>
            </nav>
          )}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </>
  );
};

export default SideNavbar;
