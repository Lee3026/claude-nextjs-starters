'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Box } from 'lucide-react';

// 무거운 컴포넌트 시뮬레이션
const HeavyChart = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Activity })), {
    loading: () => <Skeleton className="h-[200px] w-full" />,
});

export function DynamicImportDemo() {
    const [show, setShow] = useState(false);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Dynamic Import (Code Splitting)</CardTitle>
                <CardDescription>필요할 때만 코드를 로드하여 초기 번들 크기를 줄입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {!show ? (
                    <div className="h-[200px] flex flex-col items-center justify-center border-2 border-dashed rounded-xl gap-4">
                        <Box className="h-10 w-10 text-muted-foreground animate-bounce" />
                        <Button onClick={() => setShow(true)}>무거운 모듈 로드하기</Button>
                    </div>
                ) : (
                    <div className="h-[200px] flex flex-col items-center justify-center bg-primary/5 rounded-xl gap-4 animate-in fade-in slide-in-from-bottom-2">
                        <div className="p-8 bg-background rounded-full shadow-lg">
                            <HeavyChart className="h-16 w-16 text-primary animate-pulse" />
                        </div>
                        <p className="text-sm font-bold">모듈 로드 완료!</p>
                        <Button variant="ghost" size="sm" onClick={() => setShow(false)}>언로드</Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
