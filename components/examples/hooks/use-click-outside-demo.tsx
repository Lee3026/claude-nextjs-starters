'use client';

import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export function UseOnClickOutsideDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useOnClickOutside(ref as any, () => {
        if (isOpen) setIsOpen(false);
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>useOnClickOutside</CardTitle>
                <CardDescription>지정된 요소 외부를 클릭할 때 이벤트를 감지합니다 (모달/드롭다운용).</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center py-8">
                <div className="relative">
                    <Button onClick={() => setIsOpen(!isOpen)} variant={isOpen ? "secondary" : "default"}>
                        {isOpen ? '닫혀라!' : '팝업 열기'}
                    </Button>

                    {isOpen && (
                        <div
                            ref={ref}
                            className="absolute top-12 left-1/2 -translate-x-1/2 w-64 p-6 bg-background border-2 border-primary shadow-2xl rounded-xl z-10 animate-in fade-in zoom-in duration-200"
                        >
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <AlertCircle className="h-6 w-6" />
                                </div>
                                <h4 className="font-bold">외부 클릭 감시 중</h4>
                                <p className="text-xs text-muted-foreground">이 박스 밖의 영역을 클릭하면 박스가 닫힙니다.</p>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
