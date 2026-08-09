---
title: Setting Up Web Sign-In on Your Custom Domain: A Step-by-Step Guide
source: https://indieweb.org/How_to_set_up_web_sign-in_on_your_own_domain
created: 2026-01-07
description: Learn how to set up web sign-in on your own domain with our comprehensive guide, covering authentication, security, and identity management best practices.
tags:
  - clippings
  - copy
  - single-sign-on
  - web-development
  - authentication
  - security
  - identity-management
  - custom-domain
  - signin-flow
  - oauth-implementation
  - saml-authentication
---

How to setup [web sign-in](https://indieweb.org/web_sign-in "web sign-in") on your own domain.

## Setup Instructions

There are two complementary methods for adding support for web sign-in on your domain.

- [IndieAuth](https://indieweb.org/IndieAuth "IndieAuth") lets you sign in on your own website to verify your domain
- [RelMeAuth](https://indieweb.org/RelMeAuth "RelMeAuth") lets you use bi-directional links to other platforms to verify your domain

### How to setup IndieAuth

A variety of website platforms including WordPress, Known, Drupal, micro.blog, Grav, and others either have built-in support for [IndieAuth](https://indieweb.org/IndieAuth "IndieAuth") or can add it quickly with a plugin or module. If your site can support it you may be able to quickly install, activate, and possibly configure a few settings to enable web sign-in for your website. (If not, try the [RelMeAuth](https://indieweb.org/RelMeAuth "RelMeAuth") method below.)

See [IndieAuth Providers](https://indieweb.org/IndieAuth#IndieAuth_Providers "IndieAuth") for a list of supported platforms and links to those plugins and potential directions.

Once you're set up try [logging in to the indieweb.org wiki](https://sso.indieweb.org/login?url=https%3A%2F%2Findieweb.org%2FMain_Page) after which you can [wikify](https://indieweb.org/wikify "wikify") yourself.

### How to setup RelMeAuth

#### 1. Link to your social profiles from your home page

On your home page, link to your profiles and add the `rel="me"` attribute to the links.

This may look something like the following:

<ul>
  <li><a href="https://github.com/aaronpk" rel="me">@aaronpk on Github</a></li>
  <li><a href="mailto:me@example.com" rel="me">me@example.com</a></li>
  <li><a href="sms:+15035551212" rel="me">(503) 555-1212</a></li>
</ul>

If you want to link to a [Bluesky](https://indieweb.org/Bluesky "Bluesky")/[AT Protocol](https://indieweb.org/AT_Protocol "AT Protocol") profile you must also include `atproto`:

<a href="https://aaronpk.bsky.social" rel="me atproto">aaronpk.bsky.social</a>

If you don't want the links to be visible, you can use link elements in the head of your your homepage instead of visible links:

<link rel="me" href="https://github.com/aaronpk" />

Note that visible links are preferred over invisible data, see [antipattern:invisible metadata](https://indieweb.org/antipattern#invisible_metadata "antipattern") for why.

This wiki uses indielogin.com to authenticate you. See [https://indielogin.com/setup](https://indielogin.com/setup) for a list of which of your services it can use to authenticate you.

#### 2. Link to your home page from each service

You'll need to verify that each service has a link back to your home page. For convenience the "edit profile" links for all the supported services are below. You can add alternate URLs in the bio field of these services.

- [Edit your Github profile](https://github.com/settings/profile)

Logging in via email address and SMS don’t require you to add links anywhere, but instead verify your identity via email or a short code sent to your phone.

#### 3. You're done!

That's it! You're done! Now you can use your domain to sign in to any sites that support [web sign-in](http://microformats.org/wiki/web-sign-in)!

Try [logging in to the indieweb.org wiki](https://sso.indieweb.org/login?url=https%3A%2F%2Findieweb.org%2FMain_Page) after which you can [wikify](https://indieweb.org/wikify "wikify") yourself.

## Known Issues

- 2018-06-03: [RelMeAuth](https://indieweb.org/RelMeAuth "RelMeAuth") using Google+ and Flickr have not worked for a while and were dropped from the recommendations on this page. Since switching the wiki to use [IndieLogin.com](https://indieweb.org/IndieLogin.com "IndieLogin.com"), refer to that site's documentation for the list of supported authentication mechanisms.
- …add specific issues here, along with date and solution

## Why

See [Why web sign-in](https://indieweb.org/Why_web_sign-in "Why web sign-in").

## See Also

- [web-sign-in](https://indieweb.org/web-sign-in "web-sign-in")
- [creator](https://indieweb.org/creator "creator")
- [why](https://indieweb.org/why "why")
- [RelMeAuth](https://indieweb.org/RelMeAuth "RelMeAuth")
- [IndieAuth](https://indieweb.org/IndieAuth "IndieAuth")

[Category](https://indieweb.org/Special:Categories "Special:Categories"): 

- [how](https://indieweb.org/Category:how "Category:how")
