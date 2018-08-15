var updateFPS = 50;
var showMouse = true;
var time = 0;
var bgColor = "#fff";
var ww = 0;
var wh = 0;
var wwBg = 0;
var whBg = 0;
var wwFBg = 0;
var whFBg = 0;
var winner = 0;
var controls = {
    value: 0,
    height: 550,
    bgColor: "transparent"
    // var gui = new dat.GUI()
    // gui.add(controls,"value",-2.2).step(0.01).onChange(function(value){})
    // gui.add(controls, 'height').step(1).onChange(function(value){});
    // gui.add(controls, 'bgColor');


};class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
    add(v) {
        return new Vec(this.x + v.x, this.y + v.y);
    }
    sub(v) {
        return new Vec(this.x - v.x, this.y - v.y);
    }
    mul(s) {
        return new Vec(this.x * s, this.y * s);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    set length(nv) {
        let temp = this.unit.mul(nv);
        this.set(temp.x, temp.y);
    }
    clone() {
        return new Vec(this.x, this.y);
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
    equal(v) {
        return this.x == v.x && this.y == v.y;
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    get unit() {
        return this.mul(1 / this.length);
    }

}
class Game {
    constructor() {
        this.player = null;
        this.enemys = [];
        this.pillars = [];
        this.width = ww;
        this.height = wh;
        this.time = 0;
        this.playing = false; //是否開始遊戲
        this.prepare = false;
        this.countTimer = 330;
        this.prize = [];
        this.playerPrize = 3;
        this.roles = [2, 3, 4, 5, 6];
        this.playTimes = 0;
    }
    init() {
        //        let randomRole = Math.floor(Math.random() * this.roles.length - 1);
        //玩家
        this.player = new Player({
            p: new Vec(parseInt((this.width - 40) / 3 / 2 * 3) - 10, wh),
            moveLevel: Math.floor(Math.random() * 20 + 25)
        });

        this.enemys.push(new Enemy({
            id: 1,
            roleId: this.roles[Math.floor(Math.random() * this.roles.length)],
            p: new Vec(parseInt((this.width - 40) / 3 / 2 - 10), wh),
            v: new Vec(0, -1.5 - Math.random() * 0.5)
        }));

        //        randomRole = Math.floor(Math.random() * roles.length - 1);
        this.enemys.push(new Enemy({
            id: 2,
            roleId: this.roles[Math.floor(Math.random() * this.roles.length)],
            p: new Vec(parseInt((this.width - 40) / 3 / 2 * 5) - 10, wh),
            v: new Vec(0, -2.5 - Math.random() * 0.5)
        }));
    }
    update() {
        this.time++;
        this.player.update();
        this.enemys.forEach(e => {
            if (e.p.y != 0) {
                e.update();
            }
            if (e.p.y <= 150 && !e.isArrived) {
                e.v.y = 0;
                e.isArrived = true;
                this.prize.push(e);
                //console.log(this.prize)
            }
        });
    }
    draw() {
        let castleHeadPos = 130;
        let wallWidth = 40;
        let gapWidth = 20;
        let span = parseInt((parseInt((this.width - 40) / 3 / 2 * 4) + 40 + gapWidth) / (wallWidth + gapWidth));
        let errorPixel = (parseInt((this.width - 40) / 3 / 2 * 4) + 40 - 1 - (wallWidth * span + gapWidth * (span - 1))) / (span - 1);
        ctx.save();
        ctx.translate(parseInt((this.width - 40) / 3 / 2), -20);
        ctx.fillStyle = "#ed564b";
        ctx.beginPath();
        for (let i = 0; i < span; i++) {
            ctx.lineTo(parseInt(i) * wallWidth + (gapWidth + errorPixel) * i, castleHeadPos);
            ctx.lineTo(parseInt(i) * wallWidth + (gapWidth + errorPixel) * i, castleHeadPos - 20);
            ctx.lineTo(parseInt(i) * wallWidth + wallWidth + (gapWidth + errorPixel) * i, castleHeadPos - 20);
            ctx.lineTo(parseInt(i) * wallWidth + wallWidth + (gapWidth + errorPixel) * i, castleHeadPos);
        }
        ctx.fill();
        ctx.restore();

        ctx.save();
        let topHeight = 20;
        ctx.translate(parseInt((this.width - 40) / 3 / 2), 130);
        ctx.fillStyle = "#ed564b";
        ctx.fillRect(0, -20, parseInt((this.width - 40) / 3 / 2 * 4) + 40 - 1, 40);
        ctx.fillStyle = "#e2b74c";
        ctx.translate(0, 4);
        ctx.fillRect(0, 0, parseInt((this.width - 40) / 3 / 2 * 4) + 40 - 1, 5);
        ctx.fillStyle = "#e2b74c";
        ctx.translate(0, -6);
        ctx.fillRect(0, 0, parseInt((this.width - 40) / 3 / 2 * 4) + 40 - 1, 2);
        ctx.restore();
        ctx.save();
        pillar(parseInt((this.width - 40) / 3 / 2), this.height - 400);
        pillar(parseInt((this.width - 40) / 3 / 2 * 3), this.height - 400);
        pillar(parseInt((this.width - 40) / 3 / 2 * 5) - 3, this.height - 400);
        ctx.restore();
        //旗子
        ctx.save();
        createFlag(parseInt((this.width - 40) / 3 / 2) + wallWidth / 2, this.height - 400 - topHeight - 40 - 54);
        createFlag(parseInt((this.width - 40) / 3 / 2 * 3) + wallWidth / 2, this.height - 400 - topHeight - 40 - 54);
        createFlag(parseInt((this.width - 40) / 3 / 2 * 5) - 3 + wallWidth / 2, this.height - 400 - topHeight - 40 - 54);
        ctx.restore();

        if (this.prepare) {
            ctx.save();
            ctx.translate(0, 0);
            this.player.isWait = false;
            this.player.draw();
            this.enemys.forEach(e => {
                e.isWait = false;
                e.draw();
            });
            ctx.restore();

            if (0 < this.countTimer) {
                ctx.fillStyle = "rgba(255,255,255,0.3)";
                ctx.fillRect(0, this.height / 2 - 50, this.width, 60);
                ctx.fill();

                ctx.font = "900 50px Microsoft JhengHei";
                ctx.fillStyle = "#566c91";
                ctx.textAlign = "center";
                let text = parseInt(this.countTimer / 100) == 0 ? 'GO！！' : parseInt(this.countTimer / 100);
                ctx.fillText(text, this.width / 2, this.height / 2);

                this.countTimer -= 1;
                $('#go-btn').show();
            }

            if (this.countTimer == 0) {
                this.playing = true;
            }
        } else {
            ctx.save();
            getGuilde(1, 50, 50);
            ctx.restore();
            this.player.isWait = true;
            this.player.draw();
            this.enemys.forEach(e => {
                e.isWait = true;
                e.draw();
            });
        }
    }
    go() {
        if (this.player.speedStep >= -400 && this.playing) {
            this.player.go();
        }
        if (this.player.speedStep <= -400 && !this.player.isArrived) {
            this.prize.push(this.player);
            this.playerPrize = this.prize.length - 1;
            this.player.speedStep = -400;
            this.player.isArrived = true;
            //console.log('prize' + this.prize)
        }
    }
    start() {
        $('#game-btn').fadeOut();
        this.prepare = true;
        this.playing = false;
        // this.playing = true
        this.countTimer = 330;
        if (this.playTimes != 0) {
            this.time = 0;
            this.prize = [];
            this.enemys = [];
            this.player = null;
            this.enemys = [];
            this.pillars = [];
            winner = 0;
            this.init();
        }
        this.playTimes++;
    }
    end() {
        if (this.playing == true) {
            this.getPlayerPrize();
            setTimeout(function () {
                $('#go-btn').fadeOut();
                $('#reward').fadeIn();
                $('#finish-wrap').fadeIn();
                $('#finish-text').fadeIn();
            }, 1500);

            this.pillars = [];
            this.prepare = true;
            this.playing = false;
            this.time = 0;
            this.prize = [];
        }
    }
    playAgain() {
        $('#go-btn').fadeIn();
        $('#reward').fadeOut();
        $('#finish-wrap').fadeOut();
        $('#finish-text').fadeOut();
        this.start();
    }
    getPrize() {
        return this.prize;
    }
    getPlayerPrize() {
        let str = ["一", "二", "三"];
        let amount = [50, 30, 20];
        $('#finish-text h1').html("第" + str[this.playerPrize] + "名！！");
        winner = this.playerPrize;
        return this.playerPrize;
    }
}

class Player {
    constructor(args) {
        let def = {
            id: 'player',
            p: new Vec(0, 0),
            v: new Vec(0, 0),
            a: new Vec(0, 0),
            width: 40,
            height: 55,
            speedStep: 1,
            isArrived: false,
            isWait: true,
            changeMove: false,
            moveLevel: 35
        };
        Object.assign(def, args);
        Object.assign(this, def);
    }
    update() {
        //        this.p = this.p.add(this.v)
        this.v = this.v.add(this.a);
        this.speedStep += this.v.y;
        if (this.speedStep > 0 || this.isArrived == true) {
            this.v.y = 0;
        }
        //        if (this.p.y >= wh) {
        //            this.p.y = wh;
        //            this.v.y = 0;
        //        }
        //console.log('update' + this.speedStep);
    }
    draw() {
        if (this.isWait) {
            getCharactor(1, this.p.x + this.width / 4, this.p.y - this.height * 1.3);
        } else {
            ctx.save();
            ctx.translate(this.p.x - this.width / 2, this.p.y - this.height + this.speedStep);

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(27.7, 55.0);
            ctx.lineTo(3.6, 55.0);
            ctx.bezierCurveTo(1.6, 55.0, 0.1, 53.5, 0.0, 51.5);
            ctx.bezierCurveTo(-0.1, 46.9, 0.2, 39.9, 0.4, 36.3);
            ctx.bezierCurveTo(1.3, 18.4, 6.1, -0.8, 18.1, 0.0);
            ctx.bezierCurveTo(30.0, 0.8, 31.0, 12.0, 31.9, 29.7);
            ctx.bezierCurveTo(32.2, 35.5, 32.0, 45.7, 31.3, 51.9);
            ctx.bezierCurveTo(31.0, 53.7, 29.5, 55.0, 27.7, 55.0);
            ctx.closePath();
            ctx.fillStyle = "rgb(61, 56, 65)";
            ctx.fill();

            // 1//手
            if (this.changeMove) {
                ctx.beginPath();
                ctx.moveTo(21.7, 23.2);
                ctx.bezierCurveTo(21.7, 23.2, 35.0, 10.5, 36.8, 12.6);
                ctx.bezierCurveTo(38.6, 14.7, 31.8, 23.1, 30.3, 27.8);
                ctx.bezierCurveTo(28.8, 32.5, 21.7, 23.2, 21.7, 23.2);
                ctx.closePath();
                ctx.fillStyle = "rgb(61, 56, 65)";
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.moveTo(22.1, 20.1);
                ctx.bezierCurveTo(22.1, 20.1, 39.0, 13.0, 40.0, 15.6);
                ctx.bezierCurveTo(40.9, 18.2, 31.6, 23.6, 28.5, 27.5);
                ctx.bezierCurveTo(25.4, 31.3, 22.1, 20.1, 22.1, 20.1);
                ctx.closePath();
                ctx.fill();
            }

            // 1//
            ctx.beginPath();
            ctx.moveTo(27.5, 9.5);
            ctx.bezierCurveTo(29.1, 14.6, 26.7, 19.9, 22.2, 21.3);
            ctx.bezierCurveTo(17.7, 22.7, 12.8, 19.7, 11.2, 14.5);
            ctx.bezierCurveTo(9.6, 9.4, 12.0, 4.1, 16.5, 2.7);
            ctx.bezierCurveTo(21.0, 1.3, 25.9, 4.4, 27.5, 9.5);
            ctx.closePath();
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fill();

            // 1//
            ctx.beginPath();
            ctx.moveTo(17.4, 11.9);
            ctx.bezierCurveTo(17.6, 12.6, 17.1, 13.3, 16.4, 13.6);
            ctx.bezierCurveTo(15.6, 13.8, 14.8, 13.6, 14.6, 12.9);
            ctx.bezierCurveTo(14.4, 12.3, 14.8, 11.6, 15.6, 11.3);
            ctx.bezierCurveTo(16.4, 11.1, 17.2, 11.3, 17.4, 11.9);
            ctx.closePath();
            ctx.fillStyle = "rgb(61, 56, 65)";
            ctx.fill();

            // 1//
            ctx.beginPath();
            ctx.moveTo(25.6, 9.0);
            ctx.bezierCurveTo(25.9, 9.6, 25.4, 10.4, 24.6, 10.6);
            ctx.bezierCurveTo(23.9, 10.9, 23.1, 10.6, 22.9, 10.0);
            ctx.bezierCurveTo(22.6, 9.4, 23.1, 8.7, 23.8, 8.4);
            ctx.bezierCurveTo(24.6, 8.1, 25.4, 8.4, 25.6, 9.0);
            ctx.closePath();
            ctx.fill();

            // 1// 嘴巴
            if (this.changeMove) {
                ctx.beginPath();
                ctx.moveTo(24.4, 14.4);
                ctx.bezierCurveTo(24.7, 15.3, 23.8, 16.4, 22.4, 16.9);
                ctx.bezierCurveTo(20.9, 17.4, 19.5, 17.1, 19.2, 16.2);
                ctx.bezierCurveTo(18.9, 15.4, 20.0, 14.8, 21.4, 14.3);
                ctx.bezierCurveTo(22.8, 13.7, 24.1, 13.5, 24.4, 14.4);
                ctx.closePath();
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.moveTo(24.4, 14.4);
                ctx.bezierCurveTo(24.7, 15.3, 23.8, 16.4, 22.4, 16.9);
                ctx.bezierCurveTo(20.9, 17.4, 19.5, 17.1, 19.2, 16.2);
                ctx.bezierCurveTo(18.9, 15.4, 20.3, 15.7, 21.8, 15.2);
                ctx.bezierCurveTo(23.2, 14.7, 24.1, 13.5, 24.4, 14.4);
                ctx.closePath();
                ctx.fill();
            }

            // 1//
            ctx.beginPath();
            ctx.moveTo(17.5, 13.5);
            ctx.bezierCurveTo(17.5, 13.4, 17.3, 13.4, 17.3, 13.5);
            ctx.bezierCurveTo(17.1, 13.6, 17.0, 13.7, 16.8, 13.8);
            ctx.bezierCurveTo(16.6, 14.0, 16.3, 14.1, 16.1, 14.1);
            ctx.bezierCurveTo(16.0, 14.1, 15.9, 14.2, 15.9, 14.2);
            ctx.bezierCurveTo(16.4, 15.7, 17.4, 16.3, 17.9, 16.5);
            ctx.bezierCurveTo(18.0, 16.6, 18.2, 16.5, 18.1, 16.4);
            ctx.bezierCurveTo(17.6, 15.0, 17.5, 14.0, 17.5, 13.5);
            ctx.closePath();
            ctx.fillStyle = "rgb(205, 85, 208)";
            ctx.fill();

            // 1//
            ctx.beginPath();
            ctx.moveTo(23.9, 11.2);
            ctx.bezierCurveTo(23.9, 11.2, 24.0, 11.1, 24.1, 11.1);
            ctx.bezierCurveTo(24.2, 11.1, 24.4, 11.1, 24.6, 11.1);
            ctx.bezierCurveTo(24.9, 11.0, 25.2, 10.9, 25.4, 10.8);
            ctx.bezierCurveTo(25.4, 10.7, 25.5, 10.7, 25.6, 10.8);
            ctx.bezierCurveTo(26.2, 12.2, 25.9, 13.3, 25.6, 13.8);
            ctx.bezierCurveTo(25.6, 13.9, 25.4, 13.9, 25.3, 13.8);
            ctx.bezierCurveTo(24.8, 12.4, 24.3, 11.6, 23.9, 11.2);
            ctx.closePath();
            ctx.fill();

            // 1//
            ctx.beginPath();
            ctx.moveTo(22.8, 8.4);
            ctx.bezierCurveTo(22.8, 8.5, 22.9, 8.5, 23.0, 8.5);
            ctx.bezierCurveTo(23.1, 8.3, 23.3, 8.2, 23.5, 8.1);
            ctx.bezierCurveTo(23.7, 8.0, 24.0, 7.9, 24.2, 7.9);
            ctx.bezierCurveTo(24.3, 7.9, 24.4, 7.8, 24.4, 7.8);
            ctx.bezierCurveTo(23.9, 6.3, 23.0, 5.6, 22.5, 5.4);
            ctx.bezierCurveTo(22.4, 5.3, 22.2, 5.4, 22.3, 5.5);
            ctx.bezierCurveTo(22.8, 7.0, 22.8, 7.9, 22.8, 8.4);
            ctx.closePath();
            ctx.fill();

            // 1//
            ctx.beginPath();
            ctx.moveTo(16.5, 10.7);
            ctx.bezierCurveTo(16.5, 10.8, 16.4, 10.8, 16.3, 10.8);
            ctx.bezierCurveTo(16.1, 10.8, 15.9, 10.8, 15.7, 10.9);
            ctx.bezierCurveTo(15.5, 10.9, 15.2, 11.0, 15.0, 11.2);
            ctx.bezierCurveTo(14.9, 11.2, 14.8, 11.2, 14.8, 11.2);
            ctx.bezierCurveTo(14.2, 9.7, 14.5, 8.6, 14.8, 8.1);
            ctx.bezierCurveTo(14.8, 8.0, 15.0, 8.0, 15.0, 8.1);
            ctx.bezierCurveTo(15.6, 9.5, 16.1, 10.3, 16.5, 10.7);

            ctx.closePath();

            ctx.fill();
            ctx.restore();
            ctx.restore();
        }
    }
    go() {
        this.speedStep -= this.moveLevel;
        this.changeMove = !this.changeMove;

        if (this.changeMove) {
            this.v.y = Math.random() * 0.75 + 1;
            //this.speedStep += 200
        } else {
            this.v.y = 0;
        }
    }
}
class Enemy {
    constructor(args) {
        let def = {
            id: 0,
            roleId: 1,
            p: new Vec(0, 0),
            v: new Vec(0, 0),
            a: new Vec(0, 0),
            width: 40,
            height: 55,
            speedStep: 3,
            isArrived: false,
            isWait: true,
            changeMove: false
        };
        Object.assign(def, args);
        Object.assign(this, def);
    }
    update() {
        this.p = this.p.add(this.v);
        this.v = this.v.add(this.a);
    }
    draw() {
        if (this.isWait) {
            ctx.save();
            if (this.id == 1) {
                getCharactor(this.roleId, this.p.x + this.width / 4, this.p.y - this.height * 1.3);
            } else {
                getCharactor(this.roleId, this.p.x + this.width / 4, this.p.y - this.height * 1.3);
            }
            ctx.restore();
        } else {
            ctx.save();
            if (this.id == 1) {
                getEnemy(this.roleId, this.p.x - this.width / 2, this.p.y - this.height + this.speedStep, this.changeMove);
                //enemy3(this.p.x - this.width / 2, this.p.y - this.height + this.speedStep, this.changeMove)
            } else {
                getEnemy(this.roleId, this.p.x - this.width / 2, this.p.y - this.height + this.speedStep, this.changeMove);
                //enemy4(this.p.x - this.width / 2, this.p.y - this.height + this.speedStep, this.changeMove)
            }
            if (time % 45 == 30 && !this.isArrived) {
                this.changeMove = !this.changeMove;
            }
            ctx.restore();
        }
        // ctx.fillStyle = "orange"
        // ctx.fillRect(this.p.x-this.width/2,this.p.y-this.height+this.speedStep,this.width,this.height)
    }
}

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var canvasBg = document.getElementById("bg");
var ctxBg = canvasBg.getContext("2d");
var canvasFinishBg = document.getElementById("reward");
var ctxFBg = canvasFinishBg.getContext("2d");

ctx.circle = function (v, r) {
    this.arc(v.x, v.y, r, 0, Math.PI * 2);
};
ctx.line = function (v1, v2) {
    this.moveTo(v1.x, v1.y);
    this.lineTo(v2.x, v2.y);
};
function initCanvas() {
    ww = canvas.width = $('#game').width();
    wh = canvas.height = controls.height;
    wwBg = canvasBg.width = $('#bg').width();
    whBg = canvasBg.height = controls.height;
    wwFBg = canvasFinishBg.width = $('#reward').width();
    whFBg = canvasFinishBg.height = controls.height;
    // wh = canvas.height = $('#game').height();
}
initCanvas();

var game = new Game();
function init() {
    game.init();
    background();
    finishBg(ctxFBg);
}
function update() {
    time++;
    if (game.playing) {
        game.update();
    }
    let playerIsArrived = game.getPrize().find(f => f.id == 'player');
    if (playerIsArrived != undefined && game.prepare && game.playing == true) {
        game.end();
    }
}
function draw() {
    ctx.clearRect(0, 0, ww, wh);
    ctx.fillStyle = controls.bgColor;
    ctx.fillRect(0, 0, ww, wh);

    //draw
    game.draw();
    //


    requestAnimationFrame(draw);
}
function loaded() {
    initCanvas();
    init();
    requestAnimationFrame(draw);
    setInterval(update, 1000 / updateFPS);
}
window.addEventListener("load", function () {
    //$("body").on("touchstart", handle, false);
    loaded();
    $("#game-btn").fadeIn();
    $("#bg").css("opacity", "1");
    $("#game").css("opacity", "1");
});
//window.addEventListener("resize", loaded)
function handle(evt) {
    evt.preventDefault();
    evt.stopPropagation();
}
function gameStart(evt) {
    //evt.preventDefault();
    //evt.stopPropagation();
    game.start();
    return false;
}
function gameGo(evt) {
    //evt.preventDefault();
    //evt.stopPropagation();
    game.go();
    return false;
}
//滑鼠事件跟紀錄
//var mousePos = new Vec(0, 0)
//window.addEventListener("mousemove", mousemove)
//function mousemove(evt) {
//    mousePos.set(evt.offsetX, evt.offsetY)
//    // console.log(mousePos)
//}


function getGuilde(role, x, y) {
    ctx.translate(x, y);
    ctx.save();
    if (role == 1) {
        ctx.beginPath();
        ctx.moveTo(102.0, 110.0);
        ctx.lineTo(8.0, 110.0);
        ctx.bezierCurveTo(3.6, 110.0, 0.0, 106.4, 0.0, 102.0);
        ctx.lineTo(0.0, 8.0);
        ctx.bezierCurveTo(0.0, 3.6, 3.6, 0.0, 8.0, 0.0);
        ctx.lineTo(102.0, 0.0);
        ctx.bezierCurveTo(106.4, 0.0, 110.0, 3.6, 110.0, 8.0);
        ctx.lineTo(110.0, 102.0);
        ctx.bezierCurveTo(110.0, 106.4, 106.4, 110.0, 102.0, 110.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(241, 226, 113)";
        ctx.fill();
        ctx.restore();
        ctx.save();
        // 1//
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(110.0, 110.0);
        ctx.lineTo(0.0, 110.0);
        ctx.lineTo(0.0, 0.0);
        ctx.lineTo(110.0, 0.0);
        ctx.lineTo(110.0, 110.0);
        ctx.closePath();
        ctx.clip();
        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(92.6, 147.4);
        ctx.lineTo(18.4, 147.4);
        ctx.bezierCurveTo(16.6, 147.4, 15.2, 145.9, 15.3, 144.1);
        ctx.lineTo(18.8, 58.7);
        ctx.bezierCurveTo(20.2, 32.0, 33.9, 12.6, 58.6, 14.2);
        ctx.bezierCurveTo(76.2, 15.4, 90.6, 35.4, 91.6, 63.1);
        ctx.lineTo(99.3, 140.0);
        ctx.bezierCurveTo(100.2, 146.8, 97.7, 147.4, 92.6, 147.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(21.9, 70.3);
        ctx.bezierCurveTo(21.9, 70.3, 14.4, 66.5, 12.1, 55.4);
        ctx.bezierCurveTo(9.9, 44.7, 5.3, 48.8, 5.2, 57.7);
        ctx.bezierCurveTo(5.0, 66.5, 10.4, 81.6, 18.1, 85.4);
        ctx.bezierCurveTo(25.7, 89.1, 21.9, 70.3, 21.9, 70.3);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(88.1, 70.3);
        ctx.bezierCurveTo(88.1, 70.3, 95.6, 66.5, 97.9, 55.4);
        ctx.bezierCurveTo(100.1, 44.7, 104.7, 48.8, 104.8, 57.7);
        ctx.bezierCurveTo(105.0, 66.5, 99.6, 81.6, 91.9, 85.4);
        ctx.bezierCurveTo(84.3, 89.1, 88.1, 70.3, 88.1, 70.3);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(81.5, 47.7);
        ctx.bezierCurveTo(81.5, 62.7, 69.9, 74.8, 55.7, 74.8);
        ctx.bezierCurveTo(41.5, 74.8, 29.9, 62.7, 29.9, 47.7);
        ctx.bezierCurveTo(29.9, 32.8, 41.5, 20.7, 55.7, 20.7);
        ctx.bezierCurveTo(69.9, 20.7, 81.5, 32.8, 81.5, 47.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(47.0, 46.8);
        ctx.bezierCurveTo(47.0, 48.7, 45.1, 50.2, 42.8, 50.2);
        ctx.bezierCurveTo(40.5, 50.2, 38.6, 48.7, 38.6, 46.8);
        ctx.bezierCurveTo(38.6, 45.0, 40.5, 43.4, 42.8, 43.4);
        ctx.bezierCurveTo(45.1, 43.4, 47.0, 45.0, 47.0, 46.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(72.0, 46.8);
        ctx.bezierCurveTo(72.0, 48.7, 70.1, 50.2, 67.8, 50.2);
        ctx.bezierCurveTo(65.5, 50.2, 63.6, 48.7, 63.6, 46.8);
        ctx.bezierCurveTo(63.6, 45.0, 65.5, 43.4, 67.8, 43.4);
        ctx.bezierCurveTo(70.1, 43.4, 72.0, 45.0, 72.0, 46.8);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(63.5, 60.1);
        ctx.bezierCurveTo(63.5, 62.7, 60.0, 64.9, 55.7, 64.9);
        ctx.bezierCurveTo(51.3, 64.9, 47.8, 62.7, 47.8, 60.1);
        ctx.bezierCurveTo(47.8, 57.5, 51.3, 59.8, 55.7, 59.8);
        ctx.bezierCurveTo(60.0, 59.8, 63.5, 57.5, 63.5, 60.1);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(45.8, 51.1);
        ctx.bezierCurveTo(45.8, 50.8, 45.5, 50.7, 45.3, 50.8);
        ctx.bezierCurveTo(44.8, 51.1, 44.3, 51.2, 43.7, 51.4);
        ctx.bezierCurveTo(42.9, 51.5, 42.1, 51.5, 41.4, 51.3);
        ctx.bezierCurveTo(41.2, 51.3, 41.0, 51.4, 41.0, 51.6);
        ctx.bezierCurveTo(40.9, 56.1, 42.9, 58.6, 44.1, 59.7);
        ctx.bezierCurveTo(44.3, 59.9, 44.9, 59.7, 44.8, 59.4);
        ctx.bezierCurveTo(44.6, 55.1, 45.3, 52.4, 45.8, 51.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(205, 85, 208)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(65.3, 51.1);
        ctx.bezierCurveTo(65.2, 50.9, 65.5, 50.8, 65.8, 50.9);
        ctx.bezierCurveTo(66.3, 51.1, 66.8, 51.3, 67.4, 51.3);
        ctx.bezierCurveTo(68.2, 51.5, 69.0, 51.4, 69.7, 51.2);
        ctx.bezierCurveTo(69.9, 51.2, 70.1, 51.3, 70.1, 51.5);
        ctx.bezierCurveTo(70.4, 56.0, 68.5, 58.6, 67.4, 59.7);
        ctx.bezierCurveTo(67.2, 59.9, 66.6, 59.8, 66.6, 59.5);
        ctx.bezierCurveTo(66.6, 55.1, 65.9, 52.5, 65.3, 51.1);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(64.9, 42.5);
        ctx.bezierCurveTo(64.9, 42.8, 65.2, 42.9, 65.4, 42.8);
        ctx.bezierCurveTo(65.9, 42.6, 66.4, 42.4, 67.0, 42.4);
        ctx.bezierCurveTo(67.9, 42.2, 68.6, 42.3, 69.3, 42.5);
        ctx.bezierCurveTo(69.5, 42.6, 69.8, 42.4, 69.8, 42.3);
        ctx.bezierCurveTo(70.1, 37.8, 68.2, 35.1, 67.1, 34.0);
        ctx.bezierCurveTo(66.9, 33.8, 66.3, 33.9, 66.3, 34.2);
        ctx.bezierCurveTo(66.3, 38.6, 65.5, 41.2, 64.9, 42.5);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(45.7, 42.6);
        ctx.bezierCurveTo(45.8, 42.8, 45.5, 42.9, 45.3, 42.8);
        ctx.bezierCurveTo(44.8, 42.6, 44.2, 42.4, 43.7, 42.4);
        ctx.bezierCurveTo(42.8, 42.2, 42.0, 42.3, 41.4, 42.5);
        ctx.bezierCurveTo(41.2, 42.5, 40.9, 42.4, 40.9, 42.2);
        ctx.bezierCurveTo(40.6, 37.7, 42.5, 35.1, 43.7, 34.0);
        ctx.bezierCurveTo(43.9, 33.8, 44.4, 33.9, 44.4, 34.2);
        ctx.bezierCurveTo(44.4, 38.6, 45.2, 41.2, 45.7, 42.6);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        ctx.restore();

        //對話窗
        ctx.save();
        ctx.translate(0, 120);
        let idx = parseInt(time / updateFPS);
        if (idx % 10 < 5) {
            getDialog(1, 1);
        } else {
            getDialog(1, 2);
        }
        ctx.restore();
    }
    ctx.restore();
}