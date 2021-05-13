const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://allured.serve.email-x.parameter1.com');

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
  ])

  .setAdUnits('gci-newsletter', [
    {
      name: 'promotion-slot-1',
      id: '609576e8385731e749a779ba',
      width: 600,
      height: 300,
    },
  ])

  .setAdUnits('gci-newsletter', [
    {
      name: 'ad-slot-1',
      id: '609575b73857315a70a77970',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('gci-newsletter', [
    {
      name: 'ad-slot-2',
      id: '60957697d1054e2a58bb7556',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('gci-newsletter', [
    {
      name: 'ad-slot-3',
      id: '609576b3d1054e12dcbb7569',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('gci-newsletter', [
    {
      name: 'ad-slot-4',
      id: '609576cd3857312a30a779a7',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('pf-newsletter', [
    {
      name: 'promotion-slot-1',
      id: '60993cbb3857317098a789db',
      width: 600,
      height: 300,
    },
  ])

  .setAdUnits('pf-newsletter', [
    {
      name: 'ad-slot-1',
      id: '60993ce8d1054ee59ebb8881',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('pf-newsletter', [
    {
      name: 'ad-slot-2',
      id: '60993d18385731bf95a78a09',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('pf-newsletter', [
    {
      name: 'ad-slot-3',
      id: '60993d33d1054e8ab0bb88ca',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('pf-newsletter', [
    {
      name: 'ad-slot-4',
      id: '60993d4d3857316dd5a78a2e',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('si-newsletter', [
    {
      name: 'promotion-slot-1',
      id: '60955e183857312927a77572',
      width: 600,
      height: 300,
    },
  ])

  .setAdUnits('si-newsletter', [
    {
      name: 'ad-slot-1',
      id: '60955da438573156b8a77529',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('si-newsletter', [
    {
      name: 'ad-slot-2',
      id: '60955ddad1054e0f88bb7297',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('si-newsletter', [
    {
      name: 'ad-slot-3',
      id: '60955defd1054e843fbb72b3',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('si-newsletter', [
    {
      name: 'ad-slot-4',
      id: '60955dfcd1054e717ebb72c6',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ct-newsletter', [
    {
      name: 'promotion-slot-1',
      id: '609947bd38573151e8a78b91',
      width: 600,
      height: 300,
    },
  ])

  .setAdUnits('ct-newsletter', [
    {
      name: 'ad-slot-1',
      id: '60994880385731e0a8a78b9b',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ct-newsletter', [
    {
      name: 'ad-slot-2',
      id: '609948acd1054e5013bb8a2b',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ct-newsletter', [
    {
      name: 'ad-slot-3',
      id: '609948ea385731d66aa78bb7',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ct-newsletter', [
    {
      name: 'ad-slot-4',
      id: '609948fed1054ea7f4bb8a50',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('si-digital-edition', [
    {
      name: 'ad-slot-1',
      id: '60997a8338573127cea78e76',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('pf-digital-edition', [
    {
      name: 'ad-slot-1',
      id: '60997a2c3857316b74a78e5a',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('gci-digital-edition', [
    {
      name: 'ad-slot-1',
      id: '60997993d1054e5455bb8c00',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ct-digital-edition', [
    {
      name: 'ad-slot-1',
      id: '609978f23857314ca1a78db6',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ct-breaking-news', [
    {
      name: 'ad-slot-1',
      id: '609d3711d1054e6a08bb8f08',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('gci-breaking-news', [
    {
      name: 'ad-slot-1',
      id: '609d3d433857312929a79149',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('pf-breaking-news', [
    {
      name: 'ad-slot-1',
      id: '609d3e68d1054eefc7bb8f88',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('si-breaking-news', [
    {
      name: 'ad-slot-1',
      id: '609d3fe4d1054e43f0bb8fe3',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
