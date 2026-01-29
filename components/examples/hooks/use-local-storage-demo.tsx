'use client';

import { useLocalStorage } from 'usehooks-ts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function UseLocalStorageDemo() {
    const [value, setValue] = useLocalStorage('demo-storage-key', '기본값');

    return (
        <Card>
            <CardHeader>
                <CardTitle>useLocalStorage</CardTitle>
                <CardDescription>로컬 스토리지와 상태를 동기화합니다 (새로고침해도 유지됨).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>저장된 값</Label>
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <p className="text-sm text-muted-foreground">현재 값: <span className="font-mono font-bold text-primary">{value}</span></p>
                <Button variant="outline" size="sm" onClick={() => setValue('초기화됨')}>초기화</Button>
            </CardContent>
        </Card>
    );
}
