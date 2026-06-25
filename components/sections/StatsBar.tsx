import { stats } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { StatItem } from "@/components/ui/StatItem";

export function StatsBar() {
  return (
    <div className="pt-12 pb-8 sm:pt-14 sm:pb-10">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8 lg:gap-x-12">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isAlwaysOn={stat.isAlwaysOn}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
