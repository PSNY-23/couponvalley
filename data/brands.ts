export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  rating: number;
  reviewCount: number;
  phone: string;
  address: string;
  topOffers: string[];
  stats: {
    totalOffers: number;
    couponCodes: number;
    inStoreCoupons: number;
    freeShippingDeals: number;
  };
  contentWriter: {
    name: string;
    role: string;
    bio: string;
  };
  featuredArticles: {
    title: string;
    description: string;
    author: string;
  }[];
  coupons: {
    date: string;
    description: string;
    details: string | null;
    savings?: string;
    minimumPurchase?: number;
    verified?: boolean;
    exclusive?: boolean;
    terms?: string;
    expires?: string;
    usedCount?: number;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const brands: Brand[] = [
  {
    id: "amazon",
    name: "Amazon",
    logo: "/brands/amazon.png",
    description: "Online Shopping",
    rating: 4.5,
    reviewCount: 669,
    phone: "206 266-1000",
    address: "410 Terry Ave N, Seattle, WA 98109",
    topOffers: [
      "10% Cash Back on Amazon Devices",
      "Up to 30% Off with Amazon Coupon",
      "Free Shipping on Orders $25+",
    ],
    stats: {
      totalOffers: 50,
      couponCodes: 5,
      inStoreCoupons: 0,
      freeShippingDeals: 1,
    },
    contentWriter: {
      name: "Ben Whitehead",
      role: "Content Writer",
      bio: "Ben is a writer and editor with more than 25 years of insider shopping experience in retail and e-commerce. He thanks his deal-spotting ability to a grandfather who would buy anything at a good price, a mother who would buy everything just to own it, and his dogs, Pugly and Dorbs, who simply cost too much.",
    },
    featuredArticles: [
      {
        title: "Shop RetailMeNot's Amazon Storefront Deals",
        description:
          "Explore RetailMeNot's Amazon Storefront for top products and deals curated by our shopping experts.",
        author: "Ingrid Alt",
      },
      {
        title: "20 Ways to Save at Amazon Every Time You Shop",
        description:
          "Why settle for paying Amazon prices, as low as they may be? You can bring down your order total even further.",
        author: "Maria Lalonde",
      },
    ],
    coupons: [
      {
        date: "Verified Today",
        description: "Up to 70% off Fashion items",
        details: "Limited time offer",
      },
      {
        date: "Verified 2 days ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
    ],
    faqs: [
      {
        question: "What is Amazon's shipping and delivery policy?",
        answer:
          "Amazon has expanded its delivery options impressively, and its delivery benefits are especially sweet for Prime members. It offers same-day delivery (free for Prime members on orders over $25); free two-day shipping (unlimited for Prime members); fresh grocery delivery; pickup lockers; in-store pickup at its physical locations and more.",
      },
      {
        question: "What is Amazon's returns and refund policy?",
        answer:
          "Amazon's return policy depends on the items that customers purchase, but most items sold and shipped by Amazon are eligible for free returns. Customized product returns are accepted within 14 days of purchase. Electronics can be returned within 30 days of purchase for a full refund.",
      },
    ],
  },
  {
    id: "walmart",
    name: "Walmart",
    logo: "/brands/walmart.png",
    description: "Retail & Grocery",
    rating: 4.2,
    reviewCount: 450,
    phone: "800-925-6278",
    address: "702 SW 8th St, Bentonville, AR 72716",
    topOffers: [
      "Free Shipping on Orders $35+",
      "Up to 40% Off Electronics",
      "Save on Grocery Pickup",
    ],
    stats: {
      totalOffers: 35,
      couponCodes: 3,
      inStoreCoupons: 2,
      freeShippingDeals: 1,
    },
    contentWriter: {
      name: "Sarah Johnson",
      role: "Content Writer",
      bio: "Sarah is a retail expert with over 15 years of experience in consumer savings and shopping trends. She specializes in finding the best deals at major retailers and helping consumers make informed purchasing decisions.",
    },
    featuredArticles: [
      {
        title: "Walmart+ Membership Benefits Guide",
        description:
          "Learn how to maximize your savings with Walmart+ membership and exclusive benefits.",
        author: "Michael Chen",
      },
      {
        title: "Walmart Grocery Shopping Tips",
        description:
          "Discover how to save money on your grocery shopping at Walmart with these expert tips.",
        author: "Emily Rodriguez",
      },
    ],
    coupons: [
      {
        date: "Verified Today",
        description: "Free Shipping on Orders $35+",
        details: "Standard shipping only",
      },
      {
        date: "Verified 1 day ago",
        description: "20% off Electronics with code TECH20",
        details: "Exclusions apply",
      },
    ],
    faqs: [
      {
        question: "What is Walmart's shipping policy?",
        answer:
          "Walmart offers free shipping on orders $35 or more. Walmart+ members get free shipping on all orders with no minimum purchase required. Same-day delivery is available in select areas for eligible items.",
      },
      {
        question: "What is Walmart's return policy?",
        answer:
          "Most items can be returned within 90 days of purchase. Electronics must be returned within 30 days. Some items have different return windows, and all returns require a receipt or proof of purchase.",
      },
    ],
  },
];
