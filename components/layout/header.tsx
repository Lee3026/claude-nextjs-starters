'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Container } from './container';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';

interface HeaderProps {
  className?: string;
}

const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Components',
    href: '/examples/components',
  },
  {
    title: 'Forms',
    href: '/examples/forms',
  },
];

export function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      className
    )}>
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* 로고 및 네비게이션 영역 */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Next.js Starter</span>
            </Link>

            {/* 데스크톱 네비게이션 - CSS로 숨김/표시 제어 */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* 액션 영역 */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* 모바일 메뉴 버튼 - CSS로 숨김/표시 제어 */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">메뉴 열기</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="flex items-center space-x-2 mb-4">
                    <span className="font-bold text-xl">Next.js Starter</span>
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary py-2',
                        pathname === item.href
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
