---
title: "Agenda"
permalink: /agenda/
classes: wide
---
You can contribute to projects and attend workshops in parallel 🚀
<link rel="stylesheet" href="/assets/css/agenda.css">
<div id="agenda_schedule">
    <table id="agenda-all" class="agenda-col">
        <thead>
            <tr>
                <th colspan="4">
                    <h3>Day at a glance</h3>
                </th>
            </tr>
        </thead>
        <tbody>
            {% for timeslots in site.data.agenda %}
                {% if timeslots.events %}
                    <tr>
                        <td>{{timeslots.slot}}</td>
                        {% for event in timeslots.events %}
                            <td colspan={{event.colspan | default: 1}}>
                                <span class="e">{{event.emoji}}</span> {{ event.name }}
                                 {% for link in event.links %}
                                    <div>
                                        <a href="{{link.url}}">{{link.text}}</a>
                                    </div>
                                 {% endfor %}
                            </td>
                        {% endfor %}
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
        <table id="agenda-workshop" class="agenda-col">
        <thead>
            <tr>
                <th colspan="4">
                    <h3>Workshops Schedule</h3>
                    <p><i> Each workshop is 1 hour</i></p>
                </th>
            </tr>
        </thead>
        <tbody>
            {% for timeslots in site.data.agenda %}
                {% if timeslots.workshops %}
                    <tr>
                        <td>{{timeslots.slot}}</td>
                        {% for event in timeslots.workshops %}
                        <td colspan={{event.colspan | default: 1}}><span class="e">{{event.emoji}}</span> {{ event.name }} </td>
                        {% endfor %}
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</div>