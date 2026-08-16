---
title: Privacy
description: >-
  Network, storage, and analytics behavior for the SideScopes desktop
  application, SideScopes Lab, this website, and GitHub downloads.
lede: >-
  The desktop application is offline. Images opened in the Lab stay in the
  browser. The website uses privacy-preserving aggregate analytics only on the
  production domain.
---

## Desktop application

SideScopes has no network access, account, telemetry, error-reporting service,
or automatic updater. Captured pixels remain on the computer.

The application writes a local preferences file. It writes a diagnostic log
only when recording is requested from the Diagnostics menu or enabled through
its development environment variables. Diagnostic logs can contain window
titles and application names and should be reviewed before sharing.

## SideScopes Lab

The Lab's code and sample images are downloaded from `media.sidescopes.org`
when you choose **Open the Lab**. An image you select from your computer is
decoded and analyzed inside the browser. The file and its pixels are not
uploaded by SideScopes.

The Lab uses browser `localStorage` on `media.sidescopes.org` to retain its
interface preferences and whether the guided tour has been completed. It does
not store the image you loaded. Clearing site data for that origin removes the
saved preferences.

## Website and analytics

The site has no account, advertising, or cross-site tracking. Its pages do not
set an application cookie.

If you select a light or dark reading theme in Learn or Docs, the website
stores that preference in browser `localStorage` on `sidescopes.org`. Choosing
**System** removes the stored value. The preference contains no identifying
information and is not sent to SideScopes.

On `sidescopes.org`, Cloudflare Web Analytics can load after a page view. The
analytics beacon uses no cookies or `localStorage` and does not fingerprint
individual visitors. It reports aggregate page and performance measurements;
Cloudflare states that Web Analytics does not collect or use visitors' personal
data. See Cloudflare's documentation for
[data collection](https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/)
and [Core Web Vitals](https://developers.cloudflare.com/web-analytics/data-metrics/core-web-vitals/).

The analytics script is omitted when any of the following applies:

- the browser sends **Do Not Track**;
- the browser sends **Global Privacy Control**;
- the site is a preview, local development copy, or mirror rather than
  `sidescopes.org`.

Blocking the script does not affect the website or Lab. As with any website,
normal requests still pass through the hosting and content-delivery providers,
which process network metadata needed to deliver and protect the service.

## Downloads and external links

Release downloads and source code are hosted by GitHub. Opening a GitHub link
or downloading a release is subject to
[GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
Links to technical references are operated by their respective publishers.

## Questions

Questions or corrections can be filed in the
[public issue tracker](https://github.com/sidescopes/sidescopes/issues).
