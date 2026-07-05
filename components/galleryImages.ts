export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: "Bread" | "Coffee" | "Cakes" | "Interior" | "Sandwich" | "Desserts";
};

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=80`;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // Bread
  {
    id: "bread-1",
    src: unsplash("1509440159596-0249088772ff"),
    alt: "Golden rustic bread loaves",
    category: "Bread",
  },
  {
    id: "bread-2",
    src: unsplash("1608198093002-ad4e005484ec"),
    alt: "Freshly baked multigrain loaf",
    category: "Bread",
  },
  {
    id: "bread-3",
    src: unsplash("1533089860892-a7c6f0a88666"),
    alt: "Rustic sourdough loaf with a floured crust",
    category: "Bread",
  },

  // Coffee
  {
    id: "coffee-1",
    src: unsplash("1495474472287-4d71bcdd2085"),
    alt: "Coffee cup with latte art on a wooden table",
    category: "Coffee",
  },
  {
    id: "coffee-2",
    src: unsplash("1510591509098-f4fdc6d0ff04"),
    alt: "Espresso shot being pulled",
    category: "Coffee",
  },
  {
    id: "coffee-3",
    src: unsplash("1461023058943-07fcbe16d735"),
    alt: "Cappuccino with velvety foam",
    category: "Coffee",
  },
  {
    id: "coffee-4",
    src: unsplash("1497935586351-b67a49e012bf"),
    alt: "Close-up of a creamy coffee cup",
    category: "Coffee",
  },
  {
    id: "coffee-5",
    src: unsplash("1541167760496-1628856ab772"),
    alt: "Latte in a glass on a cafe table",
    category: "Coffee",
  },
  {
    id: "coffee-6",
    src: unsplash("1517701604599-bb29b565090c"),
    alt: "Chilled cold coffee with whipped cream",
    category: "Coffee",
  },
  {
    id: "coffee-7",
    src: unsplash("1497515114629-f71d768fd07c"),
    alt: "Americano coffee brewing",
    category: "Coffee",
  },
  {
    id: "coffee-8",
    src: unsplash("1578374173705-969cbe6f2d6b"),
    alt: "Mocha coffee with chocolate drizzle",
    category: "Coffee",
  },
  {
    id: "coffee-9",
    src: unsplash("1509042239860-f550ce710b93"),
    alt: "Coffee being poured into a cup",
    category: "Coffee",
  },

  // Cakes
  {
    id: "cakes-1",
    src: unsplash("1578985545062-69928b1d9587"),
    alt: "Rich chocolate layer cake",
    category: "Cakes",
  },
  {
    id: "cakes-2",
    src: unsplash("1621303837174-89787a7d4729"),
    alt: "Red velvet cake slice with cream frosting",
    category: "Cakes",
  },
  {
    id: "cakes-3",
    src: unsplash("1568051243858-533a607809a5"),
    alt: "Decadent celebration cake",
    category: "Cakes",
  },
  {
    id: "cakes-4",
    src: unsplash("1601979031925-424e53b6caaa"),
    alt: "Layered cake with caramel drizzle",
    category: "Cakes",
  },
  {
    id: "cakes-5",
    src: unsplash("1533134242443-d4fd215305ad"),
    alt: "Blueberry cheesecake slice",
    category: "Cakes",
  },
  {
    id: "cakes-6",
    src: unsplash("1541599468348-e96984315921"),
    alt: "Hazelnut chocolate cake",
    category: "Cakes",
  },
  {
    id: "cakes-7",
    src: unsplash("1571115177098-24ec42ed204d"),
    alt: "Elegant frosted celebration cake",
    category: "Cakes",
  },
  {
    id: "cakes-8",
    src: unsplash("1587248720327-8eb72564be1e"),
    alt: "Chocolate cookie cake slice",
    category: "Cakes",
  },

  // Interior
  {
    id: "interior-1",
    src: unsplash("1554118811-1e0d58224f24"),
    alt: "Warm, softly lit bakery interior",
    category: "Interior",
  },
  {
    id: "interior-2",
    src: unsplash("1521017432531-fbd92d768814"),
    alt: "Cozy cafe seating area",
    category: "Interior",
  },
  {
    id: "interior-3",
    src: unsplash("1445116572660-236099ec97a0"),
    alt: "Rustic cafe interior with warm lighting",
    category: "Interior",
  },
  {
    id: "interior-4",
    src: unsplash("1544148103-0773bf10d330"),
    alt: "Inviting cafe corner with wooden furniture",
    category: "Interior",
  },
  {
    id: "interior-5",
    src: unsplash("1600093463592-8e36ae95ef56"),
    alt: "Modern bakery counter and shelving",
    category: "Interior",
  },
  {
    id: "interior-6",
    src: unsplash("1414235077428-338989a2e8c0"),
    alt: "Table setting at a cafe",
    category: "Interior",
  },
  {
    id: "interior-7",
    src: unsplash("1453614512568-c4024d13c247"),
    alt: "Bakery counter display",
    category: "Interior",
  },

  // Sandwich
  {
    id: "sandwich-1",
    src: unsplash("1550507992-eb63ffee0847"),
    alt: "Grilled cheese sandwich, melted and toasted",
    category: "Sandwich",
  },
  {
    id: "sandwich-2",
    src: unsplash("1528735602780-2552fd46c7af"),
    alt: "Fresh vegetable sandwich",
    category: "Sandwich",
  },
  {
    id: "sandwich-3",
    src: unsplash("1554433607-66b5efe9d304"),
    alt: "Triple-decker club sandwich",
    category: "Sandwich",
  },
  {
    id: "sandwich-4",
    src: unsplash("1509722747041-616f39b57569"),
    alt: "Grilled sandwich with fresh fillings",
    category: "Sandwich",
  },
  {
    id: "sandwich-5",
    src: unsplash("1481070414801-51fd732d7184"),
    alt: "Chicken sandwich with crisp greens",
    category: "Sandwich",
  },

  // Desserts
  {
    id: "desserts-1",
    src: unsplash("1555507036-ab1f4038808a"),
    alt: "Golden butter croissants",
    category: "Desserts",
  },
  {
    id: "desserts-2",
    src: unsplash("1509365465985-25d11c17e812"),
    alt: "Freshly baked pastries",
    category: "Desserts",
  },
  {
    id: "desserts-3",
    src: unsplash("1587241321921-91a834d6d191"),
    alt: "Flaky puff pastry",
    category: "Desserts",
  },
  {
    id: "desserts-4",
    src: unsplash("1621236378699-8597faf6a176"),
    alt: "Golden baked pastry puffs",
    category: "Desserts",
  },
  {
    id: "desserts-5",
    src: unsplash("1550617931-e17a7b70dce2"),
    alt: "Heart-shaped pastry with sugar glaze",
    category: "Desserts",
  },
  {
    id: "desserts-6",
    src: unsplash("1497034825429-c343d7c6a68f"),
    alt: "Ice cream scoop on a cone",
    category: "Desserts",
  },
  {
    id: "desserts-7",
    src: unsplash("1560008581-09826d1de69e"),
    alt: "Creamy ice cream bowl",
    category: "Desserts",
  },
  {
    id: "desserts-8",
    src: unsplash("1576506295286-5cda18df43e7"),
    alt: "Fresh strawberry ice cream scoop",
    category: "Desserts",
  },
  {
    id: "desserts-9",
    src: unsplash("1499636136210-6f4ee915583e"),
    alt: "Chocolate chip cookies stacked",
    category: "Desserts",
  },
  {
    id: "desserts-10",
    src: unsplash("1558961363-fa8fdf82db35"),
    alt: "Almond cookies on a plate",
    category: "Desserts",
  },
  {
    id: "desserts-11",
    src: unsplash("1551024506-0bccd828d307"),
    alt: "Assorted glazed donuts",
    category: "Desserts",
  },
];
