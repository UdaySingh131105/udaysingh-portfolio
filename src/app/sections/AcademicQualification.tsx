import React from "react";
import { Timeline } from "@/components/timeline";

interface AccademicDataProps {
    title: string;
    content: React.JSX.Element;
}[]

export default function AcademicQualification() {
    const AccademicData : AccademicDataProps[] = [
    {
        title: "2022 - Present",
        content: (
        <div>
            <p className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-start mb-4">
            Pranveer Singh Institute of Technology, Kanpur
            </p>
            <div className="mb-4 bg-gradient-to-r text-lg font-extralight from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-start">
                <p className="font-medium">
                    Bachelor of Technology
                </p>
                <p>Computer Science and Engineering (Artificial Intelligence)</p>
            </div>

            <p className="mb-2 text-sm font-bold text-neutral-700 dark:text-neutral-300">
            Key Achievements:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
                <li>Maintained a GPA of 8.15 till 5th semester</li>
                <li>Developed multiple academic projects involving ML and full-stack development</li>
                <li>Participated in hackathons and coding competitions, securing top positions</li>
            </ul>
        </div>
        ),
    },
    {
        title: "2021 - 2022",
        content: (
        <div>
            <p className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-start mb-4">
                Intermediate (12th Grade)
            </p>
            <div className="mb-4 bg-gradient-to-r text-lg font-extralight from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-start">
                <p className="font-semibold">
                    Central Board of Secondary Education (CBSE)
                </p>
                <p className="font-medium">
                    Satluj Public School
                </p>
            </div>

            <p className="mb-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            Key Achievements:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
                <li>Secured distinction in all core sujects</li>
                <li>Scored a Aggregate Percentage of 86.33%</li>
                <li>Led peer study groups and assisted classmates with exam preparation</li>
            </ul>
        </div>
        ),
    },
    {
        title: "2019 - 2020",
        content: (
            <div>
                <p className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-start mb-4">
                    High School (10th Grade)
                </p>
                <div className="mb-4 bg-gradient-to-r text-lg font-extralight from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-start">
                    <p className="font-semibold">
                        Central Board of Secondary Education (CBSE)
                    </p>
                    <p className="font-medium">
                        Satluj Public School
                    </p>
                </div>
                <p className="mb-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Key Achievements:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
                    <li>Graduated with a Aggregate percentage of 94%</li>
                    <li>Active member of the school coding club, organizing workshops and events</li>
                    <li>Represented school in inter-school football tournament</li>
                </ul>
            </div>
        ),
    }
    ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={AccademicData} />
    </div>
  );
}
