// Turns the single-file build into an artifact page: the host supplies the
// <!doctype>/<html>/<head>/<body> skeleton, so only their contents are kept.
import { readFileSync, writeFileSync } from 'node:fs'

const src = 'dist-artifact/index.html'
const html = readFileSync(src, 'utf8')
const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? ''
const body = html.match(/<body>([\s\S]*?)<\/body>/)?.[1] ?? ''
if (!head || !body) throw new Error('Could not find <head> or <body> in ' + src)

const keptHead = head
  .replace(/<meta charset[^>]*>\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '')
  // the skeleton has no lang attribute; set it before paint
  .replace('<script>', "<script>document.documentElement.lang = 'az';")

writeFileSync('dist-artifact/artifact.html', keptHead.trim() + '\n' + body.trim() + '\n')
console.log('wrote dist-artifact/artifact.html', Math.round((keptHead.length + body.length) / 1024), 'KB')
