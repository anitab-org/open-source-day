---
layout: splash
title: "Mentors"
permalink: /mentors/
classes: wide
---

<link rel="stylesheet" href="{{ '/assets/css/mentor.css' | relative_url }}">

<h1>Meet our mentors for Open Source Day 2022!</h1>

<div class="responsive" style="width: 49.99999%;">
  <div class="gallery">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2LCEuDUEcp4" title="Meet Liangda Wang, OSD Mentor" frameborder="0"></iframe>
    <div class="desc">Meet <a href="https://www.linkedin.com/in/liangda-wang/">Liangda Wang</a>, OSD mentor for project Apache ShardingSphere</div>
  </div>
</div>


<div class="responsive" style="width: 49.99999%;">
  <div class="gallery">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/a1sfKjx5VT8" title="Meet Irvi Aini, OSD Mentor" frameborder="0"></iframe>
    <div class="desc">Meet <a href="https://www.linkedin.com/in/irvifa/">Irvi Aini</a>, OSD mentor for project ArgoCD</div>
  </div>
</div>

<div class="clearfix"></div>

<br/>

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