'use client';

import { Card, CardContent } from '@/components/ui/card';

export function StickyDemo() {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">Sticky Positioning</h3>
            <p className="text-sm text-muted-foreground">스크롤 시 특정 요소가 화면에 고정되는 <code>sticky top-*</code> 패턴입니다.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3 space-y-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Card key={i} className="h-40 flex items-center justify-center bg-muted/10">
                            <span className="text-muted-foreground">메인 콘텐츠 영역 {i + 1}</span>
                        </Card>
                    ))}
                </div>
                <div className="relative">
                    <div className="sticky top-20 p-6 bg-primary/5 border-2 border-primary/20 rounded-xl space-y-4 shadow-sm">
                        <h4 className="font-bold text-primary flex items-center gap-2">
                            <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                            Sticky Sidebar
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            스크롤을 내려도 이 영역은 상단 80px(헤더 고려) 위치에 고정되어 따라옵니다. 스크롤이 끝부분에 도달하면 소멸되지 않고 컨테이너 내에서 유지됩니다.
                        </p>
                        <div className="h-1 w-full bg-primary/20 rounded" />
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-muted rounded" />
                            <div className="h-2 w-3/4 bg-muted rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
