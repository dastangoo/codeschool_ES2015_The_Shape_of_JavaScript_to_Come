class Widget {
  constructor(){
    this.baseCSS = "site-widget";
  }
  
  parse(value){
    // ...
  }
}

class SponsorWidget extends Widget {
  constructor(name, description, url){
    super();
    this.name = name;
    this.description = description;
    this.url = url;
  }
  
  render(){
    let parsedName = this.parse(this.name);
    let css = this._buildCSS(this.baseCSS);
  }
  
  _buildCSS(value){
    
  }
  
  parse(){
    let parsedName = super.parse(this.name);
    return `Sponsor: ${parsedName}`;
  }

}