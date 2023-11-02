import { useState, useRef, useEffect } from "react";

export function useTooltip(tooltipRef: React.RefObject<HTMLDivElement>) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && childRef.current && tooltipRef.current) {
      const rect = childRef.current.getBoundingClientRect();
      const toolTipRect = tooltipRef.current.getBoundingClientRect();

      let top = 0;
      let left = 0;

      if (rect.top - toolTipRect.height - 4 > 0) {
        top = rect.top - toolTipRect.height - 4;
      } else {
        top = rect.bottom + 4;
      }

      if (rect.left + toolTipRect.width > window.innerWidth) {
        left = window.innerWidth - toolTipRect.width;
      } else {
        left = rect.left;
      }

      setPosition({ top, left });
    }
  }, [isVisible]);

  return { isVisible, setIsVisible, position, childRef };
}
