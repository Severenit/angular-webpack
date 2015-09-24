export default ngModule => {
  ngModule.directive('helloWorld', helloWorldFn);
  require('./hello-world.scss');
  function helloWorldFn() {
    return {
      restrict: 'E',
      scope: {},
      template: require('./hello-world.html'),
      controllerAs: 'vm',
      controller: function () {
        const vm = this;

        vm.greeting = 'Hello Webpack';
      }
    }
  }
}