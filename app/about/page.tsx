import { Mail, Phone, MapPin, Star } from "lucide-react" // Added Star

export default function AboutPage() {
  // --- Data for your testimonials ---
  // You can easily edit these with your real reviews
  const testimonials = [
    {
      quote:
        "Amazing service! Frank always makes sure my mom is taken care of and gets her meds on time. We would follow Frank anywhere!",
      name: "April K.",
      location: "Brooklyn, NY",
      rating: 5,
    },
    {
      quote:
        "Even though I moved farther away, I still use them as my main pharmacy. They’re super reliable and quick, and I always have a good experience talking with the pharmacist/staff. So nice to have such a great spot like this that serves this neighborhood",
      name: "Janine B.",
      location: "Brooklyn, NY",
      rating: 5,
    },
    {
      quote:
        "This pharmacy is one of the best places in the area. The owner is professional with everyone. They make calls to remind you if you need refills or if your meds are ready. Great place for anything medication, it comes through fast.",
      name: "Virginia P.",
      location: "Brooklyn, NY",
      rating: 5,
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground tracking-[0.05em] leading-relaxed max-w-2xl mx-auto">
            Providing Medicine to Patients in Brooklyn Since 2019
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pt-12 pb-12 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <p className="text-xs tracking-[0.25em] text-muted-foreground">
                EST. FEBRUARY 2019
              </p>
              <div className="h-px bg-border max-w-xs mx-auto" />
            </div>

            <div className="space-y-8 text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-light tracking-tight text-foreground leading-tight">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Atlantic Pharmacy was founded in September 2019 with a singular
                vision: to provide pharmaceutical care that combines clinical
                excellence with genuine community service. We believe that modern
                healthcare demands both technical expertise and human connection.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our commitment extends beyond dispensing medications. We serve as
                trusted healthcare partners in Brooklyn and deliver to all five
                boroughs of New York City, offering multilingual support and
                offer services that address the diverse needs of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.25em] text-muted-foreground mb-4">
              OUR VALUES
            </h2>
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-light tracking-tight text-foreground">
              What Guides Us
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "PRECISION",
                description:
                  "Every prescription filled with meticulous attention to detail and pharmaceutical accuracy.",
              },
              {
                title: "ACCESSIBILITY",
                description:
                  "Serving Brooklyn with multilingual support and comprehensive delivery services.",
              },
              {
                title: "COMMUNITY",
                description:
                  "Building lasting relationships through personalized care and trusted healthcare partnerships.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-px bg-primary mx-auto" />
                <h4 className="text-sm tracking-[0.15em] font-medium text-foreground">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW CUSTOMER REVIEW SECTION --- */}
      <section className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto"> {/* Changed to max-w-6xl for grid consistency */}
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-light tracking-tight text-foreground leading-tight">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our community is at the heart of everything we do.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center space-y-6">
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400" // Changed to yellow-400
                      />
                    ))}
                    {/* Fill empty stars if rating is less than 5 */}
                    {Array.from({ length: 5 - testimonial.rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-muted-foreground/30"
                        />
                      ),
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-semibold tracking-wide text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- END OF REVIEW SECTION --- */}


      {/* Contact Information */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto"> {/* Changed to max-w-6xl for grid consistency */}
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.25em] text-muted-foreground mb-4">
              GET IN TOUCH
            </h2>
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Contact Us
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <Phone className="h-6 w-6 text-primary mx-auto" />
              <h4 className="text-xs tracking-[0.2em] text-muted-foreground">
                PHONE
              </h4>
              <p className="text-lg text-foreground">
                Cell: (718) 484-2260
                <br />
                Fax: (718) 221-2972
              </p>
            </div>

            <div className="text-center space-y-4">
              <Mail className="h-6 w-6 text-primary mx-auto" />
              <h4 className="text-xs tracking-[0.2em] text-muted-foreground">
                EMAIL
              </h4>
              <p className="text-lg text-foreground">AtlanticRx1@gmail.com</p>
            </div>

            <div className="text-center space-y-4">
              <MapPin className="h-6 w-6 text-primary mx-auto" />
              <h4 className="text-xs tracking-[0.2em] text-muted-foreground">
                ADDRESS
              </h4>
              <p className="text-lg text-foreground">
                1706B Atlantic Ave
                <br />
                Brooklyn, NY 11213
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}