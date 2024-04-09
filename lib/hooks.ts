import { useActiveSectionContext } from "@/Context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";


export function useSectionInView(sectionName: SectionName , threshold : number ) {
  const { timeofLastClick, setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeofLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeofLastClick, sectionName]);

  return {
    ref,
  };
}
