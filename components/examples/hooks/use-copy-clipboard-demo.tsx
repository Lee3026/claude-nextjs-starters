'use client';

import { useCopyToClipboard } from 'usehooks-ts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function UseCopyToClipboardDemo() {
    const [value, copy] = useCopyToClipboard();
    const [text, setText] = useState('이 텍스트를 복사해보세요!');

    return (
        <Card>
            <CardHeader>
                <CardTitle>useCopyToClipboard</CardTitle>
                <CardDescription>텍스트를 클립보드에 복사하는 기능을 제공합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex gap-2">
                    <Input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="복사할 텍스트 입력"
                    />
                    <Button
                        onClick={() => copy(text)}
                        variant={value ? "outline" : "default"}
                        className="shrink-0"
                    >
                        {value ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                        {value ? '복사됨' : '복사'}
                    </Button>
                </div>
                {value && (
                    <p className="text-xs text-green-600 font-medium animate-in fade-in slide-in-from-top-1">
                        클립보드에 복사된 값: <span className="underline">{value}</span>
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
