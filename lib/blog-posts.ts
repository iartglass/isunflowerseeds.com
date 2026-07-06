export type BlogSection = {
  heading?: string
  body?: string[]
  list?: string[]
  // Body/list strings support inline links: [anchor text](url)
  // Internal links start with "/", external links start with "http" and open in a new tab with rel=noopener.
  image?: { src: string; alt: string; caption?: string }
  table?: { headers: string[]; rows: string[][] }
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image: string
  sections: BlogSection[]
  relatedSeries?: string[]
}

// Maps a series slug (used in relatedSeries) to its product page info
export const seriesInfo: Record<string, { name: string; href: string }> = {
  "361-series": { name: "361 Series", href: "/products/361-series" },
  "363-series": { name: "363 Series", href: "/products/363-series" },
  "tq6-series": { name: "Tongqing No.6 (TQ6) Series", href: "/products/tq6-series" },
}

export const blogCategories = [
  "Recipes & Cooking",
  "Health & Nutrition",
  "Harvesting & Storage",
  "Beauty & Wellness",
  "Culture",
] as const

export const blogPosts: BlogPost[] = [
  {
    slug: "sunflower-seeds-recipes",
    title: "Sunflower Seed Recipes: A Complete Cooking Guide",
    excerpt:
      "Eight creative recipes, cooking with sunflower seed oil, and using seeds as a salad topping — a complete guide to turning XingYi Trading's sunflower seeds into a versatile kitchen ingredient.",
    category: "Recipes & Cooking",
    date: "2024-08-25",
    author: "James Feng",
    image: "/images/product-seeds-closeup.jpg",
    relatedSeries: ["361-series", "363-series", "tq6-series"],
    sections: [
      {
        body: [
          "Premium sunflower seeds extend well beyond simple snacking. Ground, roasted, or blended, they work as a coating, a sauce base, a salad topping, and even a candy — here are the main ways [our sunflower seeds](/products) show up in the kitchen, whole, and how to think about which series suits which use.",
        ],
      },
      {
        heading: "What Are Eight Ways to Cook With Sunflower Seeds?",
        image: {
          src: "/images/product-361-detail.jpg",
          alt: "Sunflower seed kernels arranged for recipe preparation",
          caption: "Kernels ready for grinding, roasting, or blending into a recipe.",
        },
        list: [
          "Crunchy Sunflower Seed Crusted Chicken — a healthier fried-chicken alternative using ground 363 Series seeds as the coating",
          "Sunflower Seed Pesto — a nutty pasta sauce built on Tongqing No.6 (TQ6) seeds",
          "Sunflower Seed Energy Balls — no-bake snacks combining 361 Series seeds with dates, oats, and honey",
          "Sunflower Seed Butter — a homemade spread made by processing roasted seeds with oil and honey",
          "Sunflower Seed Encrusted Salmon — a crispy fish coating using crushed seeds with Dijon mustard and honey",
          "Sunflower Seed Brittle — a sweet candy incorporating seeds into caramelized sugar",
          "Sunflower Seed Crusted Goat Cheese Salad — a gourmet salad with warm, seed-crusted cheese",
          "Sunflower Seed Oil Vinaigrette — a simple dressing combining seed oil with vinegar and mustard",
        ],
      },
      {
        heading: "Why Do Sunflower Seeds Work So Well in These Recipes?",
        body: [
          "Sunflower kernels bring a naturally nutty flavor and a genuinely dense nutrient profile, including a very high concentration of vitamin E according to [USDA FoodData Central](https://fdc.nal.usda.gov/food-details/170562/nutrients). That means a coating, sauce, or topping built on them adds real nutritional value to the dish, not just texture. For the fuller nutritional picture, see our companion guide on [sunflower seed nutrition](/blog/sunflower-seed-nutrition-benefits).",
        ],
      },
      {
        heading: "Which Sunflower Seed Series Should You Use for Which Recipe?",
        list: [
          "For volume-friendly, everyday cooking — energy balls, brittle, general snacking — [361 Series](/products/361-series) offers consistent size and value at scale",
          "For recipes where texture and appearance matter, like the crusted chicken or salmon coating, [363 Series](/products/363-series) offers a premium, uniform kernel suited to retail and food-service use",
          "For dishes where the seed itself is the visual centerpiece, like the goat cheese salad, [Tongqing No.6 (TQ6)](/products/tq6-series) offers a larger kernel with a distinct, rich flavor",
        ],
      },
      {
        heading: "How Do You Cook With Sunflower Seed Oil?",
        image: {
          src: "/images/ai-oil-pouring-pan.jpg",
          alt: "Sunflower seed oil being poured for cooking",
          caption: "Refined sunflower oil's high smoke point suits high-heat cooking methods.",
        },
        body: [
          "Sunflower seed oil — typically pressed from oil-type sunflower cultivars grown specifically for oil content, a different crop from the confectionery, in-shell seeds we export — is one of the more versatile oils in the kitchen thanks to its mild flavor and high smoke point.",
          "Refined sunflower oil has a considerably higher smoke point than unrefined, cold-pressed versions, because refining removes the free fatty acids and impurities that break down first under heat — see the comparison in this [smoke point reference for cooking oils](https://en.wikipedia.org/wiki/Template:Smoke_point_of_cooking_oils). In practice, refined oil is the better choice for stir-frying, deep frying, and roasting, while an unrefined, cold-pressed oil is better reserved for dressings and finishing, where its lower heat tolerance doesn't matter and its fuller flavor comes through.",
        ],
      },
      {
        heading: "What Are Eight Ways to Use Sunflower Seed Oil in the Kitchen?",
        list: [
          "Salad dressings — a neutral base that lets other ingredients shine",
          "Stir-frying — high smoke point suited to wok cooking, with subtle nutty undertones",
          "Baking — can replace butter or other oils for moist results",
          "Marinades — helps distribute flavor while tenderizing meat",
          "Homemade mayonnaise — a lighter base than many store-bought oils",
          "Vegetable roasting — crisp exteriors, tender interiors",
          "Smoothies — a source of vitamin E and healthy fats",
          "Finishing oil — drizzled over soups, meats, and vegetables for depth of flavor",
        ],
      },
      {
        heading: "How Do You Use Sunflower Seeds as a Salad Topping?",
        image: {
          src: "/images/ai-salad-sunflower-seeds.jpg",
          alt: "Toasted sunflower seeds sprinkled over a fresh green salad",
          caption: "Toasting deepens the flavor of sunflower seeds before they go on a salad.",
        },
        body: [
          "Toast seeds at 350°F for 5-10 minutes, stirring occasionally, to deepen flavor, and start with 1-2 tablespoons per serving. A handful of sunflower seeds does more for a salad than most toppings — texture, nutrition, and flavor all in one addition.",
          "Kernel size changes how a seed reads on a plate as much as it changes texture: [361 Series](/products/361-series) offers a smaller, more uniform kernel that distributes evenly across a tossed salad, while [Tongqing No.6 (TQ6)](/products/tq6-series) has a noticeably larger kernel that works well as a visible, standalone garnish rather than mixed through greens. A kale Caesar with toasted seeds, a Mediterranean quinoa salad, and a roasted beet salad are three easy places to start.",
        ],
      },
      {
        heading: "How Do You Keep Sunflower Seeds Fresh Between Recipes?",
        body: [
          "None of these recipes work well with stale or improperly stored seeds. If you're working through a bulk order over several weeks, our guide on [drying and storing sunflower seeds](/blog/harvesting-sunflower-seeds-drying) covers the moisture and temperature basics that keep a batch tasting fresh from the first recipe to the last.",
        ],
      },
      {
        heading: "Do I need to toast the seeds before using them?",
        body: [
          "It depends on the dish. Raw kernels work fine in the pesto, butter, and coating recipes, where the cooking process itself (blending, baking, pan-frying) develops flavor. For anything eaten closer to raw — energy balls, salad toppings, brittle — a quick dry-toast at 350°F for 5-8 minutes first makes a noticeable difference in flavor depth and texture.",
        ],
      },
      {
        heading: "Can I substitute one series for another in these recipes?",
        body: [
          "Yes, in most cases — the three series share the same core flavor and nutritional profile, so substitution is mainly about kernel size and appearance rather than taste. The main exception is a recipe where the seed itself is visible and part of the presentation, like the goat cheese salad, where a larger Tongqing No.6 kernel reads differently on the plate than a smaller 361 Series kernel.",
        ],
      },
      {
        heading: "Does sunflower oil need to be refrigerated?",
        body: [
          "No — like most cooking oils, sunflower oil stores fine at room temperature in a cool, dark cabinet away from direct heat or sunlight, which both speed up oxidation. Refrigeration isn't necessary and can cause some oils to cloud or thicken, though that reverses once the oil returns to room temperature.",
        ],
      },
      {
        heading: "Where Can You Source Sunflower Seeds for Recipe Development or Retail?",
        body: [
          "Food brands and product developers testing recipes at scale — whether for a retail snack line, a food-service application, or a private-label product — can [request samples and a specification sheet](/contact#quote-form) across all three whole-seed series to find the right fit before committing to a bulk order. For a deeper dive into two specific recipes, see our guide to [sunflower seed pesto and seed butter](/blog/sunflower-seed-pesto-and-seed-butter).",
        ],
      },
    ],
  },
  {
    slug: "sunflower-seed-pesto-and-seed-butter",
    title: "Sunflower Seed Pesto and Seed Butter: Two Recipes Worth Making",
    excerpt:
      "Our 363 Series turned into a nutty pesto and a nut-free seed butter — recipes, food-safety notes, and how each compares nutritionally to the traditional alternative.",
    category: "Recipes & Cooking",
    date: "2024-08-15",
    author: "James Feng",
    image: "/images/363-2-e1718611094176.jpg",
    relatedSeries: ["363-series", "tq6-series"],
    sections: [
      {
        body: [
          "Beyond snacking and coatings, sunflower seeds turn into two kitchen staples in their own right: a pesto that substitutes for pine nuts, and a butter that substitutes for peanut or tree-nut spreads. Both start with the same [363 Series](/products/363-series) or [Tongqing No.6](/products/tq6-series) kernel, prepared two different ways.",
        ],
      },
      {
        heading: "How Do You Make Sunflower Seed Pesto?",
        image: {
          src: "/images/ai-pesto-sunflower-seed.jpg",
          alt: "Sunflower seed pesto sauce with fresh basil ingredients",
          caption: "363 Series kernels blended into a nutty, basil-forward pesto.",
        },
        body: [
          "Pine nuts have long been the traditional base for pesto, but they're expensive, slow to produce, and increasingly affected by supply shortages. 363 Series sunflower seeds make a genuinely good substitute — nutty, rich, and far more consistent in supply and price.",
        ],
        list: [
          "1 cup 363 Series sunflower seeds",
          "2 cups fresh basil leaves",
          "3 garlic cloves",
          "1/2 cup grated Parmesan cheese",
          "1/4 cup sunflower seed oil",
          "2 tablespoons lemon juice",
          "Salt and pepper to taste",
        ],
      },
      {
        body: [
          "Blend all ingredients until smooth, adjusting oil for consistency. The 363 Series' rich, nutty flavor gives the sauce depth without overpowering the basil.",
          "Sunflower seed pesto compares favorably to traditional pine-nut versions on nutrition — higher in vitamin E and magnesium per [USDA nutrient data](https://fdc.nal.usda.gov/food-details/170562/nutrients), with comparable healthy fats and protein. It also has a lighter environmental footprint: an annual crop versus pine trees that take 15-25 years to mature.",
        ],
      },
      {
        heading: "What Food Safety Precautions Apply to Garlic-in-Oil Pesto?",
        body: [
          "Because this pesto combines raw garlic with oil in a low-acid mixture, it needs the same food-safety handling as any garlic-in-oil preparation. According to [USDA food safety guidance](https://ask.usda.gov/s/article/Can-you-get-botulism-from-garlic-in-oil), garlic-in-oil mixtures should be refrigerated and used within about a week, since low-oxygen, low-acid conditions at room temperature can support the growth of Clostridium botulinum.",
          "Refrigerated in an airtight container, the pesto keeps about a week. Freezing in small batches is the safer option for longer storage — up to three months, with a layer of oil on top to help preserve freshness.",
        ],
      },
      {
        heading: "How Do You Make Sunflower Seed Butter?",
        image: {
          src: "/images/ai-seed-butter-toast.jpg",
          alt: "Sunflower seed butter spread on toast",
          caption: "Once blended smooth, seed butter works just like any other nut or seed spread.",
        },
        body: [
          "Sunflower seed butter has grown from a niche nut-allergy substitute into a mainstream pantry staple in its own right, and it's straightforward to make at home.",
        ],
        list: [
          "Select premium seeds — 363 Series or Tongqing No.6 work well",
          "Roast at 300-350°F for 10-25 minutes depending on desired flavor",
          "Blend for 10-15 minutes until a smooth paste forms",
          "Customize with salt, honey, cinnamon, or vanilla",
          "Store refrigerated in an airtight container for up to a month, or frozen for up to six months",
        ],
      },
      {
        heading: "Is Sunflower Seed Butter a Genuine Nut-Free Alternative?",
        body: [
          "Yes — sunflower seed butter contains no tree nuts or peanuts, which is why it has become a standard substitute in nut-free schools and households. Food allergies affect a meaningful share of children: the [CDC's most recent data](https://www.cdc.gov/nchs/products/databriefs/db546.htm) puts diagnosed food allergies at around 5% of children in the United States, with peanut and tree-nut allergies among the most common.",
          "It holds up nutritionally, too. A nutritional comparison published in a peer-reviewed [sensory and consumer analysis of sunflower seed butter](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12111572/) found it holds its own against nut butters on multiple minerals, alongside its well-established vitamin E and healthy fat content.",
        ],
      },
      {
        heading: "Why does homemade seed butter sometimes turn green?",
        body: [
          "A greenish tint can appear when the chlorogenic acid naturally present in sunflower seeds reacts with baking soda or other alkaline ingredients — it's a harmless chemical reaction, not spoilage, and doesn't affect flavor or safety. It's more likely to show up in baked goods made with seed butter than in the butter itself eaten plain.",
        ],
      },
      {
        heading: "Can I make either recipe nut-free for a food-allergy household?",
        body: [
          "Both recipes as written contain no tree nuts, since sunflower seeds are the only seed or nut ingredient in either — the pesto substitutes for pine nuts and the butter for peanut or tree-nut spreads. That makes both a useful option for households or food-service kitchens managing nut allergies.",
        ],
      },
      {
        heading: "Where Can You Source 363 Series or Tongqing No.6 for Product Development?",
        body: [
          "Food brands developing a packaged pesto, seed butter, or similar product for retail or nut-free school programs can compare our [363 Series](/products/363-series) and [Tongqing No.6](/products/tq6-series) grade specifications, or [request samples and a specification sheet](/contact#quote-form) to test which kernel roasts and blends best for their formulation. For more ways to cook with whole seeds, see our [complete cooking guide](/blog/sunflower-seeds-recipes).",
        ],
      },
    ],
  },
  {
    slug: "sunflower-seeds-cosmetic-industry",
    title: "Sunflower Seeds in Beauty: Cosmetics, Skincare, and Hair Care",
    excerpt:
      "From vitamin-E-rich oil to biodegradable exfoliants and hair conditioning — sunflower seeds have a growing, well-documented role in skincare, hair care, and natural cosmetics formulation.",
    category: "Beauty & Wellness",
    date: "2024-08-24",
    author: "James Feng",
    image: "/images/361-1.jpg",
    sections: [
      {
        body: [
          "Beyond snacking, sunflower seeds are a valuable raw material for the beauty industry — and it's an ingredient with real, well-documented dermatological research behind it, not just marketing appeal. Worth noting upfront: the oil used in cosmetic formulations is typically pressed from oil-type sunflower cultivars grown specifically for oil content. That's a different crop from the confectionery, in-shell [361, 363, and Tongqing No.6](/products) seeds XingYi Trading exports for snacking, retail, and food-service use — this article covers the industry and the ingredient generally, not a product XingYi supplies.",
        ],
      },
      {
        heading: "What Are the Benefits of Sunflower Seed Oil for Skin?",
        image: {
          src: "/images/ai-cosmetic-oil-bottle.jpg",
          alt: "Sunflower seed oil in a glass bottle for cosmetic formulation",
          caption: "Cold-pressed sunflower seed oil used as a base emollient in skincare formulation.",
        },
        list: [
          "Rich in vitamin E, a well-known antioxidant",
          "High in linoleic acid for hydration",
          "Light, non-greasy texture suited to facial products",
          "Natural emollient properties for creams and lotions",
        ],
      },
      {
        heading: "How Is Sunflower Seed Oil Used in Skincare and Exfoliation?",
        body: [
          "Linoleic acid supports hydration, vitamin E offers anti-aging properties, oleic acid supports the skin barrier, and B-complex vitamins provide soothing effects. A controlled study cited in [cosmetic ingredient safety documentation](https://www.cosmeticsinfo.org/ingredient/helianthus-annuus-sunflower-seed-oil-and-related-ingredients) found that sunflower seed oil helped preserve skin barrier integrity and reduce water loss, and the ingredient (listed as Helianthus Annuus Seed Oil under INCI naming) has been reviewed and confirmed safe for cosmetic use by the Cosmetic Ingredient Review Expert Panel.",
          "Ground sunflower seeds are also used as a biodegradable alternative to plastic microbeads, offering gentle exfoliation without the environmental cost. That distinction matters more than it used to: the [FDA's Microbead-Free Waters Act](https://www.fda.gov/cosmetics/cosmetics-laws-regulations/microbead-free-waters-act-faqs) has prohibited plastic microbeads in rinse-off cosmetics in the United States since 2017, which has pushed formulators toward natural exfoliants like ground seed hulls as a direct replacement.",
        ],
      },
      {
        heading: "How Is Sunflower Seed Oil Used in Hair Care?",
        image: {
          src: "/images/ai-hair-oil-bottle.jpg",
          alt: "Sunflower seed oil in a dropper bottle for hair conditioning",
          caption: "A light application of sunflower seed oil for deep conditioning.",
        },
        body: [
          "Sunflower seed oil has a growing following as a natural hair care ingredient — light enough for daily use, but rich in the fatty acids and antioxidants that support scalp and strand health.",
        ],
        list: [
          "Deep conditioning — mix with honey and lavender essential oil, apply for 30 minutes before shampooing",
          "Scalp health — gentle massage 2-3 times weekly to address dryness and flaking",
          "Frizz control — a few drops on damp hair before styling smooths the cuticle",
          "Growth support — nightly scalp massage combined with rosemary and peppermint essential oils",
          "Split-end care — 2-7 drops depending on hair length temporarily seals split ends",
          "Color protection — a mask of oil, egg yolk, and honey applied for 20 minutes helps guard against fade",
        ],
      },
      {
        heading: "Does the Research Support Sunflower Seed Oil's Hair Care Claims?",
        body: [
          "Vitamin E and fatty acids give sunflower seed oil natural conditioning properties, while its light texture means it absorbs without weighing hair down. The antioxidant mechanism has some real research behind it: vitamin E helps counter oxidative stress in the scalp, a factor researchers have linked to hair thinning, and a clinical trial published in [Tropical Life Sciences Research](https://pubmed.ncbi.nlm.nih.gov/24575202/) found that participants taking a vitamin-E-family supplement (tocotrienols) over eight months saw a meaningfully higher hair count than a placebo group.",
          "That study used an oral supplement rather than a topical oil, so the mechanism — reducing oxidative stress — is the relevant takeaway rather than a direct claim about scalp application. Sunflower seed oil sits in the same general category as argan or jojoba oil for hair use — a light, non-comedogenic carrier oil rather than a heavy sealant like coconut oil.",
        ],
      },
      {
        heading: "Can Sunflower Seeds Be Used as Natural Colorants?",
        body: [
          "Beyond conditioning, sunflower seeds also lend golden-yellow hues to eyeshadows, lip balm tints, and bronzers, alongside their more common use as an oil-extraction source.",
        ],
      },
      {
        heading: "Is Cosmetic-Grade Sunflower Oil the Same as Confectionery Sunflower Seeds?",
        body: [
          "No — oil-type and confectionery-type sunflower are bred, grown, and processed differently. Oil-type cultivars are bred for maximum oil yield per seed, while confectionery types like XingYi's are bred for kernel size, appearance, and eating quality, so a supplier of one isn't necessarily a supplier of the other.",
          "If your interest is in whole, in-shell sunflower seeds for a snack, retail, or food-service product rather than an oil ingredient, see our [Capabilities](/about#capabilities) section for how those seeds are inspected and processed.",
        ],
      },
      {
        heading: "Is sunflower seed oil comedogenic or likely to cause breakouts?",
        body: [
          "Sunflower seed oil is generally considered low on the comedogenic scale, which is part of why it shows up in facial formulations rather than being reserved for body products only. As with any oil-based ingredient, individual skin response varies, and a formulator would typically patch-test a new blend before full production.",
        ],
      },
      {
        heading: "What's the difference between refined and cold-pressed sunflower oil for cosmetics?",
        body: [
          "Cold-pressed, unrefined oil retains more of its natural vitamin E and a fuller scent profile, which formulators often prefer for leave-on skincare and hair products. Refined oil has a lighter scent and longer shelf stability, which can matter more for large-batch commercial production. Both come from the same kernel — the difference is entirely in processing, not the raw material.",
        ],
      },
      {
        heading: "Looking for Whole Sunflower Seeds Instead of Oil?",
        body: [
          "XingYi Trading doesn't process or supply sunflower oil — we grow and export whole, in-shell confectionery sunflower seeds. If your business is sourcing whole seeds for snacking, retail, or food-service use rather than an oil ingredient, browse our [361, 363, and Tongqing No.6](/products) series, or [request samples and a specification sheet](/contact#quote-form) directly.",
        ],
      },
    ],
  },
  {
    slug: "sunflower-seed-festivals",
    title: "Sunflower Seed Festivals: Celebrating Nature's Golden Bounty",
    excerpt:
      "From the Wuyuan Sunflower Scenic Area to the International Sunflower Conference, sunflower seeds are a genuine cultural and economic celebration in Bayannur, Inner Mongolia.",
    category: "Culture",
    date: "2024-08-23",
    author: "James Feng",
    image: "/images/601-1.jpg",
    relatedSeries: ["361-series", "363-series", "tq6-series"],
    sections: [
      {
        body: [
          "In Bayannur, Inner Mongolia — China's largest sunflower-growing region — sunflower seeds are more than a crop. They're a fixture of local festivals, cooking competitions, and community events throughout the harvest season, and the scale behind those celebrations is genuinely substantial.",
        ],
      },
      {
        heading: "Why Is Bayannur Home to So Many Sunflower Seed Festivals?",
        image: {
          src: "/images/ai-sunflower-field-thriving.jpg",
          alt: "Sunflower fields in Bayannur, Inner Mongolia during harvest season",
          caption: "Sunflower fields near Bayannur, Inner Mongolia — the region's defining crop.",
        },
        body: [
          "Bayannur's scale as a sunflower-growing region is a big part of why the festival culture exists at all. Local reporting from [People's Daily Online](http://en.people.cn/n3/2024/0208/c90000-20132728.html) put the city's sunflower planting area at roughly 4.4 million mu (about 293,000 hectares) — nearly half of China's total sunflower planting area — with seed products exported to more than 40 countries, a scale [confirmed in separate coverage](http://www.china.org.cn/2026-01/16/content_118283187.shtml) of the region's export growth.",
          "When a single crop underpins that much of a local economy, harvest-season festivals aren't just tourism events; they're a genuine community celebration of the year's work. [Coverage of Bayannur's export growth](https://www.chinadaily.com.cn/a/202502/18/WS67b3dc0da310c240449d5c70.html) puts sunflower-related exports at roughly 4.2 billion yuan annually — about 64% of the city's total agricultural export value — which is part of why the harvest carries the weight of a genuine civic celebration, not just a farming milestone.",
        ],
      },
      {
        heading: "What Is the Wuyuan Sunflower Scenic Area?",
        body: [
          "Wuyuan County, part of Bayannur, is known locally as the \"hometown of sunflowers\" and is home to the largest sunflower-themed park and scenic area in China, set within the Hetao Irrigation Area's farmland. From July through October each year, the blooming fields draw a steady stream of visitors and photographers — the same window that runs from early flowering through to harvest.",
          "The scenic area exists because the crop does: a working farm landscape that also happens to be worth visiting, rather than a tourist attraction built around agriculture as a backdrop.",
        ],
      },
      {
        heading: "What Is the International Sunflower Conference?",
        body: [
          "Bayannur hosted the 21st International Sunflower Conference in Wuyuan County from August 20-24, 2024 — the sunflower industry's most authoritative academic gathering, held once every four years under the [International Sunflower Association](https://www.isasunflower.org/news-events/news/article/20-24-august-2024-bayannur-china-21st-international-sunflower-conference). Nearly 100 sunflower varieties from around the world were showcased alongside presentations from 10 internationally recognized researchers.",
          "Hosting an event like this isn't just a cultural footnote — it reflects Bayannur's standing in the global sunflower industry as a place worth gathering growers, breeders, and researchers from around the world, not only a high-volume growing region.",
        ],
      },
      {
        heading: "How Long Should You Roast Each Sunflower Seed Series?",
        list: [
          "Light Roast (361 Series): 10-12 minutes",
          "Medium Roast (363 Series): 13-15 minutes",
          "Dark Roast (Tongqing No.6): 16-18 minutes",
        ],
      },
      {
        heading: "What Happens at Bayannur's Culinary and Oil-Pressing Demonstrations?",
        body: [
          "Local cooking demonstrations showcase the [Tongqing No.6](/products/tq6-series) series in salads and baked goods, prized for its rich flavor and plump kernels. Oil-pressing demonstrations walk through seed selection, cleaning, cold-pressing, filtration, and bottling — the same fundamentals behind [our own processing line](/about#capabilities), just at a much larger scale for export.",
        ],
      },
      {
        heading: "What Are the Best Storage Tips From the Festival Circuit?",
        list: [
          "Use airtight containers",
          "Store in a cool, dry location away from direct sunlight",
          "Refrigerate or freeze for extended storage — 3 to 6 months is optimal",
        ],
      },
      {
        heading: "Is Bayannur the same region behind most sunflower seeds sold internationally?",
        body: [
          "Bayannur is one of the largest single sources, given its share of China's total sunflower planting area, but it isn't the only one — other regions in China and countries including Russia, Ukraine, and Argentina are major sunflower producers as well. What sets Bayannur apart is the concentration of both growing and processing infrastructure in one area, which is part of why so many exporters, including XingYi Trading, are based there.",
        ],
      },
      {
        heading: "From Local Festival to Global Export",
        body: [
          "The same seeds celebrated at these local festivals are the ones that end up in export containers bound for snack brands and distributors abroad. Our [361](/products/361-series), [363](/products/363-series), and [Tongqing No.6](/products/tq6-series) series pages cover the specific grades that come out of this region, and our [About](/about) page covers XingYi Trading's own history operating out of Bayannur since 2014. For sourcing inquiries, [request a quote](/contact#quote-form) directly, or browse [our blog](/blog) for more on how these seeds are grown, harvested, and used.",
        ],
      },
    ],
  },
  {
    slug: "harvesting-sunflower-seeds-drying",
    title: "Drying and Storing Sunflower Seeds: A Complete Guide",
    excerpt:
      "Sun drying, oven drying, or a dehydrator, plus the moisture and temperature control that keeps stored seeds free of mold and pests — a complete guide from harvest to shelf.",
    category: "Harvesting & Storage",
    date: "2024-08-22",
    author: "James Feng",
    image: "/images/process-02-storage-silos.jpg",
    relatedSeries: ["361-series", "363-series", "tq6-series"],
    sections: [
      {
        body: [
          "Drying and storage are the two preservation steps that determine whether a sunflower seed harvest stays safe and flavorful for months, or turns moldy and unusable within weeks. Done right, they prevent mold growth, protect nutritional value, and extend shelf life — and it's the stage where small-batch growers and large commercial exporters diverge most, since target moisture levels and storage protocols both scale with volume.",
        ],
      },
      {
        heading: "What Are the Three Best Methods to Dry Sunflower Seeds?",
        image: {
          src: "/images/stock-sunflower-seeds-pile.jpg",
          alt: "Dried sunflower seeds ready for storage",
          caption: "Properly dried seeds should feel crisp, not soft or leathery.",
        },
        list: [
          "Sun drying — spread in a single layer, cover with cheesecloth, leave 2-3 days in direct sun, stirring occasionally",
          "Oven drying — lowest oven setting (around 170°F / 75°C), single layer on a baking sheet, 3-4 hours, stirring occasionally",
          "Dehydrator — single layer on trays at 115°F / 46°C for 10-12 hours, until crisp",
        ],
      },
      {
        heading: "How Does Commercial Drying Differ From Home Methods?",
        body: [
          "At field and elevator scale, the target moisture level is more precise than a home method needs to be. [NDSU Extension guidance on sunflower harvesting and drying](https://www.ag.ndsu.edu/news/newsreleases/2022/september/ndsu-offers-advice-on-harvesting-and-drying-sunflower-in-north-dakota) recommends drying oil-type sunflower to about 10% moisture for winter storage, and down to 7-8% if seeds will be held into the following summer — tighter targets than a home dehydrator batch typically needs, but the same underlying principle: seeds have to be dry enough, and cool enough, to stay stable for the length of time they'll be stored.",
        ],
      },
      {
        heading: "How Do You Test Whether Sunflower Seeds Are Dry Enough?",
        body: [
          "Three simple checks confirm seeds are ready for storage: bite a seed to confirm it's crisp, shake the container and listen for a rattle, and check for any lingering softness or moisture. Commercial operations use a calibrated moisture meter for the same purpose — [SDSU Extension's sunflower harvesting guide](https://extension.sdstate.edu/sites/default/files/2021-08/P-00205-08.pdf) recommends checking moisture at multiple points in a load, since a percentage point or two of extra moisture is hard to detect by touch alone but meaningfully increases mold risk over months of storage.",
        ],
      },
      {
        heading: "Which drying method gives the best flavor?",
        body: [
          "Sun drying is generally considered to give the most natural, undiminished flavor since it's the slowest and gentlest method, but it's also the most weather-dependent and slowest to complete. A dehydrator gives the most consistent result with the least hands-on monitoring, which is why it's the more practical choice for anyone drying seeds regularly rather than as a one-off batch.",
        ],
      },
      {
        heading: "What Moisture and Temperature Levels Are Best for Storage?",
        image: {
          src: "/images/warehouse-storage.jpg",
          alt: "Sunflower seeds stored in warehouse bins",
          caption: "Moisture and temperature control at the warehouse stage is the first line of defense against mold.",
        },
        list: [
          "Store seeds at 6-8% moisture content",
          "Use airtight containers with food-grade desiccant packets",
          "Short-term storage (1-3 months): 60-70°F",
          "Long-term storage (3+ months): 40-50°F",
        ],
      },
      {
        heading: "Why Is Moisture Content the Real Risk Factor for Mold?",
        body: [
          "Mold and toxin risk in stored oilseeds is driven overwhelmingly by moisture, not just time in storage. [Iowa State University Extension research](https://crops.extension.iastate.edu/cropnews/2012/09/aflatoxin-and-grain-storage) on grain storage found that kernels held below about 15% moisture and kept cool are at substantially lower risk of the mold growth that produces aflatoxin, while the combination of warm temperatures (roughly 75-95°F) and higher moisture creates the conditions aflatoxin-producing molds need to establish.",
          "Our own 6-8% target moisture content for finished, packed seeds sits well below that risk threshold, which is why moisture testing is part of our processing line rather than a one-time check at harvest.",
        ],
      },
      {
        heading: "What Are the Most Common Threats to Stored Sunflower Seeds?",
        body: [
          "Molds such as Aspergillus, Penicillium, and Fusarium thrive in seeds stored above safe moisture thresholds. Pests including Indian meal moths, cigarette beetles, sawtoothed grain beetles, and rodents are the most common contamination risks in bulk storage.",
          "Some Aspergillus strains produce aflatoxin, which is why food-safety regulators — the [FDA sets an action level of 20 parts per billion](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-poisonous-or-deleterious-substances-human-food-and-animal-feed) for aflatoxin in human food — treat moisture control during storage as a food-safety issue, not just a quality one.",
        ],
      },
      {
        heading: "How Can You Prevent Contamination and Respond If It Happens?",
        body: [
          "Natural deterrents such as bay leaves, diatomaceous earth, and neem leaves offer chemical-free pest prevention. Packaging in airtight or vacuum-sealed bags, with mylar and oxygen absorbers for extended storage, further reduces risk. If contamination does occur, freezing seeds for 48-72 hours can eliminate pests — moldy seeds, however, should always be discarded.",
        ],
      },
      {
        heading: "Can I tell if seeds are contaminated just by looking at them?",
        body: [
          "Visible mold, discoloration, or a musty smell are reliable signs of contamination and mean the batch should be discarded. However, aflatoxin itself isn't visible — seeds that look fine can still carry unsafe levels if they were stored too warm or too moist for too long, which is exactly why moisture testing during storage matters more than a visual check at the time of use.",
        ],
      },
      {
        heading: "How Do These Storage Principles Apply to Container-Load Shipments?",
        body: [
          "For importers receiving container-load shipments, the same principles scale up: moisture readings at loading, appropriate ventilation or desiccant use inside the container, and a clear understanding of transit time to the destination port. Our [Capabilities](/about#capabilities) section covers the inspection and moisture-testing stages of our own processing line, and our [Compare](/compare) page covers what to ask any supplier — not just us — about their moisture control and quality testing before placing a large order.",
        ],
      },
      {
        heading: "Related Reading",
        body: [
          "For the harvest-timing and equipment choices that determine what condition seeds are in before drying even begins, see our guide to [harvesting sunflower seeds](/blog/harvesting-sunflower-seeds-methods). If you're evaluating a supplier for a bulk or container-load order, our [361](/products/361-series), [363](/products/363-series), and [Tongqing No.6](/products/tq6-series) series pages cover the moisture and grading specifications for each, or you can [request a quote](/contact#quote-form) directly.",
        ],
      },
    ],
  },
  {
    slug: "harvesting-sunflower-seeds-methods",
    title: "Harvesting Sunflower Seeds: Timing and Methods",
    excerpt:
      "Visual cues, moisture readings, and equipment choice — how growers judge the exact moment sunflower seeds are ready, and the harvesting methods matched to different scales of operation.",
    category: "Harvesting & Storage",
    date: "2024-08-20",
    author: "James Feng",
    image: "/images/product-363-detail.jpg",
    relatedSeries: ["361-series", "363-series", "tq6-series"],
    sections: [
      {
        body: [
          "Getting harvest timing and method right is part science, part experience, and both determine the quality of the finished product. Harvest too early and moisture content is too high for safe storage; harvest too late and birds, weather, or shattering losses start eating into yield. Here's how growers judge the moment sunflower seeds are ready, and the equipment choices that follow.",
        ],
      },
      {
        heading: "What Are the Signs a Sunflower Field Is Ready to Harvest?",
        image: {
          src: "/images/stock-sunflower-field-mature.jpg",
          alt: "Mature sunflower field with heads turning brown, ready for harvest",
          caption: "A field at physiological maturity — heads have turned from yellow to brown.",
        },
        list: [
          "The back of the flower head shifts from green to yellow, and florets drop from the center",
          "Bracts turn brown as seeds approach maturity",
          "Mature seeds show black or striped coloring and stay hard when pressed with a thumbnail",
          "Moisture content of 30-35% is the target for commercial harvesting, measured with a moisture meter",
          "Most varieties reach readiness 70-100 days after planting, though local climate shifts this window",
          "Increased bird activity is often an early signal that seeds are ripening",
        ],
      },
      {
        heading: "What Does the Research Say About the Sunflower Maturity Window?",
        body: [
          "This isn't just field folklore — [NDSU Extension's Sunflower Production Guide](https://www.ndsu.edu/agriculture/extension/publications/sunflower-production-guide) documents the same physiological markers: growers consider a crop mature at growth stage R9, when the back of the head has turned from yellow to brown and moisture typically sits between 20-50% at that point, well before it's dry enough for combine harvest or storage. That gap between physiological maturity and harvest-ready moisture is exactly why timing judgment matters — harvesting right at R9 usually means additional field drying or artificial drying is still needed before the crop is storage-safe.",
        ],
      },
      {
        heading: "How Do Taste and Weather Affect Harvest Timing?",
        body: [
          "A taste test for nutty flavor and crisp texture — avoiding soft or bitter seeds — is a reliable final check. Harvesting during dry weather, ahead of any forecast rain, protects the crop right up to collection.",
        ],
      },
      {
        heading: "What happens if sunflowers are harvested too early?",
        body: [
          "Seeds harvested before reaching adequate moisture drop-off tend to be smaller, lighter, and lower in oil content, since the seed hasn't finished filling out. They're also harder to dry safely to a storage-ready moisture level without additional energy and time, which adds cost without adding yield.",
        ],
      },
      {
        heading: "What Are the Best Small-Scale Sunflower Harvesting Methods?",
        image: {
          src: "/images/ai-sunflower-heads-hanging-dry.jpg",
          alt: "Sunflower heads hanging to dry before hand harvesting",
          caption: "Hand harvesting starts with hanging mature heads to dry before rubbing seeds loose.",
        },
        list: [
          "Traditional hand harvesting — cut mature heads and hang upside down in a ventilated area to dry, then rub seeds loose",
          "Bag method — cover mature heads with paper bags secured with rubber bands before cutting and collecting",
          "Selective hand harvesting — for ornamental varieties, harvest individual heads as they mature",
        ],
      },
      {
        heading: "What Are the Best Mid-to-Large-Scale Harvesting Methods?",
        list: [
          "Stationary threshing — cut and collect heads by hand, then separate seeds with a mechanical thresher",
          "Mechanical header harvesting — tractor-mounted headers cut only the flower heads, minimizing plant material",
          "Row crop header — adjustable equipment suited to varying sunflower heights",
          "Strip harvesting — specialized headers strip seeds from standing plants, leaving stalks in place for soil conservation",
          "Combine harvesting — the standard for commercial operations, with adjustable headers and integrated threshing",
        ],
      },
      {
        heading: "Why Does Commercial Harvest Method Choice Matter for Quality?",
        body: [
          "At export scale, harvest method is a quality-control decision as much as an efficiency one. NDSU's Sunflower Production Guide — the standard reference for commercial sunflower production in North America's largest growing region — covers header adjustment and combine settings in detail, because incorrect settings are one of the most common causes of kernel cracking and foreign material contamination at harvest. Combine harvesting done well minimizes both, which is part of why it's the standard for any operation supplying a food-grade or export market rather than a small home garden.",
        ],
      },
      {
        heading: "Why does foreign material in a harvest matter so much?",
        body: [
          "Foreign material — bits of stalk, leaf, and head debris mixed in with the seed — has to be removed during cleaning before the seed is food-grade, and a harvest with a lot of it means more cleaning passes, more processing time, and a higher risk of leftover debris reaching the finished product. A well-adjusted combine header minimizes this from the start, which is why equipment settings matter as much as the harvesting method itself.",
        ],
      },
      {
        heading: "From Field to Export Grade",
        body: [
          "Whatever the timing and harvest method, what happens next — drying, cleaning, and grading — is what actually determines export quality. Our guide on [drying and storing sunflower seeds](/blog/harvesting-sunflower-seeds-drying) covers that next stage. Our [Capabilities](/about#capabilities) section covers the processing line, and our [361](/products/361-series), [363](/products/363-series), and [Tongqing No.6](/products/tq6-series) series pages cover the grade specifications each harvest is sorted into. For sourcing questions, [contact our team](/contact#quote-form) directly.",
        ],
      },
    ],
  },
  {
    slug: "sunflower-seed-nutrition-benefits",
    title: "Sunflower Seed Nutrition: Immune Support, Weight Management, and Minerals",
    excerpt:
      "Vitamin E, protein, fiber, and a dense mineral profile — a complete look at the nutrients in sunflower seeds and the role they play in immune function, weight management, and daily nutrition.",
    category: "Health & Nutrition",
    date: "2024-08-13",
    author: "James Feng",
    image: "/images/363.jpg",
    relatedSeries: ["361-series", "363-series", "tq6-series"],
    sections: [
      {
        body: [
          "Sunflower seeds are nutrient-dense in ways that go well beyond a quick snack — vitamin E, protein, fiber, healthy fats, and a dense mineral profile all show up in meaningful amounts per serving. This is one reason snack brands and health-food distributors source [our sunflower seeds](/products) specifically for immune-support, weight-conscious, and general wellness-positioned product lines.",
        ],
      },
      {
        heading: "What Nutrients in Sunflower Seeds Support the Immune System?",
        image: {
          src: "/images/product-hero-circle.png",
          alt: "Raw sunflower seed kernels in a bowl, ready for packing",
          caption: "Raw sunflower seed kernels retain their nutrient profile before roasting.",
        },
        list: [
          "Vitamin E — a powerful antioxidant that helps protect cells from free-radical damage. Sunflower seed kernels are one of the richest natural sources of vitamin E, providing about 234% of the Daily Value per 100g according to [USDA FoodData Central](https://fdc.nal.usda.gov/food-details/170562/nutrients)",
          "Zinc — supports the development of immune cells, including T-cells",
          "Selenium — helps reduce inflammation and supports cytokine production",
          "Healthy fats — omega-6 fatty acids support the body's inflammatory immune response",
          "Protein — supplies amino acids needed for antibody production",
          "Fiber — feeds beneficial gut bacteria that support overall immunity",
          "Magnesium — helps regulate immune cell and antibody activity",
          "Antioxidants — flavonoids and phenolic acids help protect cells from oxidative stress",
        ],
      },
      {
        heading: "How many seeds would it take to notice an effect?",
        body: [
          "There's no single seed count that triggers an immune benefit — nutrient intake works cumulatively over a regular diet, not from a single serving. A daily handful (about 28g, or a small palmful of shelled kernels) is a reasonable, sustainable way to work these nutrients into a diet consistently, rather than treating any one serving as a targeted dose.",
        ],
      },
      {
        heading: "What Is the Nutritional Profile of Sunflower Seeds (per 100g)?",
        image: {
          src: "/images/ai-seeds-bowl-portion.jpg",
          alt: "A small bowl of hulled sunflower seed kernels",
          caption: "A 100g portion is roughly this much — the reference amount used in standard nutrition data.",
        },
        body: [
          "Sunflower seeds are calorie-dense, which can sound like the opposite of what a weight-conscious diet needs — but the combination of protein, fiber, and healthy fats they provide plays a real role in appetite regulation when portioned sensibly. Figures below are for raw, dried kernels, per [USDA FoodData Central](https://fdc.nal.usda.gov/food-details/170562/nutrients):",
        ],
        list: [
          "Protein: 20.78g",
          "Fiber: 8.6g",
          "Healthy fats: 51.46g",
          "Vitamin E: 35.17mg",
          "Magnesium: 325mg",
        ],
      },
      {
        heading: "How Do These Nutrients Support Weight Management?",
        body: [
          "Protein increases fullness, supports metabolism, and helps preserve muscle mass during weight loss — this isn't unique to sunflower seeds, but a well-established mechanism in nutrition research. A [clinical review of high-protein diets](https://pmc.ncbi.nlm.nih.gov/articles/PMC7539343/) found that higher protein intake raises levels of several fullness-signaling hormones, which in turn reduces hunger and supports weight-loss maintenance over time.",
          "Fiber works differently but toward the same end — it slows digestion and promotes a feeling of fullness that lasts longer than the calories alone would suggest. Healthy fats, consumed in moderation, further increase satiety and support hormone balance, which is part of why a small handful of seeds tends to be more satisfying than an equivalent amount of a low-fat, low-fiber snack.",
        ],
      },
      {
        heading: "What's a Practical Daily Habit for Adding Sunflower Seeds to a Diet?",
        body: [
          "Shelling seeds by hand naturally slows eating, which gives the body more time to register fullness before overeating occurs — a genuinely useful, if unscientific, side benefit of in-shell seeds over pre-shelled kernels. About 1-2 tablespoons (15-30g) of kernels per day is a reasonable portion for most people looking to add sunflower seeds to a weight-conscious diet, whether eaten on their own, over a salad, or blended into a smoothie.",
        ],
      },
      {
        heading: "Are sunflower seeds too high in calories for weight loss?",
        body: [
          "Calorie density and weight management aren't mutually exclusive — what matters is total daily intake and portion size, not any one food's calories per gram in isolation. Because sunflower seeds are filling in small amounts, a sensible 15-30g portion tends to displace less satisfying, lower-nutrient snacking rather than adding on top of it, which is the practical mechanism behind their place in a weight-conscious diet.",
        ],
      },
      {
        heading: "What Essential Minerals Do Sunflower Seeds Provide?",
        body: [
          "Vitamin E and protein tend to get most of the attention when sunflower seeds come up in a nutrition conversation, but the mineral profile is just as notable.",
        ],
        list: [
          "Magnesium — supports muscle function, blood pressure regulation, and bone health (325mg per 100g in our 363 Series, about 77% of daily value)",
          "Phosphorus — works with calcium for bone and teeth strength, and supports kidney function",
          "Zinc — supports immune function and wound healing",
          "Iron — supports energy levels and oxygen transport",
          "Selenium — an antioxidant that also supports thyroid function",
        ],
      },
      {
        heading: "How Do Sunflower Seeds Compare to Other Nuts and Seeds for Minerals?",
        body: [
          "Per 100g, our sunflower seeds provide roughly 325mg magnesium, 660mg phosphorus, 5mg zinc, and 53μg selenium — figures that compare favorably to almonds, pumpkin seeds, and chia seeds. A reasonable daily serving is about 1 ounce (28g), or roughly 1/4 cup, ideally raw and unsalted to retain maximum nutrient content.",
        ],
      },
      {
        heading: "Does roasting reduce the mineral content of sunflower seeds?",
        body: [
          "Minerals are generally stable under heat, unlike some heat-sensitive vitamins, so roasting has minimal effect on magnesium, phosphorus, zinc, iron, or selenium content. Roasting temperature and time matter more for flavor and for the seed's fat quality than for its mineral profile.",
        ],
      },
      {
        heading: "Why Does Nutrient Density Matter for Snack Brand Buyers?",
        body: [
          "For snack brands and distributors, this full nutrient picture — not just vitamin E — is a genuine differentiator on packaging. Magnesium and selenium content in particular are underused claims compared to the more commonly marketed vitamin E: according to [NIH Office of Dietary Supplements data](https://ods.od.nih.gov/factsheets/Magnesium-Consumer/), a large share of U.S. adults get less magnesium from food than recommended, which makes a naturally magnesium-rich snack a genuinely relevant selling point rather than a marketing footnote. Our [363 Series](/products/363-series), [Tongqing No.6](/products/tq6-series), and [361 Series](/products/361-series) all carry this same core nutritional profile, with only minor variation between series.",
        ],
      },
      {
        heading: "Where Can You Source Sunflower Seeds for a Health or Wellness Brand?",
        body: [
          "For more on how to put this nutrition profile to work in a recipe, see our [complete cooking guide](/blog/sunflower-seeds-recipes). Sourcing seeds for a health, weight-management, or wellness-positioned brand? [Request samples and a specification sheet](/contact#quote-form) for the series that best matches your product.",
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
