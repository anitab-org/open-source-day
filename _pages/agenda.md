---
title: "Agenda"
permalink: /agenda/
classes: wide
---
You can contribute to projects and attend workshops in parallel 🚀
<link rel="stylesheet" href="{{ '/assets/css/agenda.css' | relative_url }}">
<script src="{{ '/assets/js/agenda.js' | relative_url }}"></script>

<div id="filters">
  <button id="button-all" class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button id="button-workshops" class="btn" onclick="filterSelection('workshops')"> Workshops</button>
</div>

<div id="all">
    <table id="agenda-all" class="agenda-col">
        <thead>
            <tr>
                <th colspan="12">
                    <h3>Day at a glance</h3>
                </th>
            </tr>
        </thead>
        <tbody>
            {% for timeslots in site.data.agenda %}
                {% if timeslots.events %}
                    <tr>
                        <td style="background: white">{{timeslots.slot}}</td>
                        {% for event in timeslots.events %}
                            <td colspan={{event.colspan | default: 1}} rowspan={{event.rowspan | default: 1}} style="background: {{event.background-color | default: 'white'}}; padding: 25px 25px 25px 25px;">
                                <span class="e">{{event.emoji}}</span> {{ event.name }}
                                 {% for link in event.links %}
                                    <div>
                                        <a href="{{link.url | relative_url}}">{{link.text}}</a>
                                    </div>
                                 {% endfor %}
                            </td>
                        {% endfor %}
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</div>

<div id="workshops" style="display: none;">
    <table id="agenda-all" class="agenda-col">
        <thead>
            <tr>
                <th colspan="12">
                    <h3>Workshop Schedule</h3>
                    <p>Each workshop is 1 hour</p>
                </th>
            </tr>
        </thead>
        <tbody>
            {% for timeslots in site.data.agenda %}
                {% if timeslots.workshop %}
                    <tr>
                        <td style="background: white">{{timeslots.slot}}</td>
                        {% for event in timeslots.events %}
                            <td colspan={{event.colspan | default: 1}} rowspan={{event.rowspan | default: 1}} style="background: {{event.background-color | default: 'white'}}; padding: 25px 25px 25px 25px;">
                                <span class="e">{{event.emoji}}</span> {{ event.name }}
                                 {% for link in event.links %}
                                    <div>
                                        <a href="{{link.url | relative_url}}">{{link.text}}</a>
                                    </div>
                                 {% endfor %}
                            </td>
                        {% endfor %}
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</div>