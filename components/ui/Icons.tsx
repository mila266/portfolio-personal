export default function IconChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="group flex items-center h-8 rounded-full bg-neutral-800 pl-2 pr-2 overflow-hidden transition-all duration-300 hover:bg-neutral-700 hover:pr-3">
      <Icon className="w-4 h-4 shrink-0 text-neutral-200"  aria-hidden="true"/>
      <span className="max-w-0 group-hover:max-w-[140px] group-hover:ml-1.5 overflow-hidden whitespace-nowrap text-xs text-neutral-200 transition-all duration-300">
        {label}
      </span>
    </div>
  );
}