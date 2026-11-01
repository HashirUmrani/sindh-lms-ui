import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

export function QuickAccessCard({ icon: Icon, title, description, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={cn("group flex min-h-[112px] w-full items-start gap-3.5 rounded-xl border border-[#ebe5dc] bg-white p-4 text-left shadow-[0_1px_2px_rgba(49,39,25,0.025)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d9cbb7] hover:shadow-[0_10px_26px_rgba(49,39,25,0.065)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b69a72]", className)}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#f3eee5] text-[#806746] transition-colors group-hover:bg-[#ede2d0]">
        <Icon className="size-[19px]" strokeWidth={1.8} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[13px] font-semibold leading-5 text-[#3c372f]">{title}</span>
        <span className="mt-1 block text-[11px] leading-[1.55] text-[#91897d]">{description}</span>
      </span>
      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[#b3a792] opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </button>
  );
}
