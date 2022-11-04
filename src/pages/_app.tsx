import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import AOS from "aos";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";

import Layout from "layouts";
import { MainActionProvider, WalletConnectProvider } from "contexts";
import "aos/dist/aos.css";
import "nprogress/nprogress.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-toastify/dist/ReactToastify.css";
import "assets/styles/globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { captchaKey } from "utils";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  NProgress.configure({ showSpinner: true });

  useEffect(() => {
    AOS.init({ duration: 2000, offset: 200 });
    // disable: window.innerWidth < 834
    // AOS.refresh();
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteFinish);
    router.events.on("routeChangeError", handleRouteFinish);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteFinish);
      router.events.off("routeChangeError", handleRouteFinish);
    };
  }, [router.events]);

  const handleRouteStart = () => NProgress.start();
  const handleRouteFinish = () => NProgress.done();

  return (
    <GoogleReCaptchaProvider reCaptchaKey={captchaKey}>
      <MainActionProvider>
        <WalletConnectProvider>
          <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WalletConnectProvider>
      </MainActionProvider>
    </GoogleReCaptchaProvider>
  );
};

export default MyApp;
