export const event = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Münsterturmlauf Ulm",
  description: "Feuerwehr-Treppenlauf auf das Ulmer Münster",
  startDate: "2026-06-12",
  endDate: "2026-06-12",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  organizer: {
    "@type": "Person",
    name: "Stefan Matheis",
    email: "mailto:stefan@mathe.is",
    telephone: "+49 160 970 48 114",
  },
  location: {
    "@type": "Place",
    name: "Ulmer Münster",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Münsterplatz 21",
      postalCode: "89073",
      addressLocality: "Ulm",
      addressRegion: "BW",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.39854",
      longitude: "9.991530",
    },
  },
  image: [
    "https://muensterturmlauf-ulm.gelungen.es/images/1x1.jpg",
    "https://muensterturmlauf-ulm.gelungen.es/images/4x3.jpg",
    "https://muensterturmlauf-ulm.gelungen.es/images/16x9.jpg",
  ],
};

export const formattedDate = new Date(event.startDate).toLocaleDateString(
  "de-DE",
  {
    weekday: "long",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  },
);
