import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Zap, Palette, Moon, Smartphone, ShieldCheck, Rocket } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  description?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: "빠른 개발",
    description: "Next.js 15와 Turbopack으로 초고속 개발 환경",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "모던 UI",
    description: "ShadcnUI와 TailwindCSS로 아름다운 인터페이스",
  },
  {
    icon: <Moon className="h-10 w-10" />,
    title: "다크모드",
    description: "next-themes로 완벽한 다크모드 지원",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "반응형",
    description: "모든 디바이스에서 완벽하게 동작",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "타입 안전",
    description: "TypeScript로 안전한 코드 작성",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "즉시 사용",
    description: "설치하고 바로 시작 가능",
  },
];

export function Features({
  title = "주요 기능",
  description = "프로젝트를 빠르게 시작할 수 있는 모든 것이 준비되어 있습니다",
  features = defaultFeatures,
}: FeaturesProps) {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="mb-4 text-primary">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
