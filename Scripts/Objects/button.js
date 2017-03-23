var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++
        function Button(imagePath, x, y, centred) {
            var _this = _super.call(this, imagePath) || this;
            _this.imagePath = imagePath;
            _this.centred = centred;
            _this.Start();
            _this.x = x;
            _this.y = y;
            _this.on("mouseover", _this._Over);
            _this.on("mouseout", _this._Out);
            return _this;
        }
        //public methods ++++++++++++++++++++++++++++
        Button.prototype.Start = function () {
            if (this.centred) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
        };
        //private methods +++++++++++++++++++++++++++++
        Button.prototype._Over = function (event) {
            this.alpha = 0.7; //30% transparency
        };
        Button.prototype._Out = function (event) {
            this.alpha = 1; //reset transparency
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map