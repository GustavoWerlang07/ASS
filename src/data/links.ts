export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  platform: 'whatsapp' | 'instagram' | 'maps' | 'google-review';
  badge?: string;
  isSpecial?: boolean;
  accentColor: string;
  glowColor: string;
  ariaLabel: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  guidanceText: string;
  nfcText: string;
  closingTitle: string;
  closingMessage: string;
  copyright: string;
  statusBadge: {
    isOpen: boolean;
    text: string;
    subtext: string;
  };
  highlights: Array<{
    icon: string;
    label: string;
    highlight: string;
  }>;
}

export const businessInfo: BusinessInfo = {
  name: "A.S.S Distribuidora de Bebidas",
  tagline: "Sua bebida, a um toque de distância.",
  description: "Todos os nossos canais em um só lugar.",
  guidanceText: "Escolha uma opção abaixo",
  nfcText: "Conectado em segundos.",
  closingTitle: "Conecte-se com a A.S.S",
  closingMessage: "Obrigado pela preferência!",
  copyright: "© A.S.S Distribuidora de Bebidas. Todos os direitos reservados.",
  statusBadge: {
    isOpen: true,
    text: "Atendimento Rápido",
    subtext: "Bebidas estalando de geladas ❄️"
  },
  highlights: [
    { icon: "Beer", label: "Cervejas & Destilados", highlight: "Super Geladas" },
    { icon: "Zap", label: "Atendimento", highlight: "Sem Demora" },
    { icon: "MapPin", label: "Fácil Acesso", highlight: "Pronta Entrega" }
  ]
};

export const mainLinks: LinkItem[] = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "Faça seu pedido ou fale conosco",
    url: "https://wa.link/mf1hex",
    platform: "whatsapp",
    badge: "Mais Rápido",
    accentColor: "#25D366",
    glowColor: "rgba(37, 211, 102, 0.45)",
    ariaLabel: "Abrir WhatsApp para fazer pedido ou falar conosco"
  },
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "Acompanhe nossas novidades",
    url: "https://www.instagram.com/a.s.sdistribuidora?stkn=cDQ4MHA4d3FhZHU1",
    platform: "instagram",
    badge: "Promoções",
    accentColor: "#E1306C",
    glowColor: "rgba(225, 48, 108, 0.4)",
    ariaLabel: "Acessar o perfil oficial da A.S.S Distribuidora no Instagram"
  },
  {
    id: "location",
    title: "Como chegar",
    subtitle: "Abra nossa localização no mapa",
    url: "https://maps.app.goo.gl/t8DwdhxCyTNvKYKY6",
    platform: "maps",
    badge: "Ver Rota",
    accentColor: "#4285F4",
    glowColor: "rgba(66, 133, 244, 0.45)",
    ariaLabel: "Abrir localização da A.S.S Distribuidora de Bebidas no Google Maps"
  },
  {
    id: "google-review",
    title: "Avalie no Google",
    subtitle: "Sua avaliação faz a diferença ⭐",
    url: "https://search.google.com/local/writereview?placeid=ChIJhYffcXyBp5MR-KGjYrBbRJo",
    platform: "google-review",
    badge: "Destaque 5 Estrelas",
    isSpecial: true,
    accentColor: "#FFB000",
    glowColor: "rgba(255, 176, 0, 0.6)",
    ariaLabel: "Deixar uma avaliação de 5 estrelas no Google para a A.S.S Distribuidora"
  }
];
