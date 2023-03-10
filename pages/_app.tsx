import { useRef } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/index.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      }}
      watch={[]}
      location={asPath}
      onLocationChange={(scroll: any) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
