function SponsorWidget(name, description, url) {
  this.name = name;
  this.description = description;
  this.url = url;
}
SponsorWidget.prototype.render = function () {
  // ...
};

let sponsorWidget = new SponsorWidget(name, description, url);
sponsorWidget.render();