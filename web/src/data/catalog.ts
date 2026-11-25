export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

export interface Product {
  id: string
  name: string
  description: string
  photo: Photo
}

const photo = (file: string, alt: string, width: number, height: number): Photo => ({
  src: `img/${file}`,
  alt,
  width,
  height,
})

export const signatureCookie: Product = {
  id: 'marshmallow-cookie',
  name: 'Marşmelou kuki',
  description: 'Qızardılmış marşmelou, süd və ağ şokolad şırımları. İki yerə bölüncə içindəki marşmelou uzanır.',
  photo: photo('marshmallow-cookie.webp', 'Üstündə qızardılmış marşmelou olan kuki', 1400, 788),
}

/** First item is shown tall on the left of the grid. */
export const cookies: Product[] = [
  {
    id: 'banana-caramel-cookie',
    name: 'Banan-karamel kuki',
    description: 'Banan dilimi, karamel və iki növ şokolad şırımı.',
    photo: photo('banana-caramel-cookie.webp', 'Üstündə banan dilimi olan karamelli kuki', 1122, 1402),
  },
  {
    id: 'brownie-cookie',
    name: 'Brauni kuki',
    description: 'Tünd şokoladlı brauni xəmiri, üstündə şokolad sousu.',
    photo: photo('brownie-cookie.webp', 'Üstü şokoladla bəzədilmiş brauni kuki', 1206, 672),
  },
  {
    id: 'oreo-cookie',
    name: 'Oreo kuki',
    description: 'Oreo qırıntılı xəmir, bütöv Oreo və iki rəngli şokolad.',
    photo: photo('oreo-cookie.webp', 'Üstündə Oreo peçenyesi olan kuki', 1206, 670),
  },
  {
    id: 'pistachio-marble-cookie',
    name: 'Püstəli mərmər kuki',
    description: 'Püstəli və kakaolu xəmir bir arada, üstündə püstə qırıntısı.',
    photo: photo('pistachio-marble-cookie.webp', 'Püstə ilə bəzədilmiş mərmər kuki', 1206, 674),
  },
  {
    id: 'milk-chocolate-cookie',
    name: 'Süd şokoladlı kuki',
    description: 'Kakaolu xəmir, süd şokoladı parçası, ağ və qəhvəyi şokolad.',
    photo: photo('milk-choc-cookie.webp', 'Üstündə süd şokoladı parçası olan kakaolu kuki', 1206, 668),
  },
]

export const scoopCookie: Product = {
  id: 'scoop-cookie',
  name: 'Skup kuki',
  description:
    'Kukilər bir qabda yan-yana bişir: kənarları qızarır, ortası yumşaq qalır. Süfrənin ortasına qoyun, hər kəs öz qaşığı ilə götürsün.',
  photo: photo('scoop-cookie.webp', 'Folqa qabda birlikdə bişirilmiş şokoladlı kukilər', 1206, 674),
}

/** First item is shown tall on the left. */
export const cheesecakesAndTarts: Product[] = [
  {
    id: 'cookie-tarts',
    name: 'Kuki tartlar kolleksiyası',
    description: 'Dörd kuki tart, dörd fərqli üst: meyvə, moruq, püstə və şaftalı ilə.',
    photo: photo('cookie-tarts.webp', 'Krem və meyvə ilə bəzədilmiş dörd kuki tart', 1122, 1402),
  },
  {
    id: 'oreo-cheesecake',
    name: 'Oreo çizkeyk',
    description: 'Kakaolu əsas, Oreo parçalı krem pendir və ağ şokolad örtüyü.',
    photo: photo('oreo-cheesecake.webp', 'Ağ şokolad örtüklü Oreo çizkeykin kəsiyi', 559, 699),
  },
  {
    id: 'pistachio-kadaif-cheesecake',
    name: 'Püstə-kadayıf çizkeyk',
    description: 'Püstəli kadayıf qatı, krem pendir və süd şokoladı örtüyü.',
    photo: photo('pistachio-kadaif-cheesecake.webp', 'Süd şokoladı örtüklü püstə-kadayıf çizkeykin kəsiyi', 556, 356),
  },
]

export const cakes: Product[] = [
  {
    id: 'raspberry-chocolate-cake',
    name: 'Moruqlu şokolad tortu',
    description: 'Şokoladlı biskvit, moruq və istədiyiniz yazı.',
    photo: photo('raspberry-chocolate-cake.webp', 'Üzərində “always 18” yazılmış tünd qırmızı tort', 556, 356),
  },
  {
    id: 'cherry-chocolate-cheesecake-cake',
    name: 'Albalılı şokolad çizkeyk tortu',
    description: 'Şokolad, albalı və çizkeyk qatı bir tortda.',
    photo: photo('cherry-chocolate-cheesecake-cake.webp', 'Sarı-narıncı kremlə bəzədilmiş “Happy Birthday” tortu', 556, 343),
  },
  {
    id: 'spider-caramel-chocolate-cake',
    name: 'Spider-Man karamel-şokolad tortu',
    description: 'Karamel və şokolad, uşaqların sevimli qəhrəmanı üslubunda.',
    photo: photo('spider-caramel-chocolate-cake.webp', 'Qırmızı, hörümçək toru naxışlı tort', 556, 343),
  },
]

export const orderSteps = [
  { title: 'Seçin', text: 'Menyudan kuki, skup kuki, çizkeyk və ya tort seçin.' },
  { title: 'Yazın', text: 'WhatsApp və ya Instagram-da bizə yazın. Tort üçün dizaynı və yazını bildirin.' },
  { title: 'Götürün', text: 'Sifarişiniz hazır olanda sizə xəbər veririk.' },
] as const
