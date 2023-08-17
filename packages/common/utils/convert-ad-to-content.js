const { convertAdToContent } = require('@parameter1/base-cms-marko-newsletters-native-x/utils');

module.exports = ({ advertiser, campaign, creative }, { sectionName = 'Sponsored' } = {}) => {
  const content = convertAdToContent({ advertiser, campaign, creative }, { sectionName });
  return {
    ...content,
    lineItemName: campaign.lineItem.name,
    company: {
      ...content.company,
      tasAdvertiserId: advertiser.externalId,
    },
  };
};
