import Image from "next/image";

export default function About() {
  return (
    <div className="sm:mx-20 mx-5 pt-12 h-auto">
      {/* Page Title */}
      <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-semibold text-[#333333] my-3">
        About <span className="text-[#4CAF50]">MindCare</span>
      </h1>

      {/* Introduction Section */}
      <div className="text-lg text-[#666666] mt-5">
        <p className="md:w-[70%] w-full mx-auto text-center">
          MindCare is your trusted resource for mental health awareness and self-care. Our mission is to create a supportive space where individuals can explore strategies to nurture emotional well-being and mental resilience.
        </p>
      </div>

      {/* Section 1 */}
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/mental-health.jpg"
            alt="Mental Health Illustration"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#333333]">
            Why Mental Health Matters
          </h2>
          <p>
            Mental health is as essential as physical health. At MindCare, we believe in breaking the stigma and encouraging open conversations about mental wellness.
          </p>
          <p>
            Join us in building a community where everyone feels empowered to prioritize their mental well-being and seek the support they need.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div className="space-y-4 order-2 md:order-1">
          <h2 className="text-2xl font-bold text-[#333333]">
            The Role of Self-Care
          </h2>
          <p>
            Self-care is not a luxury; it is a necessity. Through our content, we guide you in discovering simple practices that can make a big difference in your daily life.
          </p>
          <p>
            From mindfulness exercises to stress management techniques, explore ways to stay mentally fit and emotionally balanced.
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/images/self-care.jpg"
            alt="Self-Care Illustration"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/community.jpg"
            alt="Community Illustration"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#333333]">
            Building a Supportive Community
          </h2>
          <p>
            Together, we can create a safe and welcoming space for everyone to share their journey. Our platform promotes compassion, understanding, and solidarity.
          </p>
          <p>
            Let’s connect, learn, and grow together as we prioritize mental health and emotional well-being.
          </p>
        </div>
      </div>

      {/* Closing Vision */}
      <div className="bg-[#f9f9f9] mt-12 mb-12 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold text-[#333333]">
          Our Vision
        </h3>
        <p className="mt-3 text-[#666666]">
          To create a world where mental health is prioritized, awareness is widespread, and resources are accessible to all.
        </p>
      </div>
    </div>
  );
}
