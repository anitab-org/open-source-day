---
title: "Learning Track"
permalink: /open-source-day-2021-summer-learning/
classes: wide
sidebar:
  nav: "osd2021july"
---

As part of the Learn Track, you can attend hands-on workshops that will help you overcome the barriers of making open source contributions. Learn about the Open Source community and get familiar with the tools to contribute, build and maintain open source projects. Speakers will relate the session topics to their own experiences as contributors and maintainers in the OSS community.

<h3 align="center">This Year's Hands on Workshops</h3> <br> 

<style type="text/css">
* {
  box-sizing: border-box;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: white;
}

.time-column {
  float: left;
  width: 25%;
  padding: 0 10px;
}
.workshop-column {
  float: left;
  width: 75%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.section-wrapper {
    padding : 100px 0;
    }

</style>
<body>
{% for workshop in site.data.workshops %}
<div class="row">
  <div class="time-column">
    <h2>{{ workshop.begin }} - {{ workshop.end }}</h2>
  </div>
  <div class="workshop-column">
    <div class="card">
      <h2>{{ workshop.title }} - {{ workshop.speaker }}</h2>
      <p>{{ workshop.description | markdownify }}</p>
    </div>
  </div>
</div>
{% endfor %}
</body>
