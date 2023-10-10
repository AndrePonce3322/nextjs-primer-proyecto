import Image from 'next/image';

const fetchComments = async ({ id }) => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60,
      },
    }
  ).then((response) => response.json());
};

export async function ListOfComments({ id }) {
  const comments = await fetchComments({ id });

  return comments.map((comment) => (
    <li>
      <h1 className='flex gap-2 items-end'>
        <Image
          src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${comment.name}`}
          alt={comment.name}
          width={40}
          height={40}
          placeholder='blur'
          blurDataURL='data...'
        />
        <span className='text font-semibold'>{comment.name} </span>
        <span className='text-sm opacity-60'>{comment.email}</span>
      </h1>
      <p className='text-sm'>{comment.body}</p>
    </li>
  ));
}
