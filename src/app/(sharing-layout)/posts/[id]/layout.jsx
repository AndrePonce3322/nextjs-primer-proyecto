import Link from 'next/link';

const fetchSinglePost = async ({ id }) => {

  return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
};

export default async function Post({ params, children }) {
  const { id } = params;
  const post = await fetchSinglePost({ id });

  return (
    <article className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold text-blue-700'>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`} className='underline'>
        Ver comentarios
      </Link>
      {children}
    </article>
  );
}
