export enum AnalyticsEvent {
  MenuItemClick = 'menuItemClick',
}

export type AnalyticsEventData = {
  [AnalyticsEvent.MenuItemClick]: {
    // NOTE: We don't track About and Projects because they are already tracked as page views
    menuItemId: 'github' | 'linkedin' | 'resume' | 'email'
  }
}
