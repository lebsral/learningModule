!function(){"use strict";angular.module("learningModule",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ngMaterial","toastr","com.2fdevs.videogular","com.2fdevs.videogular.plugins.controls"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=t}angular.module("learningModule").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("learningModule").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,o,a){var r,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})}function n(t,e){function n(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],n()}n.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("learningModule").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function a(t){return t.data}function r(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(o+"/contributors?per_page="+n).then(a)["catch"](r)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:n};return a}t.$inject=["$log","$http"],angular.module("learningModule").factory("githubContributor",t)}(),function(){"use strict";function t(t,e,n,o){function a(){i(),t(function(){s.classAnimation="rubberBand"},4e3)}function r(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),s.classAnimation=""}function i(){s.awesomeThings=e.getTec(),angular.forEach(s.awesomeThings,function(t){t.rank=Math.random()})}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1461043416217,s.showToastr=r,a(),s.config={sources:[{src:o.trustAsResourceUrl("assets/sounds/theclientappears.aiff"),type:"audio/aiff"},{src:o.trustAsResourceUrl("assets/sounds/theclientappears.ogg"),type:"audio/ogg"},{src:o.trustAsResourceUrl("assets/sounds/theclientappears.wav"),type:"audio/wav"}],autoPlay:!0,theme:{url:"http://www.videogular.com/styles/themes/default/latest/videogular.css"}}}t.$inject=["$timeout","webDevTec","toastr","$sce"],angular.module("learningModule").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("learningModule").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("learningModule").config(t)}(),function(){"use strict";angular.module("learningModule").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("learningModule").config(t)}(),angular.module("learningModule").run(["$templateCache",function(t){t.put("app/main/main.html","<div layout=vertical layout-fill><md-content><div class=outer><nav class=\"nav left\"></nav><div class=quiz><div class=quiz__title>Scenario on a Psychotic Client NURS 4043</div><div class=quiz__QandChoice><div class=quiz__question>The client appears very restless and with a shaky tone of voice states to the nurse, \"I am going to die soon! Please tell my family I love them.\" What would be the nurse's best response to the client?</div><div class=quiz__possibleanswers><button class=possibleanswers__button><div class=button-split><span class=button__letter>A</span><div class=button__text>I cannot hear the voices. They are not real.</div></div></button> <button class=possibleanswers__button><div class=button-split><span class=button__letter>B</span><div class=button__text>I can see how troubling the voices are to you. I will keep you safe.</div></div></button> <button class=possibleanswers__button><div class=button-split><span class=button__letter>C</span><div class=button__text>Do not listen to the voices. They are not powerful enough to cause you harm.</div></div></button> <button class=possibleanswers__button><div class=button-split><span class=button__letter>D</span><div class=button__text>Why do you think you are hearing voices?</div></div></button></div></div><videogular vg-theme=main.config.theme.url class=\"videogular-container audio\"><vg-media vg-src=main.config.sources vg-type=audio></vg-media><vg-controls><vg-play-pause-button></vg-play-pause-button><vg-time-display>{{ currentTime | date:'mm:ss':'+0000' }}</vg-time-display><vg-scrub-bar><vg-scrub-bar-current-time></vg-scrub-bar-current-time></vg-scrub-bar><vg-time-display>{{ timeLeft | date:'mm:ss':'+0000' }}</vg-time-display><vg-volume><vg-mute-button></vg-mute-button></vg-volume></vg-controls></videogular></div><div></div><nav class=\"nav right\"></nav></div></md-content></div>"),t.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-60895ece10.js.map
