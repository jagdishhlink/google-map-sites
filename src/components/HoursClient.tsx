"use client";
import { useState, useEffect } from "react";
import { biz } from "@/lib/business";

export default function HoursClient() {
  const [today, setToday] = useState("");
  useEffect(() => { setToday(new Date().toLocaleDateString("en-US", { weekday: "long" })); }, []);

  return (
    <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] overflow-hidden">
      {biz.hours.map(h => (
        <div key={h.day} className={`flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] last:border-b-0 ${h.day === today ? "bg-[var(--color-primary)]/5" : ""}`}>
          <div className="flex items-center gap-3">
            {h.day === today && <span className="w-2 h-2 rounded-full bg-green-500" />}
            <span className={`font-medium ${h.day === today ? "text-[var(--color-primary)]" : "text-[var(--color-foreground)]"}`}>{h.day}</span>
          </div>
          <span className="text-[var(--color-muted-foreground)]">{h.time}</span>
        </div>
      ))}
    </div>
  );
}
