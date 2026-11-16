# Homepage visual reference and image handoff

The approved reference is the generated Derma Delight homepage image in this conversation (family hero, burgundy/gold navigation, three collection banners, benefit strip, Our Story, and featured products).

## Image files to provide

Save each image in the repository at the **exact** path below. The homepage CSS already references the first five files.

| Website area | Required file | Recommended crop |
| --- | --- | --- |
| Hero: woman, child, bearded man, product arrangement | `public/images/home/hero-family.webp` | 1920×900 landscape; subjects predominantly on right, clear text-safe left |
| Adults category | `public/images/home/category-adults.webp` | 900×520; adult model on left, text-safe right |
| Kids category | `public/images/home/category-kids.webp` | 900×520; child model on left, text-safe right |
| Beard Care category | `public/images/home/category-beard.webp` | 900×520; bearded model on left, text-safe right |
| Our Story product arrangement | `public/images/home/story-products.webp` | 1200×700; products centred/left |

The site uses background colours if these files are absent. Add the files before final visual review.

## Individual product images

Store product images under `public/images/products/` using these proposed names:

- `adult-lotion.webp`
- `adult-wash.webp`
- `adult-cream.webp`
- `kids-lotion.webp`
- `kids-shampoo.webp`
- `kids-cream.webp`
- `beard-oil.webp`
- `beard-wash.webp`
- `beard-balm.webp`
- `beard-moisturiser.webp`

**Product image hookup:** in `src/catalog.ts`, add `image: '/images/products/adult-lotion.webp'` to the matching product entry after uploading that file. The product card, modal and cart will all reuse it. Do not add paths before files exist, or browsers will display broken images.

## Image-generation guidance

- Create clean photographic images, without embedded website UI, buttons or overlaid headlines.
- Leave clear negative space where the HTML text is placed.
- Use the approved official Derma Delight logo/packaging art in post-production; AI-generated logo approximations should not be used as final brand assets.
- Hero should show an adult woman, a child and a bearded adult man; use suitable commercial-model permissions.
- Brand palette: burgundy `#790E2A`, gold `#C99231`, cream `#FFF9F1`; Kids accent soft pink; Beard Care deep brown.
- Export optimised WebP at 80–88% quality. Keep originals for future crops.
- Avoid unverified claims (e.g., dermatologically tested, specific ingredients, medical benefits, guaranteed beard growth, free delivery thresholds) unless approved and documented.

## Current implementation

The page now follows the visual reference's section order and approximate layout. It is not a pixel-perfect match until actual assets are uploaded, a browser build is checked, and spacing is refined against screenshots at desktop and mobile widths.

**No real product prices or checkout are enabled.** The prices shown in the concept artwork are illustrative, not approved commercial prices.
