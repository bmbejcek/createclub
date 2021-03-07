module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Create More Art Club","short_name":"ArtClub","start_url":"/","display":"standalone","icon":"src/images/icon.gif","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"a973c4b429f2142c1ff559574c4018e4"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-191566630-1","head":true,"anonymize":false,"respectDNT":false,"exclude":["localhost.*"],"siteSpeedSampleRate":100,"cookieDomain":"createmore.art","pageTransitionDelay":0},
    }]
