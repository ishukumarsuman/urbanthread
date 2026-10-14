import { TrendCategory, OutfitLook, SneakerSilhouette, StylePillar } from '../types';

export const TRENDS_DATA: TrendCategory[] = [
  {
    id: 'relaxed-tailoring',
    title: 'Boxy Proportions & Relaxed Tailoring',
    subtitle: 'The convergence of sartorial structure and street-level ease',
    era: 'Spring/Fall Continuous',
    summary: 'Strict formal suiting has yielded to fluid, drop-shoulder silhouettes and wide-leg trousers cut from heavy wool blends and brushed cotton twill.',
    editorialInsight: 'Modern streetwear is no longer strictly graphic-heavy skate tees. Today’s most compelling style statements bridge traditional tailoring with subcultural comfort, allowing structured overcoats to drape casually over oversized heavyweight hoodies.',
    essentialPieces: [
      'Drop-shoulder unlined wool overcoats',
      'Double-pleated wide-leg trousers',
      'Heavyweight 450+ GSM boxy hoodies',
      'Crisp oversized poplin button-downs'
    ],
    stylingAdvice: {
      dos: [
        'Allow wide trousers to break gently over low-profile sneakers or chunky boots.',
        'Keep the base layer fitted or neatly cropped if wearing an exaggerated outer coat.',
        'Opt for substantial textile weights to ensure clean drape and structured lines.'
      ],
      donts: [
        'Avoid pairing ultra-skinny bottoms with oversized top garments (the lollipop silhouette).',
        'Do not let trouser hems drag uncontrollably in wet street environments.',
        'Avoid excessively loud all-over logos that detract from the garment silhouette.'
      ]
    }
  },
  {
    id: 'technical-gorpcore',
    title: 'Technical Gorpcore & Urban Utility',
    subtitle: 'High-performance mountain gear re-engineered for the concrete grid',
    era: 'All-Weather Utility',
    summary: 'Waterproof technical shells, modular ripstop cargo pockets, and trail-tested ergonomics dominate everyday urban transit and styling.',
    editorialInsight: 'What began as a niche appreciation for outdoor brands has evolved into an indispensable aesthetic language. Technical membranes like Gore-Tex and Pertex provide genuine weatherproofing while introducing tactile matte and grid textures into outfits.',
    essentialPieces: [
      '3-layer waterproof membrane shell jackets',
      'Articulated ripstop cargo trousers with bungee adjusters',
      'Modular technical sling bags and chest packs',
      'Vibram-lugged trail running footwear'
    ],
    stylingAdvice: {
      dos: [
        'Balance high-sheen tech fabrics with matte natural fibers like wool and heavy denim.',
        'Use bungee cinches at the ankle to alter your pant silhouette on the fly.',
        'Incorporate earthy tones like lichen green, charcoal, and slate.'
      ],
      donts: [
        'Don’t look like you are heading to an Antarctic summit—keep technical layers measured.',
        'Avoid noisy neon alpine colorways unless styling a single deliberate focal accent.',
        'Do not compromise on genuine water resistance for cosmetic pseudo-tech imitations.'
      ]
    }
  },
  {
    id: 'monochrome-minimalism',
    title: 'Muted Monochrome & Tactile Surfaces',
    subtitle: 'Restraint as the ultimate sartorial flex in a world of visual noise',
    era: 'Perennial Modernist',
    summary: 'Stripping out saturated palettes in favor of charcoal, chalk white, stone grey, and midnight black elevates texture to center stage.',
    editorialInsight: 'When color is eliminated as a distraction, the viewer’s eye is drawn to tactile contrast: the dry hand-feel of loopback cotton, the coarse weave of boiled wool, and the soft sheen of calfskin leather.',
    essentialPieces: [
      'Heavyweight waffle-knit fisherman sweaters',
      'Washed vintage black Japanese denim',
      'Brushed sterling silver geometric jewelry',
      'Subdued charcoal mock-neck pullovers'
    ],
    stylingAdvice: {
      dos: [
        'Stack multiple shades of the same color family (e.g., slate, stone, and bone).',
        'Contrast opposing textures like coarse knits against smooth tailored wool.',
        'Use minimalist silver hardware to catch soft daylight.'
      ],
      donts: [
        'Never mix faded blue-undertone black with green-undertone black without intent.',
        'Avoid flat, synthetic polyester blends that lack natural surface dimension.',
        'Don’t neglect garment maintenance—lint and fading show quickly on monochrome palettes.'
      ]
    }
  },
  {
    id: 'heritage-workwear',
    title: 'Deconstructed Workwear & Duck Canvas',
    subtitle: 'Honoring utilitarian labor roots with modern architectural cuts',
    era: 'Modern Heritage',
    summary: 'Double-knee carpenter pants, blanket-lined canvas jackets, and chain-stitched hems celebrate authentic industrial resilience.',
    editorialInsight: 'Workwear has been a staple of subcultures for half a century. Today’s resurgence focuses on boxy silhouettes, heavy rivets, and washed patinas that convey durability, character, and timeless utility.',
    essentialPieces: [
      'Double-knee carpenter trousers with hammer loops',
      'Boxy zip-front Detroit canvas jackets',
      'Vintage-washed heavyweight pocket tees',
      'Goodyear-welted moc toe leather boots'
    ],
    stylingAdvice: {
      dos: [
        'Pair rugged work jackets with clean, tailored trousers to create high-low contrast.',
        'Embrace natural fading and distressing earned through everyday wear.',
        'Choose relaxed straight fits that offer full range of motion.'
      ],
      donts: [
        'Avoid synthetic fake distressing created by aggressive chemical bleach.',
        'Do not over-accessorize workwear; its beauty lies in spartan functionality.',
        'Avoid stiff, unwashed raw denim in warm summer humidity.'
      ]
    }
  }
];

export const OUTFITS_DATA: OutfitLook[] = [
  {
    id: 'college-studio',
    title: 'The Design Studio Capsule',
    occasion: 'College',
    vibe: 'Relaxed, durable, and practical for long campus hours',
    description: 'A study in functional comfort. The heavy loopback hoodie provides warmth in air-conditioned lecture halls, while double-knee trousers withstand studio work.',
    garments: [
      { layer: 'Base Layer', item: 'Heavyweight Tubular White Tee', fabricOrColor: '250 GSM Combed Cotton' },
      { layer: 'Mid Layer', item: 'Boxy Drop-Shoulder Hoodie', fabricOrColor: 'Heather Grey Loopback' },
      { layer: 'Outerwear', item: 'Unlined Chore Jacket', fabricOrColor: 'Washed Black Canvas' },
      { layer: 'Bottoms', item: 'Relaxed Double-Knee Carpenter Pants', fabricOrColor: 'Olive Twill' }
    ],
    footwear: 'Cream Retro Trail Runners with Gum Outsole',
    accessories: ['Cordura Crossbody Courier Bag', 'Ribbed Charcoal Beanie'],
    proStylingTip: 'Let 1 inch of the white base tee peek out from under the hoodie hem to create a crisp visual divider between the top and bottoms.'
  },
  {
    id: 'college-lecture',
    title: 'The Modern Campus Scholar',
    occasion: 'College',
    vibe: 'Clean, smart casual, and effortlessly put together',
    description: 'Elevates everyday campus style by pairing a refined mock-neck sweater with wide-leg pleated chinos and understated court sneakers.',
    garments: [
      { layer: 'Base / Mid', item: 'Seamless Ribbed Mock-Neck Knit', fabricOrColor: 'Oatmeal Wool-Cotton' },
      { layer: 'Outerwear', item: 'Single-Breasted Mac Coat', fabricOrColor: 'Matte Charcoal Poplin' },
      { layer: 'Bottoms', item: 'Pleated Wide-Leg Chinos', fabricOrColor: 'Midnight Navy' }
    ],
    footwear: 'Minimalist Off-White Low-Profile Court Sneakers',
    accessories: ['Structured Canvas Tote with Leather Straps', 'Matte Black Steel Watch'],
    proStylingTip: 'Keep the mac coat unbuttoned while walking across campus to let the clean vertical line of the mock-neck knit elongate your silhouette.'
  },
  {
    id: 'casual-gallery',
    title: 'The Gallery Crawl Ensemble',
    occasion: 'Casual',
    vibe: 'Cultured, artistic, and texture-forward',
    description: 'Tailored for weekend gallery hops and coffee meetups. Combines washed denim textures with relaxed pleated wool for a tactile editorial finish.',
    garments: [
      { layer: 'Base Layer', item: 'Relaxed Vintage Wash Graphic Tee', fabricOrColor: 'Off-White Slub Cotton' },
      { layer: 'Mid Layer', item: 'Heavy Denim Overshirt', fabricOrColor: 'Washed Charcoal Black' },
      { layer: 'Bottoms', item: 'Fluid Drape Pleated Trousers', fabricOrColor: 'Muted Slate Grey' }
    ],
    footwear: 'Technical Gorpcore Trail Runners (Dark Grey / Black)',
    accessories: ['Brushed Sterling Silver Band', 'Tortoiseshell Acetate Sunglasses'],
    proStylingTip: 'Roll the cuffs of the denim overshirt once to expose the inner selvedge stitch and give your forearms breathing room.'
  },
  {
    id: 'casual-coffee',
    title: 'The Weekend Roastery Run',
    occasion: 'Casual',
    vibe: 'Cozy, laid-back, and photograph-ready',
    description: 'A cozy Sunday uniform. The waffle knit adds rich visual depth that photographs beautifully under soft morning cafe light.',
    garments: [
      { layer: 'Base Layer', item: 'Fine Gauge Supima Long Sleeve', fabricOrColor: 'Pure White' },
      { layer: 'Mid Layer', item: 'Chunky Heavy Waffle Knit Crewneck', fabricOrColor: 'Bone / Ecru' },
      { layer: 'Bottoms', item: 'Relaxed Tapered Washed Jeans', fabricOrColor: 'Light Indigo Vintage Wash' }
    ],
    footwear: 'Classic Grey Suede Retro Running Shoes',
    accessories: ['Corduroy 6-Panel Cap in Chocolate Brown', 'Leather Cardholder Lanyard'],
    proStylingTip: 'Tuck the front inch of your waffle knit loosely into the denim waistband for a subtle French tuck that defines your waistline.'
  },
  {
    id: 'evening-nocturne',
    title: 'The Contemporary Nocturne',
    occasion: 'Evening',
    vibe: 'Sophisticated, architectural, and razor-sharp',
    description: 'Designed for rooftop dinners, art openings, and night venues. A monochromatic black silhouette engineered with contrasting textiles.',
    garments: [
      { layer: 'Base / Mid', item: 'Fine Merino Wool Turtleneck', fabricOrColor: 'Pitch Black' },
      { layer: 'Outerwear', item: 'Heavy Drop-Shoulder Car Coat', fabricOrColor: 'Melange Charcoal Wool' },
      { layer: 'Bottoms', item: 'High-Waisted Tailored Wool Trousers', fabricOrColor: 'Jet Black' }
    ],
    footwear: 'Polished Black Leather Chelsea Boots or Minimal Derbies',
    accessories: ['Brushed Silver Signet Ring', 'Subtle Leather Clutch Bag'],
    proStylingTip: 'Ensure your trouser break sits cleanly atop your chelsea boot collar with zero bunching to maintain an unbroken vertical line.'
  },
  {
    id: 'evening-downtown',
    title: 'The Downtown Social',
    occasion: 'Evening',
    vibe: 'Edgy, sleek, and effortlessly confident',
    description: 'Brings high-fashion edge to evening drinks. A cropped boxy blouson balances higher-rise straight-leg trousers and subtle silver jewelry.',
    garments: [
      { layer: 'Base Layer', item: 'Boxy Cropped Crewneck Tee', fabricOrColor: 'Washed Ash Grey' },
      { layer: 'Outerwear', item: 'Cropped Minimalist Blouson / Harrington', fabricOrColor: 'Matte Leather or Waxed Twill' },
      { layer: 'Bottoms', item: 'Straight-Leg Raw Selvedge Denim', fabricOrColor: 'Deep Indigo / Black' }
    ],
    footwear: 'Chunky Commando-Sole Leather Derby Shoes',
    accessories: ['Silver Cuban Link Chain (Minimal 4mm)', 'Vintage Leather Belt with Brushed Buckle'],
    proStylingTip: 'A cropped jacket length combined with high-rise trousers visually lengthens your legs, making you appear taller and more composed.'
  }
];

export const SNEAKERS_DATA: SneakerSilhouette[] = [
  {
    id: 'retro-runners',
    name: 'The 90s/00s Retro Technical Runner',
    silhouetteType: 'Retro Runner',
    designPhilosophy: 'Complex layered paneling, open mesh construction, and visible gel or foam cushioning designed for ergonomic daily mileage.',
    materialFocus: 'Synthetic overlays, breathable engineered mesh, EVA/Gel midsole, and high-abrasion rubber outsoles.',
    bestPairedWith: [
      'Wide-leg puddle trousers that rest gently over the chunky heel',
      'Pleated casual chinos with a subtle cuff break',
      'Technical nylon track pants with toggle hems'
    ],
    buyingChecklist: [
      'Check heel-to-toe arch support for long walking days',
      'Ensure the mesh upper allows adequate breathability for all-day campus wear',
      'Look for neutral grey, bone, and silver colorways for maximum wardrobe versatility'
    ],
    versatilityScore: 9.4
  },
  {
    id: 'minimalist-court',
    name: 'The Clean Leather Court Sneaker',
    silhouetteType: 'Minimalist Court',
    designPhilosophy: 'Spartan elegance, zero conspicuous branding, stitched cupsole construction, and sleek low-profile proportions.',
    materialFocus: 'Full-grain Italian or Portuguese calfskin, leather lining, waxed cotton laces, and Margom-style rubber soles.',
    bestPairedWith: [
      'Tailored wool trousers for modern business-casual elegance',
      'Crisp dark indigo selvedge denim with single turn-up cuff',
      'Relaxed linen trousers during warmer spring/summer months'
    ],
    buyingChecklist: [
      'Examine leather grade—full grain ages gracefully, while split leather cracks',
      'Ensure the inner lining is breathable leather rather than synthetic mesh',
      'Choose warm off-white or chalk tones over blinding stark blue-white for easier styling'
    ],
    versatilityScore: 9.7
  },
  {
    id: 'gorpcore-trail',
    name: 'The All-Terrain Trail Silhouette',
    silhouetteType: 'Gorpcore Trail',
    designPhilosophy: 'Engineered for mountain scree and adapted for wet concrete sidewalks. Features aggressive tread patterns and speed-lacing systems.',
    materialFocus: 'Ripstop textiles, welded TPU mudguards, Quicklace friction toggles, and Contagrip lugged outsoles.',
    bestPairedWith: [
      'Bungee-cuffed articulated cargo pants',
      'Heavyweight fleece shorts with crew socks in transitional weather',
      'Tapered utilitarian work pants with functional tool pockets'
    ],
    buyingChecklist: [
      'Verify whether you need Gore-Tex (great for rain, warmer in summer heat)',
      'Confirm traction performance on polished tile and wet subway stairs',
      'Size up half a size if pairing with thick wool hiking socks'
    ],
    versatilityScore: 8.8
  },
  {
    id: 'heritage-high-top',
    name: 'The Heritage Basketball High-Top',
    silhouetteType: 'High-Top Classic',
    designPhilosophy: 'Mid-century basketball heritage that transitioned into skateboarding and street culture icons over four decades.',
    materialFocus: 'Pebbled leather, heavy 14oz cotton duck canvas, vulcanized rubber toe caps, and padded ankle collars.',
    bestPairedWith: [
      'Straight-leg raw denim falling neatly above or over the collar',
      'Drop-crotch relaxed sweatpants tucked or gathered at the ankle',
      'Wide carpenter denim with raw cut hems'
    ],
    buyingChecklist: [
      'Consider ease of entry—high tops require loosening laces to slide on and off',
      'Ensure ankle collar padding provides comfortable support without rubbing',
      'Classic canvas models look better with age and authentic street patina'
    ],
    versatilityScore: 8.5
  }
];

export const STYLE_PILLARS: StylePillar[] = [
  {
    id: 'proportions',
    number: '01',
    title: 'Silhouette & Proportion Architecture',
    subtitle: 'The fundamental geometry that separates intentional styling from shapeless dressing',
    concept: 'In contemporary streetwear, silhouette is paramount. The secret to mastering oversized fashion is intentional volume distribution rather than buying random clothes two sizes too large.',
    rules: [
      {
        rule: 'The Rule of Counterbalance',
        explanation: 'If your top layer is dramatically oversized and boxy, choose trousers with structured straight or wide drape that maintain visual balance, avoiding extreme skinny silhouettes that distort your proportions.'
      },
      {
        rule: 'Drop-Shoulder vs Shoulder-Seam Mastery',
        explanation: 'True oversized streetwear is specifically engineered with lowered shoulder seams, broader chest widths, and cropped torso lengths so the garment sits comfortably without pooling at the hips.'
      },
      {
        rule: 'Hem Breaks and Footwear Anchors',
        explanation: 'Your pant break must converse with your shoe. Chunky retro runners accommodate slight trouser breaks, while low-profile court shoes shine when paired with clean, no-break or cropped trousers.'
      }
    ],
    curatorNote: 'Stand in front of a full-length mirror and view your silhouette in squinted light. If the outer outline looks cohesive and intentional, your outfit proportions are balanced.'
  },
  {
    id: 'layering',
    number: '02',
    title: 'Textile Weights & Layering Mechanics',
    subtitle: 'Building tactile depth and seasonal adaptability through fabric stacking',
    concept: 'Great outfits invite touch. Combining different textile weights and finishes transforms a simple monochrome outfit into an editorial masterclass.',
    rules: [
      {
        rule: 'Ascending Fabric Density',
        explanation: 'Always stack lighter textile densities closest to your skin (fine cotton base) and graduate outward through mid-weights (waffle knit, loopback fleece) to high-density armor (boiled wool, waxed twill, technical shells).'
      },
      {
        rule: 'Visible Edge Separation',
        explanation: 'Expose a sliver of your base tee beneath a sweater hem, or keep an overshirt unbuttoned to reveal the vertical layer line. This breaks monotony and adds dimensional depth.'
      },
      {
        rule: 'Sheen and Texture Dialectics',
        explanation: 'Pair high-sheen synthetic tech fabrics (nylon shells) with ultra-matte organic fibers (rough denim, combed fleece) to avoid looking like a single block of plastic.'
      }
    ],
    curatorNote: 'Layering is not just for winter. In spring and summer, lightweight open camp-collar shirts layered over ribbed tank tops create the same dimensional flair without overheating.'
  },
  {
    id: 'color-theory',
    number: '03',
    title: 'Tonal Restraint & The 60-30-10 Palette Rule',
    subtitle: 'Mastering muted neutrals and preventing clashing black undertones',
    concept: 'Modern streetwear draws power from quiet confidence. Restricting your color palette to disciplined neutrals allows garment cut, silhouette, and texture to command full attention.',
    rules: [
      {
        rule: 'The 60-30-10 Distribution Rule',
        explanation: 'Allocate 60% of your outfit surface to a dominant neutral canvas (e.g. charcoal or slate), 30% to a secondary tonal companion (e.g. heather grey or bone white), and 10% to an intentional accent (e.g. olive, burgundy, or silver hardware).'
      },
      {
        rule: 'Beware Undertone Discord in Blacks',
        explanation: 'Black is not universal. Some fabrics carry a cool blue-indigo cast, while others lean brown-warm. Mixing mismatched black undertones under sunlight creates an unintentional mismatched look.'
      },
      {
        rule: 'Embrace Earthy Off-Whites',
        explanation: 'Swap out stark optical white for softer alabaster, ecru, bone, and oat tones. They blend seamlessly with charcoal, denim, and olive palettes while offering an understated luxury feel.'
      }
    ],
    curatorNote: 'If you want to introduce a vibrant pop of color, keep it strictly in footwear details or accessories rather than the primary coat or trousers.'
  },
  {
    id: 'finishing-touches',
    number: '04',
    title: 'Hardware, Accents & Accessories Discipline',
    subtitle: 'Intentional curation over cluttered distraction',
    concept: 'Accessories should act as commas and periods in your style sentence—guiding the eye without hijacking the conversation.',
    rules: [
      {
        rule: 'Cohesive Metal Finishes',
        explanation: 'Unify your jewelry and hardware. If your watch and necklace are brushed sterling silver, align your belt buckle and bag zippers with cool matte tones rather than shiny gold.'
      },
      {
        rule: 'Proportional Bag Selection',
        explanation: 'Match the visual volume of your bag to your outfit. An oversized heavy trench coat easily supports a structured tote or courier bag, whereas a tiny pouch gets visually swallowed.'
      },
      {
        rule: 'Headwear Architecture',
        explanation: 'Low-profile 6-panel caps and fisherman beanies worn above the ears ground relaxed silhouettes without adding excessive height.'
      }
    ],
    curatorNote: 'Before leaving the house, look at your accessories and remove one piece. Streetwear sophistication lives in editorial restraint.'
  }
];
