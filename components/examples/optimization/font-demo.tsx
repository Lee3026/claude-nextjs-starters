'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function FontDemo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>next/font Optimization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Variable Font (Inter)</p>
                        <p className="text-2xl font-black tracking-tighter">THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG</p>
                    </div>
                    <div className="h-px bg-muted" />
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Korean Font Optimization</p>
                        <p className="text-lg">모던 웹 애플리케이션을 위한 최적화된 폰트 로딩 시스템</p>
                    </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary">Zero Layout Shift</Badge>
                        <Badge variant="secondary">Preloaded</Badge>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        Next.js는 Google Fonts를 빌드 시 다운로드하여 로컬 파일로 서빙합니다. 브라우저가 직접 Google 서버로 요청을 보내지 않아 개인정보 보호에 유리하며, FOIT/FOUT 방지 설정을 자동으로 포함합니다.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
