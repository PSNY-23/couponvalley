"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronRight,
  Star,
  Utensils,
  ShoppingBag,
  Plane,
  Sparkles,
  Car,
  Home,
  Gamepad,
  Gift,
  Book,
  Dumbbell,
  Baby,
  Laptop,
  Smartphone,
  Headphones,
  Camera,
  Music,
  Heart,
  Coffee,
  Pizza,
  Beer,
  Wine,
  ShoppingCart,
  CreditCard,
  Wallet,
  Ticket,
  Hotel,
  Train,
  Bus,
  Ship,
  Bike,
  CarFront,
  CarTaxiFront,
  Caravan,
  PlaneTakeoff,
  PlaneLanding,
  Compass,
  Map,
  Globe,
  Mountain,
  Trees,
  Tent,
  Umbrella,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Waves,
  Droplets,
  Flame,
  Snowflake,
  Leaf,
  Flower,
  Bug,
  Bird,
  Fish,
  Dog,
  Cat,
  Rabbit,
  PawPrint,
  Bone,
  Cookie,
  IceCream,
  Cake,
  Candy,
  Apple,
  Salad,
  Sandwich,
  Soup,
  Milk,
  Diamond,
  Crown,
  Trophy,
  Medal,
  Ribbon,
  Flag,
  Clock,
  Calendar,
  Timer,
  Hourglass,
  Watch,
  AlarmClock,
  CalendarClock,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarHeart,
  Palette,
  Film,
  User,
  Users,
  Package,
  Truck,
  Shield,
  Building,
  FerrisWheel,
  Briefcase,
  Shirt,
  Glasses,
  Tshirt,
  UserCircle,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  UserCog,
  UserClock,
  UserSearch,
  UserPlus2,
  UserMinus2,
  UserCheck2,
  UserX2,
  UserCog2,
  UserClock2,
  UserSearch2,
  UserPlus3,
  UserMinus3,
  UserCheck3,
  UserX3,
  UserCog3,
  UserClock3,
  UserSearch3,
  UserPlus4,
  UserMinus4,
  UserCheck4,
  UserX4,
  UserCog4,
  UserClock4,
  UserSearch4,
  UserPlus5,
  UserMinus5,
  UserCheck5,
  UserX5,
  UserCog5,
  UserClock5,
  UserSearch5,
  UserPlus6,
  UserMinus6,
  UserCheck6,
  UserX6,
  UserCog6,
  UserClock6,
  UserSearch6,
  UserPlus7,
  UserMinus7,
  UserCheck7,
  UserX7,
  UserCog7,
  UserClock7,
  UserSearch7,
  UserPlus8,
  UserMinus8,
  UserCheck8,
  UserX8,
  UserCog8,
  UserClock8,
  UserSearch8,
  UserPlus9,
  UserMinus9,
  UserCheck9,
  UserX9,
  UserCog9,
  UserClock9,
  UserSearch9,
  UserPlus10,
  UserMinus10,
  UserCheck10,
  UserX10,
  UserCog10,
  UserClock10,
  UserSearch10,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type CategoryKey =
  | "Food & Dining"
  | "Fashion"
  | "Travel"
  | "Beauty & Health"
  | "Automotive"
  | "Electronics"
  | "Home & Living"
  | "Sports & Fitness"
  | "Entertainment"
  | "Education"
  | "Gaming"
  | "Books & Media"
  | "Pets"
  | "Jewelry"
  | "Toys & Games"
  | "Office Supplies"
  | "Arts & Crafts"
  | "Music"
  | "Movies"
  | "Photography";

const subcategoryIcons: Record<string, React.ReactElement> = {
  // Food & Dining
  Restaurants: <Utensils className="h-6 w-6" />,
  Cafes: <Coffee className="h-6 w-6" />,
  "Fast Food": <Utensils className="h-6 w-6" />,
  "Fine Dining": <Utensils className="h-6 w-6" />,
  "Food Delivery": <Truck className="h-6 w-6" />,
  "Grocery Stores": <ShoppingCart className="h-6 w-6" />,
  Beverages: <Beer className="h-6 w-6" />,
  Bakery: <Cookie className="h-6 w-6" />,
  Desserts: <IceCream className="h-6 w-6" />,
  "International Cuisine": <Globe className="h-6 w-6" />,

  // Fashion
  Clothing: <Shirt className="h-6 w-6" />,
  Shoes: <ShoppingBag className="h-6 w-6" />,
  Accessories: <Watch className="h-6 w-6" />,
  Jewelry: <Diamond className="h-6 w-6" />,
  Watches: <Watch className="h-6 w-6" />,
  Bags: <ShoppingBag className="h-6 w-6" />,
  Sunglasses: <Glasses className="h-6 w-6" />,
  Hats: <UserCircle className="h-6 w-6" />,
  Scarves: <UserCircle className="h-6 w-6" />,
  Belts: <UserCircle className="h-6 w-6" />,

  // Travel
  Flights: <Plane className="h-6 w-6" />,
  Hotels: <Hotel className="h-6 w-6" />,
  "Vacation Packages": <Briefcase className="h-6 w-6" />,
  "Car Rentals": <Car className="h-6 w-6" />,
  Cruises: <Ship className="h-6 w-6" />,
  Trains: <Train className="h-6 w-6" />,
  Buses: <Bus className="h-6 w-6" />,
  Taxis: <CarTaxiFront className="h-6 w-6" />,
  "Airport Transfers": <PlaneTakeoff className="h-6 w-6" />,
  "Travel Insurance": <Shield className="h-6 w-6" />,
};

const subcategoryColors: Record<string, { bg: string; text: string }> = {
  // Food & Dining
  Restaurants: { bg: "bg-orange-100", text: "text-orange-600" },
  Cafes: { bg: "bg-amber-100", text: "text-amber-600" },
  "Fast Food": { bg: "bg-red-100", text: "text-red-600" },
  "Fine Dining": { bg: "bg-purple-100", text: "text-purple-600" },
  "Food Delivery": { bg: "bg-green-100", text: "text-green-600" },
  "Grocery Stores": { bg: "bg-blue-100", text: "text-blue-600" },
  Beverages: { bg: "bg-yellow-100", text: "text-yellow-600" },
  Bakery: { bg: "bg-pink-100", text: "text-pink-600" },
  Desserts: { bg: "bg-rose-100", text: "text-rose-600" },
  "International Cuisine": { bg: "bg-indigo-100", text: "text-indigo-600" },

  // Fashion
  Clothing: { bg: "bg-violet-100", text: "text-violet-600" },
  Shoes: { bg: "bg-fuchsia-100", text: "text-fuchsia-600" },
  Accessories: { bg: "bg-cyan-100", text: "text-cyan-600" },
  Jewelry: { bg: "bg-teal-100", text: "text-teal-600" },
  Watches: { bg: "bg-emerald-100", text: "text-emerald-600" },
  Bags: { bg: "bg-sky-100", text: "text-sky-600" },
  Sunglasses: { bg: "bg-blue-100", text: "text-blue-600" },
  Hats: { bg: "bg-indigo-100", text: "text-indigo-600" },
  Scarves: { bg: "bg-purple-100", text: "text-purple-600" },
  Belts: { bg: "bg-pink-100", text: "text-pink-600" },

  // Travel
  Flights: { bg: "bg-blue-100", text: "text-blue-600" },
  Hotels: { bg: "bg-amber-100", text: "text-amber-600" },
  "Vacation Packages": { bg: "bg-green-100", text: "text-green-600" },
  "Car Rentals": { bg: "bg-red-100", text: "text-red-600" },
  Cruises: { bg: "bg-cyan-100", text: "text-cyan-600" },
  Trains: { bg: "bg-orange-100", text: "text-orange-600" },
  Buses: { bg: "bg-yellow-100", text: "text-yellow-600" },
  Taxis: { bg: "bg-lime-100", text: "text-lime-600" },
  "Airport Transfers": { bg: "bg-teal-100", text: "text-teal-600" },
  "Travel Insurance": { bg: "bg-emerald-100", text: "text-emerald-600" },
};

const categoryData: Record<CategoryKey, string[]> = {
  "Food & Dining": [
    "Restaurants",
    "Cafes",
    "Fast Food",
    "Fine Dining",
    "Food Delivery",
    "Grocery Stores",
    "Beverages",
    "Bakery",
    "Desserts",
    "International Cuisine",
    "Food Trucks",
    "Catering",
    "Meal Kits",
    "Organic Food",
    "Specialty Food",
    "Wine & Spirits",
    "Coffee Shops",
    "Ice Cream",
    "Pizza",
    "Sushi",
    "BBQ",
    "Seafood",
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Farmers Market",
    "Food Tours",
    "Cooking Classes",
    "Food Festivals",
    "Food Subscription",
  ],
  Fashion: [
    "Clothing",
    "Shoes",
    "Accessories",
    "Jewelry",
    "Watches",
    "Bags",
    "Sunglasses",
    "Hats",
    "Scarves",
    "Belts",
    "Socks",
    "Underwear",
    "Swimwear",
    "Activewear",
    "Formal Wear",
    "Casual Wear",
    "Winter Wear",
    "Summer Wear",
    "Luxury Fashion",
    "Vintage Clothing",
    "Designer Brands",
    "Streetwear",
    "Ethnic Wear",
    "Maternity Wear",
    "Plus Size",
    "Kids Fashion",
    "Men's Fashion",
    "Women's Fashion",
    "Unisex Fashion",
    "Fashion Accessories",
  ],
  Travel: [
    "Flights",
    "Hotels",
    "Vacation Packages",
    "Car Rentals",
    "Cruises",
    "Trains",
    "Buses",
    "Taxis",
    "Airport Transfers",
    "Travel Insurance",
    "Visa Services",
    "Travel Guides",
    "Tour Packages",
    "Adventure Tours",
    "Sightseeing",
    "Theme Parks",
    "Beach Resorts",
    "Mountain Resorts",
    "City Tours",
    "Cultural Tours",
    "Food Tours",
    "Wine Tours",
    "Safari Tours",
    "Cruise Packages",
    "Honeymoon Packages",
    "Family Vacations",
    "Solo Travel",
    "Group Tours",
    "Luxury Travel",
    "Budget Travel",
  ],
  "Beauty & Health": [
    "Skincare",
    "Makeup",
    "Haircare",
    "Fragrances",
    "Personal Care",
    "Health Supplements",
    "Fitness Equipment",
    "Yoga & Meditation",
    "Spa Services",
    "Salon Services",
    "Massage Therapy",
    "Alternative Medicine",
    "Dental Care",
    "Vision Care",
    "Hearing Aids",
    "Medical Supplies",
    "Health Insurance",
    "Mental Health",
    "Nutrition",
    "Weight Loss",
    "Fitness Classes",
    "Gym Memberships",
    "Sports Equipment",
    "Wellness Products",
    "Natural Beauty",
    "Organic Products",
    "Vegan Beauty",
    "Men's Grooming",
    "Women's Health",
    "Children's Health",
  ],
  Automotive: [
    "New Cars",
    "Used Cars",
    "Car Parts",
    "Car Accessories",
    "Car Service",
    "Car Insurance",
    "Car Loans",
    "Car Rental",
    "Car Wash",
    "Car Detailing",
    "Towing Services",
    "Roadside Assistance",
    "Auto Repair",
    "Tire Services",
    "Oil Change",
    "Battery Services",
    "Windshield Repair",
    "Auto Glass",
    "Paint & Body",
    "Transmission",
    "Engine Repair",
    "Brake Services",
    "Suspension",
    "Exhaust Systems",
    "Performance Parts",
    "Car Electronics",
    "Car Audio",
    "GPS Systems",
    "Car Security",
    "Car Maintenance",
  ],
  Electronics: [
    "Smartphones",
    "Laptops",
    "Tablets",
    "Desktops",
    "Monitors",
    "Printers",
    "Cameras",
    "TVs",
    "Audio Equipment",
    "Gaming Consoles",
    "Accessories",
    "Components",
    "Networking",
    "Storage",
    "Security Systems",
    "Smart Home",
    "Wearables",
    "Drones",
    "Virtual Reality",
    "Augmented Reality",
    "Robotics",
    "IoT Devices",
    "Power Banks",
    "Chargers",
    "Cables",
    "Adapters",
    "Cases",
    "Screen Protectors",
    "Gaming Accessories",
    "Audio Accessories",
  ],
  "Home & Living": [
    "Furniture",
    "Decor",
    "Kitchenware",
    "Bedding",
    "Bath",
    "Lighting",
    "Storage",
    "Cleaning",
    "Laundry",
    "Garden",
    "Outdoor",
    "Tools",
    "Paint",
    "Wallpaper",
    "Flooring",
    "Carpets",
    "Curtains",
    "Blinds",
    "Rugs",
    "Art",
    "Plants",
    "Pet Supplies",
    "Home Office",
    "Home Security",
    "Smart Home",
    "Home Improvement",
    "Home Repair",
    "Home Services",
    "Moving Services",
    "Storage Solutions",
  ],
  "Sports & Fitness": [
    "Fitness Equipment",
    "Sports Equipment",
    "Team Sports",
    "Individual Sports",
    "Outdoor Sports",
    "Indoor Sports",
    "Water Sports",
    "Winter Sports",
    "Combat Sports",
    "Racket Sports",
    "Golf",
    "Tennis",
    "Basketball",
    "Football",
    "Soccer",
    "Baseball",
    "Hockey",
    "Swimming",
    "Running",
    "Cycling",
    "Yoga",
    "Pilates",
    "Dance",
    "Martial Arts",
    "Boxing",
    "Wrestling",
    "Fitness Classes",
    "Personal Training",
    "Sports Nutrition",
    "Sports Medicine",
  ],
  Entertainment: [
    "Movies",
    "TV Shows",
    "Music",
    "Books",
    "Games",
    "Theater",
    "Concerts",
    "Events",
    "Tickets",
    "Streaming Services",
    "Gaming",
    "Virtual Reality",
    "Theme Parks",
    "Museums",
    "Art Galleries",
    "Exhibitions",
    "Festivals",
    "Comedy Shows",
    "Magic Shows",
    "Circus",
    "Zoo",
    "Aquarium",
    "Botanical Gardens",
    "Historical Sites",
    "Cultural Events",
    "Sports Events",
    "Food Festivals",
    "Wine Tasting",
    "Beer Festivals",
    "Music Festivals",
  ],
  Education: [
    "Online Courses",
    "Tutoring",
    "Language Learning",
    "Test Preparation",
    "Academic Books",
    "Educational Software",
    "Learning Tools",
    "Study Materials",
    "Educational Toys",
    "Science Kits",
    "Art Supplies",
    "Music Lessons",
    "Dance Classes",
    "Sports Training",
    "Coding Classes",
    "Business Courses",
    "Professional Development",
    "Certification Programs",
    "Degree Programs",
    "Vocational Training",
    "Special Education",
    "Early Learning",
    "Homeschooling",
    "Study Abroad",
    "Student Services",
    "Educational Apps",
    "E-books",
    "Audiobooks",
    "Educational Videos",
    "Learning Platforms",
  ],
  Gaming: [
    "Video Games",
    "Gaming Consoles",
    "Gaming PCs",
    "Gaming Accessories",
    "Gaming Chairs",
    "Gaming Headsets",
    "Gaming Mice",
    "Gaming Keyboards",
    "Gaming Monitors",
    "Gaming Laptops",
    "Gaming Desktops",
    "Gaming Components",
    "Gaming Peripherals",
    "Gaming Software",
    "Gaming Services",
    "Gaming Subscriptions",
    "Gaming Events",
    "Gaming Tournaments",
    "Gaming Communities",
    "Gaming News",
    "Gaming Reviews",
    "Gaming Guides",
    "Gaming Tips",
    "Gaming Tricks",
    "Gaming Hacks",
    "Gaming Mods",
    "Gaming Skins",
    "Gaming Items",
    "Gaming Currency",
    "Gaming Accounts",
  ],
  "Books & Media": [
    "Books",
    "E-books",
    "Audiobooks",
    "Magazines",
    "Newspapers",
    "Comics",
    "Graphic Novels",
    "Textbooks",
    "Children's Books",
    "Fiction",
    "Non-fiction",
    "Biographies",
    "Self-help",
    "Cookbooks",
    "Travel Guides",
    "Art Books",
    "Photography Books",
    "Music Books",
    "Movie Books",
    "TV Show Books",
    "Gaming Books",
    "Sports Books",
    "History Books",
    "Science Books",
    "Technology Books",
    "Business Books",
    "Finance Books",
    "Health Books",
    "Fitness Books",
    "Education Books",
  ],
  Pets: [
    "Dogs",
    "Cats",
    "Birds",
    "Fish",
    "Reptiles",
    "Small Animals",
    "Pet Food",
    "Pet Supplies",
    "Pet Toys",
    "Pet Beds",
    "Pet Carriers",
    "Pet Grooming",
    "Pet Health",
    "Pet Medicine",
    "Pet Insurance",
    "Pet Training",
    "Pet Services",
    "Pet Boarding",
    "Pet Sitting",
    "Pet Walking",
    "Pet Daycare",
    "Pet Adoption",
    "Pet Rescue",
    "Pet Shelters",
    "Pet Clinics",
    "Pet Hospitals",
    "Pet Stores",
    "Pet Products",
    "Pet Accessories",
    "Pet Care",
  ],
  Jewelry: [
    "Necklaces",
    "Earrings",
    "Rings",
    "Bracelets",
    "Watches",
    "Anklets",
    "Brooches",
    "Pendants",
    "Charms",
    "Cufflinks",
    "Tie Clips",
    "Body Jewelry",
    "Fashion Jewelry",
    "Fine Jewelry",
    "Luxury Jewelry",
    "Designer Jewelry",
    "Vintage Jewelry",
    "Antique Jewelry",
    "Handmade Jewelry",
    "Custom Jewelry",
    "Engagement Rings",
    "Wedding Rings",
    "Diamond Jewelry",
    "Gold Jewelry",
    "Silver Jewelry",
    "Platinum Jewelry",
    "Pearl Jewelry",
    "Gemstone Jewelry",
    "Crystal Jewelry",
    "Jewelry Sets",
  ],
  "Toys & Games": [
    "Action Figures",
    "Dolls",
    "Building Toys",
    "Board Games",
    "Card Games",
    "Puzzle Games",
    "Video Games",
    "Educational Toys",
    "Outdoor Toys",
    "Sports Toys",
    "Musical Toys",
    "Art Toys",
    "Science Toys",
    "Robot Toys",
    "Remote Control Toys",
    "Vehicle Toys",
    "Plush Toys",
    "Wooden Toys",
    "Electronic Toys",
    "Interactive Toys",
    "Collectible Toys",
    "Vintage Toys",
    "Classic Toys",
    "Modern Toys",
    "Baby Toys",
    "Toddler Toys",
    "Kids Toys",
    "Teen Toys",
    "Adult Games",
    "Party Games",
  ],
  "Office Supplies": [
    "Paper",
    "Pens",
    "Pencils",
    "Markers",
    "Highlighters",
    "Notebooks",
    "Binders",
    "Folders",
    "Envelopes",
    "Labels",
    "Tape",
    "Staples",
    "Scissors",
    "Rulers",
    "Calculators",
    "Desk Organizers",
    "File Cabinets",
    "Storage Boxes",
    "Whiteboards",
    "Bulletin Boards",
    "Calendars",
    "Planners",
    "Desk Accessories",
    "Office Furniture",
    "Office Equipment",
    "Office Technology",
    "Office Services",
    "Office Supplies",
    "Office Products",
    "Office Solutions",
  ],
  "Arts & Crafts": [
    "Painting",
    "Drawing",
    "Sculpting",
    "Pottery",
    "Jewelry Making",
    "Beading",
    "Knitting",
    "Crocheting",
    "Sewing",
    "Quilting",
    "Embroidery",
    "Cross Stitch",
    "Scrapbooking",
    "Card Making",
    "Paper Crafts",
    "Wood Crafts",
    "Metal Crafts",
    "Glass Crafts",
    "Ceramic Crafts",
    "Textile Crafts",
    "Fiber Arts",
    "Mixed Media",
    "Digital Art",
    "Printmaking",
    "Photography",
    "Calligraphy",
    "Origami",
    "Candle Making",
    "Soap Making",
    "Craft Supplies",
  ],
  Music: [
    "Instruments",
    "Sheet Music",
    "Music Books",
    "Music Lessons",
    "Music Software",
    "Music Equipment",
    "Music Accessories",
    "Music Services",
    "Music Streaming",
    "Music Downloads",
    "Music CDs",
    "Music Vinyl",
    "Music Merchandise",
    "Music Events",
    "Music Festivals",
    "Music Concerts",
    "Music Tours",
    "Music Workshops",
    "Music Classes",
    "Music Schools",
    "Music Studios",
    "Music Production",
    "Music Recording",
    "Music Mixing",
    "Music Mastering",
    "Music Distribution",
    "Music Publishing",
    "Music Licensing",
    "Music Rights",
    "Music Business",
  ],
  Movies: [
    "Movie Tickets",
    "Movie Streaming",
    "Movie Downloads",
    "Movie Rentals",
    "Movie Sales",
    "Movie Merchandise",
    "Movie Events",
    "Movie Festivals",
    "Movie Premieres",
    "Movie Screenings",
    "Movie Theaters",
    "Movie Services",
    "Movie Production",
    "Movie Distribution",
    "Movie Licensing",
    "Movie Rights",
    "Movie Business",
    "Movie News",
    "Movie Reviews",
    "Movie Guides",
    "Movie Tips",
    "Movie Tricks",
    "Movie Hacks",
    "Movie Mods",
    "Movie Skins",
    "Movie Items",
    "Movie Currency",
    "Movie Accounts",
    "Movie Subscriptions",
    "Movie Memberships",
  ],
  Photography: [
    "Cameras",
    "Lenses",
    "Accessories",
    "Lighting",
    "Studio Equipment",
    "Photo Editing",
    "Photo Printing",
    "Photo Books",
    "Photo Albums",
    "Photo Frames",
    "Photo Services",
    "Photo Events",
    "Photo Tours",
    "Photo Workshops",
    "Photo Classes",
    "Photo Schools",
    "Photo Studios",
    "Photo Production",
    "Photo Distribution",
    "Photo Licensing",
    "Photo Rights",
    "Photo Business",
    "Photo News",
    "Photo Reviews",
    "Photo Guides",
    "Photo Tips",
    "Photo Tricks",
    "Photo Hacks",
    "Photo Mods",
    "Photo Skins",
  ],
};

const categoryColors: Record<CategoryKey, { bg: string; text: string }> = {
  "Food & Dining": { bg: "bg-orange-100", text: "text-orange-600" },
  Fashion: { bg: "bg-pink-100", text: "text-pink-600" },
  Travel: { bg: "bg-blue-100", text: "text-blue-600" },
  "Beauty & Health": { bg: "bg-purple-100", text: "text-purple-600" },
  Automotive: { bg: "bg-green-100", text: "text-green-600" },
  Electronics: { bg: "bg-indigo-100", text: "text-indigo-600" },
  "Home & Living": { bg: "bg-yellow-100", text: "text-yellow-600" },
  "Sports & Fitness": { bg: "bg-red-100", text: "text-red-600" },
  Entertainment: { bg: "bg-teal-100", text: "text-teal-600" },
  Education: { bg: "bg-cyan-100", text: "text-cyan-600" },
  Gaming: { bg: "bg-violet-100", text: "text-violet-600" },
  "Books & Media": { bg: "bg-amber-100", text: "text-amber-600" },
  Pets: { bg: "bg-emerald-100", text: "text-emerald-600" },
  Jewelry: { bg: "bg-rose-100", text: "text-rose-600" },
  "Toys & Games": { bg: "bg-sky-100", text: "text-sky-600" },
  "Office Supplies": { bg: "bg-slate-100", text: "text-slate-600" },
  "Arts & Crafts": { bg: "bg-fuchsia-100", text: "text-fuchsia-600" },
  Music: { bg: "bg-lime-100", text: "text-lime-600" },
  Movies: { bg: "bg-orange-100", text: "text-orange-600" },
  Photography: { bg: "bg-blue-100", text: "text-blue-600" },
};

const iconMap: Record<CategoryKey, React.ReactElement> = {
  "Food & Dining": <Utensils className="h-6 w-6" />,
  Fashion: <ShoppingBag className="h-6 w-6" />,
  Travel: <Plane className="h-6 w-6" />,
  "Beauty & Health": <Sparkles className="h-6 w-6" />,
  Automotive: <Car className="h-6 w-6" />,
  Electronics: <Laptop className="h-6 w-6" />,
  "Home & Living": <Home className="h-6 w-6" />,
  "Sports & Fitness": <Dumbbell className="h-6 w-6" />,
  Entertainment: <Gamepad className="h-6 w-6" />,
  Education: <Book className="h-6 w-6" />,
  Gaming: <Gamepad className="h-6 w-6" />,
  "Books & Media": <Book className="h-6 w-6" />,
  Pets: <PawPrint className="h-6 w-6" />,
  Jewelry: <Gift className="h-6 w-6" />,
  "Toys & Games": <Gamepad className="h-6 w-6" />,
  "Office Supplies": <ShoppingCart className="h-6 w-6" />,
  "Arts & Crafts": <Palette className="h-6 w-6" />,
  Music: <Music className="h-6 w-6" />,
  Movies: <Film className="h-6 w-6" />,
  Photography: <Camera className="h-6 w-6" />,
};

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("Food & Dining");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Search across all subcategories
  const allSubcategories = Object.entries(categoryData).flatMap(
    ([category, subcats]) =>
      subcats.map((subcat) => ({
        category: category as CategoryKey,
        subcat,
      }))
  );

  const filteredSubcategories = searchQuery
    ? allSubcategories.filter((item) =>
        item.subcat.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categoryData[selectedCategory].map((subcat) => ({
        category: selectedCategory,
        subcat,
      }));

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-[90%]">
        <div className="mb-8">
          <Skeleton className="h-12 w-full max-w-xl mx-auto" />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 shrink-0">
            <Skeleton className="h-8 w-32 mb-4" />
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </aside>
          <main className="flex-1">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Skeleton key={i} className="h-40 w-full" />
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-[90%]">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold mb-6 font-sans">Categories</h2>
              <div className="space-y-2">
                {Object.keys(categoryData).map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "ghost"
                    }
                    className={cn(
                      "w-full justify-between group transition-all duration-200",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    )}
                    onClick={() => setSelectedCategory(category as CategoryKey)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "p-2 rounded-lg transition-all duration-200",
                          selectedCategory === category
                            ? "bg-primary-foreground/20"
                            : categoryColors[category as CategoryKey].bg
                        )}
                      >
                        <div
                          className={cn(
                            "transition-colors duration-200",
                            selectedCategory === category
                              ? "text-primary-foreground"
                              : categoryColors[category as CategoryKey].text
                          )}
                        >
                          {iconMap[category as CategoryKey]}
                        </div>
                      </div>
                      <span className="font-medium">{category}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold font-sans">
                {searchQuery
                  ? "Search Results"
                  : `${selectedCategory} Subcategories`}
              </h2>
              <div className="flex items-center gap-4">
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search all subcategories..."
                    className="w-full pl-9 h-9 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  {filteredSubcategories.length} items
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {filteredSubcategories.map((item, idx) => (
                  <Card
                    key={idx}
                    className="group hover:shadow-md transition-all duration-200"
                  >
                    <CardHeader className="pb-2">
                      <div
                        className={cn(
                          "mb-2 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-200",
                          subcategoryColors[item.subcat]?.bg ||
                            categoryColors[item.category].bg
                        )}
                      >
                        <div
                          className={
                            subcategoryColors[item.subcat]?.text ||
                            categoryColors[item.category].text
                          }
                        >
                          {subcategoryIcons[item.subcat] ||
                            iconMap[item.category]}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                        {item.subcat}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="mr-1 h-4 w-4 text-yellow-400" />
                        <span className="font-medium">4.5</span>
                        <span className="mx-2">•</span>
                        <span className="font-medium">100+ deals</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
