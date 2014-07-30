var fs = require("fs");
/**function render 
 *renders an template from an html file
 *other render engines are available but I wanted to use my existing theme collection's syntax to demo multiple themes 
 *at some point should consider port to jade or ejs and turn it into async for scalability
 */

var templateHelper={
}
	templateHelper.currentTheme='funzone';

templateHelper.activeThemes={
	
	  'funzone':'Fun Zone theme',
	  'bubbly_goodness':'Bubbly goodness',
	  'doctors_office':"Doctor's office",
	  'uncomplicated':'Uncomplicated',
	  'enrainment':'Enrainment',
	  'yan':'Yan Default theme'
}
templateHelper.render=function templaterender(htmlfile,myvars){

	  var htmlTemplate=""+fs.readFileSync(htmlfile);

	  return htmlTemplate.replace(/\{(\w*)\}/g,function(m,key){ return myvars.hasOwnProperty(key)?myvars[key]:"";})

}
templateHelper.setTheme=function (myTheme) {
	templateHelper.currentTheme=myTheme;
}
exports.templateHelper = templateHelper;
