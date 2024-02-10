import mixpanel from 'mixpanel-browser'

const IS_DEVELOPMENT = import.meta.env.MODE === 'development'

if (!IS_DEVELOPMENT) {
  mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN || '', {
    debug: true,
    track_pageview: true,
    persistence: 'localStorage',
  })
}

export { mixpanel }
