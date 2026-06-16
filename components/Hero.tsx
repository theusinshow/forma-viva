import Image from 'next/image';
import { DARK_BLUR, type GalleryImage } from '@/lib/projects';

type HeroProps = {
  image: GalleryImage;
  /** Bottom-left content (name / title). */
  cornerBottomLeft: React.ReactNode;
  /** Bottom-right content (CTA / meta). */
  cornerBottomRight?: React.ReactNode;
  /** Top-left small label below navbar (optional eyebrow). */
  cornerTopLeft?: React.ReactNode;
};

/**
 * Full-bleed corner-anchored hero (100svh). Image is the protagonist;
 * text and CTA live in the corners. Image gets priority for LCP.
 */
export default function Hero({
  image,
  cornerBottomLeft,
  cornerBottomRight,
  cornerTopLeft,
}: HeroProps) {
  return (
    <section className="relative h-svh w-full overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={DARK_BLUR}
        className="object-cover"
      />
      {/* Legibility scrims — anchored to the text zones, photo center stays clear */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/80 via-bg/25 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-bg/55 to-transparent"
      />

      {cornerTopLeft && (
        <div className="absolute left-6 top-24 z-10 md:left-10 md:top-28">{cornerTopLeft}</div>
      )}

      <div className="absolute inset-x-6 bottom-8 z-10 flex flex-col gap-6 md:inset-x-10 md:bottom-12 md:flex-row md:items-end md:justify-between">
        <div>{cornerBottomLeft}</div>
        {cornerBottomRight && <div className="md:text-right">{cornerBottomRight}</div>}
      </div>
    </section>
  );
}
