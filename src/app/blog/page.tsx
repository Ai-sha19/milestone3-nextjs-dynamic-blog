import BlogsCard from "@/components/BlogsCard";
import stressManagement1 from '../../../public/images/stressManagement1.jpg';
import mindfulness1 from '../../../public/images/mindfulness1.jpg';
import selfCare1 from '../../../public/images/selfCare1.png';
import mentalHealth1 from '../../../public/images/mentalHealth1.jpg';
import emotionalResilience1 from '../../../public/images/emotionalResilience1.jpg';
import skillsEveryday1 from '../../../public/images/skillsEveryday1.jpg';

export default function Blogs() {
  return (
    <div className="flex flex-col items-center mx-5 sm:mx-20">
      <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mt-10">
        Explore Our <span className="text-[#4CAF50]">MindCare Blogs</span>
      </h1>
      <p className="text-lg text-[#666666] text-center mt-4 mb-8 max-w-3xl">
        Discover insightful articles designed to nurture your mental health, enhance self-care, and promote overall well-being. Dive into topics that empower you to lead a healthier, happier life.
      </p>
      <div className="flex justify-center gap-6 flex-wrap my-10">
        <BlogsCard 
          image={stressManagement1}
          title="Stress Management Techniques"
          content="Learn effective techniques to manage stress and improve your emotional well-being. Explore strategies that help you stay balanced in a fast-paced world..."
          button="/blog/Stress-Management"
        />
        <BlogsCard 
          image={mindfulness1}
          title="The Power of Mindfulness"
          content="Mindfulness is a transformative practice that helps you stay present and reduce anxiety. Discover ways to integrate mindfulness into your daily routine..."
          button="/blog/Power-of-Mindfulness"
        />
        <BlogsCard 
          image={selfCare1}
          title="Self-Care Essentials"
          content="Self-care is the foundation of mental health. Find practical tips to prioritize yourself, recharge your energy, and build resilience against challenges..."
          button="/blog/Self-Care"
        />
        <BlogsCard 
          image={mentalHealth1}
          title="Understanding Mental Health"
          content="Breaking the stigma around mental health is crucial. Read about common challenges and ways to seek support for yourself or loved ones..."
          button="/blog/Mental-Health"
        />
        <BlogsCard 
          image={emotionalResilience1}
          title="Building Emotional Resilience"
          content="Emotional resilience is key to overcoming life's ups and downs. Learn techniques to bounce back from setbacks with strength and positivity..."
          button="/blog/Emotional-Resilience"
        />
        <BlogsCard 
          image={skillsEveryday1}
          title="Coping Skills for Everyday Life"
          content="Developing strong coping skills is essential for managing stress and anxiety. Explore practical tools and methods to enhance your mental health journey..."
          button="/blog/Skills-for-Everyday-Life"
        />
      </div>
    </div>
  );
}








