var where = 'client';

Package.describe({
  name: 'kroman0:seo',
  summary: 'Automatically add meta, OpenGraph and Twitter tags from your Iron Router routes.',
  version: '1.1.2',
  git: 'http://github.com/kroman0/meteor-seo'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');

  api.imply('yasinuslu:blaze-meta@0.3.1', where);

  api.use([
    'coffeescript',
    'tracker',
    'underscore',
    'check',
    'jquery',
    'iron:router@1.0.7'
  ], where);

  api.addFiles([
    'lib/router-utils.coffee',
    'lib/router.coffee'
  ], where);
});
