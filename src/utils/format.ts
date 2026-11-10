export const money = (value: number) => `₦${value.toLocaleString("en-NG")}`;

export const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nassarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

type DeliveryZone = {
  name: string;
  states: string[];
  cost: number;
  timeline: string;
};

export const deliveryZones: DeliveryZone[] = [
  {
    name: "Lagos",
    states: ["Lagos"],
    cost: 3000,
    timeline: "1–2 business days",
  },
  {
    name: "South-West",
    states: ["Ogun", "Oyo", "Osun", "Ondo", "Ekiti", "Kwara"],
    cost: 5000,
    timeline: "2–3 business days",
  },
  {
    name: "South-South & South-East",
    states: [
      "Edo",
      "Delta",
      "Bayelsa",
      "Rivers",
      "Cross River",
      "Akwa Ibom",
      "Abia",
      "Anambra",
      "Ebonyi",
      "Enugu",
      "Imo",
    ],
    cost: 6000,
    timeline: "3–4 business days",
  },
  {
    name: "North-Central",
    states: ["Benue", "Kogi", "Nassarawa", "Niger", "Plateau", "FCT Abuja"],
    cost: 7000,
    timeline: "3–5 business days",
  },
  {
    name: "Northern Nigeria",
    states: [
      "Adamawa",
      "Bauchi",
      "Borno",
      "Gombe",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara",
    ],
    cost: 8000,
    timeline: "4–6 business days",
  },
];

export const internationalShippingCost = 35000;
export const freeDeliveryThreshold = 250000;

export function getShippingCost(state: string, subtotal: number): number {
  if (subtotal >= freeDeliveryThreshold) return 0;
  for (const zone of deliveryZones) {
    if (zone.states.includes(state)) return zone.cost;
  }
  return internationalShippingCost;
}

export function getDeliveryTimeline(state: string): string {
  for (const zone of deliveryZones) {
    if (zone.states.includes(state)) return zone.timeline;
  }
  return "7–14 business days";
}

export const internationalCountries = [
  "Ghana",
  "United Kingdom",
  "United States",
  "Canada",
  "United Arab Emirates",
  "Türkiye",
  "South Africa",
  "Other",
];
