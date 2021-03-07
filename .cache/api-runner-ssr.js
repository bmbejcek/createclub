var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/brett/repos/createclub/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/brett/repos/createclub/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Create More Art Club","short_name":"ArtClub","start_url":"/","display":"standalone","icon":"src/images/icon.gif","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"a973c4b429f2142c1ff559574c4018e4"},
    },{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('/Users/brett/repos/createclub/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-191566630-1","head":true,"anonymize":false,"respectDNT":false,"exclude":["localhost.*"],"siteSpeedSampleRate":100,"cookieDomain":"createmore.art","pageTransitionDelay":0},
    },{
      name: 'gatsby-plugin-fullstory',
      plugin: require('/Users/brett/repos/createclub/node_modules/gatsby-plugin-fullstory/gatsby-ssr'),
      options: {"plugins":[],"fs_org":"R3F68"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
