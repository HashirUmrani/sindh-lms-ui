import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function StatCard({ icon: Icon, label, value, note, trend, tone = "sand" }) {
  const toneClasses = {
    sand: "bg-[#f2eadf] text-[#866b48]",
    sage: "bg-[#edf2eb] text-[#68806a]",
    clay: "bg-[#f5ece8] text-[#a16c5d]",
    stone: "bg-[#f0efec] text-[#777166]",
  };

  return (
    <Card className="h-full border-[#ece6dc] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(49,39,25,0.07)]">
      <CardContent className="flex items-start justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0">
          <p className="text-xs font-medium text-[#837c70]">{label}</p>
          <p className="mt-2 text-[26px] font-semibold leading-none tracking-tight text-[#302c25]">{value}</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px] text-[#948c80]">
            {trend && <span className="inline-flex items-center gap-0.5 font-medium text-[#66806a]"><ArrowUpRight className="size-3" />{trend}</span>}
            <span>{note}</span>
          </div>
        </div>
        <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${toneClasses[tone] || toneClasses.sand}`}>
          <Icon className="size-[18px]" strokeWidth={1.8} />
        </span>
      </CardContent>
    </Card>
  );
}
