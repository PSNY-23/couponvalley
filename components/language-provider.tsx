"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type Language = "en" | "es" | "fr" | "ar";

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    topStores: "Top Stores",
    categories: "Categories",
    bestOffers: "Best Offers",
    blog: "Blog",
    searchPlaceholder: "Search for stores, brands or deals...",
    light: "Light",
    dark: "Dark",
    system: "System",
    language: "Language",
    english: "English",
    spanish: "Spanish",
    french: "French",
    arabic: "Arabic",
    trending: "Trending",
    topCoupons: "Top Coupons",
    topShops: "Top Shops",
    trendingCategories: "Trending Categories",
    popularOffers: "Popular Offers",
    todaysBestOffers: "Today's Best Offers",
    peopleAreCurrentlyUsing: "People Are Currently Using",
    exclusive: "Exclusive",
    viewAll: "View All",
    copyCode: "Copy Code",
    getOffer: "Get Offer",
    expires: "Expires",
    used: "Used",
    times: "times",
    newsletter: "Newsletter",
    subscribeText: "Subscribe to get the latest deals and offers",
    subscribe: "Subscribe",
    emailPlaceholder: "Enter your email",
    footerText: "Discover the best deals and coupons from top brands worldwide",
    electronics: "Electronics",
    fashion: "Fashion",
    travel: "Travel",
    food: "Food",
    beauty: "Beauty",
    home: "Home",
    copyright: "© 2025 Couponic. All rights reserved.",
  },
  es: {
    topStores: "Mejores Tiendas",
    categories: "Categorías",
    bestOffers: "Mejores Ofertas",
    blog: "Blog",
    searchPlaceholder: "Buscar tiendas, marcas u ofertas...",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    language: "Idioma",
    english: "Inglés",
    spanish: "Español",
    french: "Francés",
    arabic: "Árabe",
    trending: "Tendencias",
    topCoupons: "Mejores Cupones",
    topShops: "Mejores Tiendas",
    trendingCategories: "Categorías Populares",
    popularOffers: "Ofertas Populares",
    todaysBestOffers: "Mejores Ofertas de Hoy",
    peopleAreCurrentlyUsing: "La Gente Está Usando",
    exclusive: "Exclusivo",
    viewAll: "Ver Todo",
    copyCode: "Copiar Código",
    getOffer: "Obtener Oferta",
    expires: "Expira",
    used: "Usado",
    times: "veces",
    newsletter: "Boletín",
    subscribeText: "Suscríbete para recibir las últimas ofertas",
    subscribe: "Suscribirse",
    emailPlaceholder: "Ingresa tu correo",
    footerText: "Descubre las mejores ofertas y cupones de las mejores marcas",
    electronics: "Electrónica",
    fashion: "Moda",
    travel: "Viajes",
    food: "Comida",
    beauty: "Belleza",
    home: "Hogar",
    copyright: "© 2025 Couponic. Todos los derechos reservados.",
  },
  fr: {
    topStores: "Meilleures Boutiques",
    categories: "Catégories",
    bestOffers: "Meilleures Offres",
    blog: "Blog",
    searchPlaceholder: "Rechercher des boutiques, marques ou offres...",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
    language: "Langue",
    english: "Anglais",
    spanish: "Espagnol",
    french: "Français",
    arabic: "Arabe",
    trending: "Tendances",
    topCoupons: "Meilleurs Coupons",
    topShops: "Meilleures Boutiques",
    trendingCategories: "Catégories Populaires",
    popularOffers: "Offres Populaires",
    todaysBestOffers: "Meilleures Offres du Jour",
    peopleAreCurrentlyUsing: "Actuellement Utilisés",
    exclusive: "Exclusif",
    viewAll: "Voir Tout",
    copyCode: "Copier le Code",
    getOffer: "Obtenir l'Offre",
    expires: "Expire",
    used: "Utilisé",
    times: "fois",
    newsletter: "Newsletter",
    subscribeText: "Abonnez-vous pour recevoir les dernières offres",
    subscribe: "S'abonner",
    emailPlaceholder: "Entrez votre email",
    footerText:
      "Découvrez les meilleures offres et coupons des meilleures marques",
    electronics: "Électronique",
    fashion: "Mode",
    travel: "Voyages",
    food: "Nourriture",
    beauty: "Beauté",
    home: "Maison",
    copyright: "© 2025 Couponic. Tous droits réservés.",
  },
  ar: {
    topStores: "أفضل المتاجر",
    categories: "الفئات",
    bestOffers: "أفضل العروض",
    blog: "المدونة",
    searchPlaceholder: "ابحث عن متاجر أو ماركات أو عروض...",
    light: "فاتح",
    dark: "داكن",
    system: "النظام",
    language: "اللغة",
    english: "الإنجليزية",
    spanish: "الإسبانية",
    french: "الفرنسية",
    arabic: "العربية",
    trending: "الرائج",
    topCoupons: "أفضل الكوبونات",
    topShops: "أفضل المتاجر",
    trendingCategories: "الفئات الرائجة",
    popularOffers: "العروض الشائعة",
    todaysBestOffers: "أفضل عروض اليوم",
    peopleAreCurrentlyUsing: "يستخدمها الناس حاليًا",
    exclusive: "حصري",
    viewAll: "عرض الكل",
    copyCode: "نسخ الرمز",
    getOffer: "الحصول على العرض",
    expires: "ينتهي",
    used: "استخدم",
    times: "مرات",
    newsletter: "النشرة الإخبارية",
    subscribeText: "اشترك للحصول على أحدث العروض والخصومات",
    subscribe: "اشتراك",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    footerText: "اكتشف أفضل العروض والكوبونات من أفضل العلامات التجارية",
    electronics: "إلكترونيات",
    fashion: "أزياء",
    travel: "سفر",
    food: "طعام",
    beauty: "جمال",
    home: "منزل",
    copyright: "© 2025 كوبونيك. جميع الحقوق محفوظة.",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Check browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "es") setLanguage("es");
    else if (browserLang === "fr") setLanguage("fr");
    else if (browserLang === "ar") setLanguage("ar");

    // Set RTL for Arabic
    setIsRTL(language === "ar");

    // Add RTL class to html element if needed
    if (language === "ar") {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
