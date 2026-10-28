import CountUp from "./CountUp";
import { fraunces, jetbrains } from "./fonts";
import { CATEGORIES, GENERATORS, SITE_STATS, TECHNOLOGIES } from "./data";

interface Props {
  total: number;
  categories: number;
  /** data (ISO) do background mais recente */
  latest?: string;
}

const cell = "flex flex-col gap-[4px] px-[18px] py-[14px] max-[1023px]:[&:nth-child(even)]:border-l lg:border-l first:border-l-0 border-stroke-1";
const num = `${fraunces.className} text-[clamp(26px,2.6vw,36px)] leading-none tracking-[-0.03em]`;
const label = "text-[13px] text-white/80";
const sub = `${jetbrains.className} text-[10.5px] text-white/45`;
const chip = `${jetbrains.className} text-[10px] px-[7px] py-[1px] rounded-full border border-stroke-1 text-white/60`;

export default function StatsStrip({ total, categories, latest }: Props) {
  const latestLabel = latest
    ? new Date(latest).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" })
    : null;
  const { visits, visitsLabel, regions } = SITE_STATS;

  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 mt-[32px] border border-stroke-1 rounded-out bg-white/[.015] max-[1023px]:[&>div:nth-child(n+3)]:border-t">
      <div className={cell}>
        <dd className={num}>
          <CountUp value={total} />
        </dd>
        <dt className={label}>free backgrounds</dt>
        <span className={sub}>
          + {GENERATORS.length} live generators{latestLabel ? ` · latest ${latestLabel}` : ""}
        </span>
      </div>

      <div className={cell}>
        <dd className={num}>
          <CountUp value={categories} />
        </dd>
        <dt className={label}>categories</dt>
        <span className={sub}>
          {CATEGORIES.slice(0, 4).map((c) => c.label).join(" · ")} +{Math.max(categories - 4, 0)}
        </span>
      </div>

      <div className={cell}>
        <dd className={num}>
          <CountUp value={visits} suffix="+" />
        </dd>
        <dt className={label}>{visitsLabel}</dt>
        <span className="flex flex-wrap gap-[4px] mt-[2px]">
          {regions.map((r) => (
            <span key={r} className={chip}>
              {r}
            </span>
          ))}
        </span>
      </div>

      <div className={cell}>
        <dd className={num}>Free</dd>
        <dt className={label}>and open source</dt>
        <span className={sub}>{TECHNOLOGIES.join(" · ")}</span>
      </div>
    </dl>
  );
}
