'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { LogIn, UserPlus, Search as SearchIcon, Menu, X } from 'lucide-react';

// 사이드바 메뉴 항목들
const menuItems = [
  { id: 'login', label: '로그인 폼', icon: LogIn },
  { id: 'signup', label: '회원가입 폼', icon: UserPlus },
  { id: 'search', label: '검색 폼', icon: SearchIcon },
];

// Zod 스키마 정의
const loginSchema = z.object({
  email: z.string().email({ message: '유효한 이메일 주소를 입력해주세요.' }),
  password: z.string().min(6, { message: '비밀번호는 최소 6자 이상이어야 합니다.' }),
  rememberMe: z.boolean().default(false),
});

const signupSchema = z.object({
  name: z.string().min(2, { message: '이름은 최소 2자 이상이어야 합니다.' }),
  email: z.string().email({ message: '유효한 이메일 주소를 입력해주세요.' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
});

const searchSchema = z.object({
  query: z.string().min(2, { message: '검색어는 최소 2자 이상이어야 합니다.' }),
  category: z.string().min(1, { message: '카테고리를 선택해주세요.' }),
  priceRange: z.string().optional(),
  inStock: z.boolean().default(false),
  sortBy: z.enum(['relevance', 'price-low', 'price-high', 'newest']).default('relevance'),
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;
type SearchFormData = z.infer<typeof searchSchema>;

export default function FormsPage() {
  const [activeSection, setActiveSection] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 로그인 폼
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  // 회원가입 폼
  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  // 검색 폼
  const searchForm = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: '',
      category: '',
      priceRange: '',
      inStock: false,
      sortBy: 'relevance',
    },
  });

  // 폼 제출 핸들러들
  const onLoginSubmit = async (data: LoginFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('로그인 데이터:', data);
    toast.success('로그인 성공!', {
      description: `이메일: ${data.email}`,
    });
    loginForm.reset();
  };

  const onSignupSubmit = async (data: SignupFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('회원가입 데이터:', data);
    toast.success('회원가입 성공!', {
      description: `환영합니다, ${data.name}님!`,
    });
    signupForm.reset();
  };

  const onSearchSubmit = async (data: SearchFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('검색 데이터:', data);
    toast.success('검색 완료!', {
      description: `"${data.query}" 검색 결과를 불러왔습니다.`,
    });
    searchForm.reset();
  };

  // 스크롤 네비게이션
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setSidebarOpen(false);
    }
  };

  // 스크롤 위치에 따라 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Toaster />

      {/* 모바일 햄버거 버튼 */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-50 lg:hidden bg-background border rounded-md p-2 shadow-md"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* 사이드바 */}
        <aside
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform duration-300 lg:translate-x-0 z-40 overflow-y-auto ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <h2 className="font-semibold text-lg mb-4">폼 목록</h2>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 lg:ml-64 pb-0">
          <Container className="py-12">
            <div className="space-y-12">
              {/* 페이지 헤더 */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">폼 예제</h1>
                <p className="text-muted-foreground">
                  react-hook-form과 zod를 사용한 다양한 폼 검증 예제입니다.
                </p>
              </div>

              {/* 로그인 폼 섹션 */}
              <section id="login">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <LogIn className="h-5 w-5" />
                      <CardTitle>로그인 폼</CardTitle>
                    </div>
                    <CardDescription>
                      이메일과 비밀번호로 로그인하세요.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
                    <CardContent className="space-y-4">
                      {/* 이메일 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="login-email">이메일</Label>
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="example@email.com"
                          {...loginForm.register('email')}
                          className={
                            loginForm.formState.errors.email
                              ? 'border-destructive'
                              : ''
                          }
                        />
                        {loginForm.formState.errors.email && (
                          <p className="text-sm text-destructive">
                            {loginForm.formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* 비밀번호 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="login-password">비밀번호</Label>
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="최소 6자"
                          {...loginForm.register('password')}
                          className={
                            loginForm.formState.errors.password
                              ? 'border-destructive'
                              : ''
                          }
                        />
                        {loginForm.formState.errors.password && (
                          <p className="text-sm text-destructive">
                            {loginForm.formState.errors.password.message}
                          </p>
                        )}
                      </div>

                      {/* 로그인 상태 유지 */}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember-me"
                          checked={loginForm.watch('rememberMe')}
                          onCheckedChange={(checked) =>
                            loginForm.setValue('rememberMe', checked as boolean)
                          }
                        />
                        <label
                          htmlFor="remember-me"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          로그인 상태 유지
                        </label>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4 pt-6">
                      <Button
                        type="submit"
                        disabled={loginForm.formState.isSubmitting}
                        className="w-full"
                      >
                        {loginForm.formState.isSubmitting ? '로그인 중...' : '로그인'}
                      </Button>
                      <Button type="button" variant="link" className="w-full">
                        비밀번호를 잊으셨나요?
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </section>

              {/* 회원가입 폼 섹션 */}
              <section id="signup">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <UserPlus className="h-5 w-5" />
                      <CardTitle>회원가입 폼</CardTitle>
                    </div>
                    <CardDescription>
                      새 계정을 만들어보세요.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={signupForm.handleSubmit(onSignupSubmit)}>
                    <CardContent className="space-y-4">
                      {/* 이름 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="signup-name">이름</Label>
                        <Input
                          id="signup-name"
                          placeholder="홍길동"
                          {...signupForm.register('name')}
                          className={
                            signupForm.formState.errors.name
                              ? 'border-destructive'
                              : ''
                          }
                        />
                        {signupForm.formState.errors.name && (
                          <p className="text-sm text-destructive">
                            {signupForm.formState.errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* 이메일 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">이메일</Label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="example@email.com"
                          {...signupForm.register('email')}
                          className={
                            signupForm.formState.errors.email
                              ? 'border-destructive'
                              : ''
                          }
                        />
                        {signupForm.formState.errors.email && (
                          <p className="text-sm text-destructive">
                            {signupForm.formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* 비밀번호 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">비밀번호</Label>
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="최소 8자"
                          {...signupForm.register('password')}
                          className={
                            signupForm.formState.errors.password
                              ? 'border-destructive'
                              : ''
                          }
                        />
                        {signupForm.formState.errors.password && (
                          <p className="text-sm text-destructive">
                            {signupForm.formState.errors.password.message}
                          </p>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-6">
                      <Button
                        type="submit"
                        disabled={signupForm.formState.isSubmitting}
                        className="w-full"
                      >
                        {signupForm.formState.isSubmitting
                          ? '가입 중...'
                          : '회원가입'}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </section>

              {/* 검색 폼 섹션 */}
              <section id="search">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <SearchIcon className="h-5 w-5" />
                      <CardTitle>검색 폼</CardTitle>
                    </div>
                    <CardDescription>
                      다양한 필터와 옵션으로 상품을 검색하세요.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={searchForm.handleSubmit(onSearchSubmit)}>
                    <CardContent className="space-y-4">
                      {/* 검색어 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="search-query">검색어</Label>
                        <Input
                          id="search-query"
                          placeholder="상품명을 입력하세요"
                          {...searchForm.register('query')}
                          className={
                            searchForm.formState.errors.query
                              ? 'border-destructive'
                              : ''
                          }
                        />
                        {searchForm.formState.errors.query && (
                          <p className="text-sm text-destructive">
                            {searchForm.formState.errors.query.message}
                          </p>
                        )}
                      </div>

                      {/* 카테고리 선택 */}
                      <div className="space-y-2">
                        <Label htmlFor="search-category">카테고리</Label>
                        <Select
                          value={searchForm.watch('category')}
                          onValueChange={(value) =>
                            searchForm.setValue('category', value)
                          }
                        >
                          <SelectTrigger
                            id="search-category"
                            className={
                              searchForm.formState.errors.category
                                ? 'border-destructive'
                                : ''
                            }
                          >
                            <SelectValue placeholder="카테고리를 선택하세요" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="electronics">전자제품</SelectItem>
                            <SelectItem value="clothing">의류</SelectItem>
                            <SelectItem value="books">도서</SelectItem>
                            <SelectItem value="home">홈/리빙</SelectItem>
                            <SelectItem value="sports">스포츠</SelectItem>
                          </SelectContent>
                        </Select>
                        {searchForm.formState.errors.category && (
                          <p className="text-sm text-destructive">
                            {searchForm.formState.errors.category.message}
                          </p>
                        )}
                      </div>

                      {/* 가격 범위 */}
                      <div className="space-y-2">
                        <Label>가격 범위</Label>
                        <RadioGroup
                          value={searchForm.watch('priceRange')}
                          onValueChange={(value) =>
                            searchForm.setValue('priceRange', value)
                          }
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="low" id="price-low" />
                            <Label htmlFor="price-low" className="font-normal">
                              ~50,000원
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="medium" id="price-medium" />
                            <Label htmlFor="price-medium" className="font-normal">
                              50,000~100,000원
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="high" id="price-high" />
                            <Label htmlFor="price-high" className="font-normal">
                              100,000원 이상
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <Separator />

                      {/* 재고 있음만 표시 */}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="in-stock"
                          checked={searchForm.watch('inStock')}
                          onCheckedChange={(checked) =>
                            searchForm.setValue('inStock', checked as boolean)
                          }
                        />
                        <label
                          htmlFor="in-stock"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          재고 있음만 표시
                        </label>
                      </div>

                      {/* 정렬 기준 */}
                      <div className="space-y-2">
                        <Label htmlFor="search-sort">정렬 기준</Label>
                        <Select
                          value={searchForm.watch('sortBy')}
                          onValueChange={(value) =>
                            searchForm.setValue(
                              'sortBy',
                              value as 'relevance' | 'price-low' | 'price-high' | 'newest'
                            )
                          }
                        >
                          <SelectTrigger id="search-sort">
                            <SelectValue placeholder="정렬 기준 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="relevance">관련도순</SelectItem>
                            <SelectItem value="price-low">낮은 가격순</SelectItem>
                            <SelectItem value="price-high">높은 가격순</SelectItem>
                            <SelectItem value="newest">최신순</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-6">
                      <Button
                        type="submit"
                        disabled={searchForm.formState.isSubmitting}
                        className="w-full"
                      >
                        {searchForm.formState.isSubmitting ? '검색 중...' : '검색'}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </section>

              {/* 검증 규칙 안내 */}
              <Card>
                <CardHeader>
                  <CardTitle>검증 규칙</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      로그인 폼
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>이메일: 유효한 이메일 형식</li>
                      <li>비밀번호: 최소 6자 이상</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <UserPlus className="h-4 w-4" />
                      회원가입 폼
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>이름: 최소 2자 이상</li>
                      <li>이메일: 유효한 이메일 형식</li>
                      <li>비밀번호: 최소 8자 이상</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <SearchIcon className="h-4 w-4" />
                      검색 폼
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>검색어: 최소 2자 이상</li>
                      <li>카테고리: 필수 선택</li>
                      <li>가격 범위: 선택 사항</li>
                      <li>정렬 기준: 기본값 관련도순</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 기능 설명 */}
              <Card>
                <CardHeader>
                  <CardTitle>사용된 기술</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>
                      <strong>react-hook-form</strong>: 각 폼별 독립적인 상태 관리
                    </li>
                    <li>
                      <strong>zod</strong>: TypeScript 기반 스키마 검증
                    </li>
                    <li>
                      <strong>@hookform/resolvers</strong>: react-hook-form + zod
                      통합
                    </li>
                    <li>
                      <strong>sonner</strong>: 토스트 알림
                    </li>
                    <li>
                      <strong>ShadcnUI</strong>: Input, Select, Checkbox, Radio
                      Group, Textarea 컴포넌트
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Container>
        </main>
      </div>

      {/* 모바일 오버레이 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
