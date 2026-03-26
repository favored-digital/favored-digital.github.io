const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep dive into your business goals, target audience, and vision. This foundation ensures every decision aligns with your objectives.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Using modern technologies and best practices, I build your website with clean, maintainable code that performs beautifully.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "After thorough testing across devices and browsers, we launch your site and ensure everything runs smoothly in production.",
  },
]

export function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Process
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-balance mb-6">
            A proven approach to delivering excellence
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            My structured process ensures clarity, collaboration, and exceptional 
            results at every stage of your project.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="space-y-4">
                <span className="text-5xl font-serif font-medium text-primary/20 group-hover:text-primary/40 transition-colors">
                  {step.number}
                </span>
                <h3 className="text-lg font-medium">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
