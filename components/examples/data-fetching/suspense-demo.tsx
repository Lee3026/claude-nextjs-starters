import { Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

async function SlowData() {
    // 인위적인 지연
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div className="p-4 bg-green-500/10 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
            ✅ 3초 뒤에 로드된 슬로우 데이터입니다.
        </div>
    );
}

function LoadingFallback() {
    return (
        <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-full" />
            <p className="text-[10px] text-center text-muted-foreground animate-pulse">데이터를 스트리밍 중입니다...</p>
        </div>
    );
}

export function SuspenseDemo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Suspense & Streaming</CardTitle>
            </CardHeader>
            <CardContent>
                <Suspense fallback={<LoadingFallback />}>
                    <SlowData />
                </Suspense>
                <p className="text-xs text-muted-foreground mt-4">
                    React Suspense를 사용하여 데이터가 준비될 때까지 폴백 스켈레톤을 표시합니다.
                </p>
            </CardContent>
        </Card>
    );
}
