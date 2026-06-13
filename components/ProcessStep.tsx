import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import type { GalleryImage } from '@/lib/projects';

type ProcessStepProps = {
  number: string;
  title: string;
  text: string;
  image: GalleryImage;
  /** Alternate image side for rhythm. */
  flip?: boolean;
  /** Light "respiro" section. */
  paper?: boolean;
};

export default function ProcessStep({
  number,
  title,
  text,
  image,
  flip = false,
  paper = false,
}: ProcessStepProps) {
  return (
    <section
      className={`flex min-h-[80vh] items-center px-6 py-24 md:px-10 ${
        paper ? 'bg-paper text-[#1a1a17]' : ''
      }`}
    >
      <div
        className={`mx-auto grid w-full max-w-container grid-cols-12 items-center gap-10 ${
          flip ? '' : ''
        }`}
      >
        <Reveal
          className={`col-span-12 md:col-span-5 ${flip ? 'md:order-2 md:col-start-8' : ''}`}
        >
          <span
            className={`font-display text-[5rem] font-extralight leading-none md:text-[8rem] ${
              paper ? 'text-[#1a1a17]/20' : 'text-text/15'
            }`}
          >
            {number}
          </span>
          <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className={`mt-6 measure ${paper ? 'text-[#1a1a17]/70' : 'text-muted'}`}>
            {text}
          </p>
        </Reveal>

        <Reveal className={`col-span-12 md:col-span-6 ${flip ? 'md:order-1' : 'md:col-start-7'}`}>
          <Frame image={image} aspect="aspect-[4/5]" sizes="(max-width: 768px) 100vw, 50vw" />
        </Reveal>
      </div>
    </section>
  );
}
