# Sulodonto — Landing Page

Site estático (HTML, CSS e JavaScript), sem dependências e sem etapa de build.

## Visualizar
Abra a pasta no VS Code e rode `index.html` com a extensão **Live Server** (ou dê duplo clique no arquivo). As fontes do Google Fonts precisam de internet; há fontes alternativas locais.

## Estrutura
- `index.html`: estrutura, SEO básico e Open Graph.
- `css/style.css`: tokens de cor no `:root` (tema claro e escuro) e estilos responsivos.
- `js/data.js`: **todo o conteúdo editável** (número, textos, tratamentos, equipe, horários, FAQ, depoimentos).
- `js/main.js`: renderização, construtor de mensagem do WhatsApp, menu, tema, analytics e mapa.
- `assets/images/` e `assets/icons/`: fotos e ícones.

## Antes de publicar
1. Em `js/data.js`, substitua tudo que estiver entre `[colchetes]` ou marcado como `Placeholder` por dados oficiais: tratamentos, equipe (nome, formação, CRO), horários por dia, depoimentos autorizados, FAQ, Instagram e Google Maps.
2. Confirme o horário "até 19h" e o telefone `5551991465694` com a clínica. Se houver telefone fixo, preencha `company.phone` para ativar o botão "Ligar".
3. Foto do hero e da equipe: salve em `assets/images/` (WebP, com `width`, `height` e `alt`) e aponte em `data.js`.
4. Em `index.html`, descomente o JSON-LD (Dentist) e adicione `og:image` só após validar os dados.
5. Troque `#` do link da Política de Privacidade quando a página existir (LGPD).
6. Revise as cores com o manual de marca. Basta editar as variáveis do `:root` em `css/style.css`.

## Analytics
Os eventos do PRD vão para `window.dataLayer` (compatível com Google Tag Manager): `appointment_whatsapp_hero|treatment|floating|final`, `treatment_click`, `route_click`, `phone_click`, `scroll_50`, `scroll_90`. Parâmetros `utm_*` são preservados nos eventos.

## Publicar
Envie o **conteúdo** da pasta (não o ZIP) para a raiz do repositório. Funciona direto na Vercel, Netlify ou GitHub Pages.

Nenhum dado fictício deve ir ao ar como fato: tratamentos, CRO, avaliações, convênios, preços e história exigem validação da clínica.
