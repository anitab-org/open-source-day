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

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  /* float: left;
  width: 85%; */
  padding: 10px 10px; 
  /* flex: 50%; */
}


/* Remove extra left and right margins, due to padding in columns */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 20px;
  text-align: center;
  background-color: #f1f1f1;
  /* justify-content: space-around; */
  margin-top: 0.2em;
}


/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
.flex-container {
  display: flex;
}
.section-wrapper {
    padding : 100px 0;
    }

</style>
<body>
{% for timeslot in site.data.workshops %}
<div class="flex-container">
  <div class="column">
    {{ timeslot.begin }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - {{ timeslot.end }}
  </div>
  {% for workshop in timeslot.workshops %}
  <div class="column">
    <div class="card">
      <h4 style = "margin-bottom: 2em; margin-top: 1em;">{{ workshop.title }}</h4>
      {% for speaker in workshop.speakers %}
      <div>
        <i class="btn btn-light fa fa-dribbble fa-1x" href="#"> <h4 style="margin-bottom: 0.5em; margin-top: -1em; font-size: 1em;">{{ speaker.name}}</h4> </i>
      </div>
      {% endfor %}
      <p>{{ workshop.description }}</p>
    </div>
  </div>
  {% endfor %}
</div>
{% endfor %}

<br>
<br>
<h2 align="center">Our Speakers</h2> <br> 

{% for timeslot in site.data.speaker_info %}
<div class="flex-container">
  {% for workshop in timeslot.workshops_speaker %}
  <div class="column">
  {% for speaker in workshop.speakers %}
    <div class="card" >
      <div class="row">
          <img src="/assets/images/speakers/{{speaker.picture}}" alt="{{speaker.picture}}" style="width:300px;height:300px;">
          <h3>{{ speaker.name }}</h3> 
          <p>{{ speaker.bio }}</p>
      </div>
    </div> 
  {% endfor %}
  </div>
  {% endfor %}
</div>
{% endfor %}

</body>
