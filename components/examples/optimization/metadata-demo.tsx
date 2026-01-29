'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Share2 } from 'lucide-react';

export function MetadataDemo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>SEO & Metadata</CardTitle>
                <CardDescription>검색 결과와 소셜 공유 시 표시되는 메타데이터 관리입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="p-4 bg-muted/20 border rounded-lg space-y-4">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1">
                        <Search className="h-3 w-3" /> Search Preview
                    </p>
                    <div className="space-y-1">
                        <h4 className="text-[#1a0dab] text-xl font-normal hover:underline cursor-pointer">Examples | Next.js Starter</h4>
                        <p className="text-[#006621] text-sm">https://starter-demo.com/examples</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">다양한 Next.js와 React 패턴, 컴포넌트 실무 예제를 확인하세요. ShadcnUI, TailwindCSS 최적화 구성 포함.</p>
                    </div>
                </div>

                <div className="p-4 bg-muted/20 border rounded-lg space-y-4">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1">
                        <Share2 className="h-3 w-3" /> Social Share (OG Tag)
                    </p>
                    <div className="border rounded-lg overflow-hidden bg-background max-w-sm">
                        <div className="h-32 bg-primary/20 flex items-center justify-center font-bold text-primary">OG IMAGE</div>
                        <div className="p-3 bg-muted/50">
                            <p className="text-[10px] text-muted-foreground">starter-demo.com</p>
                            <h5 className="font-bold text-sm">Next.js 16 스타터킷 예제 모음</h5>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
