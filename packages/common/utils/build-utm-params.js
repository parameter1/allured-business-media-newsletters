module.exports = ({ brand = '', date }) => {
  const utmDate = date.format('MM-DD-YYYY');
  const utmCampaign = `${brand} E-Newsletter ${utmDate}`;
  return {
    utm_source: 'newsletter-html',
    utm_medium: 'email',
    utm_campaign: utmCampaign,
  };
};
