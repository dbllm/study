var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var feiji;
(function (feiji) {
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    feiji.createBitmapByName = createBitmapByName;
    var GameUitl = (function () {
        function GameUitl() {
        }
        /** 基于矩形的碰撞检测 */
        GameUitl.hitTest = function (obj1, obj2) {
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            console.log(obj1, obj2);
            return rect1.intersects(rect2);
        };
        return GameUitl;
    }());
    feiji.GameUitl = GameUitl;
    __reflect(GameUitl.prototype, "feiji.GameUitl");
})(feiji || (feiji = {}));
