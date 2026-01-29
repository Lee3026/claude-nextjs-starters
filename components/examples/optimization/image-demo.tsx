'use client';

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ImageDemo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>next/image Optimization</CardTitle>
                <CardDescription>Lazy loading, Blur-up placeholder, WebP 변환을 자동으로 처리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="relative aspect-video rounded-xl overflow-hidden border">
                    <Image
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000"
                        alt="Coding Workspace"
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-2 left-2 flex gap-1">
                        <Badge className="bg-black/50 backdrop-blur-md border-none">Lazy Loaded</Badge>
                        <Badge className="bg-primary/80 border-none">Optimized</Badge>
                    </div>
                </div>
                <ul className="text-xs space-y-2 text-muted-foreground list-disc list-inside">
                    <li><strong>Layout Shift 방지</strong>: 종횡비 고정으로 CLS 감소</li>
                    <li><strong>이미지 크기 조정</strong>: 기기 너비에 알맞은 크기로 전송</li>
                    <li><strong>WebP/AVIF 자동 변환</strong>: 브라우저 지원에 맞는 차세대 형식 사용</li>
                </ul>
            </CardContent>
        </Card>
    );
}
