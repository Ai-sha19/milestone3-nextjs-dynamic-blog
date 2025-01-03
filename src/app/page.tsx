import Link from "next/link";
import Image from "next/image"; // Import Image component
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="sm:mx-20 mx-5 pt-12 flex-grow">
        {/* Logo/Title */}
        <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-semibold text-[#333333] my-3">
          Hello! Welcome to <span className="text-[#4CAF50]">MindCare</span>
        </h1>

        {/* Introduction Section */}
        <div className="text-lg text-center text-[#666666] mb-10">
          <p className="md:w-[70%] w-full mx-auto">
            Welcome to MindCare, a space dedicated to promoting well-being and self-care. Whether you&apos;re looking for strategies to cope with stress, gain insights into emotional health, or explore mental health awareness, our blog offers thoughtful and supportive content to guide you on your journey.
          </p>
          <div className="inline-block bg-[#4CAF50] text-white py-3 px-6 mt-4 md:mt-8 rounded">
            <p>Stay Connected for informative content in the future.</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/banner.jpg" 
            alt="MindCare Banner"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Key Features Section */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-xl text-[#333333] mb-2">Self-Care Tips</h2>
            <p className="text-[#666666] text-sm">
              Discover daily habits to improve your mental and emotional well-being.
            </p>
          </div>
          <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-xl text-[#333333] mb-2">Stress Management</h2>
            <p className="text-[#666666] text-sm">
              Learn strategies to manage stress effectively and find inner peace.
            </p>
          </div>
          <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-xl text-[#333333] mb-2">Mental Health Blogs</h2>
            <p className="text-[#666666] text-sm">
              Explore a variety of topics about mental health and wellness.
            </p>
          </div>
        </div>

        {/* Buttons and Alert */}
        <div className="flex justify-center gap-4 my-5">
          <AlertDialog>
            <AlertDialogTrigger className="border-2 rounded-lg bg-[#666666] text-white hover:bg-black hover:text-white transition-all px-4 py-2">
              Create a Blog
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>This Feature is not Introduced yet</AlertDialogTitle>
                <AlertDialogDescription>
                  Explore our Interesting and Informative Blogs about mental health awareness and self-care practices.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Okay</AlertDialogCancel>
                <AlertDialogAction>
                  <Link href={"blog"}>Read Blogs</Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Link
            className="border-2 rounded-lg bg-[#666666] text-white hover:bg-black hover:text-white transition-all px-4 py-2"
            href={"blog"}
          >
            Read Blogs
          </Link>
        </div>
      </main>

   
    </div>
  );
}
