var viewModel = function() {
  this.name = ko.observable();
  this.twist = ko.observable();
  this.zoom = ko.observable();

  this.greeting = ko.computed(function() {
    var str;
    var name = this.name();
    if (name) str = "Hi, " + name + "!";
    else str = "Hello, there";
    return str;
  }, this);

  this.intro = ko.computed(function() {
    var zoom = this.zoom() / 100;
    var zoomStr = zoom ? "scale(" + zoom + "," + zoom + ")" : "";
    var rotateStr = this.twist() ? " rotate(" + this.twist() + "deg)" : "";
    var result = zoomStr + rotateStr;
    console.log(result);
    return result;
  }, this);

}

ko.applyBindings(new viewModel());