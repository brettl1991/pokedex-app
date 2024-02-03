import StatBar from '../StatBar/StatBar';

interface StatItemProps {
  item: {
    base_stat: number;
    stat: {
      name: string;
    };
  };
  type: string;
}

export default function StatItem({ item, type }: StatItemProps) {
  return (
    <div className="flex items-center justify-between space-x-4 mt-1">
      <span className="text-xs sm:text-sm flex-1 capitalize">
        {item.stat.name.replace('special-', 'Sp. ')}
      </span>
      <span className="text-xs sm:text-sm flex-1">{item.base_stat}</span>
      <div className="flex-1">
        <StatBar type={type} stat={item.stat.name} baseStat={item.base_stat} />
      </div>
    </div>
  );
}
