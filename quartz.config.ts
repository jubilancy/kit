import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "╰─ - ̗̀♡ kit",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'umami',
        host: 'https://cloud.umami.is',
        websiteId: '163553f5-45c0-4291-8423-20bdf8cd73d0'
    },
    locale: "en-US",
    baseUrl: "jubilancy.github.io/kit",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Victor Mono",
        body: "Victor Mono",
        code: "Victor Mono",
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
  emitters: [
    Plugin.AliasRedirects(),
    Plugin.ComponentResources(),
    Plugin.ContentPage(),
    Plugin.FolderPage(),
    Plugin.TagPage(),
    Plugin.ContentIndex({
      enableSiteMap: true,
      enableRSS: true,
    }),
    Plugin.Assets(),
    Plugin.Static(),
    Plugin.Favicon(),
    Plugin.NotFoundPage(),
],
  },
}
export default config
