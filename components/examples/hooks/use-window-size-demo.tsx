'use client';

import { useWindowSize } from 'usehooks-ts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export function UseWindowSizeDemo() {
    const { width, height } = useWindowSize();

    return (
        <Card>
            <CardHeader>
                <CardTitle>useWindowSize</CardTitle>
                <CardDescription>브라우저 창의 너비와 높이를 실시간으로 추적합니다.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 border rounded-xl flex flex-col items-center justify-center gap-1">
                        <span className="text-xs text-muted-foreground uppercase font-bold">Width</span>
                        <span className="text-3xl font-black text-primary">{width}px</span>
                    </div>
                    <div className="p-4 bg-primary/5 border rounded-xl flex flex-col items-center justify-center gap-1">
                        <span className="text-xs text-muted-foreground uppercase font-bold">Height</span>
                        <span className="text-3xl font-black text-primary">{height}px</span>
                    </div>
                </div>
                <p className="text-[10px] text-center text-muted-foreground mt-4 italic">
                    창 크기를 조절하면 위 숫자가 즉시 변경됩니다.
                </p>
            </CardContent>
        </Card>
    );
}
