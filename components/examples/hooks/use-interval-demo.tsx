'use client';

import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function UseIntervalDemo() {
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState<number | null>(1000);
    const [isPlaying, setIsPlaying] = useState(true);

    useInterval(
        () => {
            setCount(prev => prev + 1);
        },
        isPlaying ? delay : null,
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>useInterval</CardTitle>
                <CardDescription>지정한 지연 시간마다 함수를 반복 실행합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-6xl font-black text-primary tabular-nums">
                        {count}
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant={isPlaying ? "outline" : "default"}
                            size="sm"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                            {isPlaying ? '일시정지' : '시작'}
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setCount(0)}
                        >
                            <RotateCcw className="h-4 w-4 mr-2" />
                            리셋
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">속도 조절</span>
                    <div className="flex gap-2">
                        {[500, 1000, 2000].map((d) => (
                            <Badge
                                key={d}
                                variant={delay === d ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => setDelay(d)}
                            >
                                {d / 1000}s
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
