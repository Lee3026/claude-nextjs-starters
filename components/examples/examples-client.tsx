'use client';

import { useState, ReactNode } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
    AlertCircle,
    Info,
    LogIn,
    UserPlus,
    Search as SearchIcon,
} from 'lucide-react';

// --- New Layout Demos ---
import { GridLayoutDemo } from '@/components/examples/layout/grid-layout-demo';
import { FlexLayoutDemo } from '@/components/examples/layout/flex-layout-demo';
import { ContainerDemo } from '@/components/examples/layout/container-demo';
import { StickyDemo } from '@/components/examples/layout/sticky-demo';
import { SidebarLayoutDemo } from '@/components/examples/layout/sidebar-demo';
import { BreakpointsDemo } from '@/components/examples/layout/breakpoints-demo';

// --- New Hook Demos ---
import { UseLocalStorageDemo } from '@/components/examples/hooks/use-local-storage-demo';
import { UseMediaQueryDemo } from '@/components/examples/hooks/use-media-query-demo';
import { UseDebounceDemo } from '@/components/examples/hooks/use-debounce-demo';
import { UseCountdownDemo } from '@/components/examples/hooks/use-countdown-demo';
import { UseOnClickOutsideDemo } from '@/components/examples/hooks/use-click-outside-demo';
import { UseCopyToClipboardDemo } from '@/components/examples/hooks/use-copy-clipboard-demo';
import { UseIntervalDemo } from '@/components/examples/hooks/use-interval-demo';
import { UseWindowSizeDemo } from '@/components/examples/hooks/use-window-size-demo';

// --- New Data Fetching Demos (Client side) ---
import { ClientFetchDemo } from '@/components/examples/data-fetching/client-fetch-demo';
import { ErrorBoundaryDemo } from '@/components/examples/data-fetching/error-boundary-demo';
import { LoadingStatesDemo } from '@/components/examples/data-fetching/loading-states-demo';

// --- New Optimization Demos ---
import { ImageDemo } from '@/components/examples/optimization/image-demo';
import { FontDemo } from '@/components/examples/optimization/font-demo';
import { MetadataDemo } from '@/components/examples/optimization/metadata-demo';
import { DynamicImportDemo } from '@/components/examples/optimization/dynamic-import-demo';
import { PrefetchDemo } from '@/components/examples/optimization/prefetch-demo';
import { EnvDemo } from '@/components/examples/optimization/env-demo';

// --- Zod 스키마 정의 (Forms용) ---
const loginSchema = z.object({
    email: z.string().email({ message: '유효한 이메일 주소를 입력해주세요.' }),
    password: z.string().min(6, { message: '비밀번호는 최소 6자 이상이어야 합니다.' }),
    rememberMe: z.boolean(),
});

const signupSchema = z.object({
    name: z.string().min(2, { message: '이름은 최소 2자 이상이어야 합니다.' }),
    email: z.string().email({ message: '유효한 이메일 주소를 입력해주세요.' }),
    password: z.string().min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
});

const searchSchema = z.object({
    query: z.string().min(2, { message: '검색어는 최소 2자 이상이어야 합니다.' }),
    category: z.string().min(1, { message: '카테고리를 선택해주세요.' }),
    priceRange: z.string().optional(),
    inStock: z.boolean(),
    sortBy: z.enum(['relevance', 'price-low', 'price-high', 'newest']),
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;
type SearchFormData = z.infer<typeof searchSchema>;

interface ExamplesClientProps {
    serverFetchDemo: ReactNode;
    suspenseDemo: ReactNode;
}

export function ExamplesClient({ serverFetchDemo, suspenseDemo }: ExamplesClientProps) {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const simulateLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success('로딩 완료!');
        }, 2000);
    };

    const simulateProgress = () => {
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 500);
    };

    const loginForm = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: '', password: '', rememberMe: false },
    });

    const signupForm = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: { name: '', email: '', password: '' },
    });

    const searchForm = useForm<SearchFormData>({
        resolver: zodResolver(searchSchema),
        defaultValues: { query: '', category: '', priceRange: '', inStock: false, sortBy: 'relevance' },
    });

    const onLoginSubmit: SubmitHandler<LoginFormData> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success('로그인 성공!', { description: `이메일: ${data.email}` });
        loginForm.reset();
    };

    const onSignupSubmit: SubmitHandler<SignupFormData> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success('회원가입 성공!', { description: `환영합니다, ${data.name}님!` });
        signupForm.reset();
    };

    const onSearchSubmit: SubmitHandler<SearchFormData> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success('검색 완료!', { description: `"${data.query}" 검색 결과` });
        searchForm.reset();
    };

    return (
        <>
            <Toaster />
            <Container className="py-12">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">예제</h1>
                        <p className="text-muted-foreground">다양한 컴포넌트, 훅, 패턴들의 실전 예제 모음</p>
                    </div>

                    <Tabs defaultValue="showcase" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto">
                            <TabsTrigger value="showcase" className="py-2">컴포넌트 쇼케이스</TabsTrigger>
                            <TabsTrigger value="forms" className="py-2">폼</TabsTrigger>
                            <TabsTrigger value="layout" className="py-2">레이아웃</TabsTrigger>
                            <TabsTrigger value="hooks" className="py-2">usehooks-ts</TabsTrigger>
                            <TabsTrigger value="data-fetching" className="py-2">데이터페칭</TabsTrigger>
                            <TabsTrigger value="optimization" className="py-2">설정 및 최적화</TabsTrigger>
                        </TabsList>

                        <TabsContent value="showcase" className="space-y-8 mt-6">
                            <section id="button"><Card><CardHeader><CardTitle>Button</CardTitle><CardDescription>다양한 버튼 스타일과 크기</CardDescription></CardHeader><CardContent><div className="flex flex-wrap gap-2"><Button variant="default">Default</Button><Button variant="secondary">Secondary</Button><Button variant="destructive">Destructive</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="link">Link</Button></div></CardContent></Card></section>
                            <section id="card"><Card><CardHeader><CardTitle>Card</CardTitle><CardDescription>다양한 카드 레이아웃 예제</CardDescription></CardHeader><CardContent><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><Card><CardHeader><CardTitle className="text-base">기본 카드</CardTitle><CardDescription>Header, Content, Footer</CardDescription></CardHeader><CardContent><p className="text-sm text-muted-foreground">카드는 콘텐츠를 그룹화하는 컨테이너입니다.</p></CardContent><CardFooter><Button variant="outline" size="sm" onClick={() => toast.info('카드 버튼 클릭!')}>자세히 보기</Button></CardFooter></Card><Card><CardHeader><div className="flex items-center gap-2"><div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"><AlertCircle className="h-5 w-5 text-primary" /></div><div><CardTitle className="text-base">프로젝트 카드</CardTitle><CardDescription>아이콘 포함</CardDescription></div></div></CardHeader><CardContent><div className="space-y-2"><div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">진행률</span><span className="font-medium">75%</span></div><div className="h-2 w-full bg-secondary rounded-full overflow-hidden"><div className="h-full w-3/4 bg-primary" /></div></div></CardContent></Card><Card><CardHeader><CardDescription>총 방문자</CardDescription><CardTitle className="text-3xl font-bold">12,345</CardTitle></CardHeader><CardContent><div className="flex items-center gap-2 text-sm"><Badge variant="secondary"><span className="text-green-600 dark:text-green-400">↑ 12.5%</span></Badge><span className="text-muted-foreground">지난 달 대비</span></div></CardContent></Card></div></CardContent></Card></section>
                            <section id="badge"><Card><CardHeader><CardTitle>Badge</CardTitle><CardDescription>상태 표시 뱃지</CardDescription></CardHeader><CardContent><div className="flex flex-wrap gap-2"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="destructive">Destructive</Badge><Badge variant="outline">Outline</Badge></div></CardContent></Card></section>
                            <section id="alert"><Card><CardHeader><CardTitle>Alert</CardTitle><CardDescription>알림 메시지</CardDescription></CardHeader><CardContent className="space-y-4"><Alert><Info className="h-4 w-4" /><AlertTitle>안내</AlertTitle><AlertDescription>기본 알림 메시지입니다.</AlertDescription></Alert><Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertTitle>오류</AlertTitle><AlertDescription>다시 시도해주세요.</AlertDescription></Alert></CardContent></Card></section>
                            <section id="input"><Card><CardHeader><CardTitle>Input</CardTitle><CardDescription>텍스트 입력 필드</CardDescription></CardHeader><CardContent className="space-y-4"><div className="space-y-2"><Label htmlFor="demo-email">이메일</Label><Input id="demo-email" type="email" placeholder="example@email.com" /></div></CardContent></Card></section>
                            <section id="select"><Card><CardHeader><CardTitle>Select</CardTitle><CardDescription>드롭다운 선택</CardDescription></CardHeader><CardContent><div className="space-y-2"><Label>과일 선택</Label><Select><SelectTrigger><SelectValue placeholder="과일을 선택하세요" /></SelectTrigger><SelectContent><SelectItem value="apple">사과</SelectItem><SelectItem value="banana">바나나</SelectItem></SelectContent></Select></div></CardContent></Card></section>
                            <section id="checkbox"><Card><CardHeader><CardTitle>Checkbox</CardTitle><CardDescription>체크박스 선택</CardDescription></CardHeader><CardContent><div className="flex items-center space-x-2"><Checkbox id="terms" /><Label htmlFor="terms">이용약관에 동의합니다</Label></div></CardContent></Card></section>
                            <section id="radio"><Card><CardHeader><CardTitle>Radio Group</CardTitle><CardDescription>라디오 버튼 그룹</CardDescription></CardHeader><CardContent><RadioGroup defaultValue="option-1"><div className="flex items-center space-x-2"><RadioGroupItem value="option-1" id="opt-1" /><Label htmlFor="opt-1">옵션 1</Label></div></RadioGroup></CardContent></Card></section>
                            <section id="switch"><Card><CardHeader><CardTitle>Switch</CardTitle><CardDescription>토글 스위치</CardDescription></CardHeader><CardContent><div className="flex items-center justify-between"><Label htmlFor="airplane-mode">비행기 모드</Label><Switch id="airplane-mode" /></div></CardContent></Card></section>
                            <section id="tabs-inner"><Card><CardHeader><CardTitle>Tabs (구성 요소)</CardTitle><CardDescription>카드 내부 탭 네비게이션</CardDescription></CardHeader><CardContent><Tabs defaultValue="account" className="w-full"><TabsList className="grid w-full grid-cols-2"><TabsTrigger value="account">계정</TabsTrigger><TabsTrigger value="password">비밀번호</TabsTrigger></TabsList><TabsContent value="account" className="py-4 text-sm">계정 설정 영역입니다.</TabsContent></Tabs></CardContent></Card></section>
                            <section id="accordion"><Card><CardHeader><CardTitle>Accordion</CardTitle><CardDescription>접을 수 있는 콘텐츠</CardDescription></CardHeader><CardContent><Accordion type="single" collapsible><AccordionItem value="i1"><AccordionTrigger>아코디언이란?</AccordionTrigger><AccordionContent>내용을 숨기거나 보여줍니다.</AccordionContent></AccordionItem></Accordion></CardContent></Card></section>
                            <section id="progress"><Card><CardHeader><CardTitle>Progress</CardTitle><CardDescription>진행률 표시</CardDescription></CardHeader><CardContent className="space-y-4"><Progress value={progress} /><Button onClick={simulateProgress} size="sm">시뮬레이션</Button></CardContent></Card></section>
                            <section id="avatar"><Card><CardHeader><CardTitle>Avatar</CardTitle><CardDescription>사용자 아바타</CardDescription></CardHeader><CardContent><div className="flex gap-4"><Avatar><AvatarImage src="https://github.com/shadcn.png" /><AvatarFallback>CN</AvatarFallback></Avatar></div></CardContent></Card></section>
                            <section id="separator"><Card><CardHeader><CardTitle>Separator</CardTitle><CardDescription>구분선</CardDescription></CardHeader><CardContent><p className="text-sm">섹션 1</p><Separator className="my-4" /><p className="text-sm">섹션 2</p></CardContent></Card></section>
                            <section id="dialog"><Card><CardHeader><CardTitle>Dialog</CardTitle><CardDescription>모달 다이얼로그</CardDescription></CardHeader><CardContent><Dialog><DialogTrigger asChild><Button>다이얼로그 열기</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>제목</DialogTitle><DialogDescription>설명입니다.</DialogDescription></DialogHeader><DialogFooter><Button>확인</Button></DialogFooter></DialogContent></Dialog></CardContent></Card></section>
                            <section id="sheet"><Card><CardHeader><CardTitle>Sheet</CardTitle><CardDescription>사이드 드로어</CardDescription></CardHeader><CardContent><Sheet><SheetTrigger asChild><Button variant="outline">Sheet 열기</Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>메뉴</SheetTitle><SheetDescription>내용입니다.</SheetDescription></SheetHeader></SheetContent></Sheet></CardContent></Card></section>
                            <section id="toast"><Card><CardHeader><CardTitle>Toast (Sonner)</CardTitle><CardDescription>알림 스타일</CardDescription></CardHeader><CardContent className="flex gap-2"><Button onClick={() => toast.success('성공!')}>Success</Button></CardContent></Card></section>
                            <section id="skeleton"><Card><CardHeader><CardTitle>Skeleton</CardTitle><CardDescription>로딩 스켈레톤</CardDescription></CardHeader><CardContent className="space-y-4"><Button onClick={simulateLoading} disabled={loading} size="sm">{loading ? '로딩 중...' : '시뮬레이션'}</Button>{loading ? <div className="space-y-2"><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-4/5" /></div> : <p className="text-sm">로딩 완료.</p>}</CardContent></Card></section>
                        </TabsContent>

                        <TabsContent value="forms" className="space-y-8 mt-6">
                            <section id="login"><Card><CardHeader><div className="flex items-center gap-2"><LogIn className="h-5 w-5" /><CardTitle>로그인 폼</CardTitle></div><CardDescription>이메일과 비밀번호로 로그인하세요.</CardDescription></CardHeader>                  <form onSubmit={(e) => { e.preventDefault(); void loginForm.handleSubmit(onLoginSubmit)(e); }}><CardContent className="space-y-4"><div className="space-y-2"><Label htmlFor="login-email">이메일</Label><Input id="login-email" {...loginForm.register('email')} placeholder="example@email.com" /></div><div className="space-y-2"><Label htmlFor="login-password">비밀번호</Label><Input id="login-password" type="password" {...loginForm.register('password')} /></div></CardContent><CardFooter><Button type="submit" className="w-full" disabled={loginForm.formState.isSubmitting}>로그인</Button></CardFooter></form></Card></section>
                            <section id="signup"><Card><CardHeader><div className="flex items-center gap-2"><UserPlus className="h-5 w-5" /><CardTitle>회원가입 폼</CardTitle></div><CardDescription>새 계정을 만들어보세요.</CardDescription></CardHeader>                  <form onSubmit={(e) => { e.preventDefault(); void signupForm.handleSubmit(onSignupSubmit)(e); }}><CardContent className="space-y-4"><div className="space-y-2"><Label htmlFor="reg-name">이름</Label><Input id="reg-name" {...signupForm.register('name')} placeholder="홍길동" /></div><div className="space-y-2"><Label htmlFor="reg-email">이메일</Label><Input id="reg-email" {...signupForm.register('email')} /></div><div className="space-y-2"><Label htmlFor="reg-pass">비밀번호</Label><Input id="reg-pass" type="password" {...signupForm.register('password')} /></div></CardContent><CardFooter><Button type="submit" className="w-full" disabled={signupForm.formState.isSubmitting}>회원가입</Button></CardFooter></form></Card></section>
                            <section id="search"><Card><CardHeader><div className="flex items-center gap-2"><SearchIcon className="h-5 w-5" /><CardTitle>검색 폼</CardTitle></div></CardHeader>                  <form onSubmit={(e) => { e.preventDefault(); void searchForm.handleSubmit(onSearchSubmit)(e); }}><CardContent className="space-y-4"><div className="space-y-2"><Label htmlFor="sm-query">검색어</Label><Input id="sm-query" {...searchForm.register('query')} placeholder="상품명을 입력하세요" /></div></CardContent><CardFooter><Button type="submit" className="w-full" disabled={searchForm.formState.isSubmitting}>검색</Button></CardFooter></form></Card></section>
                        </TabsContent>

                        <TabsContent value="layout" className="space-y-12 mt-6">
                            <GridLayoutDemo /><Separator /><FlexLayoutDemo /><Separator /><ContainerDemo /><Separator /><StickyDemo /><Separator /><SidebarLayoutDemo /><Separator /><BreakpointsDemo />
                        </TabsContent>

                        <TabsContent value="hooks" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <UseLocalStorageDemo /><UseMediaQueryDemo /><UseDebounceDemo /><UseCountdownDemo /><UseOnClickOutsideDemo /><UseCopyToClipboardDemo /><UseIntervalDemo /><UseWindowSizeDemo />
                        </TabsContent>

                        <TabsContent value="data-fetching" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {serverFetchDemo}<ClientFetchDemo />{suspenseDemo}<ErrorBoundaryDemo /><LoadingStatesDemo />
                        </TabsContent>

                        <TabsContent value="optimization" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <ImageDemo /><FontDemo /><MetadataDemo /><DynamicImportDemo /><PrefetchDemo /><EnvDemo />
                        </TabsContent>
                    </Tabs>
                </div>
            </Container>
        </>
    );
}
