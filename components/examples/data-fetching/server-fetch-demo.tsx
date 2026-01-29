import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Post {
    id: number;
    title: string;
    body: string;
}

async function getPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
        next: { revalidate: 3600 }, // ISR: 1 hour
    });
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
}

export async function ServerFetchDemo() {
    const posts = await getPosts();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Server Component Fetch</CardTitle>
                <CardDescription>서버에서 직접 데이터를 가져와 렌더링합니다 (SEO 최적화).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="p-4 border rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">Post #{post.id}</Badge>
                            <h4 className="font-bold text-sm truncate">{post.title}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">{post.body}</p>
                    </div>
                ))}
                <p className="text-[10px] text-muted-foreground italic text-center">
                    * 이 데이터는 빌드 시 또는 서버 런타임에 fetch 되었습니다.
                </p>
            </CardContent>
        </Card>
    );
}
