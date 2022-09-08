---
title: "Agenda"
permalink: /agenda/
layout: splash
classes: wide
---
<p style="font-size:16px;">You can contribute to projects and attend workshops in parallel 🚀</p>
<link rel="stylesheet" href="{{ '/assets/css/agenda.css' | relative_url }}">
<script src="{{ '/assets/js/agenda.js' | relative_url }}"></script>

<div id="filters">
  <button id="button-all" class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button id="button-workshops" class="btn" onclick="filterSelection('workshops')"> Workshops</button>
</div>

<div id="all" style="display: none;">
    <table id="agenda-all" class="agenda-col">
        <thead>
            <tr>
                <th colspan="12">
                    <h3>Day at a glance</h3>
                    <p>All times are in U.S. Pacific</p>
                </th>
            </tr>
        </thead>
        <tbody>
            {% for timeslots in site.data.agenda %}
                {% if timeslots.events %}
                    <tr>
                        <td style="background: white">{{timeslots.slot}}</td>
                        {% for event in timeslots.events %}
                            <td colspan={{event.colspan | default: 1}} rowspan={{event.rowspan | default: 1}} style="background: {{event.background-color | default: 'white'}}; padding: 25px 25px 25px 25px; border-top: 1px solid black;">
                                <span class="e">{{event.emoji}}</span>
                                 {% if event.url %}
                                   <a href="{{event.url}}">{{ event.name }}</a>
                                 {% else %}
                                 {{ event.name }}
                                 {% endif %}
                            </td>
                        {% endfor %}
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</div>

<div id="all-mini" style="display: none;">
    <table id="agenda-all" class="agenda-col">
        <thead>
            <tr>
                <th colspan="4">
                    <h3>Day at a glance</h3>
                    <p>All times are in U.S. Pacific</p>
                </th>
            </tr>
        </thead>
        <tbody>
            {% for timeslots in site.data.agenda-mini %}
                    <tr>
                        <td colspan={{timeslots.colspan | default: 1}} rowspan={{timeslots.rowspan | default: 1}} style="background: white; padding: 25px 25px 25px 25px;">{{timeslots.slot}}</td>
                        {% if timeslots.events %}
                        {% for event in timeslots.events %}
                            <td colspan={{event.colspan | default: 1}} rowspan={{event.rowspan | default: 1}} style="background: {{event.background-color | default: 'white'}}; padding: 25px 25px 25px 25px; border-top: 1px solid black;">
                                <span class="e">{{event.emoji}}</span>
                                 {% if event.url %}
                                   <a href="{{event.url}}">{{ event.name }}</a>
                                 {% else %}
                                 {{ event.name }}
                                 {% endif %}
                            </td>
                        {% endfor %}
                        {% endif %}
                    </tr>
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
                    <p>**Workshops will not be recorded**</p>
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

<div id="workshops-mini" style="display: none;">
    <table id="agenda-all" class="agenda-col">
        <thead>
            <tr>
                <th colspan="4">
                    <h3>Workshop Schedule</h3>
                    <p>Each workshop is 1 hour</p>
                </th>
            </tr>
        </thead>
        <tbody>
            {% for timeslots in site.data.workshop-mini %}
                    <tr>
                        <td colspan={{timeslots.colspan | default: 1}} rowspan={{timeslots.rowspan | default: 1}} style="background: white; padding: 25px 25px 25px 25px;">{{timeslots.slot}}</td>
                        {% if timeslots.events %}
                        {% for event in timeslots.events %}
                            <td colspan={{event.colspan | default: 1}} rowspan={{event.rowspan | default: 1}} style="background: {{event.background-color | default: 'white'}}; padding: 25px 25px 25px 25px; border-top: 1px solid black;">
                                <span class="e">{{event.emoji}}</span>
                                 {% if event.url %}
                                   <a href="{{event.url}}">{{ event.name }}</a>
                                 {% else %}
                                 {{ event.name }}
                                 {% endif %}
                            </td>
                        {% endfor %}
                        {% endif %}
                    </tr>
            {% endfor %}
        </tbody>
    </table>
</div>