'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function FlexLayoutDemo() {
    return (
        <div className="space-y-8">
            <section>
                <h3 className="text-lg font-semibold mb-4 text-primary">기본 Flex Row & Justify</h3>
                <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg flex justify-start gap-4">
                        <Badge className="h-10 w-20 justify-center">Start</Badge>
                        <Badge className="h-10 w-20 justify-center">Item</Badge>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg flex justify-center gap-4">
                        <Badge className="h-10 w-20 justify-center">Center</Badge>
                        <Badge className="h-10 w-20 justify-center">Item</Badge>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg flex justify-end gap-4">
                        <Badge className="h-10 w-20 justify-center">End</Badge>
                        <Badge className="h-10 w-20 justify-center">Item</Badge>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg flex justify-between">
                        <Badge className="h-10 w-20 justify-center">Between</Badge>
                        <Badge className="h-10 w-20 justify-center">Item</Badge>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-4 text-primary">Flex Wrap 패턴</h3>
                <div className="flex flex-wrap gap-2 max-w-sm p-4 border rounded-lg bg-muted/10">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <Badge key={i} variant="outline" className="px-3 py-1">Tag {i + 1}</Badge>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-4 text-primary">Align Items (Center)</h3>
                <div className="h-40 bg-muted/30 rounded-lg flex items-center justify-center gap-8">
                    <div className="h-20 w-20 bg-primary rounded-full shadow-lg" />
                    <div className="space-y-2">
                        <div className="h-4 w-32 bg-primary/40 rounded" />
                        <div className="h-4 w-48 bg-primary/20 rounded" />
                    </div>
                </div>
            </section>
        </div>
    );
}
