import {
  BookOpen, Building2, CalendarCheck, ChevronLeft, ClipboardList,
  FileText, GraduationCap, Home, Library, LogOut, NotebookTabs,
  School, WalletCards, X,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { UniversityMark } from "./UniversityMark";
import { cn } from "../../lib/utils";

const groups = [
  {
    label: "OVERVIEW",
    items: [
      { id: "dashboard", label: "LMS Dashboard", icon: Home },
      { id: "eportal", label: "Eportal Dashboard", icon: Building2 },
    ],
  },
  {
    label: "ACADEMICS",
    items: [
      { id: "program", label: "Choose Program", icon: GraduationCap },
      { id: "classroom", label: "Virtual Classroom", icon: BookOpen },
      { id: "attendance", label: "Attendance", icon: CalendarCheck },
      { id: "courses", label: "Course Selection", icon: ClipboardList },
      { id: "results", label: "Results Notice Board", icon: NotebookTabs },
    ],
  },
  {
    label: "STUDENT SERVICES",
    items: [
      { id: "admission", label: "Admission", icon: School },
      { id: "scholarship", label: "Scholarship", icon: WalletCards },
      { id: "downloads", label: "Downloads", icon: FileText },
      { id: "library", label: "Koha Library", icon: Library },
    ],
  },
];

export const pageTitles = {
  dashboard: "LMS Dashboard",
  eportal: "Eportal Dashboard",
  program: "Choose Program",
  classroom: "Virtual Classroom",
  attendance: "Attendance",
  courses: "Course Selection",
  results: "Examination Results",
  admission: "Admission",
  scholarship: "Scholarship",
  downloads: "Downloads",
  library: "Koha Library",
  profile: "Student Profile",
};

export function Sidebar({ currentPage, onNavigate, onLogout, open, onClose }) {
  return (
    <>
      {open && <button aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-40 bg-[#292722]/30 backdrop-blur-[2px] lg:hidden" />}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col border-r border-[#eae5dc] bg-[#fffefa] transition-transform duration-300 lg:static lg:z-auto lg:w-[248px] lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full",
      )}>
        <div className="flex h-[76px] items-center justify-between border-b border-[#eee9e0] px-5">
          <UniversityMark compact />
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose} aria-label="Close sidebar"><X /></Button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <div className="mb-5 rounded-xl border border-[#eee5d7] bg-[#f8f4ec] p-3.5">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8f795b]">
              <span className="size-1.5 rounded-full bg-[#a8875b]" /> Student workspace
            </div>
            <p className="mt-2 text-sm font-semibold text-[#39342c]">Academic session 2026</p>
            <p className="mt-0.5 text-xs text-[#898174]">Fall · 7th semester</p>
          </div>

          <nav aria-label="Main navigation" className="space-y-5">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.15em] text-[#a39a8c]">{group.label}</p>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const active = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => { onNavigate(item.id); onClose?.(); }}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b69a72]",
                          active
                            ? "bg-[#eee5d7] text-[#6b5235] shadow-[inset_2px_0_0_#a8875b]"
                            : "text-[#6f6a61] hover:bg-[#f5f1e9] hover:text-[#3e392f]",
                        )}
                      >
                        <Icon className={cn("size-[17px] shrink-0", active ? "text-[#8a6b43]" : "text-[#9c9589] group-hover:text-[#806746]")} strokeWidth={1.8} />
                        <span className="min-w-0 flex-1">{item.label}</span>
                        {active && <span className="size-1.5 rounded-full bg-[#a8875b]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#eee9e0] p-4">
          <div className="flex items-center justify-between rounded-xl px-2 py-2">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#474239]">Need assistance?</p>
              <p className="mt-0.5 text-[11px] text-[#948c80]">Student support centre</p>
            </div>
            <Button variant="ghost" size="icon" className="size-8" onClick={() => onNavigate("support")} aria-label="Open support"><ChevronLeft className="rotate-180" /></Button>
          </div>
          <Separator className="my-2" />
          <button onClick={onLogout} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-xs font-medium text-[#837a6d] transition hover:bg-[#f5f1e9] hover:text-[#5c4b39]">
            <LogOut className="size-4" /> Sign out
          </button>
        </div>
      </aside>
    </>
  );
}
