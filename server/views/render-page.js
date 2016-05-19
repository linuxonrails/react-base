export default function renderPage(ENV, container, store){

  const state = JSON.stringify( store.getState() )
  const common = (ENV === 'production') ? '<script src="/common.js"></script>' : ''

  return `
  <!doctype html>
	<html lang="utf-8">
  <html>
    <head>
    </head>
    <body>
    <div id="root">${ container }</div>
      <script>window.$REACTBASE_STATE = ${ state }</script>
    ` + common +  `
    <script src="/bundle.js"></script>
    </body>
  </html>
  `
}
