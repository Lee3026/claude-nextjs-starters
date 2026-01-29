'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2 } from 'lucide-react';

export function LoadingStatesDemo() {
    const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

    const startTask = () => {
        setState('loading');
        setTimeout(() => setState('success'), 2000);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Loading States</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 border p-4 rounded-lg">
                        <p className="text-[10px] font-bold uppercase text-muted-foreground mb-2">Spinner Pattern</p>
                        <Button
                            className="w-full"
                            disabled={state === 'loading'}
                            onClick={startTask}
                        >
                            {state === 'loading' ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    처리 중...
                                </>
                            ) : '작업 시작'}
                        </Button>
                    </div>

                    <div className="space-y-2 border p-4 rounded-lg">
                        <p className="text-[10px] font-bold uppercase text-muted-foreground mb-2">Skeleton Pattern</p>
                        {state === 'loading' ? (
                            <div className="space-y-2">
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        ) : (
                            <div className="h-14 flex items-center justify-center bg-muted/20 rounded-lg border border-dashed">
                                <span className="text-xs text-muted-foreground">
                                    {state === 'success' ? '✅ 완료되었습니다!' : '대기 중'}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
