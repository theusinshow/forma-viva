import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import type { GalleryImage } from '@/lib/projects';

/**
 * Editorial case gallery — varied, asymmetric compositions instead of a uniform grid.
 * Pattern repeats every 4 images: full-width, asymmetric pair, isolated portrait.
 */
export default function CaseGallery({ images }: { images: GalleryImage[] }) {
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < images.length) {
    const remaining = images.length - i;
    const pos = key % 3;

    if (pos === 0 || remaining === 1) {
      // Full-width
      const img = images[i];
      blocks.push(
        <Reveal key={key} className="col-span-12">
          <Frame image={img} aspect="aspect-[16/9]" sizes="100vw" />
        </Reveal>
      );
      i += 1;
    } else if (pos === 1 && remaining >= 2) {
      // Asymmetric pair (7 / 5)
      const a = images[i];
      const b = images[i + 1];
      blocks.push(
        <Reveal key={key} className="col-span-12 grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-7">
            <Frame image={a} aspect="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 58vw" />
          </div>
          <div className="col-span-12 self-end md:col-span-5">
            <Frame image={b} aspect="aspect-[3/4]" sizes="(max-width: 768px) 100vw, 42vw" />
          </div>
        </Reveal>
      );
      i += 2;
    } else {
      // Isolated, offset
      const img = images[i];
      blocks.push(
        <Reveal key={key} className="col-span-12 md:col-span-7 md:col-start-4">
          <Frame
            image={img}
            aspect={img.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </Reveal>
      );
      i += 1;
    }
    key += 1;
  }

  return <div className="grid grid-cols-12 gap-y-16 md:gap-y-28">{blocks}</div>;
}
