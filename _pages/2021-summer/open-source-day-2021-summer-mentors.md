---
title: "Your Mentors"
permalink: /open-source-day-2021-summer-mentors/
classes: wide
sidebar:
  nav: "osd2021july"
---

OSD Mentors work with one of our partner projects to help participants contribute to their open source projects. Mentors are selected primarily based on project needs and should plan to attend the entirety of OSD.

<ul>
{% for project in site.data.mentors-directory %}
  <li>
    <h3>{{ project.name }}</h3>
  {% for mentor in project.mentors %}
    <ul>
      {% include mentor-profile.html mentor="mentor" %}
    </ul>
  {% endfor %}
  </li>
{% endfor %}
</ul>