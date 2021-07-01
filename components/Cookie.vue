<template>
  
</template> 
<script src="/assets/js/cookie.js" data-cfasync="false"></script>
    <script>
            export default {
            mounted: function () {
                        window.cookieconsent.initialise({
                            "palette": {
                                "popup": {
                                    "background": "#31344b",
                                    "text": "#e6e7ee"
                                },
                                "button": {
                                    "background": "#05ca04",
                                    "text": "#31344b"
                                }
                            },
                            "theme": "edgeless",
                            "position": "bottom-left",
                            "type": "opt-in",
                            "content": {
                                "message": "Diese Website verwendet Cookies, um sicherzustellen, dass Sie die bestmögliche Erfahrung auf unserer Website erhalten.",
                                "dismiss": "Einverstanden",
                                "allow": "Einverstanden",
                                "deny": "Ablehnen",
                                "link": "Weitere Informationen",
                                "href": "https://heizungstechnik-kraska.de/datenschutz.html"
                            }
                        }); 
            },
            methods: 
            {

            },
        };          
    </script>   
<style scoped>

</style>
