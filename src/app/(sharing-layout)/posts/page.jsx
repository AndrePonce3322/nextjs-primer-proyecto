import { ListOfPost } from './ListOfPost';

export default async function PostPage() {
  return (
    <main className='text-3xl'>
      <article className='flex flex-col gap-4'>
        <ListOfPost />
      </article>
    </main>
  );
}
