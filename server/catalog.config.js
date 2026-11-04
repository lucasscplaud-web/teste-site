/**
 * CATÁLOGO SERVER-SIDE — EDITE AQUI.
 * Os preços estão em centavos (R$ 279,90 = 27990). Nunca use float.
 * Os caminhos de imagens apontam para /public/assets/products/.
 * Os estoques servem somente para a PRIMEIRA carga (`npm run db:seed`),
 * e NÃO substituem as quantidades efetivas no PostgreSQL.
 */
export const storeConfig = {
  brand: 'AVANT.',
  currency: 'BRL',
  announcement: 'FRETE PARA TODO O BRASIL  /  NOVA COLEÇÃO 2026',
  categories: ['Tênis', 'Camisetas', 'Jaquetas', 'Moletons', 'Calças', 'Acessórios'],
  products: [
    {
      id: 'arc-runner', slug: 'arc-runner', name: 'ARC RUNNER 01',
      kicker: 'BASKETBALL / PERFORMANCE', category: 'Tênis',
      description: 'Uma silhueta construída para se destacar. Estrutura escultural, energia urbana e detalhes que fazem a diferença.',
      tagline: 'RUN BEYOND THE ORDINARY.', priceCents: 48990,
      badge: 'BESTSELLER', featured: true,
      sizes: ['38','39','40','41','42','43','44'],
      variants: [
        { id: 'arc-red', color: 'Infrared', hex: '#e32d2f', image: '/assets/products/arc-red.svg', stockPerSize: 12 },
        { id: 'arc-green', color: 'Volt', hex: '#a6fc48', image: '/assets/products/arc-green.svg', stockPerSize: 10 },
        { id: 'arc-violet', color: 'Hyper Violet', hex: '#a45eff', image: '/assets/products/arc-violet.svg', stockPerSize: 9 },
        { id: 'arc-blue', color: 'Ice Blue', hex: '#66b6f0', image: '/assets/products/arc-blue.svg', stockPerSize: 12 }
      ]
    },
    {
      id: 'everyday-tee', slug: 'everyday-tee', name: 'EVERYDAY TEE',
      kicker: 'ESSENTIALS / OVERSIZED', category: 'Camisetas',
      description: 'Camiseta oversized em algodão de estrutura macia. Um essencial de peso para a rotina.',
      tagline: 'NO COMPROMISE ON COMFORT.', priceCents: 15990, badge: 'NEW', featured: false,
      sizes: ['P','M','G','GG'],
      variants: [
        { id: 'tee-cream', color: 'Natural', hex: '#e5dfce', image: '/assets/products/tee-cream.svg', stockPerSize: 24 },
        { id: 'tee-black', color: 'Onyx', hex: '#252628', image: '/assets/products/tee-black.svg', stockPerSize: 24 },
        { id: 'tee-blue', color: 'Slate', hex: '#647991', image: '/assets/products/tee-blue.svg', stockPerSize: 12 }
      ]
    },
    {
      id: 'motion-jacket', slug: 'motion-jacket', name: 'MOTION JACKET',
      kicker: 'OUTERWEAR / STREET', category: 'Jaquetas',
      description: 'Jaqueta de corte contemporâneo, acabamento funcional e caráter urbano.',
      tagline: 'MADE TO MOVE.', priceCents: 37990, badge: 'LIMITED', featured: false,
      sizes: ['P','M','G','GG'],
      variants: [
        { id: 'jacket-graphite', color: 'Graphite', hex: '#3b3b40', image: '/assets/products/jacket-graphite.svg', stockPerSize: 8 },
        { id: 'jacket-sand', color: 'Sand', hex: '#bcae98', image: '/assets/products/jacket-sand.svg', stockPerSize: 8 }
      ]
    },
    {
      id: 'pulse-hoodie', slug: 'pulse-hoodie', name: 'PULSE HOODIE',
      kicker: 'ESSENTIALS / HEAVYWEIGHT', category: 'Moletons',
      description: 'Moletom de gramatura alta com capuz volumoso, proporção moderna e conforto absoluto.',
      tagline: 'LAYER WITHOUT LIMITS.', priceCents: 29990, badge: '', featured: false,
      sizes: ['P','M','G','GG'],
      variants: [
        { id: 'hoodie-grey', color: 'Ash', hex: '#aeb1ac', image: '/assets/products/hoodie-grey.svg', stockPerSize: 19 },
        { id: 'hoodie-black', color: 'Noir', hex: '#24252a', image: '/assets/products/hoodie-black.svg', stockPerSize: 20 }
      ]
    },
    {
      id: 'urban-cargo', slug: 'urban-cargo', name: 'URBAN CARGO',
      kicker: 'PANTS / UTILITY', category: 'Calças',
      description: 'Calça utilitária com bolsos estruturados e modelagem reta de caimento solto.',
      tagline: 'BUILT FOR THE CITY.', priceCents: 26990, badge: '', featured: false,
      sizes: ['38','40','42','44','46'],
      variants: [
        { id: 'cargo-dark', color: 'Black', hex: '#292b2d', image: '/assets/products/cargo-dark.svg', stockPerSize: 14 },
        { id: 'cargo-olive', color: 'Olive', hex: '#78795b', image: '/assets/products/cargo-olive.svg', stockPerSize: 12 }
      ]
    },
    {
      id: 'studio-cap', slug: 'studio-cap', name: 'STUDIO CAP',
      kicker: 'ACCESSORIES / HEADWEAR', category: 'Acessórios',
      description: 'Boné estruturado em sarja, aba curva, identidade discreta e ajuste confortável.',
      tagline: 'FINISH THE FIT.', priceCents: 11990, badge: 'NEW', featured: false,
      sizes: ['Único'],
      variants: [
        { id: 'cap-black', color: 'Black', hex: '#292929', image: '/assets/products/cap-black.svg', stockPerSize: 36 },
        { id: 'cap-red', color: 'Red', hex: '#c93b3b', image: '/assets/products/cap-red.svg', stockPerSize: 30 }
      ]
    },
    {
      id: 'arc-runner-02', slug: 'arc-runner-02', name: 'ARC RUNNER 02',
      kicker: 'BASKETBALL / PERFORMANCE', category: 'Tênis',
      description: 'O retorno de um clássico contemporâneo, com cores intensas e tração para novos caminhos.',
      tagline: 'ALWAYS IN MOTION.', priceCents: 52990, badge: 'DROP 02', featured: false,
      sizes: ['38','39','40','41','42','43','44'],
      variants: [
        { id: 'arc2-blue', color: 'Electric Ice', hex: '#66b6f0', image: '/assets/products/arc-blue.svg', stockPerSize: 8 },
        { id: 'arc2-red', color: 'Heat', hex: '#e32d2f', image: '/assets/products/arc-red.svg', stockPerSize: 8 }
      ]
    },
    {
      id: 'daily-tee', slug: 'daily-tee', name: 'DAILY TEE',
      kicker: 'ESSENTIALS / MINIMAL', category: 'Camisetas',
      description: 'Uma camiseta para todos os momentos. Design depurado, qualidade no toque.',
      tagline: 'EVERY DAY, BETTER.', priceCents: 13990, badge: '', featured: false,
      sizes: ['P','M','G','GG'],
      variants: [
        { id: 'daily-black', color: 'Black', hex: '#252628', image: '/assets/products/tee-black.svg', stockPerSize: 26 },
        { id: 'daily-cream', color: 'Bone', hex: '#e5dfce', image: '/assets/products/tee-cream.svg', stockPerSize: 26 }
      ]
    },
    {
      id: 'layer-jacket', slug: 'layer-jacket', name: 'LAYER JACKET',
      kicker: 'OUTERWEAR / DROP 01', category: 'Jaquetas',
      description: 'Construção refinada e estética atemporal. A sobreposição definitiva.',
      tagline: 'FORM FOLLOWS FREEDOM.', priceCents: 40990, badge: '', featured: false,
      sizes: ['P','M','G','GG'],
      variants: [
        { id: 'layer-sand', color: 'Stone', hex: '#bcae98', image: '/assets/products/jacket-sand.svg', stockPerSize: 7 },
        { id: 'layer-dark', color: 'Noir', hex: '#3b3b40', image: '/assets/products/jacket-graphite.svg', stockPerSize: 7 }
      ]
    }
  ]
};
