import { Bell, ChevronDown, Menu, Settings2, UserRound, LogOut, CheckCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Topbar({ title, onToggleSidebar, onNavigate, onLogout }) {
  return (
    <header className="sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-[#eae5dc] bg-white/95 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <Button variant="ghost" size="icon" className="-ml-2 size-9 text-[#71695d]" onClick={onToggleSidebar} aria-label="Toggle navigation"><Menu /></Button>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#363229]">{title}</p>
          <p className="hidden text-[11px] text-[#999184] sm:block">University of Sindh <span className="px-1.5 text-[#c6bbaa]">/</span> Student portal</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative size-9 text-[#766d60]" aria-label="Notifications">
              <Bell className="size-[18px]" />
              <span className="absolute right-[7px] top-[6px] size-1.5 rounded-full border border-white bg-[#a8875b]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[290px]">
            <DropdownMenuLabel className="flex items-center justify-between">Notifications <span className="rounded-full bg-[#f1e9dc] px-2 py-0.5 text-[10px] text-[#806746]">2 new</span></DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="space-y-1 p-1">
              <div className="rounded-lg bg-[#faf7f1] p-3">
                <p className="text-xs font-semibold text-[#494236]">Examination notice updated</p>
                <p className="mt-1 text-[11px] leading-5 text-[#898174]">Check the department notice board for the latest schedule.</p>
                <p className="mt-1.5 text-[10px] text-[#a49a8b]">Today · 10:30 AM</p>
              </div>
              <div className="rounded-lg p-3 hover:bg-[#faf8f4]">
                <p className="text-xs font-semibold text-[#494236]">Attendance record published</p>
                <p className="mt-1 text-[11px] leading-5 text-[#898174]">Your recent attendance has been updated.</p>
                <p className="mt-1.5 text-[10px] text-[#a49a8b]">Yesterday</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => onNavigate("notifications")}><CheckCheck className="size-4 text-[#8b785e]" /> View all notifications</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-7 w-px bg-[#eee9e0]" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full py-1 pl-1 pr-1.5 transition hover:bg-[#f7f4ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b69a72]">
              <Avatar className="size-8"><AvatarFallback>HU</AvatarFallback></Avatar>
              <span className="hidden text-left sm:block">
                <span className="block text-xs font-semibold text-[#403b32]">Hashir Umrani</span>
                <span className="block text-[10px] text-[#948b7e]">Student</span>
              </span>
              <ChevronDown className="hidden size-3.5 text-[#928879] sm:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => onNavigate("profile")}><UserRound className="size-4 text-[#8b785e]" /> Student profile</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => onNavigate("settings")}><Settings2 className="size-4 text-[#8b785e]" /> Preferences</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={onLogout} className="text-[#a65f56] focus:bg-[#fbf0ee]"><LogOut className="size-4" /> Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
