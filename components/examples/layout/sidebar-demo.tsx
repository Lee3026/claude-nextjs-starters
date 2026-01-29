'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeftOpen, Search, Home, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SidebarLayoutDemo() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">Responsive Sidebar Layout</h3>
            <p className="text-sm text-muted-foreground">접이식 사이드바와 메인 콘텐츠 영역이 조화를 이루는 패턴입니다.</p>

            <div className="flex h-[400px] w-full border rounded-xl overflow-hidden bg-background">
                {/* Sidebar */}
                <aside
                    className={cn(
                        "transition-all duration-300 border-r bg-muted/20 flex flex-col",
                        collapsed ? "w-16" : "w-64"
                    )}
                >
                    <div className="p-4 border-b flex items-center justify-between">
                        {!collapsed && <span className="font-bold text-sm">Dashboard</span>}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setCollapsed(!collapsed)}
                            className="h-8 w-8"
                        >
                            {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                        </Button>
                    </div>

                    <nav className="flex-1 p-2 space-y-1">
                        {[
                            { icon: Home, label: 'Home' },
                            { icon: Search, label: 'Search' },
                            { icon: User, label: 'Profile' },
                            { icon: Settings, label: 'Settings' },
                        ].map((item) => (
                            <Button
                                key={item.label}
                                variant="ghost"
                                className={cn("w-full justify-start gap-3", collapsed && "justify-center px-0")}
                            >
                                <item.icon className="h-5 w-5 shrink-0" />
                                {!collapsed && <span>{item.label}</span>}
                            </Button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col min-w-0">
                    <header className="h-14 border-b flex items-center px-6 bg-muted/5">
                        <h4 className="font-medium text-sm">페이지 제목</h4>
                    </header>
                    <div className="p-8 overflow-auto">
                        <div className="grid gap-4">
                            <div className="h-8 w-1/3 bg-muted rounded" />
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-24 bg-muted/40 rounded-lg" />
                                <div className="h-24 bg-muted/40 rounded-lg" />
                                <div className="h-24 bg-muted/40 rounded-lg" />
                            </div>
                            <div className="h-48 bg-muted/20 rounded-xl" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
