import Link from 'next/link';
import { blogPosts } from '../app/blogdata/data';

function BlogsNavbar() {
  return (
    <div className='my-10 md:mx-20 mx-10'>
      <ul className='flex sm:justify-start sm:text-[16px] text-sm flex-wrap sm:gap-[25px_18px] gap-[25px_10px]  my-4'>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              className='border-2 border-[#4CAF50] text-[#4CAF50] sm:px-4 px-2 py-2 hover:bg-[#4CAF50] hover:text-white transition-all rounded-md'
              href={`/blog/${post.slug}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogsNavbar;
