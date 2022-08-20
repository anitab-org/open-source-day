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
    <h2 id="{{project.name}}" style="background: {{project.color | default: 'rgb(29, 66, 138)'}}; color: white; padding: 10px;">{{project.name}}</h2>
    {% for resource in project.resources %}
      <div id="project-links">
        <button class="btn" style="background: {{project.color | default: '#e6f2ff'}};" onclick="window.open('{{resource.project}}','_blank')">Project Repo</button>
        <button class="btn" style="background: {{project.color | default: '#e6f2ff'}};" onclick="window.open('{{resource.issues}}','_blank')">Issues</button>
        {% if resource.issues2 %}
        <button class="btn" style="background: {{project.color | default: '#e6f2ff'}};" onclick="window.open('{{resource.issues2}}','_blank')">Other Issues</button>
        {% endif %}
        <button class="btn" style="background: {{project.color | default: '#e6f2ff'}};" onclick="window.open('{{resource.setup}}','_blank')">Setup Guide</button>
        {% if resource.code-of-coduct %}
        <button class="btn" style="background: {{project.color | default: '#e6f2ff'}};" onclick="window.open('{{resource.code-of-conduct}}','_blank')">Code of Conduct</button>
        {% endif %}
      </div>
    {% endfor %}
    <br />
    <p style="font-size: 14px;">Representative(s):
    {% for representative in project.representatives %}
      <button class="btn" onclick="window.open('{{representative.github}}','_blank')">{{representative.name}}</button>
    {% endfor %}
    </p>
    <p>{{project.description}}</p>
  </div>
  {% endfor %}
</div>