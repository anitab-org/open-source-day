---
title: "Choose Your Own Adventure"
permalink: /choose-your-own-adventure/
classes: wide
sidebar:
  nav: "choose-your-own-adventure"
---

<link rel="stylesheet" href="{{ '/assets/css/projects.css' | relative_url }}">

Choose your own adventure projects provide you the opportunity to contribute code to projects led by women maintainers **or** to any project in the OSS community!

<div class="row">
  {% for project in site.data.cyoa-projects %}
  <div class="column">
    <h2 id="{{project.name}}" style="background: {{project.color | default: 'white'}}; padding: 10px;">{{project.name}}</h2>
    {% for resource in project.resources %}
      <div id="project-links">
        <button class="btn" style="background: {{project.color | default: 'white'}}; opacity: .8;" onclick="window.location.href='{{resource.project}}';">Project Repo</button>
        <button class="btn" style="background: {{project.color | default: 'white'}}; opacity: .8;" onclick="window.location.href='{{resource.issues}}';">Issues</button>
        {% if resource.issues2 %}
        <button class="btn" style="background: {{project.color | default: 'white'}}; opacity: .8;" onclick="window.location.href='{{resource.issues2}}';">Other Issues</button>
        {% endif %}
        <button class="btn" style="background: {{project.color | default: 'white'}}; opacity: .8;" onclick="window.location.href='{{resource.setup}}';">Setup Guide</button>
        {% if resource.code-of-coduct %}
        <button class="btn" style="background: {{project.color | default: 'white'}}; opacity: .8;" onclick="window.location.href='{{resource.code-of-conduct}}';">Code of Conduct</button>
        {% endif %}
      </div>
    {% endfor %}
    <br />
    <p>{{project.description}}</p>
      <span>This project will be represented by:
      {% for representative in project.representatives %}
        {{representative.name}};
      {% endfor %}
      </span>
  </div>
  {% endfor %}
</div>