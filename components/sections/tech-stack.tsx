import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import {
  LayoutDashboard,
  Code2,
  Palette,
  Component,
  FileText,
  ShieldCheck,
  Moon,
  Smile,
} from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  description?: string;
  url: string;
}

interface TechStackProps {
  title?: string;
  subtitle?: string;
  techs?: TechItem[];
}

const defaultTechs: TechItem[] = [
  {
    name: "Next.js 15",
    icon: <LayoutDashboard className="h-12 w-12" />,
    description: "React 프레임워크",
    url: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    icon: <Code2 className="h-12 w-12" />,
    description: "타입 안전성",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "TailwindCSS",
    icon: <Palette className="h-12 w-12" />,
    description: "유틸리티 CSS",
    url: "https://tailwindcss.com",
  },
  {
    name: "ShadcnUI",
    icon: <Component className="h-12 w-12" />,
    description: "컴포넌트 라이브러리",
    url: "https://ui.shadcn.com",
  },
  {
    name: "React Hook Form",
    icon: <FileText className="h-12 w-12" />,
    description: "폼 관리",
    url: "https://react-hook-form.com",
  },
  {
    name: "Zod",
    icon: <ShieldCheck className="h-12 w-12" />,
    description: "스키마 검증",
    url: "https://zod.dev",
  },
  {
    name: "next-themes",
    icon: <Moon className="h-12 w-12" />,
    description: "다크모드",
    url: "https://github.com/pacocoursey/next-themes",
  },
  {
    name: "Lucide Icons",
    icon: <Smile className="h-12 w-12" />,
    description: "아이콘 라이브러리",
    url: "https://lucide.dev",
  },
];

export function TechStack({
  title = "기술 스택",
  subtitle = "최신 기술로 구축된 강력한 개발 환경",
  techs = defaultTechs,
}: TechStackProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <Link
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 text-primary" aria-label={tech.name}>
                    {tech.icon}
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {tech.name}
                  </Badge>
                  {tech.description && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {tech.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
