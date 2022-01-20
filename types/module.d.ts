declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module 'ant-design-vue/es/locale/*' {
  import { Locale } from 'ant-design-vue/types/locale-provider';
  const locale: Locale & ReadonlyRecordable;
  export default locale as Locale & ReadonlyRecordable;
}

declare module 'dayjs/locale/*' {
  import { ILocale } from 'dayjs/locale/types';
  namespace locale {
    type Locale = ILocale;
  }
  const locale: locale.Locale;
  export = locale;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
