import Image from 'next/image';
import { DARK_BLUR, type GalleryImage } from '@/lib/projects';

type FrameProps = {
  image: GalleryImage;
  /** Tailwind aspect ratio class override. */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Subtle hover zoom (used on interactive cards). */
  hover?: boolean;
  /** Dim the image at rest and lift it on hover. On by default with `hover`;
   *  disable where the parent manages its own overlay (e.g. NextProjectBlock). */
  dimAtRest?: boolean;
};

const aspectByOrientation: Record<GalleryImage['orientation'], string> = {
  landscape: 'aspect-[3/2]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
};

/**
 * Image frame — the single place images render. Swap the picsum `src` in
 * lib/projects.ts for real photography and everything inherits it.
 */
export default function Frame({
  image,
  aspect,
  sizes = '100vw',
  priority = false,
  className = '',
  hover = false,
  dimAtRest = true,
}: FrameProps) {
  return (
    <div
      className={`group relative overflow-hidden bg-surface ${
        aspect ?? aspectByOrientation[image.orientation]
      } ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={DARK_BLUR}
        className={`object-cover ${
          hover
            ? 'transform-gpu transition-transform duration-700 ease-editorial will-change-transform group-hover:scale-[1.03]'
            : ''
        }`}
      />
      {/* Rest dim that lifts on hover. Opacity-only so it composites on the GPU
          (no per-frame filter repaint). */}
      {hover && dimAtRest && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-bg/20 opacity-100 transition-opacity duration-700 ease-editorial group-hover:opacity-0"
        />
      )}
    </div>
  );
}
