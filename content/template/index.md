---
title: SECTION NAME
layout: page
---

# {{ page.title }}

Short intro for this section.

{% raw %}{% assign section_pages = site.pages
  | where_exp: "p", "p.dir == page.dir and p.name != 'index.md'"
  | sort: "title" %}

{% if section_pages.size > 0 %}
<ul>
  {% for p in section_pages %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title | default: p.name }}</a></li>
  {% endfor %}
</ul>
{% else %}
<p>No pages here yet.</p>
{% endif %}{% endraw %}
