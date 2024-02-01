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

export interface IntroductionIntroduction extends Schema.Component {
  collectionName: 'components_introduction_introductions';
  info: {
    displayName: 'Introduction';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Subtitle: Attribute.String;
    Description: Attribute.Text & Attribute.Required;
    Image: Attribute.Media;
  };
}

export interface MySkillsMySkills extends Schema.Component {
  collectionName: 'components_my_skills_my_skills';
  info: {
    displayName: 'My Skills';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Image: Attribute.Media;
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

export interface TechnologyUsedTechnologyUsed extends Schema.Component {
  collectionName: 'components_technology_used_technology_useds';
  info: {
    displayName: 'Technology Used';
    description: '';
  };
  attributes: {
    Skill: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface TimelineTimeline extends Schema.Component {
  collectionName: 'components_timeline_timelines';
  info: {
    displayName: 'Timeline';
    description: '';
  };
  attributes: {
    CompanyName: Attribute.String & Attribute.Required;
    Content: Attribute.RichText & Attribute.Required;
    WorkDuration: Attribute.String & Attribute.Required;
    Tooltip: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero-banner-subtitle.hero-banner-subtitle': HeroBannerSubtitleHeroBannerSubtitle;
      'introduction.introduction': IntroductionIntroduction;
      'my-skills.my-skills': MySkillsMySkills;
      'navigation-social-links.social-links': NavigationSocialLinksSocialLinks;
      'navigationbrandlogo.navigation-brand-logo': NavigationbrandlogoNavigationBrandLogo;
      'navigationmenu.navigation-menu': NavigationmenuNavigationMenu;
      'technology-used.technology-used': TechnologyUsedTechnologyUsed;
      'timeline.timeline': TimelineTimeline;
    }
  }
}
