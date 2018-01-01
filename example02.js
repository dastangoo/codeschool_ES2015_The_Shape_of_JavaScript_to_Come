class SponsorWidget {
  constructor(name, description, url){
    this.name = name;
    this.description = description;
    this.url = url;
  }
  render(){
    let link = this._buildLink(this.url);
    // ...
  }
  _buildLink(){
    // ...
  }
}

let sponsorWidget = new SponsorWidget(name, description, url);
sponsorWidget.render();