import Posts from './Posts';
import Stories from './Stories';

const Feed = () => {
  return (
    <main className="grid grid-col-1 md:grid-col-2 md:max-w-3-xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="">
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};
export default Feed;
