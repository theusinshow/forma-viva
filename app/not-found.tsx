import CtaLink from '@/components/CtaLink';

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="mt-6 font-display text-4xl font-extralight tracking-tight md:text-6xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-muted">
        O espaço que você procura não existe ou foi movido.
      </p>
      <div className="mt-10">
        <CtaLink href="/">Voltar ao início</CtaLink>
      </div>
    </section>
  );
}
