import { jsxs, jsx } from "react/jsx-runtime";
import { MessageCircle, Clock, ShieldCheck, Truck, CheckCircle2, Laptop, Camera, Wrench, Gamepad2, Wifi, HardDrive, Building2, Zap, MapPin, Phone } from "lucide-react";
const heroImg = "/assets/hero-repair-Ct0-Ne34.jpg";
const camerasImg = "/assets/service-cameras-QZ7_GLVl.jpg";
const notebookImg = "/assets/service-notebook-Cluyf0Hv.jpg";
const networkImg = "/assets/service-network-DWnkaIOH.jpg";
const logoImg = "/assets/logo-C81UG0RE.png";
const WHATSAPP_NUMBER = "5491132900205";
const WHATSAPP_DISPLAY = "+54 9 11 3290-0205";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Thomas, necesito ayuda con un servicio técnico.")}`;
function Home() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(TrustBar, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Process, {}),
    /* @__PURE__ */ jsx(WhyMe, {}),
    /* @__PURE__ */ jsx(Coverage, {}),
    /* @__PURE__ */ jsx(CTA, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingWhatsApp, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2 font-bold tracking-tight", children: [
      /* @__PURE__ */ jsx("img", { src: logoImg, alt: "Eternae IT", className: "h-9 w-9 rounded-lg object-cover shadow-glow" }),
      /* @__PURE__ */ jsxs("span", { className: "text-lg", children: [
        "ETERNAE",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "·IT" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsx("a", { href: "#servicios", className: "transition-colors hover:text-foreground", children: "Servicios" }),
      /* @__PURE__ */ jsx("a", { href: "#proceso", className: "transition-colors hover:text-foreground", children: "Cómo trabajo" }),
      /* @__PURE__ */ jsx("a", { href: "#zona", className: "transition-colors hover:text-foreground", children: "Zona" }),
      /* @__PURE__ */ jsx("a", { href: "#contacto", className: "transition-colors hover:text-foreground", children: "Contacto" })
    ] }),
    /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
      /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Pedir presupuesto" }),
      /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "WhatsApp" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative overflow-hidden bg-hero pt-32 pb-20 sm:pt-40 sm:pb-28", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-[oklch(0.7_0.17_150)]" }),
          "Disponible hoy · CABA y GBA"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl", children: [
          "Soporte técnico que",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "funciona" }),
          ".",
          /* @__PURE__ */ jsx("br", {}),
          "Sin vueltas."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Reparación de notebooks, PC y consolas. Instalación de cámaras de seguridad, redes WiFi y mantenimiento para hogares y empresas en Buenos Aires." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
            "Consultar por WhatsApp"
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#servicios", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-card", children: "Ver servicios" })
        ] }),
        /* @__PURE__ */ jsxs("dl", { className: "mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6", children: [
          /* @__PURE__ */ jsx(Stat, { value: "24h", label: "Respuesta" }),
          /* @__PURE__ */ jsx(Stat, { value: "100%", label: "Presupuesto sin cargo" }),
          /* @__PURE__ */ jsx(Stat, { value: "A domicilio", label: "o en taller" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 -z-10 rounded-3xl bg-brand-gradient opacity-30 blur-2xl" }),
        /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Reparación de placa de notebook con soldador de precisión", width: 1600, height: 1024, className: "rounded-2xl border border-border shadow-card" })
      ] })
    ] })
  ] });
}
function Stat({
  value,
  label
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("dt", { className: "text-2xl font-bold text-foreground", children: value }),
    /* @__PURE__ */ jsx("dd", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: label })
  ] });
}
function TrustBar() {
  const items = [{
    icon: Clock,
    text: "Respuesta rápida"
  }, {
    icon: ShieldCheck,
    text: "Garantía escrita"
  }, {
    icon: Truck,
    text: "Servicio a domicilio"
  }, {
    icon: CheckCircle2,
    text: "Presupuesto sin cargo"
  }];
  return /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-card/30 py-6", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-sm text-muted-foreground sm:px-6 lg:px-8", children: items.map((it) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(it.icon, { className: "h-4 w-4 text-primary" }),
    /* @__PURE__ */ jsx("span", { children: it.text })
  ] }, it.text)) }) });
}
function Services() {
  const services = [{
    icon: Laptop,
    title: "Reparación de notebooks y PC",
    description: "Diagnóstico, cambio de pasta térmica, limpieza profunda, upgrade de RAM/SSD, reemplazo de pantallas y teclados.",
    items: ["Notebooks", "PC de escritorio", "All-in-One", "Upgrades de hardware"],
    image: notebookImg,
    featured: true
  }, {
    icon: Camera,
    title: "Cámaras de seguridad",
    description: "Instalación y configuración de sistemas de videovigilancia para casas, locales y oficinas. Acceso remoto desde el celular.",
    items: ["Cámaras IP / analógicas", "DVR y NVR", "Visualización remota", "Cableado prolijo"],
    image: camerasImg,
    featured: true
  }, {
    icon: Wrench,
    title: "Electrónica y soldadura",
    description: "Reparación a nivel componente: placas madre, fuentes, conectores de carga y trabajos de microsoldadura.",
    items: ["Microsoldadura SMD", "Cambio de pin de carga", "Reballing básico", "Diagnóstico de placas"]
  }, {
    icon: Gamepad2,
    title: "Reparación de PS3 y consolas",
    description: "Limpieza interna, cambio de pasta térmica, reparación de lectoras, YLOD y problemas de encendido.",
    items: ["PS3 / PS4", "Limpieza y pasta", "Lectoras", "HDMI y puertos"]
  }, {
    icon: Wifi,
    title: "Redes y WiFi",
    description: "Instalación de routers, repetidores, switches y cableado de red estructurado para hogar o empresa.",
    items: ["WiFi sin zonas muertas", "Cableado UTP", "Configuración de routers", "Redes para PyMEs"],
    image: networkImg
  }, {
    icon: HardDrive,
    title: "Formateo y recuperación de datos",
    description: "Instalación de Windows, drivers, paquete Office y rescate de archivos de discos, SSD y pendrives dañados.",
    items: ["Windows 10 / 11", "Backup de datos", "Recuperación de archivos", "Optimización"]
  }, {
    icon: Building2,
    title: "Mantenimiento empresarial",
    description: "Soporte mensual para oficinas y PyMEs: gestión de usuarios, impresoras, redes y prevención de fallas.",
    items: ["Soporte mensual", "Active Directory / M365", "Servidores y backups", "Mesa de ayuda"]
  }];
  return /* @__PURE__ */ jsx("section", { id: "servicios", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Servicios" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "Todo lo que tu equipo necesita, en un solo lugar" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Desde una reparación urgente hasta el armado completo de la red de tu oficina." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsx(ServiceCard, { service: s }, s.title)) })
  ] }) });
}
function ServiceCard({
  service
}) {
  const Icon = service.icon;
  const span = service.featured ? "lg:col-span-2" : "";
  return /* @__PURE__ */ jsxs("article", { className: `group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 ${span}`, children: [
    service.image && /* @__PURE__ */ jsx("div", { className: "mb-6 -mx-6 -mt-6 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: service.image, alt: service.title, width: 1024, height: 768, loading: "lazy", className: "aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-brand-foreground shadow-glow", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: service.title })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: service.description }),
    /* @__PURE__ */ jsx("ul", { className: "mt-5 grid grid-cols-2 gap-2 text-sm", children: service.items.map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-muted-foreground", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 shrink-0 text-primary" }),
      i
    ] }, i)) })
  ] });
}
function Process() {
  const steps = [{
    n: "01",
    title: "Me contás el problema",
    text: "Escribime por WhatsApp con una descripción o foto del equipo. Te respondo a la brevedad."
  }, {
    n: "02",
    title: "Diagnóstico y presupuesto",
    text: "Reviso el equipo a domicilio o en taller y te paso un presupuesto claro, sin sorpresas."
  }, {
    n: "03",
    title: "Reparación e instalación",
    text: "Trabajo con repuestos originales y herramientas profesionales. Te muestro lo que se hizo."
  }, {
    n: "04",
    title: "Entrega con garantía",
    text: "Recibís tu equipo funcionando, con garantía escrita y soporte post-servicio."
  }];
  return /* @__PURE__ */ jsx("section", { id: "proceso", className: "border-y border-border bg-card/30 py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Cómo trabajo" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "4 pasos simples, cero complicaciones" })
    ] }),
    /* @__PURE__ */ jsx("ol", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: steps.map((s) => /* @__PURE__ */ jsxs("li", { className: "relative rounded-2xl border border-border bg-background p-6 shadow-card", children: [
      /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold text-primary/30", children: s.n }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 text-lg font-semibold", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.text })
    ] }, s.n)) })
  ] }) });
}
function WhyMe() {
  const points = [{
    icon: ShieldCheck,
    title: "Garantía escrita",
    text: "Todos los trabajos incluyen garantía por escrito."
  }, {
    icon: Zap,
    title: "Respuesta rápida",
    text: "Respondo consultas el mismo día, idealmente en horas."
  }, {
    icon: Truck,
    title: "A domicilio",
    text: "Voy a tu casa u oficina sin costo de visita en zona."
  }, {
    icon: CheckCircle2,
    title: "Trabajo honesto",
    text: "Te explico todo y no cobro lo que no es necesario."
  }];
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Sobre mí" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "Soy Thomas, técnico." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Contamos con experiencia en reparación de hardware, CCTV, electrónica y administración de redes. Atiendo a particulares y empresas en CABA y Provincia de Buenos Aires." }),
      /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
        "Hablemos por WhatsApp"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: points.map((p) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-brand-foreground", children: /* @__PURE__ */ jsx(p.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.text })
    ] }, p.title)) })
  ] }) });
}
function Coverage() {
  const zones = ["CABA (todos los barrios)", "Zona Norte (Vicente López, San Isidro, Tigre)", "Zona Oeste (Morón, Hurlingham, Ituzaingó)", "Zona Sur (Avellaneda, Lomas, Quilmes)", "GBA en general", "Consultá por otras zonas"];
  return /* @__PURE__ */ jsx("section", { id: "zona", className: "border-y border-border bg-card/30 py-24 sm:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Zona de cobertura" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "Buenos Aires Capital y Provincia" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Voy a tu domicilio para diagnosticar, reparar o instalar. Si tu zona no está en la lista, escribime igual y lo coordinamos." })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "grid gap-3 sm:grid-cols-2", children: zones.map((z) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-sm", children: [
      /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 shrink-0 text-primary" }),
      z
    ] }, z)) })
  ] }) }) });
}
function CTA() {
  return /* @__PURE__ */ jsx("section", { id: "contacto", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 text-center shadow-card sm:p-16", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-24 left-1/2 -z-0 h-48 w-[80%] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl", children: "¿Tenés un equipo que no funciona?" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Contame qué te pasa y te ayudo. Presupuesto sin cargo y respuesta en el día." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-base font-semibold text-brand-foreground shadow-glow transition-transform hover:scale-105", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
          "WhatsApp: ",
          WHATSAPP_DISPLAY
        ] }),
        /* @__PURE__ */ jsxs("a", { href: `tel:+${WHATSAPP_NUMBER}`, className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
          "Llamar ahora"
        ] })
      ] })
    ] })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-card/30 py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-bold", children: [
      /* @__PURE__ */ jsx("img", { src: logoImg, alt: "Eternae IT", className: "h-7 w-7 rounded-md object-cover" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "ETERNAE",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "·IT" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "© 2022 Eternae IT · Thomas Miño · Buenos Aires, San justo, Argentina" }),
    /* @__PURE__ */ jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground", children: WHATSAPP_DISPLAY })
  ] }) });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", "aria-label": "Contactar por WhatsApp", className: "fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.68_0.17_150)] text-white shadow-glow transition-transform hover:scale-110", children: [
    /* @__PURE__ */ jsx(MessageCircle, { className: "h-7 w-7" }),
    /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -z-10 animate-ping rounded-full bg-[oklch(0.68_0.17_150)] opacity-50" })
  ] });
}
export {
  Home as component
};
