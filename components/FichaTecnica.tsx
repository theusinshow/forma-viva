import type { Project } from '@/lib/projects';

export default function FichaTecnica({ project }: { project: Project }) {
  const rows: Array<[string, string]> = [
    ['Tipo', project.category],
    ['Área', project.area],
    ['Local', project.location],
    ['Ano', String(project.year)],
    ['Serviço', project.service],
    ['Status', project.status],
  ];

  return (
    <dl className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
      {rows.map(([label, value]) => (
        <div key={label} className="bg-bg p-5">
          <dt className="eyebrow">{label}</dt>
          <dd className="mt-2 text-sm text-text">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
