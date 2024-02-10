import { mixpanel } from '.'

type AnalyticsEvent = 'Menu Item Click'

type AnalyticsEventData = {
  ['Menu Item Click']: {
    // NOTE: We don't track About and Projects because they are already tracked as page views
    menuItemId: 'Github' | 'LinkedIn' | 'Resume' | 'Email'
  }
}

export const trackAnalyticsEvent = <T extends AnalyticsEvent>(
  event: T,
  data?: AnalyticsEventData[T],
) => {
  try {
    mixpanel.track(event, data)
  } catch (error) {
    // fail silently
    console.error(error)
  }
}
