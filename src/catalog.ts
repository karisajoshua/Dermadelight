export type Collection = 'Adults' | 'Kids' | 'Beard Care';
export type Product = { id: string; name: string; collection: Collection; size: string; description: string; image?: string; priceKes?: number; };
// Provisional catalogue: names/sizes and descriptions must be approved before launch.
// Product images should be placed in /public/products and mapped to image paths.
export const products: Product[] = [
  { id:'adult-lotion', name:'Moisturising Body Lotion', collection:'Adults', size:'400 ml', description:'Everyday body care for your skin.' },
  { id:'adult-wash', name:'Cleansing Body Wash', collection:'Adults', size:'400 ml', description:'A refreshing addition to your daily routine.' },
  { id:'adult-cream', name:'Nourishing Body Cream', collection:'Adults', size:'250 g', description:'A comforting body-care essential.' },
  { id:'kids-lotion', name:'Kids Body Lotion', collection:'Kids', size:'400 ml', description:'A little everyday care for little ones.' },
  { id:'kids-shampoo', name:'Kids Hair Shampoo', collection:'Kids', size:'400 ml', description:'Made for kids’ haircare routines.' },
  { id:'kids-cream', name:'Kids Body Cream', collection:'Kids', size:'250 g', description:'A gentle-feeling everyday ritual.' },
  { id:'beard-oil', name:'Nourishing Beard Oil', collection:'Beard Care', size:'Size to be confirmed', description:'A grooming oil concept for softening and conditioning beard hair.' },
  { id:'beard-wash', name:'Beard Wash', collection:'Beard Care', size:'Size to be confirmed', description:'A dedicated cleanser concept for beard care routines.' },
  { id:'beard-balm', name:'Beard Balm', collection:'Beard Care', size:'Size to be confirmed', description:'A styling and conditioning balm concept for daily grooming.' },
  { id:'beard-moisturiser', name:'Beard Moisturiser', collection:'Beard Care', size:'Size to be confirmed', description:'A moisturising care concept for the beard and underlying skin.' },
];
export const formatPrice = (value?: number) => value === undefined ? 'Price coming soon' : new Intl.NumberFormat('en-KE',{style:'currency',currency:'KES',maximumFractionDigits:0}).format(value);
