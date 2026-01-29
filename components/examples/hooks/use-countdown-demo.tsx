'use client';

import { useCountdown } from 'usehooks-ts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Timer, RotateCcw, Play, Pause } from 'lucide-react';

export function UseCountdownDemo() {
    const [count, { startCountdown, stopCountdown, resetCountdown }] = useCountdown({
        countStart: 60,
        intervalMs: 1000,
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>useCountdown</CardTitle>
                <CardDescription>지정한 숫자부터 0까지 감소하는 카운트다운 훅입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                    <div className="relative h-32 w-32 flex items-center justify-center">
                        <svg className="h-full w-full -rotate-90">
                            <circle
                                cx="64"
                                cy="64"
                                r="60"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="8"
                                className="text-muted/20"
                            />
                            <circle
                                cx="64"
                                cy="64"
                                r="60"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeDasharray={377}
                                strokeDashoffset={377 - (377 * count) / 60}
                                className="text-primary transition-all duration-1000"
                            />
                        </svg>
                        <span className="absolute text-3xl font-black">{count}</span>
                    </div>

                    <div className="flex gap-2">
                        <Button size="sm" onClick={startCountdown}><Play className="h-4 w-4 mr-2" /> 시작</Button>
                        <Button size="sm" variant="outline" onClick={stopCountdown}><Pause className="h-4 w-4 mr-2" /> 정지</Button>
                        <Button size="sm" variant="ghost" onClick={resetCountdown}><RotateCcw className="h-4 w-4 mr-2" /> 리셋</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
