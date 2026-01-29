'use client';

import { useMediaQuery } from 'usehooks-ts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

export function UseMediaQueryDemo() {
    const isMobile = useMediaQuery('(max-width: 639px)');
    const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <Card>
            <CardHeader>
                <CardTitle>useMediaQuery</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6 py-8">
                <div className="flex gap-8">
                    <div className={`flex flex-col items-center gap-2 transition-opacity ${isMobile ? 'opacity-100' : 'opacity-20'}`}>
                        <Smartphone className="h-10 w-10" />
                        <Badge variant={isMobile ? "default" : "outline"}>Mobile</Badge>
                    </div>
                    <div className={`flex flex-col items-center gap-2 transition-opacity ${isTablet ? 'opacity-100' : 'opacity-20'}`}>
                        <Tablet className="h-10 w-10" />
                        <Badge variant={isTablet ? "default" : "outline"}>Tablet</Badge>
                    </div>
                    <div className={`flex flex-col items-center gap-2 transition-opacity ${isDesktop ? 'opacity-100' : 'opacity-20'}`}>
                        <Monitor className="h-10 w-10" />
                        <Badge variant={isDesktop ? "default" : "outline"}>Desktop</Badge>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground italic">브라우저 가로 너비를 조절하면 아이콘이 활성화됩니다.</p>
            </CardContent>
        </Card>
    );
}
