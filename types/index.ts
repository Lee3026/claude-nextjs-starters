// 네비게이션 아이템 타입
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

// 기능 카드 타입
export interface FeatureCard {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

// 링크 그룹 타입 (Footer용)
export interface LinkGroup {
  title: string;
  links: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

// CTA 버튼 타입
export interface CTAButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
}
