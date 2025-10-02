---
title: "Redirigiendo…"
layout: layouts/base.njk
lang: es
permalink: "/"
---
<script>
  const preferred = (navigator.language || 'es').slice(0,2);
  const target = (preferred === 'en') ? '{{ site.baseUrl }}en/' : '{{ site.baseUrl }}es/';
  window.location.replace(target);
</script>
<p>Redirigiendo a tu idioma…</p>
