'use client'
import BlogsNavbar from '@/components/BlogsNavbar';
import { blogPosts } from '../../blogdata/data';
import Image from 'next/image';
import CommentsSection from '@/components/CommentsSection';



const BlogPost = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <div className='h-[70vh]'>
        <BlogsNavbar />
        <p className='text-center mt-20 text-3xl underline text-white'>Post not found</p>
      </div>
    )
  }
  return (
    <>
      <BlogsNavbar />
      <div className='flex flex-col gap-2 my-10 md:mx-20 sm:mx-10 sm:rounded-lg shadow-[0px_0px_7px_0px_grey] p-4 px-6 h-auto bg-white text-black'>
        <h1 className='sm:text-2xl text-xl mb-4 uppercase text-[#4CAF50]'>{post.title}</h1>
        {post.content.map((content, index) => {

          switch (content.type) {
            case 'heading':
              return <h2 className='sm:text-xl text-lg mt-4 text-[#4CAF50]' key={index}>{content.value}</h2>;
            case 'mainImage':
              return <Image className='sm:w-[500px] w-full sm:h-[300px] h-[200px]' src={content.value} alt='blog image' width={500} height={0} />
            case 'image':
              return <Image className='sm:w-[500px] w-full h-[300px]' src={content.value} alt='blog image' width={500} height={0} />
            case 'publish':
              return <p className='text-[#797575] font-semibold text-[13px]'>{content.value}</p>
            case 'paragraph':
              return <p className='sm:text-[16px] text-[14px]' key={index}>{content.value}</p>;
            default:
              return null;
          }
        })}
      </div>
      <div className='md:mx-20 sm:mx-10 mx-5 my-10 text-xl '>
        <CommentsSection />
      </div>
    </>
  )

}

export default BlogPost;
