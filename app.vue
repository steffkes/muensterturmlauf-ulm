<script setup>
const { event, formattedDate } = await useEvent();

const activeModal = ref(false);

useSeoMeta({
  ogImage: "/og.jpg",
  description: event.description + " (Freitag, 26. Juni 2026)",
});

useHead({
  titleTemplate: (pageTitle) =>
    [pageTitle, event.name].filter(Boolean).join(" | "),
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "apple-mobile-web-app-title", content: event.name },
  ],
  script: [
    {
      src: "/pl/script.js",
      "data-api": "/pl/event",
      "data-domain": "muensterturmlauf-ulm.gelungen.es",
      defer: true,
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(event),
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});
</script>

<template>
  <div class="columns is-gapless" style="min-height: 100vh">
    <!-- min-height on column needed for mobile -->
    <div
      class="column is-3"
      style="
        background-image: url(/images/hero.jpg);
        background-size: cover;
        background-position: 50% 15%;
        min-height: 50vh;
      "
    >
      &nbsp;
    </div>

    <div class="column">
      <div
        class="modal"
        :class="{ 'is-active': activeModal }"
        @click="activeModal = false"
      >
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image">
            <img src="/qr-code.svg" />
          </p>
        </div>
      </div>
      <a
        class="is-hidden-desktop"
        @click="activeModal = true"
        style="position: fixed; right: 0px; bottom: 0px"
        ><img
          src="/qr-code.svg"
          style="opacity: 0.1; height: 20px; margin: 10px"
      /></a>

      <div class="my-6 px-6">
        <p class="title">
          Feuerwehr-Treppenlauf im höchsten Kirchturm der Welt!
        </p>
        <p class="subtitle">Freitag, 12. Juni 2026 im Ulmer Münster</p>

        <p class="my-6">
          Hast du Bock drauf? Dann trag deine Kontaktdaten ein und wir melden
          uns sobald es etwas genaueres zum Wettkampf gibt ツ
        </p>

        <InterestForm />
      </div>

      <footer class="footer px-6">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="columns is-mobile">
                <div class="column is-4">
                  <img src="/images/stefan.jpg" alt="Bild Stefan Matheis" />
                </div>
                <div class="column">
                  <p>Fragen? Anregungen? Presse. Sponsoring.</p>
                  <p class="mt-4">
                    <strong>Stefan Matheis</strong><br />
                    <a href="mailto:stefan@mathe.is">✉️ stefan@mathe.is</a
                    ><br />
                    <a href="tel:004916097048114">📞 +49 160 970 48 114</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4 competitions">
              <div class="columns is-mobile">
                <div class="column has-text-centered">
                  <img
                    src="/images/muensterturmlauf-ulm.svg"
                    alt="Logo Münsterturmlauf Ulm"
                  />
                  <p class="has-text-centered">
                    <span>Münsterturmlauf</span>
                    <span>Ulm</span>
                  </p>
                </div>
                <div class="column has-text-centered">
                  <a href="//www.schachmatt-ulm.de">
                    <img
                      src="/images/schachmatt-ulm.svg"
                      alt="Logo Schachmatt Ulm"
                    />
                    <p class="has-text-centered">
                      <span>Schachmatt</span>
                      <span>Ulm</span>
                      <span class="has-text-grey-light">(Organisator)</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div class="column is-4 competitions">
              <div class="columns is-mobile">
                <div class="column has-text-centered">
                  <a href="//www.fire-trail-nesselwang.de">
                    <img
                      src="/images/fire-trail-nesselwang.svg"
                      alt="Logo Fire Trail Nesselwang"
                    />
                    <p class="has-text-centered">
                      <span>Fire Trail</span>
                      <span>Nesselwang</span>
                      <span class="has-text-grey-light">(Organisator)</span>
                    </p>
                  </a>
                </div>
                <div class="column has-text-centered">
                  <a href="//www.schanzenlauf-oberstdorf.de">
                    <img
                      src="/images/schanzenlauf-oberstdorf.svg"
                      alt="Logo Schanzenlauf Oberstdorf"
                    />
                    <p class="has-text-centered">
                      <span>Schanzenlauf</span>
                      <span>Oberstdorf</span>
                      <span class="has-text-grey-light">(Initiator)</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
@import url("bulma");
</style>

<style scoped>
.competitions span {
  display: block;
}
.competitions img {
  filter: grayscale(1);
}
</style>
