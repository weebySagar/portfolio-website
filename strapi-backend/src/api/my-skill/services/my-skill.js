'use strict';

/**
 * my-skill service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-skill.my-skill');
