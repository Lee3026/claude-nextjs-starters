'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './container';
import type { LinkGroup } from '@/types';

interface FooterProps {
  links?: LinkGroup[];
  className?: string;
}

export function Footer({ links, className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Forms나 Components 페이지에서는 사이드바 너비만큼 마진 추가
  const hasSidebar = pathname === '/examples/forms' || pathname === '/examples/components';

  const defaultLinks: LinkGroup[] = [
    {
      title: '프로젝트',
      links: [
        { title: 'GitHub', href: 'https://github.com/yourusername/your-repo', external: true },
        { title: '컴포넌트', href: '/examples/components' },
        { title: '폼 예제', href: '/examples/forms' },
      ],
    },
    {
      title: '기술 스택',
      links: [
        { title: 'Next.js', href: 'https://nextjs.org', external: true },
        { title: 'React', href: 'https://react.dev', external: true },
        { title: 'TailwindCSS', href: 'https://tailwindcss.com', external: true },
        { title: 'ShadcnUI', href: 'https://ui.shadcn.com', external: true },
      ],
    },
    {
      title: '리소스',
      links: [
        { title: 'React Hook Form', href: 'https://react-hook-form.com', external: true },
        { title: 'Zod', href: 'https://zod.dev', external: true },
        { title: 'TypeScript', href: 'https://www.typescriptlang.org', external: true },
        { title: 'Lucide Icons', href: 'https://lucide.dev', external: true },
      ],
    },
  ];

  const linkGroups = links || defaultLinks;

  return (
    <footer className={`bg-muted ${hasSidebar ? 'lg:ml-64' : ''} ${className || ''}`}>
      <Container>
        <div className="border-t py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* 로고 및 설명 */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-lg">Next.js Starter</span>
              </Link>
            </div>

            {/* 링크 그룹 */}
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 저작권 */}
          <div className="mt-12 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {currentYear} Next.js Starter
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
