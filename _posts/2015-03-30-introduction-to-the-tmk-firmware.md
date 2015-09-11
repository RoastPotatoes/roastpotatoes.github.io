---
layout: post
title: "Introduction to the TMK Firmware"
description: "A guide and introduction to get started with the TMK firmware commonly used for custom keyboard projects."
category: 
tags: [ErgoDox, TMK, Firmware, Keyboards, How-To]
keywords: ErgoDox, TMK, Firmware, Mechanical, mechanical, keyboard, keyboards, geekhack, custom, split keybord, ergonomic, split, project, hasu, roastpotatoes, roast, potatoes,
---
Just after I got my head around building the actual firmware I realised that I did not really understand how to customize and utilise the TMK firmware to make use of its unique features. This of course is necessary to do anything interesting at all. Even though there is some quite comprehensive documentation on the firmware, I still found it quite hard to get my head around. In this post I am aiming to make it a little easier to understand. I would just like to make it a little more understandable so more people can use it.  
## Introduction
I do all of my layer editing in `keymap.c`. You can split your keymaps into multiple files but I do not find this helpful. For the purpose of this guide I do everything in `keymap.c`. To edit your general layout is quite simple. When you open `keymap.c` you will see layouts set into the shape of the keyboard of your choosing (depending what directory you are in e.g./keyboard/ergodox, /keyboard/hhkb). Layouts can easily be changed using the keycodes found in the `/common/keycode.h` file found in the TMK firmware. You will notice that you don't need to use the full keycode names in the main keymap. You can omit the `KC_` prefix. However, when creating custom functions you have to use the full name as listed in `the keycode.h` file.
## The Concept of Layers
The first thing you should attempt to understand is the concept of layers. I found this quite incomprehensible at the beginning and I sometimes still find it hard to understand how I should organize my layers and how this affects how they work. But I would like to say now that if you don't understand it is not at all the end of the world. You can easily  learn by experimentation.
The best advice I can give you here is to just not over think it. The layers act like physical layers would work in real life. Higher layers have higher precedence because they cover the one below it.   
One of the common keycodes you should be familiar with is the `TRNS` keycode. This is a transparent key. I think of this just as a hole in the layer. Imagine pressing a `TRNS` key, it will just go through it to the keycode that is underneath it. This key will become useful if you have overlays you want to have over your main layout.   
A usage example is a gaming overlay for a specific game. I use this on my ErgoDox as most games require the usage of space which is on the right section. My gaming layer puts all the necessary keys on the left hand so I only need to use one section.  
Another use may to have a mouse layer that is activated on a momentary layer.  

## The `FN` Keys 
First I shall introduce you to `FN` keys. Do not confuse these with regular "F" keys you would find on many keyboards. `FN` keys are function keys that you define their function. You are only able to define 32 of these, this is a limitation of the firmware.
There is a certain way I recommend laying out your `FN` keys. Firstly all your 'FN' definitions should go under the `static const uint16_t PROGMEM fn_actions[] = {` and before the closing `};`.

Begin the line with the `FN` key number. This way you can keep track on what the `FN` keys number is. 						 
Example:  

	static const uint16_t PROGMEM fn_actions[] = {
		[0] = ACTION_FUNCTION(TEENSY_KEY),        
		[1] = ACTION_LAYER_MOMENTARY(2),           
		[2] = ACTION_LAYER_TAP_TOGGLE(3),		
		[3] = ACTION_MODS_TAP_KEY(MOD_LALT, KC_DEL),
   		[4] = ACTION_LAYER_OFF(3, ON_RELEASE),
		[5] = ACTION_MODS_TAP_KEY(MOD_LCTL, KC_BSPC),
		[6] = ACTION_MODS_ONESHOT(MOD_LSFT),
		[7] = ACTION_DEFAULT_LAYER_SET(0),  			
		[8] = ACTION_DEFAULT_LAYER_SET(1),  				
		[9] = ACTION_LAYER_MOMENTARY(4),  	
		[10] = ACTION_LAYER_TAP_KEY(3, KC_QUOT),
		[11] = ACTION_LAYER_TOGGLE(4)         

	};
   
As you can see the numbers on the left relate to the `FN` key. To implement the first in the list you would use `FN0` in your keymap. The `Fn` keys are in a zero based number system so the first of course starts on "0".  
I recommend keeping `FN0` as it is. The teensy keys is always useful. It allows you to restart the teensy into programming mode. This means you do not have to have access to the button on your teensy so you do not have to remove your case.

## Layer Switching
### Momentary Layer
The first type of layer switch is a momentary switch. This switches to the designated layer when the `FN` key is held down. You define a momentary layer switch like so.  

	[1] = ACTION_LAYER_MOMENTARY(1)

In this example the "1" is the layer that is being switched to. It is always important to remember the numbers that feature in functions are layers do not confuse them with anything else. The numbers that prepend them are only there to indicate and keep track of what key they are. This is just to make life easier. 
### Momentary Switch with Tap Key
This is a useful function to use as it allows you to have the layer switching key practically anywhere on your keyboard without losing functionality. This is because it works the same as a normal key (which you assign) when tapped but a momentary switch when held. Example:

	[10] = ACTION_LAYER_TAP_KEY(3, KC_QUOT),
This is an example taken from my own configuration. When the key is held layer '3' is activated as a momentary layer. In my configuration that is a mouse overlay on the right hand. You can see my full configuration [here.](https://github.com/RoastPotatoes/tmk_keyboard/blob/roast/keyboard/ergodox/keymap.c) When tapped the key still functions as `KC_QUOT` so it does not disrupt typing.
### Momentary Switch with Tap Toggle
This works in a similar vein to the 'Momentary Switch with Tap Key' but the layer can be toggled this time. This is done by pressing the key a number of times (you specify the number of times), this is useful so you do not have to hold down the key to use the keys you have on another layer. Example:

	[2] = ACTION_LAYER_TAP_TOGGLE(3),
This example taken once again from my own configuration enables my mouse layer when held down but also toggles my mouse layer when tapped 3 times. Please note that the three times required to toggle is not defined by the action above but in `config.h` under `TAPPING_TOGGLE`.
### Toggle Layer
A toggle layer is a layer that is activated on press and release. To turn it off you then have to press the same `FN` key again. Example: 
 
	[1] = ACTION_LAYER_TOGGLE(2)
In this example using `FN1` as it is defined would enable layer '2'. It is important to remember you must have the same `FN` key in this case `FN1` on the destination layer. The destination in this example is layer '2'.
### Dual Role Modifiers
Dual role modifiers are created with the use of 'Tap Keys'. These 'Tap Keys' have one function when 'tapped' and another when they are held down. Example:

	[5] = ACTION_MODS_TAP_KEY(MOD_LCTL, KC_BSPC),
This function means when held the key will function as a left control (MOD_LCTL), but when tapped it functions as backspace. In my configuration I use this on the first thumb key on the left hand and it replaces the traditional backspace. So in place of backspace I have `FN5` on my keymap.
### One-Shot Modifiers
Are perhaps slightly useful. They act as normal modifiers when held down. So they don't interrupt normal typing but when tapped they stay on for a specified time. They are called 'One-Shot Modifiers' because you are given time to press a key after releasing the modifier and it will be as if it is still held down. I will try to explain it a bit better in an example:

	[6] = ACTION_MODS_ONESHOT(MOD_LSFT),
This defines `FN6` as left shift but as a one-shot modifier. This means when it is tapped  you can press the `FN6` key once then press an alphanumeric key and for one key press it will be shift modified. This is useful as it can avoid double capitalisation errors such as "MArio" when shift has been held too long. This does not happen with a 'One-Shot Modifier' (shift for this example's purpose) as it is set to only 'shift' the next key press.

## Closing Comments
That is all I will be including in this guide. However, I will cover some additional features in another. This will include features such as macros and using the mouse keys.
It's not that complicated but I just wanted to keep the guides simple without overloading them with information.
