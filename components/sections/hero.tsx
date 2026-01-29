import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';
import type { CTAButton } from '@/types';

interface HeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryCta: CTAButton;
  secondaryCta?: CTAButton;
}

export function Hero({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mx-auto max-w-4xl">
          {badge && (
            <Badge variant="secondary" className="mb-4">
              {badge}
            </Badge>
          )}

          <div className="space-y-2 w-full">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl leading-tight break-keep [text-wrap:balance]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-muted-foreground md:text-2xl break-keep [text-wrap:balance]">
                {subtitle}
              </p>
            )}
          </div>

          <p className="max-w-[700px] w-full text-muted-foreground md:text-xl">
            {description}
          </p>

          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8 w-full justify-center items-center">
            <Button asChild size="lg" variant={primaryCta.variant || 'default'}>
              <Link
                href={primaryCta.href}
                target={primaryCta.href.startsWith('http') ? '_blank' : undefined}
                rel={primaryCta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {primaryCta.text}
              </Link>
            </Button>

            {secondaryCta && (
              <Button asChild size="lg" variant={secondaryCta.variant || 'outline'}>
                <Link
                  href={secondaryCta.href}
                  target={secondaryCta.href.startsWith('http') ? '_blank' : undefined}
                  rel={secondaryCta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {secondaryCta.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
