(function () {
  'use strict';

  angular
    .module('learningModule')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $sce) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1461043416217;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    vm.config = {
      sources: [
        {
          src: $sce.trustAsResourceUrl("https://github.com/lebsral/learningModule/blob/gh-pages/src/assets/sound/theclientappears.aiff?raw=true"),
          type: "audio/aiff"
        },
        {
          src: $sce.trustAsResourceUrl("https://github.com/lebsral/learningModule/blob/gh-pages/src/assets/sound/theclientappears.ogg?raw=true"),
          type: "audio/ogg"
        },
       {
          src: $sce.trustAsResourceUrl("https://github.com/lebsral/learningModule/blob/gh-pages/src/assets/sound/theclientappears.wav?raw=true"),
          type: "audio/wav"
        }
          ],
      autoPlay: true,
      theme: {
        url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
      }
    };
  }
})();
