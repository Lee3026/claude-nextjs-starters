'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MousePointerClick } from 'lucide-react';

export function PrefetchDemo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Link Prefetching</CardTitle>
                <CardDescription>사용자가 클릭하기 전에 다음 페이지 코드를 백그라운드에서 미리 로드합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="p-6 border rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col items-center gap-4">
                    <MousePointerClick className="h-8 w-8 text-primary" />
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/" prefetch={true}>
                            <Badge className="px-4 py-2 text-sm cursor-pointer hover:scale-105 transition-transform">
                                홈으로 (Prefetch On)
                            </Badge>
                        </Link>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    뷰포트에 <code>&lt;Link&gt;</code> 태그가 들어오면 Next.js는 해당 경로의 데이터를 프리페치합니다. 이를 통해 실제 클릭 시 즉각적인 페이지 이동(Instant Navigation)을 구현합니다.
                </p>
            </CardContent>
        </Card>
    );
}
