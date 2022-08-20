---
title: "Open Source Day"
permalink: /open-source-day/
classes: wide
sidebar:
  nav: "open-source-day"
---

<link rel="stylesheet" href="{{ '/assets/css/committee.css' | relative_url }}">


2022 GHC Open Source Day will take place virtually on September 16th 2022 from 8am to 3pm US Pacific Time.

Open Source Day (OSD) is an all-day hackathon (including workshops) at [Grace Hopper Celebration](https://ghc.anitab.org/) in which participants of all skill levels learn about open source while contributing to projects designed to solve real-world problems. With the support of project maintainers, experienced mentors, and expert speakers, OSD attendees are on the fast track to becoming open source contributors.

<img src="{{ site.baseurl }}/assets/images/2021_osd_impact.png" alt="2021 OSD Impact Slides">
<br />
<br />

During OSD, participants can join a project on the **Contribution Track** and/or attend one or more workshops from the **Learning track**.

<h1 style="color: rgb(29, 66, 138);"> Contribution Track (Projects) </h1>
On the Contribution Track, participants will contribute code to our partner open source software (OSS) projects.
 Participants can choose to work solo or in groups on an issue and have opportunities to meet project maintainers
 and experienced mentors who will be available throughout the day to help them make their OSS contribution.
 Additionally, as part of the contribution track, we have a "Choose your own adventure" option, where participants
 have the opportunity to contribute code to projects led by women maintainers or to any project in the OSS
 community with mentors available to help!

<h1 style="color: rgb(29, 66, 138);"> Learning Track (Workshops) </h1>
On the Learning Track, participants can attend hands-on workshops to help them overcome the barriers to making
 open source contributions. Participants will have a chance to attend technical and non-technical workshops and walk
 away with skills they can leverage in open source contributions.

## Have Questions?
Check out answers to frequently asked questions on our [FAQ](/faq/) page.

<br />
<br />

# Committee Members

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