---
title: "Mentors"
permalink: /mentors/
classes: wide
---

<link rel="stylesheet" href="{{ '/assets/css/mentor.css' | relative_url }}">

Meet our mentors for Open Source Day 2022!

<div id="mentors">
{% for mentor in site.data.mentors %}
{% if mentor.picture %}
{% assign index = forloop.index | modulo: 4 %}
<div class="image-card top-border-{{index}}">
  <div>
      <img src="{{mentor.picture|relative_url}}">
  </div>
  <div class="name font-{{index}}">{{ mentor.name }}</div>
  {% if mentor.github.id %}
  <div class="subtitle"><a href="{{mentor.github.url}}">@{{ mentor.github.id }}</a></div>
  {% endif %}
</div>
{% endif %}
{% endfor %}
</div>

<div id="mentors">
{% for mentor in site.data.mentors %}
{% if mentor.picture %}
{% else %}
{% assign index = forloop.index | modulo: 4 %}
<div class="image-card top-border-{{index}}">
  <div>
  </div>
  <div class="name font-{{index}}">{{ mentor.name }}</div>
  {% if mentor.github.id %}
  <div class="subtitle"><a href="{{mentor.github.url}}">@{{ mentor.github.id }}</a></div>
  {% endif %}
</div>
{% endif %}
{% endfor %}
</div>