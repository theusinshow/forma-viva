'use client';

import { useState } from 'react';

const projectTypes = [
  'Residencial',
  'Interiores',
  'Reforma autoral',
  'Comercial',
  'Outro',
];

type Errors = Partial<Record<'name' | 'email' | 'type' | 'message', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '').trim();

    const next: Errors = {};
    if (!get('name')) next.name = 'Informe seu nome.';
    if (!get('email')) next.email = 'Informe seu e-mail.';
    else if (!EMAIL_RE.test(get('email'))) next.email = 'E-mail inválido.';
    if (!get('type')) next.type = 'Selecione o tipo de projeto.';
    if (!get('message')) next.message = 'Escreva uma mensagem.';

    setErrors(next);

    if (Object.keys(next).length > 0) {
      // Move focus to the first field with an error.
      const firstKey = (['name', 'email', 'type', 'message'] as const).find((k) => next[k]);
      if (firstKey) form.querySelector<HTMLElement>(`#${firstKey}`)?.focus();
      return;
    }

    // Demo only — no backend. Replace with a real handler/endpoint.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-border bg-surface p-8" role="status" aria-live="polite">
        <p className="font-display text-xl font-light">Mensagem registrada.</p>
        <p className="mt-3 text-sm text-muted">
          Este é um formulário de demonstração: nenhum dado foi enviado. Em breve retornaremos
          o contato.
        </p>
      </div>
    );
  }

  const clear = (key: keyof Errors) =>
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8" noValidate>
      <p className="text-xs text-muted">
        <span aria-hidden>*</span> Campos obrigatórios.
      </p>

      <Field
        id="name"
        label="Nome"
        type="text"
        autoComplete="name"
        required
        error={errors.name}
        onInput={() => clear('name')}
      />
      <Field
        id="email"
        label="E-mail"
        type="email"
        autoComplete="email"
        required
        error={errors.email}
        onInput={() => clear('email')}
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="eyebrow">
          Tipo de projeto <span className="text-accent">*</span>
        </label>
        <select
          id="type"
          name="type"
          required
          aria-invalid={errors.type ? true : undefined}
          aria-describedby={errors.type ? 'type-error' : undefined}
          onChange={() => clear('type')}
          className="border-b border-border bg-transparent py-3 text-text outline-none transition-colors focus:border-accent aria-[invalid=true]:border-danger"
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
        {errors.type && (
          <p id="type-error" role="alert" className="text-xs text-danger">
            {errors.type}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow">
          Mensagem <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onInput={() => clear('message')}
          className="resize-none border-b border-border bg-transparent py-3 text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent aria-[invalid=true]:border-danger"
          placeholder="Conte um pouco sobre o espaço e o momento do projeto."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-xs text-danger">
            {errors.message}
          </p>
        )}
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
  error,
  onInput,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  onInput?: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onInput={onInput}
        className="border-b border-border bg-transparent py-3 text-text outline-none transition-colors focus:border-accent aria-[invalid=true]:border-danger"
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
