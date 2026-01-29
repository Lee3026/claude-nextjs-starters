'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCcw } from 'lucide-react';

function BuggyComponent() {
    throw new Error('의도적인 렌더링 에러가 발생했습니다!');
    return <div>실행되지 않는 코드</div>;
}

export function ErrorBoundaryDemo() {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <Card className="border-destructive bg-destructive/5 line-dashed">
                <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                        <AlertCircle className="h-8 w-8" />
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-bold text-destructive">에러 발생!</h4>
                        <p className="text-xs text-muted-foreground">컴포넌트 렌더링 중 문제가 발생했습니다.</p>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setHasError(false)}
                        className="border-destructive text-destructive hover:bg-destructive/10"
                    >
                        <RefreshCcw className="h-3 w-3 mr-2" />
                        다시 시도
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Error Boundary Pattern</CardTitle>
                <CardDescription>에러 발생 시 전체 페이지가 멈추지 않도록 부분적으로 처리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center py-8">
                <Button
                    variant="destructive"
                    onClick={() => setHasError(true)}
                >
                    에러 강제 발생시키기
                </Button>
                <p className="text-[10px] text-muted-foreground mt-4 italic">
                    실제 서비스에서는 <code>error.tsx</code> 파일을 통해 자동으로 처리됩니다.
                </p>
            </CardContent>
        </Card>
    );
}
