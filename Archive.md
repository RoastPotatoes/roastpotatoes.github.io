---
layout: page
title: "Archive"
description: "All this blogs information and content on mechanical keyboards and input devices."
---

## Guides:  
* #### TMK:  

 * [How to build TMK firmware for an ErgoDox]({{site-url}}/2015/03/22/ergodox/)
 * [Introduction to TMK firmware how to use layers]({{site-url}}/2015/03/30/introduction-to-the-tmk-firmware/)
 
* #### Buckling Spring Modifications:

 * [IBM SSK Screw Mod]({{site-url}}/2015/04/28/ibm-ssk-screw-mod-guide/)

## Memrise:

 * [Learn your cherry switches](http://www.memrise.com/course/591463/cherry-switches/)

<h2>Keycap Spotlight:</h2>

{% for post in site.categories.keycapspotlight %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
## Reviews:

 * [POK3R]({{site-url}}/2015/04/29/pok3r-review/)
 * [KatzenKinder 4.0 Keycaps]({{site-url}}/2015/05/06/keycap-spotlight-katzenkinder/)
 * [The PC-TRAC Deluxe +]({{ site-url }}/2015/04/10/the-pc-trac-deluxe/)

{% for post in site.categories.review %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

## Artisan Keycap Roundup:

{% for post in site.categories.artisanroundup %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

## Interviews

{% for post in site.categories.interview %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}


## Week in Keyboards 

{% for post in site.categories.weekinkeyboards %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
