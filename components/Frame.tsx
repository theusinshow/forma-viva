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
            ? 'saturate-[.6] brightness-[.92] transition duration-700 ease-editorial group-hover:scale-[1.03] group-hover:saturate-100 group-hover:brightness-100'
            : ''
        }`}
      />
    </div>
  );
}
