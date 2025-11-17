import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Globe, Star } from "lucide-react" // Added Star

export default function HomePage() {
  // --- Data for your testimonials ---
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12 min-h-[90vh] flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[1.1]">
              Atlantic Pharmacy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground tracking-[0.05em] max-w-2xl mx-auto leading-relaxed">
              Providing pharmaceutical services in Brooklyn, NY
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="font-[family-name:var(--font-playfair)] rounded-full text-base px-8"
                asChild
              >
                <Link
                  href="https://healthguardpharmacy.vercel.app" // <-- 1. Change this URL
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer"
                >
                  Our Other Location {/* <-- 2. Change this text */}
                </Link>
              </Button>
            </div>
          </div>

          <div className="pt-12 border-t border-border max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-8">
              EST. FEBRUARY 2019
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <MapPin className="h-5 w-5 text-primary mx-auto" />
                <p className="text-sm tracking-[0.1em] text-foreground font-medium">
                  Located in Brooklyn
                </p>
                <p className="text-xs text-muted-foreground">
                  Delivery available in all 5 boroughs
                </p>
              </div>
              <div className="space-y-2">
                <Clock className="h-5 w-5 text-primary mx-auto" />
                <p className="text-sm tracking-[0.1em] text-foreground font-medium">
                  OPEN 6 DAYS
                </p>
                <p className="text-xs text-muted-foreground">
                  Mon-Sat fast and friendly service
                </p>
              </div>
              <div className="space-y-2">
                <Globe className="h-5 w-5 text-primary mx-auto" />
                <p className="text-sm tracking-[0.1em] text-foreground font-medium">
                  MULTILINGUAL
                </p>
                <p className="text-xs text-muted-foreground">
                  4 languages spoken
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs tracking-[0.25em] text-muted-foreground text-center mb-16">
            ADDITIONAL SERVICES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NOTARY PUBLIC",
                description: "Professional notary services available most weekdays",
              },
              {
                title: "OMNICARDS",
                description:
                  "Recharge your OmniCards for convenient NYC transit access",
              },
              { title: "FAX & PRINT", description: "Starting at $1 per page" },
              { title: "OTC CARDS", description: "We accept OTC Cards from customers" },
              {
                title: "PHOTOCOPY",
                description:
                  "We offer photocopy machine access at 10 cents per page",
              },
              {
                title: "FREE PARKING",
                description:
                  "We offer free parking in the parking lot outside",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-8 bg-card border border-border hover:border-primary transition-colors"
              >
                <h3 className="text-sm tracking-[0.15em] font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW CUSTOMER REVIEW SECTION --- */}
      {/* This is the new section you just created */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {" "}
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
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
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
    </main>
  )
}