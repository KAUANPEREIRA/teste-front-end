# Teste Front-End Jr — Econverse

## Demo

[https://teste-front-end-one.vercel.app](https://teste-front-end-one.vercel.app)

Vitrine de produtos desenvolvida em React + TypeScript + Tailwind CSS, consumindo API via proxy Vercel.

## Rodar o projeto

```bash
cd teste-front-end
npm install
npm run dev
```

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS
- TanStack Query

## Destaques técnicos

**Componentização**
Cada seção é um componente isolado com seus próprios tipos, dados e estilos — sem acoplamento entre camadas.

**SEO**
`<title>`, `<meta name="description">` dentro do limite de 160 caracteres, `fetchPriority="high"` e `<link rel="preload">` nas imagens LCP (banner e logo).

**Acessibilidade**
HTML semântico (`header`, `nav`, `main`, `section`, `footer`), focus trap no modal, navegação por teclado, `aria-live` em regiões dinâmicas e `aria-label` em todos os controles interativos.

**Responsividade**
Mobile-first em todos os componentes. Menu mobile com drawer lateral, tipografia e grid adaptados por breakpoint.

**API**
Proxy server-side via `vercel.json` para contornar CORS. React Query gerencia cache, loading e error states.

**Interatividade**
Formulário de newsletter com validação e feedback via toast. Modal de produto com seleção de quantidade, cálculo de preço em tempo real e toast de confirmação de compra.
