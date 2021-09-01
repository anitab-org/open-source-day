---
title: "Your Mentors"
permalink: /open-source-day-2021-GHC-mentors/
classes: wide
sidebar:
  nav: "osd2021july"
---

<h3>Thank you OSD Summer mentors for supporting OSD community in a remarkable event!</h3>

OSD Mentors work with one of our partner projects to help participants contribute to their open source projects.

<ul>
{% for project_hash in site.data.projects %}
  <li>
  {% assign project = project_hash[1] %}
  <h3>{{ project.name }}</h3>
  {% for mentor in project.mentors %}
    <ul>
      {% include mentor-profile.html mentor="mentor" %}
    </ul>
  {% endfor %}
  </li>
{% endfor %}
</ul>