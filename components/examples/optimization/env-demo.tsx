'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Eye } from 'lucide-react';

export function EnvDemo() {
    // 실제 환경변수가 없을 경우 대비
    const publicVar = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    return (
        <Card>
            <CardHeader>
                <CardTitle>Environment Variables</CardTitle>
                <CardDescription>서버와 클라이언트 환경변수를 구분하여 보안을 유지합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-4">
                    <div className="p-4 bg-green-500/5 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Eye className="h-4 w-4 text-green-600" />
                            <span className="text-xs font-bold text-green-700 uppercase">Public Variable</span>
                        </div>
                        <code className="text-xs bg-black/5 p-1 rounded">NEXT_PUBLIC_APP_URL</code>
                        <p className="mt-2 font-mono text-sm text-green-800">{publicVar}</p>
                    </div>

                    <div className="p-4 bg-red-500/5 border border-red-200 rounded-lg opacity-80">
                        <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-red-600" />
                            <span className="text-xs font-bold text-red-700 uppercase">Private Variable</span>
                        </div>
                        <code className="text-xs bg-black/5 p-1 rounded">DATABASE_URL</code>
                        <p className="mt-2 font-mono text-sm text-red-800">********************</p>
                        <p className="text-[10px] text-red-600 mt-1 italic">* 이 값은 브라우저(클라이언트)에서 조회할 수 없습니다.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
