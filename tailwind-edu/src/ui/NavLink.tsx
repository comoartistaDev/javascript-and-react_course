interface Props {
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  label: string;
}

export function NavLink({ icon: Icon, label }: Props) {
  return <button className="bg-red-500 space-x-3 flex items-center text-left rounded-full py-3 px-6 font-bold text-lg">
    <Icon className="h-6 w-6"/>
    <span>{label}</span>
  </button>
}