'use client';

import { Badge } from '@/components/ui/badge';

export function BreakpointsDemo() {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">Responsive Breakpoints</h3>
            <p className="text-sm text-muted-foreground">현재 화면 크기에 따라 변하는 요소를 통해 Tailwind 브레이크포인트를 시각화합니다.</p>

            <div className="grid gap-4">
                {/* Current Breakpoint Indicator */}
                <div className="p-6 rounded-xl border bg-muted/10 flex flex-col items-center justify-center gap-4 text-center">
                    <p className="text-sm font-medium">현재 브레이크포인트:</p>
                    <div className="flex gap-2">
                        <Badge variant="outline" className="hidden max-sm:flex bg-red-500/10 text-red-600 border-red-200">Default (&lt; 640px)</Badge>
                        <Badge variant="outline" className="hidden sm:flex md:hidden bg-orange-500/10 text-orange-600 border-orange-200">SM (≥ 640px)</Badge>
                        <Badge variant="outline" className="hidden md:flex lg:hidden bg-yellow-500/10 text-yellow-600 border-yellow-200">MD (≥ 768px)</Badge>
                        <Badge variant="outline" className="hidden lg:flex xl:hidden bg-green-500/10 text-green-600 border-green-200">LG (≥ 1024px)</Badge>
                        <Badge variant="outline" className="hidden xl:flex 2xl:hidden bg-blue-500/10 text-blue-600 border-blue-200">XL (≥ 1280px)</Badge>
                        <Badge variant="outline" className="hidden 2xl:flex bg-purple-500/10 text-purple-600 border-purple-200">2XL (≥ 1536px)</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground italic">브라우저 창 크기를 조절해보세요!</p>
                </div>

                {/* Visibility Examples */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="bg-red-500/5 lg:bg-transparent transition-colors">
                        <CardHeader className="p-4"><CardTitle className="text-sm">LG 미만에서 배경색 적용</CardTitle></CardHeader>
                    </Card>
                    <Card className="hidden sm:block">
                        <CardHeader className="p-4"><CardTitle className="text-sm">SM 이상에서만 보임</CardTitle></CardHeader>
                    </Card>
                    <Card className="md:border-primary/50">
                        <CardHeader className="p-4"><CardTitle className="text-sm">MD 이상에서 테두리 강조</CardTitle></CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    );
}

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
