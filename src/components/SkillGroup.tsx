import type { SkillGroupData } from "@/data/portfolio";

type SkillGroupProps = {
  group: SkillGroupData;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight text-white">{group.title}</h3>
        <span className="font-mono text-xs text-slate-500">{group.number}</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 bg-slate-950/30 px-3 py-2 text-xs text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
