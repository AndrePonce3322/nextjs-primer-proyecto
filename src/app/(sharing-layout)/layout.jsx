export default function PostLayout({ children }) {
  return (
    <main>
      <marquee className='text-sm font-bold text-center my-8 w-[300px] bg-white text-purple-700'>
        andreponce417@gmail.com - layout
      </marquee>
      <section>{children}</section>
    </main>
  );
}
