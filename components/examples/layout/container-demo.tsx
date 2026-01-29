'use client';

import { Badge } from '@/components/ui/badge';

export function ContainerDemo() {
    return (
        <div className="space-y-8">
            <section className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">Container Max-Widths</h3>
                <p className="text-sm text-muted-foreground"><code>max-w-*</code> 클래스를 이용한 가독성 높은 레이아웃 예제입니다.</p>

                <div className="space-y-4 pt-4">
                    <div className="max-w-xs mx-auto p-4 bg-primary/10 border border-primary/20 rounded text-center text-xs">
                        Max-W-XS (320px) - 사이드바나 좁은 폼용
                    </div>
                    <div className="max-w-md mx-auto p-4 bg-primary/10 border border-primary/20 rounded text-center text-sm">
                        Max-W-MD (448px) - 로그인/회원가입 카드용
                    </div>
                    <div className="max-w-2xl mx-auto p-4 bg-primary/10 border border-primary/20 rounded text-center">
                        Max-W-2XL (672px) - 가독성 높은 본문 텍스트용
                    </div>
                    <div className="max-w-5xl mx-auto p-4 bg-primary/10 border border-primary/20 rounded text-center font-bold">
                        Max-W-5XL (1024px) - 일반적인 대시보드 콘텐츠 영역
                    </div>
                    <div className="w-full p-4 bg-secondary/50 border rounded text-center opacity-50 italic">
                        W-Full (100%) - 푸터나 전체 배경 영역
                    </div>
                </div>
            </section>
        </div>
    );
}
