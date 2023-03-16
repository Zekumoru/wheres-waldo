import { useEffect, useRef, useState } from 'react';
import interact from 'interactjs';
import { DragEvent } from '@interactjs/types';

type ImageDragScrollingHookProps = {
  overrideEndDrag: boolean;
};

const useImageDragScrolling = (props?: ImageDragScrollingHookProps) => {
  const [dragging, setDragging] = useState(false);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current === null) {
      throw new Error('Could not reference image element for dragging.');
    }

    interact(imgRef.current).draggable({
      inertia: true,
      listeners: {
        start: () => {
          setDragging(true);
        },
        move: (e: DragEvent) => {
          const container = imgContainerRef.current;
          if (container === null) {
            throw new Error(
              'Could not reference the image container so cannot set scroll position on drag.'
            );
          }

          container.scrollLeft -= e.dx;
          container.scrollTop -= e.dy;
        },
        end: (e: DragEvent) => {
          if (props?.overrideEndDrag) return;
          setDragging(false);
        },
      },
    });
  }, []);

  return [imgRef, imgContainerRef, dragging, setDragging] as const;
};

export default useImageDragScrolling;
