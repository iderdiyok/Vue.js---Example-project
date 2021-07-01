<template>
  <div>
    <Navigation />
    <main>
      <Main />
      <Contact />
      <FooterTop />
      <Cookie />
    </main>
    <Footer />
  </div>
</template>
<script>
  import Navigation from "../components/Navigation";
  import Footer from "../components/Footer";
  import FooterTop from "../components/FooterTop";
  import Main from "../components/Main";
  import Contact from "../components/Contact";
  import Cookie from "../components/Cookie";
  export default {
    components: {
      Navigation,
      Footer,
      FooterTop,      
      Contact,
      Main,
      Cookie
    }
  }
</script>
