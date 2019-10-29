---
layout: post
title: "The K Type by Input Club"
description: "Introducing the new keyboard by Input Club, the K Type."
category: 
tags: [K Type, keyboard, Input Club, KLL, News,]
---
This is a semi press release from Input Club, but I was asked to get the word out. I believe this group is valuable to the community and could have good things to offer in the future. 
## Who are Input Club?
To those who don't know, Input Club are the team behind the Infinity and the Infinity ErgoDox. Two keyboards that have successfully run on massdrop. These two keyboards are also accompanied with the KLL (keyboard layout languague) which is designed as a universal keyboard firmware. However, the KLL is actually more of an operating system. To fully understand the capabilities of KLL I suggest reading the [spec](https://www.overleaf.com/read/zzqbdwqjfwwf) as it is a bit more involved than you would think.  
Overall I find the core of the input club to be relevant to the communities interests. They are creating open source hardware and their own firmware to create keyboards that have many use cases.

# The K Type 
![]({{ site-url }}/assets/ktype/2-5.jpg)
*This is an early render*

**06/10/15 New Renders**
![The K-type](https://i.imgur.com/3bchOJo.jpg)
![side angle K-type](https://i.imgur.com/9v4sliP.jpg)

The new keyboard project from Input Club is the K Type. The following is the official press release from Input Club.

>The K Type will be a stock Ten Keyless keyboard.

>We are also going to include true RGB backlighting behind every key, a USB type C connector, and full programming options. The plate will be aluminium for optimal flex, and all designs will be open-sourced on Github. This will allow after-market manufacturers and hobbyists total flexibility in customization.

>We are still in the planning phase and want to receive feedback from the enthusiast community. We designed the Infinity Keyboard and the Infinity ErgoDox to test our Keyboard Design Process. This process allows Interest Checks to be created for any layout.

>This means that within the world of keyboards, anything is possible.

>We want to make a product that allows the general public to enjoy typing on a keyboard they own. The best keyboard on the market should also be one that is open source and available to everyone.

>The Keyboard Layout Language which powers our keyboards allows infinite layers of layouts for custom use cases. It is in fact a separate operating system, just for the keyboard.

>In practice, we will see custom layers for Photoshop, video editing, programming, and for typing in other languages. People will be able to set their keyboards using our configurator, designed by the legendary Matteo Spinelli.

>We’re excited to begin generating interest for this and we know it’s going to be great. We’ve come a long way since our launch last year, and there are nearly 2000 people who have purchased our keyboards via Massdrop.

>Thank you for supporting us, we know you’ll love what’s coming next.

The major takeaway from this, is the amount of options you will have. KLL gives you full programmability, the design will be open source and it has the best option for backlighting. I was told the source is likely to be released after a successful first round.    
  
Here I conducted a small questioning of Input Club that will hopefully give some more insight into the project and its design choices.

KLL is referred to as an operating system. I asked, **What elevates this from a simple firmware?**

<blockquote class="q">The KLL is a firmware, but it is also a language to describe keyboard input.
First, if you have a deep interest, here is a link to the spec.

<https://www.overleaf.com/read/zzqbdwqjfwwf>

Currently, all keyboards try and approximate keyboard input with a general purpose programming language. This results in a clunky solution that doesn't have much keyboard specific flexibility.

The KLL will transform all keypresses into a series of Triggers and Results. One of the core objectives of the KLL is to allow any Trigger to cause any Result. Both Triggers and Results may be defined by the user using a command prompt or our configurator.

This system means that you can transfer trigger / result mapping over between the Infinity 60% and the Infinity ErgoDox, even though the hardware is very different. This is useful, especially for people that use many keyboards, as they can create one keyboard map and use it on different KLL supported hardware.

There is quite a bit more than this, specifically in the realm of N-Key Rollover, Macros, Analog Control, and Foreign Language Characters but that is more in depth than your question.
</blockquote>
The use of a usb type C is also interesting as it is still not that common. I asked **Does this have any specific benefits over micro?**

<blockquote class="q">

It has incredible benefits when it comes to power delivery. This will allow for very bright LED's as well as open up the door to things such as solenoids and superior daisy-chaining ability.
The solenoids are especially exciting as it will give us more control over the sound and tactile feedback that is emitted when you type.
</blockquote>

**Do you have a price point in mind?**

<blockquote class="q">
With regard to price point, it will likely be more expensive than the Infinity 60% Keyboard, but less expensive than the Infinity ErgoDox. We haven't priced everything out yet, but given what we currently know that is likely a safe range.
</blockquote>

The plate material (aluminium) was chosen specifically by Matt3o as he believes it to be a great plate material. Matt3o is not a part of Input Club, but always seems to be some way involved with everything that happens in keyboards. You will notice that the KLL configurator, the tool that allows you to customise your keymap with a gui was created by Matt3o.

As to where this keyboard will be sold, is still up in the air. Input Club's history has been with massdrop but this is a new project and nothing is set in stone.

That is all the information for now. But I look forward to the future of this keyboard and Input Club in General. Read more at their website.

* [Input Club Website](https://input.club/)
* [Press Release on Input Club Forum](https://input.club/forums/topic/k-type)
* [Input Club Mailing List](https://input.club/email)
* [Input Club Github](https://github.com/kiibohd)
* [KLL Configurator](https://input.club/configurator)

Prototypes will be made available to select keyboard enthusiasts and you must be able to compile, to be considered.

---------------------------------
 <p style="text-align: right" title="Equipped with Hasu's alternative controller">Typed on <font color="#373737">HHKB Pro 2</font></p>
