import kitchenImage from "@/assets/kitchen-modern.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#9da993] text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-accent">About Us</h2>
            <div className="space-y-4 text-lg colour-white">
              <p>
                At KR Mahadev Interior Design, we believe that every space tells a story. 
                With years of experience in crafting exceptional interiors, we specialize in 
                transforming houses into homes through thoughtful design and meticulous execution.
              </p>
              <p>
                Our team is dedicated to providing high-quality, customized interior solutions 
                that reflect your personal style and enhance your lifestyle. From modular kitchens 
                to elegant bedroom wardrobes and sophisticated false ceilings, we bring expertise 
                and creativity to every project.
              </p>
              <p>
                We pride ourselves on our attention to detail, commitment to quality, and ability 
                to deliver stunning results that exceed expectations. Your dream space is our mission.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <img
                src={kitchenImage}
                alt="Modern kitchen design"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
