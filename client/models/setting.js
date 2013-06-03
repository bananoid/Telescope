
Setting = FormModel.extend({

  blankSchema: {
    requireViewInvite: false,
    requirePostInvite: true,
    requirePostsApproval: true,
    scoreUpdateInterval: '60',
    postInterval: '60',
    commentInterval: '60',
    maxPostsPerDay: '10',
    title: 'Fablab News',
    tagline: '',
    logoUrl: '/img/logo.svg',
    logoHeight: '70',
    logoWidth: '140',
    defaultEmail: 'josh@hizen.eu',
    newPostsNotifications: true,
    backgroundColor: '',
    secondaryColor: '#E59413',
    buttonColor: '#1CA34C',
    headerColor: '#D8402B',
    googleAnalyticsId: '',
    mixpanelId: '',
    clickyId:'',
    goSquaredId: '',
    embedlyId: '',
    footerCode: '',
    extraCode: '',
    notes: ''
  },

  init: function(options) {
    this._super(Settings, options);
    this.overwriteTitle('scoreUpdateInterval', 'Scoring Frequency');
    this.overwriteTitle('requireViewInvite', 'Require Invite to view?');
    this.overwriteTitle('requirePostInvite', 'Require Invite to post?');
    this.overwriteTitle('requirePostsApproval', 'Posts must be approved by admin?');
    this.overwriteTitle('title', 'Site Title');
    this.overwriteTitle('mixpanelId', '<a href="http://mixpanel.com/">Mixpanel</a> ID');
    this.overwriteTitle('clickyId', '<a href="http://getclicky.com/">Clicky</a> ID');
    this.overwriteTitle('goSquaredId', '<a href="http://gosquared.com/">GoSquared</a> ID');
    this.overwriteTitle('logoUrl', 'Logo URL');
    this.overwriteType('footerCode', 'textarea');
    this.overwriteType('extraCode', 'textarea');
    this.overwriteType('notes', 'textarea');
  }
});

//heroku config:add MAIL_URL=smtp://postmaster%40YOUR_DOMAIN.mailgun.org:YOUR_PASSWORD@smtp.mailgun.org:587/

//heroku config:add MAIL_URL=smtp://postmaster%40fablabnews.mailgun.org:07gglqp8usk6@smtp.mailgun.org:587/
