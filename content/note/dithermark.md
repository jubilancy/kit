---
title: "Dithermark FAQ, Troubleshooting & Creator Resources"
description: Get answers to common Dithermark questions, troubleshooting tips, and resources for creators and influencers to enhance their experience with the app.
tags: dithermark, influencer-tools, content-creation, faq, troubleshooting, social-media, creator-resources, app-support, social-media-management, dithermark-app, creator-support, faq-guide
---



- [Dithermark](https://www.dithermark.com/)
- [App](https://app.dithermark.com/)
- [FAQ](https://www.dithermark.com/faq)
- [Resources](https://www.dithermark.com/resources)

# FAQ

This page is for general information about Dithermark, how to use it, and general troubleshooting tips. For source code documentation, please see the [Dithermark GitHub page.](https://github.com/allen-garvey/dithermark/)

- [Why create Dithermark?](https://www.dithermark.com/faq/#why-create-dithermark)
- [What are the system requirements?](https://www.dithermark.com/faq/#system-requirements)
- [What is your privacy policy?](https://www.dithermark.com/faq/#privacy)
- [Is Dithermark open source?](https://www.dithermark.com/faq/#open-source)
- [Are there any restrictions on how I can use the output?](https://www.dithermark.com/faq/#copyright)
- [I think I've found a bug, what should I do?](https://www.dithermark.com/faq/#bugs)
- [Where do the random images come from?](https://www.dithermark.com/faq/#random-images)
- [Why does my browser crash when opening an image?](https://www.dithermark.com/faq/#opening-large-images)
- [Why does opening an image from a URL not work?](https://www.dithermark.com/faq/#opening-image-url)
- [Does Dithermark support batch conversion or expot of images?](https://www.dithermark.com/faq/#batch-export)
- [Does Dithermark support video?](https://www.dithermark.com/faq/#video)
- [Should I enable WebGL?](https://www.dithermark.com/faq/#webgl)
- [Why are there artifacts in the random dithers?](https://www.dithermark.com/faq/#random-dither-artifacts)
- [Why do the colors of semi-transparent pixels look weird?](https://www.dithermark.com/faq/#semi-transparent-pixels)
- [Why are there more or different colors in the exported image than in my palette?](https://www.dithermark.com/faq/#too-many-colors)
- [What happened to my saved settings/palettes?](https://www.dithermark.com/faq/#saved-settings-missing)
- [Why only 18 colors?](https://www.dithermark.com/faq/#color-count)
- [What file type should I use when exporting an image?](https://www.dithermark.com/faq/#export-file-types)
- [Where can I learn more about dithering or color quantization?](https://www.dithermark.com/faq/#learn-more)

Why create Dithermark?

Dithermark was originally inspired by [Tanner Helland’s excellent introduction to image dithering.](http://www.tannerhelland.com/4660/dithering-eleven-algorithms-source-code/) While it was easy to find example images for different dithering algorithms, there were very few, if any applications that let you interactively compare them using your own photos. After an initial MVP and many visits from the feature creature, Dithermark was born.

What are the system requirements?

If you have a version of either Google Chrome, Mozilla Firefox, Apple Safari or Microsoft Edge release in the second half of 2017 or later, you are most likely good to go. More specifically, Dithermark has been tested to work with at least Chrome 63, Firefox 59, Safari 11.1 and Edge 16, though older versions might work as well. For absolute best experience, a laptop or desktop computer with Google Chrome or Mozilla Firefox is recommended.

What is your privacy policy?

We are committed to your privacy, which is why there is no tracking, cookies, telemetry or ads. No user data is stored or sent to our servers and everything that is saved is saved locally in your browser. Any images you open from your device remain private and are not sent to our servers. Once the page fully loads no additional web requests are made, the only exceptions being when you open images from the web. When opening an image from a URL, a normal web request is made, the same as if you opened the image url in your browser. When opening a random image, in accordance with [Unsplash’s API Guidelines](https://medium.com/unsplash/unsplash-api-guidelines-28e0216e6daa) a request is sent to Unsplash for the image and when you export it a network request is sent to Unsplash to let them know you downloaded it. This request does not contain any identifying information about you or how you have modified the photo, as it only sends the photo id so the photographer can get credit. Dithermark is open source, so if you are excessively concerned about your privacy you can audit the source code or host it locally.

Is Dithermark open source?

Yes! Dithermark is open source and released under the MIT license. You can get the source code at the [Dithermark GitHub page.](https://github.com/allen-garvey/dithermark/)

Are there any restrictions on how I can use the output?

No, you are free to use the output of Dithermark in any way you see fit, with no restrictions. Be aware that if that you use images in which you don’t own the copyright as the input to Dithermark, the resulting output may still belong to the original copyright holder, so if you plan to do this research your country’s copyright laws first.

I think I’ve found a bug, what should I do?

First, read through this FAQ and see if it addresses your problem (particularly that you meet the minimum system requirements). If nothing helps, please open an issue on our [GitHub issues page.](https://github.com/allen-garvey/dithermark/issues) Please make sure to include your operating system, operating system version, web browser and web browser version in your issue. While we appreciate you taking the time to help improve Dithermark, please be aware that the project is a free resource maintained by a single person, so it might be some time before your issue is addressed.

Where do the random images come from?

The random images are generously provided by [Unsplash,](https://unsplash.com/?utm_source=dithermark&utm_medium=referral) courtesy of their [free photo API.](https://unsplash.com/developers)

Why does my browser crash when opening an image?

Opening very large images on mobile devices has been found to crash the browser. Make sure the ‘Shrink large images’ option is checked in the ‘settings’ tab. If this still does not help, try opening a smaller image, such as by selected ‘Random image’ from the ‘open’ tab, and then pixelate the image by selecting the option in the ‘image’ tab (this has the same effect as shrinking the image). Now try reopening the image that caused your browser to crash.

Why does opening an image from a URL not work?

If the web server for a website has not enabled [CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) your browser will not let you open the image for security reasons. In that case, you should try downloading the image to your device and opening it from there.

Does Dithermark support batch conversion or expot of images?

Yes (note this not available on iOS or in the desktop versions, due to the browser requiring permission before each individual image is saved). To use it, first open an image, and make sure all the dithering and export settings are to your liking. In the open tab, you will see new button that says "Batch convert image files". Click the button and select multiple image files in the file picker. Your browser may ask if you want to enable multiple downloads, if that happens answer yes. All the images you selected will then be processed and exported with the same settings.

Does Dithermark support video?

Dithermark does not directly support video dithering, however you can use a tool such as [FFmpeg](https://ffmpeg.org/) to convert a video to still images, use the Dithermark batch converter as described above to dither the images, and then use FFmpeg to to convert the images back to video. [Here is an example of what that might look like, using a video framerate of 6 fps.](https://www.youtube.com/watch?v=24jL0av_ve8) Note when using Dithermark’s batch export function, you most likely will want to disable shrinking large images in the settings tab, and choose upsampled in the export tab if you have pixelated the image, as otherwise your exported images will be a smaller than the input image.  
  
As an example of what FFmpeg commands to use, `ffmpeg -i your-video.mp4 -vf fps=24 ./output-directory/%04d.jpg` converts a video to images at 24 fps. After dithering those images, you can convert the images back to video using the following FFmpeg command (note this assumes you exported the images from Dithermark as pngs, and placed them all in the same folder together. Image names must be a sequence of numbers, if you have saved duplicates your operating system might alter the filename which will cause the command to not work correctly) `ffmpeg -framerate 24 -f image2 -i ./%4d.png out.mp4`

Should I enable WebGL?

WebGL is enabled by default as it leverages the power of your GPU to complete tasks 30-100 times faster. Dithermark uses WebGL (when enabled) for everything except the error propogation dithers and optimize palette functionality. The only times when it might be advisable to disable WebGL is if you are noticing a large amount of artifacts in the random dithers, or you are opening images that are too large to fit in a single WebGL texture unit (you will see a warning if this is the case). If you do not see an option to enable WebGL, that means your device/browser doesn’t support it. In that case all the dithering and color quantization features will still work though some of the image filters will be disabled.

Why are there artifacts in the random dithers?

The random dithers require random numbers, however without expensive, specialized hardware computers can only generate pseudo-random numbers. When using WebGL, the random numbers are even less random than usual since WebGL lacks a native random function, and so randomness is simulated using the sin() function. If you are seeing artifacts, the best solution is to re-run the dither by changing a parameter and changing it back. If you are seeing an excessive number of artifacts that are not fixed by this process [you might want to consider disabling WebGL.](https://www.dithermark.com/faq/#webgl)

Why do the colors of semi-transparent pixels look weird?

Fully opaque and fully transparent pixels should always look correct, however for browser that don’t support the WebGL premultipliedAlpha attribute, semi-transparent pixels can be rendered in weird colors. One workaround is to to disable WebGL in the settings tab or to use Google Chrome as your web browser. Alternatively, you can open the image in your image editor of choice and make all pixels either fully opaque or fully transparent. For example, to do this in [GIMP](https://www.gimp.org/) you would open the image and then choose Layer→ Transparency→ Threshold Alpha.

Why are there more or different colors in the exported image than in my palette?

If you use the post-dither filters or the outline filter, the colors of your dithered image can be altered, or more colors can be added. This is because using these filters is similar to exporting your dithered image and performing additional processing in an image editing program such as GIMP or Photoshop.

What happened to my saved settings/palettes?

Dithermark saves your settings and palettes locally in your browser using the [browser localStorage API.](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) That means if you clear your browser cache, your settings and palettes will be deleted as well. Also, if you open an incognito tab or change browsers, you will not be able to access your saved settings or palettes.

Why only 18 colors?

While the color limit is one sense arbitrary, it does have technical, artistic and user experience justifications. From a technical perspective, increasing the color limit decreases performance, as the the dithering algorithms and some of the color quantization algorithms get slower the larger the output palette is. From an artistic standpoint, it is generally easier (especially for beginners) to create interesting images with a limited color palette. From a user experience perspective, it gets increasingly more difficult to manually edit palette colors as the palette size increases, particularly on mobile. Nevertheless, Dithermark is open source, so if you would like to increase the color palette you can edit the code yourself, and the project provides documentation on how to do this.

What file type should I use when exporting an image?

It is recommended you use the png file type when exporting your images, as it avoids [undesirable compression artifacts.](https://en.wikipedia.org/wiki/Pixel_art#Saving_and_compression) However, in certain situations (such as when exporting a large, unpixelated image or using post dither image filters), exporting as a jpeg may result in a smaller file in exchange for a negligible loss in quality.

Where can I learn more about dithering or color quantization?

[The resources page](https://www.dithermark.com/resources) contains links where you can learn more about image dithering, color quantization and other related topics.
