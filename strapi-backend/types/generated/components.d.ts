import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroBannerSubtitleHeroBannerSubtitle extends Schema.Component {
  collectionName: 'components_hero_banner_subtitle_hero_banner_subtitles';
  info: {
    displayName: 'Hero Banner Subtitle';
  };
  attributes: {
    Subtitle: Attribute.String;
  };
}

export interface NavigationSocialLinksSocialLinks extends Schema.Component {
  collectionName: 'components_navigation_social_links_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    Link: Attribute.String;
    SocialName: Attribute.String;
  };
}

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
      'hero-banner-subtitle.hero-banner-subtitle': HeroBannerSubtitleHeroBannerSubtitle;
      'navigation-social-links.social-links': NavigationSocialLinksSocialLinks;
      'navigationbrandlogo.navigation-brand-logo': NavigationbrandlogoNavigationBrandLogo;
      'navigationmenu.navigation-menu': NavigationmenuNavigationMenu;
    }
  }
}
