import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    
    const filepath = fileData?.filepath
    const rawUrl = filepath 
      ? `https://raw.githubusercontent.com/jubilancy/kit/v4/${encodeURIComponent(filepath)}`
      : null
    const filename = filepath ? filepath.split("/").pop() : undefined

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
          {rawUrl ? (
            <>
              {" "} | <a href={rawUrl} download={filename} target="_blank" rel="noopener noreferrer">Raw</a>
            </>
          ) : (
            <span style="color: red; font-size: 10px;"> [DEBUG: fileData undefined]</span>
          )}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }
  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
