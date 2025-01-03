// components/Footer.tsx
"use client"
const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-6 w-full mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <p className="text-sm">
          &copy; 2024 <span className="font-semibold text-[#4CAF50]">MindCare. </span> All Rights Reserved.
        </p>
        <p className="text-xs mt-2">
          Empowering healthier minds, one step at a time.
        </p>
      </div>

      {/* Spacer to ensure footer sticks to the bottom */}
      <style jsx>{`
        html,
        body {
          height: 100%;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
        footer {
          flex-shrink: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
