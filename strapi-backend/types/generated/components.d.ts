import type { Schema, Attribute } from '@strapi/strapi';

export interface NavigationbrandlogoNavigationBrandLogo
  extends Schema.Component {
  collectionName: 'components_navigationbrandlogo_navigation_brand_logos';
  info: {
    displayName: 'Navigation Brand Logo';
  };
  attributes: {
    Link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
    BrandLogo: Attribute.Media & Attribute.Required;
  };
}

export interface NavigationmenuNavigationMenu extends Schema.Component {
  collectionName: 'components_navigationmenu_navigation_menus';
  info: {
    displayName: 'Navigation Menu';
    description: '';
  };
  attributes: {
    Link: Attribute.String & Attribute.Required;
    Logo: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navigationbrandlogo.navigation-brand-logo': NavigationbrandlogoNavigationBrandLogo;
      'navigationmenu.navigation-menu': NavigationmenuNavigationMenu;
    }
  }
}
