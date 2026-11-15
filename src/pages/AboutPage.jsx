import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Feather, Compass, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { resortInfo } from '../data/resortInfo';
import { galleryItems } from '../data/galleryData';

export const AboutPage = () => {
  const previewImages = galleryItems.filter(item => item.category === 'resort' || item.category === 'gardens').slice(0, 4);

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title="Our Story & Philosophy"
        subtitle="Cultivating a 13-acre sylvan haven where timeless Deccan heritage lives in harmony with nature."
        eyebrow="The Heritage of The Meadows"
        image="/images/resort-gallery/resort/resort-01.jpg"
        breadcrumbs={[{ label: 'About Us' }]}
        height="tall"
      />

      {/* 2. Editorial Story Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Pioneering Vision"
              title="A Sylvan Sanctuary Born in the Cradle of Deccan History"
              alignment="left"
              hasDivider={true}
            />

            <div className="space-y-4 text-charcoal-muted font-light leading-relaxed text-base md:text-lg">
              <p>
                In the historic hamlet of Mitmita, gently tucked along the ancient highway connecting Aurangabad to the monumental rock-cut temples of Ellora, <strong className="font-medium text-botanical">The Meadows Resort &amp; Spa</strong> was established with a singular conviction: that true luxury is found in space, serenity, and respectful coexistence with the natural earth.
              </p>
              <p>
                Rather than constructing high-rise concrete blocks that dominate the landscape, our founders opted for low-profile, independent cottages positioned across 13 acres of rolling Deccan farmland. Each cottage was oriented to preserve mature trees, maximize natural airflow, and provide guests with unobstructed private verandahs that open directly onto verdant lawns.
              </p>
              <p>
                Over the decades, through tireless organic stewardship, this arid plateau terrain was patiently transformed into a flourishing microclimate—a verdant garden sanctuary now home to over 50 native bird species, resident peacocks, blooming water lilies, and hundreds of mature indigenous trees.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-beige">
              <img
                src="/images/resort-gallery/resort/resort-02.jpg"
                alt="Authentic cottage architecture at The Meadows Resort"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-botanical text-white p-6 rounded-sm shadow-xl max-w-xs hidden sm:block">
              <span className="text-xs uppercase tracking-luxury text-taupe-light block">Ecology First</span>
              <p className="font-serif text-lg font-light mt-1">
                "We didn't alter the landscape; we invited the landscape to shape our retreat."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The 1996 National Landscape Award Feature */}
      <section className="py-20 bg-beige/60 border-y border-taupe/20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex p-3 rounded-full bg-sage-100 text-sage-600 mb-6">
            <Award className="w-8 h-8" />
          </div>

          <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block mb-2">
            Architectural Excellence
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-botanical font-normal">
            Winner of the Indian Institute of Architects (IIA) National Award
          </h2>

          <div className="h-px w-20 bg-taupe/50 mx-auto my-6" />

          <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed max-w-3xl mx-auto">
            In 1996, the Journal of the Indian Institute of Architects recognized The Meadows with its prestigious <strong className="font-normal text-botanical">National Award for Best Landscape Design across all three judging categories</strong>. The jury honored the resort for its technical mastery in cultivating dense tropical flora within Maharashtra's semi-arid terrain, while integrating sustainable rainwater harvesting and greywater recycling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-left">
            <div className="bg-ivory p-6 rounded-sm border border-taupe/20">
              <h3 className="font-serif text-lg text-botanical font-medium">Aesthetic Harmony</h3>
              <p className="text-xs text-charcoal-muted font-light mt-2 leading-relaxed">
                Meandering stone pathways, natural lotus reflection ponds, and rustic pavilions that blend seamlessly into the Deccan horizon.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-sm border border-taupe/20">
              <h3 className="font-serif text-lg text-botanical font-medium">Ecological Regeneration</h3>
              <p className="text-xs text-charcoal-muted font-light mt-2 leading-relaxed">
                Planting indigenous species that foster an organic habitat for songbirds, butterflies, and cooling micro-climatic breezes.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-sm border border-taupe/20">
              <h3 className="font-serif text-lg text-botanical font-medium">Water Stewardship</h3>
              <p className="text-xs text-charcoal-muted font-light mt-2 leading-relaxed">
                Pioneering drip irrigation and chemical-free biological water recycling systems maintained for over three decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Hospitality & Service Ethos */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-xl bg-beige">
              <img
                src="/images/resort-gallery/spa/spa-01.jpg"
                alt="Authentic hospitality and wellness at The Meadows Resort"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <SectionHeading
              eyebrow="Indian Hospitality"
              title="Atithi Devo Bhava: Heartfelt Care Rooted in Dignity"
              alignment="left"
              hasDivider={true}
            />

            <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
              At The Meadows, hospitality is not an automated corporate transaction. It is an unhurried, gracious welcome drawn from age-old Indian traditions of hospitality, where each traveler is received as an honored guest in a private country estate.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4">
                <HeartHandshake className="w-5 h-5 text-sage-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-botanical font-medium">Personalized Concierge Care</h4>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-light mt-0.5">
                    From arranging sunrise departures for the Kailasa Temple at Ellora to curating bespoke poolside anniversary dinners.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Feather className="w-5 h-5 text-sage-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-botanical font-medium">Unobtrusive &amp; Peaceful</h4>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-light mt-0.5">
                    Our team respects your need for quiet contemplation, ensuring seamless service while maintaining your personal sanctuary.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Sparkles className="w-5 h-5 text-sage-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-botanical font-medium">Artisanal Kitchen Culture</h4>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-light mt-0.5">
                    Every dish at The Four Seasons and Marmalade is prepared fresh from scratch, using cold-pressed oils, organic spices, and freshly plucked garden herbs.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Visual Story Preview Strip */}
      <section className="py-16 bg-botanical text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-loose-luxury uppercase text-taupe-light block mb-2">
                Visual Vignettes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Glimpses of The Meadows
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 text-xs tracking-luxury uppercase text-taupe-light hover:text-white transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewImages.map((img) => (
              <div key={img.id} className="aspect-square rounded-sm overflow-hidden bg-botanical-deep group">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Booking CTA */}
      <section className="py-20 bg-ivory text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
            Experience the Art of Relaxation in Person
          </h2>
          <p className="mt-4 text-base text-charcoal-muted font-light leading-relaxed">
            Reserve your independent cottage and immerse in the tranquil botanical splendor of Mitmita.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/book" variant="primary" size="lg">
              Book Your Stay
            </Button>
            <Button to="/stay" variant="outline" size="lg">
              View Accommodations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
