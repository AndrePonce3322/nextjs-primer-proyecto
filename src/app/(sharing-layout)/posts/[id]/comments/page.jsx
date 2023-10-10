import { ListOfComments } from './fetchComments';

export default function PageComments({ params }) {
  const { id } = params;

  return (
    <ul className='list-disc flex flex-col gap-2 pl-12'>
      <ListOfComments id={id} />
    </ul>
  );
}
