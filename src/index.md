---
layout: base.njk
title: Fernando Horta Peña
---

# {{ title }}

<!-- ![Yo]({{ '/static/img/ser-feliz.jpg' | url }}) -->

[Acerca]({{ '/acerca' | url }})

## Artículos de mi Blog

### Categoría Anime

{% for Anime in collections.Anime %}

- [{{Anime.data.title}}]({{ Anime.url | url }})

{% endfor %}

### Categoria Series

{% for serie in collections.series %}

- [{{serie.data.title}}]({{ serie.url | url }})

{% endfor %}

### Categoria Video Juego

{% for VideoJuego in collections.VideoJuego %}

- [{{VideoJuego.data.title}}]({{ VideoJuego.url | url }})

{% endfor %}
