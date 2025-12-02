const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>
          
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Software Developer passionate about building clean, efficient solutions that solve real problems. 
              With expertise across full-stack development, I thrive on learning new technologies and tackling complex challenges.
            </p>
            <p>
              My approach combines strong fundamentals in Java and Spring with modern frontend skills in React, 
              enabling me to deliver end-to-end solutions. I'm committed to writing maintainable code, 
              implementing best practices, and continuously improving my craft.
            </p>
            <p>
              Whether it's designing robust APIs, optimizing database queries, or crafting responsive UIs, 
              I bring a problem-solving mindset and attention to detail to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
