import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { TechStack } from '@/components/sections/tech-stack';
import { Container } from '@/components/layout/container';

export default function Home() {
  return (
    <>
      <Container>
        <Hero
          badge="Next.js 16"
          title="모던 웹 개발을 위한 완벽한 스타터킷"
          subtitle="빠르게 시작하는 현대적인 웹 개발"
          description="프로덕션 레벨의 TypeScript, TailwindCSS, ShadcnUI가 완벽하게 통합된 Next.js 16 스타터킷. 다크모드, 반응형 레이아웃, 폼 검증까지 모든 기능을 즉시 사용하세요."
          primaryCta={{
            text: '시작하기',
            href: '/examples/components',
          }}
          secondaryCta={{
            text: 'GitHub',
            href: 'https://github.com',
            variant: 'outline',
          }}
        />
      </Container>
      <Features />
      <TechStack />
    </>
  );
}
