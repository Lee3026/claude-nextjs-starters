'use client';

import { useState, useEffect } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

export function UseDebounceDemo() {
    const [input, setInput] = useState('');
    const [debouncedValue] = useDebounceValue(input, 500);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        if (input !== debouncedValue) {
            setSearching(true);
        } else {
            setSearching(false);
        }
    }, [input, debouncedValue]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>useDebounce</CardTitle>
                <CardDescription>입력이 멈춘 후 일정 시간(500ms) 뒤에 상태를 업데이트합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>검색어 입력</Label>
                    <div className="relative">
                        <Input
                            placeholder="타이핑을 시작해보세요..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        {searching && <Loader2 className="absolute right-3 top-3 h-4 w-4 animate-spin text-muted-foreground" />}
                    </div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg flex flex-col gap-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">결과</p>
                    <p className="text-sm">실시간 입력: <span className="font-mono text-muted-foreground">{input || '(비어있음)'}</span></p>
                    <p className="text-sm font-bold text-primary">디바운스된 값: <span className="font-mono">{debouncedValue || '(비어있음)'}</span></p>
                </div>
            </CardContent>
        </Card>
    );
}
