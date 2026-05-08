import { createFileRoute } from "@tanstack/react-router";
import { Reveal, CountUp } from "@/components/Reveal";
import { Play, Check, Shield, Home, Tag, Flower2, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Court Compass — Family Court Intelligence For Separated Parents" },
      {
        name: "description",
        content:
          "Nine AI-powered tools built on thirty years of family court experience. Know where you stand. Know what the court thinks about your children.",
      },
      { property: "og:title", content: "Court Compass — Family Court Intelligence" },
      { property: "og:description", content: "The Family Court System Was Not Built For You. Court Compass Was." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});

const CHECKOUT = "#checkout";
const BOOK = "#book";

function CTAPair() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
      <a href={CHECKOUT} className="btn-gold">Get The Family Court Survival System — £197</a>
      <a href={BOOK} className="btn-outline">Book a Tactics Talk with John — £197</a>
    </div>
  );
}

function Index() {
  return (
    <main className="bg-ink text-foreground overflow-x-hidden">
      {/* 1. PRE-HEADLINE BAR */}
      <div className="bg-gold text-center py-2 px-4">
        <p className="text-[13px] sm:text-sm font-semibold tracking-wide" style={{ color: "white" }}>
          Used by separated parents across England, Wales and Northern Ireland.
        </p>
      </div>

      {/* 2. HERO */}
      <section className="bg-ink px-5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="relative aspect-video w-full max-w-3xl mx-auto bg-navy border border-white/10 mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-ink" />
              <button
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                  <Play className="w-9 h-9 text-ink fill-current ml-1" />
                </span>
              </button>
            </div>
            <p className="eyebrow mb-8">Watch this before you speak to a solicitor.</p>
          </Reveal>

          <Reveal>
            <h1 className="serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-white mb-6">
              The Family Court System Was Not Built For You.{" "}
              <span className="text-gold">Court Compass Was.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Nine AI-powered tools built on thirty years of family court experience. Know where you
              stand. Know what the court thinks about your children. Go in with your eyes open.
            </p>
            <CTAPair />
          </Reveal>
        </div>
      </section>

      {/* 3. FOUR SITUATIONS */}
      <section className="bg-navy px-5 py-20">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold text-center max-w-3xl mx-auto mb-14 leading-tight">
              Wherever You Are Right Now, Court Compass Was Built For You.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              ["01", "Just Starting To Think About Separation", "You want to understand what you are walking into before any lawyers get involved. Court Compass gives you that intelligence before you spend a penny."],
              ["02", "Already In Proceedings", "You need to understand what is happening, what your documents mean, and what the court actually cares about. Court Compass gives you clarity right now."],
              ["03", "The Money Has Run Out", "You had a solicitor and barrister and the funds ran out mid-case. You are not starting from scratch. You are continuing with better support than you had before."],
              ["04", "Going It Alone From The Start", "You never had the money for representation. Court Compass is the resource that should have existed the day this started."],
            ].map(([n, h, p]) => (
              <Reveal key={n}>
                <div className="border border-white/10 bg-white/[0.03] p-7 h-full">
                  <div className="text-gold font-serif text-3xl mb-3">{n}</div>
                  <h3 className="serif text-xl sm:text-2xl font-bold text-white mb-3">{h}</h3>
                  <p className="text-white/70 leading-relaxed text-[15px]">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE PROBLEM */}
      <section className="bg-cream px-5 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-14 leading-tight">
              The Numbers Tell Their Own Story.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {[
              [80, "%", "of private family law cases now have at least one unrepresented party (Ministry of Justice)"],
              [39, "%", "of cases have neither party represented, up from 13% in 2013 (Ministry of Justice)"],
              [96, "%", "increase in cases with neither party represented between 2016 and 2023 (Law Society of England and Wales)"],
            ].map(([n, s, l], i) => (
              <Reveal key={i}>
                <div>
                  <div className="serif text-6xl sm:text-7xl font-bold text-gold mb-3 leading-none">
                    <CountUp end={n as number} suffix={s as string} />
                  </div>
                  <p className="text-navy/80 text-[15px] leading-relaxed">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-navy/85 max-w-3xl mx-auto leading-relaxed text-lg">
              These are not people who chose to go it alone. Approximately 75 to 80% of them are
              there because they cannot afford legal fees. The system was built for lawyers. Court
              Compass was built for everyone else.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. ANALOGIES */}
      <section className="bg-ink px-5 py-20">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-14 leading-tight max-w-3xl mx-auto">
              Solicitors Are Not Fans Of People Who Represent Themselves.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              [Home, "Major house builders are not fans of self-build.", "The system works better when you buy from them. An individual who builds their own home is exercising a legal right the industry did not design for."],
              [Tag, "Estate agents are not fans of private sales.", "You can sell your own home. The industry works better when you need them to do it for you."],
              [Flower2, "Funeral directors are not fans of families who arrange their own funerals.", "Entirely legal. The model works better when grief makes you hand everything over."],
            ].map(([Icon, h, p], i) => (
              <Reveal key={i}>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-14 h-14 border border-gold mb-5">
                    {/* @ts-ignore */}
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="serif text-xl font-bold text-white mb-3">{h}</h3>
                  <p className="text-white/70 leading-relaxed text-[15px]">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="serif text-2xl sm:text-3xl text-gold text-center font-bold leading-snug max-w-3xl mx-auto">
              Family law solicitors are not fans of people who represent themselves. Not because
              self-representation does not work. Because it threatens their income.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. AUTHORITY */}
      <section className="bg-navy px-5 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="aspect-[4/5] bg-gradient-to-br from-ink to-navy border border-white/10 flex items-center justify-center">
              <span className="text-white/30 text-sm">Photo of John Junk</span>
            </div>
          </Reveal>
          <Reveal>
            <p className="eyebrow mb-3">Why John Junk</p>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Thirty Years Inside The Room.
            </h2>
            <ul className="space-y-4 mb-10">
              {[
                "As a first year student, John beat hundreds of applicants from across Northern Ireland's universities, including undergraduates, graduates and postgraduates, in open merit competition to win an internship at an Ivy League law school, where he worked alongside attorneys at a child protective services agency in the United States",
                "LL.M in Access to Justice with Distinction, Ulster University",
                "2019 Department of Justice Northern Ireland Access to Justice Scholar Award",
                "Thirty years as a McKenzie Friend in family court across England, Wales and Northern Ireland",
                "Granted leave to address the Court of Appeal in both England and Wales and in Northern Ireland",
                "Court Compass covers England, Wales and Northern Ireland. It does not cover Scotland.",
              ].map((c, i) => (
                <li key={i} className="flex gap-3 text-white/85 text-[15px] leading-relaxed">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-2 border-gold pl-5 italic serif text-gold text-lg leading-relaxed">
              "A barrister once objected to John acting as a McKenzie Friend on the grounds that
              John was no ordinary man. He was right. And he meant it as a reason to keep John out
              of the room. Because when John is in the room, the other side's chances go down."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 7. DOCTOR STORY */}
      <section className="bg-ink px-5 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow mb-4">A Real Client. Real Numbers.</p>
            <p className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
              "His solicitor sent him a bill for over £20,000. For one month."
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              John worked with a doctor. A professional man. Educated. Intelligent. His solicitor
              sent him a bill for over £20,000 for one month of representation. He came to John.
              Over the four years that followed, John's total fee was £9,000. Less than half of
              what one month with a solicitor had cost him. And that was before Court Compass
              existed. What that doctor paid £9,000 for over four years is now inside Court
              Compass for £197.
            </p>
            <p className="serif text-2xl sm:text-3xl font-bold text-gold">That is not a typo.</p>
          </Reveal>
        </div>
      </section>

      {/* 8. CHILDREN */}
      <section className="bg-cream px-5 py-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              Here Is What The Court Actually Thinks About Your Children.
            </h2>
            <p className="text-navy/85 text-lg leading-relaxed mb-10">
              The court's starting point, always, is that it is in the best interests of the
              children to have a relationship with both parents. Not one parent. Both. What you
              think is best for your children and what the court thinks is best for your children
              are almost always different things. The framework the court uses is the welfare
              checklist — found in the Children Act 1989 in England and Wales, and the Children
              (Northern Ireland) Order 1995 in Northern Ireland. Unless you know what is on it,
              what weight each factor carries, and how to present your case against it, you are
              going in blind. Court Compass includes a welfare checklist tool that shows you
              exactly how the court thinks about your child's situation. Not how you think about
              it. How the court thinks about it.
            </p>
            <a href={CHECKOUT} className="btn-gold">Get The Family Court Survival System — £197</a>
          </Reveal>
        </div>
      </section>

      {/* 9. NINE TOOLS */}
      <section className="bg-navy px-5 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold text-center mb-3 leading-tight max-w-3xl mx-auto">
              Nine Tools. Thirty Years Of Knowledge. Available The Moment You Need Them.
            </h2>
            <p className="text-white/70 text-center mb-14 italic">Not legal advice. Intelligence.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["Legal Letter Translator", "Paste in any legal letter and get a plain English explanation of what it actually means and what you should do next."],
              ["Welfare Report Analyser", "Understand what the children's welfare report is actually saying, whether it comes from CAFCASS in England, Cafcass Cymru in Wales, or the Guardian Ad Litem Agency in Northern Ireland."],
              ["Financial Settlement Estimator", "Find out where you actually stand on financial settlement. Not what you hope. What is realistic."],
              ["McKenzie Friend Court Prep Tool", "Prepare for court the way John would prepare you. What to say, what not to say, and what questions to ask."],
              ["Position Statement Builder", "Build a position statement that presents your case the way the court expects to see it."],
              ["Cross Examination Preparation Tool", "Prepare the questions you need to ask and the answers you need to give."],
              ["Appeal Checker", "Find out whether you have grounds to appeal a decision that went against you."],
              ["Weight of Evidence Reality Check", "Find out which of your arguments will carry weight in a family court and which ones will not."],
              ["Welfare Checklist Scorer", "Run your situation through the welfare checklist and find out how a family court judge is likely to view what is best for your children."],
            ].map(([name, desc], i) => (
              <Reveal key={i}>
                <div className="border border-white/10 bg-white/[0.03] p-6 h-full hover:border-gold/60 transition-colors">
                  <div className="text-gold font-serif text-2xl mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SOLICITOR OBJECTION */}
      <section className="bg-ink px-5 py-20">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-14 leading-tight">
              Before You Pick Up The Phone To A Solicitor, Read This.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Reveal>
              <h3 className="serif text-2xl font-bold text-gold mb-6">The Numbers.</h3>
              <div className="serif text-5xl sm:text-6xl font-bold text-gold mb-2">£150</div>
              <p className="text-white/75 mb-6 text-[15px] leading-relaxed">
                what the median UK full-time worker earns per day (ONS Annual Survey of Hours and
                Earnings, October 2025)
              </p>
              <div className="serif text-5xl sm:text-6xl font-bold text-gold mb-2">£142–£210</div>
              <p className="text-white/75 mb-6 text-[15px] leading-relaxed">
                what a trainee solicitor, someone not yet qualified, can charge per hour (HM Courts
                and Tribunals Service Solicitors Guideline Hourly Rates, January 2026)
              </p>
              <p className="text-white/85 leading-relaxed">
                One hour of a trainee's time costs more than a full day of yours. A qualified
                partner can charge £400 an hour or more.
              </p>
            </Reveal>
            <Reveal>
              <h3 className="serif text-2xl font-bold text-gold mb-6">The Qualifications.</h3>
              <p className="text-white/85 leading-relaxed">
                In England and Wales there is no legal requirement for a solicitor to hold any
                family law accreditation to take your private family case. In Northern Ireland the
                Children Order Panel applies only to public law care proceedings. For a private
                family dispute there is no mandatory specialist accreditation required. A fair few
                family law solicitors hold an undergraduate degree in something entirely unrelated
                to law, followed by a conversion course. No specialist panel membership. Your
                future and your children's future in their hands. At £300 an hour.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <p className="serif text-2xl sm:text-3xl text-gold font-bold text-center max-w-3xl mx-auto leading-snug">
              John holds an LL.M in Access to Justice with Distinction. Court Compass is £197. You
              do the maths.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 11. HOSPITAL QUESTIONS */}
      <section className="bg-cream px-5 py-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-10 leading-tight">
              Two Questions You Should Ask Every Professional Before You Let Them Touch Your Case.
            </h2>
            <ol className="space-y-6 mb-10">
              {[
                "Have you done this before? And how often?",
                "Has anyone been harmed by you doing this?",
              ].map((q, i) => (
                <li key={i} className="flex gap-5">
                  <span className="serif text-4xl font-bold text-gold leading-none">{i + 1}.</span>
                  <span className="serif text-2xl font-bold text-navy leading-snug">{q}</span>
                </li>
              ))}
            </ol>
            <p className="text-navy/85 text-lg leading-relaxed">
              John asks these questions of every professional in a medical setting. A solicitor is
              about to make decisions that will determine how much time you spend with your
              children, how your finances are divided, and what your life looks like for the next
              decade. That is not a minor procedure. That is surgery on your family. Ask the
              questions. The ones who answer confidently and specifically are worth talking to. The
              ones who look at you like you have no right to ask are the ones to walk away from.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 12. BALCONY */}
      <section className="bg-ink px-5 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="serif italic text-2xl sm:text-3xl text-white leading-relaxed mb-10">
              "John has spent thirty years in the balcony. He knows what the performance looks like
              when it is going well and when it is falling apart. He knows what the person on the
              stage cannot see because they are too close to it."
            </p>
            <p className="text-white/80 text-left sm:text-center text-lg leading-relaxed">
              The hearing is not where the case is won or lost. The case is won or lost in the days
              and weeks of preparation and negotiation that happen before anyone stands in front of
              a judge. In one negotiation John offered a minus number — a figure that went the
              wrong way entirely — and watched the other side realise in real time that they had
              completely misjudged the strength of their own case. The liability they believed was
              over £14,000 came down to £2,500. An 82% reduction. Not by compromising. By
              understanding the case well enough to shock them into seeing their own weakness.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 13. ROTTWEILER */}
      <section className="bg-navy px-5 py-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-8 leading-tight">
              You Do Not Need A Rottweiler. You Need A Negotiator.
            </h2>
            <p className="text-white/85 text-lg leading-relaxed">
              The proceedings drag on for months. Sometimes years. The costs spiral. The children
              watch their parents tear each other apart through lawyers' letters. And at the end
              of it those two people still have to co-parent. They still have to be in the same
              room at parents' evenings and school plays and birthday parties. The Rottweiler did
              not protect you. The Rottweiler got paid. What you actually need is someone whose aim
              is to get these proceedings over as quickly as possible, with your sanity intact,
              and without destroying relationships that your children need to survive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 14. MCKENZIE */}
      <section className="bg-cream px-5 py-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              What A McKenzie Friend Actually Is. And What You Actually Need.
            </h2>
            <p className="text-navy/85 text-lg leading-relaxed mb-10">
              Under the official Practice Guidance governing England and Wales, and the Practice
              Note revised by the Lord Chief Justice of Northern Ireland in June 2024, a McKenzie
              Friend has the right to sit beside you in court, take notes, help with your papers
              and quietly give you advice. Speaking in court requires a separate application and
              the court grants it sparingly. Most people imagine a well-meaning friend holding
              their hand. What they actually need is someone who has spent days and weeks working
              on their case before the hearing, who understands the system from the inside, and who
              has been granted leave to address the Court of Appeal in two jurisdictions.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 serif italic text-2xl text-gold leading-snug">
              "A barrister once tried to have John removed from a case because, in his own words,
              John was no ordinary man. He was right."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 15. PRICING */}
      <section id="checkout" className="bg-ink px-5 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold text-center mb-3 leading-tight">
              Choose Where You Want To Start.
            </h2>
            <p className="text-white/75 text-center max-w-2xl mx-auto mb-14">
              Every option includes lifetime access to the nine tools. John's time is available at
              every level.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["The Tools", "£197", "one payment", "The Family Court Survival System. All nine tools. Lifetime access. Annual renewal at £97 from year two.", "Get Instant Access"],
              ["Tools Plus One Hour", "£294", "one payment", "The Family Court Survival System plus one hour Tactics Talk with John. Tools and personal guidance together.", "Get Started With John", true],
              ["Three Hours", "£497", "one payment", "Three hours of John's time at £165 per hour. Use them for calls, document review, court preparation or negotiation strategy. No expiry.", "Book Three Hours"],
              ["Ten Hours", "£1,270", "one payment", "Ten hours of John's time at £127 per hour. Sustained strategic support through the most critical phase of your proceedings. Less than the government guideline floor rate for an unqualified trainee solicitor.", "Book Ten Hours"],
            ].map(([name, price, sub, desc, cta, featured], i) => (
              <Reveal key={i}>
                <div
                  className={`p-7 h-full flex flex-col ${
                    featured ? "border-2 border-gold bg-white/[0.04]" : "border border-white/15 bg-white/[0.02]"
                  }`}
                >
                  <p className="eyebrow mb-3">{name as string}</p>
                  <div className="serif text-5xl font-bold text-white mb-1">{price as string}</div>
                  <p className="text-white/60 text-sm mb-5">{sub as string}</p>
                  <p className="text-white/80 text-[14px] leading-relaxed mb-6 flex-1">{desc as string}</p>
                  <a href={CHECKOUT} className="btn-gold w-full">{cta as string}</a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-center mt-10">
              <a href="#more-pricing" className="text-gold underline underline-offset-4 hover:opacity-80">
                See all options including monthly retainer, twenty hour bank and emergency court attendance
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 16. MONTHLY RETAINER */}
      <section id="more-pricing" className="bg-navy px-5 py-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold text-center mb-12 leading-tight">
              John In Your Corner Every Month.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              ["£197 / month", "1 hour of John's time per month. Cancel any time."],
              ["£297 / month", "2 hours of John's time per month. Cancel any time."],
            ].map(([p, d], i) => (
              <Reveal key={i}>
                <div className="border border-white/15 p-7 bg-white/[0.03] h-full">
                  <div className="serif text-4xl font-bold text-white mb-3">{p}</div>
                  <p className="text-white/80">{d}</p>
                  <a href={CHECKOUT} className="btn-gold mt-6 w-full">Start Retainer</a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-white/80 text-center max-w-2xl mx-auto leading-relaxed">
              Family court proceedings last months. Sometimes years. Every hearing creates new
              questions. Every letter requires a response. Every development changes the strategy.
              A monthly retainer means John is available throughout, at a fixed monthly cost with
              no surprises.
            </p>
            <p className="text-gold text-center mt-6 italic">
              If after your first conversation with John you do not feel you are a good fit, you
              are free to cancel within 30 days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 17. EMERGENCY COURT */}
      <section className="bg-ink px-5 py-20 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.7_0.18_35)] to-transparent" />
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6" style={{ color: "var(--alert)" }} />
              <p className="eyebrow" style={{ color: "var(--alert)" }}>Emergency Court Attendance</p>
            </div>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 leading-tight">
              When You Need John In The Room.
            </h2>
            <p className="text-white/85 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              There are moments when a call is not enough. John travels to your court, wherever it
              is in England, Wales or Northern Ireland, and sits beside you for the full day.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              ["Northern Ireland", "£997", "any notice"],
              ["NI calls only — < 3 days", "£497", "full day of call availability"],
              ["England or Wales — 7+ days notice", "£1,297", ""],
              ["England or Wales — 3 to 6 days notice", "£1,497", ""],
            ].map(([h, p, s], i) => (
              <Reveal key={i}>
                <div className="border border-white/15 p-6 flex items-center justify-between gap-4 bg-white/[0.02]">
                  <div>
                    <p className="text-white font-semibold">{h}</p>
                    {s && <p className="text-white/60 text-sm mt-1">{s}</p>}
                  </div>
                  <div className="serif text-3xl font-bold text-gold whitespace-nowrap">{p}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-center font-semibold leading-relaxed" style={{ color: "var(--alert)" }}>
              There is no cancellation on England or Wales packages. Travel, accommodation and
              logistics are booked immediately after payment clears. Less than 3 days notice in
              England or Wales is not available.
            </p>
            <p className="text-white/70 text-center mt-4 text-sm">
              Sessions available by Zoom, phone or in person in Northern Ireland.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 18. VETERAN */}
      <section className="bg-navy px-5 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-16 h-10 mb-6 border border-white/30 text-xs text-white/70 tracking-widest">
              UK ARMED FORCES
            </div>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              HM Armed Forces Veterans.
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              Court Compass offers a 25% discount across all products to veterans of HM Armed
              Forces. To claim your discount, upload your HM Armed Forces Veteran Card at
              checkout. Physical or digital cards accepted. Do not have your card yet? Apply free
              at gov.uk/veteran-card. A digital version is available through the GOV.UK One Login
              app.
            </p>
            <a href={CHECKOUT} className="btn-gold">Claim Your Veteran Discount</a>
          </Reveal>
        </div>
      </section>

      {/* 19. GUARANTEE */}
      <section className="bg-cream px-5 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <Shield className="w-14 h-14 mx-auto mb-6" style={{ color: "var(--gold)" }} />
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              The Court Compass Guarantee.
            </h2>
            <p className="text-navy/85 text-lg leading-relaxed">
              If after your first conversation with John you do not feel you are a good fit, you
              are free to cancel within 30 days. No questions asked.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 20. FINAL CTA */}
      <section id="book" className="bg-ink px-5 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="serif text-4xl sm:text-5xl md:text-6xl font-bold text-gold mb-6 leading-[1.05]">
              Let's Get You Through The Forest.
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              You did not choose this situation. But you are in it. The question now is whether you
              go through it confused and frightened, or whether you go through it knowing where you
              stand.
            </p>
            <CTAPair />
            <p className="text-white/60 text-sm mt-6">
              Sessions available by Zoom, phone or in person in Northern Ireland.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 21. REFERENCES */}
      <div className="bg-black/60 px-5 py-6 border-t border-white/5">
        <p className="max-w-5xl mx-auto text-white/55 text-xs leading-relaxed text-center">
          References: Ministry of Justice Family Court Statistics Quarterly. Law Society of England
          and Wales. ONS Annual Survey of Hours and Earnings October 2025. HM Courts and Tribunals
          Service Solicitors Guideline Hourly Rates January 2026. Nuffield Foundation and Ulster
          University LiP Research Programme 2016 to 2023. Children Act 1989. Children (Northern
          Ireland) Order 1995. Practice Guidance McKenzie Friends Civil and Family Courts July
          2010. Practice Note 3/2012 revised 7 June 2024 Lord Chief Justice of Northern Ireland.
        </p>
      </div>

      {/* 22. FOOTER */}
      <footer className="bg-ink px-5 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 items-center text-center sm:text-left">
          <div className="serif font-bold text-gold text-lg tracking-wide">COURT COMPASS</div>
          <div className="flex gap-6 justify-center text-sm text-white/70">
            <a href="/privacy" className="hover:text-gold">Privacy Policy</a>
            <a href="/terms" className="hover:text-gold">Terms</a>
          </div>
          <p className="text-white/50 text-xs leading-relaxed sm:text-right">
            Court Compass is not a legal advice service. The information and tools provided are for
            intelligence and educational purposes only. John Junk is not a practising solicitor or
            barrister.
          </p>
        </div>
      </footer>
    </main>
  );
}
