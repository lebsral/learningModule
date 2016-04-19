(function() {
  'use strict';

  angular
    .module('learningModule')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
