export const NAV_LINKS = [
  { href: '#about', key: 'about', label: 'About', frenchLabel: 'À propos', arabicLabel: 'معلومات عنا' },
  { href: '#collections', key: 'collections', label: 'Collections', frenchLabel: 'Emplacement', arabicLabel: 'الموقع' },
  { href: '#contact', key: 'contact', label: 'Contact', frenchLabel: 'Contact', arabicLabel: 'اتصل بنا' },
];

export const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/zakaria.boulahjar', key: 'instagram', label: 'Instagram', icon: 'i-ri-instagram-line' },
  { href: 'https://www.facebook.com/profile.php?id=100009263454980', key: 'facebook', label: 'Facebook', icon: 'i-ri-facebook-line' },
  { href: 'https://www.linkedin.com/in/zakaria-boulahjar-8b0a1b1b6/', key: 'linkedin', label: 'LinkedIn', icon: 'i-ri-linkedin-line' },
];

export const photosByCategory: Record<string, string[]> = {
  nature: [
    "/images/nature/1.jpg",
    "/images/nature/2.jpg",
    "/images/nature/3.jpg",
  ],
  portraits: [
    "/images/portraits/1.jpg",
    "/images/portraits/2.jpg",
  ],
  street: [
    "/images/street/1.jpg",
    "/images/street/2.jpg",
    "/images/street/3.jpg",
    "/images/street/4.jpg",
  ],
};