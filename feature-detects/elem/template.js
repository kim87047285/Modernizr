/*!
{
  "name": "Template Tag",
  "property": "template",
  "tags": ["elem"],
  "notes": [{
    "name": "HTML5Rocks Article",
    "href": "http://www.html5rocks.com/en/tutorials/webcomponents/template/"
  },{
    "name": "W3 Spec",
    "href": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html"
  }]
}
!*/
import Modernizr from 'Modernizr';

import createElement from 'createElement';
Modernizr.addTest('template', 'content' in createElement('template'));
