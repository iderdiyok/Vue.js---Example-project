<template>
    <div>
      <footer class="footer">
          <div class="footer-top pt-120 pb-110">
              <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <p><strong>TOBIAS KRASKA</strong> Meisterbetrieb</p>
                    <p>Heizung - Sanitär - Kundendienst</p>
                    <p>Bargkoppel 1, 22844 Norderstedt</p>
                    <ul class="d-flex list-unstyled mb-5 mb-lg-0">
                        <li class="mr-2">
                            <a href="tel:0172 45 60 123" target="_blank" class="btn btn-icon-only btn-pill btn-primary"
                                aria-label="Telefon-Link" data-toggle="tooltip" data-placement="left"
                                title="Rufen Sie uns an">
                                <span aria-hidden="true" class="fas fa-mobile-alt"></span>
                            </a>
                        </li>
                        <li class="mr-2">
                            <a href="mailto:info@heizungstechnik-kraska.de" target="_blank"
                                class="btn btn-icon-only btn-pill btn-primary" aria-label="E-Mail-Link"
                                data-toggle="tooltip" data-placement="right" title="Senden Sie uns eine E-Mail">
                                <span aria-hidden="true" class="fas fa-envelope"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-5 mb-lg-0">
                    <a href="impressum.html">Impressum</a>
                </div>
                <div class="col-6 col-lg-2 mb-5 mb-lg-0">
                    <a href="datenschutz.html">Datenschutz</a>
                </div>
            </div>
              </div>
          </div>
          <div class="footer-bottom">
              <div class="footer-text text-center">
                  <p class="copyright"> Copyright © 2021 <a href="https://www.dsbnet.de/" target="_blank">www.dsbnet.de</a>
            </p>
              </div>
          </div>
      </footer>
      <!-- back to top -->
      <div @click="scrollTop" :class="`back-to-top ${scrollBtn ? 'show' : ''}`">
          <a href="#"><i class="fa fa-chevron-up"></i></a>
      </div>

    </div>
</template>

<script>
    export default {
      name: "Footer",
      data(){
        return {
          scrollBtn: false
        }
      },
      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
            window.scrollTo(0, 0);
        }


      }
    }
</script>

<style scoped>

</style>
