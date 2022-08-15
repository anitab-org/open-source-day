---
title: "Committee Members"
permalink: /committee-members/
classes: wide
sidebar:
  nav: "committee"
---
<link rel="stylesheet" href="{{ '/assets/css/committee.css' | relative_url }}">
{% assign people = site.data.committee-members %}

**Thank you to our 2022 GHC Open Source Day Committees!**
<!-- co-chair table -->
<div id="co-chairs">
{% for chair in people.co-chairs %}
{% assign index = forloop.index | modulo: 4 %}
<div class="image-card top-border-{{index}}">
  <div>
    <a href="{{chair.linkedin}}" target="_blank">
      <img src="{{chair.image|relative_url}}">
    </a>
  </div>
  <div class="name font-{{index}}">{{ chair.name }}</div>
  <div class="subtitle">Co-Chair</div>
</div>
{% endfor %}
</div>

<!-- committee member table -->
<div id="committee-members">
{% for person in people.committee-members %}
{% assign index = forloop.index | modulo: 4 %}
<div class="image-card top-border-{{index}}">
  <div>
    <a href="{{person.linkedin}}" target="_blank">
      <img src="{{person.image|relative_url}}">
    </a>
  </div>
  <div class="name font-{{index}}">{{ person.name }}</div>
  <div class="subtitle">Committee Member</div>
</div>
{% endfor %}
</div>

<!-- ## Volunteer

> Thank you for your interest! We're no longer accepting applications at this time.

Grace Hopper Celebration Open Source Day team is looking for volunteers to help organize the event for 2022. As an OSD committee member, you are responsible for leading and being accountable for the event's success. OSD committee tasks are split between several areas of responsibility:

- **Project**: Responsible for recruiting open source projects and coordinating with project partners to ensure preparation for the event.
- **Mentor**: Responsible for recruiting mentors for partner projects, training mentors, and coordinating with mentors to ensure preparation for the event.
- **Workshop**: Responsible for selecting content from reviewed CFPs, recruiting speakers, and coordinating with workshop speakers to ensure preparation for the event.
- **Communication**: Responsible for creating social media campaigns / website content and assisting with external communication for OSD.

[Apply now](https://bit.ly/OSD-volunteer) to be part of Open Source Day Committee!

 -->