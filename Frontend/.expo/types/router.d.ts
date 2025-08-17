/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/mode`; params?: Router.UnknownInputParams; } | { pathname: `/pitch`; params?: Router.UnknownInputParams; } | { pathname: `/singer`; params?: Router.UnknownInputParams; } | { pathname: `/startsinging`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/songs/[singer]`, params: Router.UnknownInputParams & { singer: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/mode`; params?: Router.UnknownOutputParams; } | { pathname: `/pitch`; params?: Router.UnknownOutputParams; } | { pathname: `/singer`; params?: Router.UnknownOutputParams; } | { pathname: `/startsinging`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/songs/[singer]`, params: Router.UnknownOutputParams & { singer: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/mode${`?${string}` | `#${string}` | ''}` | `/pitch${`?${string}` | `#${string}` | ''}` | `/singer${`?${string}` | `#${string}` | ''}` | `/startsinging${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/mode`; params?: Router.UnknownInputParams; } | { pathname: `/pitch`; params?: Router.UnknownInputParams; } | { pathname: `/singer`; params?: Router.UnknownInputParams; } | { pathname: `/startsinging`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | `/songs/${Router.SingleRoutePart<T>}` | { pathname: `/songs/[singer]`, params: Router.UnknownInputParams & { singer: string | number; } };
    }
  }
}
