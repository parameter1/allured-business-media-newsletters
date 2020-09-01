const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://allured.serve.email-x.parameter1.com');

config
  .setAdUnits('blp-newsletter', [
    {
      name: 'ad-slot-1',
      id: '5f332b51b484c9a55ed5d5d9',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('blp-newsletter', [
    {
      name: 'ad-slot-2',
      id: '5f332b83c8e5651fa591793d',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('blp-newsletter', [
    {
      name: 'ad-slot-3',
      id: '5f332ba1b484c932d3d5d5fe',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('blp-newsletter', [
    {
      name: 'ad-slot-4',
      id: '5f332bb6c8e56576fb917959',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ds-newsletter', [
    {
      name: 'ad-slot-1',
      id: '5f32ff10c8e565700e9178fc',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ds-newsletter', [
    {
      name: 'ad-slot-2',
      id: '5f332b02c8e565e403917906',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ds-newsletter', [
    {
      name: 'ad-slot-3',
      id: '5f332b1ab484c9b087d5d5b3',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ds-newsletter', [
    {
      name: 'ad-slot-4',
      id: '5f332b27b484c9e28cd5d5bd',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('me-newsletter', [
    {
      name: 'ad-slot-1',
      id: '5f332bccb484c95c14d5d61a',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('me-newsletter', [
    {
      name: 'ad-slot-2',
      id: '5f332bdeb484c9f91cd5d624',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('me-newsletter', [
    {
      name: 'ad-slot-3',
      id: '5f332c0ac8e5652df491797e',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('me-newsletter', [
    {
      name: 'ad-slot-4',
      id: '5f332c1cb484c96606d5d652',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('np-newsletter', [
    {
      name: 'ad-slot-1',
      id: '5f187f86b484c91cd9d5b6b1',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('np-newsletter', [
    {
      name: 'ad-slot-2',
      id: '5f187f92b484c95e9ad5b6cd',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('np-newsletter', [
    {
      name: 'ad-slot-3',
      id: '5f187f9fb484c9db95d5b6e9',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('np-newsletter', [
    {
      name: 'ad-slot-4',
      id: '5f187fafb484c98791d5b717',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('np-digital-edition', [
    {
      name: 'ad-slot-1',
      id: '5f4a9cd3c8e565043f918d4e',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('me-digital-edition', [
    {
      name: 'ad-slot-1',
      id: '5f4a9d12b484c90533d5ec74',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ds-digital-edition', [
    {
      name: 'ad-slot-1',
      id: '5f4a9d4fc8e5653687918da0',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('blp-digital-edition', [
    {
      name: 'ad-slot-1',
      id: '5f4a99aac8e5657d61918bd1',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
