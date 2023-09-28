---
layout: base.njk
title: Hola Mundo 11ty
---

# {{ title }}

- Primavera
- Verano
- Otoño
- Invierno

[Acerca]({{ '/acerca' | url }})

## Artículos de mi Blog

### Categoría Libros

{% for libro in collections.libros %}

- [{{libro.data.title}}]({{ libro.url | url }})

{% endfor %}

### Categoria Series

{% for serie in collections.series %}

- [{{serie.data.title}}]({{ serie.url | url }})

{% endfor %}
