import { LikeButton } from './likeButton';
import Link from 'next/link';

const fetchPost = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
};

export async function ListOfPost() {
  const post = await fetchPost();

  return post.slice(0, 5).map((post) => (
    <section key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h1 className='text-xl font-bold text-blue-700'>{post.title}</h1>
        <p className='text-sm'>{post.body}</p>
      </Link>

      <LikeButton />
    </section>
  ));
}
