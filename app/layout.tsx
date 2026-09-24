import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import LenisScroll from "@/components/lenis";
import Footer from "@/components/footer";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const urbanist = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

const title = "Jishan Hoshen Jibon | Full-Stack & AI Developer Portfolio";
const description = "Skilled developer building modern web apps and AI-powered solutions. Explore Jishan Hoshen Jibon's portfolio.";

export const metadata: Metadata = {
    metadataBase: new URL("https://devxbd.com"),
    title: {
        default: title,
        template: "%s | Dev x BD",
    },
    description: description,
    keywords: [
        "Jishan Hoshen Jibon",
        "Jishan Jibon",
        "Jibon",
        "Dev x BD",
        "Developer Portfolio",
        "Web Developer",
        "AI Developer",
        "Full-Stack Developer",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Portfolio Website",
        "Software Engineer",
        "AI Solutions",
        "Web Applications",
        "Tech Portfolio",
        "Programming",
        "Open Source",
        "Frontend Developer",
        "Backend Developer",
        "MERN Stack",
        "AI Integration",
        "Cloud Computing",
        "APIs",
        "UI/UX Design",
        "Responsive Design",
        "Tech Enthusiast",
        "Coding",
        "Software Development",
        "Digital Portfolio",
        "Tech Projects",
        "Innovation",
        "Problem Solving",
        "Collaboration",
        "Agile Development",
        "Continuous Learning",
        "Tech Blog",
        "Developer Tools",
        "Version Control",
        "GitHub",
        "DevOps",
        "Database Management",
        "Performance Optimization",
        "Security Best Practices",
        "Scalable Solutions",
        "Tech Community",
        "Career in Tech",
        "Tech Trends",
        "Future of Technology",
    ],
    authors: [{ name: "Jishan Hoshen Jibon" }],
    creator: "Jishan Hoshen Jibon",
    applicationName: "devxbd",
    appleWebApp: {
        title: "Dev x BD",
        capable: true,
        statusBarStyle: "default",
    },
    openGraph: {
        title: title,
        description: description,
        type: "website",
        url: "/",
        images: [
            {
                url: "/assets/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Jishan Hoshen Jibon Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: ["/assets/opengraph-image.png"],
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
