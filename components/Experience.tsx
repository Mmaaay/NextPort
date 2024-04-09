"use client";
import React from "react";
import { SectionHeading } from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/Context/ThemeContext";

export const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const {theme} = useTheme()
  return (
    <section ref={ref} id="experience" className="scroll-mt-20 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experienceItem, index) => (
          <React.Fragment key={index}>
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: theme === "light" ? "7px solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.05)"
                }}
                date={experienceItem.date}
                icon={experienceItem.icon}
                iconStyle={{
                  background: theme === "light" ? "white" : "rgba(255,255,255,0.05)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">
                  {experienceItem.title}
                </h3>
                <p className="font-normal !mt-0 ">{experienceItem.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {experienceItem.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
