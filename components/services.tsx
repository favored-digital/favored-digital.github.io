import { Code2, Palette, Wrench } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Bespoke websites built from the ground up to meet your specific needs, using modern technologies and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that engage users and guide them toward your business goals.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing care and updates to keep your website secure, current, and performing at its best.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Services
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-balance mb-6">
            Comprehensive solutions for your digital presence
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From initial concept to ongoing maintenance, I provide end-to-end 
            web development services tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
