<template>
   <!-- contactForm -->
        <section class="section-sm" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h2 class="font-weight-light">Hinterlassen Sie uns eine kurze Nachricht</h2>
                        <p class="lead">mit <span class="font-weight-bold">Ihrem Namen, Adresse,
                                Telefonnummer und einer kurzen Beschreibung</span> um was es bei Ihnen geht und Ich
                            melde mich kurzfristig bei Ihnen zurück.</p>
                        <div class="form-group mt-5">
                            <form class="contactForm" id="contact" data-toggle="validator" data-focus="false">
                                <div class="d-flex flex-row mt-5 justify-content-center">
                                    <div class="form-group input-group">
                                        <input
                                            class="form-control form-control-xl bg-primary border-light shadow-soft rounded-left"
                                            placeholder="Name" name="cname" type="text" id="cname" required>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-5 justify-content-center">
                                    <div class="form-group input-group">
                                        <input
                                            class="form-control form-control-xl bg-primary border-light shadow-soft rounded-left"
                                            placeholder="Telefonnummer" name="ctelefon" type="text" id="ctelefon">
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-5 justify-content-center">
                                    <div class="form-group input-group">
                                        <input
                                            class="form-control form-control-xl bg-primary border-light shadow-soft rounded-left"
                                            placeholder="Adresse" type="text" name="cadress" id="cadress">
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-5 justify-content-center">
                                    <div class="form-group input-group">
                                        <input
                                            class="form-control form-control-xl bg-primary border-light shadow-soft rounded-left"
                                            placeholder="E-Mail" type="email" name="cemail" id="cemail" required>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-5 justify-content-center">
                                    <div class="form-group input-group">
                                        <textarea class="form-control" name="cmessage" placeholder="Nachricht..."
                                            id="cmessage" rows="4" required></textarea>
                                    </div>
                                </div>
                                <div class="form-group checkbox">
                                    <input type="checkbox" id="cterms" value="Agreed-to-Terms" required>Ich habe die <a
                                        href="datenschutz.html#kontaktformular">Datenschutzerklärung</a> gelesen und
                                    akzeptiere sie.
                                </div>
                                <div class="d-flex flex-row mt-5  g-recaptcha justify-content-center " data-sitekey="6Lco0nYaAAAAAF_7ZBQi8NHuE_mNfLw-xd-szAkd" ></div>
                                <div class="d-flex flex-row mt-5 justify-content-center">
                                    <button type="submit" class="btn btn-primary rounded-right ml-3"
                                        data-toggle="tooltip" data-placement="top" title="Senden"><span
                                            class="far fa-paper-plane px-2 icon-md"></span></button>
                                </div>
                                <div class="form-message">
                                    <div id="cmsgSubmit" class="h3 text-center"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>                
        </section>
</template>
<script>
 
</script>
<style scoped>

</style>
