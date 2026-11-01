import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CalendarCheck,
  Clock3,
  Download,
  // FileCheck2, GraduationCap, NotebookText, School, UserRound,
  FileCheck2,
  GraduationCap,
  House,
  NotebookText,
  School,
  UserRound,
  WalletCards,
  ClipboardList,
  CircleHelp,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { StatCard } from "../components/dashboard/StatCard";
import { QuickAccessCard } from "../components/dashboard/QuickAccessCard";

const quickLinks = [
  {
    id: "eportal",
    title: "Eportal Dashboard",
    description: "University portal and student services",
    icon: House,
  },
  {
    id: "program",
    title: "Choose Program",
    description: "Review your degree programme",
    icon: GraduationCap,
  },
  {
    id: "classroom",
    title: "Virtual Classroom",
    description: "Access classes and learning material",
    icon: BookOpen,
  },
  {
    id: "attendance",
    title: "Attendance",
    description: "Review your attendance record",
    icon: CalendarCheck,
  },
  {
    id: "courses",
    title: "Course Selection",
    description: "Manage semester course selection",
    icon: ClipboardList,
  },
  {
    id: "results",
    title: "Examination Results",
    description: "View semester-wise result records",
    icon: NotebookText,
  },
  {
    id: "admission",
    title: "Admission",
    description: "Admission and payment information",
    icon: School,
  },
  {
    id: "scholarship",
    title: "Scholarship",
    description: "Financial aid and scholarship office",
    icon: WalletCards,
  },
  {
    id: "downloads",
    title: "Downloads",
    description: "Forms, PDFs and university documents",
    icon: Download,
  },
];

const activities = [
  {
    title: "Seventh semester result notice updated",
    detail: "Department of Software Engineering",
    time: "Today · 10:30 AM",
    type: "notice",
  },
  {
    title: "Attendance record published",
    detail: "Software Project Management",
    time: "Yesterday",
    type: "attendance",
  },
  {
    title: "Course material uploaded",
    detail: "Artificial Intelligence",
    time: "28 Oct 2026",
    type: "class",
  },
];

const schedule = [
  {
    time: "09:00 AM",
    course: "Software Project Management",
    room: "Room 12 · IT Centre",
  },
  {
    time: "11:00 AM",
    course: "Artificial Intelligence",
    room: "Lab 04 · CS Department",
  },
  { time: "01:00 PM", course: "Final Year Project", room: "Project Lab" },
];

function SectionHeading({ title, description, action }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div>
        <h2 className="text-[15px] font-semibold tracking-tight text-[#373229]">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-xs text-[#91897d]">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export default function DashboardPage({ onNavigate }) {
  const today = new Intl.DateTimeFormat("en-PK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="space-y-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="default">STUDENT WORKSPACE</Badge>
            <span className="text-[11px] text-[#a49b8d]">{today}</span>
          </div>
          <h1 className="text-[25px] font-semibold tracking-tight text-[#2f2b24] sm:text-[29px]">
            Welcome back, Hashir
          </h1>
          <p className="mt-1.5 text-sm text-[#827b70]">
            Here’s an overview of your academic activity.
          </p>
        </div>
        <Button
          variant="secondary"
          className="w-fit"
          onClick={() => onNavigate("profile")}
        >
          <UserRound className="size-4" /> View profile
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={CalendarCheck}
          label="Attendance"
          value="86%"
          trend="+3.2%"
          note="compared to last month"
          tone="sage"
        />
        <StatCard
          icon={GraduationCap}
          label="Current GPA"
          value="3.67"
          note="out of 4.00"
          tone="sand"
        />
        <StatCard
          icon={BookOpen}
          label="Registered courses"
          value="06"
          note="7th semester"
          tone="stone"
        />
        <StatCard
          icon={FileCheck2}
          label="Academic standing"
          value="Good"
          note="No pending action"
          tone="sage"
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.8fr)_minmax(285px,0.9fr)]">
        <section className="min-w-0">
          <SectionHeading
            title="Quick access"
            description="Your most-used university services, all in one place."
          />
          <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
            {quickLinks.map((item) => (
              <QuickAccessCard
                key={item.id}
                {...item}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </div>
        </section>

        <div className="space-y-5">
          <Card className="overflow-hidden">
            <div className="h-2 bg-[#d8c5a8]" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#a18a68]">
                    Student profile
                  </p>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight text-[#373229]">
                    Hashir Umrani
                  </h2>
                  <p className="mt-0.5 text-xs text-[#898174]">
                    BS Software Engineering
                  </p>
                </div>
                <Avatar className="size-12">
                  <AvatarFallback className="text-sm">HU</AvatarFallback>
                </Avatar>
              </div>
              <div className="mt-4 space-y-3 rounded-lg bg-[#faf8f4] p-3.5">
                <div className="flex justify-between gap-3 text-xs">
                  <span className="text-[#91897d]">Roll number</span>
                  <span className="font-semibold text-[#514a3f]">
                    2K23/SWE/66
                  </span>
                </div>
                <div className="flex justify-between gap-3 text-xs">
                  <span className="text-[#91897d]">Department</span>
                  <span className="font-semibold text-[#514a3f]">
                    Software Engineering
                  </span>
                </div>
                <div className="flex justify-between gap-3 text-xs">
                  <span className="text-[#91897d]">Semester</span>
                  <span className="font-semibold text-[#514a3f]">7th</span>
                </div>
                <div className="flex justify-between gap-3 text-xs">
                  <span className="text-[#91897d]">Session</span>
                  <span className="font-semibold text-[#514a3f]">
                    2023–2027
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full"
                onClick={() => onNavigate("profile")}
              >
                View student details <ArrowRight className="size-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Academic updates</CardTitle>
                <span className="flex size-8 items-center justify-center rounded-lg bg-[#f3eee5] text-[#806746]">
                  <NotebookText className="size-4" />
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {activities.map((activity, index) => (
                <div key={activity.title} className="flex gap-3">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f3eee5] text-[#806746]">
                    {activity.type === "notice" ? (
                      <NotebookText className="size-3.5" />
                    ) : activity.type === "attendance" ? (
                      <CalendarCheck className="size-3.5" />
                    ) : (
                      <BookOpen className="size-3.5" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold leading-5 text-[#484238]">
                      {activity.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#938b7f]">
                      {activity.detail}
                    </p>
                    <p className="mt-1 text-[10px] text-[#aaa194]">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
              <button
                onClick={() => onNavigate("notifications")}
                className="flex items-center gap-1 text-xs font-semibold text-[#806746] hover:text-[#5c452b]"
              >
                View all updates <ArrowRight className="size-3.5" />
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Today’s schedule</CardTitle>
                <CalendarDays className="size-4 text-[#9b886b]" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {schedule.map((item) => (
                <div className="flex gap-3" key={item.course}>
                  <div className="w-[70px] shrink-0 pt-0.5 text-[10px] font-semibold text-[#8e7959]">
                    {item.time}
                  </div>
                  <div className="min-w-0 border-l-2 border-[#e6d9c5] pl-3">
                    <p className="text-xs font-semibold text-[#4b453b]">
                      {item.course}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-[10px] text-[#999184]">
                      <Clock3 className="size-3" />
                      {item.room}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="rounded-xl border border-[#e8dfd1] bg-[#f1e9dc] px-4 py-3.5 sm:flex sm:items-center sm:justify-between sm:px-5">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/70 text-[#806746]">
            <CircleHelp className="size-[18px]" />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#51432f]">
              Need help with the student portal?
            </p>
            <p className="mt-0.5 text-xs text-[#85745d]">
              Find guidance for login, academic records and university services.
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          className="mt-3 border-[#d9cbb7] bg-white/80 sm:mt-0"
          onClick={() => onNavigate("support")}
        >
          Visit support centre <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
