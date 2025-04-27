export type Coupon = {
  id: number;
  code: string;
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  expiryDate: string;
  usedCount: number;
  slug: string;
};

export const coupons: Coupon[] = [
  {
    id: 1,
    code: "SUMMER25",
    title: "25% Off Summer Collection",
    description: "Get 25% off on all summer collection items",
    brandName: "FashionHub",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-08-31",
    usedCount: 1245,
    slug: "fashionhub-summer25",
  },
  {
    id: 2,
    code: "TECH15",
    title: "15% Off Electronics",
    description: "Save 15% on all electronics",
    brandName: "TechWorld",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-15",
    usedCount: 987,
    slug: "techworld-tech15",
  },
  {
    id: 3,
    code: "BEAUTY30",
    title: "30% Off Beauty Products",
    description: "Get 30% off on all beauty products",
    brandName: "BeautyStore",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-30",
    usedCount: 756,
    slug: "beautystore-beauty30",
  },
  {
    id: 4,
    code: "FOOD20",
    title: "20% Off Food Delivery",
    description: "Save 20% on your next food delivery",
    brandName: "FoodExpress",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-05-31",
    usedCount: 1532,
    slug: "foodexpress-food20",
  },
  {
    id: 5,
    code: "TRAVEL10",
    title: "10% Off Travel Packages",
    description: "Get 10% off on all travel packages",
    brandName: "TravelWise",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-09-30",
    usedCount: 432,
    slug: "travelwise-travel10",
  },
  {
    id: 6,
    code: "HOME25",
    title: "25% Off Home Decor",
    description: "Save 25% on all home decor items",
    brandName: "HomeStyle",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-31",
    usedCount: 876,
    slug: "homestyle-home25",
  },
  {
    id: 7,
    code: "FITNESS20",
    title: "20% Off Fitness Equipment",
    description: "Save 20% on all fitness equipment",
    brandName: "FitLife",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-08-15",
    usedCount: 654,
    slug: "fitlife-fitness20",
  },
  {
    id: 8,
    code: "GAMING15",
    title: "15% Off Gaming Accessories",
    description: "Get 15% off on all gaming accessories",
    brandName: "GameZone",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-20",
    usedCount: 789,
    slug: "gamezone-gaming15",
  },
  {
    id: 9,
    code: "BOOKS30",
    title: "30% Off Books",
    description: "Save 30% on all books",
    brandName: "BookWorld",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-25",
    usedCount: 543,
    slug: "bookworld-books30",
  },
  {
    id: 10,
    code: "PET25",
    title: "25% Off Pet Supplies",
    description: "Get 25% off on all pet supplies",
    brandName: "PetCare",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-08-10",
    usedCount: 321,
    slug: "petcare-pet25",
  },
];
