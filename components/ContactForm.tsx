'use client';

import { useState } from 'react';

const projectTypes = [
  'Residencial',
  'Interiores',
  'Reforma autoral',
  'Comercial',
  'Outro',
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo only — no backend. Replace with a real handler/endpoint.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-border bg-surface p-8" role="status" aria-live="polite">
        <p className="font-display text-xl font-light">Mensagem registrada.</p>
        <p className="mt-3 text-sm text-muted">
          Este é um formulário de demonstração — nenhum dado foi enviado. Em breve retornaremos
          o contato.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8" noValidate>
      <Field id="name" label="Nome" type="text" autoComplete="name" required />
      <Field id="email" label="E-mail" type="email" autoComplete="email" required />

      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="eyebrow">
          Tipo de projeto
        </label>
        <select
          id="type"
          name="type"
          className="border-b border-border bg-transparent py-3 text-text outline-none transition-colors focus:border-accent"
          defaultValue=""
        >
          <option value="" disabled className="bg-surface">
            Selecione
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-surface">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="resize-none border-b border-border bg-transparent py-3 text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
          placeholder="Conte um pouco sobre o espaço e o momento do projeto."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 self-start bg-accent px-6 py-3 font-display text-xs uppercase tracking-label text-primary-fg transition-colors duration-300 ease-editorial hover:bg-text"
      >
        Enviar mensagem
        <span aria-hidden className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border-b border-border bg-transparent py-3 text-text outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
