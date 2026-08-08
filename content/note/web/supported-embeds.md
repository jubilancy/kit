---
title: supported embeds
---

# embeds

tinydot automatically embeds videos and media when you paste a URL on its own line.

## how to use

paste a URL on its own line with blank lines before and after:

```markdown
some text here.

https://www.youtube.com/watch?v=dQw4w9WgXcQ

more text here.
```

the URL will automatically become a responsive embedded player.

## supported providers

tinydot supports 300+ providers via the [oembed.com](https://oembed.com/providers.json) standard. popular ones include:

**video**

- YouTube - `https://youtube.com/watch?v=...` or `https://youtu.be/...`
- Vimeo - `https://vimeo.com/...`
- capncap - `https://capncap.com/username/id`
- Loom - `https://www.loom.com/share/...`
- TikTok - `https://www.tiktok.com/@user/video/...`
- Dailymotion - `https://www.dailymotion.com/video/...`

**audio**

- Spotify - `https://open.spotify.com/track/...`
- SoundCloud - `https://soundcloud.com/...`
- Apple Music - `https://music.apple.com/...`

**social**

- Twitter/X - `https://twitter.com/user/status/...`
- Instagram - `https://www.instagram.com/p/...`
- Threads - `https://www.threads.net/@user/post/...`

**design**

- Figma - `https://www.figma.com/file/...`
- CodePen - `https://codepen.io/user/pen/...`
- CodeSandbox - `https://codesandbox.io/s/...`

**documents**

- Google Docs - `https://docs.google.com/document/...`
- Google Sheets - `https://docs.google.com/spreadsheets/...`
- Notion - `https://notion.so/...`

**other**

- GitHub Gist - `https://gist.github.com/...`
- Imgur - `https://imgur.com/...`
- Giphy - `https://giphy.com/gifs/...`

## all providers

|provider|website|url pattern|
|---|---|---|
|23HQ|http://www.23hq.com|http://www.23hq.com/*/photo/*|
|3Q|https://3q.video/|https://playout.3qsdn.com/embed/*|
|Abraia|https://abraia.me|https://store.abraia.me/*|
|Acast|https://embed.acast.com|https://play.acast.com/s/*|
|ActBlue|https://secure.actblue.com|https://secure.actblue.com/donate/*|
|Adilo|https://adilo.bigcommand.com|https://adilo.bigcommand.com/watch/*|
|afreecaTV|https://www.afreecatv.com|https://vod.afreecatv.com/player/|
|Altium LLC|https://altium.com|https://altium.com/viewer/*|
|Altru|https://www.altrulabs.com|https://app.altrulabs.com/*/*?answer_id=*|
|amCharts Live Editor|https://live.amcharts.com/|http://live.amcharts.com/*|
|Amtraker|https://amtraker.com|https://amtraker.com/trains/*|
|Animatron|https://www.animatron.com/|https://www.animatron.com/project/*|
|Animoto|http://animoto.com/|http://animoto.com/play/*|
|AnnieMusic|https://anniemusic.app|https://anniemusic.app/t/*|
|AppForceStudio|https://appforcestudio.com|https://appforcestudio.com/playground/*|
|ArcGIS StoryMaps|https://storymaps.arcgis.com|https://storymaps.arcgis.com/stories/*|
|Archivos|https://app.archivos.digital|https://app.archivos.digital/app/view/*|
|AssemblrWorld|https://assemblrworld.com/|http://*.studio.assemblrworld.com/creation/*|
|audio.com|https://audio.com/|https://audio.com/*|
|Audioboom|https://audioboom.com|https://audioboom.com/channels/*|
|AudioClip|https://audioclip.naver.com|https://audioclip.naver.com/channels/*/clips/*|
|Audiomack|https://audiomack.com|https://audiomack.com/*/song/*|
|Audiomeans|https://audiomeans.fr|https://podcasts.audiomeans.fr/*|
|Audius|https://audius.co|https://audius.co/*|
|Backtracks|https://backtracks.fm|https://backtracks.fm/*/*/e/*|
|Balsamiq Cloud|https://balsamiq.cloud/|https://balsamiq.cloud/*|
|Beams.fm|http://beams.fm|https://beams.fm/*|
|Beautiful.AI|https://www.beautiful.ai/|https://www.beautiful.ai/|
|Behance|https://www.behance.net|https://www.behance.net/gallery/*/*|
|Beta QuellenSuche|http://beta.quellensuche.de|http://beta.quellensuche.de/*|
|biqnetwork|https://biqapp.com/|https://cloud.biqapp.com/*|
|Bitchute|https://bitchute.com/|https://bitchute.com/|
|Blackfire.io|https://blackfire.io|https://blackfire.io/profiles/*/graph|
|Blogcast|https://blogcast.host/|https://blogcast.host/embed/*|
|Bluesky Social|https://bsky.app|https://bsky.app/profile/*/post/*|
|Bookingmood|https://www.bookingmood.com|https://www.bookingmood.com/embed/*/*|
|Bornetube|https://www.bornetube.dk/|https://www.bornetube.dk/media/*|
|Box Office Buz|https://boxofficebuz.com|https://boxofficebuz.com/embed/video/*|
|BrioVR|https://view.briovr.com/|https://view.briovr.com/api/v1/worlds/oembed/*|
|Bumper|http://www.bumper.com|https://www.bumper.com/oembed/bumper|
|Bunny|https://bunny.net/|https://iframe.mediadelivery.net/*|
|Buttondown|https://buttondown.email/|https://buttondown.email/*|
|Byzart Project|https://cmc.byzart.eu|https://cmc.byzart.eu/files/*|
|Cacoo|https://cacoo.com|https://cacoo.com/diagrams/*|
|Canva|https://www.canva.com|https://www.canva.com/design/*/view|
|capncap|https://capncap.com|https://capncap.com/*/*|
|Carbon|https://carbon.music/|https://carbon.music/*|
|Cardinal Blue|https://minesweeper.today/|http://minesweeper.today/*|
|castmake|https://www.castmake-ai.com|https://www.castmake-ai.com/c/*/episodes/*|
|CatBoat|http://img.catbo.at/|http://img.catbo.at/*|
|Celero|https://www.celero.io|https://embeds.celero.io/*|
|Ceros|http://www.ceros.com/|http://view.ceros.com/*|
|Chainflix|https://chainflix.net|https://chainflix.net/video/*|
|ChartBlocks|http://www.chartblocks.com/|http://public.chartblocks.com/c/*|
|chirbit.com|http://www.chirbit.com/|http://chirb.it/*|
|CHROCO|https://chroco.ooo/|https://chroco.ooo/mypage/*|
|CircuitLab|https://www.circuitlab.com/|https://www.circuitlab.com/circuit/*|
|Clipland|http://www.clipland.com/|http://www.clipland.com/v/*|
|Clueso|https://clueso.io|https://clueso.site/*|
|Clyp|http://clyp.it/|http://clyp.it/*|
|CoCo Corp|https://ilovecoco.video|https://app.ilovecoco.video/*/embed|
|CodeHS|http://www.codehs.com|https://codehs.com/editor/share_abacus/*|
|CodePen|https://codepen.io|http://codepen.io/*|
|Codepoints|https://codepoints.net|http://codepoints.net/*|
|CodeSandbox|https://codesandbox.io|https://codesandbox.io/s/*|
|CollegeHumor|http://www.collegehumor.com/|http://www.collegehumor.com/video/*|
|Commaful|https://commaful.com|https://commaful.com/play/*|
|Coub|http://coub.com/|http://coub.com/view/*|
|Crowd Ranking|http://crowdranking.com|http://crowdranking.com/*/*|
|Crumb.sh|https://crumb.sh|https://crumb.sh/*|
|Cueup DJ Booking|https://cueup.io|https://cueup.io/user/*/sounds/*|
|Curated|https://curated.co/|https://*.curated.co/*|
|CustomerDB|http://customerdb.com/|https://app.customerdb.com/share/*|
|dadan|https://www.dadan.io|https://app.dadan.io/*|
|Dailymotion|https://www.dailymotion.com|https://www.dailymotion.com/video/*|
|DALEXNI|https://dalexni.com/|https://dalexni.com/i/*|
|Datawrapper|http://www.datawrapper.de|https://datawrapper.dwcdn.net/*|
|Deseret News|https://www.deseret.com|https://*.deseret.com/*|
|Deviantart.com|http://www.deviantart.com|http://*.deviantart.com/art/*|
|Digiteka|https://www.ultimedia.com/|https://www.ultimedia.com/central/video/edit/id/*/topic_id/*/|
|DocDroid|https://www.docdroid.net/|https://*.docdroid.net/*|
|Docswell|https://docswell.com|http://docswell.com/s/*/*|
|Dotsub|http://dotsub.com/|http://dotsub.com/view/*|
|Dream Broker|https://dreambroker.com|https://www.dreambroker.com/channel/*/*|
|DTube|https://d.tube/|https://d.tube/v/*|
|EchoesHQ|https://echoeshq.com|http://app.echoeshq.com/embed/*|
|eduMedia|https://www.edumedia-sciences.com/|https://www.edumedia-sciences.com/|
|EgliseInfo|http://egliseinfo.catholique.fr/|http://egliseinfo.catholique.fr/*|
|ElevenLabs|https://elevenlabs.io/|https://elevenlabs.io/*|
|Embedery|https://embedery.com/|https://embedery.com/widget/*|
|Ethfiddle|https://www.ethfiddle.com/|https://ethfiddle.com/*|
|EventLive|https://eventlive.pro|https://evt.live/*|
|everviz|https://everviz.com|https://app.everviz.com/embed/*|
|Everwall|https://everwall.com|https://cdn.everwall.com/hubs/iframe/*|
|Ex.Co|https://ex.co|https://app.ex.co/stories/*|
|Eyrie|https://eyrie.io/|https://eyrie.io/board/*|
|Facebook|https://www.facebook.com/|https://www.facebook.com/*/posts/*|
|Fader|https://app.getfader.com|https://app.getfader.com/projects/*/publish|
|Faithlife TV|https://faithlifetv.com|https://faithlifetv.com/items/*|
|Figma|https://www.figma.com|https://www.figma.com/file/*|
|Filestage|https://filestage.io/|https://app.filestage.io/step/**|
|Firework|https://fireworktv.com/|https://*.fireworktv.com/*|
|FITE|https://www.fite.tv/|https://www.fite.tv/watch/*|
|Flat|https://flat.io|https://flat.io/score/*|
|Flickr|https://www.flickr.com/|http://*.flickr.com/photos/*|
|Flourish|https://flourish.studio/|https://public.flourish.studio/visualisation/*|
|FlowHubOrg|https://flows.flowhub.org|https://flowhub.org/f/*|
|Fooday|https://fooday.app|https://fooday.app/*/reviews/*|
|Form-Data|https://form-data.com|https://forms.form-data.com/*|
|FOX SPORTS Australia|http://www.foxsports.com.au|http://fiso.foxsports.com.au/isomorphic-widget/*|
|Framatube|https://framatube.org/|https://framatube.org/w/*|
|FrameBuzz|https://framebuzz.com/|http://framebuzz.com/v/*|
|Framer|https://www.framer.com|https://framer.com/share/*|
|Geograph Britain and Ireland|https://www.geograph.org.uk/|http://*.geograph.org.uk/*|
|Geograph Channel Islands|http://channel-islands.geograph.org/|http://*.geograph.org.gg/*|
|Geograph Germany|http://geo-en.hlipp.de/|http://geo-en.hlipp.de/*|
|Getty Images|http://www.gettyimages.com/|http://gty.im/*|
|Gifnote|https://www.gifnote.com/|https://www.gifnote.com/play/*|
|GIPHY|https://giphy.com|https://giphy.com/gifs/*|
|GloriaTV|https://gloria.tv/|https://gloria.tv/|
|GMetri|https://www.gmetri.com/|https://view.gmetri.com/*|
|Gong|https://www.gong.io/|https://app.gong.io/call?id=*|
|GOOD FOR JOB|https://www.good-for-job.jp|https://www.good-for-job.jp/slides/*|
|Grain|https://grain.com|https://grain.co/highlight/*|
|GT Channel|https://gtchannel.com|https://gtchannel.com/watch/*|
|Gumlet|https://www.gumlet.com/|https://gumlet.tv/watch/*|
|GW2 Fashions|https://gw2fashions.com/|https://gw2fashions.com/fashion/*|
|Gyazo|https://gyazo.com|https://gyazo.com/*|
|HASH|https://hash.ai|https://core.hash.ai/@*|
|hearthis.at|https://hearthis.at/|https://hearthis.at/*/*/|
|helenenglish_education|https://helenenglish.education/|https://helenenglish.education/widget*|
|Heyzine|https://heyzine.com|https://heyzine.com/flip-book/*|
|hihaho|https://www.hihaho.com|https://player.hihaho.com/*|
|HippoVideo|https://hippovideo.io|http://*.hippovideo.io/*|
|Homey|https://homey.app|https://homey.app/f/*|
|Hopvue|https://www.hopvue.com|https://*.hopvue.com/*|
|HuffDuffer|http://huffduffer.com|http://huffduffer.com/*/*|
|Hulu|http://www.hulu.com/|http://www.hulu.com/watch/*|
|Icosa Gallery|https://icosa.gallery|https://icosa.gallery/view/*|
|Ideamapper|https://ideamapper.com/|https://oembed.ideamapper.com/*|
|Idomoo|https://idomoo.com/|https://*.idomoo.com/*|
|iFixit|http://www.iFixit.com|http://www.ifixit.com/Guide/View/*|
|IFTTT|http://www.ifttt.com/|http://ifttt.com/recipes/*|
|Ignite|https://ignite.video/|https://*.videocdn.net/player/*|
|iHeartRadio|https://www.iheart.com|https://www.iheart.com/podcast/*/*|
|iMenuPro|https://imenupro.com|http://qr.imenupro.com/*|
|Incredible|https://incredible.dev|https://incredible.dev/watch/*|
|Indaco|https://player.indacolive.com/|https://player.indacolive.com/player/jwp/clients/*|
|Infogram|https://infogram.com/|https://infogram.com/*|
|Infoveave|https://infoveave.net/|https://*.infoveave.net/E/*|
|Injurymap|https://www.injurymap.com/|https://www.injurymap.com/exercises/*|
|Inoreader|https://www.inoreader.com|https://www.inoreader.com/oembed/|
|inphood|http://inphood.com/|http://*.inphood.com/*|
|Insight Timer|https://insighttimer.com/|https://insighttimer.com/*|
|Instagram|https://instagram.com|http://instagram.com/*/p/*|
|Insticator Inc|https://www.insticator.com/|https://ppa.insticator.com/embed-unit/*|
|Issuu|https://issuu.com/|https://issuu.com/*/docs/*|
|Itabtech infosys|https://samay.itabtechinfosys.com/|https://samay.itabtechinfosys.com/*|
|itemis CREATE|https://play.itemis.io|https://play.itemis.io/*|
|Jovian|https://jovian.com/|https://jovian.ml/*|
|Juntos|https://juntos.live|https://play.juntos.live/solo/*|
|KakaoTv|https://tv.kakao.com/|https://tv.kakao.com/channel/*/cliplink/*|
|Kickstarter|http://www.kickstarter.com|http://www.kickstarter.com/projects/*|
|Kidoju|https://www.kidoju.com/|https://www.kidoju.com/en/x/*/*|
|Kirim.Email|https://kirim.email/|https://halaman.email/form/*|
|Kit|https://kit.co/|http://kit.co/*/*|
|Kitchenbowl|http://www.kitchenbowl.com|http://www.kitchenbowl.com/recipe/*|
|kmdr|https://kmdr.sh|https://app.kmdr.sh/h/*|
|Knacki|http://jdr.knacki.info|http://jdr.knacki.info/meuh/*|
|Knowledge Pad|https://knowledgepad.co/|https://knowledgepad.co/#/knowledge/*|
|Kooapp|https://kooapp.com|https://*.kooapp.com/koo/*|
|Kubit|https://kubit.ai|https://kubit.ai/*|
|Kurozora|https://kurozora.app/|https://kurozora.app/episodes/*|
|LearningApps.org|http://learningapps.org/|http://learningapps.org/*|
|LeMans.Pod|https://umotion-test.univ-lemans.fr/|https://umotion-test.univ-lemans.fr/video/*|
|Lille.Pod|https://pod.univ-lille.fr/|https://pod.univ-lille.fr/video/*|
|Line Place|https://place.line.me|https://place.line.me/businesses/*|
|Linkstackz|https://www.linkstackz.com/|https://linkstackz.com/irf/*|
|Livestream|https://livestream.com/|https://livestream.com/accounts/*/events/*|
|Loom|https://www.loom.com/|https://loom.com/i/*|
|LottieFiles|https://lottiefiles.com/|https://lottiefiles.com/*|
|Ludus|https://ludus.one|https://app.ludus.one/*|
|Lumiere|https://latd.com|https://*.lumiere.is/v/*|
|marimo|https://marimo.io/|https://marimo.app/*|
|MathEmbed|http://mathembed.com|http://mathembed.com/latex?inputText=*|
|Matterport|https://matterport.com/|https://matterport.com/|
|me.me|https://me.me/|https://me.me/i/*|
|Mediastream|https://mdstrm.com/|https://mdstrm.com/embed/*|
|Medienarchiv der Künste - Zürcher Hochschule der Künste|https://medienarchiv.zhdk.ch/|https://medienarchiv.zhdk.ch/entries/*|
|Mermaid Ink|https://mermaid.ink|https://mermaid.ink/img/*|
|Microsoft Stream|https://stream.microsoft.com|https://*.microsoftstream.com/video/*|
|Minerva|https://www.minervaknows.com|https://www.minervaknows.com/featured-recipes/*|
|Miro|https://miro.com/|https://miro.com/app/board/*|
|MixCloud|https://mixcloud.com/|http://www.mixcloud.com/*/*/|
|Mixpanel|https://mixpanel.com/|https://mixpanel.com/*|
|Moby Picture|http://www.mobypicture.com|http://www.mobypicture.com/user/*/view/*|
|Music Box Maniacs|https://musicboxmaniacs.com/|https://musicboxmaniacs.com/explore/melody/*|
|myBeweeg|https://mybeweeg.com|https://mybeweeg.com/w/*|
|MySQL Visual Explain|https://mysqlexplain.com|https://mysqlexplain.com/explain/*|
|Namchey|https://namchey.com|https://namchey.com/embeds/*|
|nanoo.tv|https://www.nanoo.tv/|http://*.nanoo.tv/link/*|
|Nasjonalbiblioteket|https://www.nb.no/|https://www.nb.no/items/*|
|Natural Atlas|https://naturalatlas.com/|https://naturalatlas.com/*|
|Naver Clip|https://m.naver.com/shorts|https://naver.me/*|
|NDLA - Norwegian Digital Learning Arena|https://ndla.no|https://ndla.no/*|
|Nebula|https://nebula.tv|https://nebula.tv/videos/*|
|Nebula Beta|https://beta.nebula.tv|https://beta.nebula.tv/videos/*|
|Needle Cloud|https://cloud.needle.tools|https://cloud.needle.tools/-/assets/*/file|
|neetoRecord|https://neetorecord.com|https://*.neetorecord.com/watch/*|
|nfb.ca|http://www.nfb.ca/|http://*.nfb.ca/film/*|
|NoPaste|https://nopaste.ml|https://nopaste.ml/*|
|Observable|https://observablehq.com|https://observablehq.com/@*/*|
|Odds.com.au|https://www.odds.com.au|https://www.odds.com.au/*|
|Odesli (formerly Songlink)|https://odesli.co|https://song.link/*|
|Odysee|https://odysee.com|https://odysee.com/*/*|
|Official FM|http://official.fm|http://official.fm/tracks/*|
|Omniscope|https://omniscope.me/|https://omniscope.me/*|
|Omny Studio|https://omnystudio.com|https://omny.fm/shows/*|
|Orbitvu|https://orbitvu.co|https://orbitvu.co/001/*/ov3601/view|
|Origits|https://origits.com/|https://origits.com/v/*|
|Outplayed.tv|https://outplayed.tv/|https://outplayed.tv/media/*|
|Overflow|https://overflow.io|https://overflow.io/s/*|
|OZ|https://www.oz.com/|https://www.oz.com/*/video/*|
|Padlet|https://padlet.com/|https://padlet.com/*|
|Panda Video|https://pandavideo.com/|https://*.tv.pandavideo.com.br/embed/?v=*|
|Pastery|https://www.pastery.net|http://pastery.net/*|
|PeerTube.TV|https://peertube.tv/|https://peertube.tv/w/*|
|Picturelfy|https://www.picturelfy.com/|http://www.picturelfy.com/p/*|
|Piggy|https://piggy.to|https://piggy.to/@*/*|
|Pikasso|https://builder.pikasso.xyz|https://*.builder.pikasso.xyz/embed/*|
|PingVP|https://www.pingvp.com/|https://www.pingvp.com/|
|Pinpoll|https://www.pinpoll.com/products/tools|https://tools.pinpoll.com/embed/*|
|Pinterest|https://www.pinterest.com|https://www.pinterest.com/*|
|PitchHub|https://www.pitchhub.com/|https://player.pitchhub.com/en/public/player/*|
|Pixdor|http://www.pixdor.com/|https://store.pixdor.com/place-marker-widget/*/show|
|Plusdocs|http://plusdocs.com|https://app.plusdocs.com/*/snapshots/*|
|Podbean|http://podbean.com|https://*.podbean.com/e/*|
|Poll Daddy|http://polldaddy.com|http://*.polldaddy.com/s/*|
|Portfolium|https://portfolium.com|https://portfolium.com/entry/*|
|Present|https://present.do|https://present.do/decks/*|
|Prezi Video|https://prezi.com/|https://prezi.com/v/*|
|Programmingly.dev|https://programmingly.dev|https://programmingly.dev/snippets/*|
|QTpi|https://qtpi.gg/|https://qtpi.gg/fashion/*|
|Quartr|http://quartr.com|https://quartr.com/*|
|QuellenSuche|http://quellensuche.de|http://quellensuche.de/*|
|Quiz.biz|http://www.quiz.biz/|http://www.quiz.biz/quizz-*.html|
|Quizz.biz|http://www.quizz.biz/|http://www.quizz.biz/quizz-*.html|
|RadioPublic|https://radiopublic.com|https://play.radiopublic.com/*|
|Raindrop|https://raindrop.io|https://raindrop.io/*|
|rcvis|https://www.rcvis.com/|https://www.rcvis.com/v/*|
|Reddit|https://reddit.com/|https://reddit.com/r/*/comments/*/*|
|Redlof-Medien|https://redlof-medien.de|https://redlof-medien.de/*|
|ReleaseWire|http://www.releasewire.com/|http://rwire.com/*|
|Replit|https://replit.com/|https://repl.it/@*/*|
|ReverbNation|https://www.reverbnation.com/|https://www.reverbnation.com/*|
|Roomshare|http://roomshare.jp|http://roomshare.jp/post/*|
|RoosterTeeth|https://roosterteeth.com|https://roosterteeth.com/*|
|Rumble|https://rumble.com/|https://rumble.com/|
|Runkit|https://runkit.com|http://embed.runkit.com/*,|
|Saooti|https://octopus.saooti.com|https://octopus.saooti.com/main/pub/podcast/*|
|Sapo Videos|http://videos.sapo.pt|http://videos.sapo.pt/*|
|Satcat|https://www.satcat.com/|https://www.satcat.com/sats/*|
|Sato Video Player|http://satoplayer.com|https://api.satoplayer.com/players/embed/*|
|sbedit|https://sbedit.net|https://sbedit.net/*|
|Scenes|https://getscenes.com|https://getscenes.com/e/*|
|Screen9|http://www.screen9.com/|https://console.screen9.com/*|
|Screencast.com|http://www.screencast.com/|http://www.screencast.com/*|
|Screenr|http://www.screenr.com/|http://www.screenr.com/*/|
|ScribbleMaps|https://scribblemaps.com|http://www.scribblemaps.com/maps/view/*|
|Scribd|http://www.scribd.com/|http://www.scribd.com/doc/*|
|SendtoNews|http://www.sendtonews.com/|https://embed.sendtonews.com/oembed/*|
|SharedFile|https://shared-file-kappa.vercel.app/file/|https://shared-file-kappa.vercel.app/file/*|
|Shopshare|https://shopshare.tv|https://shopshare.tv/shopboard/*|
|ShortNote|https://www.shortnote.jp/|https://www.shortnote.jp/view/notes/*|
|Shoudio|http://shoudio.com|http://shoudio.com/*|
|Show by Animaker|https://getshow.io/|https://app.getshow.io/iframe/*|
|Show the Way, actionable location info|https://showtheway.io|https://showtheway.io/to/*|
|Simplecast|https://simplecast.com|https://simplecast.com/s/*|
|Sizzle|https://onsizzle.com/|https://onsizzle.com/i/*|
|Sketchfab|http://sketchfab.com|http://sketchfab.com/*models/*|
|Skoletube|https://www.skoletube.dk/|https://www.skoletube.dk/media/*|
|SlideShare|http://www.slideshare.net/|https://www.slideshare.net/*/*|
|SmashNotes|https://smashnotes.com|https://smashnotes.com/p/*|
|Smeme|https://smeme.com|https://open.smeme.com/*|
|Smrthi|https://www.smrthi.com|https://www.smrthi.com/book/*|
|SmugMug|https://www.smugmug.com/|http://*.smugmug.com/*|
|SocialExplorer|https://www.socialexplorer.com/|https://www.socialexplorer.com/*/explore|
|SOOP|https://www.sooplive.co.kr|https://vod.sooplive.co.kr/player/|
|SoundCloud|http://soundcloud.com/|http://soundcloud.com/*|
|SpeakerDeck|https://speakerdeck.com|http://speakerdeck.com/*/*|
|Spotify|https://spotify.com/|https://open.spotify.com/*|
|Spotlightr|https://spotlightr.com|https://*.spotlightr.com/watch/*|
|Spreaker|https://www.spreaker.com/|http://*.spreaker.com/*|
|SproutVideo|https://sproutvideo.com|https://sproutvideo.com/videos/*|
|Spyke|https://spyke.social|http://spyke.social/p/*|
|Stanford Digital Repository|https://purl.stanford.edu/|https://purl.stanford.edu/*|
|Streamable|https://streamable.com/|http://streamable.com/*|
|Streamio|https://www.streamio.com|https://s3m.io/*|
|Subscribi|https://subscribi.io/|https://subscribi.io/api/oembed*|
|Sudomemo|https://www.sudomemo.net/|https://www.sudomemo.net/watch/*|
|Supercut|https://supercut.ai/|https://supercut.ai/share/*|
|Sutori|https://www.sutori.com/|https://www.sutori.com/story/*|
|Sway|https://www.sway.com|https://sway.com/*|
|Sway Office|https://sway.office.com|https://sway.office.com/*|
|Synthesia|https://www.synthesia.io/|https://share.synthesia.io/*|
|Tech Post Cast|https://techpostcast.com|https://techpostcast.com/headline-topic-programs/*|
|TED|https://www.ted.com|http://ted.com/talks/*|
|Tella|https://www.tella.tv/|https://www.tella.tv/video/*|
|The DAM consultants|https://hubspot-media-bridge.thedamconsultants.com/|https://hubspot-media-bridge.thedamconsultants.com/*|
|The New York Times|https://www.nytimes.com|https://www.nytimes.com/svc/oembed|
|They Said So|https://theysaidso.com/|https://theysaidso.com/image/*|
|TickCounter|https://www.tickcounter.com|http://www.tickcounter.com/widget/*|
|TikTok|http://www.tiktok.com/|https://www.tiktok.com/*|
|tksn-me|https://tksn.me|https://tksn.me/*|
|Tonic Audio|https://tonicaudio.com/|https://tonicaudio.com/take/*|
|Toornament|https://www.toornament.com/|https://www.toornament.com/tournaments/*/information|
|Topy|http://www.topy.se/|http://www.topy.se/image/*|
|Totango|https://totango.com|https://app-test.totango.com/*|
|Trackspace|http://trackspace.upitup.com/|http://trackspace.upitup.com/*|
|Trinity Audio|https://trinityaudio.ai|https://trinitymedia.ai/player/*|
|Tumblr|https://www.tumblr.com|https://*.tumblr.com/post/*|
|Tuxx|https://www.tuxx.be/|https://www.tuxx.be/*|
|tvcf|http://tvcf.co.kr|https://play.tvcf.co.kr/*|
|Twinmotion|https://twinmotion.unrealengine.com|https://twinmotion.unrealengine.com/presentation/*|
|Twitter|http://www.twitter.com/|https://twitter.com/*|
|TypeCast|https://typecast.ai|https://play.typecast.ai/s/*|
|Typlog|https://typlog.com|https://typlog.com|
|UAPod|https://uapod.univ-antilles.fr/|https://uapod.univ-antilles.fr/video/*|
|University of Cambridge Map|https://map.cam.ac.uk|https://map.cam.ac.uk/*|
|UnivParis1.Pod|https://mediatheque.univ-paris1.fr/|https://mediatheque.univ-paris1.fr/video/*|
|Upec.Pod|https://pod.u-pec.fr/|https://pod.u-pec.fr/video/*|
|Ustream|http://www.ustream.tv|http://*.ustream.tv/*|
|uStudio, Inc.|https://www.ustudio.com|https://*.ustudio.com/embed/*|
|VeeR VR|http://veer.tv/|http://veer.tv/videos/*|
|VEVO|http://www.vevo.com/|http://www.vevo.com/*|
|Videfit|https://videfit.com/|https://videfit.com/videos/*|
|VidMount|https://vidmount.com/|https://vidmount.com/*|
|Vidyard|https://vidyard.com|http://*.vidyard.com/*|
|Vimeo|https://vimeo.com/|https://vimeo.com/*|
|Viostream|https://www.viostream.com|https://share.viostream.com/*|
|Viously|https://www.viously.com|https://www.viously.com/*/*|
|Vizdom|https://vizdom.dev|https://vizdom.dev/link/*|
|Vizydrop|https://vizydrop.com|https://vizydrop.com/shared/*|
|Vlipsy|https://vlipsy.com/|https://vlipsy.com/*|
|VLIVE|https://www.vlive.tv|https://www.vlive.tv/video/*|
|Vouch|https://www.vouchfor.com/|https://*.vouchfor.com/*|
|VoxSnap|https://voxsnap.com/|https://article.voxsnap.com/*/*|
|Waltrack|https://waltrack/net|https://waltrack.net/product/*|
|Wave.video|https://wave.video|https://watch.wave.video/*|
|Web3 is Going Just Great|https://www.web3isgoinggreat.com/|https://www.web3isgoinggreat.com/?id=*|
|Webcrumbs|https://webcrumbs.org/|https://plugins.webcrumbs.dev/*|
|wecandeo|https://www.wecandeo.com/|https://play.wecandeo.com/video/v/*|
|Whimsical|https://www.whimsical.com|https://whimsical.com/*|
|Wistia, Inc.|https://wistia.com/|https://fast.wistia.com/embed/iframe/*|
|wizer.me|https://www.wizer.me/|https://*.wizer.me/learn/*|
|Wokwi|https://wokwi.com|https://wokwi.com/share/*|
|Wolfram Cloud|https://www.wolframcloud.com|https://*.wolframcloud.com/*|
|WordPress.com|https://wordpress.com/|https://wordpress.com/*|
|X|http://www.x.com/|https://x.com/*|
|YouTube|https://www.youtube.com/|https://*.youtube.com/watch*|
|YUMPU|https://www.yumpu.com/|https://www.yumpu.com/*/document/view/*/*|
|Zeplin|https://zeplin.io|https://app.zeplin.io/project/*/screen/*|
|ZingSoft|https://app.zingsoft.com|https://app.zingsoft.com/embed/*|
|ZnipeTV|https://www.znipe.tv/|https://*.znipe.tv/*|
|Zoomable|https://zoomable.ca/|https://srv2.zoomable.ca/viewer.php*|

## notes

- URL must be on its own line (not inline with other text)
- blank lines before and after are recommended
- if a provider doesn't work, the URL stays as a regular link
- embeds are responsive and fit your content width
