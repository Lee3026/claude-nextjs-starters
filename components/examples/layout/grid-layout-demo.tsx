'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function GridLayoutDemo() {
    return (
        <div className="space-y-8">
            <section>
                <h3 className="text-lg font-semibold mb-4 text-primary">반응형 컬럼 그리드</h3>
                <p className="text-sm text-muted-foreground mb-4">화면 크기에 따라 컬럼 수가 변하는 <code>grid-cols-*</code> 패턴입니다.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <Card key={i} className="bg-muted/50 border-dashed">
                            <CardContent className="p-6 flex items-center justify-center">
                                <span className="font-bold text-2xl opacity-20">Card {i}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-4 text-primary">Gap 조절 예제</h3>
                <div className="grid grid-cols-3 gap-8 mb-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-16 bg-primary/20 rounded flex items-center justify-center">Gap 8</div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-16 bg-primary/20 rounded flex items-center justify-center">Gap 2</div>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-4 text-primary">그리드 스팬 (Grid Span)</h3>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-4 md:col-span-2 h-20 bg-secondary rounded flex items-center justify-center font-medium">Col Span 2 (All on Mobile)</div>
                    <div className="col-span-2 md:col-span-1 h-20 bg-muted border rounded flex items-center justify-center">Col Span 1</div>
                    <div className="col-span-2 md:col-span-1 h-20 bg-muted border rounded flex items-center justify-center">Col Span 1</div>
                    <div className="col-span-4 h-20 bg-primary text-primary-foreground rounded flex items-center justify-center font-bold italic">Full Width Span 4</div>
                </div>
            </section>
        </div>
    );
}
