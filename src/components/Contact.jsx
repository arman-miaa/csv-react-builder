import { FaArrowRight } from "react-icons/fa"; 

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 px-4">
      <div className="container mx-auto bg-white p-4 md:p-10 lg:p-20 text-center">
        <div className="bg-blue-600 p-4 md:p-8 lg:p-20 rounded-4xl text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-8">
            Connect with us to engage our plumbing services, whether you have a
            commercial project that requires support, or a domestic plumbing
            task. All visits are undertaken by a skilled professional.
          </p>
          <div className="flex justify-center">
            <button className="btn btn-primary text-blue-600 bg-white rounded-lg text-center flex items-center justify-center gap-2">
              Book a Professional Plumber <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
