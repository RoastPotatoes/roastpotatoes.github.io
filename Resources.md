---
layout: page
title: "Resources"
description: ""
---


---
## Guides:  
* #### TMK:  

 * [How to build TMK firmware for an ErgoDox]({{site-url}}/2015/03/22/ergodox/)
 * [Introduction to TMK firmware how to use layers]({{site-url}}/2015/03/30/introduction-to-the-tmk-firmware/)
 
* #### Buckling Spring Modifications:

 * [IBM SSK Screw Mod]({{site-url}}/2015/04/28/ibm-ssk-screw-mod-guide/)

## Memrise:

 * [Learn your cherry switches](http://www.memrise.com/course/591463/cherry-switches/)


## Reviews:

 * [POK3R]({{site-url}}/2015/04/29/pok3r-review/)
 * [KatzenKinder 4.0 Keycaps]({{site-url}}/2015/05/06/keycap-spotlight-katzenkinder/)
 * [The PC-TRAC Deluxe +]({{ site-url }}/2015/04/10/the-pc-trac-deluxe/)

{% for post in site.categories.review %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

## Artisan Keycap Roundup:

 * [Roundup 1]({{site-url}}/2015/04/01/artisanal-keycap-roundup-v1/)
 * [Roundup 2]({{site-url}}/2015/05/01/artisanal-keycap-roundup-v2/)

{% for post in site.categories.artisanroundup %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

## Interviews

* [BunnyLake of {{ site.ctrlalt }}]({{site-url}}/2015/05/26/small-interview-with-bunnylake-about-jt-keycaps-and-ctrlalt/)

{% for post in site.categories.interview %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}


