module.exports = ({ brand = '', date, isDigital = false }) => {
  const utmDate = date.format('MM-DD-YYYY');
  const utmSource = isDigital ? 'de-notification' : 'newsletter-html';
  const utmCampaign = isDigital ? `${brand} Digital Magazine ${utmDate}` : `${brand} E-Newsletter ${utmDate}`;
  return {
    utm_source: utmSource,
    utm_medium: 'email',
    utm_campaign: utmCampaign,
  };
};
