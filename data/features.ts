import { BotIcon, WorkflowIcon, PlugIcon, ShieldCheckIcon, BarChartIcon, CpuIcon } from "lucide-react";
import { IFeature } from "../types";

export const features: IFeature[] = [
    {
        title: "Custom Web Application Development",
        description:
            "Build responsive and scalable web applications using React, Laravel, and modern web technologies — tailored to your business needs.",
        icon: BotIcon,
        cardBg: "bg-orange-100",
        iconBg: "bg-orange-500"
    },
    {
        title: "Workflow Automation & Backend Solutions",
        description:
            "Automate tasks, integrate APIs, and manage backend workflows efficiently for smooth operations.",
        icon: WorkflowIcon,
        cardBg: "bg-green-100",
        iconBg: "bg-green-500"
    },
    {
        title: "UI/UX Design & Frontend Development",
        description:
            "Create intuitive, visually appealing, and user-friendly interfaces that engage your users.",
        icon: PlugIcon,
        cardBg: "bg-indigo-100",
        iconBg: "bg-indigo-500"
    },
    {
        title: "Production-Ready Security & Maintenance",
        description:
            "Implement secure code practices, error handling, and maintain your applications for reliable, long-term performance.",
        icon: ShieldCheckIcon,

        cardBg: "bg-pink-100",
        iconBg: "bg-pink-500"
    },
    {
        title: "Real-Time Monitoring & Analytics",
        description:
            "Track application performance, errors, and user interactions in real time to improve user experience and stability.",
        icon: BarChartIcon,
        cardBg: "bg-lime-100",
        iconBg: "bg-lime-500"
    },
    {
        title: "Scalable & Optimized Infrastructure",
        description:
            "Run applications efficiently with scalable architecture and optimized workflows for high performance under load.",
        icon: CpuIcon,
        cardBg: "bg-gray-50",
        iconBg: "bg-orange-500",
    },
]