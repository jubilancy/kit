---
title: Cosmopolitan Software
tags:
  - bios
  - containers
  - darwin
  - efi
  - freebsd
  - libc
  - linux
  - netbsd
  - openbsd
  - polyglot
  - windows
  - zip
---

This server hosts prebuilt [Actually Portable Executables](https://justine.lol/ape.html) for popular open source projects. Each build artifact is a [fat binary](https://justine.lol/cosmo3/) that runs on Linux, MacOS, Windows, FreeBSD, OpenBSD, and NetBSD for both the ARM64 and AMD64 architectures. We call it The Cosmos. You can think of it as a fat Linux distro we built for fun.

In the Cosmos, every program is statically linked and contains a PKZIP central directory where its /usr/share dependencies are embedded. You can think of it as a coalition of individualistic executables, where each program can be separated from the whole and run on other OSes.

## Download

Visit [/pub](https://cosmo.zip/pub/) for downloads.

## Source Code

Most binaries hosted by this service were built automatically using [superconfigure](https://github.com/ahgamut/superconfigure) in which you'll find links to each respective project's source code. You can use these build recipes to compile fat ape binaries yourself. Source tarballs for Cosmopolitan Libc releases are available under [/pub/cosmo](https://cosmo.zip/pub/cosmo/).

## Windows Users

Windows users are encouraged to download artifacts that have version numbers in their filenames, since otherwise we can't guarantee Windows Defender won't report false positives. If that happens, please file a GitHub issue after verifying your malware definitions aren't out of date and it's not an unversioned file.

## Contact Information

The [cosmo.zip](https://cosmo.zip/) service is owned and operated by the [Cosmopolitan Libc](https://github.com/jart/cosmopolitan) authors. Please contact:

Justine Tunney <[jtunney@gmail.com](mailto:jtunney@gmail.com)>

with any questions, comments, or concerns relating to this service
