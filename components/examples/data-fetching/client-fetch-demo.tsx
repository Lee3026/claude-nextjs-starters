'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { RefreshCcw, User } from 'lucide-react';

interface UserData {
    id: number;
    name: string;
    email: string;
}

export function ClientFetchDemo() {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 10) + 1}`);
            if (!res.ok) throw new Error('데이터 로드 실패');
            const data = await res.json();
            setUser(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : '알 수 없는 오류');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Client Component Fetch</CardTitle>
                <CardDescription>useState와 useEffect를 사용한 클라이언트 사이드 페칭입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {loading ? (
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[200px]" />
                            <Skeleton className="h-4 w-[150px]" />
                        </div>
                    </div>
                ) : error ? (
                    <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-sm">{error}</div>
                ) : user ? (
                    <div className="flex items-center gap-4 p-4 border rounded-lg bg-secondary/20">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            <User />
                        </div>
                        <div>
                            <p className="font-bold">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                    </div>
                ) : null}

                <Button
                    variant="outline"
                    size="sm"
                    onClick={fetchUser}
                    disabled={loading}
                    className="w-full"
                >
                    <RefreshCcw className={`h-4 w-4 mr-2 ${loading && 'animate-spin'}`} />
                    랜덤 유저 불러오기
                </Button>
            </CardContent>
        </Card>
    );
}
