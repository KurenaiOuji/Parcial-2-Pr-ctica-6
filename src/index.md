---
layout: base.njk
title: Fernando Horta Peña
---

# {{ title }}

<!-- ![Yo]({{ '/static/img/ser-feliz.jpg' | url }}) -->

[Acerca de Mi]({{ '/acerca' | url }})

## Artículos de mi Blog

En este blog dare unas reseñas sobre algnas Series, Animes y Video Juuegos los cuales disfruto.

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
