import { useLayoutEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = ({ home, siteLogo, favicon, headerMenu, footerMenu }) => {
  const { scroll } = useLocomotiveScroll();
  const ref = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    if (scroll) {
      const element = scroll?.el;
      scroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: element.style.transform ? "transform" : "fixed"
      });
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());

      ctx = gsap.context(() => {
        let sections = gsap.utils.toArray(".quotes-container");
        gsap.to(ref.current, {
          xPercent: -100 * (sections.length - 1),
          scrollTrigger: {
            trigger: ref.current,
            scroller: scroll?.el,
            start: "top center",
            end: () => "+=" + ref.current.offsetWidth,
            scrub: 0.5,
            markers: true,
            pin: true,
            onRefresh: (self) => console.log("refresh", self.start, self.end)
          }
        });
        ScrollTrigger.refresh();
      }, ref);
    }
    return () => ctx && ctx.revert();
  }, [scroll]);

  return (
    <div>
      <div>
        <p>
          Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
          1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
          caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
          [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
          1936. “The American specimen shows sets of small caps, swash initials
          and special ligatures not featured in the European catalogues, as well
          as a series of decorative initials.” [Middendorp 2004] Digitizations
          include OPTI Eisen (Castcraft, 1990–91; 3 weights plus 1 italic, used
          for sample) and OL Egmont (Dennis Ortiz-Lopez, 2005).
        </p>
        <p>
          Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
          1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
          caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
          [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
          1936. “The American specimen shows sets of small caps, swash initials
          and special ligatures not featured in the European catalogues, as well
          as a series of decorative initials.” [Middendorp 2004] Digitizations
          include OPTI Eisen (Castcraft, 1990–91; 3 weights plus 1 italic, used
          for sample) and OL Egmont (Dennis Ortiz-Lopez, 2005).
        </p>
        <p>
          Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
          1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
          caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
          [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
          1936. “The American specimen shows sets of small caps, swash initials
          and special ligatures not featured in the European catalogues, as well
          as a series of decorative initials.” [Middendorp 2004] Digitizations
          include OPTI Eisen (Castcraft, 1990–91; 3 weights plus 1 italic, used
          for sample) and OL Egmont (Dennis Ortiz-Lopez, 2005).
        </p>
        <p>
          Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
          1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
          caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
          [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
          1936. “The American specimen shows sets of small caps, swash initials
          and special ligatures not featured in the European catalogues, as well
          as a series of decorative initials.” [Middendorp 2004] Digitizations
          include OPTI Eisen (Castcraft, 1990–91; 3 weights plus 1 italic, used
          for sample) and OL Egmont (Dennis Ortiz-Lopez, 2005).
        </p>
        <p>
          Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
          1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
          caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
          [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
          1936. “The American specimen shows sets of small caps, swash initials
          and special ligatures not featured in the European catalogues, as well
          as a series of decorative initials.” [Middendorp 2004] Digitizations
          include OPTI Eisen (Castcraft, 1990–91; 3 weights plus 1 italic, used
          for sample) and OL Egmont (Dennis Ortiz-Lopez, 2005).
        </p>
        <p>
          Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
          1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
          caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
          [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
          1936. “The American specimen shows sets of small caps, swash initials
          and special ligatures not featured in the European catalogues, as well
          as a series of decorative initials.” [Middendorp 2004] Digitizations
          include OPTI Eisen (Castcraft, 1990–91; 3 weights plus 1 italic, used
          for sample) and OL Egmont (Dennis Ortiz-Lopez, 2005).
        </p>

        <main>
          <div className="quotes-wrapper" ref={ref}>
            <div className="quotes">
              <div className="quotes-container">
                <blockquote>
                  <p>
                    Der Workshop von Julia im Rahmen des Founder’s Lab der
                    Wirtschaftsagentur Wien hatte im wahrsten Sinne den meisten
                    Impact auf die Ausrichtung meines Unternehmens. Aus „Think
                    of impact early“ wurde „Think of impact only“.
                  </p>
                  <cite>– Olivia Lancerotto, Innovation Marketing</cite>
                </blockquote>
              </div>
              <div className="quotes-container">
                <blockquote>
                  <p>
                    Der Workshop von Julia im Rahmen des Founder’s Lab der
                    Wirtschaftsagentur Wien hatte im wahrsten Sinne den meisten
                    Impact auf die Ausrichtung meines Unternehmens. Aus „Think
                    of impact early“ wurde „Think of impact only“.
                  </p>
                  <cite>– Olivia Lancerotto, Innovation Marketing</cite>
                </blockquote>
              </div>
              <div className="quotes-container">
                <blockquote>
                  <p>
                    Der Workshop von Julia im Rahmen des Founder’s Lab der
                    Wirtschaftsagentur Wien hatte im wahrsten Sinne den meisten
                    Impact auf die Ausrichtung meines Unternehmens. Aus „Think
                    of impact early“ wurde „Think of impact only“.
                  </p>
                  <cite>– Olivia Lancerotto, Innovation Marketing23</cite>
                </blockquote>
              </div>
            </div>
          </div>
          <p>
            Strange. Designed by S.H. de Roos and issued by Lettergieterij
            Amsterdam in 1932–34 in 6 styles: 3 roman weights, 2 italics with
            optional swash caps, and a set of open (inline) caps, see Open
            Egmont Kapitalen. [Reichardt 2011] [LA specimen] Issued in the US by
            Intertype in ca. 1936. “The American specimen shows sets of small
            caps, swash initials and special ligatures not featured in the
            European catalogues, as well as a series of decorative initials.”
            [Middendorp 2004] Digitizations include OPTI Eisen (Castcraft,
            1990–91; 3 weights plus 1 italic, used for sample) and OL Egmont
            (Dennis Ortiz-Lopez, 2005).
          </p>
          <p>
            Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
            1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
            caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
            [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
            1936. “The American specimen shows sets of small caps, swash
            initials and special ligatures not featured in the European
            catalogues, as well as a series of decorative initials.” [Middendorp
            2004] Digitizations include OPTI Eisen (Castcraft, 1990–91; 3
            weights plus 1 italic, used for sample) and OL Egmont (Dennis
            Ortiz-Lopez, 2005).
          </p>
          <p>
            Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
            1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
            caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
            [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
            1936. “The American specimen shows sets of small caps, swash
            initials and special ligatures not featured in the European
            catalogues, as well as a series of decorative initials.” [Middendorp
            2004] Digitizations include OPTI Eisen (Castcraft, 1990–91; 3
            weights plus 1 italic, used for sample) and OL Egmont (Dennis
            Ortiz-Lopez, 2005).
          </p>
          <p>
            Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
            1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
            caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
            [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
            1936. “The American specimen shows sets of small caps, swash
            initials and special ligatures not featured in the European
            catalogues, as well as a series of decorative initials.” [Middendorp
            2004] Digitizations include OPTI Eisen (Castcraft, 1990–91; 3
            weights plus 1 italic, used for sample) and OL Egmont (Dennis
            Ortiz-Lopez, 2005).
          </p>
          <p>
            Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
            1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
            caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
            [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
            1936. “The American specimen shows sets of small caps, swash
            initials and special ligatures not featured in the European
            catalogues, as well as a series of decorative initials.” [Middendorp
            2004] Digitizations include OPTI Eisen (Castcraft, 1990–91; 3
            weights plus 1 italic, used for sample) and OL Egmont (Dennis
            Ortiz-Lopez, 2005).
          </p>
          <p>
            Designed by S.H. de Roos and issued by Lettergieterij Amsterdam in
            1932–34 in 6 styles: 3 roman weights, 2 italics with optional swash
            caps, and a set of open (inline) caps, see Open Egmont Kapitalen.
            [Reichardt 2011] [LA specimen] Issued in the US by Intertype in ca.
            1936. “The American specimen shows sets of small caps, swash
            initials and special ligatures not featured in the European
            catalogues, as well as a series of decorative initials.” [Middendorp
            2004] Digitizations include OPTI Eisen (Castcraft, 1990–91; 3
            weights plus 1 italic, used for sample) and OL Egmont (Dennis
            Ortiz-Lopez, 2005).
          </p>
        </main>
      </div>
    </div>
  );
};

export default Index;
