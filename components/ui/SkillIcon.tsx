import { SOFT_SKILL_ICONS, type SoftSkill } from "@/data/skills";
import IconChip from "@/components/ui/Icons";

export default function SoftSkillIcon({ skill }: { skill: SoftSkill }) {
  return <IconChip icon={SOFT_SKILL_ICONS[skill]} label={skill} />;
}