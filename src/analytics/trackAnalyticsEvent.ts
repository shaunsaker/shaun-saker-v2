import { mixpanel } from '.'

type AnalyticsEvent = 'menuItemClick'

type AnalyticsEventData = {
  menuItemClick: {
    // NOTE: We don't track About and Projects because they are already tracked as page views
    menuItemId: 'github' | 'linkedin' | 'resume' | 'email'
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
