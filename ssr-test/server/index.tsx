import { ChunkExtractor } from '@loadable/server'
import React from 'react'
import path from 'path'
import { renderToString } from 'react-dom/server'
import App from '../src/AppServer'
// This is the stats file generated by webpack loadable plugin
const statsFile = path.join(__dirname, '../dist/loadable-stats.json')
// We create an extractor from the statsFile
const extractor = new ChunkExtractor({ statsFile })
// Wrap your application using "collectChunks"
const jsx = extractor.collectChunks(<App />)
// Render your application
const html = renderToString(jsx)
// You can now collect your script tags
const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
// You can also collect your "preload/prefetch" links
const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
// And you can even collect your style tags (if you use "mini-css-extract-plugin")
const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();

// console.log(html)