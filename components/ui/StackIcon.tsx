import { STACK_ICONS } from "@/data/stacks";
import type { StackTag } from "@/data/stacks";
import IconChip from "@/components/ui/Icons";

export default function StackIcon({ tag }: { tag: StackTag }) {
  return <IconChip icon={STACK_ICONS[tag]} label={tag} />;
}