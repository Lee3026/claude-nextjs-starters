'use client';

import { useState, useEffect } from 'react';
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
import { AlertCircle, Info, Menu, X } from 'lucide-react';

// 사이드바 메뉴 항목들
const menuItems = [
  { id: 'button', label: 'Button' },
  { id: 'card', label: 'Card' },
  { id: 'badge', label: 'Badge' },
  { id: 'alert', label: 'Alert' },
  { id: 'input', label: 'Input' },
  { id: 'select', label: 'Select' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'radio', label: 'Radio Group' },
  { id: 'switch', label: 'Switch' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'accordion', label: 'Accordion' },
  { id: 'progress', label: 'Progress' },
  { id: 'avatar', label: 'Avatar' },
  { id: 'separator', label: 'Separator' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'sheet', label: 'Sheet' },
  { id: 'toast', label: 'Toast' },
  { id: 'skeleton', label: 'Skeleton' },
];

export default function ComponentsPage() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('button');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 헤더 높이 고려
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
      const sections = menuItems.map(item => document.getElementById(item.id));
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
            <h2 className="font-semibold text-lg mb-4">컴포넌트 목록</h2>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 lg:ml-64 pb-0">
          <Container className="py-12">
            <div className="space-y-12">
              {/* 페이지 헤더 */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">컴포넌트 쇼케이스</h1>
                <p className="text-muted-foreground">
                  ShadcnUI 컴포넌트들의 다양한 사용 예제를 확인하세요.
                </p>
              </div>

              {/* Button 섹션 */}
              <section id="button">
                <Card>
                  <CardHeader>
                    <CardTitle>Button</CardTitle>
                    <CardDescription>다양한 버튼 스타일과 크기</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Variants</p>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="default">Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Sizes</p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Card 섹션 */}
              <section id="card">
                <Card>
                  <CardHeader>
                    <CardTitle>Card</CardTitle>
                    <CardDescription>다양한 카드 레이아웃 예제</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <Card>
                        <CardHeader>
                          <CardTitle>기본 카드</CardTitle>
                          <CardDescription>Header, Content, Footer</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            카드는 콘텐츠를 그룹화하는 컨테이너입니다.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" onClick={() => toast.info('카드 버튼 클릭!')}>
                            자세히 보기
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <AlertCircle className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-base">프로젝트 카드</CardTitle>
                              <CardDescription>아이콘 포함</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">진행률</span>
                              <span className="font-medium">75%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                              <div className="h-full w-3/4 bg-primary" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardDescription>총 방문자</CardDescription>
                          <CardTitle className="text-3xl font-bold">12,345</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="secondary">
                              <span className="text-green-600 dark:text-green-400">↑ 12.5%</span>
                            </Badge>
                            <span className="text-muted-foreground">지난 달 대비</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Badge 섹션 */}
              <section id="badge">
                <Card>
                  <CardHeader>
                    <CardTitle>Badge</CardTitle>
                    <CardDescription>상태 표시 뱃지</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Alert 섹션 */}
              <section id="alert">
                <Card>
                  <CardHeader>
                    <CardTitle>Alert</CardTitle>
                    <CardDescription>알림 메시지</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>안내</AlertTitle>
                      <AlertDescription>
                        이것은 기본 알림 메시지입니다.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>오류</AlertTitle>
                      <AlertDescription>
                        문제가 발생했습니다. 다시 시도해주세요.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </section>

              {/* Input 섹션 */}
              <section id="input">
                <Card>
                  <CardHeader>
                    <CardTitle>Input</CardTitle>
                    <CardDescription>텍스트 입력 필드</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일</Label>
                      <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">비밀번호</Label>
                      <Input id="password" type="password" placeholder="********" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="disabled">비활성화됨</Label>
                      <Input id="disabled" disabled placeholder="비활성화된 입력" />
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Select 섹션 */}
              <section id="select">
                <Card>
                  <CardHeader>
                    <CardTitle>Select</CardTitle>
                    <CardDescription>드롭다운 선택</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>과일 선택</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="과일을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apple">사과</SelectItem>
                          <SelectItem value="banana">바나나</SelectItem>
                          <SelectItem value="orange">오렌지</SelectItem>
                          <SelectItem value="grape">포도</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Checkbox 섹션 */}
              <section id="checkbox">
                <Card>
                  <CardHeader>
                    <CardTitle>Checkbox</CardTitle>
                    <CardDescription>체크박스 선택</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        이용약관에 동의합니다
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <label htmlFor="marketing" className="text-sm font-medium leading-none">
                        마케팅 정보 수신에 동의합니다
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="disabled" disabled />
                      <label htmlFor="disabled" className="text-sm font-medium leading-none opacity-70">
                        비활성화된 체크박스
                      </label>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Radio Group 섹션 */}
              <section id="radio">
                <Card>
                  <CardHeader>
                    <CardTitle>Radio Group</CardTitle>
                    <CardDescription>라디오 버튼 그룹</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup defaultValue="option-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-1" id="option-1" />
                        <Label htmlFor="option-1">옵션 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-2" id="option-2" />
                        <Label htmlFor="option-2">옵션 2</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-3" id="option-3" />
                        <Label htmlFor="option-3">옵션 3</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </section>

              {/* Switch 섹션 */}
              <section id="switch">
                <Card>
                  <CardHeader>
                    <CardTitle>Switch</CardTitle>
                    <CardDescription>토글 스위치</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="airplane-mode">비행기 모드</Label>
                      <Switch id="airplane-mode" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications">알림</Label>
                      <Switch id="notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between opacity-50">
                      <Label htmlFor="disabled-switch">비활성화</Label>
                      <Switch id="disabled-switch" disabled />
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Tabs 섹션 */}
              <section id="tabs">
                <Card>
                  <CardHeader>
                    <CardTitle>Tabs</CardTitle>
                    <CardDescription>탭 네비게이션</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="account" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="account">계정</TabsTrigger>
                        <TabsTrigger value="password">비밀번호</TabsTrigger>
                        <TabsTrigger value="settings">설정</TabsTrigger>
                      </TabsList>
                      <TabsContent value="account" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">이름</Label>
                          <Input id="name" placeholder="홍길동" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">사용자명</Label>
                          <Input id="username" placeholder="@username" />
                        </div>
                      </TabsContent>
                      <TabsContent value="password" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current">현재 비밀번호</Label>
                          <Input id="current" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new">새 비밀번호</Label>
                          <Input id="new" type="password" />
                        </div>
                      </TabsContent>
                      <TabsContent value="settings">
                        <p className="text-sm text-muted-foreground">
                          설정 옵션이 여기에 표시됩니다.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>

              {/* Accordion 섹션 */}
              <section id="accordion">
                <Card>
                  <CardHeader>
                    <CardTitle>Accordion</CardTitle>
                    <CardDescription>접을 수 있는 콘텐츠</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>아코디언이란 무엇인가요?</AccordionTrigger>
                        <AccordionContent>
                          아코디언은 사용자가 클릭하여 콘텐츠를 표시하거나 숨길 수 있는
                          수직으로 쌓인 인터랙티브 헤딩 세트입니다.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>스타일링이 가능한가요?</AccordionTrigger>
                        <AccordionContent>
                          네, Tailwind CSS를 사용하여 원하는 대로 스타일링할 수 있습니다.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>애니메이션이 있나요?</AccordionTrigger>
                        <AccordionContent>
                          네, Radix UI를 기반으로 하여 부드러운 애니메이션이 기본으로 제공됩니다.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </section>

              {/* Progress 섹션 */}
              <section id="progress">
                <Card>
                  <CardHeader>
                    <CardTitle>Progress</CardTitle>
                    <CardDescription>진행률 표시</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>진행률</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} />
                    </div>
                    <Button onClick={simulateProgress}>진행률 시뮬레이션</Button>
                  </CardContent>
                </Card>
              </section>

              {/* Avatar 섹션 */}
              <section id="avatar">
                <Card>
                  <CardHeader>
                    <CardTitle>Avatar</CardTitle>
                    <CardDescription>사용자 아바타</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 items-center">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-16 w-16">
                        <AvatarFallback>LG</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Separator 섹션 */}
              <section id="separator">
                <Card>
                  <CardHeader>
                    <CardTitle>Separator</CardTitle>
                    <CardDescription>구분선</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm">섹션 1</p>
                      <Separator className="my-4" />
                      <p className="text-sm">섹션 2</p>
                      <Separator className="my-4" />
                      <p className="text-sm">섹션 3</p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Dialog 섹션 */}
              <section id="dialog">
                <Card>
                  <CardHeader>
                    <CardTitle>Dialog</CardTitle>
                    <CardDescription>모달 다이얼로그</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>다이얼로그 열기</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>다이얼로그 제목</DialogTitle>
                          <DialogDescription>
                            다이얼로그 설명이 여기에 표시됩니다.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p>다이얼로그 콘텐츠 영역입니다.</p>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">취소</Button>
                          <Button>확인</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </section>

              {/* Sheet 섹션 */}
              <section id="sheet">
                <Card>
                  <CardHeader>
                    <CardTitle>Sheet</CardTitle>
                    <CardDescription>사이드 드로어</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline">Left Sheet</Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                          <SheetHeader>
                            <SheetTitle>Left Sheet</SheetTitle>
                            <SheetDescription>
                              왼쪽에서 열리는 Sheet입니다.
                            </SheetDescription>
                          </SheetHeader>
                        </SheetContent>
                      </Sheet>

                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline">Right Sheet</Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                          <SheetHeader>
                            <SheetTitle>Right Sheet</SheetTitle>
                            <SheetDescription>
                              오른쪽에서 열리는 Sheet입니다.
                            </SheetDescription>
                          </SheetHeader>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Toast 섹션 */}
              <section id="toast">
                <Card>
                  <CardHeader>
                    <CardTitle>Toast (Sonner)</CardTitle>
                    <CardDescription>다양한 토스트 알림 스타일</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      <Button
                        onClick={() => toast.success('작업 완료!', {
                          description: '파일이 성공적으로 업로드되었습니다.',
                        })}
                      >
                        Success
                      </Button>

                      <Button
                        onClick={() => toast.error('오류 발생!', {
                          description: '네트워크 연결을 확인해주세요.',
                        })}
                        variant="destructive"
                      >
                        Error
                      </Button>

                      <Button
                        onClick={() => toast.info('안내 메시지', {
                          description: '새로운 업데이트가 있습니다.',
                        })}
                        variant="outline"
                      >
                        Info
                      </Button>

                      <Button
                        onClick={() => toast.warning('주의!', {
                          description: '저장하지 않은 변경사항이 있습니다.',
                        })}
                        variant="secondary"
                      >
                        Warning
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex flex-wrap gap-2">
                      <Button
                        onClick={() => toast('파일 삭제', {
                          description: '정말로 이 파일을 삭제하시겠습니까?',
                          action: {
                            label: '실행 취소',
                            onClick: () => toast.success('삭제가 취소되었습니다'),
                          },
                        })}
                        size="sm"
                        variant="outline"
                      >
                        액션 포함
                      </Button>

                      <Button
                        onClick={() => toast.promise(
                          new Promise((resolve) => setTimeout(resolve, 2000)),
                          {
                            loading: '로딩 중...',
                            success: '데이터를 불러왔습니다!',
                            error: '데이터 로드 실패',
                          }
                        )}
                        size="sm"
                        variant="outline"
                      >
                        Promise
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Skeleton 섹션 */}
              <section id="skeleton">
                <Card>
                  <CardHeader>
                    <CardTitle>Skeleton</CardTitle>
                    <CardDescription>로딩 스켈레톤</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button onClick={simulateLoading} disabled={loading}>
                      {loading ? '로딩 중...' : '로딩 시뮬레이션'}
                    </Button>

                    {loading ? (
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[90%]" />
                        <Skeleton className="h-4 w-[80%]" />
                        <div className="flex gap-2 mt-4">
                          <Skeleton className="h-10 w-20" />
                          <Skeleton className="h-10 w-20" />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p>로딩이 완료되었습니다!</p>
                        <p className="text-sm text-muted-foreground">
                          Skeleton 컴포넌트는 콘텐츠가 로드되는 동안 표시됩니다.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </section>
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
