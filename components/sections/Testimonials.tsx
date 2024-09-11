import Marquee from "../magicui/marquee";

const testimonials = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Martin escobar",
    role: "Founder of meta",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Angela stian",
    role: "Product designer",
    quote:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Karim ahmed",
    role: "DevOp engineer",
    quote:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
  },
  {
    name: "John Doe",
    role: "Social Media Manager",
    quote: "SocialPro has revolutionized how I manage multiple accounts.",
    avatar: "/vercel.svg",
  },
  {
    name: "Jane Smith",
    role: "Influencer",
    quote:
      "The analytics insights have helped me grow my audience significantly.",
    avatar: "/vercel.svg",
  },
  {
    name: "Mike Johnson",
    role: "Small Business Owner",
    quote: "Automating our social media has saved us countless hours.",
    avatar: "/vercel.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          What Our Users Say
        </h2>
        <Marquee className="py-4" pauseOnHover={true}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-xl w-72">
              <figure>
                <div className="flex items-center gap-x-4">
                  <img
                    src={testimonial.avatar}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <span className="block font-semibold text-gray-800">
                      {testimonial.name}
                    </span>
                    <span className="block text-gray-600 text-sm mt-0.5">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
                <blockquote>
                  <p className="mt-6 text-gray-700 ">{testimonial.quote}</p>
                </blockquote>
              </figure>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
