import Image, { StaticImageData } from "next/image"
import Link from "next/link"
function BlogsCard({image , title , content , button} : {image : string | StaticImageData , title : string, content : string, button : string}) {
  return (
    <div className='lg:w-[450px] md:w-[365px] sm:w-[500px] w-[350px] shadow-lg'>
        <div className="w-[100%] h-[250px]">
      <Image className="w-[100%] h-[100%]" src={image} alt="post image" />
        </div>
        <div className="h-[250px] flex flex-col gap-4 p-4 bg-white relative">
      <h1 className='text-2xl'>{title}</h1>
      <p>{content}</p>
      <Link className="hover:text-[#39863b] transition-all underline underline-offset-4 text-center" href={button}>Read Full Blog</Link>
        </div>
    </div>
  )
}

export default BlogsCard
