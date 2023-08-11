const NativeXConfiguration = require('@parameter1/base-cms-marko-newsletters-native-x/config');

const config = new NativeXConfiguration('https://allured.native-x.parameter1.com/email-placement', { enabled: true });

config
  .setAliasPlacements('blp-newsletter', [
    { name: 'ad-slot-1', id: '6092b63093bd50000124e6a5' },
    { name: 'ad-slot-2', id: '6092b66793bd50000124e932' },
    { name: 'ad-slot-3', id: '6092b682faf43b0001027770' },
    { name: 'ad-slot-4', id: '6092b696a4f9080001739066' },
  ])
  .setAliasPlacements('ct-newsletter-am', [
    { name: 'ad-slot-1', id: '6092b72f93bd50000124f2bf' },
    { name: 'ad-slot-2', id: '6092b74193bd50000124f344' },
    { name: 'ad-slot-3', id: '6092b75afaf43b00010280f7' },
    { name: 'ad-slot-4', id: '6092b76afaf43b000102815c' },
  ])
  .setAliasPlacements('ds-newsletter', [
    { name: 'ad-slot-1', id: '6092b79ca4f9080001739b8f' },
    { name: 'ad-slot-2', id: '6092b7a2a4f9080001739bf1' },
    { name: 'ad-slot-3', id: '6092b7a7a4f9080001739c29' },
    { name: 'ad-slot-4', id: '6092b7ad93bd50000124f73a' },
  ])
  .setAliasPlacements('gci-newsletter-am', [
    { name: 'ad-slot-1', id: '6092b7fafaf43b0001028654' },
    { name: 'ad-slot-2', id: '6092b800faf43b00010286a5' },
    { name: 'ad-slot-3', id: '6092b806faf43b00010286e6' },
    { name: 'ad-slot-4', id: '6092b80ca4f9080001739f20' },
  ])
  .setAliasPlacements('me-newsletter', [
    { name: 'ad-slot-1', id: '6092b84ba4f908000173a133' },
    { name: 'ad-slot-2', id: '6092b852faf43b0001028937' },
    { name: 'ad-slot-3', id: '6092b859faf43b000102895b' },
    { name: 'ad-slot-4', id: '6092b85ea4f908000173a1fe' },
  ])
  .setAliasPlacements('np-newsletter', [
    { name: 'ad-slot-1', id: '6092b8a193bd50000124ff0c' },
    { name: 'ad-slot-2', id: '6092b8a693bd50000124ff45' },
    { name: 'ad-slot-3', id: '6092b8acfaf43b0001028c2e' },
    { name: 'ad-slot-4', id: '6092b8b2faf43b0001028c67' },
  ])
  .setAliasPlacements('pf-newsletter', [
    { name: 'ad-slot-1', id: '6092b8f4faf43b0001028e39' },
    { name: 'ad-slot-2', id: '6092b8fa93bd5000012501ca' },
    { name: 'ad-slot-3', id: '6092b900faf43b0001028eb9' },
    { name: 'ad-slot-4', id: '6092b906a4f908000173a714' },
  ])
  .setAliasPlacements('si-newsletter', [
    { name: 'ad-slot-1', id: '6092b943a4f908000173a903' },
    { name: 'ad-slot-2', id: '6092b948faf43b000102910f' },
    { name: 'ad-slot-3', id: '6092b94ea4f908000173a951' },
    { name: 'ad-slot-4', id: '6092b95493bd5000012504cb' },
  ])
  .setAliasPlacements('ct-newsletter-pm', [
    { name: 'ad-slot-1', id: '609d78d89e5df400016c5208' },
    { name: 'ad-slot-2', id: '609d78e12c86f00001ff4bde' },
    { name: 'ad-slot-3', id: '609d78d39e5df400016c51da' },
    { name: 'ad-slot-4', id: '609d78f39966bb000105eed6' },
  ])
  .setAliasPlacements('gci-newsletter-pm', [
    { name: 'ad-slot-1', id: '609e68b69966bb00010cbc19' },
    { name: 'ad-slot-2', id: '609e68c02c86f00001061a92' },
    { name: 'ad-slot-3', id: '609e68c69e5df40001731cbf' },
    { name: 'ad-slot-4', id: '609e68cd9966bb00010cbc5c' },
  ])
  .setAliasPlacements('ct-special-edition', [
    { name: 'ad-slot-1', id: '609d609f2c86f00001fe7b8e' },
    { name: 'ad-slot-2', id: '609d60ba9e5df400016b8296' },
    { name: 'ad-slot-3', id: '609d60c02c86f00001fe7d00' },
    { name: 'ad-slot-4', id: '609d60c69e5df400016b831b' },
  ])
  .setAliasPlacements('gci-special-edition', [
    { name: 'ad-slot-1', id: '609d66052c86f00001febed1' },
    { name: 'ad-slot-2', id: '609d660b9e5df400016bc4db' },
    { name: 'ad-slot-3', id: '609d66129966bb0001056012' },
    { name: 'ad-slot-4', id: '609d66189966bb0001056039' },
  ])
  .setAliasPlacements('pf-special-edition', [
    { name: 'ad-slot-1', id: '609d685c2c86f00001fed028' },
    { name: 'ad-slot-2', id: '609d68669966bb000105717c' },
    { name: 'ad-slot-3', id: '609d686c9966bb000105720d' },
    { name: 'ad-slot-4', id: '609d68749e5df400016bd740' },
  ])
  .setAliasPlacements('si-special-edition', [
    { name: 'ad-slot-1', id: '609d6a1c9e5df400016be24f' },
    { name: 'ad-slot-2', id: '609d6a229e5df400016be2b8' },
    { name: 'ad-slot-3', id: '609d6a282c86f00001fedc5b' },
    { name: 'ad-slot-4', id: '609d6a2c2c86f00001fedc6e' },
  ])
  .setAliasPlacements('ct-breaking-news', [
    { name: 'ad-slot-1', id: '60f083602d99be0001098858' },
    { name: 'ad-slot-2', id: '60f083672d99be0001098862' },
    { name: 'ad-slot-3', id: '60f0836b19d3950001e62b4c' },
    { name: 'ad-slot-4', id: '60f08371e5729900017af8e2' },
  ])
  .setAliasPlacements('gci-breaking-news', [
    { name: 'ad-slot-1', id: '60f084092d99be0001098d9b' },
    { name: 'ad-slot-2', id: '60f0840fe5729900017afda9' },
    { name: 'ad-slot-3', id: '60f08414e5729900017afdc3' },
    { name: 'ad-slot-4', id: '60f0841919d3950001e630ea' },
  ])
  .setAliasPlacements('pf-breaking-news', [
    { name: 'ad-slot-1', id: '60f084252d99be0001098ee0' },
    { name: 'ad-slot-2', id: '60f0842be5729900017afeca' },
    { name: 'ad-slot-3', id: '60f0843019d3950001e631e3' },
    { name: 'ad-slot-4', id: '60f0843419d3950001e63219' },
  ])
  .setAliasPlacements('si-breaking-news', [
    { name: 'ad-slot-1', id: '60f0843f19d3950001e6329a' },
    { name: 'ad-slot-2', id: '60f08445e5729900017affd7' },
    { name: 'ad-slot-3', id: '60f0844ae5729900017b004b' },
    { name: 'ad-slot-4', id: '60f0844ee5729900017b0067' },
  ]);

module.exports = config;
