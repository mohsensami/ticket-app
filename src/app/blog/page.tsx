import PostCard from '@/components/postCard/postCard';
import { getPosts } from '@/lib/data';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'description Blog',
};

// FETCH DATA WITH AN API
// const getPosts = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         cache: 'no-store',
//         // next: { revalidate: 60000 },
//     });
//     if (!res.ok) {
//         throw new Error('Something went wrong');
//     }
//     return res.json();
// };

export default async function Blog() {
    // const posts = await getPosts();
    const posts = await getPosts();
    return (
        <>
            <h1>Blog</h1>
            <div className="grid grid-cols-12 gap-4">
                {posts.map((post: any) => (
                    <div className="col-span-3" key={post.id}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </>
    );
}
