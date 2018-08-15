﻿
function enemy1(x, y, change) {
    ctx.save();
    ctx.translate(x, y);
    if (change) {
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

        // 1//
        ctx.beginPath();
        ctx.moveTo(24.4, 14.4);
        ctx.bezierCurveTo(24.7, 15.3, 23.8, 16.4, 22.4, 16.9);
        ctx.bezierCurveTo(20.9, 17.4, 19.5, 17.1, 19.2, 16.2);
        ctx.bezierCurveTo(18.9, 15.4, 20.0, 14.8, 21.4, 14.3);
        ctx.bezierCurveTo(22.8, 13.7, 24.1, 13.5, 24.4, 14.4);
        ctx.closePath();
        ctx.fill();

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

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.7, 23.2);
        ctx.bezierCurveTo(21.7, 23.2, 35.0, 10.5, 36.8, 12.6);
        ctx.bezierCurveTo(38.6, 14.7, 31.8, 23.1, 30.3, 27.8);
        ctx.bezierCurveTo(28.8, 32.5, 21.7, 23.2, 21.7, 23.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();
        ctx.restore();
    }
    else {
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

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.1, 20.1);
        ctx.bezierCurveTo(22.1, 20.1, 39.0, 13.0, 40.0, 15.6);
        ctx.bezierCurveTo(40.9, 18.2, 31.6, 23.6, 28.5, 27.5);
        ctx.bezierCurveTo(25.4, 31.3, 22.1, 20.1, 22.1, 20.1);
        ctx.closePath();
        ctx.fill();

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

        // 1//
        ctx.beginPath();
        ctx.moveTo(24.4, 14.4);
        ctx.bezierCurveTo(24.7, 15.3, 23.8, 16.4, 22.4, 16.9);
        ctx.bezierCurveTo(20.9, 17.4, 19.5, 17.1, 19.2, 16.2);
        ctx.bezierCurveTo(18.9, 15.4, 20.3, 15.7, 21.8, 15.2);
        ctx.bezierCurveTo(23.2, 14.7, 24.1, 13.5, 24.4, 14.4);
        ctx.closePath();
        ctx.fill();

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
    }
    ctx.restore();
}

function enemy2(x, y, change) {
    ctx.save();
    ctx.translate(x, y);
    if (change) {
        ctx.save();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(24.3, 8.7);
        ctx.bezierCurveTo(25.1, 14.2, 21.3, 19.3, 15.7, 20.0);
        ctx.bezierCurveTo(10.2, 20.8, 5.2, 17.0, 4.4, 11.5);
        ctx.bezierCurveTo(3.6, 6.0, 7.4, 0.9, 13.0, 0.1);
        ctx.bezierCurveTo(18.5, -0.7, 23.5, 3.2, 24.3, 8.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(74, 72, 75)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(23.3, 5.6);
        ctx.bezierCurveTo(23.3, 5.6, 24.8, 7.8, 26.2, 17.9);
        ctx.bezierCurveTo(27.1, 25.1, 29.1, 28.6, 30.2, 30.1);
        ctx.bezierCurveTo(30.5, 30.4, 30.1, 30.6, 29.8, 30.8);
        ctx.bezierCurveTo(18.6, 39.1, 8.3, 28.4, 4.8, 13.0);
        ctx.lineTo(23.3, 5.6);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(23.5, 53.1);
        ctx.lineTo(20.3, 53.9);
        ctx.bezierCurveTo(17.4, 54.6, 14.4, 54.8, 11.5, 54.3);
        ctx.bezierCurveTo(10.9, 54.3, 10.3, 54.2, 9.7, 54.2);
        ctx.bezierCurveTo(8.8, 54.2, 8.0, 54.3, 7.2, 54.4);
        ctx.bezierCurveTo(6.9, 54.4, 6.7, 54.2, 6.7, 53.9);
        ctx.bezierCurveTo(7.2, 51.4, 7.5, 49.3, 7.4, 47.6);
        ctx.bezierCurveTo(7.4, 47.2, 6.8, 47.2, 6.8, 47.6);
        ctx.bezierCurveTo(6.5, 49.6, 6.0, 52.0, 5.2, 54.4);
        ctx.bezierCurveTo(5.2, 54.6, 5.0, 54.7, 4.9, 54.7);
        ctx.bezierCurveTo(4.6, 54.8, 4.3, 54.8, 4.1, 54.8);
        ctx.bezierCurveTo(3.8, 54.9, 3.6, 54.6, 3.6, 54.3);
        ctx.bezierCurveTo(4.2, 52.3, 4.6, 50.6, 4.7, 49.2);
        ctx.bezierCurveTo(4.7, 48.8, 4.2, 48.7, 4.1, 49.1);
        ctx.bezierCurveTo(3.6, 50.8, 3.0, 52.7, 2.1, 54.7);
        ctx.bezierCurveTo(2.1, 54.9, 1.9, 55.0, 1.8, 55.0);
        ctx.bezierCurveTo(1.5, 55.0, 1.2, 55.0, 0.9, 55.0);
        ctx.bezierCurveTo(0.7, 55.0, 0.5, 54.9, 0.3, 54.7);
        ctx.bezierCurveTo(0.1, 54.5, -0.0, 54.2, 0.0, 53.9);
        ctx.bezierCurveTo(0.0, 53.9, 0.0, 53.9, 0.0, 53.9);
        ctx.lineTo(3.7, 28.7);
        ctx.bezierCurveTo(5.4, 18.9, 6.6, 12.1, 14.2, 12.1);
        ctx.bezierCurveTo(19.5, 12.1, 22.9, 18.9, 23.2, 27.9);
        ctx.lineTo(25.5, 50.2);
        ctx.lineTo(25.5, 50.7);
        ctx.bezierCurveTo(25.8, 52.9, 25.1, 53.1, 23.5, 53.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(224, 219, 228)";
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(3.8, 20.9);
        ctx.bezierCurveTo(3.8, 20.9, 3.8, 20.9, 3.8, 20.9);
        ctx.bezierCurveTo(3.6, 21.0, 3.4, 20.8, 3.4, 20.6);
        ctx.bezierCurveTo(3.2, 17.9, 4.4, 8.8, 4.5, 8.4);
        ctx.bezierCurveTo(4.5, 8.3, 4.7, 8.1, 4.9, 8.1);
        ctx.bezierCurveTo(5.1, 8.2, 5.2, 8.3, 5.2, 8.5);
        ctx.bezierCurveTo(5.2, 8.6, 3.9, 18.0, 4.1, 20.6);
        ctx.bezierCurveTo(4.1, 20.7, 4.0, 20.9, 3.8, 20.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(74, 72, 75)";
        ctx.fill();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(16.6, 13.8);
        ctx.bezierCurveTo(16.8, 15.3, 15.2, 16.8, 13.1, 17.0);
        ctx.bezierCurveTo(10.9, 17.2, 9.1, 16.1, 8.9, 14.5);
        ctx.bezierCurveTo(8.8, 12.9, 10.4, 11.5, 12.5, 11.3);
        ctx.bezierCurveTo(14.6, 11.1, 16.5, 12.2, 16.6, 13.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 234, 231)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.4, 12.3);
        ctx.bezierCurveTo(22.4, 16.0, 20.3, 19.7, 16.8, 20.7);
        ctx.bezierCurveTo(13.3, 21.6, 9.7, 19.3, 8.7, 15.6);
        ctx.bezierCurveTo(7.7, 11.9, 9.7, 8.2, 13.2, 7.2);
        ctx.bezierCurveTo(16.7, 6.3, 20.4, 8.5, 21.4, 12.3);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(18.9, 15.4);
        ctx.bezierCurveTo(19.1, 16.2, 18.2, 17.2, 16.8, 17.6);
        ctx.bezierCurveTo(15.5, 17.9, 14.2, 17.6, 14.0, 16.7);
        ctx.bezierCurveTo(13.7, 15.9, 15.0, 16.4, 16.4, 16.0);
        ctx.bezierCurveTo(17.7, 15.6, 18.6, 14.6, 18.9, 15.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(36, 32, 39)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(20.5, 11.8);
        ctx.bezierCurveTo(20.7, 12.5, 20.3, 13.3, 19.5, 13.4);
        ctx.bezierCurveTo(18.8, 13.6, 18.1, 13.2, 17.9, 12.5);
        ctx.bezierCurveTo(17.7, 11.8, 18.1, 11.0, 18.8, 10.8);
        ctx.bezierCurveTo(19.5, 10.6, 20.3, 11.1, 20.5, 11.8);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(25.2, 15.9);
        ctx.lineTo(24.0, 7.5);
        ctx.bezierCurveTo(23.6, 5.1, 22.2, 3.0, 20.2, 1.7);
        ctx.bezierCurveTo(18.2, 0.4, 15.6, -0.3, 12.9, 0.1);
        ctx.bezierCurveTo(8.3, 0.8, 5.0, 3.7, 4.5, 9.5);
        ctx.bezierCurveTo(4.4, 9.6, 4.4, 9.7, 4.4, 9.8);
        ctx.bezierCurveTo(4.4, 9.6, 4.4, 9.5, 4.4, 9.5);
        ctx.bezierCurveTo(4.4, 9.5, 4.4, 9.7, 4.4, 10.1);
        ctx.bezierCurveTo(4.3, 15.7, 5.5, 29.7, 6.6, 31.9);
        ctx.bezierCurveTo(7.9, 34.8, 8.1, 34.9, 11.2, 33.6);
        ctx.bezierCurveTo(16.1, 31.5, 14.6, 32.1, 13.9, 29.0);
        ctx.bezierCurveTo(12.6, 22.6, 15.7, 14.9, 18.2, 9.7);
        ctx.bezierCurveTo(18.3, 9.6, 18.4, 9.6, 18.5, 9.7);
        ctx.bezierCurveTo(21.0, 13.4, 17.2, 26.2, 16.7, 27.4);
        ctx.bezierCurveTo(16.6, 27.6, 16.8, 27.9, 17.1, 27.9);
        ctx.bezierCurveTo(17.4, 27.8, 17.6, 27.7, 17.9, 27.5);
        ctx.bezierCurveTo(17.9, 27.5, 17.9, 27.5, 17.9, 27.4);
        ctx.bezierCurveTo(18.1, 27.3, 18.2, 27.1, 18.3, 26.9);
        ctx.bezierCurveTo(18.5, 26.2, 18.7, 25.5, 18.9, 24.9);
        ctx.bezierCurveTo(18.9, 24.7, 19.2, 24.7, 19.2, 24.9);
        ctx.bezierCurveTo(19.1, 25.2, 19.1, 25.6, 19.0, 26.0);
        ctx.bezierCurveTo(19.0, 26.1, 19.2, 26.3, 19.3, 26.1);
        ctx.bezierCurveTo(21.9, 23.6, 25.7, 19.2, 25.2, 15.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(74, 72, 75)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(34.2, 24.7);
        ctx.bezierCurveTo(34.2, 24.4, 34.0, 24.1, 33.7, 24.1);
        ctx.bezierCurveTo(33.4, 24.1, 33.0, 24.1, 32.3, 24.4);
        ctx.bezierCurveTo(31.0, 24.9, 29.9, 25.3, 28.1, 25.2);
        ctx.bezierCurveTo(28.1, 25.2, 28.1, 25.2, 28.1, 25.2);
        ctx.bezierCurveTo(25.9, 25.1, 23.9, 24.0, 22.6, 22.3);
        ctx.bezierCurveTo(22.1, 21.7, 21.5, 21.1, 20.9, 20.8);
        ctx.bezierCurveTo(20.6, 20.7, 20.4, 20.6, 20.1, 20.6);
        ctx.bezierCurveTo(17.8, 20.0, 15.2, 21.3, 14.3, 23.6);
        ctx.bezierCurveTo(13.2, 26.2, 14.7, 29.0, 17.2, 30.4);
        ctx.bezierCurveTo(22.2, 33.2, 26.1, 33.1, 28.5, 32.9);
        ctx.bezierCurveTo(31.6, 32.5, 34.0, 27.0, 34.2, 24.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(224, 219, 228)";
        ctx.fill();
        ctx.restore();
    }
    else {
        ctx.save();

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(20.3, 8.5);
        ctx.bezierCurveTo(21.0, 13.9, 17.3, 18.9, 11.9, 19.7);
        ctx.bezierCurveTo(6.5, 20.4, 1.5, 16.7, 0.7, 11.3);
        ctx.bezierCurveTo(-0.1, 5.9, 3.7, 0.9, 9.1, 0.1);
        ctx.bezierCurveTo(14.5, -0.6, 19.5, 3.1, 20.3, 8.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(74, 72, 75)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(19.2, 5.5);
        ctx.bezierCurveTo(19.2, 5.5, 20.8, 7.6, 22.1, 17.6);
        ctx.bezierCurveTo(23.0, 24.7, 25.0, 28.1, 26.1, 29.5);
        ctx.bezierCurveTo(26.3, 29.8, 26.0, 30.0, 25.7, 30.2);
        ctx.bezierCurveTo(14.6, 38.4, 4.6, 27.9, 1.1, 12.8);
        ctx.lineTo(19.2, 5.5);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(22.9, 51.1);
        ctx.lineTo(19.8, 52.2);
        ctx.bezierCurveTo(17.1, 53.1, 14.2, 53.6, 11.3, 53.4);
        ctx.bezierCurveTo(10.6, 53.4, 10.1, 53.4, 9.5, 53.4);
        ctx.bezierCurveTo(8.7, 53.5, 7.9, 53.7, 7.1, 53.8);
        ctx.bezierCurveTo(6.8, 53.9, 6.6, 53.7, 6.6, 53.4);
        ctx.bezierCurveTo(6.8, 51.0, 6.9, 48.8, 6.6, 47.2);
        ctx.bezierCurveTo(6.6, 46.8, 6.1, 46.9, 6.1, 47.2);
        ctx.bezierCurveTo(5.9, 49.2, 5.6, 51.6, 5.1, 54.1);
        ctx.bezierCurveTo(5.1, 54.2, 5.0, 54.3, 4.8, 54.4);
        ctx.bezierCurveTo(4.6, 54.4, 4.3, 54.5, 4.1, 54.5);
        ctx.bezierCurveTo(3.8, 54.6, 3.5, 54.4, 3.6, 54.1);
        ctx.bezierCurveTo(4.0, 52.1, 4.2, 50.4, 4.1, 49.0);
        ctx.bezierCurveTo(4.1, 48.6, 3.6, 48.6, 3.6, 48.9);
        ctx.bezierCurveTo(3.3, 50.6, 2.8, 52.6, 2.2, 54.6);
        ctx.bezierCurveTo(2.1, 54.8, 2.0, 54.9, 1.8, 54.9);
        ctx.bezierCurveTo(1.6, 54.9, 1.3, 55.0, 1.0, 55.0);
        ctx.bezierCurveTo(0.8, 55.0, 0.5, 54.9, 0.3, 54.8);
        ctx.bezierCurveTo(0.1, 54.6, 0.0, 54.3, 0.0, 54.1);
        ctx.bezierCurveTo(0.0, 54.1, 0.0, 54.0, 0.0, 54.0);
        ctx.lineTo(1.3, 29.0);
        ctx.bezierCurveTo(2.1, 19.3, 2.6, 12.5, 10.1, 11.8);
        ctx.bezierCurveTo(15.3, 11.4, 19.2, 17.8, 20.3, 26.5);
        ctx.lineTo(24.6, 48.1);
        ctx.lineTo(24.7, 48.5);
        ctx.bezierCurveTo(25.1, 50.7, 24.4, 50.9, 22.9, 51.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(224, 219, 228)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0.6, 20.6);
        ctx.bezierCurveTo(0.6, 20.6, 0.6, 20.6, 0.6, 20.6);
        ctx.bezierCurveTo(0.4, 20.6, 0.2, 20.5, 0.2, 20.3);
        ctx.bezierCurveTo(-0.1, 17.7, 0.8, 8.7, 0.8, 8.3);
        ctx.bezierCurveTo(0.8, 8.1, 1.0, 8.0, 1.2, 8.0);
        ctx.bezierCurveTo(1.4, 8.0, 1.5, 8.2, 1.5, 8.4);
        ctx.bezierCurveTo(1.5, 8.5, 0.6, 17.7, 0.9, 20.2);
        ctx.bezierCurveTo(0.9, 20.4, 0.8, 20.6, 0.6, 20.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(74, 72, 75)";
        ctx.fill();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(12.7, 13.5);
        ctx.bezierCurveTo(12.9, 15.0, 11.3, 16.5, 9.2, 16.7);
        ctx.bezierCurveTo(7.1, 16.9, 5.3, 15.8, 5.2, 14.2);
        ctx.bezierCurveTo(5.0, 12.7, 6.6, 11.3, 8.7, 11.1);
        ctx.bezierCurveTo(10.8, 10.9, 12.6, 12.0, 12.7, 13.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 234, 231)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(17.4, 12.0);
        ctx.bezierCurveTo(18.4, 15.7, 16.4, 19.4, 12.9, 20.3);
        ctx.bezierCurveTo(9.5, 21.2, 5.9, 19.0, 4.9, 15.4);
        ctx.bezierCurveTo(4.0, 11.7, 6.0, 8.0, 9.4, 7.1);
        ctx.bezierCurveTo(12.8, 6.2, 16.4, 8.4, 17.4, 12.0);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(14.9, 15.1);
        ctx.bezierCurveTo(15.1, 16.0, 14.2, 16.9, 12.9, 17.2);
        ctx.bezierCurveTo(11.6, 17.6, 10.3, 17.2, 10.1, 16.4);
        ctx.bezierCurveTo(9.9, 15.6, 10.9, 15.1, 12.2, 14.8);
        ctx.bezierCurveTo(13.5, 14.4, 14.7, 14.3, 14.9, 15.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(36, 32, 39)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(16.5, 11.6);
        ctx.bezierCurveTo(16.7, 12.3, 16.3, 13.0, 15.6, 13.2);
        ctx.bezierCurveTo(14.9, 13.4, 14.1, 13.0, 13.9, 12.3);
        ctx.bezierCurveTo(13.7, 11.5, 14.2, 10.8, 14.9, 10.6);
        ctx.bezierCurveTo(15.6, 10.4, 16.3, 10.9, 16.5, 11.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.2, 15.6);
        ctx.lineTo(19.9, 7.4);
        ctx.bezierCurveTo(19.6, 5.0, 18.2, 3.0, 16.2, 1.7);
        ctx.bezierCurveTo(14.2, 0.3, 11.7, -0.3, 9.1, 0.1);
        ctx.bezierCurveTo(4.5, 0.8, 1.3, 3.6, 0.8, 9.3);
        ctx.bezierCurveTo(0.8, 9.4, 0.8, 9.5, 0.7, 9.6);
        ctx.bezierCurveTo(0.7, 9.4, 0.7, 9.3, 0.7, 9.3);
        ctx.bezierCurveTo(0.7, 9.3, 0.7, 9.5, 0.7, 9.9);
        ctx.bezierCurveTo(0.6, 15.5, 1.8, 29.2, 2.8, 31.3);
        ctx.bezierCurveTo(4.2, 34.1, 4.3, 34.3, 7.4, 33.0);
        ctx.bezierCurveTo(12.2, 31.0, 10.7, 31.5, 10.1, 28.4);
        ctx.bezierCurveTo(8.8, 22.2, 11.8, 14.7, 14.3, 9.6);
        ctx.bezierCurveTo(14.4, 9.4, 14.5, 9.4, 14.6, 9.5);
        ctx.bezierCurveTo(17.0, 13.2, 13.3, 25.7, 12.8, 26.9);
        ctx.bezierCurveTo(12.7, 27.1, 12.9, 27.4, 13.2, 27.3);
        ctx.bezierCurveTo(13.5, 27.3, 13.7, 27.2, 13.9, 27.0);
        ctx.bezierCurveTo(14.0, 27.0, 14.0, 27.0, 14.0, 26.9);
        ctx.bezierCurveTo(14.1, 26.8, 14.3, 26.6, 14.3, 26.4);
        ctx.bezierCurveTo(14.6, 25.7, 14.8, 25.0, 14.9, 24.4);
        ctx.bezierCurveTo(15.0, 24.2, 15.2, 24.3, 15.2, 24.5);
        ctx.bezierCurveTo(15.2, 24.8, 15.1, 25.1, 15.1, 25.5);
        ctx.bezierCurveTo(15.0, 25.7, 15.2, 25.8, 15.4, 25.7);
        ctx.bezierCurveTo(17.9, 23.2, 21.7, 18.9, 21.2, 15.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(74, 72, 75)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(28.0, 15.1);
        ctx.bezierCurveTo(27.9, 14.9, 27.5, 14.7, 27.3, 14.8);
        ctx.bezierCurveTo(27.0, 15.0, 26.7, 15.2, 26.2, 15.7);
        ctx.bezierCurveTo(25.3, 16.8, 24.6, 17.7, 23.0, 18.5);
        ctx.bezierCurveTo(23.0, 18.5, 23.0, 18.5, 23.0, 18.5);
        ctx.bezierCurveTo(21.0, 19.4, 18.8, 19.4, 16.8, 18.5);
        ctx.bezierCurveTo(16.1, 18.2, 15.3, 18.0, 14.7, 18.1);
        ctx.bezierCurveTo(14.5, 18.1, 14.2, 18.2, 14.0, 18.2);
        ctx.bezierCurveTo(11.6, 18.9, 10.1, 21.1, 10.3, 23.6);
        ctx.bezierCurveTo(10.6, 26.3, 13.3, 28.1, 16.0, 28.1);
        ctx.bezierCurveTo(21.7, 28.2, 25.0, 26.2, 27.0, 24.8);
        ctx.bezierCurveTo(29.5, 23.1, 28.9, 17.2, 28.0, 15.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(224, 219, 228)";
        ctx.fill();
        ctx.restore();
    }
    ctx.restore();
}

function enemy3(x, y, change) {
    ctx.save();
    ctx.translate(x, y);
    // 1//leg
    if (change) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(30.5, 36.5);
        ctx.lineTo(34.7, 51.4);
        ctx.bezierCurveTo(34.7, 51.4, 37.0, 51.5, 37.5, 52.7);
        ctx.bezierCurveTo(38.0, 53.9, 31.6, 55.6, 30.8, 54.8);
        ctx.bezierCurveTo(30.0, 54.0, 24.6, 38.3, 24.6, 38.3);
        ctx.lineTo(30.5, 36.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();
    }
    else {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(30.3, 36.3);
        ctx.lineTo(41.8, 49.2);
        ctx.bezierCurveTo(41.8, 49.2, 44.1, 48.3, 45.2, 49.3);
        ctx.bezierCurveTo(46.3, 50.3, 41.0, 54.8, 39.7, 54.3);
        ctx.bezierCurveTo(38.5, 53.9, 25.6, 40.7, 25.6, 40.7);
        ctx.lineTo(30.3, 36.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();
    }

    ctx.beginPath();
    ctx.moveTo(35.4, 23.5);
    ctx.bezierCurveTo(31.7, 21.7, 29.3, 18.0, 29.0, 13.9);
    ctx.bezierCurveTo(28.9, 12.2, 28.8, 11.9, 28.6, 10.3);
    ctx.bezierCurveTo(27.9, 4.3, 21.7, 0.4, 15.7, 0.0);
    ctx.bezierCurveTo(7.6, -0.5, 0.6, 6.2, 0.0, 15.0);
    ctx.bezierCurveTo(-0.5, 23.7, 5.7, 31.2, 13.8, 31.7);
    ctx.bezierCurveTo(17.2, 31.9, 20.3, 30.9, 22.9, 29.0);
    ctx.bezierCurveTo(23.5, 30.2, 24.5, 31.0, 26.0, 30.9);
    ctx.bezierCurveTo(33.6, 30.6, 38.1, 24.4, 38.1, 24.4);
    ctx.bezierCurveTo(37.2, 24.3, 36.3, 24.0, 35.4, 23.5);
    ctx.closePath();
    ctx.fillStyle = "rgb(61, 56, 65)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(22.9, 10.6);
    ctx.bezierCurveTo(25.3, 16.4, 22.5, 21.8, 18.1, 23.7);
    ctx.bezierCurveTo(12.5, 26.0, 6.0, 24.5, 4.9, 17.5);
    ctx.bezierCurveTo(4.0, 11.3, 3.4, 6.5, 8.9, 4.2);
    ctx.bezierCurveTo(14.4, 1.9, 20.5, 4.8, 22.9, 10.6);
    ctx.closePath();
    ctx.fillStyle = "rgb(248, 225, 219)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(13.6, 6.0);
    ctx.bezierCurveTo(13.4, 5.6, 12.9, 5.7, 12.8, 6.1);
    ctx.bezierCurveTo(12.0, 8.2, 10.3, 12.4, 6.6, 15.0);
    ctx.bezierCurveTo(2.9, 17.6, 2.4, 17.9, 2.4, 17.9);
    ctx.bezierCurveTo(2.4, 17.8, 2.5, 17.7, 2.4, 17.6);
    ctx.bezierCurveTo(2.3, 16.1, 1.5, 7.7, 7.9, 3.6);
    ctx.bezierCurveTo(15.0, -0.9, 21.8, 4.5, 24.2, 7.7);
    ctx.bezierCurveTo(26.5, 10.7, 16.2, 10.3, 13.6, 6.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(61, 56, 65)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(11.2, 16.1);
    ctx.bezierCurveTo(11.6, 17.0, 11.2, 18.1, 10.3, 18.4);
    ctx.bezierCurveTo(9.4, 18.8, 8.3, 18.4, 7.9, 17.5);
    ctx.bezierCurveTo(7.6, 16.6, 8.0, 15.5, 8.9, 15.2);
    ctx.bezierCurveTo(9.8, 14.8, 10.8, 15.2, 11.2, 16.1);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(19.3, 12.8);
    ctx.bezierCurveTo(19.7, 13.7, 19.2, 14.7, 18.3, 15.1);
    ctx.bezierCurveTo(17.4, 15.5, 16.4, 15.0, 16.0, 14.1);
    ctx.bezierCurveTo(15.6, 13.2, 16.1, 12.2, 17.0, 11.8);
    ctx.bezierCurveTo(17.9, 11.4, 18.9, 11.9, 19.3, 12.8);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(17.7, 17.1);
    ctx.bezierCurveTo(18.1, 18.1, 17.1, 19.5, 15.4, 20.2);
    ctx.bezierCurveTo(13.7, 20.9, 12.0, 20.7, 11.6, 19.6);
    ctx.bezierCurveTo(11.2, 18.6, 12.4, 18.6, 14.1, 17.9);
    ctx.bezierCurveTo(15.7, 17.2, 17.3, 16.1, 17.7, 17.1);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(13.3, 5.4);
    ctx.bezierCurveTo(13.3, 5.4, 13.7, 9.5, 19.9, 11.1);
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = "rgb(61, 56, 65)";
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(14.4, 15.4);
    ctx.bezierCurveTo(14.6, 15.7, 14.4, 16.1, 14.0, 16.3);
    ctx.bezierCurveTo(13.7, 16.4, 13.3, 16.3, 13.1, 15.9);
    ctx.bezierCurveTo(13.0, 15.6, 13.0, 14.9, 13.4, 14.8);
    ctx.bezierCurveTo(13.8, 14.6, 14.3, 15.0, 14.4, 15.4);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 171, 155)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(37.8, 47.7);
    ctx.lineTo(36.8, 48.0);
    ctx.bezierCurveTo(36.7, 48.1, 36.5, 48.0, 36.5, 47.8);
    ctx.bezierCurveTo(35.9, 45.4, 35.1, 43.5, 34.4, 42.0);
    ctx.bezierCurveTo(34.2, 41.7, 33.8, 41.9, 33.9, 42.3);
    ctx.bezierCurveTo(34.4, 44.0, 34.9, 46.1, 35.3, 48.3);
    ctx.bezierCurveTo(35.3, 48.5, 35.2, 48.6, 35.1, 48.6);
    ctx.lineTo(33.5, 49.2);
    ctx.bezierCurveTo(33.3, 49.3, 33.2, 49.2, 33.1, 49.0);
    ctx.bezierCurveTo(32.6, 45.6, 31.9, 42.8, 31.0, 40.9);
    ctx.bezierCurveTo(30.9, 40.6, 30.4, 40.7, 30.5, 41.1);
    ctx.bezierCurveTo(31.0, 43.4, 31.4, 46.3, 31.6, 49.4);
    ctx.bezierCurveTo(31.6, 49.7, 31.4, 49.9, 31.2, 50.0);
    ctx.lineTo(26.1, 51.8);
    ctx.bezierCurveTo(25.9, 51.9, 25.7, 51.7, 25.7, 51.5);
    ctx.bezierCurveTo(25.8, 50.0, 25.8, 48.6, 25.6, 47.5);
    ctx.bezierCurveTo(25.6, 47.2, 25.1, 47.2, 25.1, 47.5);
    ctx.bezierCurveTo(25.1, 48.9, 25.0, 50.5, 24.8, 52.1);
    ctx.bezierCurveTo(24.8, 52.2, 24.7, 52.3, 24.6, 52.3);
    ctx.lineTo(23.0, 52.9);
    ctx.bezierCurveTo(22.8, 53.0, 22.6, 52.8, 22.7, 52.6);
    ctx.bezierCurveTo(23.0, 50.4, 23.1, 48.5, 23.0, 47.0);
    ctx.bezierCurveTo(23.0, 46.7, 22.4, 46.7, 22.4, 47.0);
    ctx.bezierCurveTo(22.3, 48.9, 22.0, 51.0, 21.5, 53.3);
    ctx.bezierCurveTo(21.4, 53.4, 21.4, 53.5, 21.3, 53.5);
    ctx.lineTo(19.0, 54.3);
    ctx.bezierCurveTo(18.8, 54.4, 18.6, 54.2, 18.7, 54.0);
    ctx.bezierCurveTo(19.3, 52.0, 19.7, 50.2, 19.8, 48.7);
    ctx.bezierCurveTo(19.8, 48.4, 19.3, 48.3, 19.2, 48.6);
    ctx.bezierCurveTo(18.9, 50.2, 17.7, 53.4, 17.3, 54.5);
    ctx.bezierCurveTo(17.1, 55.0, 16.5, 55.2, 16.2, 54.8);
    ctx.bezierCurveTo(16.1, 54.7, 16.1, 54.7, 16.0, 54.6);
    ctx.lineTo(16.0, 54.5);
    ctx.lineTo(11.0, 34.3);
    ctx.bezierCurveTo(9.3, 28.1, 10.6, 22.9, 17.6, 20.8);
    ctx.bezierCurveTo(22.6, 19.3, 27.2, 22.6, 29.7, 28.8);
    ctx.bezierCurveTo(29.7, 28.8, 29.7, 28.9, 29.7, 28.9);
    ctx.lineTo(38.9, 45.1);
    ctx.lineTo(39.0, 45.4);
    ctx.bezierCurveTo(39.8, 46.8, 39.2, 47.2, 37.8, 47.7);
    ctx.closePath();
    ctx.fillStyle = "rgb(251, 62, 42)";
    ctx.fill();

    // Hands
    if (change) {
        ctx.beginPath();
        ctx.moveTo(38.0, 15.0);
        ctx.bezierCurveTo(37.8, 14.0, 37.5, 13.3, 36.9, 12.9);
        ctx.bezierCurveTo(36.7, 12.8, 36.4, 12.7, 36.1, 12.9);
        ctx.lineTo(34.2, 13.9);
        ctx.bezierCurveTo(33.9, 14.0, 33.6, 13.8, 33.6, 13.5);
        ctx.lineTo(33.5, 13.0);
        ctx.bezierCurveTo(33.5, 12.7, 33.1, 12.5, 32.8, 12.7);
        ctx.bezierCurveTo(32.0, 13.2, 31.4, 14.1, 31.3, 15.2);
        ctx.lineTo(22.2, 18.9);
        ctx.bezierCurveTo(21.5, 19.2, 21.2, 20.0, 21.5, 20.6);
        ctx.lineTo(22.3, 22.6);
        ctx.bezierCurveTo(22.6, 23.3, 23.3, 23.6, 24.0, 23.3);
        ctx.lineTo(34.4, 19.0);
        ctx.bezierCurveTo(34.6, 19.0, 34.8, 19.0, 35.0, 19.0);
        ctx.bezierCurveTo(37.0, 18.8, 38.4, 16.9, 38.0, 15.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();
    } else {
        ctx.beginPath();
        ctx.moveTo(35.9, 8.5);
        ctx.bezierCurveTo(35.4, 7.6, 34.8, 7.1, 34.0, 6.9);
        ctx.bezierCurveTo(33.7, 6.8, 33.4, 6.9, 33.3, 7.1);
        ctx.lineTo(31.7, 8.9);
        ctx.bezierCurveTo(31.5, 9.1, 31.1, 9.1, 31.0, 8.8);
        ctx.lineTo(30.7, 8.3);
        ctx.bezierCurveTo(30.6, 8.0, 30.2, 7.9, 30.0, 8.2);
        ctx.bezierCurveTo(29.3, 9.1, 29.1, 10.2, 29.3, 11.3);
        ctx.lineTo(21.9, 18.4);
        ctx.bezierCurveTo(21.3, 19.0, 21.3, 19.8, 21.8, 20.4);
        ctx.lineTo(23.4, 22.0);
        ctx.bezierCurveTo(23.9, 22.6, 24.8, 22.6, 25.3, 22.1);
        ctx.lineTo(33.9, 13.8);
        ctx.bezierCurveTo(34.1, 13.8, 34.3, 13.7, 34.5, 13.6);
        ctx.bezierCurveTo(36.4, 12.6, 37.0, 10.3, 35.9, 8.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

    }

    ctx.beginPath();
    ctx.moveTo(29.3, 20.9);
    ctx.bezierCurveTo(29.4, 20.8, 29.5, 20.6, 29.4, 20.5);
    ctx.lineTo(27.7, 17.6);
    ctx.bezierCurveTo(27.6, 17.5, 27.4, 17.4, 27.3, 17.5);
    ctx.bezierCurveTo(26.6, 18.3, 25.9, 18.9, 25.3, 19.2);
    ctx.bezierCurveTo(25.2, 19.3, 25.1, 19.0, 25.2, 19.0);
    ctx.bezierCurveTo(25.8, 18.4, 26.4, 17.7, 27.0, 16.9);
    ctx.bezierCurveTo(27.1, 16.8, 27.1, 16.7, 27.0, 16.6);
    ctx.lineTo(26.7, 16.1);
    ctx.bezierCurveTo(26.6, 15.9, 26.4, 15.9, 26.3, 16.0);
    ctx.bezierCurveTo(25.9, 16.6, 25.5, 17.1, 25.1, 17.4);
    ctx.bezierCurveTo(25.0, 17.5, 24.8, 17.3, 24.9, 17.2);
    ctx.bezierCurveTo(25.3, 16.7, 25.7, 16.1, 26.1, 15.3);
    ctx.bezierCurveTo(26.1, 15.3, 26.1, 15.2, 26.1, 15.1);
    ctx.lineTo(25.9, 14.8);
    ctx.bezierCurveTo(25.7, 14.4, 25.5, 14.3, 25.1, 14.6);
    ctx.lineTo(20.1, 18.6);
    ctx.bezierCurveTo(15.5, 22.2, 17.4, 21.9, 18.2, 23.3);
    ctx.bezierCurveTo(19.2, 25.3, 21.2, 25.5, 23.2, 24.4);
    ctx.lineTo(29.3, 20.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(251, 62, 42)";
    ctx.fill();
    ctx.restore();
    ctx.restore();
}

function enemy4(x, y, change) {
    ctx.save();
    ctx.translate(x, y);
    //foot
    if (change) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(36.8, 44.6);
        ctx.bezierCurveTo(35.5, 44.6, 34.4, 45.5, 33.6, 46.8);
        ctx.bezierCurveTo(32.7, 45.9, 31.3, 45.1, 29.7, 44.8);
        ctx.bezierCurveTo(26.3, 44.1, 22.1, 45.7, 21.6, 48.1);
        ctx.bezierCurveTo(21.1, 50.4, 21.6, 52.6, 25.7, 53.6);
        ctx.bezierCurveTo(28.2, 54.2, 31.7, 53.5, 33.7, 52.1);
        ctx.bezierCurveTo(34.0, 52.6, 34.4, 53.0, 34.9, 53.2);
        ctx.bezierCurveTo(35.2, 53.3, 35.6, 53.2, 35.6, 52.8);
        ctx.lineTo(37.3, 45.2);
        ctx.bezierCurveTo(37.3, 44.9, 37.1, 44.6, 36.8, 44.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();
        // 1//

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(13.0, 27.0);
        ctx.bezierCurveTo(12.9, 25.8, 11.8, 24.9, 10.5, 25.1);
        ctx.bezierCurveTo(9.3, 25.2, 8.4, 26.3, 8.5, 27.6);
        ctx.bezierCurveTo(8.7, 28.8, 9.8, 29.7, 11.0, 29.6);
        ctx.bezierCurveTo(12.3, 29.4, 13.2, 28.3, 13.0, 27.0);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(8.5, 29.0);
        ctx.bezierCurveTo(7.4, 29.1, 6.7, 30.1, 6.8, 31.1);
        ctx.bezierCurveTo(6.9, 31.9, 7.3, 32.4, 8.0, 32.7);
        ctx.bezierCurveTo(7.7, 32.6, 7.5, 32.6, 7.2, 32.6);
        ctx.bezierCurveTo(6.3, 32.7, 5.6, 33.5, 5.7, 34.5);
        ctx.bezierCurveTo(5.8, 35.2, 6.4, 35.8, 7.0, 35.9);
        ctx.bezierCurveTo(6.9, 35.9, 6.8, 35.9, 6.7, 35.9);
        ctx.bezierCurveTo(5.9, 36.0, 5.3, 36.7, 5.4, 37.5);
        ctx.bezierCurveTo(5.5, 38.3, 7.0, 39.3, 7.0, 39.3);
        ctx.bezierCurveTo(7.0, 39.3, 8.3, 38.0, 8.3, 37.2);
        ctx.bezierCurveTo(8.2, 36.5, 7.7, 36.1, 7.1, 35.9);
        ctx.bezierCurveTo(7.3, 36.0, 7.4, 36.0, 7.6, 35.9);
        ctx.bezierCurveTo(8.5, 35.8, 9.2, 35.0, 9.1, 34.1);
        ctx.bezierCurveTo(9.0, 33.5, 8.6, 33.0, 8.0, 32.7);
        ctx.bezierCurveTo(8.3, 32.8, 8.6, 32.9, 8.9, 32.8);
        ctx.bezierCurveTo(10.0, 32.7, 10.7, 31.8, 10.6, 30.7);
        ctx.bezierCurveTo(10.5, 29.6, 9.5, 28.9, 8.5, 29.0);
        ctx.closePath();
        ctx.fill();

        // 1// cloth
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(31.7, 45.7);
        ctx.lineTo(22.6, 52.4);
        ctx.lineTo(17.3, 54.8);
        ctx.bezierCurveTo(14.2, 55.7, 11.2, 53.3, 11.4, 50.1);
        ctx.lineTo(12.2, 28.9);
        ctx.bezierCurveTo(12.3, 27.4, 13.4, 26.2, 14.9, 25.8);
        ctx.lineTo(25.7, 24.8);
        ctx.lineTo(27.5, 31.0);
        ctx.lineTo(27.7, 31.7);
        ctx.lineTo(28.2, 33.4);
        ctx.lineTo(28.4, 34.0);
        ctx.lineTo(28.7, 35.2);
        ctx.lineTo(28.9, 35.8);
        ctx.lineTo(29.2, 36.9);
        ctx.lineTo(29.5, 37.8);
        ctx.lineTo(29.9, 39.4);
        ctx.lineTo(30.2, 40.3);
        ctx.lineTo(31.7, 45.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(85, 79, 90)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();
        ctx.beginPath();

        // 1////
        ctx.moveTo(29.8, 39.5);
        ctx.lineTo(29.3, 37.8);
        ctx.lineTo(29.1, 36.9);
        ctx.lineTo(28.8, 35.8);
        ctx.lineTo(28.6, 35.2);
        ctx.lineTo(28.3, 34.0);
        ctx.lineTo(28.1, 33.4);
        ctx.lineTo(27.6, 31.7);
        ctx.lineTo(27.5, 31.0);
        ctx.lineTo(24.0, 32.2);
        ctx.bezierCurveTo(23.7, 32.3, 23.6, 32.5, 23.7, 32.8);
        ctx.lineTo(26.4, 41.0);
        ctx.bezierCurveTo(26.5, 41.3, 26.8, 41.4, 27.1, 41.3);
        ctx.lineTo(30.0, 40.3);
        ctx.lineTo(29.8, 39.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(76, 160, 59)";
        ctx.fill();

        // 1/// yellow
        ctx.beginPath();
        ctx.moveTo(29.8, 39.5);
        ctx.lineTo(27.3, 40.3);
        ctx.bezierCurveTo(27.1, 40.4, 26.8, 40.2, 26.7, 40.0);
        ctx.lineTo(24.4, 33.3);
        ctx.bezierCurveTo(24.4, 33.0, 24.5, 32.7, 24.8, 32.7);
        ctx.lineTo(27.6, 31.7);
        ctx.lineTo(28.1, 33.4);
        ctx.lineTo(28.3, 34.0);
        ctx.lineTo(28.6, 35.2);
        ctx.lineTo(28.8, 35.8);
        ctx.lineTo(29.1, 36.9);
        ctx.lineTo(29.3, 37.8);
        ctx.lineTo(29.8, 39.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1///

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(28.1, 33.4);
        ctx.lineTo(25.9, 34.1);
        // This artwork uses an unsupported dash style
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(248, 170, 44)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1////
        ctx.beginPath();
        ctx.moveTo(28.3, 34.0);
        ctx.lineTo(26.1, 34.7);
        // This artwork uses an unsupported dash style
        ctx.stroke();

        // 1////
        ctx.beginPath();
        ctx.moveTo(29.1, 36.9);
        ctx.lineTo(27.0, 37.6);
        // This artwork uses an unsupported dash style
        ctx.stroke();

        // 1////
        ctx.beginPath();
        ctx.moveTo(29.3, 37.8);
        ctx.lineTo(27.3, 38.5);
        ctx.stroke();

        // 1////
        ctx.beginPath();
        ctx.moveTo(28.6, 35.2);
        ctx.lineTo(26.5, 35.9);
        // This artwork uses an unsupported dash style
        ctx.lineWidth = 0.3;
        ctx.stroke();

        // 1////
        ctx.beginPath();
        ctx.moveTo(28.8, 35.8);
        ctx.lineTo(26.7, 36.5);
        // This artwork uses an unsupported dash style
        ctx.stroke();

        ctx.restore();
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(21.3, 27.5);
        ctx.bezierCurveTo(21.5, 29.0, 20.4, 30.7, 18.5, 30.7);
        ctx.bezierCurveTo(17.0, 30.6, 16.1, 29.4, 16.2, 28.3);
        ctx.bezierCurveTo(16.3, 26.8, 16.7, 25.5, 18.2, 25.3);
        ctx.bezierCurveTo(19.6, 25.0, 21.0, 26.1, 21.3, 27.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(21.3, 27.5);
        ctx.bezierCurveTo(21.5, 29.0, 23.0, 30.3, 24.9, 29.7);
        ctx.bezierCurveTo(26.3, 29.2, 26.8, 27.8, 26.3, 26.8);
        ctx.bezierCurveTo(25.8, 25.4, 25.0, 24.2, 23.5, 24.4);
        ctx.bezierCurveTo(22.0, 24.7, 21.0, 26.1, 21.3, 27.5);
        ctx.closePath();
        ctx.fill();
        ctx.save();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(12.8, 1.7);
        ctx.bezierCurveTo(12.8, 1.7, 4.9, 3.1, 0.4, 8.0);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "rgb(47, 41, 52)";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(3.6, 8.1);
        ctx.bezierCurveTo(2.3, 9.0, 0.2, 8.4, 0.2, 8.4);
        ctx.bezierCurveTo(0.2, 8.4, 0.1, 6.2, 1.3, 5.2);
        ctx.bezierCurveTo(2.6, 4.2, 4.1, 4.0, 4.7, 4.8);
        ctx.bezierCurveTo(5.4, 5.6, 4.9, 7.1, 3.6, 8.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(76, 160, 59)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(3.5, 7.0);
        ctx.bezierCurveTo(1.9, 7.5, 0.0, 6.2, 0.0, 6.2);
        ctx.bezierCurveTo(0.0, 6.2, 0.8, 4.1, 2.4, 3.5);
        ctx.bezierCurveTo(4.0, 3.0, 5.6, 3.3, 5.9, 4.3);
        ctx.bezierCurveTo(6.3, 5.2, 5.2, 6.5, 3.5, 7.0);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(15.6, 1.2);
        ctx.bezierCurveTo(15.8, 2.1, 15.2, 2.9, 14.4, 3.1);
        ctx.bezierCurveTo(13.6, 3.2, 12.7, 2.7, 12.6, 1.9);
        ctx.bezierCurveTo(12.4, 1.0, 12.9, 0.2, 13.8, 0.0);
        ctx.bezierCurveTo(14.6, -0.1, 15.4, 0.4, 15.6, 1.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 170, 44)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(23.9, 8.4);
        ctx.bezierCurveTo(23.9, 8.8, 24.0, 9.2, 24.0, 9.6);
        ctx.bezierCurveTo(15.2, 6.7, 9.7, 11.5, 8.1, 13.2);
        ctx.bezierCurveTo(7.9, 12.7, 7.8, 12.3, 7.7, 11.8);
        ctx.bezierCurveTo(7.5, 10.7, 7.5, 9.6, 7.6, 8.6);
        ctx.bezierCurveTo(8.2, 5.4, 10.7, 2.7, 14.1, 2.0);
        ctx.bezierCurveTo(17.3, 1.3, 20.4, 2.6, 22.3, 5.0);
        ctx.bezierCurveTo(23.0, 6.0, 23.6, 7.1, 23.9, 8.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(9.1, 19.0);
        ctx.bezierCurveTo(9.4, 20.4, 8.6, 21.7, 7.4, 22.0);
        ctx.bezierCurveTo(6.1, 22.3, 4.9, 21.3, 4.6, 20.0);
        ctx.bezierCurveTo(4.3, 18.6, 5.1, 17.2, 6.3, 17.0);
        ctx.bezierCurveTo(7.5, 16.7, 8.8, 17.6, 9.1, 19.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(236, 209, 203)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(30.3, 14.5);
        ctx.bezierCurveTo(30.6, 15.9, 29.9, 17.2, 28.6, 17.5);
        ctx.bezierCurveTo(27.4, 17.8, 26.1, 16.9, 25.8, 15.5);
        ctx.bezierCurveTo(25.6, 14.1, 26.3, 12.7, 27.6, 12.5);
        ctx.bezierCurveTo(28.8, 12.2, 30.0, 13.1, 30.3, 14.5);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(28.4, 16.6);
        ctx.bezierCurveTo(28.7, 18.5, 28.5, 20.2, 27.9, 21.6);
        ctx.bezierCurveTo(26.5, 24.9, 23.2, 27.1, 19.5, 27.8);
        ctx.bezierCurveTo(16.1, 28.6, 12.5, 27.8, 10.0, 25.4);
        ctx.bezierCurveTo(8.8, 24.3, 7.9, 22.9, 7.3, 21.2);
        ctx.bezierCurveTo(7.1, 20.4, 6.9, 19.6, 6.8, 18.6);
        ctx.bezierCurveTo(6.1, 11.9, 9.2, 7.2, 14.9, 6.0);
        ctx.bezierCurveTo(20.7, 4.8, 26.3, 9.4, 28.0, 15.0);
        ctx.bezierCurveTo(28.2, 15.5, 28.3, 16.1, 28.4, 16.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(21.3, 18.5);
        ctx.bezierCurveTo(21.5, 19.5, 20.3, 20.7, 18.5, 21.0);
        ctx.bezierCurveTo(16.8, 21.4, 15.2, 20.9, 15.0, 19.8);
        ctx.bezierCurveTo(14.8, 19.2, 15.2, 19.2, 15.9, 19.1);
        ctx.bezierCurveTo(16.2, 19.1, 16.6, 19.1, 16.9, 19.1);
        ctx.bezierCurveTo(17.3, 19.1, 17.7, 19.1, 18.1, 19.0);
        ctx.bezierCurveTo(18.5, 18.9, 19.0, 18.8, 19.3, 18.6);
        ctx.lineTo(19.3, 18.6);
        ctx.bezierCurveTo(19.7, 18.5, 20.0, 18.3, 20.3, 18.2);
        ctx.bezierCurveTo(20.8, 18.0, 21.2, 17.9, 21.3, 18.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(14.6, 17.2);
        ctx.bezierCurveTo(14.9, 18.3, 14.1, 19.4, 13.0, 19.7);
        ctx.bezierCurveTo(11.8, 19.9, 10.7, 19.2, 10.5, 18.1);
        ctx.bezierCurveTo(10.2, 16.9, 11.0, 15.8, 12.1, 15.5);
        ctx.bezierCurveTo(13.3, 15.3, 14.4, 16.0, 14.6, 17.2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(12.3, 22.1);
        ctx.bezierCurveTo(12.7, 23.6, 11.7, 25.1, 10.2, 25.4);
        ctx.bezierCurveTo(10.1, 25.4, 10.1, 25.4, 10.0, 25.4);
        ctx.bezierCurveTo(8.8, 24.3, 7.9, 22.9, 7.3, 21.2);
        ctx.bezierCurveTo(7.7, 20.6, 8.3, 20.2, 9.1, 20.0);
        ctx.bezierCurveTo(10.6, 19.7, 12.0, 20.6, 12.3, 22.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(28.4, 16.6);
        ctx.bezierCurveTo(28.7, 18.5, 28.5, 20.2, 27.9, 21.6);
        ctx.bezierCurveTo(27.8, 21.6, 27.7, 21.7, 27.6, 21.7);
        ctx.bezierCurveTo(26.2, 22.0, 24.7, 21.1, 24.4, 19.6);
        ctx.bezierCurveTo(24.1, 18.1, 25.0, 16.6, 26.5, 16.3);
        ctx.bezierCurveTo(27.2, 16.2, 27.9, 16.3, 28.4, 16.6);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(24.6, 15.1);
        ctx.bezierCurveTo(24.9, 16.2, 24.1, 17.3, 23.0, 17.6);
        ctx.bezierCurveTo(21.8, 17.8, 20.7, 17.1, 20.5, 15.9);
        ctx.bezierCurveTo(20.2, 14.8, 20.9, 13.7, 22.1, 13.4);
        ctx.bezierCurveTo(23.2, 13.2, 24.4, 13.9, 24.6, 15.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(20.4, 11.7);
        ctx.bezierCurveTo(20.4, 11.7, 21.5, 10.8, 23.5, 11.8);
        ctx.lineWidth = 0.4;
        ctx.strokeStyle = "rgb(34, 23, 20)";
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(25.8, 6.3);
        ctx.lineTo(24.9, 9.0);
        ctx.bezierCurveTo(24.8, 9.2, 24.6, 9.3, 24.5, 9.2);
        ctx.bezierCurveTo(24.2, 9.1, 23.8, 9.0, 23.5, 8.9);
        ctx.bezierCurveTo(14.8, 6.0, 9.3, 10.8, 7.6, 12.5);
        ctx.bezierCurveTo(7.5, 12.6, 7.4, 12.7, 7.3, 12.8);
        ctx.bezierCurveTo(7.2, 12.9, 7.0, 12.9, 6.9, 12.8);
        ctx.lineTo(5.1, 10.8);
        ctx.bezierCurveTo(5.0, 10.7, 5.0, 10.6, 5.1, 10.5);
        ctx.bezierCurveTo(5.8, 9.5, 6.5, 8.6, 7.2, 7.9);
        ctx.bezierCurveTo(12.1, 2.7, 18.0, 3.2, 21.8, 4.3);
        ctx.bezierCurveTo(23.7, 4.9, 25.1, 5.6, 25.7, 5.9);
        ctx.bezierCurveTo(25.8, 6.0, 25.8, 6.2, 25.8, 6.3);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(12.3, 6.4);
        ctx.lineTo(18.3, 5.5);
        ctx.bezierCurveTo(18.3, 5.5, 19.0, 11.4, 21.5, 15.0);
        ctx.bezierCurveTo(21.6, 15.2, 21.5, 15.4, 21.3, 15.4);
        ctx.lineTo(15.7, 16.4);
        ctx.bezierCurveTo(15.3, 16.4, 14.8, 16.3, 14.6, 15.9);
        ctx.bezierCurveTo(13.8, 14.7, 12.9, 11.4, 12.3, 6.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(17.5, 7.3);
        ctx.bezierCurveTo(17.5, 7.3, 14.8, 7.2, 13.8, 7.8);
        ctx.bezierCurveTo(12.7, 8.5, 16.5, 7.7, 16.8, 8.1);
        ctx.bezierCurveTo(17.2, 8.5, 14.7, 8.5, 14.3, 8.8);
        ctx.bezierCurveTo(14.0, 9.2, 16.0, 8.7, 17.0, 9.1);
        ctx.bezierCurveTo(18.0, 9.5, 14.8, 10.2, 14.9, 10.9);
        ctx.bezierCurveTo(15.0, 11.5, 18.3, 11.3, 18.7, 12.2);
        ctx.bezierCurveTo(19.1, 13.1, 15.0, 13.8, 15.0, 13.0);
        ctx.bezierCurveTo(14.9, 12.2, 19.0, 12.6, 19.2, 13.7);
        ctx.bezierCurveTo(19.4, 14.7, 15.5, 14.6, 15.5, 14.6);
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(248, 170, 44)";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16.9, 19.1);
        ctx.bezierCurveTo(17.0, 19.7, 16.9, 20.1, 16.6, 20.1);
        ctx.bezierCurveTo(16.4, 20.2, 16.1, 19.8, 15.9, 19.1);
        ctx.bezierCurveTo(16.2, 19.1, 16.6, 19.1, 16.9, 19.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(20.3, 18.2);
        ctx.bezierCurveTo(20.4, 18.8, 20.3, 19.4, 20.0, 19.4);
        ctx.bezierCurveTo(19.8, 19.5, 19.5, 19.1, 19.3, 18.6);
        ctx.bezierCurveTo(19.7, 18.5, 20.0, 18.3, 20.3, 18.2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(18.3, 16.7);
        ctx.bezierCurveTo(18.4, 17.0, 18.2, 17.4, 17.8, 17.5);
        ctx.bezierCurveTo(17.5, 17.5, 17.2, 17.3, 17.1, 17.0);
        ctx.bezierCurveTo(17.0, 16.6, 17.2, 16.1, 17.5, 16.0);
        ctx.bezierCurveTo(17.9, 15.9, 18.2, 16.4, 18.3, 16.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();

        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(11.9, 48.4);
        ctx.bezierCurveTo(11.9, 48.4, 17.7, 48.9, 30.4, 42.8);
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = "rgb(47, 41, 52)";
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(11.9, 50.1);
        ctx.bezierCurveTo(11.9, 50.1, 20.5, 50.3, 31.0, 44.2);
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(35.4, 22.2);
        ctx.bezierCurveTo(35.8, 23.4, 35.4, 24.7, 34.3, 25.1);
        ctx.bezierCurveTo(33.2, 25.5, 32.0, 24.9, 31.6, 23.7);
        ctx.bezierCurveTo(31.1, 22.6, 31.6, 21.3, 32.6, 20.9);
        ctx.bezierCurveTo(33.7, 20.5, 34.9, 21.1, 35.4, 22.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(32.1, 21.1);
        ctx.bezierCurveTo(32.1, 21.1, 19.8, 26.7, 19.6, 26.8);
        ctx.bezierCurveTo(19.2, 27.0, 18.9, 27.3, 18.6, 27.6);
        ctx.bezierCurveTo(17.6, 28.7, 17.3, 30.3, 17.9, 31.8);
        ctx.bezierCurveTo(18.4, 33.2, 19.8, 34.2, 21.2, 34.3);
        ctx.bezierCurveTo(21.8, 34.4, 22.4, 34.3, 22.9, 34.1);
        ctx.bezierCurveTo(23.0, 34.1, 23.1, 34.1, 23.1, 34.1);
        ctx.bezierCurveTo(23.2, 34.0, 23.3, 34.0, 23.3, 34.0);
        ctx.lineTo(32.5, 30.4);
        ctx.bezierCurveTo(34.2, 29.7, 35.0, 27.8, 34.3, 26.2);
        ctx.lineTo(32.1, 21.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(75, 70, 80)";
        ctx.fill();
        ctx.restore();
        ctx.restore();
    }
    else {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(33.8, 48.3);
        ctx.bezierCurveTo(32.8, 47.8, 31.4, 48.0, 30.3, 48.8);
        ctx.bezierCurveTo(29.8, 47.7, 29.0, 46.5, 27.7, 45.6);
        ctx.bezierCurveTo(25.1, 43.5, 20.8, 43.2, 19.5, 45.0);
        ctx.bezierCurveTo(18.1, 46.8, 17.6, 48.9, 20.7, 51.4);
        ctx.bezierCurveTo(22.6, 52.9, 25.9, 53.8, 28.1, 53.4);
        ctx.bezierCurveTo(28.2, 53.9, 28.4, 54.4, 28.7, 54.8);
        ctx.bezierCurveTo(28.9, 55.1, 29.3, 55.1, 29.5, 54.8);
        ctx.lineTo(34.0, 49.0);
        ctx.bezierCurveTo(34.2, 48.7, 34.1, 48.4, 33.8, 48.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(11.8, 25.5);
        ctx.bezierCurveTo(11.5, 24.4, 10.3, 23.7, 9.1, 24.1);
        ctx.bezierCurveTo(8.0, 24.4, 7.4, 25.6, 7.7, 26.7);
        ctx.bezierCurveTo(8.0, 27.9, 9.2, 28.5, 10.4, 28.2);
        ctx.bezierCurveTo(11.5, 27.8, 12.1, 26.6, 11.8, 25.5);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(7.9, 28.1);
        ctx.bezierCurveTo(6.9, 28.4, 6.4, 29.4, 6.7, 30.3);
        ctx.bezierCurveTo(6.9, 31.0, 7.4, 31.5, 8.0, 31.6);
        ctx.bezierCurveTo(7.8, 31.6, 7.5, 31.6, 7.3, 31.6);
        ctx.bezierCurveTo(6.4, 31.9, 6.0, 32.8, 6.2, 33.6);
        ctx.bezierCurveTo(6.4, 34.3, 7.0, 34.7, 7.7, 34.7);
        ctx.bezierCurveTo(7.6, 34.7, 7.4, 34.8, 7.3, 34.8);
        ctx.bezierCurveTo(6.6, 35.0, 6.2, 35.8, 6.4, 36.5);
        ctx.bezierCurveTo(6.6, 37.2, 8.2, 37.9, 8.2, 37.9);
        ctx.bezierCurveTo(8.2, 37.9, 9.2, 36.4, 9.0, 35.7);
        ctx.bezierCurveTo(8.8, 35.1, 8.3, 34.8, 7.8, 34.7);
        ctx.bezierCurveTo(7.9, 34.7, 8.0, 34.7, 8.2, 34.7);
        ctx.bezierCurveTo(9.0, 34.4, 9.5, 33.5, 9.3, 32.7);
        ctx.bezierCurveTo(9.1, 32.1, 8.6, 31.7, 8.1, 31.6);
        ctx.bezierCurveTo(8.3, 31.7, 8.6, 31.7, 8.9, 31.6);
        ctx.bezierCurveTo(9.9, 31.3, 10.4, 30.3, 10.1, 29.3);
        ctx.bezierCurveTo(9.8, 28.4, 8.8, 27.8, 7.9, 28.1);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(29.0, 43.2);
        ctx.lineTo(20.4, 49.5);
        ctx.lineTo(15.3, 51.8);
        ctx.bezierCurveTo(12.4, 52.6, 9.6, 50.3, 9.8, 47.3);
        ctx.lineTo(10.6, 27.3);
        ctx.bezierCurveTo(10.7, 25.9, 11.7, 24.7, 13.1, 24.4);
        ctx.lineTo(23.3, 23.4);
        ctx.lineTo(25.0, 29.3);
        ctx.lineTo(25.2, 29.9);
        ctx.lineTo(25.6, 31.5);
        ctx.lineTo(25.8, 32.1);
        ctx.lineTo(26.1, 33.2);
        ctx.lineTo(26.3, 33.8);
        ctx.lineTo(26.6, 34.8);
        ctx.lineTo(26.8, 35.7);
        ctx.lineTo(27.3, 37.2);
        ctx.lineTo(27.5, 38.1);
        ctx.lineTo(29.0, 43.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(85, 79, 90)";
        ctx.fill();

        ctx.save();
        ctx.beginPath();

        ctx.moveTo(27.2, 37.3);
        ctx.lineTo(26.7, 35.7);
        ctx.lineTo(26.5, 34.8);
        ctx.lineTo(26.2, 33.8);
        ctx.lineTo(26.0, 33.3);
        ctx.lineTo(25.7, 32.1);
        ctx.lineTo(25.6, 31.5);
        ctx.lineTo(25.1, 29.9);
        ctx.lineTo(24.9, 29.3);
        ctx.lineTo(21.7, 30.4);
        ctx.bezierCurveTo(21.4, 30.5, 21.3, 30.7, 21.4, 31.0);
        ctx.lineTo(24.0, 38.7);
        ctx.bezierCurveTo(24.1, 39.0, 24.3, 39.1, 24.6, 39.0);
        ctx.lineTo(27.4, 38.1);
        ctx.lineTo(27.2, 37.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(76, 160, 59)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(27.2, 37.3);
        ctx.lineTo(24.8, 38.1);
        ctx.bezierCurveTo(24.6, 38.1, 24.3, 38.0, 24.2, 37.8);
        ctx.lineTo(22.1, 31.4);
        ctx.bezierCurveTo(22.0, 31.2, 22.2, 30.9, 22.4, 30.8);
        ctx.lineTo(25.1, 29.9);
        ctx.lineTo(25.6, 31.5);
        ctx.lineTo(25.7, 32.1);
        ctx.lineTo(26.0, 33.3);
        ctx.lineTo(26.2, 33.8);
        ctx.lineTo(26.5, 34.8);
        ctx.lineTo(26.7, 35.7);
        ctx.lineTo(27.2, 37.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(25.6, 31.5);
        ctx.lineTo(23.4, 32.2);
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(248, 170, 44)";
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(25.7, 32.1);
        ctx.lineTo(23.6, 32.8);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(26.5, 34.8);
        ctx.lineTo(24.5, 35.5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(26.7, 35.7);
        ctx.lineTo(24.8, 36.4);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(26.0, 33.3);
        ctx.lineTo(24.0, 33.9);
        ctx.lineWidth = 0.3;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(26.2, 33.8);
        ctx.lineTo(24.2, 34.5);
        ctx.stroke();

        ctx.restore();
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(19.1, 26.0);
        ctx.bezierCurveTo(19.3, 27.4, 18.3, 29.0, 16.5, 29.0);
        ctx.bezierCurveTo(15.0, 28.9, 14.2, 27.8, 14.3, 26.8);
        ctx.bezierCurveTo(14.4, 25.3, 14.8, 24.1, 16.2, 23.9);
        ctx.bezierCurveTo(17.6, 23.7, 18.9, 24.6, 19.1, 26.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(19.1, 26.0);
        ctx.bezierCurveTo(19.3, 27.4, 20.8, 28.7, 22.5, 28.0);
        ctx.bezierCurveTo(23.8, 27.6, 24.3, 26.3, 23.9, 25.3);
        ctx.bezierCurveTo(23.4, 24.0, 22.6, 22.9, 21.2, 23.1);
        ctx.bezierCurveTo(19.8, 23.3, 18.9, 24.6, 19.1, 26.0);
        ctx.closePath();
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(11.1, 1.6);
        ctx.bezierCurveTo(11.1, 1.6, 4.0, 4.2, 0.7, 9.6);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "rgb(47, 41, 52)";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(3.7, 9.1);
        ctx.bezierCurveTo(2.7, 10.2, 0.6, 10.0, 0.6, 10.0);
        ctx.bezierCurveTo(0.6, 10.0, 0.1, 8.0, 1.1, 6.8);
        ctx.bezierCurveTo(2.1, 5.7, 3.4, 5.3, 4.2, 5.9);
        ctx.bezierCurveTo(4.9, 6.5, 4.7, 8.0, 3.7, 9.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(76, 160, 59)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(3.4, 8.1);
        ctx.bezierCurveTo(2.0, 8.9, 0.0, 8.0, 0.0, 8.0);
        ctx.bezierCurveTo(0.0, 8.0, 0.3, 5.9, 1.8, 5.1);
        ctx.bezierCurveTo(3.2, 4.3, 4.7, 4.4, 5.2, 5.2);
        ctx.bezierCurveTo(5.6, 6.0, 4.8, 7.3, 3.4, 8.1);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(13.7, 1.2);
        ctx.bezierCurveTo(13.9, 1.9, 13.4, 2.7, 12.6, 2.9);
        ctx.bezierCurveTo(11.8, 3.1, 11.0, 2.6, 10.9, 1.8);
        ctx.bezierCurveTo(10.7, 1.0, 11.2, 0.2, 12.0, 0.0);
        ctx.bezierCurveTo(12.8, -0.1, 13.6, 0.4, 13.7, 1.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 170, 44)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(21.5, 7.9);
        ctx.bezierCurveTo(21.6, 8.3, 21.7, 8.7, 21.7, 9.0);
        ctx.bezierCurveTo(13.4, 6.4, 8.2, 10.8, 6.7, 12.4);
        ctx.bezierCurveTo(6.5, 12.0, 6.4, 11.6, 6.3, 11.1);
        ctx.bezierCurveTo(6.1, 10.1, 6.1, 9.1, 6.2, 8.1);
        ctx.bezierCurveTo(6.8, 5.1, 9.1, 2.6, 12.3, 1.9);
        ctx.bezierCurveTo(15.3, 1.2, 18.3, 2.5, 20.1, 4.7);
        ctx.bezierCurveTo(20.8, 5.6, 21.3, 6.7, 21.5, 7.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(7.6, 18.0);
        ctx.bezierCurveTo(7.9, 19.3, 7.1, 20.5, 6.0, 20.8);
        ctx.bezierCurveTo(4.8, 21.0, 3.6, 20.2, 3.4, 18.9);
        ctx.bezierCurveTo(3.1, 17.5, 3.8, 16.3, 5.0, 16.0);
        ctx.bezierCurveTo(6.1, 15.8, 7.3, 16.7, 7.6, 18.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(236, 209, 203)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(27.7, 13.7);
        ctx.bezierCurveTo(27.9, 15.0, 27.2, 16.3, 26.0, 16.5);
        ctx.bezierCurveTo(24.9, 16.8, 23.7, 15.9, 23.4, 14.6);
        ctx.bezierCurveTo(23.2, 13.3, 23.9, 12.0, 25.0, 11.8);
        ctx.bezierCurveTo(26.2, 11.5, 27.4, 12.4, 27.7, 13.7);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(25.9, 15.7);
        ctx.bezierCurveTo(26.1, 17.5, 25.9, 19.0, 25.4, 20.4);
        ctx.bezierCurveTo(24.1, 23.5, 20.9, 25.6, 17.5, 26.3);
        ctx.bezierCurveTo(14.2, 27.0, 10.8, 26.2, 8.4, 24.0);
        ctx.bezierCurveTo(7.4, 23.0, 6.5, 21.7, 5.9, 20.1);
        ctx.bezierCurveTo(5.7, 19.3, 5.5, 18.5, 5.4, 17.6);
        ctx.bezierCurveTo(4.7, 11.2, 7.7, 6.8, 13.1, 5.7);
        ctx.bezierCurveTo(18.5, 4.5, 23.9, 8.9, 25.5, 14.1);
        ctx.bezierCurveTo(25.7, 14.7, 25.8, 15.2, 25.9, 15.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(19.1, 17.4);
        ctx.bezierCurveTo(19.3, 18.4, 18.5, 20.8, 16.9, 21.2);
        ctx.bezierCurveTo(15.2, 21.5, 13.4, 19.7, 13.1, 18.7);
        ctx.bezierCurveTo(13.0, 18.2, 13.4, 18.1, 14.0, 18.1);
        ctx.bezierCurveTo(14.3, 18.1, 14.6, 18.1, 15.0, 18.1);
        ctx.bezierCurveTo(15.3, 18.1, 15.7, 18.0, 16.1, 18.0);
        ctx.bezierCurveTo(16.5, 17.9, 16.9, 17.7, 17.3, 17.6);
        ctx.lineTo(17.3, 17.6);
        ctx.bezierCurveTo(17.6, 17.4, 17.9, 17.3, 18.1, 17.2);
        ctx.bezierCurveTo(18.7, 17.0, 19.0, 16.9, 19.1, 17.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(12.8, 16.2);
        ctx.bezierCurveTo(13.1, 17.3, 12.4, 18.4, 11.3, 18.6);
        ctx.bezierCurveTo(10.2, 18.8, 9.1, 18.1, 8.9, 17.1);
        ctx.bezierCurveTo(8.7, 16.0, 9.4, 14.9, 10.5, 14.7);
        ctx.bezierCurveTo(11.5, 14.4, 12.6, 15.1, 12.8, 16.2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(10.7, 20.9);
        ctx.bezierCurveTo(11.0, 22.3, 10.1, 23.7, 8.7, 24.0);
        ctx.bezierCurveTo(8.6, 24.0, 8.5, 24.0, 8.4, 24.0);
        ctx.bezierCurveTo(7.4, 23.0, 6.5, 21.7, 5.9, 20.1);
        ctx.bezierCurveTo(6.3, 19.5, 6.9, 19.0, 7.6, 18.9);
        ctx.bezierCurveTo(9.0, 18.6, 10.4, 19.5, 10.7, 20.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(25.9, 15.7);
        ctx.bezierCurveTo(26.1, 17.5, 25.9, 19.0, 25.4, 20.4);
        ctx.bezierCurveTo(25.3, 20.4, 25.2, 20.5, 25.1, 20.5);
        ctx.bezierCurveTo(23.7, 20.8, 22.3, 19.9, 22.0, 18.5);
        ctx.bezierCurveTo(21.7, 17.1, 22.6, 15.7, 24.0, 15.4);
        ctx.bezierCurveTo(24.7, 15.3, 25.3, 15.4, 25.9, 15.7);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(22.3, 14.2);
        ctx.bezierCurveTo(22.5, 15.3, 21.8, 16.4, 20.7, 16.6);
        ctx.bezierCurveTo(19.6, 16.8, 18.6, 16.1, 18.3, 15.1);
        ctx.bezierCurveTo(18.1, 14.0, 18.8, 12.9, 19.9, 12.7);
        ctx.bezierCurveTo(21.0, 12.5, 22.0, 13.1, 22.3, 14.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(18.3, 11.1);
        ctx.bezierCurveTo(18.3, 11.1, 19.3, 10.2, 21.2, 11.1);
        ctx.lineWidth = 0.4;
        ctx.strokeStyle = "rgb(34, 23, 20)";
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(23.4, 5.9);
        ctx.lineTo(22.5, 8.5);
        ctx.bezierCurveTo(22.4, 8.7, 22.3, 8.7, 22.1, 8.7);
        ctx.bezierCurveTo(21.8, 8.6, 21.5, 8.5, 21.2, 8.4);
        ctx.bezierCurveTo(13.0, 5.7, 7.8, 10.2, 6.2, 11.8);
        ctx.bezierCurveTo(6.1, 11.9, 6.0, 12.0, 5.9, 12.1);
        ctx.bezierCurveTo(5.8, 12.2, 5.6, 12.2, 5.5, 12.1);
        ctx.lineTo(3.9, 10.2);
        ctx.bezierCurveTo(3.8, 10.1, 3.8, 10.0, 3.8, 9.9);
        ctx.bezierCurveTo(4.5, 9.0, 5.1, 8.1, 5.8, 7.4);
        ctx.bezierCurveTo(10.5, 2.6, 16.0, 3.0, 19.6, 4.1);
        ctx.bezierCurveTo(21.4, 4.6, 22.8, 5.3, 23.2, 5.6);
        ctx.bezierCurveTo(23.4, 5.7, 23.4, 5.8, 23.4, 5.9);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(10.7, 6.1);
        ctx.lineTo(16.3, 5.2);
        ctx.bezierCurveTo(16.3, 5.2, 17.0, 10.8, 19.3, 14.2);
        ctx.bezierCurveTo(19.4, 14.3, 19.3, 14.5, 19.1, 14.6);
        ctx.lineTo(13.8, 15.5);
        ctx.bezierCurveTo(13.4, 15.5, 13.0, 15.4, 12.8, 15.0);
        ctx.bezierCurveTo(12.0, 13.9, 11.2, 10.8, 10.7, 6.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(15.5, 6.9);
        ctx.bezierCurveTo(15.5, 6.9, 13.0, 6.8, 12.0, 7.4);
        ctx.bezierCurveTo(11.1, 8.0, 14.6, 7.2, 14.9, 7.6);
        ctx.bezierCurveTo(15.2, 8.0, 12.9, 8.0, 12.6, 8.3);
        ctx.bezierCurveTo(12.2, 8.7, 14.2, 8.2, 15.1, 8.6);
        ctx.bezierCurveTo(16.0, 9.0, 13.0, 9.7, 13.1, 10.3);
        ctx.bezierCurveTo(13.1, 10.8, 16.3, 10.7, 16.6, 11.5);
        ctx.bezierCurveTo(17.0, 12.4, 13.2, 13.0, 13.1, 12.3);
        ctx.bezierCurveTo(13.1, 11.5, 17.0, 11.9, 17.2, 12.9);
        ctx.bezierCurveTo(17.3, 13.9, 13.6, 13.8, 13.6, 13.8);
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(248, 170, 44)";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(15.0, 18.1);
        ctx.bezierCurveTo(15.1, 18.6, 14.9, 19.0, 14.7, 19.0);
        ctx.bezierCurveTo(14.5, 19.1, 14.2, 18.7, 14.0, 18.1);
        ctx.bezierCurveTo(14.3, 18.1, 14.6, 18.1, 15.0, 18.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(18.1, 17.2);
        ctx.bezierCurveTo(18.3, 17.8, 18.2, 18.3, 17.9, 18.3);
        ctx.bezierCurveTo(17.7, 18.4, 17.4, 18.1, 17.3, 17.6);
        ctx.bezierCurveTo(17.6, 17.4, 17.9, 17.3, 18.1, 17.2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(16.3, 15.8);
        ctx.bezierCurveTo(16.4, 16.1, 16.2, 16.4, 15.9, 16.5);
        ctx.bezierCurveTo(15.5, 16.6, 15.2, 16.3, 15.1, 16.0);
        ctx.bezierCurveTo(15.1, 15.7, 15.2, 15.2, 15.6, 15.1);
        ctx.bezierCurveTo(15.9, 15.0, 16.2, 15.4, 16.3, 15.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(10.2, 45.7);
        ctx.bezierCurveTo(10.2, 45.7, 15.8, 46.2, 27.8, 40.4);
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = "rgb(47, 41, 52)";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(10.2, 47.3);
        ctx.bezierCurveTo(10.2, 47.3, 18.4, 47.5, 28.3, 41.7);
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(30.3, 17.5);
        ctx.bezierCurveTo(31.0, 18.5, 30.9, 19.8, 30.0, 20.4);
        ctx.bezierCurveTo(29.1, 21.0, 27.8, 20.8, 27.2, 19.8);
        ctx.bezierCurveTo(26.5, 18.9, 26.6, 17.6, 27.5, 16.9);
        ctx.bezierCurveTo(28.4, 16.3, 29.6, 16.6, 30.3, 17.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(27.0, 17.3);
        ctx.bezierCurveTo(27.0, 17.3, 17.1, 25.2, 16.9, 25.4);
        ctx.bezierCurveTo(16.6, 25.7, 16.4, 26.0, 16.2, 26.4);
        ctx.bezierCurveTo(15.6, 27.6, 15.6, 29.1, 16.5, 30.3);
        ctx.bezierCurveTo(17.4, 31.5, 18.8, 32.1, 20.2, 31.9);
        ctx.bezierCurveTo(20.7, 31.8, 21.2, 31.6, 21.7, 31.3);
        ctx.bezierCurveTo(21.7, 31.3, 21.8, 31.2, 21.9, 31.2);
        ctx.bezierCurveTo(21.9, 31.2, 22.0, 31.1, 22.0, 31.1);
        ctx.lineTo(29.6, 25.6);
        ctx.bezierCurveTo(30.9, 24.7, 31.2, 22.7, 30.2, 21.4);
        ctx.lineTo(27.0, 17.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(75, 70, 80)";
        ctx.fill();
        ctx.restore();
        ctx.restore();
        ctx.restore();
    }
}

function enemy5(x, y, change) {
    ctx.save();
    ctx.translate(x, y);
    if (change) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(34.3, 20.8);
        ctx.bezierCurveTo(32.9, 25.4, 29.8, 29.0, 25.9, 31.2);
        ctx.bezierCurveTo(25.2, 31.7, 24.2, 31.5, 23.7, 30.8);
        ctx.bezierCurveTo(22.5, 29.2, 20.8, 28.0, 18.7, 27.5);
        ctx.bezierCurveTo(15.3, 26.5, 10.2, 29.8, 8.6, 31.0);
        ctx.bezierCurveTo(8.4, 31.1, 8.1, 30.9, 8.2, 30.7);
        ctx.bezierCurveTo(8.2, 30.7, 8.2, 30.7, 8.2, 30.7);
        ctx.bezierCurveTo(9.4, 26.3, 6.8, 21.8, 2.4, 20.6);
        ctx.bezierCurveTo(1.8, 20.5, 0.9, 20.4, 0.2, 20.3);
        ctx.bezierCurveTo(-0.0, 20.3, -0.1, 19.9, 0.1, 19.8);
        ctx.bezierCurveTo(1.7, 19.1, 3.0, 17.6, 3.5, 15.8);
        ctx.bezierCurveTo(4.3, 13.0, 3.0, 10.1, 0.6, 8.7);
        ctx.bezierCurveTo(0.4, 8.6, 0.4, 8.2, 0.7, 8.1);
        ctx.bezierCurveTo(1.9, 7.7, 4.4, 6.6, 4.9, 4.9);
        ctx.bezierCurveTo(5.7, 2.5, 3.3, 0.5, 5.3, 1.1);
        ctx.lineTo(9.6, 2.2);
        ctx.bezierCurveTo(8.6, 7.6, 12.1, 14.1, 18.5, 18.2);
        ctx.bezierCurveTo(23.9, 21.7, 29.9, 22.5, 34.3, 20.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 62, 72)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(14.2, 21.8);
        ctx.bezierCurveTo(15.9, 26.3, 19.2, 29.7, 23.2, 31.7);
        ctx.bezierCurveTo(23.9, 32.1, 24.8, 31.9, 25.3, 31.2);
        ctx.bezierCurveTo(26.5, 29.5, 28.1, 28.2, 30.2, 27.6);
        ctx.bezierCurveTo(33.5, 26.5, 38.8, 29.5, 40.5, 30.5);
        ctx.bezierCurveTo(40.7, 30.6, 40.9, 30.5, 40.8, 30.3);
        ctx.bezierCurveTo(40.8, 30.3, 40.8, 30.3, 40.8, 30.3);
        ctx.bezierCurveTo(39.4, 25.9, 41.7, 21.3, 46.1, 19.9);
        ctx.bezierCurveTo(46.6, 19.7, 47.5, 19.5, 48.2, 19.4);
        ctx.bezierCurveTo(48.5, 19.4, 48.5, 19.1, 48.3, 19.0);
        ctx.bezierCurveTo(46.6, 18.3, 45.3, 16.9, 44.7, 15.1);
        ctx.bezierCurveTo(43.8, 12.3, 44.9, 9.4, 47.2, 7.9);
        ctx.bezierCurveTo(47.5, 7.7, 47.4, 7.4, 47.1, 7.3);
        ctx.bezierCurveTo(45.8, 6.9, 43.3, 5.9, 42.7, 4.3);
        ctx.bezierCurveTo(41.8, 1.9, 44.0, -0.1, 42.1, 0.5);
        ctx.lineTo(37.8, 1.9);
        ctx.bezierCurveTo(39.2, 7.2, 36.1, 13.9, 29.8, 18.4);
        ctx.bezierCurveTo(24.6, 22.1, 18.7, 23.2, 14.2, 21.8);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(43.3, 22.5);
        ctx.bezierCurveTo(43.3, 24.8, 37.0, 25.7, 32.0, 25.7);
        ctx.bezierCurveTo(27.1, 25.7, 27.6, 24.3, 27.6, 22.5);
        ctx.bezierCurveTo(27.6, 20.8, 27.0, 19.3, 31.9, 19.3);
        ctx.bezierCurveTo(36.8, 19.3, 43.3, 20.3, 43.3, 22.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(3.9, 22.6);
        ctx.bezierCurveTo(3.9, 20.3, 10.7, 19.3, 15.9, 19.3);
        ctx.bezierCurveTo(21.2, 19.3, 20.7, 20.7, 20.7, 22.5);
        ctx.bezierCurveTo(20.7, 24.3, 21.3, 25.7, 16.1, 25.7);
        ctx.bezierCurveTo(10.8, 25.8, 3.9, 24.8, 3.9, 22.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(10.5, 49.4);
        ctx.lineTo(12.2, 49.0);
        ctx.lineTo(14.7, 51.9);
        ctx.lineTo(13.4, 54.6);
        ctx.bezierCurveTo(13.2, 55.1, 12.5, 55.1, 12.3, 54.6);
        ctx.lineTo(11.8, 53.7);
        ctx.bezierCurveTo(11.7, 53.4, 11.4, 53.2, 11.1, 53.3);
        ctx.lineTo(10.4, 53.5);
        ctx.bezierCurveTo(9.8, 53.7, 9.3, 53.2, 9.6, 52.7);
        ctx.lineTo(9.9, 52.0);
        ctx.bezierCurveTo(10.1, 51.7, 10.0, 51.4, 9.7, 51.2);
        ctx.lineTo(9.1, 50.8);
        ctx.bezierCurveTo(8.6, 50.5, 8.7, 49.7, 9.2, 49.6);
        ctx.lineTo(10.5, 49.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.9, 49.3);
        ctx.bezierCurveTo(15.5, 50.1, 15.2, 50.9, 14.9, 51.6);
        ctx.bezierCurveTo(14.6, 52.7, 13.2, 52.8, 12.6, 51.9);
        ctx.bezierCurveTo(10.6, 48.9, 10.3, 44.9, 12.1, 41.5);
        ctx.bezierCurveTo(14.8, 36.7, 20.9, 35.0, 25.7, 37.6);
        ctx.bezierCurveTo(28.5, 39.2, 20.3, 40.7, 15.9, 49.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(85, 79, 90)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(38.3, 49.4);
        ctx.lineTo(36.6, 49.0);
        ctx.lineTo(34.0, 51.9);
        ctx.lineTo(35.4, 54.7);
        ctx.bezierCurveTo(35.6, 55.1, 36.3, 55.1, 36.5, 54.6);
        ctx.lineTo(36.9, 53.7);
        ctx.bezierCurveTo(37.1, 53.4, 37.4, 53.2, 37.7, 53.3);
        ctx.lineTo(38.4, 53.6);
        ctx.bezierCurveTo(38.9, 53.7, 39.4, 53.2, 39.2, 52.7);
        ctx.lineTo(38.9, 52.0);
        ctx.bezierCurveTo(38.7, 51.7, 38.8, 51.4, 39.1, 51.2);
        ctx.lineTo(39.7, 50.8);
        ctx.bezierCurveTo(40.2, 50.5, 40.1, 49.8, 39.5, 49.7);
        ctx.lineTo(38.3, 49.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(32.9, 49.3);
        ctx.bezierCurveTo(33.3, 50.1, 33.6, 50.9, 33.9, 51.7);
        ctx.bezierCurveTo(34.2, 52.7, 35.6, 52.8, 36.2, 52.0);
        ctx.bezierCurveTo(38.2, 48.9, 38.5, 44.9, 36.6, 41.5);
        ctx.bezierCurveTo(34.0, 36.7, 27.9, 35.0, 23.1, 37.6);
        ctx.bezierCurveTo(20.3, 39.2, 28.4, 40.7, 32.9, 49.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(85, 79, 90)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(35.0, 32.7);
        ctx.bezierCurveTo(35.0, 41.7, 30.3, 43.5, 24.4, 43.5);
        ctx.bezierCurveTo(18.5, 43.5, 13.7, 41.7, 13.7, 32.7);
        ctx.bezierCurveTo(13.7, 28.5, 14.8, 24.9, 16.5, 22.2);
        ctx.bezierCurveTo(17.2, 20.9, 18.1, 19.9, 19.1, 19.1);
        ctx.bezierCurveTo(20.6, 17.8, 22.5, 17.1, 24.4, 17.1);
        ctx.bezierCurveTo(26.2, 17.1, 28.0, 17.7, 29.5, 18.9);
        ctx.bezierCurveTo(30.6, 19.8, 31.7, 21.1, 32.5, 22.5);
        ctx.bezierCurveTo(34.1, 25.2, 35.0, 28.7, 35.0, 32.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(100, 94, 108)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(24.1, 35.8);
        ctx.lineTo(25.5, 36.9);
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(67, 62, 72)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1///
        ctx.beginPath();
        ctx.moveTo(24.1, 36.9);
        ctx.lineTo(25.5, 35.8);
        ctx.stroke();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(19.7, 2.7);
        ctx.bezierCurveTo(21.2, 3.2, 19.0, 6.0, 17.5, 6.0);
        ctx.bezierCurveTo(16.0, 6.0, 15.1, 4.5, 15.1, 2.7);
        ctx.bezierCurveTo(15.1, 1.7, 15.6, 0.8, 16.0, 0.2);
        ctx.bezierCurveTo(16.2, -0.1, 16.7, -0.0, 16.7, 0.3);
        ctx.bezierCurveTo(17.0, 1.1, 17.7, 2.1, 19.7, 2.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 62, 72)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(28.5, 2.7);
        ctx.bezierCurveTo(27.0, 3.2, 29.2, 6.0, 30.7, 6.0);
        ctx.bezierCurveTo(32.2, 6.0, 33.1, 4.5, 33.1, 2.7);
        ctx.bezierCurveTo(33.1, 1.7, 32.6, 0.8, 32.1, 0.2);
        ctx.bezierCurveTo(31.9, -0.1, 31.5, -0.0, 31.4, 0.3);
        ctx.bezierCurveTo(31.2, 1.1, 30.5, 2.1, 28.5, 2.7);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(33.8, 11.1);
        ctx.bezierCurveTo(33.8, 12.2, 33.6, 13.2, 33.3, 14.2);
        ctx.bezierCurveTo(32.6, 16.1, 31.2, 17.8, 29.5, 18.9);
        ctx.bezierCurveTo(27.9, 19.9, 26.1, 20.5, 24.1, 20.5);
        ctx.bezierCurveTo(22.3, 20.5, 20.5, 20.0, 19.1, 19.1);
        ctx.bezierCurveTo(17.6, 18.2, 16.4, 17.0, 15.5, 15.5);
        ctx.bezierCurveTo(14.8, 14.2, 14.4, 12.7, 14.4, 11.1);
        ctx.bezierCurveTo(14.4, 7.2, 16.8, 3.9, 20.3, 2.5);
        ctx.bezierCurveTo(21.4, 2.0, 22.7, 1.7, 24.1, 1.7);
        ctx.bezierCurveTo(25.4, 1.7, 26.7, 2.0, 27.9, 2.4);
        ctx.bezierCurveTo(31.4, 3.9, 33.8, 7.2, 33.8, 11.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(27.6, 12.8);
        ctx.bezierCurveTo(27.6, 14.0, 26.1, 14.9, 24.2, 14.9);
        ctx.bezierCurveTo(22.3, 14.9, 20.7, 14.0, 20.7, 12.8);
        ctx.bezierCurveTo(20.7, 12.2, 21.1, 12.2, 21.8, 12.4);
        ctx.bezierCurveTo(22.2, 12.4, 22.5, 12.5, 22.9, 12.6);
        ctx.bezierCurveTo(23.3, 12.7, 23.7, 12.7, 24.2, 12.7);
        ctx.bezierCurveTo(24.7, 12.7, 25.1, 12.6, 25.5, 12.6);
        ctx.lineTo(25.5, 12.6);
        ctx.bezierCurveTo(25.9, 12.5, 26.3, 12.4, 26.6, 12.3);
        ctx.bezierCurveTo(27.2, 12.2, 27.6, 12.3, 27.6, 12.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 44, 36)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.7, 10.0);
        ctx.bezierCurveTo(21.7, 11.0, 20.9, 11.7, 20.0, 11.7);
        ctx.bezierCurveTo(19.0, 11.7, 18.3, 11.0, 18.3, 10.0);
        ctx.bezierCurveTo(18.3, 9.1, 19.0, 8.3, 20.0, 8.3);
        ctx.bezierCurveTo(20.9, 8.3, 21.7, 9.1, 21.7, 10.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(29.9, 10.0);
        ctx.bezierCurveTo(29.9, 11.0, 29.2, 11.7, 28.3, 11.7);
        ctx.bezierCurveTo(27.3, 11.7, 26.6, 11.0, 26.6, 10.0);
        ctx.bezierCurveTo(26.6, 9.1, 27.3, 8.3, 28.3, 8.3);
        ctx.bezierCurveTo(29.2, 8.3, 29.9, 9.1, 29.9, 10.0);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.9, 12.6);
        ctx.bezierCurveTo(22.8, 13.1, 22.6, 13.6, 22.4, 13.6);
        ctx.bezierCurveTo(22.1, 13.6, 21.9, 13.0, 21.8, 12.4);
        ctx.bezierCurveTo(22.2, 12.4, 22.5, 12.5, 22.9, 12.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(26.6, 12.3);
        ctx.bezierCurveTo(26.6, 13.0, 26.3, 13.6, 26.1, 13.6);
        ctx.bezierCurveTo(25.8, 13.6, 25.6, 13.1, 25.5, 12.6);
        ctx.bezierCurveTo(25.9, 12.5, 26.3, 12.4, 26.6, 12.3);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(50.0, 9.2);
        ctx.lineTo(50.0, 9.2);
        ctx.lineTo(49.6, 8.0);
        ctx.lineTo(48.7, 9.0);
        ctx.lineTo(48.7, 9.0);
        ctx.lineTo(47.1, 10.5);
        ctx.lineTo(48.4, 10.2);
        ctx.lineTo(47.9, 12.9);
        ctx.bezierCurveTo(47.5, 14.6, 46.2, 15.8, 44.3, 15.5);
        ctx.lineTo(44.2, 15.5);
        ctx.bezierCurveTo(43.0, 15.2, 42.3, 14.2, 42.5, 13.1);
        ctx.lineTo(43.9, 6.1);
        ctx.lineTo(45.0, 6.9);
        ctx.lineTo(44.1, 5.0);
        ctx.lineTo(44.1, 4.9);
        ctx.lineTo(43.7, 3.6);
        ctx.lineTo(42.8, 4.6);
        ctx.lineTo(42.7, 4.7);
        ctx.lineTo(41.2, 6.1);
        ctx.lineTo(42.4, 5.8);
        ctx.lineTo(41.0, 12.8);
        ctx.bezierCurveTo(40.8, 13.9, 39.7, 14.6, 38.6, 14.3);
        ctx.lineTo(38.6, 14.3);
        ctx.bezierCurveTo(36.7, 13.9, 36.0, 12.3, 36.3, 10.5);
        ctx.lineTo(36.8, 7.9);
        ctx.lineTo(37.9, 8.6);
        ctx.lineTo(37.1, 6.7);
        ctx.lineTo(37.0, 6.6);
        ctx.lineTo(36.6, 5.3);
        ctx.lineTo(35.7, 6.3);
        ctx.lineTo(35.6, 6.4);
        ctx.lineTo(34.1, 7.9);
        ctx.lineTo(35.4, 7.6);
        ctx.lineTo(34.8, 10.6);
        ctx.bezierCurveTo(34.3, 13.0, 35.6, 15.3, 38.2, 15.8);
        ctx.lineTo(38.2, 15.8);
        ctx.bezierCurveTo(39.4, 16.1, 40.2, 17.2, 39.9, 18.3);
        ctx.lineTo(34.5, 45.5);
        ctx.bezierCurveTo(34.4, 45.7, 34.6, 45.9, 34.8, 46.0);
        ctx.lineTo(35.4, 46.1);
        ctx.bezierCurveTo(35.6, 46.1, 35.9, 46.0, 35.9, 45.8);
        ctx.lineTo(41.4, 18.6);
        ctx.bezierCurveTo(41.6, 17.5, 42.8, 16.8, 44.0, 17.0);
        ctx.lineTo(44.0, 17.0);
        ctx.bezierCurveTo(46.6, 17.5, 48.6, 15.9, 49.1, 13.5);
        ctx.lineTo(49.7, 10.5);
        ctx.lineTo(49.8, 10.5);
        ctx.lineTo(50.9, 11.2);
        ctx.lineTo(50.0, 9.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(27.9, 2.4);
        ctx.bezierCurveTo(24.6, 5.8, 21.5, 3.6, 20.3, 2.5);
        ctx.bezierCurveTo(21.4, 2.0, 22.7, 1.7, 24.1, 1.7);
        ctx.bezierCurveTo(25.4, 1.7, 26.7, 2.0, 27.9, 2.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 62, 72)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(41.8, 19.9);
        ctx.bezierCurveTo(41.8, 19.9, 41.7, 19.9, 41.6, 20.0);
        ctx.bezierCurveTo(41.4, 19.9, 41.1, 20.0, 40.8, 20.0);
        ctx.bezierCurveTo(40.0, 20.3, 39.5, 20.9, 39.7, 21.4);
        ctx.bezierCurveTo(39.7, 21.5, 39.8, 21.6, 39.8, 21.6);
        ctx.bezierCurveTo(39.7, 21.8, 39.6, 22.0, 39.6, 22.2);
        ctx.bezierCurveTo(39.6, 22.4, 39.7, 22.6, 39.8, 22.7);
        ctx.bezierCurveTo(39.8, 22.7, 39.8, 22.7, 39.8, 22.7);
        ctx.bezierCurveTo(39.7, 22.9, 39.6, 23.1, 39.6, 23.3);
        ctx.bezierCurveTo(39.6, 23.5, 39.7, 23.7, 39.9, 23.9);
        ctx.bezierCurveTo(39.9, 24.0, 39.9, 24.0, 39.8, 24.1);
        ctx.bezierCurveTo(39.7, 24.6, 40.3, 25.2, 41.0, 25.4);
        ctx.bezierCurveTo(41.2, 25.4, 41.4, 25.4, 41.6, 25.4);
        ctx.bezierCurveTo(41.7, 25.4, 41.7, 25.4, 41.8, 25.4);
        ctx.bezierCurveTo(42.9, 25.4, 43.8, 24.2, 43.8, 22.7);
        ctx.bezierCurveTo(43.8, 21.2, 42.9, 19.9, 41.8, 19.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(32.8, 21.8);
        ctx.bezierCurveTo(31.1, 24.4, 27.7, 21.2, 24.4, 21.2);
        ctx.bezierCurveTo(20.9, 21.2, 18.3, 24.3, 16.7, 21.4);
        ctx.bezierCurveTo(17.4, 20.2, 18.1, 19.9, 19.1, 19.1);
        ctx.bezierCurveTo(20.5, 20.0, 22.3, 20.5, 24.1, 20.5);
        ctx.bezierCurveTo(26.1, 20.5, 27.9, 19.9, 29.5, 18.9);
        ctx.bezierCurveTo(30.6, 19.8, 31.9, 20.3, 32.8, 21.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 44, 36)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(23.7, 21.1);
        ctx.bezierCurveTo(23.7, 21.1, 22.3, 24.9, 23.3, 28.8);
        ctx.lineWidth = 0.3;
        ctx.strokeStyle = "rgb(192, 44, 36)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(24.8, 21.1);
        ctx.bezierCurveTo(24.8, 21.1, 26.2, 24.9, 25.2, 28.8);
        ctx.stroke();
        ctx.restore();
    }
    else {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(35.7, 12.9);
        ctx.bezierCurveTo(36.7, 17.6, 35.7, 22.3, 33.3, 26.1);
        ctx.bezierCurveTo(32.9, 26.9, 32.0, 27.1, 31.2, 26.8);
        ctx.bezierCurveTo(29.4, 26.0, 27.3, 25.8, 25.2, 26.3);
        ctx.bezierCurveTo(21.8, 27.1, 18.9, 32.4, 18.0, 34.2);
        ctx.bezierCurveTo(17.9, 34.4, 17.6, 34.4, 17.5, 34.1);
        ctx.bezierCurveTo(17.5, 34.1, 17.5, 34.1, 17.5, 34.1);
        ctx.bezierCurveTo(16.5, 29.7, 12.0, 27.0, 7.6, 28.1);
        ctx.bezierCurveTo(7.0, 28.2, 6.2, 28.6, 5.6, 28.8);
        ctx.bezierCurveTo(5.3, 28.9, 5.1, 28.7, 5.3, 28.5);
        ctx.bezierCurveTo(6.3, 27.0, 6.7, 25.2, 6.3, 23.3);
        ctx.bezierCurveTo(5.6, 20.5, 3.1, 18.5, 0.3, 18.5);
        ctx.bezierCurveTo(0.0, 18.5, -0.1, 18.1, 0.1, 17.9);
        ctx.bezierCurveTo(1.0, 16.9, 2.6, 14.8, 2.3, 13.1);
        ctx.bezierCurveTo(1.8, 10.6, -1.2, 10.0, 0.8, 9.5);
        ctx.lineTo(5.2, 8.5);
        ctx.bezierCurveTo(6.8, 13.6, 13.0, 17.7, 20.6, 18.3);
        ctx.bezierCurveTo(27.0, 18.7, 32.7, 16.5, 35.7, 12.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 62, 72)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.1, 13.2);
        ctx.bezierCurveTo(20.2, 17.9, 21.2, 22.6, 23.6, 26.4);
        ctx.bezierCurveTo(24.0, 27.1, 24.9, 27.4, 25.7, 27.0);
        ctx.bezierCurveTo(27.5, 26.2, 29.6, 26.0, 31.7, 26.5);
        ctx.bezierCurveTo(35.2, 27.3, 38.0, 32.6, 39.0, 34.4);
        ctx.bezierCurveTo(39.1, 34.6, 39.3, 34.6, 39.4, 34.4);
        ctx.bezierCurveTo(39.4, 34.3, 39.4, 34.3, 39.4, 34.3);
        ctx.bezierCurveTo(40.4, 29.9, 44.9, 27.2, 49.3, 28.2);
        ctx.bezierCurveTo(49.9, 28.4, 50.7, 28.7, 51.4, 29.0);
        ctx.bezierCurveTo(51.6, 29.1, 51.8, 28.8, 51.7, 28.6);
        ctx.bezierCurveTo(50.6, 27.2, 50.2, 25.3, 50.6, 23.5);
        ctx.bezierCurveTo(51.3, 20.6, 53.8, 18.7, 56.6, 18.6);
        ctx.bezierCurveTo(56.8, 18.6, 57.0, 18.3, 56.8, 18.1);
        ctx.bezierCurveTo(55.9, 17.0, 54.3, 14.9, 54.6, 13.3);
        ctx.bezierCurveTo(55.1, 10.7, 58.0, 10.1, 56.0, 9.7);
        ctx.lineTo(51.7, 8.6);
        ctx.bezierCurveTo(50.1, 13.8, 43.9, 17.9, 36.2, 18.5);
        ctx.bezierCurveTo(29.9, 18.9, 24.2, 16.8, 21.1, 13.2);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(47.5, 22.5);
        ctx.bezierCurveTo(47.5, 24.8, 41.2, 25.7, 36.2, 25.7);
        ctx.bezierCurveTo(31.3, 25.7, 31.8, 24.3, 31.8, 22.5);
        ctx.bezierCurveTo(31.8, 20.8, 31.2, 19.3, 36.1, 19.3);
        ctx.bezierCurveTo(41.1, 19.3, 47.5, 20.3, 47.5, 22.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(8.1, 22.6);
        ctx.bezierCurveTo(8.1, 20.3, 14.9, 19.3, 20.1, 19.3);
        ctx.bezierCurveTo(25.4, 19.3, 24.9, 20.7, 24.9, 22.5);
        ctx.bezierCurveTo(24.9, 24.3, 25.5, 25.7, 20.3, 25.7);
        ctx.bezierCurveTo(15.0, 25.8, 8.1, 24.8, 8.1, 22.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(14.7, 49.4);
        ctx.lineTo(16.4, 49.0);
        ctx.lineTo(18.9, 51.9);
        ctx.lineTo(17.6, 54.6);
        ctx.bezierCurveTo(17.4, 55.1, 16.7, 55.1, 16.5, 54.6);
        ctx.lineTo(16.0, 53.7);
        ctx.bezierCurveTo(15.9, 53.4, 15.6, 53.2, 15.3, 53.3);
        ctx.lineTo(14.6, 53.5);
        ctx.bezierCurveTo(14.0, 53.7, 13.5, 53.2, 13.8, 52.7);
        ctx.lineTo(14.1, 52.0);
        ctx.bezierCurveTo(14.3, 51.7, 14.2, 51.4, 13.9, 51.2);
        ctx.lineTo(13.3, 50.8);
        ctx.bezierCurveTo(12.8, 50.5, 12.9, 49.7, 13.4, 49.6);
        ctx.lineTo(14.7, 49.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(20.1, 49.3);
        ctx.bezierCurveTo(19.7, 50.1, 19.4, 50.9, 19.1, 51.6);
        ctx.bezierCurveTo(18.8, 52.7, 17.4, 52.8, 16.8, 51.9);
        ctx.bezierCurveTo(14.8, 48.9, 14.5, 44.9, 16.3, 41.5);
        ctx.bezierCurveTo(19.0, 36.7, 25.1, 35.0, 29.9, 37.6);
        ctx.bezierCurveTo(32.7, 39.2, 24.5, 40.7, 20.1, 49.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(85, 79, 90)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(42.5, 49.4);
        ctx.lineTo(40.8, 49.0);
        ctx.lineTo(38.2, 51.9);
        ctx.lineTo(39.6, 54.7);
        ctx.bezierCurveTo(39.8, 55.1, 40.5, 55.1, 40.7, 54.6);
        ctx.lineTo(41.1, 53.7);
        ctx.bezierCurveTo(41.3, 53.4, 41.6, 53.2, 41.9, 53.3);
        ctx.lineTo(42.6, 53.6);
        ctx.bezierCurveTo(43.1, 53.7, 43.6, 53.2, 43.4, 52.7);
        ctx.lineTo(43.1, 52.0);
        ctx.bezierCurveTo(42.9, 51.7, 43.0, 51.4, 43.3, 51.2);
        ctx.lineTo(43.9, 50.8);
        ctx.bezierCurveTo(44.4, 50.5, 44.3, 49.8, 43.7, 49.7);
        ctx.lineTo(42.5, 49.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(37.1, 49.3);
        ctx.bezierCurveTo(37.5, 50.1, 37.8, 50.9, 38.1, 51.7);
        ctx.bezierCurveTo(38.4, 52.7, 39.8, 52.8, 40.4, 52.0);
        ctx.bezierCurveTo(42.4, 48.9, 42.7, 44.9, 40.8, 41.5);
        ctx.bezierCurveTo(38.2, 36.7, 32.1, 35.0, 27.3, 37.6);
        ctx.bezierCurveTo(24.5, 39.2, 32.6, 40.7, 37.1, 49.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(85, 79, 90)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(39.2, 32.7);
        ctx.bezierCurveTo(39.2, 41.7, 34.5, 43.5, 28.6, 43.5);
        ctx.bezierCurveTo(22.7, 43.5, 18.0, 41.7, 18.0, 32.7);
        ctx.bezierCurveTo(18.0, 28.5, 19.0, 24.9, 20.7, 22.2);
        ctx.bezierCurveTo(21.4, 20.9, 22.3, 19.9, 23.3, 19.1);
        ctx.bezierCurveTo(24.8, 17.8, 26.7, 17.1, 28.6, 17.1);
        ctx.bezierCurveTo(30.4, 17.1, 32.2, 17.7, 33.7, 18.9);
        ctx.bezierCurveTo(34.8, 19.8, 35.9, 21.1, 36.7, 22.5);
        ctx.bezierCurveTo(38.3, 25.2, 39.2, 28.7, 39.2, 32.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(100, 94, 108)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(28.3, 35.8);
        ctx.lineTo(29.7, 36.9);
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(67, 62, 72)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1///
        ctx.beginPath();
        ctx.moveTo(28.3, 36.9);
        ctx.lineTo(29.7, 35.8);
        ctx.stroke();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(23.9, 2.7);
        ctx.bezierCurveTo(25.4, 3.2, 23.2, 6.0, 21.7, 6.0);
        ctx.bezierCurveTo(20.2, 6.0, 19.3, 4.5, 19.3, 2.7);
        ctx.bezierCurveTo(19.3, 1.7, 19.8, 0.8, 20.2, 0.2);
        ctx.bezierCurveTo(20.4, -0.1, 20.9, -0.0, 20.9, 0.3);
        ctx.bezierCurveTo(21.2, 1.1, 21.9, 2.1, 23.9, 2.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 62, 72)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(32.7, 2.7);
        ctx.bezierCurveTo(31.2, 3.2, 33.4, 6.0, 34.9, 6.0);
        ctx.bezierCurveTo(36.4, 6.0, 37.3, 4.5, 37.3, 2.7);
        ctx.bezierCurveTo(37.3, 1.7, 36.8, 0.8, 36.3, 0.2);
        ctx.bezierCurveTo(36.1, -0.1, 35.7, -0.0, 35.6, 0.3);
        ctx.bezierCurveTo(35.4, 1.1, 34.7, 2.1, 32.7, 2.7);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(38.0, 11.1);
        ctx.bezierCurveTo(38.0, 12.2, 37.8, 13.2, 37.5, 14.2);
        ctx.bezierCurveTo(36.8, 16.1, 35.4, 17.8, 33.7, 18.9);
        ctx.bezierCurveTo(32.1, 19.9, 30.3, 20.5, 28.3, 20.5);
        ctx.bezierCurveTo(26.5, 20.5, 24.7, 20.0, 23.3, 19.1);
        ctx.bezierCurveTo(21.8, 18.2, 20.6, 17.0, 19.7, 15.5);
        ctx.bezierCurveTo(19.0, 14.2, 18.6, 12.7, 18.6, 11.1);
        ctx.bezierCurveTo(18.6, 7.2, 21.0, 3.9, 24.5, 2.5);
        ctx.bezierCurveTo(25.6, 2.0, 26.9, 1.7, 28.3, 1.7);
        ctx.bezierCurveTo(29.6, 1.7, 30.9, 2.0, 32.1, 2.4);
        ctx.bezierCurveTo(35.6, 3.9, 38.0, 7.2, 38.0, 11.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(31.8, 12.8);
        ctx.bezierCurveTo(31.8, 14.0, 30.3, 15.7, 28.4, 15.7);
        ctx.bezierCurveTo(26.5, 15.7, 24.9, 14.0, 24.9, 12.8);
        ctx.bezierCurveTo(24.9, 12.2, 25.3, 12.2, 26.0, 12.4);
        ctx.bezierCurveTo(26.4, 12.4, 26.7, 12.5, 27.1, 12.6);
        ctx.bezierCurveTo(27.5, 12.7, 27.9, 12.7, 28.4, 12.7);
        ctx.bezierCurveTo(28.9, 12.7, 29.3, 12.6, 29.7, 12.6);
        ctx.lineTo(29.7, 12.6);
        ctx.bezierCurveTo(30.1, 12.5, 30.5, 12.4, 30.8, 12.3);
        ctx.bezierCurveTo(31.4, 12.2, 31.8, 12.3, 31.8, 12.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 44, 36)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(25.9, 10.4);
        ctx.bezierCurveTo(25.7, 11.3, 24.9, 11.9, 23.9, 11.7);
        ctx.bezierCurveTo(23.0, 11.5, 22.4, 10.6, 22.6, 9.7);
        ctx.bezierCurveTo(22.8, 8.8, 23.5, 9.2, 24.4, 9.4);
        ctx.bezierCurveTo(25.3, 9.6, 26.1, 9.4, 25.9, 10.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(30.8, 10.4);
        ctx.bezierCurveTo(31.0, 11.3, 31.9, 11.9, 32.8, 11.7);
        ctx.bezierCurveTo(33.7, 11.5, 34.3, 10.6, 34.1, 9.7);
        ctx.bezierCurveTo(33.9, 8.8, 33.3, 9.2, 32.3, 9.4);
        ctx.bezierCurveTo(31.4, 9.6, 30.6, 9.4, 30.8, 10.4);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(27.1, 12.6);
        ctx.bezierCurveTo(27.0, 13.1, 26.8, 13.6, 26.6, 13.6);
        ctx.bezierCurveTo(26.3, 13.6, 26.1, 13.0, 26.0, 12.4);
        ctx.bezierCurveTo(26.4, 12.4, 26.7, 12.5, 27.1, 12.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(30.8, 12.3);
        ctx.bezierCurveTo(30.8, 13.0, 30.5, 13.6, 30.3, 13.6);
        ctx.bezierCurveTo(30.0, 13.6, 29.8, 13.1, 29.7, 12.6);
        ctx.bezierCurveTo(30.1, 12.5, 30.5, 12.4, 30.8, 12.3);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(54.2, 9.2);
        ctx.lineTo(54.2, 9.2);
        ctx.lineTo(53.8, 8.0);
        ctx.lineTo(52.9, 9.0);
        ctx.lineTo(52.9, 9.0);
        ctx.lineTo(51.3, 10.5);
        ctx.lineTo(52.6, 10.2);
        ctx.lineTo(52.1, 12.9);
        ctx.bezierCurveTo(51.7, 14.6, 50.4, 15.8, 48.5, 15.5);
        ctx.lineTo(48.4, 15.5);
        ctx.bezierCurveTo(47.2, 15.2, 46.5, 14.2, 46.7, 13.1);
        ctx.lineTo(48.1, 6.1);
        ctx.lineTo(49.2, 6.9);
        ctx.lineTo(48.3, 5.0);
        ctx.lineTo(48.3, 4.9);
        ctx.lineTo(47.9, 3.6);
        ctx.lineTo(47.0, 4.6);
        ctx.lineTo(46.9, 4.7);
        ctx.lineTo(45.4, 6.1);
        ctx.lineTo(46.6, 5.8);
        ctx.lineTo(45.2, 12.8);
        ctx.bezierCurveTo(45.0, 13.9, 43.9, 14.6, 42.8, 14.3);
        ctx.lineTo(42.8, 14.3);
        ctx.bezierCurveTo(40.9, 13.9, 40.2, 12.3, 40.5, 10.5);
        ctx.lineTo(41.0, 7.9);
        ctx.lineTo(42.1, 8.6);
        ctx.lineTo(41.3, 6.7);
        ctx.lineTo(41.2, 6.6);
        ctx.lineTo(40.8, 5.3);
        ctx.lineTo(39.9, 6.3);
        ctx.lineTo(39.8, 6.4);
        ctx.lineTo(38.3, 7.9);
        ctx.lineTo(39.6, 7.6);
        ctx.lineTo(39.0, 10.6);
        ctx.bezierCurveTo(38.5, 13.0, 39.8, 15.3, 42.4, 15.8);
        ctx.lineTo(42.4, 15.8);
        ctx.bezierCurveTo(43.6, 16.1, 44.4, 17.2, 44.1, 18.3);
        ctx.lineTo(38.7, 45.5);
        ctx.bezierCurveTo(38.6, 45.7, 38.8, 45.9, 39.0, 46.0);
        ctx.lineTo(39.6, 46.1);
        ctx.bezierCurveTo(39.8, 46.1, 40.1, 46.0, 40.1, 45.8);
        ctx.lineTo(45.6, 18.6);
        ctx.bezierCurveTo(45.8, 17.5, 47.0, 16.8, 48.2, 17.0);
        ctx.lineTo(48.2, 17.0);
        ctx.bezierCurveTo(50.8, 17.5, 52.8, 15.9, 53.3, 13.5);
        ctx.lineTo(53.9, 10.5);
        ctx.lineTo(54.0, 10.5);
        ctx.lineTo(55.1, 11.2);
        ctx.lineTo(54.2, 9.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(32.1, 2.4);
        ctx.bezierCurveTo(28.8, 5.8, 25.7, 3.6, 24.5, 2.5);
        ctx.bezierCurveTo(25.6, 2.0, 26.9, 1.7, 28.3, 1.7);
        ctx.bezierCurveTo(29.6, 1.7, 30.9, 2.0, 32.1, 2.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 62, 72)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(46.0, 19.9);
        ctx.bezierCurveTo(46.0, 19.9, 45.9, 19.9, 45.8, 20.0);
        ctx.bezierCurveTo(45.6, 19.9, 45.3, 20.0, 45.0, 20.0);
        ctx.bezierCurveTo(44.2, 20.3, 43.7, 20.9, 43.9, 21.4);
        ctx.bezierCurveTo(43.9, 21.5, 44.0, 21.6, 44.0, 21.6);
        ctx.bezierCurveTo(43.9, 21.8, 43.8, 22.0, 43.8, 22.2);
        ctx.bezierCurveTo(43.8, 22.4, 43.9, 22.6, 44.0, 22.7);
        ctx.bezierCurveTo(44.0, 22.7, 44.0, 22.7, 44.0, 22.7);
        ctx.bezierCurveTo(43.9, 22.9, 43.8, 23.1, 43.8, 23.3);
        ctx.bezierCurveTo(43.8, 23.5, 43.9, 23.7, 44.1, 23.9);
        ctx.bezierCurveTo(44.1, 24.0, 44.1, 24.0, 44.0, 24.1);
        ctx.bezierCurveTo(43.9, 24.6, 44.5, 25.2, 45.2, 25.4);
        ctx.bezierCurveTo(45.4, 25.4, 45.6, 25.4, 45.8, 25.4);
        ctx.bezierCurveTo(45.9, 25.4, 45.9, 25.4, 46.0, 25.4);
        ctx.bezierCurveTo(47.1, 25.4, 48.0, 24.2, 48.0, 22.7);
        ctx.bezierCurveTo(48.0, 21.2, 47.1, 19.9, 46.0, 19.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(37.0, 21.8);
        ctx.bezierCurveTo(35.3, 24.4, 31.9, 21.2, 28.6, 21.2);
        ctx.bezierCurveTo(25.1, 21.2, 22.5, 24.3, 20.9, 21.4);
        ctx.bezierCurveTo(21.6, 20.2, 22.3, 19.9, 23.3, 19.1);
        ctx.bezierCurveTo(24.7, 20.0, 26.5, 20.5, 28.3, 20.5);
        ctx.bezierCurveTo(30.3, 20.5, 32.1, 19.9, 33.7, 18.9);
        ctx.bezierCurveTo(34.8, 19.8, 36.1, 20.3, 37.0, 21.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 44, 36)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(27.9, 21.1);
        ctx.bezierCurveTo(27.9, 21.1, 26.5, 24.9, 27.5, 28.8);
        ctx.lineWidth = 0.3;
        ctx.strokeStyle = "rgb(192, 44, 36)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(29.0, 21.1);
        ctx.bezierCurveTo(29.0, 21.1, 30.4, 24.9, 29.4, 28.8);
        ctx.stroke();
        ctx.restore();
    }
    ctx.restore();
}

function enemy6(x, y, change) {
    ctx.save();
    ctx.translate(x, y);
    if (change) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(26.6, 41.4);
        ctx.lineTo(35.6, 50.6);
        ctx.bezierCurveTo(35.6, 50.6, 37.7, 49.3, 38.8, 50.1);
        ctx.bezierCurveTo(39.8, 50.8, 35.7, 55.2, 34.6, 55.0);
        ctx.bezierCurveTo(33.4, 54.8, 22.4, 46.0, 22.4, 46.0);
        ctx.lineTo(26.6, 41.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(18.7, 48.4);
        ctx.bezierCurveTo(16.5, 48.0, 14.9, 45.9, 15.2, 43.7);
        ctx.bezierCurveTo(15.9, 37.9, 18.2, 31.6, 16.8, 25.9);
        ctx.lineTo(26.7, 23.0);
        ctx.bezierCurveTo(26.7, 23.0, 27.9, 23.7, 28.1, 24.2);
        ctx.bezierCurveTo(30.2, 29.2, 33.4, 33.9, 36.9, 38.5);
        ctx.bezierCurveTo(38.3, 40.3, 37.9, 42.9, 36.0, 44.2);
        ctx.bezierCurveTo(29.3, 49.0, 23.0, 49.2, 18.7, 48.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 116, 27)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(24.2, 32.2);
        ctx.lineTo(21.9, 32.8);
        ctx.bezierCurveTo(20.1, 33.2, 18.7, 31.5, 18.2, 29.7);
        ctx.bezierCurveTo(18.2, 29.7, 17.1, 26.1, 20.0, 25.6);
        ctx.lineTo(23.2, 24.7);
        ctx.bezierCurveTo(26.9, 23.7, 27.5, 28.1, 27.5, 28.1);
        ctx.bezierCurveTo(27.7, 29.5, 27.6, 31.1, 24.2, 32.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(29.1, 25.0);
        ctx.bezierCurveTo(28.6, 24.1, 28.1, 23.4, 27.4, 23.0);
        ctx.bezierCurveTo(26.5, 23.7, 25.5, 24.4, 24.3, 24.8);
        ctx.bezierCurveTo(21.7, 25.7, 19.8, 25.9, 18.3, 25.8);
        ctx.bezierCurveTo(18.0, 26.5, 18.2, 27.4, 18.2, 28.3);
        ctx.bezierCurveTo(18.3, 29.6, 19.6, 31.2, 21.2, 30.7);
        ctx.bezierCurveTo(23.8, 29.9, 23.5, 27.9, 23.6, 26.5);
        ctx.bezierCurveTo(24.5, 27.5, 25.6, 29.5, 27.9, 28.6);
        ctx.bezierCurveTo(29.5, 27.9, 29.7, 26.1, 29.1, 25.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(129, 196, 200)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(27.7, 22.7);
        ctx.bezierCurveTo(27.7, 22.7, 31.0, 32.8, 21.9, 39.2);
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = "rgb(129, 196, 200)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(19.8, 49.3);
        ctx.lineTo(17.9, 49.4);
        ctx.bezierCurveTo(15.7, 49.4, 13.9, 47.7, 13.9, 45.5);
        ctx.lineTo(13.8, 41.8);
        ctx.bezierCurveTo(13.8, 39.7, 15.5, 37.9, 17.7, 37.8);
        ctx.lineTo(19.7, 37.8);
        ctx.bezierCurveTo(21.8, 37.8, 23.6, 39.5, 23.7, 41.7);
        ctx.lineTo(23.7, 45.3);
        ctx.bezierCurveTo(23.8, 47.5, 22.0, 49.3, 19.8, 49.3);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(30.7, 15.3);
        ctx.bezierCurveTo(30.3, 9.2, 23.4, 3.0, 17.3, 3.5);
        ctx.bezierCurveTo(9.9, 4.1, 6.7, 9.6, 7.1, 15.8);
        ctx.bezierCurveTo(7.1, 17.1, 7.4, 18.3, 7.9, 19.4);
        ctx.bezierCurveTo(6.6, 20.5, 5.9, 22.3, 6.2, 24.1);
        ctx.bezierCurveTo(6.2, 24.4, 6.3, 24.7, 6.4, 24.9);
        ctx.bezierCurveTo(5.2, 25.5, 4.4, 26.9, 4.6, 28.3);
        ctx.bezierCurveTo(4.6, 28.4, 4.6, 28.4, 4.7, 28.4);
        ctx.bezierCurveTo(4.4, 28.5, 4.2, 28.5, 4.0, 28.6);
        ctx.bezierCurveTo(2.9, 28.9, 2.2, 30.0, 2.3, 31.1);
        ctx.bezierCurveTo(1.9, 31.0, 1.6, 31.0, 1.2, 31.2);
        ctx.bezierCurveTo(0.1, 31.6, 0.0, 33.9, 0.0, 33.9);
        ctx.bezierCurveTo(0.0, 33.9, 1.6, 35.5, 2.7, 35.1);
        ctx.bezierCurveTo(3.5, 34.8, 4.0, 34.1, 4.1, 33.3);
        ctx.bezierCurveTo(4.5, 33.4, 5.0, 33.4, 5.6, 33.2);
        ctx.bezierCurveTo(6.6, 32.9, 7.2, 32.0, 7.2, 31.0);
        ctx.bezierCurveTo(7.6, 31.0, 7.9, 31.0, 8.3, 31.0);
        ctx.bezierCurveTo(9.7, 30.8, 10.7, 29.7, 11.0, 28.4);
        ctx.bezierCurveTo(11.3, 28.4, 11.6, 28.4, 12.0, 28.3);
        ctx.bezierCurveTo(13.8, 28.1, 15.2, 26.9, 15.8, 25.4);
        ctx.bezierCurveTo(16.8, 25.4, 17.8, 25.3, 18.7, 24.9);
        ctx.bezierCurveTo(24.4, 22.9, 31.0, 21.5, 30.7, 15.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(11.4, 21.6);
        ctx.bezierCurveTo(11.7, 22.5, 12.2, 23.4, 12.8, 24.1);
        ctx.lineTo(12.8, 24.1);
        ctx.bezierCurveTo(14.4, 26.1, 16.9, 27.0, 20.0, 26.9);
        ctx.bezierCurveTo(23.5, 26.6, 27.2, 24.9, 28.8, 22.0);
        ctx.bezierCurveTo(29.6, 20.6, 29.8, 18.8, 29.1, 16.9);
        ctx.bezierCurveTo(29.1, 16.8, 29.1, 16.8, 29.1, 16.8);
        ctx.bezierCurveTo(27.3, 11.5, 25.1, 7.4, 19.8, 7.7);
        ctx.bezierCurveTo(14.5, 8.1, 10.4, 12.8, 10.8, 18.4);
        ctx.bezierCurveTo(10.8, 19.6, 11.0, 20.6, 11.4, 21.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(18.0, 20.8);
        ctx.bezierCurveTo(18.2, 21.8, 19.6, 22.4, 21.2, 22.2);
        ctx.bezierCurveTo(22.8, 21.9, 24.0, 20.9, 23.8, 20.0);
        ctx.bezierCurveTo(23.7, 19.0, 22.5, 20.0, 20.9, 20.3);
        ctx.bezierCurveTo(19.3, 20.5, 17.9, 19.9, 18.0, 20.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(243, 126, 114)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(20.0, 18.0);
        ctx.bezierCurveTo(20.1, 18.3, 20.4, 18.5, 20.7, 18.5);
        ctx.bezierCurveTo(21.1, 18.4, 21.3, 18.1, 21.3, 17.8);
        ctx.bezierCurveTo(21.2, 17.4, 20.9, 17.0, 20.5, 17.0);
        ctx.bezierCurveTo(20.2, 17.1, 20.0, 17.6, 20.0, 18.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.7, 16.7);
        ctx.bezierCurveTo(22.8, 17.5, 23.6, 18.1, 24.5, 18.0);
        ctx.bezierCurveTo(25.3, 17.8, 25.9, 17.1, 25.8, 16.2);
        ctx.bezierCurveTo(25.6, 15.4, 24.8, 14.8, 24.0, 14.9);
        ctx.bezierCurveTo(23.1, 15.0, 22.6, 15.8, 22.7, 16.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(129, 196, 200)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.2, 17.8);
        ctx.bezierCurveTo(15.3, 18.7, 16.1, 19.3, 16.9, 19.1);
        ctx.bezierCurveTo(17.8, 19.0, 18.3, 18.2, 18.2, 17.4);
        ctx.bezierCurveTo(18.1, 16.5, 17.3, 15.9, 16.4, 16.1);
        ctx.bezierCurveTo(15.6, 16.2, 15.0, 17.0, 15.2, 17.8);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(20.5, 9.1);
        ctx.bezierCurveTo(20.5, 9.1, 27.2, 11.8, 28.2, 14.3);
        ctx.bezierCurveTo(28.2, 14.3, 27.4, 9.7, 26.2, 8.3);
        ctx.bezierCurveTo(25.0, 7.0, 16.7, 5.3, 11.4, 8.7);
        ctx.bezierCurveTo(6.1, 12.1, 10.8, 18.4, 10.8, 18.4);
        ctx.bezierCurveTo(10.8, 18.4, 18.3, 14.3, 20.5, 9.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(8.9, 20.3);
        ctx.bezierCurveTo(9.0, 21.4, 9.9, 22.2, 11.0, 22.1);
        ctx.bezierCurveTo(12.1, 22.1, 12.9, 21.2, 12.8, 20.1);
        ctx.bezierCurveTo(12.8, 19.0, 11.8, 18.2, 10.8, 18.2);
        ctx.bezierCurveTo(9.7, 18.3, 8.9, 19.2, 8.9, 20.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(10.6, 14.1);
        ctx.bezierCurveTo(10.8, 13.6, 13.3, 7.9, 18.4, 6.7);
        ctx.bezierCurveTo(20.6, 6.1, 23.1, 6.3, 24.9, 7.6);
        ctx.bezierCurveTo(23.9, 5.2, 20.5, 4.5, 17.5, 5.0);
        ctx.bezierCurveTo(11.1, 6.1, 9.8, 13.0, 10.6, 14.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 116, 27)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(18.4, 2.8);
        ctx.bezierCurveTo(18.3, 4.3, 18.8, 5.6, 19.5, 5.6);
        ctx.bezierCurveTo(20.2, 5.7, 20.8, 4.4, 20.9, 2.9);
        ctx.bezierCurveTo(21.0, 1.3, 20.5, 0.0, 19.8, 0.0);
        ctx.bezierCurveTo(19.1, -0.0, 18.4, 1.2, 18.4, 2.8);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.9, 3.9);
        ctx.bezierCurveTo(16.7, 5.2, 17.8, 6.1, 18.4, 5.7);
        ctx.bezierCurveTo(19.0, 5.4, 18.9, 4.0, 18.2, 2.6);
        ctx.bezierCurveTo(17.4, 1.3, 16.3, 0.5, 15.7, 0.8);
        ctx.bezierCurveTo(15.1, 1.1, 15.2, 2.5, 15.9, 3.9);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(25.4, 19.8);
        ctx.bezierCurveTo(25.6, 21.3, 27.0, 22.3, 28.5, 22.1);
        ctx.bezierCurveTo(28.6, 22.1, 28.7, 22.1, 28.8, 22.0);
        ctx.bezierCurveTo(29.6, 20.6, 29.8, 18.8, 29.1, 16.9);
        ctx.bezierCurveTo(29.1, 16.8, 29.1, 16.8, 29.1, 16.8);
        ctx.bezierCurveTo(28.7, 16.6, 28.2, 16.6, 27.7, 16.6);
        ctx.bezierCurveTo(26.2, 16.9, 25.2, 18.3, 25.4, 19.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(11.4, 21.6);
        ctx.bezierCurveTo(11.7, 22.5, 12.2, 23.4, 12.8, 24.1);
        ctx.lineTo(12.8, 24.1);
        ctx.bezierCurveTo(13.3, 24.4, 13.9, 24.5, 14.5, 24.4);
        ctx.bezierCurveTo(16.1, 24.2, 17.1, 22.8, 16.9, 21.3);
        ctx.bezierCurveTo(16.6, 19.8, 15.2, 18.7, 13.7, 19.0);
        ctx.bezierCurveTo(12.4, 19.2, 11.4, 20.3, 11.4, 21.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(30.1, 32.2);
        ctx.bezierCurveTo(23.0, 35.2, 20.5, 35.5, 19.8, 33.3);
        ctx.bezierCurveTo(19.3, 31.8, 22.6, 30.3, 26.9, 28.5);
        ctx.bezierCurveTo(30.4, 27.0, 32.5, 25.8, 33.3, 27.2);
        ctx.bezierCurveTo(34.1, 28.5, 34.3, 30.4, 30.1, 32.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(30.7, 26.9);
        ctx.bezierCurveTo(30.7, 26.9, 32.1, 23.6, 33.3, 23.9);
        ctx.bezierCurveTo(33.9, 24.1, 33.4, 25.5, 33.4, 25.5);
        ctx.bezierCurveTo(33.4, 25.5, 34.9, 24.5, 35.4, 25.2);
        ctx.bezierCurveTo(35.7, 25.6, 34.5, 26.8, 34.5, 26.8);
        ctx.bezierCurveTo(34.5, 26.8, 35.9, 26.2, 36.1, 26.9);
        ctx.bezierCurveTo(36.4, 27.5, 35.0, 28.3, 35.0, 28.3);
        ctx.bezierCurveTo(35.0, 28.3, 36.5, 28.2, 36.4, 28.8);
        ctx.bezierCurveTo(36.4, 29.8, 32.8, 30.5, 32.8, 30.5);
        ctx.lineTo(30.7, 26.9);
        ctx.closePath();
        ctx.fill();

        // 1//

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(18.4, 39.0);
        ctx.lineTo(18.2, 40.1);
        ctx.bezierCurveTo(18.2, 40.4, 18.1, 40.5, 17.9, 40.6);
        ctx.lineTo(16.8, 41.1);
        ctx.bezierCurveTo(16.6, 41.2, 16.3, 41.1, 16.1, 41.0);
        ctx.lineTo(15.2, 40.3);
        ctx.bezierCurveTo(15.0, 40.1, 14.9, 39.9, 15.0, 39.7);
        ctx.lineTo(15.0, 39.6);
        ctx.lineTo(15.1, 38.5);
        ctx.bezierCurveTo(15.1, 38.5, 15.1, 38.4, 15.1, 38.4);
        ctx.bezierCurveTo(15.2, 38.2, 15.3, 38.1, 15.5, 38.0);
        ctx.lineTo(16.3, 37.7);
        ctx.bezierCurveTo(16.7, 37.5, 17.1, 37.6, 17.4, 37.8);
        ctx.lineTo(17.7, 38.1);
        ctx.lineTo(18.2, 38.4);
        ctx.bezierCurveTo(18.3, 38.5, 18.3, 38.6, 18.4, 38.7);
        ctx.bezierCurveTo(18.4, 38.7, 18.4, 38.7, 18.4, 38.7);
        ctx.bezierCurveTo(18.4, 38.8, 18.4, 38.9, 18.4, 39.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(16.0, 38.9);
        ctx.bezierCurveTo(16.1, 39.2, 15.8, 39.6, 15.5, 39.7);
        ctx.bezierCurveTo(15.3, 39.7, 15.1, 39.7, 15.0, 39.6);
        ctx.lineTo(15.1, 38.5);
        ctx.bezierCurveTo(15.1, 38.5, 15.1, 38.4, 15.1, 38.4);
        ctx.bezierCurveTo(15.2, 38.4, 15.2, 38.4, 15.2, 38.4);
        ctx.bezierCurveTo(15.5, 38.3, 15.9, 38.5, 16.0, 38.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(17.3, 40.2);
        ctx.bezierCurveTo(17.4, 40.4, 17.2, 40.6, 17.0, 40.7);
        ctx.bezierCurveTo(16.7, 40.7, 16.5, 40.6, 16.4, 40.4);
        ctx.bezierCurveTo(16.4, 40.1, 16.5, 39.9, 16.8, 39.8);
        ctx.bezierCurveTo(17.0, 39.8, 17.2, 39.9, 17.3, 40.2);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(17.4, 39.2);
        ctx.bezierCurveTo(17.4, 39.4, 17.3, 39.6, 17.1, 39.6);
        ctx.bezierCurveTo(17.0, 39.6, 16.8, 39.5, 16.8, 39.4);
        ctx.bezierCurveTo(16.7, 39.2, 16.8, 39.1, 17.0, 39.0);
        ctx.bezierCurveTo(17.2, 39.0, 17.3, 39.1, 17.4, 39.2);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(18.4, 38.7);
        ctx.bezierCurveTo(18.4, 38.7, 18.4, 38.7, 18.4, 38.7);
        ctx.bezierCurveTo(18.3, 38.9, 18.2, 39.1, 18.0, 39.1);
        ctx.bezierCurveTo(17.7, 39.2, 17.4, 39.0, 17.3, 38.7);
        ctx.bezierCurveTo(17.2, 38.4, 17.4, 38.1, 17.7, 38.1);
        ctx.bezierCurveTo(17.7, 38.1, 17.7, 38.1, 17.7, 38.1);
        ctx.lineTo(18.2, 38.4);
        ctx.bezierCurveTo(18.3, 38.5, 18.3, 38.6, 18.4, 38.7);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(16.8, 38.2);
        ctx.bezierCurveTo(16.9, 38.4, 16.7, 38.6, 16.5, 38.7);
        ctx.bezierCurveTo(16.3, 38.7, 16.1, 38.6, 16.1, 38.4);
        ctx.bezierCurveTo(16.0, 38.2, 16.1, 38.0, 16.3, 37.9);
        ctx.bezierCurveTo(16.5, 37.9, 16.8, 38.0, 16.8, 38.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.restore();

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(21.9, 39.7);
        ctx.lineTo(20.9, 41.1);
        ctx.bezierCurveTo(20.7, 41.3, 20.4, 41.4, 20.1, 41.4);
        ctx.lineTo(18.4, 41.2);
        ctx.bezierCurveTo(18.1, 41.2, 17.8, 41.0, 17.7, 40.7);
        ctx.lineTo(17.1, 39.1);
        ctx.bezierCurveTo(17.0, 38.9, 17.0, 38.5, 17.2, 38.3);
        ctx.lineTo(17.3, 38.1);
        ctx.lineTo(18.2, 37.0);
        ctx.bezierCurveTo(18.2, 36.9, 18.3, 36.9, 18.3, 36.8);
        ctx.bezierCurveTo(18.5, 36.7, 18.7, 36.6, 19.0, 36.6);
        ctx.lineTo(20.3, 36.8);
        ctx.bezierCurveTo(20.8, 36.8, 21.3, 37.2, 21.5, 37.7);
        ctx.lineTo(21.7, 38.2);
        ctx.lineTo(22.0, 38.9);
        ctx.bezierCurveTo(22.0, 39.0, 22.1, 39.2, 22.0, 39.4);
        ctx.bezierCurveTo(22.0, 39.4, 22.0, 39.4, 22.0, 39.4);
        ctx.bezierCurveTo(22.0, 39.5, 21.9, 39.6, 21.9, 39.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(19.0, 38.0);
        ctx.bezierCurveTo(18.8, 38.5, 18.3, 38.8, 17.8, 38.6);
        ctx.bezierCurveTo(17.6, 38.5, 17.4, 38.4, 17.3, 38.1);
        ctx.lineTo(18.2, 37.0);
        ctx.bezierCurveTo(18.2, 36.9, 18.3, 36.9, 18.3, 36.8);
        ctx.bezierCurveTo(18.3, 36.8, 18.3, 36.8, 18.4, 36.9);
        ctx.bezierCurveTo(18.8, 37.0, 19.1, 37.5, 19.0, 38.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(19.7, 40.4);
        ctx.bezierCurveTo(19.6, 40.8, 19.3, 40.9, 19.0, 40.9);
        ctx.bezierCurveTo(18.6, 40.8, 18.5, 40.4, 18.5, 40.1);
        ctx.bezierCurveTo(18.6, 39.8, 19.0, 39.6, 19.3, 39.7);
        ctx.bezierCurveTo(19.6, 39.8, 19.8, 40.1, 19.7, 40.4);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(20.4, 39.4);
        ctx.bezierCurveTo(20.3, 39.6, 20.1, 39.7, 19.9, 39.7);
        ctx.bezierCurveTo(19.7, 39.6, 19.6, 39.4, 19.6, 39.1);
        ctx.bezierCurveTo(19.7, 38.9, 19.9, 38.8, 20.1, 38.9);
        ctx.bezierCurveTo(20.3, 38.9, 20.5, 39.2, 20.4, 39.4);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(22.0, 39.4);
        ctx.bezierCurveTo(22.0, 39.4, 22.0, 39.4, 22.0, 39.4);
        ctx.bezierCurveTo(21.8, 39.6, 21.5, 39.7, 21.2, 39.6);
        ctx.bezierCurveTo(20.8, 39.5, 20.6, 39.1, 20.7, 38.7);
        ctx.bezierCurveTo(20.8, 38.3, 21.2, 38.1, 21.6, 38.2);
        ctx.bezierCurveTo(21.7, 38.2, 21.7, 38.2, 21.7, 38.2);
        ctx.lineTo(22.0, 38.9);
        ctx.bezierCurveTo(22.0, 39.0, 22.1, 39.2, 22.0, 39.4);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(20.5, 37.7);
        ctx.bezierCurveTo(20.4, 38.0, 20.1, 38.2, 19.8, 38.1);
        ctx.bezierCurveTo(19.5, 38.0, 19.3, 37.7, 19.4, 37.4);
        ctx.bezierCurveTo(19.5, 37.2, 19.8, 37.0, 20.1, 37.1);
        ctx.bezierCurveTo(20.4, 37.2, 20.5, 37.5, 20.5, 37.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(14.4, 39.9);
        ctx.lineTo(22.8, 39.9);
        ctx.lineTo(22.1, 41.5);
        ctx.lineTo(15.9, 41.6);
        ctx.lineTo(14.4, 39.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(129, 196, 200)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.4, 32.1);
        ctx.lineTo(20.9, 34.1);
        ctx.bezierCurveTo(20.3, 34.9, 19.2, 35.1, 18.4, 34.5);
        ctx.lineTo(16.3, 32.9);
        ctx.bezierCurveTo(14.3, 31.3, 14.3, 29.5, 14.6, 28.4);
        ctx.bezierCurveTo(14.8, 27.6, 15.3, 26.9, 16.0, 26.5);
        ctx.bezierCurveTo(16.2, 26.4, 16.3, 26.3, 16.5, 26.3);
        ctx.bezierCurveTo(17.5, 26.1, 18.6, 26.4, 19.4, 27.1);
        ctx.lineTo(22.1, 29.6);
        ctx.bezierCurveTo(22.8, 30.2, 23.0, 31.3, 22.4, 32.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(31.2, 11.4);
        ctx.lineTo(30.9, 11.9);
        ctx.lineTo(30.4, 12.6);
        ctx.bezierCurveTo(30.3, 12.8, 30.2, 12.9, 30.0, 12.9);
        ctx.bezierCurveTo(30.0, 12.9, 30.0, 12.9, 30.0, 13.0);
        ctx.bezierCurveTo(29.9, 13.0, 29.7, 13.0, 29.6, 13.0);
        ctx.lineTo(29.4, 13.0);
        ctx.lineTo(27.7, 11.4);
        ctx.lineTo(26.8, 10.6);
        ctx.lineTo(26.2, 10.0);
        ctx.bezierCurveTo(26.2, 9.9, 26.2, 9.8, 26.3, 9.8);
        ctx.lineTo(27.3, 8.3);
        ctx.bezierCurveTo(27.5, 8.0, 27.8, 7.8, 28.2, 7.9);
        ctx.lineTo(28.4, 7.9);
        ctx.lineTo(30.0, 8.0);
        ctx.bezierCurveTo(30.0, 8.0, 30.1, 8.0, 30.1, 8.0);
        ctx.bezierCurveTo(30.4, 8.1, 30.6, 8.3, 30.8, 8.5);
        ctx.lineTo(31.4, 9.8);
        ctx.bezierCurveTo(31.6, 10.3, 31.6, 11.0, 31.2, 11.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(29.5, 9.3);
        ctx.bezierCurveTo(29.0, 9.5, 28.4, 9.2, 28.3, 8.7);
        ctx.bezierCurveTo(28.2, 8.4, 28.2, 8.1, 28.4, 7.9);
        ctx.lineTo(30.0, 8.0);
        ctx.bezierCurveTo(30.0, 8.0, 30.1, 8.0, 30.1, 8.0);
        ctx.bezierCurveTo(30.2, 8.1, 30.2, 8.1, 30.2, 8.1);
        ctx.bezierCurveTo(30.3, 8.6, 30.0, 9.2, 29.5, 9.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(27.7, 11.4);
        ctx.lineTo(26.8, 10.6);
        ctx.bezierCurveTo(26.9, 10.4, 27.1, 10.2, 27.3, 10.2);
        ctx.bezierCurveTo(27.7, 10.1, 28.0, 10.3, 28.1, 10.6);
        ctx.bezierCurveTo(28.2, 11.0, 28.0, 11.3, 27.7, 11.4);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(29.1, 11.5);
        ctx.bezierCurveTo(28.8, 11.5, 28.6, 11.4, 28.5, 11.2);
        ctx.bezierCurveTo(28.4, 10.9, 28.6, 10.7, 28.8, 10.6);
        ctx.bezierCurveTo(29.0, 10.5, 29.3, 10.7, 29.4, 10.9);
        ctx.bezierCurveTo(29.4, 11.1, 29.3, 11.4, 29.1, 11.5);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(30.0, 13.0);
        ctx.bezierCurveTo(30.0, 13.0, 30.0, 13.0, 30.0, 13.0);
        ctx.bezierCurveTo(29.7, 12.9, 29.4, 12.7, 29.3, 12.4);
        ctx.bezierCurveTo(29.2, 11.9, 29.4, 11.5, 29.9, 11.3);
        ctx.bezierCurveTo(30.3, 11.2, 30.7, 11.5, 30.9, 11.9);
        ctx.bezierCurveTo(30.9, 11.9, 30.9, 11.9, 30.9, 11.9);
        ctx.lineTo(30.4, 12.6);
        ctx.bezierCurveTo(30.3, 12.8, 30.2, 12.9, 30.0, 13.0);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(30.6, 10.5);
        ctx.bezierCurveTo(30.3, 10.6, 30.0, 10.5, 29.9, 10.1);
        ctx.bezierCurveTo(29.8, 9.8, 30.0, 9.5, 30.3, 9.4);
        ctx.bezierCurveTo(30.6, 9.3, 30.9, 9.5, 31.0, 9.8);
        ctx.bezierCurveTo(31.1, 10.1, 30.9, 10.4, 30.6, 10.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();
        ctx.restore();
        ctx.restore();
    }
    else {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(22.9, 44.3);
        ctx.lineTo(35.5, 50.1);
        ctx.bezierCurveTo(35.5, 50.1, 37.1, 48.1, 38.5, 48.5);
        ctx.bezierCurveTo(39.8, 48.8, 37.3, 54.8, 36.0, 55.0);
        ctx.bezierCurveTo(34.8, 55.2, 20.4, 50.4, 20.4, 50.4);
        ctx.lineTo(22.9, 44.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.3, 52.0);
        ctx.bezierCurveTo(13.0, 51.6, 11.3, 49.3, 11.6, 46.9);
        ctx.bezierCurveTo(12.4, 40.7, 14.9, 33.9, 13.3, 27.8);
        ctx.lineTo(24.0, 24.7);
        ctx.bezierCurveTo(24.0, 24.7, 25.3, 25.4, 25.6, 25.9);
        ctx.bezierCurveTo(27.7, 31.3, 31.2, 36.4, 35.0, 41.4);
        ctx.bezierCurveTo(36.5, 43.3, 36.0, 46.1, 34.0, 47.5);
        ctx.bezierCurveTo(26.8, 52.7, 20.0, 52.9, 15.3, 52.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 116, 27)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.3, 34.6);
        ctx.lineTo(18.8, 35.2);
        ctx.bezierCurveTo(16.9, 35.7, 15.4, 33.8, 14.9, 31.9);
        ctx.bezierCurveTo(14.9, 31.9, 13.6, 28.0, 16.8, 27.5);
        ctx.lineTo(20.3, 26.5);
        ctx.bezierCurveTo(24.2, 25.4, 24.9, 30.1, 24.9, 30.1);
        ctx.bezierCurveTo(25.1, 31.7, 25.0, 33.4, 21.3, 34.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(26.6, 26.8);
        ctx.bezierCurveTo(26.1, 25.9, 25.5, 25.1, 24.7, 24.6);
        ctx.bezierCurveTo(23.8, 25.4, 22.7, 26.1, 21.4, 26.6);
        ctx.bezierCurveTo(18.6, 27.6, 16.6, 27.8, 15.0, 27.7);
        ctx.bezierCurveTo(14.6, 28.5, 14.8, 29.4, 14.9, 30.4);
        ctx.bezierCurveTo(15.0, 31.8, 16.3, 33.5, 18.1, 32.9);
        ctx.bezierCurveTo(20.9, 32.1, 20.5, 29.9, 20.7, 28.5);
        ctx.bezierCurveTo(21.6, 29.5, 22.8, 31.7, 25.3, 30.7);
        ctx.bezierCurveTo(27.0, 30.0, 27.3, 28.0, 26.6, 26.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(129, 196, 200)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(25.1, 24.4);
        ctx.bezierCurveTo(25.1, 24.4, 28.6, 35.3, 18.8, 42.1);
        ctx.lineWidth = 0.9;
        ctx.strokeStyle = "rgb(129, 196, 200)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(16.6, 53.0);
        ctx.lineTo(14.5, 53.1);
        ctx.bezierCurveTo(12.2, 53.1, 10.3, 51.2, 10.2, 48.9);
        ctx.lineTo(10.2, 45.0);
        ctx.bezierCurveTo(10.1, 42.6, 12.0, 40.7, 14.3, 40.6);
        ctx.lineTo(16.4, 40.6);
        ctx.bezierCurveTo(18.8, 40.6, 20.7, 42.4, 20.7, 44.8);
        ctx.lineTo(20.8, 48.7);
        ctx.bezierCurveTo(20.8, 51.0, 19.0, 53.0, 16.6, 53.0);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(28.6, 13.8);
        ctx.bezierCurveTo(26.9, 7.4, 18.4, 2.3, 12.1, 4.1);
        ctx.bezierCurveTo(4.3, 6.3, 2.1, 12.7, 3.8, 19.1);
        ctx.bezierCurveTo(4.1, 20.5, 4.7, 21.7, 5.4, 22.8);
        ctx.bezierCurveTo(4.3, 24.3, 3.9, 26.2, 4.6, 28.1);
        ctx.bezierCurveTo(4.7, 28.4, 4.8, 28.7, 5.0, 29.0);
        ctx.bezierCurveTo(3.8, 29.8, 3.3, 31.4, 3.8, 32.9);
        ctx.bezierCurveTo(3.8, 32.9, 3.8, 33.0, 3.8, 33.0);
        ctx.bezierCurveTo(3.6, 33.1, 3.4, 33.2, 3.1, 33.3);
        ctx.bezierCurveTo(2.1, 33.9, 1.6, 35.1, 1.9, 36.3);
        ctx.bezierCurveTo(1.5, 36.3, 1.1, 36.4, 0.8, 36.6);
        ctx.bezierCurveTo(-0.3, 37.3, 0.1, 39.7, 0.1, 39.7);
        ctx.bezierCurveTo(0.1, 39.7, 2.1, 41.1, 3.2, 40.4);
        ctx.bezierCurveTo(3.9, 40.0, 4.3, 39.1, 4.2, 38.2);
        ctx.bezierCurveTo(4.7, 38.3, 5.3, 38.2, 5.8, 37.9);
        ctx.bezierCurveTo(6.8, 37.3, 7.2, 36.2, 7.1, 35.2);
        ctx.bezierCurveTo(7.4, 35.2, 7.8, 35.1, 8.2, 35.0);
        ctx.bezierCurveTo(9.6, 34.4, 10.5, 33.1, 10.5, 31.7);
        ctx.bezierCurveTo(10.9, 31.6, 11.2, 31.5, 11.6, 31.4);
        ctx.bezierCurveTo(13.4, 30.7, 14.6, 29.2, 15.0, 27.5);
        ctx.bezierCurveTo(16.0, 27.3, 17.0, 27.0, 18.0, 26.4);
        ctx.bezierCurveTo(23.5, 23.0, 30.3, 20.2, 28.6, 13.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(7.5, 23.1);
        ctx.bezierCurveTo(7.9, 24.2, 8.4, 25.1, 9.0, 25.9);
        ctx.lineTo(9.0, 25.9);
        ctx.bezierCurveTo(10.8, 28.0, 13.5, 29.0, 16.8, 28.8);
        ctx.bezierCurveTo(20.6, 28.6, 24.6, 26.7, 26.2, 23.6);
        ctx.bezierCurveTo(27.1, 22.1, 27.3, 20.2, 26.6, 18.1);
        ctx.bezierCurveTo(26.6, 18.0, 26.6, 18.0, 26.6, 18.0);
        ctx.bezierCurveTo(24.6, 12.3, 22.3, 7.9, 16.6, 8.2);
        ctx.bezierCurveTo(10.9, 8.6, 6.5, 13.7, 6.8, 19.7);
        ctx.bezierCurveTo(6.9, 21.0, 7.1, 22.1, 7.5, 23.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(14.7, 22.4);
        ctx.bezierCurveTo(14.8, 23.4, 16.8, 25.2, 18.5, 24.9);
        ctx.bezierCurveTo(20.3, 24.6, 21.1, 22.4, 20.9, 21.4);
        ctx.bezierCurveTo(20.8, 20.3, 19.5, 21.2, 17.8, 21.4);
        ctx.bezierCurveTo(16.1, 21.7, 14.5, 21.3, 14.7, 22.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(243, 126, 114)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(16.8, 19.2);
        ctx.bezierCurveTo(16.9, 19.6, 17.2, 19.9, 17.6, 19.8);
        ctx.bezierCurveTo(18.0, 19.7, 18.2, 19.4, 18.2, 19.0);
        ctx.bezierCurveTo(18.1, 18.7, 17.7, 18.2, 17.3, 18.2);
        ctx.bezierCurveTo(17.0, 18.3, 16.8, 18.9, 16.8, 19.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(19.7, 17.9);
        ctx.bezierCurveTo(19.8, 18.8, 20.7, 19.4, 21.6, 19.3);
        ctx.bezierCurveTo(22.5, 19.1, 23.1, 18.3, 23.0, 17.4);
        ctx.bezierCurveTo(22.8, 16.4, 22.0, 15.8, 21.1, 16.0);
        ctx.bezierCurveTo(20.2, 16.1, 19.6, 17.0, 19.7, 17.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(129, 196, 200)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(11.6, 19.1);
        ctx.bezierCurveTo(11.7, 20.0, 12.6, 20.6, 13.5, 20.5);
        ctx.bezierCurveTo(14.4, 20.4, 15.0, 19.5, 14.9, 18.6);
        ctx.bezierCurveTo(14.7, 17.7, 13.9, 17.1, 13.0, 17.2);
        ctx.bezierCurveTo(12.1, 17.3, 11.4, 18.2, 11.6, 19.1);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(17.3, 9.7);
        ctx.bezierCurveTo(17.3, 9.7, 24.6, 12.6, 25.6, 15.3);
        ctx.bezierCurveTo(25.6, 15.3, 24.7, 10.3, 23.4, 8.9);
        ctx.bezierCurveTo(22.2, 7.4, 13.3, 5.6, 7.5, 9.2);
        ctx.bezierCurveTo(1.8, 12.9, 6.8, 19.7, 6.8, 19.7);
        ctx.bezierCurveTo(6.8, 19.7, 15.0, 15.3, 17.3, 9.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(4.9, 21.8);
        ctx.bezierCurveTo(4.9, 22.9, 5.9, 23.8, 7.1, 23.7);
        ctx.bezierCurveTo(8.2, 23.7, 9.1, 22.7, 9.1, 21.5);
        ctx.bezierCurveTo(9.0, 20.4, 8.0, 19.5, 6.8, 19.5);
        ctx.bezierCurveTo(5.7, 19.6, 4.8, 20.6, 4.9, 21.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(6.7, 15.0);
        ctx.bezierCurveTo(6.9, 14.6, 9.6, 8.4, 15.1, 7.1);
        ctx.bezierCurveTo(17.4, 6.5, 20.1, 6.7, 22.1, 8.1);
        ctx.bezierCurveTo(21.0, 5.5, 17.3, 4.7, 14.1, 5.3);
        ctx.bezierCurveTo(7.2, 6.5, 5.8, 13.9, 6.7, 15.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 116, 27)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(14.0, 3.4);
        ctx.bezierCurveTo(14.6, 4.9, 15.6, 6.0, 16.4, 5.7);
        ctx.bezierCurveTo(17.1, 5.5, 17.1, 4.0, 16.6, 2.4);
        ctx.bezierCurveTo(16.0, 0.8, 14.9, -0.2, 14.2, 0.0);
        ctx.bezierCurveTo(13.5, 0.3, 13.4, 1.8, 14.0, 3.4);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(12.1, 5.5);
        ctx.bezierCurveTo(13.4, 6.5, 14.9, 6.9, 15.3, 6.3);
        ctx.bezierCurveTo(15.8, 5.7, 15.1, 4.4, 13.7, 3.3);
        ctx.bezierCurveTo(12.4, 2.3, 11.0, 2.0, 10.5, 2.6);
        ctx.bezierCurveTo(10.0, 3.2, 10.7, 4.5, 12.1, 5.5);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.6, 21.2);
        ctx.bezierCurveTo(22.8, 22.8, 24.4, 23.9, 26.0, 23.7);
        ctx.bezierCurveTo(26.1, 23.7, 26.2, 23.6, 26.2, 23.6);
        ctx.bezierCurveTo(27.1, 22.1, 27.3, 20.2, 26.6, 18.1);
        ctx.bezierCurveTo(26.6, 18.0, 26.6, 18.0, 26.6, 18.0);
        ctx.bezierCurveTo(26.1, 17.8, 25.6, 17.7, 25.1, 17.8);
        ctx.bezierCurveTo(23.5, 18.1, 22.3, 19.6, 22.6, 21.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(7.5, 23.1);
        ctx.bezierCurveTo(7.9, 24.2, 8.4, 25.1, 9.0, 25.9);
        ctx.lineTo(9.0, 25.9);
        ctx.bezierCurveTo(9.6, 26.2, 10.2, 26.3, 10.9, 26.2);
        ctx.bezierCurveTo(12.5, 25.9, 13.6, 24.4, 13.4, 22.8);
        ctx.bezierCurveTo(13.2, 21.2, 11.6, 20.1, 10.0, 20.3);
        ctx.bezierCurveTo(8.6, 20.5, 7.6, 21.7, 7.5, 23.1);
        ctx.closePath();
        ctx.fill();

        // 1//

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(28.1, 31.0);
        ctx.bezierCurveTo(21.7, 36.3, 19.2, 37.3, 17.7, 35.2);
        ctx.bezierCurveTo(16.8, 33.8, 19.8, 31.3, 23.6, 28.1);
        ctx.bezierCurveTo(26.8, 25.6, 28.6, 23.7, 29.9, 24.8);
        ctx.bezierCurveTo(31.1, 25.9, 31.8, 27.9, 28.1, 31.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(27.0, 25.4);
        ctx.bezierCurveTo(27.0, 25.4, 27.5, 21.5, 28.8, 21.4);
        ctx.bezierCurveTo(29.5, 21.4, 29.4, 23.0, 29.4, 23.0);
        ctx.bezierCurveTo(29.4, 23.0, 30.7, 21.6, 31.3, 22.1);
        ctx.bezierCurveTo(31.8, 22.5, 31.0, 24.1, 31.0, 24.1);
        ctx.bezierCurveTo(31.0, 24.1, 32.2, 23.1, 32.7, 23.6);
        ctx.bezierCurveTo(33.1, 24.2, 32.0, 25.4, 32.0, 25.4);
        ctx.bezierCurveTo(32.0, 25.4, 33.4, 24.9, 33.5, 25.5);
        ctx.bezierCurveTo(33.8, 26.6, 30.4, 28.4, 30.4, 28.4);
        ctx.lineTo(27.0, 25.4);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.restore();

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(15.1, 41.9);
        ctx.lineTo(14.9, 43.1);
        ctx.bezierCurveTo(14.9, 43.4, 14.7, 43.6, 14.5, 43.7);
        ctx.lineTo(13.3, 44.1);
        ctx.bezierCurveTo(13.1, 44.2, 12.8, 44.2, 12.6, 44.1);
        ctx.lineTo(11.6, 43.3);
        ctx.bezierCurveTo(11.4, 43.1, 11.3, 42.9, 11.4, 42.7);
        ctx.lineTo(11.4, 42.5);
        ctx.lineTo(11.5, 41.4);
        ctx.bezierCurveTo(11.5, 41.3, 11.5, 41.3, 11.6, 41.3);
        ctx.bezierCurveTo(11.6, 41.1, 11.8, 40.9, 11.9, 40.9);
        ctx.lineTo(12.9, 40.5);
        ctx.bezierCurveTo(13.2, 40.3, 13.7, 40.4, 14.0, 40.6);
        ctx.lineTo(14.3, 40.9);
        ctx.lineTo(14.8, 41.2);
        ctx.bezierCurveTo(14.9, 41.3, 15.0, 41.4, 15.0, 41.6);
        ctx.bezierCurveTo(15.0, 41.6, 15.0, 41.6, 15.0, 41.6);
        ctx.bezierCurveTo(15.1, 41.7, 15.1, 41.8, 15.1, 41.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(12.5, 41.8);
        ctx.bezierCurveTo(12.5, 42.2, 12.3, 42.5, 11.9, 42.6);
        ctx.bezierCurveTo(11.7, 42.7, 11.5, 42.6, 11.4, 42.5);
        ctx.lineTo(11.5, 41.4);
        ctx.bezierCurveTo(11.5, 41.3, 11.5, 41.3, 11.6, 41.3);
        ctx.bezierCurveTo(11.6, 41.3, 11.6, 41.3, 11.6, 41.3);
        ctx.bezierCurveTo(12.0, 41.2, 12.4, 41.4, 12.5, 41.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(13.9, 43.1);
        ctx.bezierCurveTo(13.9, 43.4, 13.8, 43.6, 13.5, 43.7);
        ctx.bezierCurveTo(13.3, 43.8, 13.0, 43.6, 13.0, 43.4);
        ctx.bezierCurveTo(12.9, 43.1, 13.1, 42.9, 13.3, 42.8);
        ctx.bezierCurveTo(13.6, 42.7, 13.8, 42.9, 13.9, 43.1);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(13.9, 42.2);
        ctx.bezierCurveTo(14.0, 42.3, 13.9, 42.5, 13.7, 42.5);
        ctx.bezierCurveTo(13.5, 42.6, 13.4, 42.5, 13.3, 42.3);
        ctx.bezierCurveTo(13.3, 42.1, 13.4, 42.0, 13.6, 41.9);
        ctx.bezierCurveTo(13.7, 41.9, 13.9, 42.0, 13.9, 42.2);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(15.0, 41.6);
        ctx.bezierCurveTo(15.0, 41.6, 15.0, 41.6, 15.0, 41.6);
        ctx.bezierCurveTo(15.0, 41.8, 14.8, 42.0, 14.6, 42.0);
        ctx.bezierCurveTo(14.3, 42.1, 14.0, 41.9, 13.9, 41.6);
        ctx.bezierCurveTo(13.8, 41.3, 14.0, 41.0, 14.3, 40.9);
        ctx.bezierCurveTo(14.3, 40.9, 14.3, 40.9, 14.3, 40.9);
        ctx.lineTo(14.8, 41.2);
        ctx.bezierCurveTo(14.9, 41.3, 15.0, 41.4, 15.0, 41.6);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(13.3, 41.0);
        ctx.bezierCurveTo(13.4, 41.3, 13.3, 41.5, 13.0, 41.5);
        ctx.bezierCurveTo(12.8, 41.6, 12.6, 41.5, 12.5, 41.2);
        ctx.bezierCurveTo(12.5, 41.0, 12.6, 40.8, 12.9, 40.7);
        ctx.bezierCurveTo(13.1, 40.7, 13.3, 40.8, 13.3, 41.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.restore();

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(18.8, 42.7);
        ctx.lineTo(17.7, 44.1);
        ctx.bezierCurveTo(17.5, 44.4, 17.2, 44.5, 16.9, 44.5);
        ctx.lineTo(15.1, 44.3);
        ctx.bezierCurveTo(14.8, 44.2, 14.5, 44.0, 14.3, 43.7);
        ctx.lineTo(13.6, 42.1);
        ctx.bezierCurveTo(13.5, 41.7, 13.6, 41.4, 13.8, 41.1);
        ctx.lineTo(13.9, 41.0);
        ctx.lineTo(14.8, 39.7);
        ctx.bezierCurveTo(14.9, 39.7, 14.9, 39.6, 15.0, 39.6);
        ctx.bezierCurveTo(15.2, 39.4, 15.4, 39.3, 15.7, 39.3);
        ctx.lineTo(17.1, 39.5);
        ctx.bezierCurveTo(17.7, 39.6, 18.1, 40.0, 18.4, 40.5);
        ctx.lineTo(18.6, 41.0);
        ctx.lineTo(18.9, 41.8);
        ctx.bezierCurveTo(19.0, 41.9, 19.0, 42.1, 19.0, 42.3);
        ctx.bezierCurveTo(19.0, 42.3, 19.0, 42.3, 19.0, 42.3);
        ctx.bezierCurveTo(18.9, 42.5, 18.9, 42.6, 18.8, 42.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(15.7, 40.8);
        ctx.bezierCurveTo(15.5, 41.3, 15.0, 41.6, 14.5, 41.5);
        ctx.bezierCurveTo(14.2, 41.4, 14.0, 41.2, 13.9, 41.0);
        ctx.lineTo(14.8, 39.7);
        ctx.bezierCurveTo(14.9, 39.7, 14.9, 39.6, 15.0, 39.6);
        ctx.bezierCurveTo(15.0, 39.6, 15.0, 39.6, 15.0, 39.6);
        ctx.bezierCurveTo(15.5, 39.7, 15.8, 40.3, 15.7, 40.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(16.5, 43.4);
        ctx.bezierCurveTo(16.4, 43.8, 16.0, 44.0, 15.7, 43.9);
        ctx.bezierCurveTo(15.3, 43.8, 15.1, 43.4, 15.2, 43.1);
        ctx.bezierCurveTo(15.3, 42.7, 15.7, 42.5, 16.0, 42.6);
        ctx.bezierCurveTo(16.4, 42.7, 16.6, 43.1, 16.5, 43.4);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(17.2, 42.3);
        ctx.bezierCurveTo(17.2, 42.5, 16.9, 42.7, 16.7, 42.6);
        ctx.bezierCurveTo(16.4, 42.5, 16.3, 42.3, 16.4, 42.1);
        ctx.bezierCurveTo(16.4, 41.8, 16.7, 41.7, 16.9, 41.8);
        ctx.bezierCurveTo(17.2, 41.8, 17.3, 42.1, 17.2, 42.3);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(19.0, 42.3);
        ctx.bezierCurveTo(19.0, 42.3, 19.0, 42.3, 19.0, 42.3);
        ctx.bezierCurveTo(18.8, 42.6, 18.4, 42.7, 18.1, 42.6);
        ctx.bezierCurveTo(17.7, 42.5, 17.4, 42.0, 17.6, 41.6);
        ctx.bezierCurveTo(17.7, 41.1, 18.1, 40.9, 18.6, 41.0);
        ctx.bezierCurveTo(18.6, 41.0, 18.6, 41.0, 18.6, 41.0);
        ctx.lineTo(18.9, 41.8);
        ctx.bezierCurveTo(19.0, 41.9, 19.0, 42.1, 19.0, 42.3);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(17.3, 40.5);
        ctx.bezierCurveTo(17.2, 40.8, 16.9, 41.0, 16.6, 40.9);
        ctx.bezierCurveTo(16.3, 40.8, 16.1, 40.5, 16.2, 40.2);
        ctx.bezierCurveTo(16.3, 39.9, 16.6, 39.7, 16.9, 39.8);
        ctx.bezierCurveTo(17.2, 39.9, 17.4, 40.2, 17.3, 40.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(10.8, 42.9);
        ctx.lineTo(19.8, 42.9);
        ctx.lineTo(19.0, 44.6);
        ctx.lineTo(12.4, 44.7);
        ctx.lineTo(10.8, 42.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(129, 196, 200)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(19.8, 32.9);
        ctx.lineTo(18.9, 35.5);
        ctx.bezierCurveTo(18.6, 36.5, 17.5, 37.1, 16.5, 36.8);
        ctx.lineTo(13.8, 35.9);
        ctx.bezierCurveTo(11.2, 35.0, 10.6, 33.1, 10.5, 31.9);
        ctx.bezierCurveTo(10.5, 31.0, 10.7, 30.1, 11.2, 29.5);
        ctx.bezierCurveTo(11.4, 29.3, 11.5, 29.1, 11.7, 29.1);
        ctx.bezierCurveTo(12.7, 28.5, 13.9, 28.4, 14.9, 28.9);
        ctx.lineTo(18.5, 30.5);
        ctx.bezierCurveTo(19.5, 30.8, 20.1, 31.9, 19.8, 32.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(28.9, 12.2);
        ctx.lineTo(28.5, 12.8);
        ctx.lineTo(28.0, 13.5);
        ctx.bezierCurveTo(27.9, 13.6, 27.7, 13.8, 27.6, 13.8);
        ctx.bezierCurveTo(27.6, 13.8, 27.6, 13.8, 27.6, 13.8);
        ctx.bezierCurveTo(27.4, 13.9, 27.3, 13.9, 27.1, 13.9);
        ctx.lineTo(26.9, 13.9);
        ctx.lineTo(25.1, 12.2);
        ctx.lineTo(24.2, 11.4);
        ctx.lineTo(23.4, 10.7);
        ctx.bezierCurveTo(23.5, 10.6, 23.5, 10.5, 23.6, 10.4);
        ctx.lineTo(24.7, 8.8);
        ctx.bezierCurveTo(24.9, 8.5, 25.2, 8.3, 25.6, 8.4);
        ctx.lineTo(25.8, 8.4);
        ctx.lineTo(27.5, 8.5);
        ctx.bezierCurveTo(27.6, 8.5, 27.7, 8.5, 27.7, 8.5);
        ctx.bezierCurveTo(28.0, 8.6, 28.2, 8.8, 28.4, 9.1);
        ctx.lineTo(29.0, 10.5);
        ctx.bezierCurveTo(29.3, 11.0, 29.2, 11.7, 28.9, 12.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(27.0, 10.0);
        ctx.bezierCurveTo(26.4, 10.1, 25.8, 9.8, 25.7, 9.2);
        ctx.bezierCurveTo(25.6, 8.9, 25.6, 8.6, 25.8, 8.4);
        ctx.lineTo(27.5, 8.5);
        ctx.bezierCurveTo(27.6, 8.5, 27.7, 8.5, 27.7, 8.5);
        ctx.bezierCurveTo(27.7, 8.6, 27.7, 8.6, 27.7, 8.6);
        ctx.bezierCurveTo(27.9, 9.2, 27.6, 9.8, 27.0, 10.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(25.1, 12.2);
        ctx.lineTo(24.2, 11.4);
        ctx.bezierCurveTo(24.2, 11.1, 24.4, 10.9, 24.7, 10.9);
        ctx.bezierCurveTo(25.0, 10.7, 25.4, 11.0, 25.5, 11.3);
        ctx.bezierCurveTo(25.6, 11.7, 25.4, 12.1, 25.1, 12.2);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(26.5, 12.2);
        ctx.bezierCurveTo(26.3, 12.3, 26.0, 12.2, 25.9, 11.9);
        ctx.bezierCurveTo(25.9, 11.7, 26.0, 11.4, 26.3, 11.3);
        ctx.bezierCurveTo(26.5, 11.2, 26.8, 11.4, 26.9, 11.6);
        ctx.bezierCurveTo(26.9, 11.9, 26.8, 12.2, 26.5, 12.2);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(27.6, 13.8);
        ctx.bezierCurveTo(27.6, 13.8, 27.6, 13.8, 27.6, 13.8);
        ctx.bezierCurveTo(27.2, 13.8, 26.9, 13.6, 26.8, 13.2);
        ctx.bezierCurveTo(26.7, 12.7, 26.9, 12.3, 27.4, 12.1);
        ctx.bezierCurveTo(27.9, 12.0, 28.4, 12.2, 28.5, 12.7);
        ctx.bezierCurveTo(28.5, 12.7, 28.5, 12.7, 28.5, 12.8);
        ctx.lineTo(28.0, 13.5);
        ctx.bezierCurveTo(27.9, 13.6, 27.7, 13.8, 27.6, 13.8);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(28.2, 11.2);
        ctx.bezierCurveTo(27.9, 11.3, 27.5, 11.2, 27.4, 10.8);
        ctx.bezierCurveTo(27.3, 10.5, 27.5, 10.1, 27.8, 10.0);
        ctx.bezierCurveTo(28.2, 9.9, 28.5, 10.1, 28.6, 10.5);
        ctx.bezierCurveTo(28.7, 10.8, 28.5, 11.1, 28.2, 11.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();
        ctx.restore();
        ctx.restore();
    }
    ctx.restore();
}

function getEnemy(roleId, x, y, change) {
    if (roleId == 1) {
        enemy1(x, y, change);
    }
    else if (roleId == 2) {
        enemy2(x, y, change);
    }
    else if (roleId == 3) {
        enemy3(x, y, change);
    }
    else if (roleId == 4) {
        enemy4(x, y, change);
    }
    else if (roleId == 5) {
        enemy5(x, y, change);
    }
    else if (roleId == 6) {
        enemy6(x, y, change);
    }
}

function pillar(x, y) {
    ctx.save();
    ctx.translate(x, y);
    // 1//
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(40.7, 400.0);
    ctx.lineTo(0.6, 400.0);
    ctx.lineTo(0.6, 0.0);
    ctx.lineTo(40.7, 0.0);
    ctx.lineTo(40.7, 400.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(213, 151, 96)";
    ctx.fill();

    // 1//
    ctx.beginPath();
    ctx.moveTo(0.6, 114.8);
    ctx.bezierCurveTo(9.7, 99.6, 16.5, 54.6, 19.0, 36.0);
    ctx.lineWidth = 1.4;
    ctx.strokeStyle = "rgb(197, 126, 73)";
    ctx.stroke();

    // 1//
    ctx.beginPath();
    ctx.moveTo(0.6, 152.6);
    ctx.bezierCurveTo(20.6, 125.1, 28.8, 52.8, 30.5, 36.0);
    ctx.stroke();

    // 1//
    ctx.beginPath();
    ctx.moveTo(0.6, 250.0);
    ctx.bezierCurveTo(11.1, 207.4, 34.7, 168.7, 40.7, 159.2);
    ctx.lineWidth = 1.3;
    ctx.stroke();

    // 1//
    ctx.beginPath();
    ctx.moveTo(40.7, 185.6);
    ctx.bezierCurveTo(33.9, 198.7, 5.0, 257.8, 13.3, 307.9);
    ctx.bezierCurveTo(18.8, 341.1, 31.3, 361.2, 40.7, 372.2);
    ctx.stroke();

    // 1//
    ctx.beginPath();
    ctx.moveTo(40.7, 318.6);
    ctx.bezierCurveTo(23.6, 276.3, 33.8, 242.7, 40.7, 227.5);
    ctx.stroke();

    // 1/
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(40.7, 42.8);
    ctx.lineTo(0.6, 42.8);
    ctx.lineTo(0.6, 0.0);
    ctx.lineTo(40.7, 0.0);
    ctx.lineTo(40.7, 42.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(201, 73, 63)";
    ctx.fill();
    ctx.restore();
}

function background() {

    var alpha = ctxBg.globalAlpha;
    var gradient;

    // 1/
    ctxBg.save();
    ctxBg.translate(-89, -6);
    // 1//
    ctxBg.save();
    ctxBg.beginPath();
    ctxBg.moveTo(1113.4, 555.7);
    ctxBg.lineTo(89.4, 555.7);
    ctxBg.lineTo(89.4, 5.7);
    ctxBg.lineTo(1113.4, 5.7);
    ctxBg.lineTo(1113.4, 555.7);
    ctxBg.closePath();
    ctxBg.clip();

    // 1//

    // 1///
    ctxBg.save();
    ctxBg.beginPath();
    ctxBg.moveTo(1213.1, 560.3);
    ctxBg.lineTo(38.5, 560.3);
    ctxBg.lineTo(38.5, 0.0);
    ctxBg.lineTo(1213.1, 0.0);
    ctxBg.lineTo(1213.1, 560.3);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(86, 108, 144)";
    ctxBg.fill();

    // 1///
    ctxBg.beginPath();
    ctxBg.moveTo(585.9, 265.3);
    ctxBg.bezierCurveTo(585.9, 265.3, 658.2, 236.9, 753.1, 271.0);
    ctxBg.bezierCurveTo(848.0, 305.2, 840.0, 324.8, 919.4, 328.1);
    ctxBg.bezierCurveTo(998.7, 331.4, 1103.0, 276.3, 1268.4, 330.6);
    ctxBg.lineTo(1268.4, 444.3);
    ctxBg.lineTo(600.0, 444.3);
    ctxBg.lineTo(585.9, 265.3);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(40, 88, 131)";
    ctxBg.fill();

    // 1///
    ctxBg.beginPath();
    ctxBg.moveTo(855.7, 232.0);
    ctxBg.bezierCurveTo(852.8, 221.4, 848.3, 212.4, 842.2, 205.4);
    ctxBg.bezierCurveTo(840.8, 203.6, 831.1, 191.7, 809.8, 187.7);
    ctxBg.bezierCurveTo(792.1, 184.3, 791.5, 182.2, 788.9, 181.1);
    ctxBg.bezierCurveTo(785.5, 179.6, 782.1, 179.3, 778.0, 184.5);
    ctxBg.bezierCurveTo(778.0, 184.5, 774.9, 188.1, 771.4, 190.4);
    ctxBg.bezierCurveTo(768.9, 192.1, 761.5, 196.6, 754.3, 203.3);
    ctxBg.bezierCurveTo(742.2, 213.6, 731.2, 231.0, 735.4, 259.6);
    ctxBg.bezierCurveTo(740.6, 295.6, 773.6, 309.0, 803.6, 292.7);
    ctxBg.bezierCurveTo(806.0, 291.4, 808.6, 290.8, 811.3, 290.8);
    ctxBg.bezierCurveTo(846.2, 291.1, 865.3, 267.6, 855.7, 232.0);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(218, 208, 144)";
    ctxBg.fill();

    // 1///
    ctxBg.beginPath();
    ctxBg.moveTo(793.1, 246.8);
    ctxBg.bezierCurveTo(788.1, 254.2, 790.7, 275.5, 805.3, 286.5);
    ctxBg.bezierCurveTo(802.4, 283.4, 792.0, 266.8, 793.1, 246.8);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(233, 138, 151)";
    ctxBg.fill();

    // 1///
    ctxBg.beginPath();
    ctxBg.moveTo(809.6, 187.6);
    ctxBg.bezierCurveTo(828.7, 191.1, 841.9, 201.2, 849.7, 216.3);
    ctxBg.bezierCurveTo(854.1, 225.0, 852.8, 229.6, 847.4, 236.8);
    ctxBg.bezierCurveTo(845.9, 238.7, 845.5, 242.3, 845.1, 246.2);
    ctxBg.bezierCurveTo(844.2, 254.5, 840.8, 258.1, 830.8, 252.4);
    ctxBg.bezierCurveTo(821.1, 246.8, 819.1, 257.2, 818.2, 263.1);
    ctxBg.bezierCurveTo(817.4, 268.9, 807.9, 271.9, 803.8, 263.3);
    ctxBg.bezierCurveTo(799.6, 254.8, 790.4, 254.0, 786.5, 263.5);
    ctxBg.bezierCurveTo(781.0, 276.8, 771.6, 271.8, 769.0, 266.0);
    ctxBg.bezierCurveTo(764.9, 256.5, 759.9, 257.5, 755.8, 260.0);
    ctxBg.bezierCurveTo(749.6, 263.8, 745.5, 271.7, 740.4, 269.0);
    ctxBg.bezierCurveTo(736.2, 266.8, 734.9, 253.4, 734.6, 249.8);
    ctxBg.bezierCurveTo(734.6, 249.8, 731.4, 221.1, 756.4, 201.2);
    ctxBg.bezierCurveTo(756.4, 201.2, 762.9, 195.7, 770.2, 191.0);
    ctxBg.bezierCurveTo(775.4, 187.4, 775.6, 186.7, 777.1, 185.3);
    ctxBg.bezierCurveTo(778.6, 183.8, 778.5, 183.3, 780.1, 182.0);
    ctxBg.bezierCurveTo(781.8, 180.6, 784.4, 179.2, 787.8, 180.7);
    ctxBg.bezierCurveTo(787.8, 180.7, 788.2, 180.7, 788.7, 181.0);
    ctxBg.bezierCurveTo(789.8, 181.6, 791.6, 182.6, 793.1, 183.3);
    ctxBg.bezierCurveTo(794.5, 184.0, 801.9, 186.1, 807.6, 187.3);
    ctxBg.lineTo(809.6, 187.6);
    ctxBg.closePath();
    ctxBg.save();
    ctxBg.transform(0.965, -0.262, -0.262, -0.965, 42.9, 35.5);
    gradient = ctxBg.createLinearGradient(671.1, -426.4, 671.1, -333.5);
    gradient.addColorStop(0.00, "rgba(241, 166, 174, 0.00)");
    gradient.addColorStop(0.15, "rgba(241, 166, 174, 0.50)");
    gradient.addColorStop(0.29, "rgb(241, 166, 174)");
    gradient.addColorStop(0.52, "rgb(221, 135, 134)");
    gradient.addColorStop(0.77, "rgb(201, 103, 94)");
    ctxBg.fillStyle = gradient;
    ctxBg.fill();

    // 1///
    ctxBg.restore();
    ctxBg.globalAlpha = alpha * 0.15;
    ctxBg.beginPath();
    ctxBg.moveTo(760.9, 226.6);
    ctxBg.bezierCurveTo(761.8, 230.0, 759.8, 233.5, 756.4, 234.5);
    ctxBg.bezierCurveTo(753.0, 235.4, 749.4, 233.4, 748.5, 229.9);
    ctxBg.bezierCurveTo(747.6, 226.5, 749.6, 223.0, 753.0, 222.0);
    ctxBg.bezierCurveTo(756.5, 221.1, 760.0, 223.1, 760.9, 226.6);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(255, 255, 255)";
    ctxBg.fill();

    // 1///
    ctxBg.beginPath();
    ctxBg.moveTo(781.0, 212.5);
    ctxBg.bezierCurveTo(782.5, 217.9, 779.3, 223.4, 773.9, 224.9);
    ctxBg.bezierCurveTo(768.5, 226.3, 763.0, 223.2, 761.5, 217.8);
    ctxBg.bezierCurveTo(760.0, 212.4, 763.2, 206.8, 768.6, 205.4);
    ctxBg.bezierCurveTo(774.0, 203.9, 779.5, 207.1, 781.0, 212.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1///
    ctxBg.globalAlpha = alpha * 1.00;

    // 1////
    ctxBg.save();
    ctxBg.beginPath();
    ctxBg.moveTo(690.7, 338.6);
    ctxBg.bezierCurveTo(720.3, 343.2, 743.1, 324.9, 748.5, 290.4);
    ctxBg.bezierCurveTo(749.9, 281.5, 749.7, 272.1, 748.2, 263.1);
    ctxBg.lineTo(739.8, 249.5);
    ctxBg.bezierCurveTo(736.6, 244.2, 732.2, 244.0, 730.2, 249.0);
    ctxBg.bezierCurveTo(728.1, 254.0, 723.7, 254.9, 720.3, 251.0);
    ctxBg.bezierCurveTo(717.0, 247.1, 711.5, 246.0, 708.0, 248.5);
    ctxBg.bezierCurveTo(704.6, 251.1, 700.5, 248.9, 699.0, 243.6);
    ctxBg.bezierCurveTo(697.5, 238.3, 692.3, 237.2, 687.5, 241.1);
    ctxBg.lineTo(684.9, 243.2);
    ctxBg.bezierCurveTo(680.1, 247.1, 675.7, 246.4, 675.0, 241.5);
    ctxBg.bezierCurveTo(674.4, 236.7, 670.8, 236.7, 666.9, 241.5);
    ctxBg.lineTo(656.2, 254.8);
    ctxBg.bezierCurveTo(653.4, 261.3, 651.4, 268.2, 650.3, 275.1);
    ctxBg.bezierCurveTo(644.9, 309.6, 661.1, 334.0, 690.7, 338.6);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(172, 76, 94)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(675.0, 241.5);
    ctxBg.bezierCurveTo(675.7, 246.4, 680.1, 247.1, 684.9, 243.2);
    ctxBg.lineTo(687.5, 241.1);
    ctxBg.bezierCurveTo(692.3, 237.2, 697.5, 238.3, 699.0, 243.6);
    ctxBg.bezierCurveTo(700.5, 248.9, 704.6, 251.1, 708.0, 248.5);
    ctxBg.bezierCurveTo(711.5, 246.0, 717.0, 247.1, 720.3, 251.0);
    ctxBg.bezierCurveTo(723.7, 254.9, 728.1, 254.0, 730.2, 249.0);
    ctxBg.bezierCurveTo(732.2, 244.0, 736.6, 244.2, 739.8, 249.5);
    ctxBg.lineTo(748.2, 263.1);
    ctxBg.bezierCurveTo(744.0, 237.4, 728.3, 224.4, 709.4, 221.5);
    ctxBg.bezierCurveTo(688.9, 218.3, 667.3, 228.9, 656.2, 254.8);
    ctxBg.lineTo(666.9, 241.5);
    ctxBg.bezierCurveTo(670.8, 236.7, 674.4, 236.7, 675.0, 241.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////
    ctxBg.globalAlpha = alpha * 0.32;
    ctxBg.beginPath();
    ctxBg.moveTo(684.1, 240.3);
    ctxBg.bezierCurveTo(689.0, 242.6, 689.4, 252.0, 685.0, 261.5);
    ctxBg.bezierCurveTo(680.6, 270.9, 673.1, 276.8, 668.2, 274.5);
    ctxBg.bezierCurveTo(663.4, 272.2, 662.9, 262.7, 667.3, 253.3);
    ctxBg.bezierCurveTo(671.7, 243.9, 679.2, 238.0, 684.1, 240.3);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(205, 141, 157)";
    ctxBg.fill();

    // 1////
    ctxBg.globalAlpha = alpha * 1.00;
    ctxBg.beginPath();
    ctxBg.moveTo(699.9, 209.0);
    ctxBg.bezierCurveTo(703.4, 213.6, 710.2, 222.2, 704.6, 238.2);
    ctxBg.bezierCurveTo(704.2, 239.3, 705.0, 240.6, 706.2, 240.7);
    ctxBg.lineTo(706.6, 240.7);
    ctxBg.bezierCurveTo(707.5, 240.8, 708.4, 240.3, 708.6, 239.4);
    ctxBg.bezierCurveTo(710.6, 233.5, 715.0, 221.7, 704.7, 206.0);
    ctxBg.bezierCurveTo(704.2, 205.2, 703.2, 204.9, 702.3, 205.3);
    ctxBg.lineTo(700.7, 206.1);
    ctxBg.bezierCurveTo(699.5, 206.6, 699.1, 208.0, 699.9, 209.0);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(92, 144, 59)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(692.1, 229.6);
    ctxBg.bezierCurveTo(694.9, 240.3, 709.8, 247.9, 722.9, 233.8);
    ctxBg.bezierCurveTo(719.7, 236.1, 704.7, 241.6, 692.1, 229.6);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(149, 55, 77)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(707.0, 246.1);
    ctxBg.bezierCurveTo(707.4, 246.7, 707.2, 247.6, 706.5, 248.0);
    ctxBg.bezierCurveTo(705.9, 248.4, 705.0, 248.2, 704.6, 247.5);
    ctxBg.bezierCurveTo(704.2, 246.9, 704.5, 246.0, 705.1, 245.6);
    ctxBg.bezierCurveTo(705.8, 245.2, 706.6, 245.4, 707.0, 246.1);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(162, 83, 98)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(708.7, 329.3);
    ctxBg.bezierCurveTo(709.1, 330.0, 708.9, 330.8, 708.2, 331.2);
    ctxBg.bezierCurveTo(707.5, 331.6, 706.7, 331.4, 706.3, 330.7);
    ctxBg.bezierCurveTo(705.9, 330.1, 706.1, 329.2, 706.8, 328.8);
    ctxBg.bezierCurveTo(707.4, 328.4, 708.3, 328.6, 708.7, 329.3);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(722.6, 322.0);
    ctxBg.bezierCurveTo(723.0, 322.7, 722.8, 323.5, 722.1, 323.9);
    ctxBg.bezierCurveTo(721.5, 324.3, 720.6, 324.1, 720.2, 323.4);
    ctxBg.bezierCurveTo(719.8, 322.8, 720.0, 321.9, 720.7, 321.5);
    ctxBg.bezierCurveTo(721.4, 321.1, 722.2, 321.3, 722.6, 322.0);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(690.9, 330.8);
    ctxBg.bezierCurveTo(691.3, 331.5, 691.0, 332.3, 690.4, 332.7);
    ctxBg.bezierCurveTo(689.7, 333.1, 688.9, 332.9, 688.5, 332.3);
    ctxBg.bezierCurveTo(688.1, 331.6, 688.3, 330.7, 689.0, 330.3);
    ctxBg.bezierCurveTo(689.6, 329.9, 690.5, 330.2, 690.9, 330.8);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(729.0, 309.5);
    ctxBg.bezierCurveTo(729.4, 310.2, 729.2, 311.0, 728.5, 311.4);
    ctxBg.bezierCurveTo(727.9, 311.8, 727.0, 311.6, 726.6, 310.9);
    ctxBg.bezierCurveTo(726.2, 310.3, 726.4, 309.4, 727.1, 309.0);
    ctxBg.bezierCurveTo(727.8, 308.6, 728.6, 308.8, 729.0, 309.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(738.4, 295.5);
    ctxBg.bezierCurveTo(738.8, 296.2, 738.6, 297.0, 737.9, 297.4);
    ctxBg.bezierCurveTo(737.2, 297.8, 736.4, 297.6, 736.0, 296.9);
    ctxBg.bezierCurveTo(735.6, 296.3, 735.8, 295.4, 736.5, 295.0);
    ctxBg.bezierCurveTo(737.1, 294.6, 738.0, 294.9, 738.4, 295.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////

    // 1/////
    ctxBg.save();
    ctxBg.beginPath();
    ctxBg.moveTo(699.0, 307.6);
    ctxBg.bezierCurveTo(699.3, 308.3, 699.1, 309.2, 698.5, 309.6);
    ctxBg.bezierCurveTo(697.8, 309.9, 696.9, 309.7, 696.6, 309.1);
    ctxBg.bezierCurveTo(696.2, 308.4, 696.4, 307.5, 697.0, 307.2);
    ctxBg.bezierCurveTo(697.7, 306.8, 698.6, 307.0, 699.0, 307.6);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(200, 102, 135)";
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(716.3, 275.8);
    ctxBg.bezierCurveTo(716.7, 276.5, 716.5, 277.3, 715.8, 277.7);
    ctxBg.bezierCurveTo(715.2, 278.1, 714.3, 277.9, 713.9, 277.2);
    ctxBg.bezierCurveTo(713.5, 276.6, 713.7, 275.7, 714.4, 275.3);
    ctxBg.bezierCurveTo(715.1, 274.9, 715.9, 275.2, 716.3, 275.8);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(729.0, 286.5);
    ctxBg.bezierCurveTo(729.4, 287.2, 729.2, 288.0, 728.5, 288.4);
    ctxBg.bezierCurveTo(727.8, 288.8, 727.0, 288.6, 726.6, 287.9);
    ctxBg.bezierCurveTo(726.2, 287.3, 726.4, 286.4, 727.1, 286.0);
    ctxBg.bezierCurveTo(727.7, 285.6, 728.6, 285.9, 729.0, 286.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(731.5, 274.6);
    ctxBg.bezierCurveTo(731.9, 275.3, 731.7, 276.1, 731.0, 276.5);
    ctxBg.bezierCurveTo(730.4, 276.9, 729.5, 276.7, 729.1, 276.1);
    ctxBg.bezierCurveTo(728.7, 275.4, 729.0, 274.5, 729.6, 274.1);
    ctxBg.bezierCurveTo(730.3, 273.7, 731.1, 274.0, 731.5, 274.6);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(739.7, 268.9);
    ctxBg.bezierCurveTo(740.1, 269.6, 739.9, 270.4, 739.2, 270.8);
    ctxBg.bezierCurveTo(738.5, 271.2, 737.7, 271.0, 737.3, 270.3);
    ctxBg.bezierCurveTo(736.9, 269.7, 737.1, 268.8, 737.8, 268.4);
    ctxBg.bezierCurveTo(738.4, 268.0, 739.3, 268.3, 739.7, 268.9);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(705.1, 266.6);
    ctxBg.bezierCurveTo(705.5, 267.2, 705.3, 268.1, 704.6, 268.5);
    ctxBg.bezierCurveTo(703.9, 268.9, 703.1, 268.7, 702.7, 268.0);
    ctxBg.bezierCurveTo(702.3, 267.3, 702.5, 266.5, 703.2, 266.1);
    ctxBg.bezierCurveTo(703.8, 265.7, 704.7, 265.9, 705.1, 266.6);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(717.1, 306.8);
    ctxBg.bezierCurveTo(717.5, 307.4, 717.3, 308.3, 716.6, 308.7);
    ctxBg.bezierCurveTo(716.0, 309.1, 715.1, 308.9, 714.7, 308.2);
    ctxBg.bezierCurveTo(714.3, 307.5, 714.6, 306.7, 715.2, 306.3);
    ctxBg.bezierCurveTo(715.9, 305.9, 716.7, 306.1, 717.1, 306.8);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(709.8, 285.6);
    ctxBg.bezierCurveTo(710.2, 286.2, 710.0, 287.1, 709.3, 287.5);
    ctxBg.bezierCurveTo(708.6, 287.9, 707.8, 287.7, 707.4, 287.0);
    ctxBg.bezierCurveTo(707.0, 286.3, 707.2, 285.5, 707.9, 285.1);
    ctxBg.bezierCurveTo(708.5, 284.7, 709.4, 284.9, 709.8, 285.6);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(699.3, 253.5);
    ctxBg.bezierCurveTo(699.6, 254.1, 699.4, 255.0, 698.8, 255.4);
    ctxBg.bezierCurveTo(698.1, 255.8, 697.2, 255.6, 696.9, 254.9);
    ctxBg.bezierCurveTo(696.5, 254.2, 696.7, 253.4, 697.3, 253.0);
    ctxBg.bezierCurveTo(698.0, 252.6, 698.9, 252.8, 699.3, 253.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(707.5, 300.9);
    ctxBg.bezierCurveTo(707.9, 301.6, 707.6, 302.4, 707.0, 302.8);
    ctxBg.bezierCurveTo(706.3, 303.2, 705.5, 303.0, 705.1, 302.3);
    ctxBg.bezierCurveTo(704.7, 301.7, 704.9, 300.8, 705.6, 300.4);
    ctxBg.bezierCurveTo(706.2, 300.0, 707.1, 300.2, 707.5, 300.9);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(699.3, 291.1);
    ctxBg.bezierCurveTo(699.7, 291.8, 699.5, 292.7, 698.8, 293.1);
    ctxBg.bezierCurveTo(698.1, 293.5, 697.3, 293.2, 696.9, 292.6);
    ctxBg.bezierCurveTo(696.5, 291.9, 696.7, 291.1, 697.4, 290.7);
    ctxBg.bezierCurveTo(698.0, 290.3, 698.9, 290.5, 699.3, 291.1);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(720.8, 265.4);
    ctxBg.bezierCurveTo(721.2, 266.1, 721.0, 266.9, 720.3, 267.3);
    ctxBg.bezierCurveTo(719.7, 267.7, 718.8, 267.5, 718.4, 266.8);
    ctxBg.bezierCurveTo(718.0, 266.2, 718.2, 265.3, 718.9, 264.9);
    ctxBg.bezierCurveTo(719.6, 264.5, 720.4, 264.8, 720.8, 265.4);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(714.5, 255.0);
    ctxBg.bezierCurveTo(714.9, 255.7, 714.7, 256.5, 714.0, 256.9);
    ctxBg.bezierCurveTo(713.3, 257.3, 712.5, 257.1, 712.1, 256.4);
    ctxBg.bezierCurveTo(711.7, 255.8, 711.9, 254.9, 712.6, 254.5);
    ctxBg.bezierCurveTo(713.2, 254.1, 714.1, 254.3, 714.5, 255.0);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(717.4, 294.7);
    ctxBg.bezierCurveTo(717.8, 295.3, 717.6, 296.2, 716.9, 296.6);
    ctxBg.bezierCurveTo(716.3, 297.0, 715.4, 296.8, 715.0, 296.1);
    ctxBg.bezierCurveTo(714.6, 295.4, 714.8, 294.6, 715.5, 294.2);
    ctxBg.bezierCurveTo(716.2, 293.8, 717.0, 294.0, 717.4, 294.7);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(728.1, 297.4);
    ctxBg.bezierCurveTo(728.5, 298.0, 728.3, 298.9, 727.6, 299.3);
    ctxBg.bezierCurveTo(726.9, 299.7, 726.1, 299.5, 725.7, 298.8);
    ctxBg.bezierCurveTo(725.3, 298.1, 725.5, 297.3, 726.2, 296.9);
    ctxBg.bezierCurveTo(726.8, 296.5, 727.7, 296.7, 728.1, 297.4);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(698.1, 277.7);
    ctxBg.bezierCurveTo(698.5, 278.4, 698.3, 279.2, 697.6, 279.6);
    ctxBg.bezierCurveTo(697.0, 280.0, 696.1, 279.8, 695.7, 279.1);
    ctxBg.bezierCurveTo(695.3, 278.5, 695.5, 277.6, 696.2, 277.2);
    ctxBg.bezierCurveTo(696.8, 276.8, 697.7, 277.0, 698.1, 277.7);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(691.2, 268.5);
    ctxBg.bezierCurveTo(691.6, 269.2, 691.4, 270.1, 690.7, 270.5);
    ctxBg.bezierCurveTo(690.0, 270.8, 689.2, 270.6, 688.8, 270.0);
    ctxBg.bezierCurveTo(688.4, 269.3, 688.6, 268.4, 689.3, 268.1);
    ctxBg.bezierCurveTo(689.9, 267.7, 690.8, 267.9, 691.2, 268.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(713.3, 316.7);
    ctxBg.bezierCurveTo(713.7, 317.3, 713.5, 318.2, 712.8, 318.6);
    ctxBg.bezierCurveTo(712.1, 319.0, 711.3, 318.8, 710.9, 318.1);
    ctxBg.bezierCurveTo(710.5, 317.4, 710.7, 316.6, 711.4, 316.2);
    ctxBg.bezierCurveTo(712.0, 315.8, 712.9, 316.0, 713.3, 316.7);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(739.8, 282.2);
    ctxBg.bezierCurveTo(740.2, 282.9, 740.0, 283.7, 739.3, 284.1);
    ctxBg.bezierCurveTo(738.6, 284.5, 737.8, 284.3, 737.4, 283.6);
    ctxBg.bezierCurveTo(737.0, 283.0, 737.2, 282.1, 737.9, 281.7);
    ctxBg.bezierCurveTo(738.5, 281.3, 739.4, 281.5, 739.8, 282.2);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(675.6, 296.0);
    ctxBg.bezierCurveTo(676.0, 296.6, 675.8, 297.5, 675.1, 297.9);
    ctxBg.bezierCurveTo(674.5, 298.3, 673.6, 298.1, 673.2, 297.4);
    ctxBg.bezierCurveTo(672.8, 296.7, 673.1, 295.9, 673.7, 295.5);
    ctxBg.bezierCurveTo(674.4, 295.1, 675.2, 295.3, 675.6, 296.0);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(688.5, 304.9);
    ctxBg.bezierCurveTo(688.9, 305.6, 688.7, 306.5, 688.0, 306.8);
    ctxBg.bezierCurveTo(687.4, 307.2, 686.5, 307.0, 686.1, 306.4);
    ctxBg.bezierCurveTo(685.7, 305.7, 685.9, 304.8, 686.6, 304.4);
    ctxBg.bezierCurveTo(687.2, 304.1, 688.1, 304.3, 688.5, 304.9);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(687.3, 291.3);
    ctxBg.bezierCurveTo(687.7, 292.0, 687.5, 292.8, 686.8, 293.2);
    ctxBg.bezierCurveTo(686.1, 293.6, 685.3, 293.4, 684.9, 292.7);
    ctxBg.bezierCurveTo(684.5, 292.1, 684.7, 291.2, 685.4, 290.8);
    ctxBg.bezierCurveTo(686.0, 290.4, 686.9, 290.6, 687.3, 291.3);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(661.9, 285.6);
    ctxBg.bezierCurveTo(662.3, 286.2, 662.1, 287.1, 661.4, 287.5);
    ctxBg.bezierCurveTo(660.8, 287.9, 659.9, 287.7, 659.5, 287.0);
    ctxBg.bezierCurveTo(659.1, 286.3, 659.3, 285.5, 660.0, 285.1);
    ctxBg.bezierCurveTo(660.6, 284.7, 661.5, 284.9, 661.9, 285.6);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(699.1, 322.0);
    ctxBg.bezierCurveTo(699.5, 322.6, 699.3, 323.5, 698.6, 323.9);
    ctxBg.bezierCurveTo(697.9, 324.3, 697.1, 324.0, 696.7, 323.4);
    ctxBg.bezierCurveTo(696.3, 322.7, 696.5, 321.9, 697.2, 321.5);
    ctxBg.bezierCurveTo(697.8, 321.1, 698.7, 321.3, 699.1, 322.0);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(668.9, 307.9);
    ctxBg.bezierCurveTo(669.3, 308.6, 669.0, 309.4, 668.4, 309.8);
    ctxBg.bezierCurveTo(667.7, 310.2, 666.9, 310.0, 666.5, 309.3);
    ctxBg.bezierCurveTo(666.1, 308.7, 666.3, 307.8, 666.9, 307.4);
    ctxBg.bezierCurveTo(667.6, 307.0, 668.5, 307.2, 668.9, 307.9);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(681.9, 281.4);
    ctxBg.bezierCurveTo(682.3, 282.0, 682.1, 282.9, 681.5, 283.3);
    ctxBg.bezierCurveTo(680.8, 283.7, 679.9, 283.5, 679.5, 282.8);
    ctxBg.bezierCurveTo(679.1, 282.1, 679.4, 281.3, 680.0, 280.9);
    ctxBg.bezierCurveTo(680.7, 280.5, 681.5, 280.7, 681.9, 281.4);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(672.9, 283.0);
    ctxBg.bezierCurveTo(673.3, 283.7, 673.1, 284.5, 672.4, 284.9);
    ctxBg.bezierCurveTo(671.8, 285.3, 670.9, 285.1, 670.5, 284.4);
    ctxBg.bezierCurveTo(670.1, 283.8, 670.3, 282.9, 671.0, 282.5);
    ctxBg.bezierCurveTo(671.7, 282.1, 672.5, 282.3, 672.9, 283.0);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(659.2, 271.7);
    ctxBg.bezierCurveTo(659.6, 272.4, 659.4, 273.3, 658.7, 273.7);
    ctxBg.bezierCurveTo(658.0, 274.1, 657.2, 273.8, 656.8, 273.2);
    ctxBg.bezierCurveTo(656.4, 272.5, 656.6, 271.7, 657.3, 271.3);
    ctxBg.bezierCurveTo(657.9, 270.9, 658.8, 271.1, 659.2, 271.7);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(676.5, 317.0);
    ctxBg.bezierCurveTo(676.9, 317.7, 676.7, 318.5, 676.0, 318.9);
    ctxBg.bezierCurveTo(675.3, 319.3, 674.5, 319.1, 674.1, 318.4);
    ctxBg.bezierCurveTo(673.7, 317.8, 673.9, 316.9, 674.6, 316.5);
    ctxBg.bezierCurveTo(675.2, 316.1, 676.1, 316.3, 676.5, 317.0);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(687.2, 319.7);
    ctxBg.bezierCurveTo(687.6, 320.4, 687.3, 321.2, 686.7, 321.6);
    ctxBg.bezierCurveTo(686.0, 322.0, 685.2, 321.8, 684.8, 321.1);
    ctxBg.bezierCurveTo(684.4, 320.5, 684.6, 319.6, 685.2, 319.2);
    ctxBg.bezierCurveTo(685.9, 318.8, 686.8, 319.0, 687.2, 319.7);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(661.7, 299.2);
    ctxBg.bezierCurveTo(662.1, 299.9, 661.9, 300.7, 661.2, 301.1);
    ctxBg.bezierCurveTo(660.5, 301.5, 659.7, 301.3, 659.3, 300.7);
    ctxBg.bezierCurveTo(658.9, 300.0, 659.1, 299.1, 659.8, 298.7);
    ctxBg.bezierCurveTo(660.4, 298.3, 661.3, 298.6, 661.7, 299.2);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(735.9, 260.5);
    ctxBg.bezierCurveTo(736.3, 261.2, 736.1, 262.0, 735.5, 262.4);
    ctxBg.bezierCurveTo(734.8, 262.8, 733.9, 262.6, 733.5, 261.9);
    ctxBg.bezierCurveTo(733.1, 261.3, 733.4, 260.4, 734.0, 260.0);
    ctxBg.bezierCurveTo(734.7, 259.6, 735.5, 259.8, 735.9, 260.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////
    ctxBg.restore();
    ctxBg.beginPath();
    ctxBg.moveTo(737.5, 246.5);
    ctxBg.bezierCurveTo(737.9, 247.2, 737.7, 248.1, 737.0, 248.5);
    ctxBg.bezierCurveTo(736.4, 248.8, 735.5, 248.6, 735.1, 248.0);
    ctxBg.bezierCurveTo(734.7, 247.3, 734.9, 246.4, 735.6, 246.1);
    ctxBg.bezierCurveTo(736.3, 245.7, 737.1, 245.9, 737.5, 246.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(726.6, 249.7);
    ctxBg.bezierCurveTo(726.9, 250.4, 726.7, 251.2, 726.1, 251.6);
    ctxBg.bezierCurveTo(725.4, 252.0, 724.5, 251.8, 724.2, 251.2);
    ctxBg.bezierCurveTo(723.8, 250.5, 724.0, 249.6, 724.6, 249.2);
    ctxBg.bezierCurveTo(725.3, 248.8, 726.2, 249.1, 726.6, 249.7);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////
    // This artwork uses an unsupported "Multiply" blending mode
    ctxBg.globalAlpha = alpha * 0.30;
    ctxBg.beginPath();
    ctxBg.moveTo(712.1, 222.0);
    ctxBg.bezierCurveTo(712.1, 222.0, 739.7, 231.2, 742.3, 263.3);
    ctxBg.bezierCurveTo(744.2, 286.8, 734.0, 325.1, 672.3, 332.3);
    ctxBg.bezierCurveTo(672.3, 332.3, 719.6, 359.2, 743.8, 307.9);
    ctxBg.bezierCurveTo(754.6, 279.7, 752.5, 230.9, 712.1, 222.0);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(152, 152, 152)";
    ctxBg.fill();

    // 1///
    ctxBg.restore();
    ctxBg.globalAlpha = alpha * 0.75;

    // 1////
    ctxBg.save();
    ctxBg.globalAlpha = alpha * 1.00;

    // 1/////
    ctxBg.save();
    ctxBg.beginPath();
    ctxBg.moveTo(474.0, 196.9);
    ctxBg.bezierCurveTo(450.8, 200.8, 434.3, 219.2, 432.6, 254.6);
    ctxBg.bezierCurveTo(429.4, 320.5, 465.1, 350.2, 490.8, 343.1);
    ctxBg.bezierCurveTo(492.8, 342.6, 496.9, 343.4, 498.6, 344.6);
    ctxBg.bezierCurveTo(520.0, 360.4, 571.2, 344.3, 589.8, 288.4);
    ctxBg.bezierCurveTo(599.4, 259.4, 594.3, 228.4, 570.2, 214.9);
    ctxBg.bezierCurveTo(555.8, 206.9, 539.1, 210.3, 523.7, 207.0);
    ctxBg.bezierCurveTo(505.6, 203.1, 496.8, 193.0, 474.0, 196.9);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(248, 215, 148)";
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(529.1, 216.6);
    ctxBg.bezierCurveTo(533.5, 204.8, 543.4, 199.2, 541.1, 196.0);
    ctxBg.bezierCurveTo(538.8, 192.8, 533.5, 189.3, 531.6, 190.6);
    ctxBg.bezierCurveTo(528.4, 192.7, 521.8, 200.9, 517.9, 212.0);
    ctxBg.bezierCurveTo(514.2, 222.4, 523.3, 232.1, 529.1, 216.6);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(160, 121, 63)";
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(533.3, 335.1);
    ctxBg.bezierCurveTo(533.1, 336.4, 533.9, 337.6, 535.1, 337.8);
    ctxBg.bezierCurveTo(536.3, 338.1, 537.5, 337.3, 537.8, 336.1);
    ctxBg.bezierCurveTo(538.0, 334.9, 537.3, 333.7, 536.0, 333.4);
    ctxBg.bezierCurveTo(534.8, 333.1, 533.6, 333.9, 533.3, 335.1);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(231, 190, 118)";
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(528.2, 324.3);
    ctxBg.bezierCurveTo(528.0, 325.5, 528.8, 326.7, 530.0, 327.0);
    ctxBg.bezierCurveTo(531.2, 327.2, 532.4, 326.5, 532.7, 325.2);
    ctxBg.bezierCurveTo(532.9, 324.0, 532.2, 322.8, 530.9, 322.6);
    ctxBg.bezierCurveTo(529.7, 322.3, 528.5, 323.1, 528.2, 324.3);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(519.6, 332.9);
    ctxBg.bezierCurveTo(519.4, 334.1, 520.2, 335.3, 521.4, 335.6);
    ctxBg.bezierCurveTo(522.6, 335.9, 523.8, 335.1, 524.1, 333.9);
    ctxBg.bezierCurveTo(524.3, 332.6, 523.6, 331.4, 522.3, 331.2);
    ctxBg.bezierCurveTo(521.1, 330.9, 519.9, 331.7, 519.6, 332.9);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(509.0, 318.4);
    ctxBg.bezierCurveTo(508.7, 319.6, 509.5, 320.8, 510.7, 321.1);
    ctxBg.bezierCurveTo(512.0, 321.3, 513.2, 320.5, 513.4, 319.3);
    ctxBg.bezierCurveTo(513.7, 318.1, 512.9, 316.9, 511.7, 316.6);
    ctxBg.bezierCurveTo(510.5, 316.4, 509.3, 317.2, 509.0, 318.4);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(500.7, 327.3);
    ctxBg.bezierCurveTo(500.5, 328.5, 501.2, 329.7, 502.5, 330.0);
    ctxBg.bezierCurveTo(503.7, 330.2, 504.9, 329.4, 505.2, 328.2);
    ctxBg.bezierCurveTo(505.4, 327.0, 504.6, 325.8, 503.4, 325.5);
    ctxBg.bezierCurveTo(502.2, 325.3, 501.0, 326.1, 500.7, 327.3);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(495.3, 316.1);
    ctxBg.bezierCurveTo(495.0, 317.4, 495.8, 318.6, 497.0, 318.8);
    ctxBg.bezierCurveTo(498.3, 319.1, 499.5, 318.3, 499.7, 317.1);
    ctxBg.bezierCurveTo(500.0, 315.9, 499.2, 314.7, 498.0, 314.4);
    ctxBg.bezierCurveTo(496.8, 314.1, 495.6, 314.9, 495.3, 316.1);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(462.9, 317.1);
    ctxBg.bezierCurveTo(462.7, 318.4, 463.4, 319.6, 464.7, 319.8);
    ctxBg.bezierCurveTo(465.9, 320.1, 467.1, 319.3, 467.3, 318.1);
    ctxBg.bezierCurveTo(467.6, 316.9, 466.8, 315.7, 465.6, 315.4);
    ctxBg.bezierCurveTo(464.4, 315.1, 463.2, 315.9, 462.9, 317.1);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(477.3, 311.4);
    ctxBg.bezierCurveTo(477.0, 312.6, 477.8, 313.8, 479.0, 314.1);
    ctxBg.bezierCurveTo(480.2, 314.4, 481.4, 313.6, 481.7, 312.4);
    ctxBg.bezierCurveTo(481.9, 311.1, 481.2, 309.9, 479.9, 309.7);
    ctxBg.bezierCurveTo(478.7, 309.4, 477.5, 310.2, 477.3, 311.4);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(483.7, 322.6);
    ctxBg.bezierCurveTo(483.4, 323.8, 484.2, 325.0, 485.4, 325.3);
    ctxBg.bezierCurveTo(486.6, 325.5, 487.8, 324.7, 488.1, 323.5);
    ctxBg.bezierCurveTo(488.3, 322.3, 487.6, 321.1, 486.3, 320.8);
    ctxBg.bezierCurveTo(485.1, 320.6, 483.9, 321.3, 483.7, 322.6);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(455.5, 305.8);
    ctxBg.bezierCurveTo(455.2, 307.0, 456.0, 308.2, 457.2, 308.5);
    ctxBg.bezierCurveTo(458.5, 308.7, 459.7, 308.0, 459.9, 306.7);
    ctxBg.bezierCurveTo(460.2, 305.5, 459.4, 304.3, 458.2, 304.0);
    ctxBg.bezierCurveTo(457.0, 303.8, 455.8, 304.6, 455.5, 305.8);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(448.7, 278.2);
    ctxBg.bezierCurveTo(448.4, 279.4, 449.2, 280.6, 450.4, 280.8);
    ctxBg.bezierCurveTo(451.6, 281.1, 452.8, 280.3, 453.1, 279.1);
    ctxBg.bezierCurveTo(453.3, 277.9, 452.6, 276.7, 451.3, 276.4);
    ctxBg.bezierCurveTo(450.1, 276.2, 448.9, 276.9, 448.7, 278.2);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(459.9, 291.1);
    ctxBg.bezierCurveTo(459.7, 292.3, 460.4, 293.5, 461.7, 293.8);
    ctxBg.bezierCurveTo(462.9, 294.0, 464.1, 293.3, 464.4, 292.1);
    ctxBg.bezierCurveTo(464.6, 290.8, 463.8, 289.6, 462.6, 289.4);
    ctxBg.bezierCurveTo(461.4, 289.1, 460.2, 289.9, 459.9, 291.1);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(446.8, 294.3);
    ctxBg.bezierCurveTo(446.5, 295.5, 447.3, 296.7, 448.5, 296.9);
    ctxBg.bezierCurveTo(449.8, 297.2, 451.0, 296.4, 451.2, 295.2);
    ctxBg.bezierCurveTo(451.5, 294.0, 450.7, 292.8, 449.5, 292.5);
    ctxBg.bezierCurveTo(448.3, 292.3, 447.1, 293.0, 446.8, 294.3);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(465.5, 302.7);
    ctxBg.bezierCurveTo(465.3, 304.0, 466.1, 305.2, 467.3, 305.4);
    ctxBg.bezierCurveTo(468.5, 305.7, 469.7, 304.9, 470.0, 303.7);
    ctxBg.bezierCurveTo(470.2, 302.5, 469.5, 301.3, 468.2, 301.0);
    ctxBg.bezierCurveTo(467.0, 300.7, 465.8, 301.5, 465.5, 302.7);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(456.9, 271.9);
    ctxBg.bezierCurveTo(456.6, 273.1, 457.4, 274.3, 458.6, 274.6);
    ctxBg.bezierCurveTo(459.8, 274.8, 461.0, 274.0, 461.3, 272.8);
    ctxBg.bezierCurveTo(461.5, 271.6, 460.8, 270.4, 459.5, 270.1);
    ctxBg.bezierCurveTo(458.3, 269.9, 457.1, 270.6, 456.9, 271.9);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(545.9, 325.2);
    ctxBg.bezierCurveTo(545.6, 326.4, 546.4, 327.6, 547.6, 327.9);
    ctxBg.bezierCurveTo(548.8, 328.1, 550.0, 327.4, 550.3, 326.1);
    ctxBg.bezierCurveTo(550.5, 324.9, 549.8, 323.7, 548.5, 323.5);
    ctxBg.bezierCurveTo(547.3, 323.2, 546.1, 324.0, 545.9, 325.2);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(548.3, 299.6);
    ctxBg.bezierCurveTo(548.0, 300.8, 548.8, 302.0, 550.0, 302.2);
    ctxBg.bezierCurveTo(551.2, 302.5, 552.5, 301.7, 552.7, 300.5);
    ctxBg.bezierCurveTo(553.0, 299.3, 552.2, 298.1, 551.0, 297.8);
    ctxBg.bezierCurveTo(549.8, 297.6, 548.6, 298.3, 548.3, 299.6);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(550.3, 310.5);
    ctxBg.bezierCurveTo(550.0, 311.7, 550.8, 312.9, 552.0, 313.2);
    ctxBg.bezierCurveTo(553.2, 313.5, 554.4, 312.7, 554.7, 311.5);
    ctxBg.bezierCurveTo(555.0, 310.2, 554.2, 309.0, 553.0, 308.8);
    ctxBg.bezierCurveTo(551.7, 308.5, 550.5, 309.3, 550.3, 310.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(537.2, 313.7);
    ctxBg.bezierCurveTo(536.9, 314.9, 537.7, 316.1, 538.9, 316.4);
    ctxBg.bezierCurveTo(540.1, 316.6, 541.3, 315.8, 541.6, 314.6);
    ctxBg.bezierCurveTo(541.9, 313.4, 541.1, 312.2, 539.9, 311.9);
    ctxBg.bezierCurveTo(538.6, 311.7, 537.4, 312.4, 537.2, 313.7);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(565.0, 304.0);
    ctxBg.bezierCurveTo(564.8, 305.2, 565.6, 306.4, 566.8, 306.6);
    ctxBg.bezierCurveTo(568.0, 306.9, 569.2, 306.1, 569.5, 304.9);
    ctxBg.bezierCurveTo(569.7, 303.7, 569.0, 302.5, 567.7, 302.2);
    ctxBg.bezierCurveTo(566.5, 302.0, 565.3, 302.7, 565.0, 304.0);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(546.1, 216.3);
    ctxBg.bezierCurveTo(537.1, 230.1, 512.2, 233.9, 500.4, 207.6);
    ctxBg.bezierCurveTo(503.8, 212.4, 522.5, 227.4, 546.1, 216.3);
    ctxBg.closePath();
    ctxBg.fill();

    // 1/////
    // This artwork uses an unsupported "Multiply" blending mode
    ctxBg.globalAlpha = alpha * 0.17;
    ctxBg.beginPath();
    ctxBg.moveTo(540.5, 208.8);
    ctxBg.bezierCurveTo(540.5, 208.8, 587.1, 214.6, 576.3, 272.7);
    ctxBg.bezierCurveTo(564.8, 334.7, 518.0, 354.0, 499.4, 345.2);
    ctxBg.bezierCurveTo(499.4, 345.2, 521.4, 361.5, 555.9, 336.8);
    ctxBg.bezierCurveTo(590.5, 312.2, 604.1, 258.3, 587.9, 233.1);
    ctxBg.bezierCurveTo(587.9, 233.1, 579.3, 208.1, 540.5, 208.8);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(152, 152, 152)";
    ctxBg.fill();

    // 1///
    ctxBg.restore();
    ctxBg.restore();
    ctxBg.globalAlpha = alpha * 1.00;

    // 1////
    ctxBg.save();
    ctxBg.beginPath();
    ctxBg.moveTo(1217.7, 382.3);
    ctxBg.lineTo(1217.7, 516.4);
    ctxBg.lineTo(50.6, 516.4);
    ctxBg.lineTo(50.6, 284.2);
    ctxBg.bezierCurveTo(50.6, 284.2, 75.5, 269.8, 115.2, 249.7);
    ctxBg.bezierCurveTo(147.9, 233.2, 190.7, 212.6, 237.9, 193.0);
    ctxBg.bezierCurveTo(307.7, 164.0, 414.7, 185.5, 486.3, 242.4);
    ctxBg.bezierCurveTo(526.2, 274.2, 572.5, 290.3, 617.3, 295.4);
    ctxBg.bezierCurveTo(659.4, 300.2, 700.1, 295.2, 732.9, 284.2);
    ctxBg.bezierCurveTo(747.6, 279.3, 762.0, 275.7, 776.3, 273.5);
    ctxBg.bezierCurveTo(856.4, 260.6, 930.7, 285.7, 1000.5, 314.8);
    ctxBg.bezierCurveTo(1082.7, 349.2, 1217.7, 382.3, 1217.7, 382.3);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(40, 103, 134)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(767.8, 361.4);
    ctxBg.bezierCurveTo(706.3, 346.1, 642.3, 313.1, 617.3, 295.4);
    ctxBg.bezierCurveTo(659.4, 300.2, 700.1, 295.2, 732.9, 284.2);
    ctxBg.bezierCurveTo(747.6, 279.3, 762.0, 275.7, 776.3, 273.5);
    ctxBg.bezierCurveTo(775.4, 286.3, 767.7, 308.8, 789.1, 318.8);
    ctxBg.bezierCurveTo(820.0, 333.3, 814.8, 373.1, 767.8, 361.4);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(25, 98, 123)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(561.7, 507.7);
    ctxBg.lineTo(94.8, 516.4);
    ctxBg.lineTo(50.6, 516.4);
    ctxBg.lineTo(50.6, 284.2);
    ctxBg.bezierCurveTo(50.6, 284.2, 75.5, 269.8, 115.2, 249.7);
    ctxBg.bezierCurveTo(130.6, 287.5, 191.1, 410.1, 330.0, 431.4);
    ctxBg.bezierCurveTo(494.5, 456.6, 561.7, 507.7, 561.7, 507.7);
    ctxBg.closePath();
    ctxBg.fill();

    // 1///
    ctxBg.restore();

    // 1////
    ctxBg.save();
    ctxBg.beginPath();
    ctxBg.moveTo(127.2, 410.9);
    ctxBg.bezierCurveTo(126.2, 409.5, 124.9, 407.5, 123.4, 404.9);
    ctxBg.bezierCurveTo(112.3, 385.4, 113.3, 361.5, 125.1, 342.4);
    ctxBg.bezierCurveTo(127.6, 338.3, 129.4, 333.7, 128.7, 329.5);
    ctxBg.bezierCurveTo(126.9, 318.6, 123.0, 305.7, 138.3, 289.5);
    ctxBg.bezierCurveTo(155.2, 271.6, 169.5, 265.6, 188.5, 261.3);
    ctxBg.bezierCurveTo(199.7, 258.7, 220.3, 257.1, 237.1, 258.9);
    ctxBg.bezierCurveTo(260.8, 261.3, 270.2, 261.7, 294.1, 288.4);
    ctxBg.bezierCurveTo(318.0, 315.1, 335.1, 336.6, 316.5, 401.3);
    ctxBg.bezierCurveTo(306.1, 437.5, 247.8, 446.2, 242.6, 444.7);
    ctxBg.bezierCurveTo(237.3, 443.3, 235.2, 461.3, 186.7, 458.2);
    ctxBg.bezierCurveTo(154.1, 456.0, 135.0, 424.4, 130.0, 415.5);
    ctxBg.bezierCurveTo(129.1, 413.9, 128.2, 412.4, 127.2, 410.9);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(43, 131, 101)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(260.2, 474.3);
    ctxBg.bezierCurveTo(255.9, 459.8, 251.6, 445.2, 247.4, 430.6);
    ctxBg.lineTo(240.2, 405.7);
    ctxBg.bezierCurveTo(237.8, 397.2, 235.3, 388.8, 232.6, 380.3);
    ctxBg.bezierCurveTo(231.2, 376.1, 229.9, 371.9, 228.4, 367.7);
    ctxBg.lineTo(226.3, 361.4);
    ctxBg.lineTo(224.1, 355.1);
    ctxBg.bezierCurveTo(223.3, 353.0, 222.6, 351.0, 221.8, 348.9);
    ctxBg.bezierCurveTo(221.0, 346.8, 220.2, 344.7, 219.4, 342.6);
    ctxBg.bezierCurveTo(217.8, 338.5, 216.1, 334.3, 214.3, 330.2);
    ctxBg.bezierCurveTo(213.3, 328.0, 211.2, 326.5, 208.7, 326.5);
    ctxBg.bezierCurveTo(205.2, 326.4, 202.3, 329.2, 202.3, 332.7);
    ctxBg.bezierCurveTo(202.2, 337.2, 202.3, 341.6, 202.4, 346.1);
    ctxBg.bezierCurveTo(202.5, 348.3, 202.5, 350.5, 202.6, 352.8);
    ctxBg.bezierCurveTo(202.7, 355.0, 202.8, 357.2, 203.0, 359.4);
    ctxBg.lineTo(203.4, 366.1);
    ctxBg.lineTo(203.8, 372.7);
    ctxBg.bezierCurveTo(204.1, 377.1, 204.5, 381.5, 204.9, 385.9);
    ctxBg.bezierCurveTo(205.8, 394.8, 206.7, 403.5, 207.8, 412.3);
    ctxBg.bezierCurveTo(208.9, 421.2, 210.3, 430.1, 211.9, 438.9);
    ctxBg.bezierCurveTo(213.5, 447.7, 215.3, 456.5, 217.4, 465.3);
    ctxBg.bezierCurveTo(219.4, 474.0, 221.7, 482.7, 224.2, 491.3);
    ctxBg.bezierCurveTo(224.8, 493.5, 225.5, 495.7, 226.1, 497.8);
    ctxBg.bezierCurveTo(226.7, 500.0, 227.4, 502.1, 228.2, 504.2);
    ctxBg.bezierCurveTo(229.8, 508.4, 231.7, 512.5, 234.0, 516.5);
    ctxBg.bezierCurveTo(236.3, 520.4, 239.0, 524.3, 242.2, 527.9);
    ctxBg.bezierCurveTo(243.8, 529.7, 245.5, 531.5, 247.4, 533.2);
    ctxBg.bezierCurveTo(248.3, 534.0, 266.1, 531.2, 266.4, 530.0);
    ctxBg.bezierCurveTo(266.7, 528.7, 266.9, 527.5, 267.2, 526.2);
    ctxBg.bezierCurveTo(267.6, 523.8, 267.9, 521.4, 268.1, 519.0);
    ctxBg.bezierCurveTo(268.2, 516.7, 268.3, 514.4, 268.2, 512.1);
    ctxBg.bezierCurveTo(268.2, 509.9, 268.1, 507.7, 267.9, 505.4);
    ctxBg.bezierCurveTo(267.7, 503.2, 267.4, 501.1, 267.0, 498.9);
    ctxBg.bezierCurveTo(266.8, 498.1, 266.7, 497.3, 266.5, 496.5);
    ctxBg.bezierCurveTo(266.5, 496.5, 266.5, 496.5, 266.5, 496.5);
    ctxBg.bezierCurveTo(266.4, 495.9, 266.3, 495.2, 266.1, 494.6);
    ctxBg.bezierCurveTo(266.0, 493.9, 265.8, 493.3, 265.6, 492.6);
    ctxBg.bezierCurveTo(264.7, 488.8, 263.5, 485.1, 262.4, 481.3);
    ctxBg.bezierCurveTo(262.2, 481.0, 262.1, 480.6, 262.0, 480.2);
    ctxBg.bezierCurveTo(261.7, 479.1, 261.4, 478.0, 261.0, 476.9);
    ctxBg.lineTo(260.2, 474.3);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(146, 95, 58)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(178.3, 376.5);
    ctxBg.lineTo(178.7, 377.0);
    ctxBg.lineTo(179.1, 377.6);
    ctxBg.bezierCurveTo(179.4, 378.0, 179.7, 378.4, 180.0, 378.8);
    ctxBg.bezierCurveTo(180.6, 379.6, 181.3, 380.4, 181.9, 381.2);
    ctxBg.bezierCurveTo(182.6, 382.0, 183.2, 382.8, 183.9, 383.6);
    ctxBg.lineTo(186.0, 385.8);
    ctxBg.bezierCurveTo(188.8, 388.8, 191.7, 391.6, 194.9, 394.1);
    ctxBg.bezierCurveTo(196.4, 395.5, 198.0, 396.6, 199.6, 397.8);
    ctxBg.bezierCurveTo(200.4, 398.4, 201.3, 398.9, 202.1, 399.5);
    ctxBg.lineTo(203.3, 400.3);
    ctxBg.lineTo(204.6, 401.1);
    ctxBg.lineTo(207.1, 402.6);
    ctxBg.lineTo(209.7, 403.9);
    ctxBg.bezierCurveTo(210.2, 404.2, 210.6, 404.4, 211.0, 404.6);
    ctxBg.lineTo(212.4, 405.2);
    ctxBg.lineTo(215.0, 406.3);
    ctxBg.lineTo(215.4, 406.5);
    ctxBg.bezierCurveTo(219.4, 408.2, 221.2, 412.8, 219.4, 416.8);
    ctxBg.bezierCurveTo(217.7, 420.7, 213.1, 422.5, 209.2, 420.8);
    ctxBg.bezierCurveTo(208.9, 420.7, 208.7, 420.5, 208.4, 420.4);
    ctxBg.lineTo(205.3, 418.6);
    ctxBg.lineTo(203.8, 417.7);
    ctxBg.bezierCurveTo(203.3, 417.4, 202.8, 417.0, 202.3, 416.7);
    ctxBg.lineTo(199.4, 414.7);
    ctxBg.lineTo(196.6, 412.6);
    ctxBg.lineTo(195.2, 411.5);
    ctxBg.lineTo(193.9, 410.4);
    ctxBg.bezierCurveTo(193.0, 409.6, 192.1, 408.9, 191.2, 408.1);
    ctxBg.bezierCurveTo(189.6, 406.5, 187.9, 405.0, 186.3, 403.3);
    ctxBg.bezierCurveTo(183.1, 400.0, 180.2, 396.5, 177.5, 392.9);
    ctxBg.lineTo(175.5, 390.1);
    ctxBg.bezierCurveTo(174.9, 389.2, 174.2, 388.2, 173.6, 387.3);
    ctxBg.bezierCurveTo(173.0, 386.3, 172.4, 385.4, 171.8, 384.4);
    ctxBg.bezierCurveTo(171.5, 383.9, 171.2, 383.4, 170.9, 382.9);
    ctxBg.lineTo(170.5, 382.1);
    ctxBg.lineTo(170.0, 381.3);
    ctxBg.bezierCurveTo(168.8, 379.0, 169.6, 376.1, 171.9, 374.8);
    ctxBg.bezierCurveTo(174.1, 373.7, 176.7, 374.3, 178.1, 376.2);
    ctxBg.lineTo(178.3, 376.5);
    ctxBg.closePath();
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(214.3, 451.2);
    ctxBg.bezierCurveTo(219.8, 449.9, 223.9, 445.0, 223.9, 439.1);
    ctxBg.bezierCurveTo(223.9, 432.2, 218.3, 426.6, 211.5, 426.6);
    ctxBg.bezierCurveTo(210.9, 426.6, 210.4, 426.7, 209.9, 426.7);
    ctxBg.lineWidth = 0.7;
    ctxBg.strokeStyle = "rgb(177, 119, 35)";
    ctxBg.stroke();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(214.7, 453.5);
    ctxBg.bezierCurveTo(222.4, 452.5, 228.3, 446.0, 228.3, 438.1);
    ctxBg.bezierCurveTo(228.3, 429.6, 221.4, 422.7, 212.9, 422.7);
    ctxBg.bezierCurveTo(211.6, 422.7, 210.4, 422.9, 209.3, 423.1);
    ctxBg.stroke();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(260.2, 474.3);
    ctxBg.bezierCurveTo(254.7, 475.2, 250.5, 480.0, 250.5, 485.7);
    ctxBg.bezierCurveTo(250.5, 492.1, 255.7, 497.3, 262.1, 497.3);
    ctxBg.bezierCurveTo(263.6, 497.3, 265.0, 497.1, 266.3, 496.6);
    ctxBg.bezierCurveTo(266.4, 496.5, 266.4, 496.5, 266.5, 496.5);
    ctxBg.stroke();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(266.5, 496.5);
    ctxBg.bezierCurveTo(266.5, 496.6, 266.4, 496.6, 266.3, 496.6);
    ctxBg.bezierCurveTo(266.0, 496.6, 265.7, 496.6, 265.4, 496.6);
    ctxBg.bezierCurveTo(259.7, 496.6, 255.1, 492.0, 255.1, 486.3);
    ctxBg.bezierCurveTo(255.1, 482.1, 257.5, 478.6, 261.0, 476.9);
    ctxBg.stroke();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(262.4, 481.3);
    ctxBg.bezierCurveTo(261.0, 482.8, 260.2, 484.7, 260.2, 486.8);
    ctxBg.bezierCurveTo(260.2, 490.5, 262.7, 493.7, 266.1, 494.6);
    ctxBg.stroke();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(297.6, 355.1);
    ctxBg.bezierCurveTo(297.6, 354.8, 297.8, 354.6, 297.8, 354.3);
    ctxBg.bezierCurveTo(298.3, 348.5, 296.7, 344.0, 294.0, 340.8);
    ctxBg.bezierCurveTo(293.3, 340.0, 293.2, 338.8, 293.7, 337.9);
    ctxBg.bezierCurveTo(298.8, 328.6, 295.8, 315.4, 282.2, 309.9);
    ctxBg.bezierCurveTo(281.9, 309.8, 281.7, 309.7, 281.4, 309.7);
    ctxBg.bezierCurveTo(274.5, 309.0, 269.1, 310.8, 265.2, 313.9);
    ctxBg.bezierCurveTo(264.4, 314.5, 263.4, 314.7, 262.5, 314.3);
    ctxBg.bezierCurveTo(259.2, 312.9, 255.2, 313.1, 251.9, 315.2);
    ctxBg.bezierCurveTo(249.3, 316.9, 247.5, 319.4, 246.8, 322.3);
    ctxBg.bezierCurveTo(246.6, 323.3, 245.8, 324.1, 244.7, 324.3);
    ctxBg.bezierCurveTo(241.3, 324.9, 238.0, 326.2, 234.9, 328.1);
    ctxBg.bezierCurveTo(222.8, 335.7, 218.5, 351.2, 224.6, 363.8);
    ctxBg.bezierCurveTo(225.0, 364.7, 224.9, 365.7, 224.4, 366.5);
    ctxBg.bezierCurveTo(216.6, 377.9, 219.8, 395.6, 237.8, 402.5);
    ctxBg.bezierCurveTo(238.0, 402.6, 238.3, 402.7, 238.6, 402.7);
    ctxBg.bezierCurveTo(270.8, 408.4, 298.3, 381.8, 297.6, 355.1);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(50, 144, 113)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(259.9, 356.0);
    ctxBg.bezierCurveTo(259.8, 362.3, 259.5, 368.6, 259.1, 375.0);
    ctxBg.bezierCurveTo(258.7, 381.3, 258.2, 387.6, 257.5, 393.9);
    ctxBg.bezierCurveTo(256.8, 400.3, 256.0, 406.6, 254.7, 413.0);
    ctxBg.bezierCurveTo(254.1, 416.2, 253.4, 419.4, 252.5, 422.6);
    ctxBg.bezierCurveTo(251.6, 425.8, 250.5, 429.1, 248.9, 432.4);
    ctxBg.lineTo(248.9, 432.4);
    ctxBg.bezierCurveTo(247.5, 435.5, 243.8, 436.8, 240.7, 435.4);
    ctxBg.bezierCurveTo(237.6, 433.9, 236.3, 430.2, 237.7, 427.1);
    ctxBg.bezierCurveTo(237.8, 427.0, 237.9, 426.8, 237.9, 426.7);
    ctxBg.bezierCurveTo(239.2, 424.4, 240.3, 421.8, 241.3, 419.0);
    ctxBg.bezierCurveTo(242.3, 416.3, 243.2, 413.4, 244.0, 410.5);
    ctxBg.bezierCurveTo(245.6, 404.6, 246.9, 398.6, 248.0, 392.5);
    ctxBg.bezierCurveTo(249.2, 386.4, 250.1, 380.3, 251.0, 374.1);
    ctxBg.bezierCurveTo(251.8, 368.0, 252.6, 361.8, 253.1, 355.6);
    ctxBg.lineTo(253.1, 355.6);
    ctxBg.bezierCurveTo(253.3, 353.7, 255.0, 352.3, 256.9, 352.5);
    ctxBg.bezierCurveTo(258.6, 352.7, 260.0, 354.2, 259.9, 356.0);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(146, 95, 58)";
    ctxBg.fill();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(213.2, 446.1);
    ctxBg.bezierCurveTo(216.8, 446.0, 219.7, 443.1, 219.7, 439.5);
    ctxBg.bezierCurveTo(219.7, 435.8, 216.8, 432.8, 213.1, 432.8);
    ctxBg.bezierCurveTo(212.3, 432.8, 211.6, 432.9, 210.9, 433.2);
    ctxBg.stroke();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(197.9, 396.8);
    ctxBg.bezierCurveTo(197.9, 396.8, 196.9, 417.5, 198.7, 425.4);
    ctxBg.bezierCurveTo(199.0, 426.8, 200.7, 426.6, 200.8, 425.2);
    ctxBg.lineTo(201.4, 416.2);
    ctxBg.lineWidth = 1.4;
    ctxBg.strokeStyle = "rgb(64, 126, 92)";
    ctxBg.lineCap = "round";
    ctxBg.stroke();

    // 1////
    ctxBg.beginPath();
    ctxBg.moveTo(200.6, 398.8);
    ctxBg.bezierCurveTo(200.6, 398.8, 199.6, 419.5, 201.5, 427.4);
    ctxBg.bezierCurveTo(201.8, 428.8, 203.4, 428.6, 203.6, 427.2);
    ctxBg.lineTo(204.5, 418.1);
    ctxBg.stroke();

    // 1///
    ctxBg.restore();
    ctxBg.globalAlpha = alpha * 0.27;
    ctxBg.beginPath();
    ctxBg.moveTo(752.8, 206.6);
    ctxBg.bezierCurveTo(752.8, 207.4, 752.7, 208.2, 752.7, 208.9);
    ctxBg.lineTo(585.4, 208.9);
    ctxBg.bezierCurveTo(585.4, 208.2, 585.4, 207.4, 585.4, 206.6);
    ctxBg.bezierCurveTo(585.4, 187.7, 600.7, 172.4, 619.6, 172.4);
    ctxBg.bezierCurveTo(623.0, 172.4, 626.3, 172.8, 629.4, 173.8);
    ctxBg.bezierCurveTo(638.1, 160.3, 653.2, 151.3, 670.5, 151.3);
    ctxBg.bezierCurveTo(690.6, 151.3, 707.9, 163.5, 715.4, 180.9);
    ctxBg.bezierCurveTo(718.4, 179.7, 721.8, 179.1, 725.2, 179.1);
    ctxBg.bezierCurveTo(740.4, 179.1, 752.8, 191.4, 752.8, 206.6);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(124, 126, 124)";
    ctxBg.fill();

    // 1///
    ctxBg.globalAlpha = alpha * 0.50;
    ctxBg.beginPath();
    ctxBg.moveTo(167.1, 162.3);
    ctxBg.bezierCurveTo(167.1, 163.1, 167.1, 163.8, 167.0, 164.6);
    ctxBg.lineTo(0.1, 164.6);
    ctxBg.bezierCurveTo(0.0, 163.8, 0.0, 163.1, 0.0, 162.3);
    ctxBg.bezierCurveTo(0.0, 143.4, 15.3, 128.1, 34.2, 128.1);
    ctxBg.bezierCurveTo(37.6, 128.1, 40.9, 128.6, 43.9, 129.5);
    ctxBg.bezierCurveTo(52.6, 116.0, 67.8, 107.1, 85.0, 107.1);
    ctxBg.bezierCurveTo(105.1, 107.1, 122.3, 119.2, 129.8, 136.6);
    ctxBg.bezierCurveTo(132.9, 135.4, 136.2, 134.8, 139.6, 134.8);
    ctxBg.bezierCurveTo(154.8, 134.8, 167.1, 147.1, 167.1, 162.3);
    ctxBg.closePath();
    ctxBg.fill();

    // 1///
    ctxBg.globalAlpha = alpha * 1.00;
    ctxBg.beginPath();
    ctxBg.moveTo(371.7, 24.4);
    ctxBg.bezierCurveTo(371.6, 24.5, 371.6, 24.6, 371.5, 24.6);
    ctxBg.lineTo(371.5, 24.4);
    ctxBg.lineTo(371.7, 24.4);
    ctxBg.closePath();
    ctxBg.lineWidth = 0.6;
    ctxBg.strokeStyle = "rgb(61, 56, 65)";
    ctxBg.stroke();

    // 1///
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image1"), 928.3, 43.5);

    // 1///
    ctxBg.globalAlpha = alpha * 0.50;
    ctxBg.beginPath();
    ctxBg.moveTo(1010.3, 152.0);
    ctxBg.bezierCurveTo(1010.3, 152.8, 1010.3, 153.6, 1010.2, 154.3);
    ctxBg.lineTo(844.2, 154.3);
    ctxBg.bezierCurveTo(844.1, 153.6, 844.1, 152.8, 844.1, 152.0);
    ctxBg.bezierCurveTo(844.1, 133.3, 859.3, 118.0, 878.1, 118.0);
    ctxBg.bezierCurveTo(881.5, 118.0, 884.7, 118.5, 887.8, 119.4);
    ctxBg.bezierCurveTo(896.4, 106.0, 911.5, 97.2, 928.6, 97.2);
    ctxBg.bezierCurveTo(948.6, 97.2, 965.8, 109.2, 973.2, 126.5);
    ctxBg.bezierCurveTo(976.2, 125.3, 979.5, 124.7, 983.0, 124.7);
    ctxBg.bezierCurveTo(998.1, 124.7, 1010.3, 136.9, 1010.3, 152.0);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(145, 146, 145)";
    ctxBg.fill();

    // 1///
    ctxBg.globalAlpha = alpha * 0.61;
    ctxBg.beginPath();
    ctxBg.moveTo(1184.7, 212.3);
    ctxBg.bezierCurveTo(1184.7, 213.2, 1184.6, 214.1, 1184.5, 215.1);
    ctxBg.lineTo(981.2, 215.1);
    ctxBg.bezierCurveTo(981.1, 214.1, 981.1, 213.2, 981.1, 212.3);
    ctxBg.bezierCurveTo(981.1, 189.2, 999.7, 170.6, 1022.7, 170.6);
    ctxBg.bezierCurveTo(1026.9, 170.6, 1030.9, 171.2, 1034.6, 172.3);
    ctxBg.bezierCurveTo(1045.2, 155.9, 1063.6, 145.0, 1084.6, 145.0);
    ctxBg.bezierCurveTo(1109.1, 145.0, 1130.1, 159.8, 1139.2, 181.0);
    ctxBg.bezierCurveTo(1142.9, 179.5, 1147.0, 178.8, 1151.2, 178.8);
    ctxBg.bezierCurveTo(1169.7, 178.8, 1184.7, 193.8, 1184.7, 212.3);
    ctxBg.closePath();
    ctxBg.fill();

    // 1///
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image2"), 435.3, 147.7);

    // 1///
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image3"), 298.5, 67.5);

    // 1///
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image4"), 958.3, 233.9);

    // 1///
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image5"), 1032.6, 94.7);

    // 1///
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image6"), 553.2, 59.7);

    // 1///
    ctxBg.globalAlpha = alpha * 1.00;

    // 1////
    ctxBg.save();
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image7"), 859.1, 74.0);

    // 1////
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image8"), 862.1, 77.0);

    // 1///
    ctxBg.restore();

    // 1////
    ctxBg.save();
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image9"), 999.4, 29.5);

    // 1////
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image10"), 1004.4, 34.5);

    // 1///
    ctxBg.restore();

    // 1////
    ctxBg.save();
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image11"), 272.1, 103.6);

    // 1////
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image12"), 275.6, 107.6);

    // 1///
    ctxBg.restore();

    // 1////
    ctxBg.save();
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image13"), 989.1, 249.3);

    // 1////
    // This unsupported artwork has been rasterized
    ctxBg.drawImage(document.getElementById("image14"), 992.1, 252.3);

    // 1///
    ctxBg.restore();
    ctxBg.beginPath();
    ctxBg.moveTo(1213.1, 560.3);
    ctxBg.lineTo(38.5, 560.3);
    ctxBg.lineTo(38.5, 508.8);
    ctxBg.lineTo(1213.1, 508.8);
    ctxBg.lineTo(1213.1, 560.3);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(85, 154, 122)";
    ctxBg.fill();

    // 1///
    ctxBg.beginPath();
    ctxBg.moveTo(1254.9, 520.2);
    ctxBg.lineTo(10.2, 520.2);
    ctxBg.bezierCurveTo(12.2, 517.5, 15.2, 514.8, 19.6, 512.1);
    ctxBg.bezierCurveTo(20.6, 511.4, 21.9, 510.9, 23.4, 510.4);
    ctxBg.bezierCurveTo(45.0, 503.6, 67.4, 503.9, 83.9, 508.2);
    ctxBg.bezierCurveTo(88.9, 509.5, 95.1, 509.6, 100.1, 508.3);
    ctxBg.bezierCurveTo(107.6, 506.3, 116.4, 505.1, 125.8, 505.1);
    ctxBg.bezierCurveTo(135.1, 505.1, 143.8, 506.2, 151.2, 508.2);
    ctxBg.bezierCurveTo(156.4, 509.5, 162.8, 509.5, 167.9, 508.2);
    ctxBg.bezierCurveTo(175.4, 506.2, 184.1, 505.1, 193.4, 505.1);
    ctxBg.bezierCurveTo(202.6, 505.1, 211.3, 506.2, 218.8, 508.2);
    ctxBg.bezierCurveTo(224.0, 509.5, 230.3, 509.5, 235.5, 508.2);
    ctxBg.bezierCurveTo(243.0, 506.2, 251.7, 505.1, 260.9, 505.1);
    ctxBg.bezierCurveTo(270.2, 505.1, 278.9, 506.2, 286.4, 508.2);
    ctxBg.bezierCurveTo(291.6, 509.5, 297.9, 509.5, 303.1, 508.2);
    ctxBg.bezierCurveTo(310.5, 506.2, 319.2, 505.1, 328.5, 505.1);
    ctxBg.bezierCurveTo(337.8, 505.1, 346.5, 506.2, 353.9, 508.2);
    ctxBg.bezierCurveTo(359.1, 509.5, 365.5, 509.5, 370.6, 508.2);
    ctxBg.bezierCurveTo(378.1, 506.2, 386.8, 505.1, 396.1, 505.1);
    ctxBg.bezierCurveTo(405.4, 505.1, 414.0, 506.2, 421.5, 508.2);
    ctxBg.bezierCurveTo(426.7, 509.5, 433.0, 509.5, 438.2, 508.2);
    ctxBg.bezierCurveTo(445.7, 506.2, 454.4, 505.1, 463.6, 505.1);
    ctxBg.bezierCurveTo(472.9, 505.1, 481.6, 506.2, 489.1, 508.2);
    ctxBg.bezierCurveTo(494.3, 509.5, 500.6, 509.5, 505.8, 508.2);
    ctxBg.bezierCurveTo(513.2, 506.2, 521.9, 505.1, 531.2, 505.1);
    ctxBg.bezierCurveTo(540.5, 505.1, 549.2, 506.2, 556.7, 508.2);
    ctxBg.bezierCurveTo(561.8, 509.5, 568.2, 509.5, 573.3, 508.2);
    ctxBg.bezierCurveTo(580.8, 506.2, 589.5, 505.1, 598.8, 505.1);
    ctxBg.bezierCurveTo(608.1, 505.1, 616.8, 506.2, 624.2, 508.2);
    ctxBg.bezierCurveTo(629.4, 509.5, 635.7, 509.5, 640.9, 508.2);
    ctxBg.bezierCurveTo(648.4, 506.2, 657.1, 505.1, 666.4, 505.1);
    ctxBg.bezierCurveTo(675.6, 505.1, 684.3, 506.2, 691.8, 508.2);
    ctxBg.bezierCurveTo(697.0, 509.5, 703.3, 509.5, 708.5, 508.2);
    ctxBg.bezierCurveTo(716.0, 506.2, 724.6, 505.1, 733.9, 505.1);
    ctxBg.bezierCurveTo(743.2, 505.1, 751.9, 506.2, 759.4, 508.2);
    ctxBg.bezierCurveTo(764.5, 509.5, 770.9, 509.5, 776.1, 508.2);
    ctxBg.bezierCurveTo(783.5, 506.2, 792.2, 505.1, 801.5, 505.1);
    ctxBg.bezierCurveTo(810.8, 505.1, 819.5, 506.2, 826.9, 508.2);
    ctxBg.bezierCurveTo(832.1, 509.5, 838.5, 509.5, 843.6, 508.2);
    ctxBg.bezierCurveTo(851.1, 506.2, 859.8, 505.1, 869.1, 505.1);
    ctxBg.bezierCurveTo(878.3, 505.1, 887.0, 506.2, 894.5, 508.2);
    ctxBg.bezierCurveTo(899.7, 509.5, 906.0, 509.5, 911.2, 508.2);
    ctxBg.bezierCurveTo(918.7, 506.2, 927.4, 505.1, 936.6, 505.1);
    ctxBg.bezierCurveTo(945.9, 505.1, 954.6, 506.2, 962.1, 508.2);
    ctxBg.bezierCurveTo(967.3, 509.5, 973.6, 509.5, 978.8, 508.2);
    ctxBg.bezierCurveTo(986.2, 506.2, 994.9, 505.1, 1004.2, 505.1);
    ctxBg.bezierCurveTo(1013.5, 505.1, 1022.2, 506.2, 1029.6, 508.2);
    ctxBg.bezierCurveTo(1034.8, 509.5, 1041.2, 509.5, 1046.3, 508.2);
    ctxBg.bezierCurveTo(1053.8, 506.2, 1062.5, 505.1, 1071.8, 505.1);
    ctxBg.bezierCurveTo(1081.1, 505.1, 1089.7, 506.2, 1097.2, 508.2);
    ctxBg.bezierCurveTo(1102.4, 509.5, 1108.7, 509.5, 1113.9, 508.2);
    ctxBg.bezierCurveTo(1121.4, 506.2, 1130.1, 505.1, 1139.3, 505.1);
    ctxBg.bezierCurveTo(1148.7, 505.1, 1157.5, 506.3, 1165.1, 508.3);
    ctxBg.bezierCurveTo(1170.1, 509.6, 1176.3, 509.5, 1181.3, 508.2);
    ctxBg.bezierCurveTo(1197.7, 503.9, 1220.2, 503.6, 1241.8, 510.4);
    ctxBg.bezierCurveTo(1243.3, 510.9, 1244.6, 511.4, 1245.6, 512.1);
    ctxBg.bezierCurveTo(1249.9, 514.8, 1253.0, 517.5, 1254.9, 520.2);
    ctxBg.closePath();
    ctxBg.fill();

    // 1///

    // 1////
    ctxBg.save();

    // 1/////
    ctxBg.save();
    ctxBg.beginPath();
    ctxBg.moveTo(232.2, 486.1);
    ctxBg.bezierCurveTo(225.9, 475.1, 213.5, 472.5, 200.1, 480.1);
    ctxBg.bezierCurveTo(196.6, 482.1, 193.4, 484.7, 190.6, 487.7);
    ctxBg.lineTo(188.1, 494.2);
    ctxBg.bezierCurveTo(187.2, 496.7, 188.3, 498.2, 190.6, 497.5);
    ctxBg.bezierCurveTo(192.9, 496.8, 194.3, 498.0, 193.9, 500.2);
    ctxBg.bezierCurveTo(193.4, 502.3, 194.5, 504.5, 196.3, 504.9);
    ctxBg.bezierCurveTo(198.1, 505.4, 198.4, 507.3, 197.0, 509.2);
    ctxBg.bezierCurveTo(195.5, 511.2, 196.5, 513.2, 199.2, 513.7);
    ctxBg.lineTo(200.6, 514.0);
    ctxBg.bezierCurveTo(203.2, 514.5, 204.1, 516.2, 202.6, 517.7);
    ctxBg.bezierCurveTo(201.1, 519.2, 202.1, 520.4, 204.8, 520.4);
    ctxBg.lineTo(212.2, 520.3);
    ctxBg.bezierCurveTo(215.2, 519.4, 218.2, 518.2, 220.9, 516.7);
    ctxBg.bezierCurveTo(234.3, 509.1, 238.4, 497.1, 232.2, 486.1);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(225, 74, 74)";
    ctxBg.fill();

    // 1/////
    ctxBg.beginPath();
    ctxBg.moveTo(202.6, 517.7);
    ctxBg.bezierCurveTo(204.1, 516.2, 203.2, 514.5, 200.6, 514.0);
    ctxBg.lineTo(199.2, 513.7);
    ctxBg.bezierCurveTo(196.5, 513.2, 195.5, 511.2, 197.0, 509.2);
    ctxBg.bezierCurveTo(198.4, 507.3, 198.1, 505.4, 196.3, 504.9);
    ctxBg.bezierCurveTo(194.5, 504.5, 193.4, 502.3, 193.9, 500.2);
    ctxBg.bezierCurveTo(194.3, 498.0, 192.9, 496.8, 190.6, 497.5);
    ctxBg.bezierCurveTo(188.3, 498.2, 187.2, 496.7, 188.1, 494.2);
    ctxBg.lineTo(190.6, 487.7);
    ctxBg.bezierCurveTo(182.9, 496.1, 178.8, 507.1, 182.8, 514.2);
    ctxBg.bezierCurveTo(187.2, 521.8, 200.3, 523.7, 212.2, 520.3);
    ctxBg.lineTo(204.8, 520.4);
    ctxBg.bezierCurveTo(202.1, 520.4, 201.1, 519.2, 202.6, 517.7);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(236, 85, 85)";
    ctxBg.fill();

    // 1////
    // This artwork uses an unsupported "Overlay" blending mode
    ctxBg.restore();
    ctxBg.globalAlpha = alpha * 0.63;
    ctxBg.beginPath();
    ctxBg.moveTo(221.9, 482.3);
    ctxBg.bezierCurveTo(222.1, 484.6, 218.5, 486.8, 213.9, 487.2);
    ctxBg.bezierCurveTo(209.4, 487.5, 205.5, 485.9, 205.3, 483.5);
    ctxBg.bezierCurveTo(205.2, 481.1, 208.7, 478.9, 213.3, 478.6);
    ctxBg.bezierCurveTo(217.9, 478.3, 221.8, 479.9, 221.9, 482.3);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(251, 213, 213)";
    ctxBg.fill();

    // 1////
    ctxBg.globalAlpha = alpha * 1.00;
    ctxBg.beginPath();
    ctxBg.moveTo(234.4, 483.6);
    ctxBg.bezierCurveTo(236.4, 482.4, 242.1, 479.0, 244.1, 477.8);
    ctxBg.bezierCurveTo(244.5, 477.5, 244.9, 477.6, 245.2, 478.0);
    ctxBg.lineTo(246.4, 479.7);
    ctxBg.bezierCurveTo(246.7, 480.1, 246.5, 480.6, 246.0, 480.8);
    ctxBg.lineTo(235.1, 485.0);
    ctxBg.bezierCurveTo(234.7, 485.1, 234.4, 485.0, 234.2, 484.7);
    ctxBg.lineTo(234.2, 484.7);
    ctxBg.bezierCurveTo(233.9, 484.3, 234.0, 483.8, 234.4, 483.6);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(81, 149, 46)";
    ctxBg.fill();

    // 1////
    // This artwork uses an unsupported "Multiply" blending mode
    ctxBg.globalAlpha = alpha * 0.30;
    ctxBg.beginPath();
    ctxBg.moveTo(232.8, 486.6);
    ctxBg.bezierCurveTo(232.8, 486.6, 234.3, 501.4, 217.4, 514.5);
    ctxBg.bezierCurveTo(217.4, 514.5, 206.7, 521.9, 191.8, 520.6);
    ctxBg.bezierCurveTo(191.8, 520.6, 204.0, 525.4, 220.0, 517.2);
    ctxBg.bezierCurveTo(236.0, 509.0, 235.1, 495.8, 235.1, 495.8);
    ctxBg.lineTo(232.8, 486.6);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(152, 152, 152)";
    ctxBg.fill();

    // 1////
    ctxBg.globalAlpha = alpha * 1.00;
    ctxBg.beginPath();
    ctxBg.moveTo(236.6, 482.9);
    ctxBg.bezierCurveTo(236.1, 482.2, 231.1, 475.1, 233.6, 469.4);
    ctxBg.bezierCurveTo(233.7, 469.0, 233.3, 468.7, 233.0, 468.9);
    ctxBg.bezierCurveTo(231.4, 470.1, 229.0, 472.5, 228.9, 476.3);
    ctxBg.bezierCurveTo(228.9, 476.7, 228.5, 476.8, 228.3, 476.6);
    ctxBg.bezierCurveTo(226.7, 475.3, 222.6, 471.7, 220.7, 466.8);
    ctxBg.bezierCurveTo(220.5, 466.4, 220.0, 466.4, 219.9, 466.9);
    ctxBg.bezierCurveTo(219.6, 469.7, 219.9, 475.9, 226.8, 480.2);
    ctxBg.bezierCurveTo(227.1, 480.3, 227.1, 480.7, 226.9, 480.9);
    ctxBg.bezierCurveTo(225.1, 482.1, 219.2, 487.0, 222.6, 493.9);
    ctxBg.bezierCurveTo(222.8, 494.3, 223.3, 494.2, 223.4, 493.8);
    ctxBg.bezierCurveTo(223.8, 491.5, 225.5, 486.5, 231.8, 487.1);
    ctxBg.bezierCurveTo(232.0, 487.1, 232.2, 487.3, 232.2, 487.5);
    ctxBg.bezierCurveTo(231.8, 489.8, 230.7, 501.2, 240.5, 507.5);
    ctxBg.bezierCurveTo(240.8, 507.7, 241.3, 507.3, 241.0, 506.9);
    ctxBg.bezierCurveTo(239.2, 504.6, 236.8, 500.1, 237.9, 493.6);
    ctxBg.bezierCurveTo(237.9, 493.3, 238.3, 493.2, 238.5, 493.4);
    ctxBg.bezierCurveTo(239.9, 494.4, 244.2, 497.3, 249.0, 497.7);
    ctxBg.bezierCurveTo(249.4, 497.8, 249.6, 497.2, 249.2, 497.0);
    ctxBg.bezierCurveTo(245.8, 495.4, 238.8, 491.1, 236.7, 483.0);
    ctxBg.bezierCurveTo(236.7, 483.0, 236.7, 482.9, 236.6, 482.9);
    ctxBg.closePath();
    ctxBg.fillStyle = "rgb(81, 149, 46)";
    ctxBg.fill();
    ctxBg.restore();
    ctxBg.restore();
    ctxBg.restore();
    ctxBg.restore();
}

function getCharactor(role, x, y) {
    ctx.save();

    ctx.translate(x, y);
    ctx.scale(1.3, 1.3);
    if (role == 1) {

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(36.1, 55.0);
        ctx.lineTo(5.5, 55.0);
        ctx.bezierCurveTo(4.7, 55.0, 4.2, 54.4, 4.2, 53.6);
        ctx.lineTo(5.6, 18.4);
        ctx.bezierCurveTo(6.2, 7.4, 11.8, -0.6, 22.1, 0.0);
        ctx.bezierCurveTo(29.3, 0.5, 35.2, 8.8, 35.7, 20.2);
        ctx.lineTo(38.8, 51.9);
        ctx.bezierCurveTo(39.2, 54.7, 38.2, 55.0, 36.1, 55.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(31.5, 13.9);
        ctx.bezierCurveTo(31.5, 20.0, 26.7, 25.0, 20.8, 25.0);
        ctx.bezierCurveTo(15.0, 25.0, 10.2, 20.0, 10.2, 13.9);
        ctx.bezierCurveTo(10.2, 7.7, 15.0, 2.7, 20.8, 2.7);
        ctx.bezierCurveTo(26.7, 2.7, 31.5, 7.7, 31.5, 13.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(17.3, 13.5);
        ctx.bezierCurveTo(17.3, 14.3, 16.5, 14.9, 15.5, 14.9);
        ctx.bezierCurveTo(14.6, 14.9, 13.8, 14.3, 13.8, 13.5);
        ctx.bezierCurveTo(13.8, 12.7, 14.6, 12.1, 15.5, 12.1);
        ctx.bezierCurveTo(16.5, 12.1, 17.3, 12.7, 17.3, 13.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(27.6, 13.5);
        ctx.bezierCurveTo(27.6, 14.3, 26.8, 14.9, 25.8, 14.9);
        ctx.bezierCurveTo(24.9, 14.9, 24.1, 14.3, 24.1, 13.5);
        ctx.bezierCurveTo(24.1, 12.7, 24.9, 12.1, 25.8, 12.1);
        ctx.bezierCurveTo(26.8, 12.1, 27.6, 12.7, 27.6, 13.5);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(24.1, 19.0);
        ctx.bezierCurveTo(24.1, 20.1, 22.6, 20.9, 20.8, 20.9);
        ctx.bezierCurveTo(19.1, 20.9, 17.6, 20.1, 17.6, 19.0);
        ctx.bezierCurveTo(17.6, 17.9, 19.1, 18.9, 20.8, 18.9);
        ctx.bezierCurveTo(22.6, 18.9, 24.1, 17.9, 24.1, 19.0);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(16.7, 15.2);
        ctx.bezierCurveTo(16.8, 15.2, 16.7, 15.1, 16.6, 15.1);
        ctx.bezierCurveTo(16.4, 15.2, 16.1, 15.3, 15.9, 15.4);
        ctx.bezierCurveTo(15.6, 15.4, 15.2, 15.4, 15.0, 15.4);
        ctx.bezierCurveTo(14.9, 15.3, 14.8, 15.4, 14.8, 15.5);
        ctx.bezierCurveTo(14.7, 17.3, 15.6, 18.4, 16.1, 18.8);
        ctx.bezierCurveTo(16.2, 18.9, 16.4, 18.8, 16.4, 18.7);
        ctx.bezierCurveTo(16.3, 16.9, 16.6, 15.8, 16.7, 15.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(205, 85, 208)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(24.8, 15.3);
        ctx.bezierCurveTo(24.8, 15.2, 24.9, 15.1, 25.0, 15.2);
        ctx.bezierCurveTo(25.2, 15.3, 25.4, 15.3, 25.7, 15.4);
        ctx.bezierCurveTo(26.0, 15.4, 26.3, 15.4, 26.6, 15.3);
        ctx.bezierCurveTo(26.7, 15.3, 26.8, 15.3, 26.8, 15.4);
        ctx.bezierCurveTo(26.9, 17.3, 26.1, 18.3, 25.7, 18.8);
        ctx.bezierCurveTo(25.6, 18.9, 25.4, 18.8, 25.4, 18.7);
        ctx.bezierCurveTo(25.4, 16.9, 25.0, 15.8, 24.8, 15.3);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(24.7, 11.7);
        ctx.bezierCurveTo(24.6, 11.8, 24.8, 11.9, 24.9, 11.8);
        ctx.bezierCurveTo(25.1, 11.8, 25.3, 11.7, 25.5, 11.7);
        ctx.bezierCurveTo(25.9, 11.6, 26.2, 11.6, 26.5, 11.7);
        ctx.bezierCurveTo(26.5, 11.7, 26.6, 11.7, 26.7, 11.6);
        ctx.bezierCurveTo(26.8, 9.8, 26.0, 8.7, 25.5, 8.2);
        ctx.bezierCurveTo(25.5, 8.1, 25.2, 8.2, 25.2, 8.3);
        ctx.bezierCurveTo(25.2, 10.1, 24.9, 11.2, 24.7, 11.7);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(16.7, 11.7);
        ctx.bezierCurveTo(16.8, 11.8, 16.7, 11.9, 16.5, 11.8);
        ctx.bezierCurveTo(16.3, 11.8, 16.1, 11.7, 15.9, 11.7);
        ctx.bezierCurveTo(15.5, 11.6, 15.2, 11.6, 14.9, 11.7);
        ctx.bezierCurveTo(14.9, 11.7, 14.8, 11.7, 14.7, 11.6);
        ctx.bezierCurveTo(14.6, 9.8, 15.4, 8.7, 15.9, 8.2);
        ctx.bezierCurveTo(16.0, 8.1, 16.2, 8.2, 16.2, 8.3);
        ctx.bezierCurveTo(16.2, 10.1, 16.5, 11.2, 16.7, 11.7);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(6.9, 23.2);
        ctx.bezierCurveTo(6.9, 23.2, 3.8, 21.6, 2.9, 17.0);
        ctx.bezierCurveTo(2.0, 12.6, 0.1, 14.3, 0.0, 18.0);
        ctx.bezierCurveTo(-0.1, 21.6, 2.2, 27.9, 5.3, 29.4);
        ctx.bezierCurveTo(8.5, 30.9, 6.9, 23.2, 6.9, 23.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(34.2, 23.2);
        ctx.bezierCurveTo(34.2, 23.2, 37.3, 21.6, 38.3, 17.0);
        ctx.bezierCurveTo(39.2, 12.6, 41.1, 14.3, 41.1, 18.0);
        ctx.bezierCurveTo(41.2, 21.6, 39.0, 27.9, 35.8, 29.4);
        ctx.bezierCurveTo(32.6, 30.9, 34.2, 23.2, 34.2, 23.2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        ctx.restore();
    }
    else if (role == 2) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(3.7, 54.0);
        ctx.bezierCurveTo(3.7, 54.0, 11.7, 56.3, 27.3, 54.0);
        ctx.bezierCurveTo(28.1, 53.9, 28.2, 53.0, 27.5, 52.7);
        ctx.bezierCurveTo(24.4, 51.3, 17.7, 49.0, 9.9, 50.5);
        ctx.bezierCurveTo(-1.0, 52.6, 3.7, 54.0, 3.7, 54.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(29.7, 49.9);
        ctx.bezierCurveTo(29.8, 51.1, 30.1, 52.7, 29.0, 53.2);
        ctx.bezierCurveTo(27.8, 53.9, 26.0, 53.8, 24.0, 52.9);
        ctx.bezierCurveTo(19.5, 51.0, 17.4, 52.8, 16.9, 53.0);
        ctx.bezierCurveTo(12.9, 54.1, 13.1, 52.8, 9.4, 52.8);
        ctx.bezierCurveTo(6.4, 52.8, 6.0, 53.8, 3.7, 54.1);
        ctx.bezierCurveTo(3.7, 54.1, 3.7, 54.1, 3.7, 54.1);
        ctx.bezierCurveTo(3.0, 54.2, 2.3, 53.6, 2.4, 52.9);
        ctx.lineTo(3.5, 24.4);
        ctx.bezierCurveTo(3.9, 15.1, 8.4, 8.4, 16.6, 8.9);
        ctx.bezierCurveTo(22.4, 9.3, 27.1, 16.3, 27.4, 26.0);
        ctx.lineTo(29.7, 49.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(224, 219, 228)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(23.5, 18.0);
        ctx.bezierCurveTo(23.5, 22.9, 19.7, 26.9, 15.1, 26.9);
        ctx.bezierCurveTo(10.4, 26.9, 6.6, 22.9, 6.6, 18.0);
        ctx.bezierCurveTo(6.6, 13.0, 10.4, 9.0, 15.1, 9.0);
        ctx.bezierCurveTo(19.7, 9.0, 23.5, 13.0, 23.5, 18.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 234, 231)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(19.3, 21.1);
        ctx.bezierCurveTo(19.3, 22.2, 17.9, 23.0, 16.1, 23.0);
        ctx.bezierCurveTo(14.3, 23.0, 12.8, 22.2, 12.8, 21.1);
        ctx.bezierCurveTo(12.8, 20.0, 14.3, 20.9, 16.1, 20.9);
        ctx.bezierCurveTo(17.9, 20.9, 19.3, 20.0, 19.3, 21.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(36, 32, 39)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.6, 17.1);
        ctx.bezierCurveTo(22.6, 18.0, 21.8, 18.8, 20.8, 18.8);
        ctx.bezierCurveTo(19.9, 18.8, 19.1, 18.0, 19.1, 17.1);
        ctx.bezierCurveTo(19.1, 16.1, 19.9, 15.3, 20.8, 15.3);
        ctx.bezierCurveTo(21.8, 15.3, 22.6, 16.1, 22.6, 17.1);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(25.5, 4.5);
        ctx.bezierCurveTo(23.5, 2.1, 20.5, 0.5, 17.0, 0.1);
        ctx.bezierCurveTo(10.5, -0.7, 4.6, 3.3, 3.3, 9.1);
        ctx.bezierCurveTo(2.6, 11.6, 0.7, 18.6, 0.5, 21.0);
        ctx.bezierCurveTo(0.5, 21.2, 0.7, 21.3, 0.9, 21.4);
        ctx.bezierCurveTo(0.9, 21.4, 0.9, 21.4, 0.9, 21.4);
        ctx.bezierCurveTo(1.1, 21.4, 1.3, 21.2, 1.3, 21.0);
        ctx.bezierCurveTo(1.4, 19.8, 2.0, 17.1, 2.6, 14.6);
        ctx.lineTo(1.9, 21.0);
        ctx.bezierCurveTo(1.5, 24.9, 5.8, 29.8, 9.1, 33.0);
        ctx.bezierCurveTo(9.4, 33.2, 9.8, 33.3, 10.1, 33.0);
        ctx.bezierCurveTo(10.7, 32.4, 11.3, 31.9, 11.8, 31.4);
        ctx.bezierCurveTo(14.6, 27.8, 15.6, 19.4, 20.5, 13.7);
        ctx.bezierCurveTo(20.7, 13.6, 20.8, 13.7, 20.8, 13.9);
        ctx.bezierCurveTo(22.6, 19.4, 13.7, 33.9, 12.7, 35.2);
        ctx.bezierCurveTo(12.5, 35.5, 12.7, 35.9, 13.0, 35.9);
        ctx.bezierCurveTo(13.4, 35.9, 13.8, 35.9, 14.1, 35.7);
        ctx.bezierCurveTo(14.1, 35.7, 14.1, 35.7, 14.2, 35.7);
        ctx.bezierCurveTo(14.4, 35.5, 14.6, 35.4, 14.8, 35.1);
        ctx.bezierCurveTo(15.3, 34.3, 15.8, 33.5, 16.2, 32.8);
        ctx.bezierCurveTo(16.3, 32.6, 16.7, 32.7, 16.6, 32.9);
        ctx.bezierCurveTo(16.4, 33.3, 16.3, 33.8, 16.0, 34.2);
        ctx.bezierCurveTo(15.9, 34.4, 16.1, 34.6, 16.3, 34.5);
        ctx.bezierCurveTo(20.4, 32.2, 26.6, 28.0, 27.1, 23.8);
        ctx.lineTo(28.3, 13.0);
        ctx.bezierCurveTo(28.7, 9.8, 27.6, 6.8, 25.5, 4.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(74, 72, 75)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(0.7, 40.9);
        ctx.lineTo(8.7, 41.1);
        ctx.bezierCurveTo(8.8, 41.1, 9.0, 41.0, 9.0, 40.7);
        ctx.lineTo(9.0, 30.6);
        ctx.bezierCurveTo(9.0, 27.4, 7.6, 25.0, 4.9, 25.1);
        ctx.bezierCurveTo(3.0, 25.2, 1.4, 27.5, 1.2, 30.8);
        ctx.lineTo(0.0, 39.9);
        ctx.bezierCurveTo(-0.1, 40.8, 0.2, 40.8, 0.7, 40.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(236, 232, 241)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.7, 40.7);
        ctx.bezierCurveTo(21.7, 41.0, 21.9, 41.1, 22.0, 41.1);
        ctx.lineTo(26.0, 41.0);
        ctx.bezierCurveTo(26.2, 41.0, 26.4, 40.8, 26.3, 40.6);
        ctx.bezierCurveTo(26.0, 39.2, 25.8, 38.0, 25.8, 37.0);
        ctx.bezierCurveTo(25.8, 36.8, 26.1, 36.8, 26.1, 37.0);
        ctx.bezierCurveTo(26.3, 38.1, 26.7, 39.4, 27.1, 40.7);
        ctx.bezierCurveTo(27.2, 40.9, 27.3, 41.0, 27.5, 40.9);
        ctx.lineTo(28.2, 40.9);
        ctx.bezierCurveTo(28.4, 40.9, 28.6, 40.7, 28.5, 40.5);
        ctx.bezierCurveTo(28.1, 39.6, 27.9, 38.7, 27.8, 38.0);
        ctx.bezierCurveTo(27.7, 37.8, 28.0, 37.7, 28.1, 37.9);
        ctx.bezierCurveTo(28.4, 38.8, 28.8, 39.7, 29.3, 40.7);
        ctx.bezierCurveTo(29.4, 40.8, 29.5, 40.9, 29.6, 40.9);
        ctx.lineTo(30.0, 40.9);
        ctx.bezierCurveTo(30.5, 40.8, 30.8, 40.8, 30.7, 39.9);
        ctx.lineTo(29.5, 30.8);
        ctx.bezierCurveTo(29.3, 27.5, 27.7, 25.2, 25.8, 25.1);
        ctx.bezierCurveTo(23.1, 25.0, 21.7, 27.4, 21.7, 30.6);
        ctx.lineTo(21.7, 40.7);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    else if (role == 3) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(9.9, 39.8);
        ctx.lineTo(9.9, 52.2);
        ctx.bezierCurveTo(9.9, 52.2, 7.8, 52.9, 7.6, 54.2);
        ctx.bezierCurveTo(7.5, 55.4, 13.2, 55.1, 13.8, 54.2);
        ctx.bezierCurveTo(14.4, 53.2, 14.8, 39.8, 14.8, 39.8);
        ctx.lineTo(9.9, 39.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(25.6, 37.8);
        ctx.lineTo(25.2, 52.2);
        ctx.bezierCurveTo(25.2, 52.2, 27.4, 52.9, 27.5, 54.2);
        ctx.bezierCurveTo(27.6, 55.4, 21.9, 55.1, 21.4, 54.2);
        ctx.bezierCurveTo(20.8, 53.2, 20.7, 37.8, 20.7, 37.8);
        ctx.lineTo(25.6, 37.8);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(38.4, 22.3);
        ctx.bezierCurveTo(34.6, 20.7, 32.0, 17.2, 31.4, 13.1);
        ctx.bezierCurveTo(31.2, 11.4, 31.1, 11.1, 30.8, 9.4);
        ctx.bezierCurveTo(29.7, 3.5, 23.3, 0.0, 17.3, 0.0);
        ctx.bezierCurveTo(9.2, 0.0, 2.6, 7.1, 2.6, 15.9);
        ctx.bezierCurveTo(2.6, 24.6, 9.2, 31.7, 17.3, 31.7);
        ctx.bezierCurveTo(20.7, 31.7, 23.8, 30.5, 26.3, 28.5);
        ctx.bezierCurveTo(26.9, 29.7, 27.9, 30.4, 29.5, 30.2);
        ctx.bezierCurveTo(37.1, 29.4, 41.2, 22.9, 41.2, 22.9);
        ctx.bezierCurveTo(40.3, 22.9, 39.3, 22.7, 38.4, 22.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(26.9, 46.5);
        ctx.lineTo(26.0, 46.5);
        ctx.bezierCurveTo(25.8, 46.5, 25.7, 46.4, 25.7, 46.2);
        ctx.bezierCurveTo(25.9, 43.9, 25.9, 42.0, 25.7, 40.5);
        ctx.bezierCurveTo(25.6, 40.2, 25.2, 40.2, 25.2, 40.5);
        ctx.bezierCurveTo(25.1, 42.2, 24.9, 44.2, 24.5, 46.3);
        ctx.bezierCurveTo(24.5, 46.4, 24.4, 46.5, 24.3, 46.5);
        ctx.lineTo(22.7, 46.5);
        ctx.bezierCurveTo(22.5, 46.5, 22.4, 46.3, 22.4, 46.2);
        ctx.bezierCurveTo(23.1, 43.0, 23.3, 40.4, 23.1, 38.4);
        ctx.bezierCurveTo(23.1, 38.1, 22.6, 38.1, 22.6, 38.4);
        ctx.bezierCurveTo(22.3, 40.7, 21.8, 43.3, 21.0, 46.1);
        ctx.bezierCurveTo(20.9, 46.3, 20.7, 46.5, 20.4, 46.5);
        ctx.lineTo(15.4, 46.5);
        ctx.bezierCurveTo(15.2, 46.5, 15.1, 46.3, 15.2, 46.1);
        ctx.bezierCurveTo(15.7, 44.8, 16.1, 43.6, 16.3, 42.6);
        ctx.bezierCurveTo(16.4, 42.3, 15.9, 42.1, 15.8, 42.4);
        ctx.bezierCurveTo(15.4, 43.6, 14.9, 45.0, 14.2, 46.3);
        ctx.bezierCurveTo(14.1, 46.4, 14.0, 46.5, 13.9, 46.5);
        ctx.lineTo(12.4, 46.5);
        ctx.bezierCurveTo(12.2, 46.5, 12.1, 46.3, 12.2, 46.1);
        ctx.bezierCurveTo(13.1, 44.3, 13.8, 42.7, 14.2, 41.3);
        ctx.bezierCurveTo(14.2, 41.0, 13.8, 40.9, 13.7, 41.2);
        ctx.bezierCurveTo(13.0, 42.7, 12.0, 44.5, 10.9, 46.4);
        ctx.bezierCurveTo(10.8, 46.4, 10.8, 46.5, 10.7, 46.5);
        ctx.lineTo(8.4, 46.5);
        ctx.bezierCurveTo(8.2, 46.5, 8.1, 46.2, 8.2, 46.1);
        ctx.bezierCurveTo(9.4, 44.5, 10.3, 43.1, 10.8, 41.8);
        ctx.bezierCurveTo(11.0, 41.5, 10.6, 41.3, 10.4, 41.6);
        ctx.bezierCurveTo(9.6, 42.8, 7.6, 45.3, 6.9, 46.1);
        ctx.bezierCurveTo(6.6, 46.5, 6.0, 46.5, 5.8, 46.0);
        ctx.bezierCurveTo(5.8, 46.0, 5.7, 45.9, 5.7, 45.8);
        ctx.lineTo(5.7, 45.8);
        ctx.lineTo(7.6, 26.4);
        ctx.bezierCurveTo(8.0, 20.5, 10.8, 16.3, 17.6, 16.7);
        ctx.bezierCurveTo(22.4, 17.0, 25.4, 21.3, 25.7, 27.5);
        ctx.bezierCurveTo(25.7, 27.5, 25.7, 27.5, 25.7, 27.5);
        ctx.lineTo(28.7, 44.5);
        ctx.lineTo(28.7, 44.8);
        ctx.bezierCurveTo(29.0, 46.3, 28.3, 46.5, 26.9, 46.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(4.9, 26.6);
        ctx.lineTo(2.3, 36.9);
        ctx.bezierCurveTo(2.3, 36.9, -0.0, 38.0, 0.0, 38.9);
        ctx.bezierCurveTo(0.0, 39.6, 2.2, 40.3, 4.9, 39.2);
        ctx.bezierCurveTo(5.6, 39.0, 6.2, 38.5, 6.4, 37.8);
        ctx.lineTo(9.1, 28.0);
        ctx.lineTo(4.9, 26.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(29.1, 26.6);
        ctx.lineTo(32.5, 36.7);
        ctx.bezierCurveTo(32.5, 36.7, 34.9, 37.6, 34.9, 38.5);
        ctx.bezierCurveTo(35.0, 39.2, 32.8, 40.0, 30.1, 39.2);
        ctx.bezierCurveTo(29.4, 39.0, 28.7, 38.6, 28.5, 37.9);
        ctx.lineTo(25.0, 28.3);
        ctx.lineTo(29.1, 26.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(25.5, 30.8);
        ctx.bezierCurveTo(25.5, 31.0, 25.6, 31.1, 25.8, 31.0);
        ctx.lineTo(28.3, 30.2);
        ctx.bezierCurveTo(28.4, 30.2, 28.4, 30.1, 28.4, 30.0);
        ctx.bezierCurveTo(27.9, 29.1, 27.6, 28.3, 27.4, 27.7);
        ctx.bezierCurveTo(27.4, 27.5, 27.6, 27.5, 27.6, 27.6);
        ctx.bezierCurveTo(28.0, 28.3, 28.4, 29.1, 28.9, 29.9);
        ctx.bezierCurveTo(29.0, 30.0, 29.1, 30.0, 29.2, 30.0);
        ctx.lineTo(29.6, 29.8);
        ctx.bezierCurveTo(29.8, 29.8, 29.8, 29.6, 29.7, 29.5);
        ctx.bezierCurveTo(29.3, 29.0, 29.0, 28.4, 28.8, 28.0);
        ctx.bezierCurveTo(28.8, 27.9, 28.9, 27.8, 29.0, 27.9);
        ctx.bezierCurveTo(29.4, 28.4, 29.8, 28.9, 30.3, 29.5);
        ctx.bezierCurveTo(30.4, 29.6, 30.4, 29.6, 30.5, 29.6);
        ctx.lineTo(30.7, 29.5);
        ctx.bezierCurveTo(31.1, 29.4, 31.2, 29.3, 31.0, 28.8);
        ctx.lineTo(28.7, 23.0);
        ctx.bezierCurveTo(28.0, 20.9, 26.5, 19.6, 25.3, 19.9);
        ctx.bezierCurveTo(23.6, 20.3, 23.2, 22.1, 23.7, 24.2);
        ctx.lineTo(25.5, 30.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(3.8, 29.3);
        ctx.lineTo(8.9, 30.2);
        ctx.bezierCurveTo(9.0, 30.2, 9.1, 30.1, 9.2, 30.0);
        ctx.lineTo(10.0, 24.1);
        ctx.bezierCurveTo(10.2, 22.2, 9.5, 20.7, 7.8, 20.6);
        ctx.bezierCurveTo(6.6, 20.4, 5.3, 21.6, 4.9, 23.5);
        ctx.lineTo(3.5, 28.7);
        ctx.bezierCurveTo(3.3, 29.1, 3.5, 29.2, 3.8, 29.3);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.6, 22.0);
        ctx.bezierCurveTo(21.6, 25.0, 19.2, 27.4, 16.2, 27.4);
        ctx.bezierCurveTo(13.3, 27.4, 10.9, 25.0, 10.9, 22.0);
        ctx.bezierCurveTo(10.9, 19.1, 13.3, 16.7, 16.2, 16.7);
        ctx.bezierCurveTo(19.2, 16.7, 21.6, 19.1, 21.6, 22.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(236, 209, 203)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(26.4, 14.0);
        ctx.bezierCurveTo(26.4, 20.3, 21.7, 24.2, 16.9, 24.2);
        ctx.bezierCurveTo(10.9, 24.2, 5.1, 20.8, 6.5, 13.6);
        ctx.bezierCurveTo(7.7, 7.5, 9.9, 2.7, 15.9, 2.7);
        ctx.bezierCurveTo(21.9, 2.7, 26.4, 7.7, 26.4, 14.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(19.8, 6.6);
        ctx.bezierCurveTo(19.8, 6.2, 19.2, 6.0, 18.9, 6.2);
        ctx.bezierCurveTo(17.3, 7.8, 13.7, 10.6, 9.3, 11.1);
        ctx.bezierCurveTo(4.8, 11.6, 4.2, 11.6, 4.2, 11.6);
        ctx.bezierCurveTo(4.3, 11.5, 4.3, 11.5, 4.4, 11.4);
        ctx.bezierCurveTo(4.9, 10.0, 8.3, 2.2, 15.9, 1.7);
        ctx.bezierCurveTo(24.2, 1.2, 27.6, 9.1, 28.2, 13.2);
        ctx.bezierCurveTo(28.8, 16.8, 19.9, 11.6, 19.8, 6.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(13.5, 14.6);
        ctx.bezierCurveTo(13.5, 15.6, 12.7, 16.4, 11.7, 16.4);
        ctx.bezierCurveTo(10.7, 16.4, 9.9, 15.6, 9.9, 14.6);
        ctx.bezierCurveTo(9.9, 13.7, 10.7, 12.9, 11.7, 12.9);
        ctx.bezierCurveTo(12.7, 12.9, 13.5, 13.7, 13.5, 14.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.2, 14.6);
        ctx.bezierCurveTo(22.2, 15.6, 21.4, 16.4, 20.4, 16.4);
        ctx.bezierCurveTo(19.5, 16.4, 18.7, 15.6, 18.7, 14.6);
        ctx.bezierCurveTo(18.7, 13.7, 19.5, 12.9, 20.4, 12.9);
        ctx.bezierCurveTo(21.4, 12.9, 22.2, 13.7, 22.2, 14.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(19.1, 18.0);
        ctx.bezierCurveTo(19.1, 19.1, 17.6, 20.0, 15.8, 20.0);
        ctx.bezierCurveTo(14.0, 20.0, 12.5, 19.1, 12.5, 18.0);
        ctx.bezierCurveTo(12.5, 16.9, 14.0, 17.9, 15.8, 17.9);
        ctx.bezierCurveTo(17.6, 17.9, 19.1, 16.9, 19.1, 18.0);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(19.7, 6.1);
        ctx.bezierCurveTo(19.7, 6.1, 18.7, 10.1, 23.8, 13.9);
        ctx.lineWidth = 0.6;
        ctx.strokeStyle = "rgb(61, 56, 65)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(16.7, 15.2);
        ctx.bezierCurveTo(16.7, 15.6, 16.4, 15.9, 16.0, 15.9);
        ctx.bezierCurveTo(15.6, 15.9, 15.3, 15.6, 15.3, 15.2);
        ctx.bezierCurveTo(15.3, 14.8, 15.6, 14.2, 16.0, 14.2);
        ctx.bezierCurveTo(16.4, 14.2, 16.7, 14.8, 16.7, 15.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();
        ctx.restore();
        ctx.restore();
    }
    else if (role == 4) {
        ctx.save();

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(9.5, 44.5);
        ctx.bezierCurveTo(7.7, 44.5, 5.3, 44.5, 5.3, 47.7);
        ctx.bezierCurveTo(5.2, 49.4, 6.3, 51.6, 7.5, 52.9);
        ctx.bezierCurveTo(6.8, 53.3, 6.3, 53.9, 6.1, 54.5);
        ctx.bezierCurveTo(6.1, 54.8, 6.3, 55.0, 6.5, 55.0);
        ctx.lineTo(12.3, 55.0);
        ctx.bezierCurveTo(12.6, 55.0, 12.8, 54.8, 12.7, 54.5);
        ctx.bezierCurveTo(12.6, 53.9, 12.2, 53.4, 11.6, 53.0);
        ctx.bezierCurveTo(12.3, 52.1, 12.7, 50.8, 12.7, 49.3);
        ctx.bezierCurveTo(12.7, 46.7, 11.3, 44.5, 9.5, 44.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(18.7, 52.9);
        ctx.bezierCurveTo(19.9, 51.6, 20.9, 49.4, 20.9, 47.7);
        ctx.bezierCurveTo(20.8, 44.5, 18.4, 44.5, 16.7, 44.5);
        ctx.bezierCurveTo(14.9, 44.5, 13.4, 46.7, 13.4, 49.3);
        ctx.bezierCurveTo(13.4, 50.8, 13.9, 52.1, 14.6, 53.0);
        ctx.bezierCurveTo(13.9, 53.4, 13.5, 53.9, 13.4, 54.5);
        ctx.bezierCurveTo(13.3, 54.8, 13.5, 55.0, 13.7, 55.0);
        ctx.lineTo(19.6, 55.0);
        ctx.bezierCurveTo(19.8, 55.0, 20.0, 54.8, 19.9, 54.5);
        ctx.bezierCurveTo(19.8, 53.9, 19.3, 53.3, 18.7, 52.9);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.restore();

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(22.0, 25.1);
        ctx.bezierCurveTo(22.2, 23.9, 21.3, 22.9, 20.1, 22.7);
        ctx.bezierCurveTo(18.9, 22.6, 17.8, 23.5, 17.7, 24.7);
        ctx.bezierCurveTo(17.6, 25.8, 18.4, 26.9, 19.6, 27.1);
        ctx.bezierCurveTo(20.8, 27.2, 21.9, 26.3, 22.0, 25.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(28.6, 29.4);
        ctx.bezierCurveTo(28.0, 29.4, 27.4, 29.7, 27.2, 30.2);
        ctx.bezierCurveTo(27.2, 30.1, 27.3, 29.9, 27.3, 29.8);
        ctx.bezierCurveTo(27.4, 28.9, 26.7, 28.1, 25.8, 28.0);
        ctx.bezierCurveTo(25.2, 27.9, 24.7, 28.2, 24.3, 28.7);
        ctx.bezierCurveTo(24.5, 28.4, 24.6, 28.2, 24.6, 27.9);
        ctx.bezierCurveTo(24.8, 26.8, 24.0, 25.9, 23.0, 25.8);
        ctx.bezierCurveTo(22.0, 25.7, 21.1, 26.4, 21.0, 27.4);
        ctx.bezierCurveTo(20.8, 28.5, 21.6, 29.4, 22.6, 29.5);
        ctx.bezierCurveTo(23.3, 29.6, 23.9, 29.3, 24.3, 28.7);
        ctx.bezierCurveTo(24.2, 28.9, 24.1, 29.2, 24.1, 29.4);
        ctx.bezierCurveTo(24.0, 30.3, 24.6, 31.1, 25.5, 31.2);
        ctx.bezierCurveTo(26.2, 31.3, 26.8, 30.9, 27.1, 30.3);
        ctx.bezierCurveTo(27.1, 30.4, 27.0, 30.5, 27.0, 30.6);
        ctx.bezierCurveTo(27.0, 31.4, 27.5, 32.1, 28.3, 32.2);
        ctx.bezierCurveTo(29.0, 32.3, 30.3, 31.1, 30.3, 31.1);
        ctx.bezierCurveTo(30.3, 31.1, 29.3, 29.5, 28.6, 29.4);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.restore();

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(21.9, 3.4);
        ctx.bezierCurveTo(17.0, 3.4, 12.5, 1.5, 12.4, 1.5);
        ctx.lineTo(12.6, 1.0);
        ctx.bezierCurveTo(12.7, 1.1, 19.7, 4.1, 25.8, 2.5);
        ctx.lineTo(25.9, 3.0);
        ctx.bezierCurveTo(24.6, 3.3, 23.2, 3.4, 21.9, 3.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(47, 41, 52)";
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(26.2, 2.5);
        ctx.bezierCurveTo(26.2, 2.5, 24.8, 0.9, 23.3, 1.0);
        ctx.bezierCurveTo(22.5, 1.1, 21.8, 1.4, 21.3, 1.7);
        ctx.bezierCurveTo(20.3, 1.8, 19.6, 2.2, 19.4, 2.8);
        ctx.bezierCurveTo(19.2, 3.8, 20.3, 4.9, 21.9, 5.3);
        ctx.bezierCurveTo(23.5, 5.7, 25.2, 4.4, 25.2, 4.4);
        ctx.bezierCurveTo(25.2, 4.4, 25.2, 4.2, 25.0, 3.9);
        ctx.bezierCurveTo(25.7, 3.3, 26.2, 2.5, 26.2, 2.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(76, 160, 59)";
        ctx.fill();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(21.2, 29.3);
        ctx.lineTo(17.3, 28.3);
        ctx.lineTo(17.4, 27.4);
        ctx.lineTo(13.7, 27.4);
        ctx.lineTo(13.7, 27.4);
        ctx.lineTo(13.7, 27.4);
        ctx.lineTo(12.4, 27.4);
        ctx.lineTo(12.4, 27.4);
        ctx.lineTo(12.4, 27.4);
        ctx.lineTo(9.0, 27.4);
        ctx.lineTo(9.1, 28.2);
        ctx.lineTo(4.8, 29.3);
        ctx.bezierCurveTo(4.8, 29.3, 0.0, 42.3, 0.1, 45.4);
        ctx.bezierCurveTo(0.1, 45.6, 0.2, 45.7, 0.4, 45.8);
        ctx.bezierCurveTo(1.4, 46.2, 5.7, 47.6, 13.0, 48.0);
        ctx.lineTo(13.0, 48.0);
        ctx.bezierCurveTo(13.7, 47.9, 14.4, 47.9, 15.0, 47.8);
        ctx.lineTo(15.1, 47.8);
        ctx.lineTo(15.1, 47.8);
        ctx.bezierCurveTo(21.1, 47.3, 24.7, 46.1, 25.7, 45.8);
        ctx.bezierCurveTo(25.9, 45.7, 26.0, 45.6, 26.0, 45.4);
        ctx.bezierCurveTo(26.0, 42.3, 21.2, 29.3, 21.2, 29.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(85, 79, 90)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.8, 40.4);
        ctx.lineTo(10.2, 40.4);
        ctx.bezierCurveTo(10.0, 40.4, 9.7, 40.2, 9.7, 40.0);
        ctx.lineTo(9.7, 31.6);
        ctx.bezierCurveTo(9.7, 31.4, 10.0, 31.2, 10.2, 31.2);
        ctx.lineTo(15.8, 31.2);
        ctx.bezierCurveTo(16.1, 31.2, 16.3, 31.4, 16.3, 31.6);
        ctx.lineTo(16.3, 40.0);
        ctx.bezierCurveTo(16.3, 40.2, 16.1, 40.4, 15.8, 40.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(76, 160, 59)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.3, 39.6);
        ctx.lineTo(10.8, 39.6);
        ctx.bezierCurveTo(10.5, 39.6, 10.3, 39.4, 10.3, 39.1);
        ctx.lineTo(10.3, 32.3);
        ctx.bezierCurveTo(10.3, 32.0, 10.5, 31.8, 10.8, 31.8);
        ctx.lineTo(15.3, 31.8);
        ctx.bezierCurveTo(15.5, 31.8, 15.7, 32.0, 15.7, 32.3);
        ctx.lineTo(15.7, 39.1);
        ctx.bezierCurveTo(15.7, 39.4, 15.5, 39.6, 15.3, 39.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(11.3, 33.5);
        ctx.lineTo(14.6, 33.5);
        // This artwork uses an unsupported dash style
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(248, 170, 44)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1///
        ctx.beginPath();
        ctx.moveTo(11.3, 34.1);
        ctx.lineTo(14.6, 34.1);
        // This artwork uses an unsupported dash style
        ctx.stroke();

        // 1///
        ctx.beginPath();
        ctx.moveTo(11.3, 37.0);
        ctx.lineTo(14.6, 37.0);
        // This artwork uses an unsupported dash style
        ctx.stroke();

        // 1///
        ctx.beginPath();
        ctx.moveTo(11.3, 37.9);
        ctx.lineTo(14.6, 37.9);
        ctx.stroke();

        // 1///
        ctx.beginPath();
        ctx.moveTo(11.3, 35.3);
        ctx.lineTo(14.6, 35.3);
        // This artwork uses an unsupported dash style
        ctx.lineWidth = 0.3;
        ctx.stroke();

        // 1///
        ctx.beginPath();
        ctx.moveTo(11.3, 36.0);
        ctx.lineTo(14.6, 36.0);
        // This artwork uses an unsupported dash style
        ctx.stroke();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(13.0, 27.5);
        ctx.lineTo(13.0, 48.0);
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(87, 84, 90)";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(0.5, 42.8);
        ctx.bezierCurveTo(0.5, 42.8, 12.4, 46.7, 25.6, 42.8);
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = "rgb(47, 41, 52)";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(0.2, 44.0);
        ctx.bezierCurveTo(0.2, 44.0, 12.2, 48.8, 25.8, 44.0);
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(13.0, 27.4);
        ctx.bezierCurveTo(13.0, 28.8, 11.7, 30.3, 9.9, 29.9);
        ctx.bezierCurveTo(8.5, 29.7, 7.8, 28.4, 8.1, 27.4);
        ctx.bezierCurveTo(8.4, 25.9, 9.0, 24.7, 10.4, 24.7);
        ctx.bezierCurveTo(11.9, 24.7, 13.0, 25.9, 13.0, 27.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(13.0, 27.4);
        ctx.bezierCurveTo(13.0, 28.8, 14.3, 30.3, 16.1, 29.9);
        ctx.bezierCurveTo(17.6, 29.7, 18.2, 28.4, 18.0, 27.4);
        ctx.bezierCurveTo(17.7, 25.9, 17.1, 24.7, 15.6, 24.7);
        ctx.bezierCurveTo(14.2, 24.7, 13.0, 25.9, 13.0, 27.4);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(4.4, 17.0);
        ctx.bezierCurveTo(4.4, 18.3, 3.4, 19.4, 2.2, 19.4);
        ctx.bezierCurveTo(1.0, 19.4, 0.0, 18.3, 0.0, 17.0);
        ctx.bezierCurveTo(0.0, 15.6, 1.0, 14.5, 2.2, 14.5);
        ctx.bezierCurveTo(3.4, 14.5, 4.4, 15.6, 4.4, 17.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(236, 209, 203)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(25.3, 17.0);
        ctx.bezierCurveTo(25.3, 18.3, 24.3, 19.4, 23.1, 19.4);
        ctx.bezierCurveTo(21.9, 19.4, 20.9, 18.3, 20.9, 17.0);
        ctx.bezierCurveTo(20.9, 15.6, 21.9, 14.5, 23.1, 14.5);
        ctx.bezierCurveTo(24.3, 14.5, 25.3, 15.6, 25.3, 17.0);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(23.1, 18.6);
        ctx.bezierCurveTo(23.0, 20.4, 22.5, 21.9, 21.6, 23.2);
        ctx.bezierCurveTo(19.7, 26.0, 16.1, 27.4, 12.5, 27.4);
        ctx.bezierCurveTo(9.1, 27.4, 5.9, 25.9, 4.0, 23.2);
        ctx.bezierCurveTo(3.1, 21.9, 2.5, 20.4, 2.3, 18.7);
        ctx.bezierCurveTo(2.2, 17.9, 2.2, 17.0, 2.3, 16.1);
        ctx.bezierCurveTo(3.0, 9.6, 6.9, 5.9, 12.5, 5.9);
        ctx.bezierCurveTo(18.2, 5.9, 22.6, 11.4, 23.1, 16.9);
        ctx.bezierCurveTo(23.1, 17.5, 23.1, 18.0, 23.1, 18.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(16.0, 18.9);
        ctx.bezierCurveTo(16.0, 19.9, 14.6, 20.8, 12.9, 20.8);
        ctx.bezierCurveTo(11.2, 20.8, 9.8, 19.9, 9.8, 18.9);
        ctx.bezierCurveTo(9.8, 18.3, 10.2, 18.3, 10.8, 18.4);
        ctx.bezierCurveTo(11.1, 18.5, 11.4, 18.6, 11.8, 18.6);
        ctx.bezierCurveTo(12.1, 18.7, 12.5, 18.8, 12.9, 18.8);
        ctx.bezierCurveTo(13.4, 18.8, 13.8, 18.7, 14.1, 18.6);
        ctx.lineTo(14.2, 18.6);
        ctx.bezierCurveTo(14.5, 18.6, 14.8, 18.5, 15.1, 18.4);
        ctx.bezierCurveTo(15.7, 18.3, 16.0, 18.3, 16.0, 18.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(10.0, 16.3);
        ctx.bezierCurveTo(10.0, 17.5, 9.1, 18.4, 8.0, 18.4);
        ctx.bezierCurveTo(6.8, 18.4, 5.9, 17.5, 5.9, 16.3);
        ctx.bezierCurveTo(5.9, 15.2, 6.8, 14.3, 8.0, 14.3);
        ctx.bezierCurveTo(9.1, 14.3, 10.0, 15.2, 10.0, 16.3);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(6.9, 20.5);
        ctx.bezierCurveTo(6.9, 22.0, 5.7, 23.2, 4.2, 23.2);
        ctx.bezierCurveTo(4.1, 23.2, 4.1, 23.2, 4.0, 23.2);
        ctx.bezierCurveTo(3.1, 21.9, 2.5, 20.4, 2.3, 18.7);
        ctx.bezierCurveTo(2.8, 18.2, 3.5, 17.9, 4.2, 17.9);
        ctx.bezierCurveTo(5.7, 17.9, 6.9, 19.1, 6.9, 20.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(23.1, 18.6);
        ctx.bezierCurveTo(23.0, 20.4, 22.5, 21.9, 21.6, 23.2);
        ctx.bezierCurveTo(21.6, 23.2, 21.5, 23.2, 21.4, 23.2);
        ctx.bezierCurveTo(19.9, 23.2, 18.7, 22.0, 18.7, 20.5);
        ctx.bezierCurveTo(18.7, 19.1, 19.9, 17.9, 21.4, 17.9);
        ctx.bezierCurveTo(22.0, 17.9, 22.7, 18.2, 23.1, 18.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(19.8, 16.3);
        ctx.bezierCurveTo(19.8, 17.5, 18.9, 18.4, 17.8, 18.4);
        ctx.bezierCurveTo(16.7, 18.4, 15.7, 17.5, 15.7, 16.3);
        ctx.bezierCurveTo(15.7, 15.2, 16.7, 14.3, 17.8, 14.3);
        ctx.bezierCurveTo(18.9, 14.3, 19.8, 15.2, 19.8, 16.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(16.6, 12.4);
        ctx.bezierCurveTo(16.6, 12.4, 17.8, 11.7, 19.5, 13.0);
        ctx.lineWidth = 0.4;
        ctx.strokeStyle = "rgb(34, 23, 20)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(11.8, 18.6);
        ctx.bezierCurveTo(11.7, 19.1, 11.5, 19.5, 11.3, 19.5);
        ctx.bezierCurveTo(11.1, 19.5, 10.8, 19.0, 10.8, 18.4);
        ctx.bezierCurveTo(11.1, 18.5, 11.4, 18.6, 11.8, 18.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.1, 18.4);
        ctx.bezierCurveTo(15.1, 19.0, 14.9, 19.5, 14.6, 19.5);
        ctx.bezierCurveTo(14.4, 19.5, 14.2, 19.1, 14.2, 18.6);
        ctx.bezierCurveTo(14.5, 18.6, 14.8, 18.5, 15.1, 18.4);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(13.6, 16.6);
        ctx.bezierCurveTo(13.6, 17.0, 13.3, 17.2, 13.0, 17.2);
        ctx.bezierCurveTo(12.6, 17.2, 12.4, 17.0, 12.4, 16.6);
        ctx.bezierCurveTo(12.4, 16.3, 12.6, 15.8, 13.0, 15.8);
        ctx.bezierCurveTo(13.3, 15.8, 13.6, 16.3, 13.6, 16.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(14.1, 1.5);
        ctx.bezierCurveTo(14.1, 2.3, 13.4, 3.0, 12.6, 3.0);
        ctx.bezierCurveTo(11.8, 3.0, 11.1, 2.3, 11.1, 1.5);
        ctx.bezierCurveTo(11.1, 0.7, 11.8, 0.0, 12.6, 0.0);
        ctx.bezierCurveTo(13.4, 0.0, 14.1, 0.7, 14.1, 1.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 170, 44)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(20.5, 9.9);
        ctx.bezierCurveTo(20.5, 10.3, 19.2, 9.0, 19.2, 9.3);
        ctx.bezierCurveTo(11.4, 4.9, 8.0, 7.6, 6.1, 8.9);
        ctx.bezierCurveTo(6.0, 8.4, 4.5, 10.3, 4.5, 9.9);
        ctx.bezierCurveTo(4.5, 8.8, 4.8, 7.8, 5.1, 6.8);
        ctx.bezierCurveTo(6.3, 3.9, 9.2, 1.9, 12.5, 1.9);
        ctx.bezierCurveTo(15.7, 1.9, 18.4, 3.7, 19.7, 6.4);
        ctx.bezierCurveTo(20.2, 7.5, 20.5, 8.6, 20.5, 9.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.7, 8.3);
        ctx.lineTo(21.3, 10.7);
        ctx.bezierCurveTo(21.2, 10.8, 21.0, 10.9, 20.9, 10.8);
        ctx.bezierCurveTo(20.6, 10.6, 20.3, 10.4, 20.1, 10.3);
        ctx.bezierCurveTo(12.4, 5.9, 6.2, 9.2, 4.4, 10.5);
        ctx.bezierCurveTo(4.2, 10.6, 4.1, 10.7, 4.0, 10.7);
        ctx.bezierCurveTo(3.9, 10.8, 3.7, 10.8, 3.6, 10.6);
        ctx.lineTo(2.3, 8.5);
        ctx.bezierCurveTo(2.3, 8.4, 2.3, 8.2, 2.4, 8.1);
        ctx.bezierCurveTo(3.2, 7.3, 4.0, 6.6, 4.8, 6.1);
        ctx.bezierCurveTo(10.5, 2.2, 16.0, 3.8, 19.4, 5.7);
        ctx.bezierCurveTo(21.0, 6.6, 22.2, 7.6, 22.6, 7.9);
        ctx.bezierCurveTo(22.8, 8.0, 22.8, 8.2, 22.7, 8.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.3, 5.5);
        ctx.lineTo(9.5, 5.5);
        ctx.bezierCurveTo(9.5, 5.5, 9.7, 11.3, 7.9, 15.0);
        ctx.bezierCurveTo(7.8, 15.2, 8.0, 15.4, 8.2, 15.4);
        ctx.lineTo(13.6, 15.4);
        ctx.bezierCurveTo(14.0, 15.5, 14.4, 15.2, 14.6, 14.8);
        ctx.bezierCurveTo(15.2, 13.6, 15.6, 10.3, 15.3, 5.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(10.7, 7.3);
        ctx.bezierCurveTo(10.7, 7.3, 13.2, 6.9, 14.3, 7.3);
        ctx.bezierCurveTo(15.4, 7.8, 11.7, 7.5, 11.4, 8.0);
        ctx.bezierCurveTo(11.2, 8.4, 13.5, 8.1, 13.9, 8.3);
        ctx.bezierCurveTo(14.3, 8.6, 12.3, 8.4, 11.4, 9.0);
        ctx.bezierCurveTo(10.6, 9.5, 13.7, 9.8, 13.7, 10.3);
        ctx.bezierCurveTo(13.7, 10.9, 10.5, 11.3, 10.3, 12.2);
        ctx.bezierCurveTo(10.1, 13.1, 14.0, 13.2, 14.0, 12.4);
        ctx.bezierCurveTo(13.9, 11.6, 10.0, 12.6, 10.0, 13.7);
        ctx.bezierCurveTo(10.0, 14.7, 13.7, 14.0, 13.7, 14.0);
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(248, 170, 44)";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(8.9, 32.4);
        ctx.bezierCurveTo(8.3, 35.2, 6.4, 37.2, 4.7, 36.8);
        ctx.bezierCurveTo(2.9, 36.4, 2.0, 33.9, 2.6, 31.1);
        ctx.bezierCurveTo(3.1, 28.3, 5.0, 26.3, 6.8, 26.6);
        ctx.bezierCurveTo(8.5, 27.0, 9.5, 29.6, 8.9, 32.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(63, 59, 67)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(17.1, 32.4);
        ctx.bezierCurveTo(17.7, 35.2, 19.5, 37.2, 21.3, 36.8);
        ctx.bezierCurveTo(23.1, 36.4, 24.0, 33.9, 23.4, 31.1);
        ctx.bezierCurveTo(22.9, 28.3, 21.0, 26.3, 19.2, 26.6);
        ctx.bezierCurveTo(17.5, 27.0, 16.5, 29.6, 17.1, 32.4);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(8.5, 31.2);
        ctx.bezierCurveTo(8.3, 33.2, 7.1, 34.7, 5.8, 34.5);
        ctx.bezierCurveTo(4.6, 34.4, 3.8, 32.6, 4.0, 30.6);
        ctx.bezierCurveTo(4.3, 28.6, 5.5, 27.2, 6.7, 27.3);
        ctx.bezierCurveTo(8.0, 27.5, 8.8, 29.2, 8.5, 31.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(47, 41, 52)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(17.5, 31.2);
        ctx.bezierCurveTo(17.7, 33.2, 18.9, 34.7, 20.1, 34.5);
        ctx.bezierCurveTo(21.4, 34.4, 22.2, 32.6, 22.0, 30.6);
        ctx.bezierCurveTo(21.7, 28.6, 20.5, 27.2, 19.3, 27.3);
        ctx.bezierCurveTo(18.0, 27.5, 17.2, 29.2, 17.5, 31.2);
        ctx.closePath();
        ctx.fill();

        // 1//

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(9.8, 27.8);
        ctx.bezierCurveTo(9.8, 29.2, 8.3, 30.3, 6.5, 30.3);
        ctx.bezierCurveTo(4.7, 30.3, 3.2, 29.2, 3.2, 27.8);
        ctx.bezierCurveTo(3.2, 26.5, 4.7, 26.0, 6.5, 26.0);
        ctx.bezierCurveTo(8.3, 26.0, 9.8, 26.5, 9.8, 27.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(5.3, 29.5);
        ctx.bezierCurveTo(5.3, 30.2, 5.1, 30.8, 4.9, 30.8);
        ctx.bezierCurveTo(4.7, 30.8, 4.5, 30.2, 4.5, 29.5);
        ctx.bezierCurveTo(4.5, 28.9, 4.7, 29.0, 4.9, 29.0);
        ctx.bezierCurveTo(5.1, 29.0, 5.3, 28.8, 5.3, 29.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(6.8, 29.5);
        ctx.bezierCurveTo(6.8, 30.2, 6.7, 30.8, 6.5, 30.8);
        ctx.bezierCurveTo(6.3, 30.8, 6.1, 30.2, 6.1, 29.5);
        ctx.bezierCurveTo(6.1, 28.9, 6.3, 29.0, 6.5, 29.0);
        ctx.bezierCurveTo(6.7, 29.0, 6.8, 28.8, 6.8, 29.5);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(8.4, 29.5);
        ctx.bezierCurveTo(8.4, 30.2, 8.2, 30.8, 8.0, 30.8);
        ctx.bezierCurveTo(7.8, 30.8, 7.6, 30.2, 7.6, 29.5);
        ctx.bezierCurveTo(7.6, 28.9, 7.8, 29.0, 8.0, 29.0);
        ctx.bezierCurveTo(8.2, 29.0, 8.4, 28.8, 8.4, 29.5);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(22.9, 27.8);
        ctx.bezierCurveTo(22.9, 29.2, 21.5, 30.3, 19.6, 30.3);
        ctx.bezierCurveTo(17.8, 30.3, 16.3, 29.2, 16.3, 27.8);
        ctx.bezierCurveTo(16.3, 26.5, 17.7, 26.0, 19.6, 26.0);
        ctx.bezierCurveTo(21.4, 26.0, 22.9, 26.5, 22.9, 27.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(18.4, 29.5);
        ctx.bezierCurveTo(18.4, 30.2, 18.2, 30.8, 18.0, 30.8);
        ctx.bezierCurveTo(17.8, 30.8, 17.6, 30.2, 17.6, 29.5);
        ctx.bezierCurveTo(17.6, 28.9, 17.8, 29.0, 18.0, 29.0);
        ctx.bezierCurveTo(18.2, 29.0, 18.4, 28.8, 18.4, 29.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(19.9, 29.5);
        ctx.bezierCurveTo(19.9, 30.2, 19.8, 30.8, 19.6, 30.8);
        ctx.bezierCurveTo(19.3, 30.8, 19.2, 30.2, 19.2, 29.5);
        ctx.bezierCurveTo(19.2, 28.9, 19.3, 29.0, 19.6, 29.0);
        ctx.bezierCurveTo(19.8, 29.0, 19.9, 28.8, 19.9, 29.5);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.beginPath();
        ctx.moveTo(21.5, 29.5);
        ctx.bezierCurveTo(21.5, 30.2, 21.3, 30.8, 21.1, 30.8);
        ctx.bezierCurveTo(20.9, 30.8, 20.7, 30.2, 20.7, 29.5);
        ctx.bezierCurveTo(20.7, 28.9, 20.9, 29.0, 21.1, 29.0);
        ctx.bezierCurveTo(21.3, 29.0, 21.5, 28.8, 21.5, 29.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        ctx.restore();
        ctx.restore();
    }
    else if (role == 5) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(34.3, 20.8);
        ctx.bezierCurveTo(32.9, 25.4, 29.8, 29.0, 25.9, 31.2);
        ctx.bezierCurveTo(25.2, 31.7, 24.2, 31.5, 23.7, 30.8);
        ctx.bezierCurveTo(22.5, 29.2, 20.8, 28.0, 18.7, 27.5);
        ctx.bezierCurveTo(15.3, 26.5, 10.2, 29.8, 8.6, 31.0);
        ctx.bezierCurveTo(8.4, 31.1, 8.1, 30.9, 8.2, 30.7);
        ctx.bezierCurveTo(8.2, 30.7, 8.2, 30.7, 8.2, 30.7);
        ctx.bezierCurveTo(9.4, 26.3, 6.8, 21.8, 2.4, 20.6);
        ctx.bezierCurveTo(1.8, 20.5, 0.9, 20.4, 0.2, 20.3);
        ctx.bezierCurveTo(-0.0, 20.3, -0.1, 19.9, 0.1, 19.8);
        ctx.bezierCurveTo(1.7, 19.1, 3.0, 17.6, 3.5, 15.8);
        ctx.bezierCurveTo(4.3, 13.0, 3.0, 10.1, 0.6, 8.7);
        ctx.bezierCurveTo(0.4, 8.6, 0.4, 8.2, 0.7, 8.1);
        ctx.bezierCurveTo(1.9, 7.7, 4.4, 6.6, 4.9, 4.9);
        ctx.bezierCurveTo(5.7, 2.5, 3.3, 0.5, 5.3, 1.1);
        ctx.lineTo(9.6, 2.2);
        ctx.bezierCurveTo(8.6, 7.6, 12.1, 14.1, 18.5, 18.2);
        ctx.bezierCurveTo(23.9, 21.7, 29.9, 22.5, 34.3, 20.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 62, 72)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(14.2, 21.8);
        ctx.bezierCurveTo(15.9, 26.3, 19.2, 29.7, 23.2, 31.7);
        ctx.bezierCurveTo(23.9, 32.1, 24.8, 31.9, 25.3, 31.2);
        ctx.bezierCurveTo(26.5, 29.5, 28.1, 28.2, 30.2, 27.6);
        ctx.bezierCurveTo(33.5, 26.5, 38.8, 29.5, 40.5, 30.5);
        ctx.bezierCurveTo(40.7, 30.6, 40.9, 30.5, 40.8, 30.3);
        ctx.bezierCurveTo(40.8, 30.3, 40.8, 30.3, 40.8, 30.3);
        ctx.bezierCurveTo(39.4, 25.9, 41.7, 21.3, 46.1, 19.9);
        ctx.bezierCurveTo(46.6, 19.7, 47.5, 19.5, 48.2, 19.4);
        ctx.bezierCurveTo(48.5, 19.4, 48.5, 19.1, 48.3, 19.0);
        ctx.bezierCurveTo(46.6, 18.3, 45.3, 16.9, 44.7, 15.1);
        ctx.bezierCurveTo(43.8, 12.3, 44.9, 9.4, 47.2, 7.9);
        ctx.bezierCurveTo(47.5, 7.7, 47.4, 7.4, 47.1, 7.3);
        ctx.bezierCurveTo(45.8, 6.9, 43.3, 5.9, 42.7, 4.3);
        ctx.bezierCurveTo(41.8, 1.9, 44.0, -0.1, 42.1, 0.5);
        ctx.lineTo(37.8, 1.9);
        ctx.bezierCurveTo(39.2, 7.2, 36.1, 13.9, 29.8, 18.4);
        ctx.bezierCurveTo(24.6, 22.1, 18.7, 23.2, 14.2, 21.8);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(43.3, 22.5);
        ctx.bezierCurveTo(43.3, 24.8, 37.0, 25.7, 32.0, 25.7);
        ctx.bezierCurveTo(27.1, 25.7, 27.6, 24.3, 27.6, 22.5);
        ctx.bezierCurveTo(27.6, 20.8, 27.0, 19.3, 31.9, 19.3);
        ctx.bezierCurveTo(36.8, 19.3, 43.3, 20.3, 43.3, 22.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(3.9, 22.6);
        ctx.bezierCurveTo(3.9, 20.3, 10.7, 19.3, 15.9, 19.3);
        ctx.bezierCurveTo(21.2, 19.3, 20.7, 20.7, 20.7, 22.5);
        ctx.bezierCurveTo(20.7, 24.3, 21.3, 25.7, 16.1, 25.7);
        ctx.bezierCurveTo(10.8, 25.8, 3.9, 24.8, 3.9, 22.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(10.5, 49.4);
        ctx.lineTo(12.2, 49.0);
        ctx.lineTo(14.7, 51.9);
        ctx.lineTo(13.4, 54.6);
        ctx.bezierCurveTo(13.2, 55.1, 12.5, 55.1, 12.3, 54.6);
        ctx.lineTo(11.8, 53.7);
        ctx.bezierCurveTo(11.7, 53.4, 11.4, 53.2, 11.1, 53.3);
        ctx.lineTo(10.4, 53.5);
        ctx.bezierCurveTo(9.8, 53.7, 9.3, 53.2, 9.6, 52.7);
        ctx.lineTo(9.9, 52.0);
        ctx.bezierCurveTo(10.1, 51.7, 10.0, 51.4, 9.7, 51.2);
        ctx.lineTo(9.1, 50.8);
        ctx.bezierCurveTo(8.6, 50.5, 8.7, 49.7, 9.2, 49.6);
        ctx.lineTo(10.5, 49.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.9, 49.3);
        ctx.bezierCurveTo(15.5, 50.1, 15.2, 50.9, 14.9, 51.6);
        ctx.bezierCurveTo(14.6, 52.7, 13.2, 52.8, 12.6, 51.9);
        ctx.bezierCurveTo(10.6, 48.9, 10.3, 44.9, 12.1, 41.5);
        ctx.bezierCurveTo(14.8, 36.7, 20.9, 35.0, 25.7, 37.6);
        ctx.bezierCurveTo(28.5, 39.2, 20.3, 40.7, 15.9, 49.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(85, 79, 90)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(38.3, 49.4);
        ctx.lineTo(36.6, 49.0);
        ctx.lineTo(34.0, 51.9);
        ctx.lineTo(35.4, 54.7);
        ctx.bezierCurveTo(35.6, 55.1, 36.3, 55.1, 36.5, 54.6);
        ctx.lineTo(36.9, 53.7);
        ctx.bezierCurveTo(37.1, 53.4, 37.4, 53.2, 37.7, 53.3);
        ctx.lineTo(38.4, 53.6);
        ctx.bezierCurveTo(38.9, 53.7, 39.4, 53.2, 39.2, 52.7);
        ctx.lineTo(38.9, 52.0);
        ctx.bezierCurveTo(38.7, 51.7, 38.8, 51.4, 39.1, 51.2);
        ctx.lineTo(39.7, 50.8);
        ctx.bezierCurveTo(40.2, 50.5, 40.1, 49.8, 39.5, 49.7);
        ctx.lineTo(38.3, 49.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(32.9, 49.3);
        ctx.bezierCurveTo(33.3, 50.1, 33.6, 50.9, 33.9, 51.7);
        ctx.bezierCurveTo(34.2, 52.7, 35.6, 52.8, 36.2, 52.0);
        ctx.bezierCurveTo(38.2, 48.9, 38.5, 44.9, 36.6, 41.5);
        ctx.bezierCurveTo(34.0, 36.7, 27.9, 35.0, 23.1, 37.6);
        ctx.bezierCurveTo(20.3, 39.2, 28.4, 40.7, 32.9, 49.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(85, 79, 90)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(35.0, 32.7);
        ctx.bezierCurveTo(35.0, 41.7, 30.3, 43.5, 24.4, 43.5);
        ctx.bezierCurveTo(18.5, 43.5, 13.7, 41.7, 13.7, 32.7);
        ctx.bezierCurveTo(13.7, 28.5, 14.8, 24.9, 16.5, 22.2);
        ctx.bezierCurveTo(17.2, 20.9, 18.1, 19.9, 19.1, 19.1);
        ctx.bezierCurveTo(20.6, 17.8, 22.5, 17.1, 24.4, 17.1);
        ctx.bezierCurveTo(26.2, 17.1, 28.0, 17.7, 29.5, 18.9);
        ctx.bezierCurveTo(30.6, 19.8, 31.7, 21.1, 32.5, 22.5);
        ctx.bezierCurveTo(34.1, 25.2, 35.0, 28.7, 35.0, 32.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(100, 94, 108)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(24.1, 35.8);
        ctx.lineTo(25.5, 36.9);
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgb(67, 62, 72)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1///
        ctx.beginPath();
        ctx.moveTo(24.1, 36.9);
        ctx.lineTo(25.5, 35.8);
        ctx.stroke();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(19.7, 2.7);
        ctx.bezierCurveTo(21.2, 3.2, 19.0, 6.0, 17.5, 6.0);
        ctx.bezierCurveTo(16.0, 6.0, 15.1, 4.5, 15.1, 2.7);
        ctx.bezierCurveTo(15.1, 1.7, 15.6, 0.8, 16.0, 0.2);
        ctx.bezierCurveTo(16.2, -0.1, 16.7, -0.0, 16.7, 0.3);
        ctx.bezierCurveTo(17.0, 1.1, 17.7, 2.1, 19.7, 2.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 62, 72)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(28.5, 2.7);
        ctx.bezierCurveTo(27.0, 3.2, 29.2, 6.0, 30.7, 6.0);
        ctx.bezierCurveTo(32.2, 6.0, 33.1, 4.5, 33.1, 2.7);
        ctx.bezierCurveTo(33.1, 1.7, 32.6, 0.8, 32.1, 0.2);
        ctx.bezierCurveTo(31.9, -0.1, 31.5, -0.0, 31.4, 0.3);
        ctx.bezierCurveTo(31.2, 1.1, 30.5, 2.1, 28.5, 2.7);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(33.8, 11.1);
        ctx.bezierCurveTo(33.8, 12.2, 33.6, 13.2, 33.3, 14.2);
        ctx.bezierCurveTo(32.6, 16.1, 31.2, 17.8, 29.5, 18.9);
        ctx.bezierCurveTo(27.9, 19.9, 26.1, 20.5, 24.1, 20.5);
        ctx.bezierCurveTo(22.3, 20.5, 20.5, 20.0, 19.1, 19.1);
        ctx.bezierCurveTo(17.6, 18.2, 16.4, 17.0, 15.5, 15.5);
        ctx.bezierCurveTo(14.8, 14.2, 14.4, 12.7, 14.4, 11.1);
        ctx.bezierCurveTo(14.4, 7.2, 16.8, 3.9, 20.3, 2.5);
        ctx.bezierCurveTo(21.4, 2.0, 22.7, 1.7, 24.1, 1.7);
        ctx.bezierCurveTo(25.4, 1.7, 26.7, 2.0, 27.9, 2.4);
        ctx.bezierCurveTo(31.4, 3.9, 33.8, 7.2, 33.8, 11.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(27.6, 12.8);
        ctx.bezierCurveTo(27.6, 14.0, 26.1, 14.9, 24.2, 14.9);
        ctx.bezierCurveTo(22.3, 14.9, 20.7, 14.0, 20.7, 12.8);
        ctx.bezierCurveTo(20.7, 12.2, 21.1, 12.2, 21.8, 12.4);
        ctx.bezierCurveTo(22.2, 12.4, 22.5, 12.5, 22.9, 12.6);
        ctx.bezierCurveTo(23.3, 12.7, 23.7, 12.7, 24.2, 12.7);
        ctx.bezierCurveTo(24.7, 12.7, 25.1, 12.6, 25.5, 12.6);
        ctx.lineTo(25.5, 12.6);
        ctx.bezierCurveTo(25.9, 12.5, 26.3, 12.4, 26.6, 12.3);
        ctx.bezierCurveTo(27.2, 12.2, 27.6, 12.3, 27.6, 12.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 44, 36)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.7, 10.0);
        ctx.bezierCurveTo(21.7, 11.0, 20.9, 11.7, 20.0, 11.7);
        ctx.bezierCurveTo(19.0, 11.7, 18.3, 11.0, 18.3, 10.0);
        ctx.bezierCurveTo(18.3, 9.1, 19.0, 8.3, 20.0, 8.3);
        ctx.bezierCurveTo(20.9, 8.3, 21.7, 9.1, 21.7, 10.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(61, 56, 65)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(29.9, 10.0);
        ctx.bezierCurveTo(29.9, 11.0, 29.2, 11.7, 28.3, 11.7);
        ctx.bezierCurveTo(27.3, 11.7, 26.6, 11.0, 26.6, 10.0);
        ctx.bezierCurveTo(26.6, 9.1, 27.3, 8.3, 28.3, 8.3);
        ctx.bezierCurveTo(29.2, 8.3, 29.9, 9.1, 29.9, 10.0);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.9, 12.6);
        ctx.bezierCurveTo(22.8, 13.1, 22.6, 13.6, 22.4, 13.6);
        ctx.bezierCurveTo(22.1, 13.6, 21.9, 13.0, 21.8, 12.4);
        ctx.bezierCurveTo(22.2, 12.4, 22.5, 12.5, 22.9, 12.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(26.6, 12.3);
        ctx.bezierCurveTo(26.6, 13.0, 26.3, 13.6, 26.1, 13.6);
        ctx.bezierCurveTo(25.8, 13.6, 25.6, 13.1, 25.5, 12.6);
        ctx.bezierCurveTo(25.9, 12.5, 26.3, 12.4, 26.6, 12.3);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(50.0, 9.2);
        ctx.lineTo(50.0, 9.2);
        ctx.lineTo(49.6, 8.0);
        ctx.lineTo(48.7, 9.0);
        ctx.lineTo(48.7, 9.0);
        ctx.lineTo(47.1, 10.5);
        ctx.lineTo(48.4, 10.2);
        ctx.lineTo(47.9, 12.9);
        ctx.bezierCurveTo(47.5, 14.6, 46.2, 15.8, 44.3, 15.5);
        ctx.lineTo(44.2, 15.5);
        ctx.bezierCurveTo(43.0, 15.2, 42.3, 14.2, 42.5, 13.1);
        ctx.lineTo(43.9, 6.1);
        ctx.lineTo(45.0, 6.9);
        ctx.lineTo(44.1, 5.0);
        ctx.lineTo(44.1, 4.9);
        ctx.lineTo(43.7, 3.6);
        ctx.lineTo(42.8, 4.6);
        ctx.lineTo(42.7, 4.7);
        ctx.lineTo(41.2, 6.1);
        ctx.lineTo(42.4, 5.8);
        ctx.lineTo(41.0, 12.8);
        ctx.bezierCurveTo(40.8, 13.9, 39.7, 14.6, 38.6, 14.3);
        ctx.lineTo(38.6, 14.3);
        ctx.bezierCurveTo(36.7, 13.9, 36.0, 12.3, 36.3, 10.5);
        ctx.lineTo(36.8, 7.9);
        ctx.lineTo(37.9, 8.6);
        ctx.lineTo(37.1, 6.7);
        ctx.lineTo(37.0, 6.6);
        ctx.lineTo(36.6, 5.3);
        ctx.lineTo(35.7, 6.3);
        ctx.lineTo(35.6, 6.4);
        ctx.lineTo(34.1, 7.9);
        ctx.lineTo(35.4, 7.6);
        ctx.lineTo(34.8, 10.6);
        ctx.bezierCurveTo(34.3, 13.0, 35.6, 15.3, 38.2, 15.8);
        ctx.lineTo(38.2, 15.8);
        ctx.bezierCurveTo(39.4, 16.1, 40.2, 17.2, 39.9, 18.3);
        ctx.lineTo(34.5, 45.5);
        ctx.bezierCurveTo(34.4, 45.7, 34.6, 45.9, 34.8, 46.0);
        ctx.lineTo(35.4, 46.1);
        ctx.bezierCurveTo(35.6, 46.1, 35.9, 46.0, 35.9, 45.8);
        ctx.lineTo(41.4, 18.6);
        ctx.bezierCurveTo(41.6, 17.5, 42.8, 16.8, 44.0, 17.0);
        ctx.lineTo(44.0, 17.0);
        ctx.bezierCurveTo(46.6, 17.5, 48.6, 15.9, 49.1, 13.5);
        ctx.lineTo(49.7, 10.5);
        ctx.lineTo(49.8, 10.5);
        ctx.lineTo(50.9, 11.2);
        ctx.lineTo(50.0, 9.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 62, 42)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(27.9, 2.4);
        ctx.bezierCurveTo(24.6, 5.8, 21.5, 3.6, 20.3, 2.5);
        ctx.bezierCurveTo(21.4, 2.0, 22.7, 1.7, 24.1, 1.7);
        ctx.bezierCurveTo(25.4, 1.7, 26.7, 2.0, 27.9, 2.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 62, 72)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(41.8, 19.9);
        ctx.bezierCurveTo(41.8, 19.9, 41.7, 19.9, 41.6, 20.0);
        ctx.bezierCurveTo(41.4, 19.9, 41.1, 20.0, 40.8, 20.0);
        ctx.bezierCurveTo(40.0, 20.3, 39.5, 20.9, 39.7, 21.4);
        ctx.bezierCurveTo(39.7, 21.5, 39.8, 21.6, 39.8, 21.6);
        ctx.bezierCurveTo(39.7, 21.8, 39.6, 22.0, 39.6, 22.2);
        ctx.bezierCurveTo(39.6, 22.4, 39.7, 22.6, 39.8, 22.7);
        ctx.bezierCurveTo(39.8, 22.7, 39.8, 22.7, 39.8, 22.7);
        ctx.bezierCurveTo(39.7, 22.9, 39.6, 23.1, 39.6, 23.3);
        ctx.bezierCurveTo(39.6, 23.5, 39.7, 23.7, 39.9, 23.9);
        ctx.bezierCurveTo(39.9, 24.0, 39.9, 24.0, 39.8, 24.1);
        ctx.bezierCurveTo(39.7, 24.6, 40.3, 25.2, 41.0, 25.4);
        ctx.bezierCurveTo(41.2, 25.4, 41.4, 25.4, 41.6, 25.4);
        ctx.bezierCurveTo(41.7, 25.4, 41.7, 25.4, 41.8, 25.4);
        ctx.bezierCurveTo(42.9, 25.4, 43.8, 24.2, 43.8, 22.7);
        ctx.bezierCurveTo(43.8, 21.2, 42.9, 19.9, 41.8, 19.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(113, 105, 123)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(32.8, 21.8);
        ctx.bezierCurveTo(31.1, 24.4, 27.7, 21.2, 24.4, 21.2);
        ctx.bezierCurveTo(20.9, 21.2, 18.3, 24.3, 16.7, 21.4);
        ctx.bezierCurveTo(17.4, 20.2, 18.1, 19.9, 19.1, 19.1);
        ctx.bezierCurveTo(20.5, 20.0, 22.3, 20.5, 24.1, 20.5);
        ctx.bezierCurveTo(26.1, 20.5, 27.9, 19.9, 29.5, 18.9);
        ctx.bezierCurveTo(30.6, 19.8, 31.9, 20.3, 32.8, 21.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 44, 36)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(23.7, 21.1);
        ctx.bezierCurveTo(23.7, 21.1, 22.3, 24.9, 23.3, 28.8);
        ctx.lineWidth = 0.3;
        ctx.strokeStyle = "rgb(192, 44, 36)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(24.8, 21.1);
        ctx.bezierCurveTo(24.8, 21.1, 26.2, 24.9, 25.2, 28.8);
        ctx.stroke();
        ctx.restore();
    }
    else {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(26.9, 33.1);
        ctx.bezierCurveTo(26.2, 29.8, 27.2, 28.4, 28.6, 28.1);
        ctx.bezierCurveTo(30.0, 27.8, 31.3, 28.7, 32.0, 31.9);
        ctx.bezierCurveTo(32.8, 35.2, 32.2, 38.1, 30.8, 38.4);
        ctx.bezierCurveTo(29.4, 38.7, 27.7, 36.3, 26.9, 33.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(34.3, 41.4);
        ctx.lineTo(32.4, 42.3);
        ctx.bezierCurveTo(32.1, 42.5, 31.6, 42.4, 31.3, 42.2);
        ctx.lineTo(29.6, 41.1);
        ctx.bezierCurveTo(29.2, 40.8, 29.1, 40.5, 29.1, 40.1);
        ctx.lineTo(29.2, 38.0);
        ctx.bezierCurveTo(29.3, 37.6, 29.5, 37.2, 29.8, 37.1);
        ctx.lineTo(30.0, 37.0);
        ctx.lineTo(31.7, 36.1);
        ctx.bezierCurveTo(31.8, 36.1, 31.9, 36.1, 31.9, 36.1);
        ctx.bezierCurveTo(32.2, 36.0, 32.6, 36.0, 32.8, 36.2);
        ctx.lineTo(34.2, 37.1);
        ctx.bezierCurveTo(34.7, 37.5, 35.1, 38.2, 35.0, 38.8);
        ctx.lineTo(35.0, 39.5);
        ctx.lineTo(34.9, 40.5);
        ctx.bezierCurveTo(34.9, 40.7, 34.8, 40.9, 34.7, 41.1);
        ctx.bezierCurveTo(34.7, 41.1, 34.7, 41.1, 34.7, 41.1);
        ctx.bezierCurveTo(34.6, 41.2, 34.4, 41.3, 34.3, 41.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(32.0, 37.7);
        ctx.bezierCurveTo(31.6, 38.2, 30.9, 38.2, 30.4, 37.8);
        ctx.bezierCurveTo(30.2, 37.6, 30.0, 37.3, 30.0, 37.0);
        ctx.lineTo(31.7, 36.1);
        ctx.bezierCurveTo(31.8, 36.1, 31.9, 36.1, 31.9, 36.1);
        ctx.bezierCurveTo(31.9, 36.1, 32.0, 36.1, 32.0, 36.1);
        ctx.bezierCurveTo(32.4, 36.5, 32.5, 37.3, 32.0, 37.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(31.5, 40.9);
        ctx.bezierCurveTo(31.2, 41.2, 30.7, 41.3, 30.4, 41.0);
        ctx.bezierCurveTo(30.1, 40.7, 30.1, 40.2, 30.3, 39.9);
        ctx.bezierCurveTo(30.6, 39.6, 31.1, 39.6, 31.4, 39.8);
        ctx.bezierCurveTo(31.7, 40.1, 31.8, 40.6, 31.5, 40.9);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(32.9, 40.1);
        ctx.bezierCurveTo(32.7, 40.3, 32.3, 40.4, 32.1, 40.2);
        ctx.bezierCurveTo(31.9, 40.0, 31.9, 39.6, 32.1, 39.4);
        ctx.bezierCurveTo(32.3, 39.2, 32.6, 39.2, 32.8, 39.4);
        ctx.bezierCurveTo(33.0, 39.6, 33.1, 39.9, 32.9, 40.1);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(34.7, 41.1);
        ctx.bezierCurveTo(34.7, 41.1, 34.7, 41.1, 34.7, 41.1);
        ctx.bezierCurveTo(34.3, 41.2, 33.9, 41.2, 33.6, 40.9);
        ctx.bezierCurveTo(33.2, 40.5, 33.2, 39.9, 33.6, 39.5);
        ctx.bezierCurveTo(33.9, 39.2, 34.6, 39.1, 34.9, 39.5);
        ctx.bezierCurveTo(35.0, 39.5, 35.0, 39.5, 35.0, 39.5);
        ctx.lineTo(34.9, 40.5);
        ctx.bezierCurveTo(34.9, 40.7, 34.8, 40.9, 34.7, 41.1);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(33.8, 38.3);
        ctx.bezierCurveTo(33.6, 38.6, 33.2, 38.6, 32.9, 38.3);
        ctx.bezierCurveTo(32.6, 38.1, 32.6, 37.7, 32.9, 37.4);
        ctx.bezierCurveTo(33.1, 37.1, 33.5, 37.1, 33.8, 37.4);
        ctx.bezierCurveTo(34.1, 37.6, 34.1, 38.0, 33.8, 38.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(28.6, 29.9);
        ctx.lineTo(30.4, 29.4);
        ctx.bezierCurveTo(31.0, 29.2, 31.4, 28.5, 31.2, 27.8);
        ctx.lineTo(30.7, 26.0);
        ctx.bezierCurveTo(30.2, 24.4, 28.4, 23.4, 26.8, 23.9);
        ctx.lineTo(26.8, 23.9);
        ctx.bezierCurveTo(26.1, 24.1, 25.7, 24.8, 25.9, 25.5);
        ctx.lineTo(27.0, 29.1);
        ctx.bezierCurveTo(27.2, 29.7, 27.9, 30.1, 28.6, 29.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(14.2, 40.6);
        ctx.lineTo(14.3, 52.4);
        ctx.bezierCurveTo(14.3, 52.4, 12.2, 53.1, 12.1, 54.2);
        ctx.bezierCurveTo(12.0, 55.4, 17.4, 55.1, 17.9, 54.2);
        ctx.bezierCurveTo(18.5, 53.3, 18.9, 40.6, 18.9, 40.6);
        ctx.lineTo(14.2, 40.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(27.9, 38.6);
        ctx.lineTo(27.5, 52.2);
        ctx.bezierCurveTo(27.5, 52.2, 29.6, 52.9, 29.7, 54.1);
        ctx.bezierCurveTo(29.8, 55.2, 24.4, 55.0, 23.9, 54.1);
        ctx.bezierCurveTo(23.3, 53.2, 23.2, 38.6, 23.2, 38.6);
        ctx.lineTo(27.9, 38.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(12.9, 44.6);
        ctx.bezierCurveTo(11.1, 43.8, 10.2, 41.6, 10.9, 39.7);
        ctx.bezierCurveTo(12.9, 34.9, 13.9, 29.7, 13.9, 24.5);
        ctx.lineTo(13.9, 24.1);
        ctx.lineTo(26.8, 23.8);
        ctx.lineTo(26.8, 23.8);
        ctx.bezierCurveTo(27.1, 24.3, 27.3, 24.9, 27.4, 25.5);
        ctx.bezierCurveTo(28.0, 30.2, 29.0, 35.5, 31.0, 40.1);
        ctx.bezierCurveTo(31.8, 42.0, 30.8, 44.2, 28.9, 44.9);
        ctx.bezierCurveTo(22.0, 47.5, 16.5, 46.3, 12.9, 44.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 116, 27)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(21.3, 31.7);
        ctx.lineTo(19.2, 31.7);
        ctx.bezierCurveTo(17.6, 31.7, 15.4, 30.4, 15.4, 28.8);
        ctx.lineTo(15.4, 28.8);
        ctx.bezierCurveTo(15.4, 26.7, 17.1, 25.1, 19.2, 25.1);
        ctx.lineTo(22.2, 25.1);
        ctx.bezierCurveTo(25.6, 25.0, 25.2, 28.9, 25.2, 28.9);
        ctx.bezierCurveTo(25.0, 30.2, 24.6, 31.6, 21.3, 31.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(40.4, 27.4);
        ctx.bezierCurveTo(40.0, 27.3, 39.6, 27.3, 39.3, 27.4);
        ctx.bezierCurveTo(39.2, 26.4, 38.4, 25.5, 37.3, 25.3);
        ctx.bezierCurveTo(37.1, 25.2, 36.9, 25.2, 36.6, 25.2);
        ctx.bezierCurveTo(36.6, 25.2, 36.6, 25.1, 36.6, 25.1);
        ctx.bezierCurveTo(36.6, 23.7, 35.7, 22.5, 34.4, 22.1);
        ctx.bezierCurveTo(34.5, 21.8, 34.5, 21.5, 34.5, 21.2);
        ctx.bezierCurveTo(34.5, 19.5, 33.5, 17.9, 32.1, 17.0);
        ctx.bezierCurveTo(32.4, 15.8, 32.5, 14.6, 32.4, 13.3);
        ctx.bezierCurveTo(31.9, 7.4, 28.0, 2.5, 20.7, 3.0);
        ctx.bezierCurveTo(14.7, 3.4, 9.0, 10.5, 9.5, 16.4);
        ctx.bezierCurveTo(9.5, 16.5, 9.6, 16.6, 9.6, 16.7);
        ctx.bezierCurveTo(8.1, 17.6, 7.2, 19.3, 7.2, 21.1);
        ctx.bezierCurveTo(7.2, 21.4, 7.2, 21.7, 7.3, 22.0);
        ctx.bezierCurveTo(7.3, 22.0, 7.2, 22.0, 7.2, 22.0);
        ctx.bezierCurveTo(5.7, 22.7, 5.0, 24.3, 5.4, 25.8);
        ctx.bezierCurveTo(5.1, 25.8, 4.7, 25.9, 4.4, 26.0);
        ctx.bezierCurveTo(3.6, 26.4, 3.1, 27.1, 3.0, 27.9);
        ctx.bezierCurveTo(2.4, 27.6, 1.7, 27.5, 1.1, 27.8);
        ctx.bezierCurveTo(0.0, 28.3, 0.0, 30.5, 0.0, 30.5);
        ctx.bezierCurveTo(0.0, 30.5, 1.7, 32.0, 2.7, 31.6);
        ctx.bezierCurveTo(3.3, 31.3, 3.7, 30.8, 3.9, 30.1);
        ctx.bezierCurveTo(4.6, 30.7, 5.5, 30.8, 6.3, 30.4);
        ctx.bezierCurveTo(7.3, 30.0, 7.8, 29.1, 7.8, 28.1);
        ctx.bezierCurveTo(8.4, 28.3, 9.1, 28.2, 9.8, 27.9);
        ctx.bezierCurveTo(10.5, 27.6, 11.1, 27.0, 11.4, 26.4);
        ctx.bezierCurveTo(11.8, 26.5, 12.2, 26.5, 12.6, 26.5);
        ctx.bezierCurveTo(14.9, 26.5, 16.9, 25.1, 17.7, 23.0);
        ctx.bezierCurveTo(19.2, 23.4, 20.9, 23.6, 22.5, 23.9);
        ctx.bezierCurveTo(23.5, 24.1, 24.5, 24.1, 25.4, 24.0);
        ctx.bezierCurveTo(26.2, 25.3, 27.8, 26.2, 29.5, 26.2);
        ctx.bezierCurveTo(29.9, 26.2, 30.2, 26.2, 30.5, 26.1);
        ctx.bezierCurveTo(31.0, 27.4, 32.1, 28.2, 33.5, 28.2);
        ctx.bezierCurveTo(33.9, 28.2, 34.2, 28.2, 34.5, 28.1);
        ctx.bezierCurveTo(34.7, 29.0, 35.5, 29.8, 36.5, 30.0);
        ctx.bezierCurveTo(37.0, 30.1, 37.5, 30.0, 37.9, 29.8);
        ctx.bezierCurveTo(38.1, 30.6, 38.7, 31.2, 39.5, 31.4);
        ctx.bezierCurveTo(40.6, 31.6, 41.9, 29.8, 41.9, 29.8);
        ctx.bezierCurveTo(41.9, 29.8, 41.5, 27.6, 40.4, 27.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(29.1, 19.6);
        ctx.bezierCurveTo(28.9, 20.6, 28.6, 21.5, 28.1, 22.3);
        ctx.lineTo(28.1, 22.3);
        ctx.bezierCurveTo(26.8, 24.4, 24.5, 25.7, 21.5, 26.0);
        ctx.bezierCurveTo(18.1, 26.3, 14.3, 25.1, 12.3, 22.6);
        ctx.bezierCurveTo(11.4, 21.3, 10.9, 19.7, 11.3, 17.7);
        ctx.bezierCurveTo(11.3, 17.7, 11.3, 17.6, 11.3, 17.6);
        ctx.bezierCurveTo(12.2, 12.3, 13.7, 8.0, 18.9, 7.5);
        ctx.bezierCurveTo(24.1, 7.0, 28.7, 11.0, 29.2, 16.4);
        ctx.bezierCurveTo(29.3, 17.6, 29.3, 18.6, 29.1, 19.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.6, 19.9);
        ctx.bezierCurveTo(22.6, 20.8, 21.3, 21.6, 19.7, 21.6);
        ctx.bezierCurveTo(18.1, 21.6, 16.8, 20.8, 16.8, 19.9);
        ctx.bezierCurveTo(16.8, 18.9, 18.1, 19.8, 19.7, 19.8);
        ctx.bezierCurveTo(21.3, 19.8, 22.6, 18.9, 22.6, 19.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(243, 126, 114)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(20.2, 17.4);
        ctx.bezierCurveTo(20.2, 17.7, 19.9, 18.0, 19.6, 18.0);
        ctx.bezierCurveTo(19.3, 18.0, 19.0, 17.7, 19.0, 17.4);
        ctx.bezierCurveTo(19.0, 17.0, 19.3, 16.5, 19.6, 16.5);
        ctx.bezierCurveTo(19.9, 16.5, 20.2, 17.0, 20.2, 17.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(17.4, 16.5);
        ctx.bezierCurveTo(17.4, 17.4, 16.8, 18.1, 15.9, 18.1);
        ctx.bezierCurveTo(15.1, 18.1, 14.4, 17.4, 14.4, 16.5);
        ctx.bezierCurveTo(14.4, 15.7, 15.1, 15.0, 15.9, 15.0);
        ctx.bezierCurveTo(16.8, 15.0, 17.4, 15.7, 17.4, 16.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(129, 196, 200)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(24.9, 16.5);
        ctx.bezierCurveTo(24.9, 17.4, 24.2, 18.1, 23.4, 18.1);
        ctx.bezierCurveTo(22.6, 18.1, 21.9, 17.4, 21.9, 16.5);
        ctx.bezierCurveTo(21.9, 15.7, 22.6, 15.0, 23.4, 15.0);
        ctx.bezierCurveTo(24.2, 15.0, 24.9, 15.7, 24.9, 16.5);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(18.5, 8.9);
        ctx.bezierCurveTo(18.5, 8.9, 12.3, 12.5, 11.8, 15.0);
        ctx.bezierCurveTo(11.8, 15.0, 11.9, 10.4, 12.8, 9.0);
        ctx.bezierCurveTo(13.8, 7.5, 21.5, 4.6, 27.2, 7.1);
        ctx.bezierCurveTo(32.8, 9.6, 29.2, 16.4, 29.2, 16.4);
        ctx.bezierCurveTo(29.2, 16.4, 21.3, 13.6, 18.5, 8.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(31.3, 18.0);
        ctx.bezierCurveTo(31.4, 19.1, 30.6, 20.0, 29.6, 20.1);
        ctx.bezierCurveTo(28.5, 20.2, 27.6, 19.4, 27.5, 18.4);
        ctx.bezierCurveTo(27.4, 17.3, 28.2, 16.4, 29.2, 16.3);
        ctx.bezierCurveTo(30.3, 16.2, 31.2, 17.0, 31.3, 18.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(29.7, 12.1);
        ctx.bezierCurveTo(29.5, 11.6, 26.1, 6.5, 21.0, 6.2);
        ctx.bezierCurveTo(18.8, 6.1, 16.5, 6.6, 14.9, 8.2);
        ctx.bezierCurveTo(15.5, 5.7, 18.7, 4.5, 21.6, 4.5);
        ctx.bezierCurveTo(28.0, 4.4, 30.4, 10.9, 29.7, 12.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 116, 27)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(13.3, 30.8);
        ctx.lineTo(11.5, 30.0);
        ctx.bezierCurveTo(10.8, 29.8, 10.5, 29.0, 10.8, 28.3);
        ctx.lineTo(11.5, 26.4);
        ctx.bezierCurveTo(12.2, 24.7, 14.1, 23.9, 15.8, 24.6);
        ctx.lineTo(15.8, 24.6);
        ctx.bezierCurveTo(16.5, 24.8, 16.8, 25.6, 16.6, 26.3);
        ctx.lineTo(15.1, 30.0);
        ctx.bezierCurveTo(14.8, 30.7, 14.0, 31.0, 13.3, 30.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(235, 220, 100)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(25.4, 27.5);
        ctx.bezierCurveTo(25.2, 26.6, 25.0, 25.8, 24.5, 25.3);
        ctx.bezierCurveTo(23.5, 25.7, 22.5, 26.0, 21.3, 26.0);
        ctx.bezierCurveTo(18.8, 26.0, 17.2, 25.7, 15.9, 25.2);
        ctx.bezierCurveTo(15.5, 25.7, 15.4, 26.5, 15.2, 27.3);
        ctx.bezierCurveTo(14.9, 28.5, 15.5, 30.1, 17.1, 30.2);
        ctx.bezierCurveTo(19.5, 30.2, 19.7, 28.4, 20.3, 27.3);
        ctx.bezierCurveTo(20.7, 28.3, 21.1, 30.4, 23.3, 30.2);
        ctx.bezierCurveTo(24.9, 30.1, 25.6, 28.6, 25.4, 27.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(129, 196, 200)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(22.5, 24.9);
        ctx.lineTo(21.5, 27.6);
        ctx.bezierCurveTo(21.3, 28.1, 20.8, 28.5, 20.3, 28.5);
        ctx.lineTo(17.5, 29.0);
        ctx.bezierCurveTo(16.9, 29.1, 16.4, 28.9, 16.1, 28.4);
        ctx.lineTo(14.3, 26.2);
        ctx.bezierCurveTo(13.9, 25.8, 13.9, 25.3, 14.0, 24.8);
        ctx.lineTo(14.1, 24.5);
        ctx.lineTo(15.1, 22.1);
        ctx.bezierCurveTo(15.1, 22.0, 15.1, 21.9, 15.2, 21.8);
        ctx.bezierCurveTo(15.4, 21.5, 15.8, 21.2, 16.2, 21.1);
        ctx.lineTo(18.4, 20.8);
        ctx.bezierCurveTo(19.3, 20.7, 20.3, 21.0, 20.8, 21.7);
        ctx.lineTo(21.4, 22.5);
        ctx.lineTo(22.2, 23.5);
        ctx.bezierCurveTo(22.4, 23.7, 22.5, 24.0, 22.6, 24.3);
        ctx.bezierCurveTo(22.6, 24.3, 22.6, 24.3, 22.6, 24.3);
        ctx.bezierCurveTo(22.6, 24.5, 22.6, 24.7, 22.5, 24.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(16.9, 23.4);
        ctx.bezierCurveTo(16.9, 24.3, 16.2, 25.0, 15.3, 25.0);
        ctx.bezierCurveTo(14.8, 25.0, 14.4, 24.8, 14.1, 24.5);
        ctx.lineTo(15.1, 22.1);
        ctx.bezierCurveTo(15.1, 22.0, 15.1, 21.9, 15.2, 21.8);
        ctx.bezierCurveTo(15.2, 21.8, 15.3, 21.8, 15.3, 21.8);
        ctx.bezierCurveTo(16.2, 21.8, 16.9, 22.5, 16.9, 23.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(19.3, 27.1);
        ctx.bezierCurveTo(19.3, 27.7, 18.8, 28.2, 18.2, 28.2);
        ctx.bezierCurveTo(17.6, 28.2, 17.2, 27.7, 17.2, 27.1);
        ctx.bezierCurveTo(17.2, 26.5, 17.6, 26.1, 18.2, 26.1);
        ctx.bezierCurveTo(18.8, 26.1, 19.3, 26.5, 19.3, 27.1);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(19.9, 25.0);
        ctx.bezierCurveTo(19.9, 25.4, 19.6, 25.7, 19.2, 25.7);
        ctx.bezierCurveTo(18.8, 25.7, 18.5, 25.4, 18.5, 25.0);
        ctx.bezierCurveTo(18.5, 24.6, 18.8, 24.3, 19.2, 24.3);
        ctx.bezierCurveTo(19.6, 24.3, 19.9, 24.6, 19.9, 25.0);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(22.6, 24.3);
        ctx.bezierCurveTo(22.6, 24.3, 22.6, 24.3, 22.6, 24.3);
        ctx.bezierCurveTo(22.4, 24.7, 21.9, 25.1, 21.4, 25.1);
        ctx.bezierCurveTo(20.7, 25.1, 20.1, 24.5, 20.1, 23.8);
        ctx.bezierCurveTo(20.1, 23.0, 20.7, 22.5, 21.4, 22.5);
        ctx.bezierCurveTo(21.4, 22.5, 21.4, 22.5, 21.4, 22.5);
        ctx.lineTo(22.2, 23.5);
        ctx.bezierCurveTo(22.4, 23.7, 22.5, 24.0, 22.6, 24.3);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(19.2, 22.3);
        ctx.bezierCurveTo(19.2, 22.8, 18.8, 23.2, 18.3, 23.2);
        ctx.bezierCurveTo(17.8, 23.2, 17.3, 22.8, 17.3, 22.3);
        ctx.bezierCurveTo(17.3, 21.8, 17.8, 21.4, 18.3, 21.4);
        ctx.bezierCurveTo(18.8, 21.4, 19.2, 21.8, 19.2, 22.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(20.4, 2.5);
        ctx.bezierCurveTo(20.7, 3.9, 20.4, 5.3, 19.8, 5.4);
        ctx.bezierCurveTo(19.1, 5.6, 18.3, 4.5, 18.0, 3.0);
        ctx.bezierCurveTo(17.6, 1.5, 17.9, 0.2, 18.6, 0.0);
        ctx.bezierCurveTo(19.3, -0.1, 20.1, 1.0, 20.4, 2.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 116, 27)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(22.9, 3.1);
        ctx.bezierCurveTo(22.4, 4.6, 21.5, 5.5, 20.8, 5.3);
        ctx.bezierCurveTo(20.2, 5.1, 20.1, 3.7, 20.6, 2.3);
        ctx.bezierCurveTo(21.1, 0.9, 22.0, -0.1, 22.7, 0.1);
        ctx.bezierCurveTo(23.3, 0.3, 23.4, 1.7, 22.9, 3.1);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(16.2, 31.5);
        ctx.bezierCurveTo(14.1, 34.1, 12.4, 34.3, 11.3, 33.4);
        ctx.bezierCurveTo(10.1, 32.5, 10.0, 30.9, 12.1, 28.2);
        ctx.bezierCurveTo(14.1, 25.6, 15.7, 24.9, 16.9, 25.8);
        ctx.bezierCurveTo(18.0, 26.7, 18.2, 28.9, 16.2, 31.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(15.3, 19.9);
        ctx.bezierCurveTo(15.3, 21.4, 14.1, 22.6, 12.6, 22.6);
        ctx.bezierCurveTo(12.5, 22.6, 12.4, 22.6, 12.3, 22.6);
        ctx.bezierCurveTo(11.4, 21.3, 10.9, 19.7, 11.3, 17.7);
        ctx.bezierCurveTo(11.3, 17.7, 11.3, 17.6, 11.3, 17.6);
        ctx.bezierCurveTo(11.7, 17.4, 12.1, 17.2, 12.6, 17.2);
        ctx.bezierCurveTo(14.1, 17.2, 15.3, 18.4, 15.3, 19.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 171, 155)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(29.1, 19.6);
        ctx.bezierCurveTo(28.9, 20.6, 28.6, 21.5, 28.1, 22.3);
        ctx.lineTo(28.1, 22.3);
        ctx.bezierCurveTo(27.7, 22.6, 27.1, 22.8, 26.5, 22.8);
        ctx.bezierCurveTo(25.0, 22.8, 23.8, 21.6, 23.8, 20.1);
        ctx.bezierCurveTo(23.8, 18.6, 25.0, 17.4, 26.5, 17.4);
        ctx.bezierCurveTo(27.8, 17.4, 28.9, 18.3, 29.1, 19.6);
        ctx.closePath();
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(17.4, 29.2);
        ctx.bezierCurveTo(17.4, 29.2, 20.2, 27.3, 19.7, 26.3);
        ctx.bezierCurveTo(19.5, 25.8, 18.3, 26.4, 18.3, 26.4);
        ctx.bezierCurveTo(18.3, 26.4, 19.0, 24.9, 18.3, 24.6);
        ctx.bezierCurveTo(17.8, 24.4, 16.9, 25.6, 16.9, 25.6);
        ctx.bezierCurveTo(16.9, 25.6, 17.2, 24.3, 16.6, 24.2);
        ctx.bezierCurveTo(16.0, 24.0, 15.5, 25.4, 15.5, 25.4);
        ctx.bezierCurveTo(15.5, 25.4, 15.4, 24.1, 14.9, 24.2);
        ctx.bezierCurveTo(13.9, 24.4, 13.8, 27.7, 13.8, 27.7);
        ctx.lineTo(17.4, 29.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(248, 225, 219)";
        ctx.fill();

        // 1//
        ctx.beginPath();
        ctx.moveTo(26.9, 25.5);
        ctx.bezierCurveTo(26.9, 25.5, 26.9, 33.3, 17.8, 37.4);
        ctx.lineWidth = 0.7;
        ctx.strokeStyle = "rgb(129, 196, 200)";
        ctx.lineCap = "round";
        ctx.stroke();

        // 1//
        ctx.beginPath();
        ctx.moveTo(13.7, 45.7);
        ctx.lineTo(12.0, 45.3);
        ctx.bezierCurveTo(10.1, 44.8, 8.9, 42.9, 9.4, 41.0);
        ctx.lineTo(10.2, 37.8);
        ctx.bezierCurveTo(10.6, 35.9, 12.5, 34.7, 14.4, 35.2);
        ctx.lineTo(16.1, 35.6);
        ctx.bezierCurveTo(18.0, 36.1, 19.2, 38.0, 18.8, 39.9);
        ctx.lineTo(18.0, 43.1);
        ctx.bezierCurveTo(17.5, 45.0, 15.6, 46.2, 13.7, 45.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(129, 196, 200)";
        ctx.fill();

        // 1//

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(14.4, 36.3);
        ctx.lineTo(14.1, 37.1);
        ctx.bezierCurveTo(14.1, 37.3, 13.9, 37.4, 13.7, 37.4);
        ctx.lineTo(12.8, 37.6);
        ctx.bezierCurveTo(12.7, 37.6, 12.5, 37.6, 12.4, 37.4);
        ctx.lineTo(11.8, 36.7);
        ctx.bezierCurveTo(11.7, 36.6, 11.6, 36.4, 11.7, 36.2);
        ctx.lineTo(11.7, 36.1);
        ctx.lineTo(12.0, 35.4);
        ctx.bezierCurveTo(12.1, 35.3, 12.1, 35.3, 12.1, 35.3);
        ctx.bezierCurveTo(12.2, 35.2, 12.3, 35.1, 12.4, 35.0);
        ctx.lineTo(13.1, 34.9);
        ctx.bezierCurveTo(13.4, 34.9, 13.7, 35.0, 13.9, 35.2);
        ctx.lineTo(14.1, 35.5);
        ctx.lineTo(14.4, 35.8);
        ctx.bezierCurveTo(14.4, 35.9, 14.5, 36.0, 14.5, 36.1);
        ctx.bezierCurveTo(14.5, 36.1, 14.5, 36.1, 14.5, 36.1);
        ctx.bezierCurveTo(14.5, 36.1, 14.5, 36.2, 14.4, 36.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(12.6, 35.8);
        ctx.bezierCurveTo(12.6, 36.1, 12.4, 36.3, 12.1, 36.3);
        ctx.bezierCurveTo(12.0, 36.3, 11.8, 36.2, 11.7, 36.1);
        ctx.lineTo(12.0, 35.4);
        ctx.bezierCurveTo(12.1, 35.3, 12.1, 35.3, 12.1, 35.3);
        ctx.bezierCurveTo(12.1, 35.3, 12.1, 35.3, 12.1, 35.3);
        ctx.bezierCurveTo(12.4, 35.3, 12.6, 35.5, 12.6, 35.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(13.4, 37.0);
        ctx.bezierCurveTo(13.4, 37.2, 13.2, 37.3, 13.1, 37.3);
        ctx.bezierCurveTo(12.9, 37.3, 12.7, 37.2, 12.7, 37.0);
        ctx.bezierCurveTo(12.7, 36.8, 12.9, 36.6, 13.1, 36.6);
        ctx.bezierCurveTo(13.2, 36.6, 13.4, 36.8, 13.4, 37.0);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(13.6, 36.3);
        ctx.bezierCurveTo(13.6, 36.4, 13.5, 36.5, 13.4, 36.5);
        ctx.bezierCurveTo(13.3, 36.5, 13.1, 36.4, 13.1, 36.3);
        ctx.bezierCurveTo(13.1, 36.2, 13.3, 36.1, 13.4, 36.1);
        ctx.bezierCurveTo(13.5, 36.1, 13.6, 36.2, 13.6, 36.3);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(14.5, 36.1);
        ctx.bezierCurveTo(14.5, 36.1, 14.5, 36.1, 14.5, 36.1);
        ctx.bezierCurveTo(14.4, 36.2, 14.3, 36.3, 14.1, 36.3);
        ctx.bezierCurveTo(13.9, 36.3, 13.7, 36.1, 13.7, 35.9);
        ctx.bezierCurveTo(13.7, 35.7, 13.9, 35.5, 14.1, 35.5);
        ctx.bezierCurveTo(14.1, 35.5, 14.1, 35.5, 14.1, 35.5);
        ctx.lineTo(14.4, 35.8);
        ctx.bezierCurveTo(14.4, 35.9, 14.5, 36.0, 14.5, 36.1);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(13.4, 35.4);
        ctx.bezierCurveTo(13.4, 35.6, 13.2, 35.7, 13.1, 35.7);
        ctx.bezierCurveTo(12.9, 35.7, 12.8, 35.6, 12.8, 35.4);
        ctx.bezierCurveTo(12.8, 35.3, 12.9, 35.1, 13.1, 35.1);
        ctx.bezierCurveTo(13.2, 35.1, 13.4, 35.3, 13.4, 35.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.restore();

        // 1///
        ctx.save();

        // 1////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(17.0, 37.5);
        ctx.lineTo(16.0, 38.3);
        ctx.bezierCurveTo(15.8, 38.5, 15.6, 38.5, 15.4, 38.5);
        ctx.lineTo(14.2, 38.0);
        ctx.bezierCurveTo(13.9, 37.9, 13.8, 37.7, 13.7, 37.5);
        ctx.lineTo(13.5, 36.2);
        ctx.bezierCurveTo(13.5, 36.0, 13.6, 35.7, 13.7, 35.6);
        ctx.lineTo(13.8, 35.5);
        ctx.lineTo(14.7, 34.7);
        ctx.bezierCurveTo(14.8, 34.7, 14.8, 34.7, 14.9, 34.7);
        ctx.bezierCurveTo(15.0, 34.6, 15.2, 34.6, 15.4, 34.6);
        ctx.lineTo(16.4, 35.0);
        ctx.bezierCurveTo(16.8, 35.1, 17.0, 35.5, 17.1, 35.9);
        ctx.lineTo(17.2, 36.3);
        ctx.lineTo(17.3, 36.9);
        ctx.bezierCurveTo(17.3, 37.0, 17.3, 37.2, 17.2, 37.3);
        ctx.bezierCurveTo(17.2, 37.3, 17.2, 37.3, 17.2, 37.3);
        ctx.bezierCurveTo(17.2, 37.4, 17.1, 37.5, 17.0, 37.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(94, 56, 25)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(15.2, 35.7);
        ctx.bezierCurveTo(15.0, 36.0, 14.5, 36.1, 14.2, 35.9);
        ctx.bezierCurveTo(14.0, 35.8, 13.9, 35.7, 13.8, 35.5);
        ctx.lineTo(14.7, 34.7);
        ctx.bezierCurveTo(14.8, 34.7, 14.8, 34.7, 14.9, 34.7);
        ctx.bezierCurveTo(14.9, 34.7, 14.9, 34.7, 14.9, 34.7);
        ctx.bezierCurveTo(15.2, 34.9, 15.4, 35.3, 15.2, 35.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(15.3, 37.7);
        ctx.bezierCurveTo(15.1, 37.9, 14.9, 38.0, 14.6, 37.8);
        ctx.bezierCurveTo(14.4, 37.7, 14.3, 37.4, 14.5, 37.2);
        ctx.bezierCurveTo(14.6, 37.0, 14.9, 36.9, 15.1, 37.0);
        ctx.bezierCurveTo(15.3, 37.1, 15.4, 37.4, 15.3, 37.7);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(16.0, 37.0);
        ctx.bezierCurveTo(15.9, 37.1, 15.7, 37.2, 15.6, 37.1);
        ctx.bezierCurveTo(15.4, 37.0, 15.3, 36.8, 15.4, 36.7);
        ctx.bezierCurveTo(15.5, 36.5, 15.7, 36.5, 15.9, 36.5);
        ctx.bezierCurveTo(16.0, 36.6, 16.1, 36.8, 16.0, 37.0);
        ctx.closePath();
        ctx.fill();

        // 1////
        ctx.beginPath();
        ctx.moveTo(17.2, 37.3);
        ctx.bezierCurveTo(17.2, 37.3, 17.2, 37.3, 17.2, 37.3);
        ctx.bezierCurveTo(17.0, 37.4, 16.8, 37.4, 16.6, 37.3);
        ctx.bezierCurveTo(16.3, 37.2, 16.2, 36.8, 16.3, 36.5);
        ctx.bezierCurveTo(16.5, 36.2, 16.9, 36.1, 17.2, 36.3);
        ctx.bezierCurveTo(17.2, 36.3, 17.2, 36.3, 17.2, 36.3);
        ctx.lineTo(17.3, 36.9);
        ctx.bezierCurveTo(17.3, 37.0, 17.3, 37.2, 17.2, 37.3);
        ctx.closePath();
        ctx.fill();

        // 1///
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(16.3, 35.7);
        ctx.bezierCurveTo(16.2, 35.9, 16.0, 36.0, 15.8, 35.9);
        ctx.bezierCurveTo(15.6, 35.8, 15.5, 35.5, 15.6, 35.3);
        ctx.bezierCurveTo(15.7, 35.1, 16.0, 35.1, 16.2, 35.2);
        ctx.bezierCurveTo(16.4, 35.3, 16.4, 35.5, 16.3, 35.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(162, 122, 81)";
        ctx.fill();

        // 1//
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(11.4, 36.3);
        ctx.lineTo(17.7, 37.8);
        ctx.lineTo(16.9, 38.9);
        ctx.lineTo(12.2, 37.8);
        ctx.lineTo(11.4, 36.3);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}



function getDialog(role, sentence) {
    if (role == 1) {
        if (sentence == 1) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(207.4, 105.8);
            ctx.lineTo(10.3, 105.8);
            ctx.bezierCurveTo(4.6, 105.8, 0.0, 101.2, 0.0, 95.5);
            ctx.lineTo(0.0, 24.1);
            ctx.bezierCurveTo(0.0, 18.4, 4.6, 13.8, 10.3, 13.8);
            ctx.lineTo(207.4, 13.8);
            ctx.bezierCurveTo(213.1, 13.8, 217.7, 18.4, 217.7, 24.1);
            ctx.lineTo(217.7, 95.5);
            ctx.bezierCurveTo(217.7, 101.2, 213.1, 105.8, 207.4, 105.8);
            ctx.closePath();
            ctx.fillStyle = "rgb(241, 226, 113)";
            ctx.fill();

            // 2/
            ctx.beginPath();
            ctx.moveTo(64.7, 13.7);
            ctx.lineTo(50.9, 27.4);
            ctx.lineTo(37.2, 13.7);
            ctx.lineTo(50.9, 0.0);
            ctx.lineTo(64.7, 13.7);
            ctx.closePath();
            ctx.fill();

            // 2/

            // 2//
            ctx.save();
            ctx.beginPath();

            // 2///
            ctx.moveTo(15.3, 23.9);
            ctx.lineTo(21.6, 23.9);
            ctx.bezierCurveTo(22.3, 23.9, 22.7, 23.9, 22.9, 23.9);
            ctx.lineTo(22.9, 24.8);
            ctx.bezierCurveTo(22.8, 24.7, 22.3, 24.7, 21.6, 24.7);
            ctx.lineTo(21.2, 24.7);
            ctx.lineTo(21.2, 26.7);
            ctx.lineTo(21.5, 26.7);
            ctx.bezierCurveTo(22.1, 26.7, 22.5, 26.7, 22.7, 26.7);
            ctx.lineTo(22.7, 27.6);
            ctx.bezierCurveTo(22.5, 27.5, 22.1, 27.5, 21.5, 27.5);
            ctx.lineTo(21.2, 27.5);
            ctx.lineTo(21.2, 29.5);
            ctx.lineTo(22.0, 29.5);
            ctx.bezierCurveTo(22.6, 29.5, 23.1, 29.5, 23.4, 29.4);
            ctx.lineTo(23.4, 30.3);
            ctx.bezierCurveTo(23.1, 30.3, 22.7, 30.3, 22.0, 30.3);
            ctx.lineTo(13.6, 30.3);
            ctx.bezierCurveTo(13.0, 30.3, 12.5, 30.3, 12.2, 30.3);
            ctx.lineTo(12.2, 29.4);
            ctx.bezierCurveTo(12.4, 29.5, 12.9, 29.5, 13.6, 29.5);
            ctx.lineTo(14.5, 29.5);
            ctx.lineTo(14.5, 27.5);
            ctx.lineTo(14.0, 27.5);
            ctx.bezierCurveTo(13.4, 27.5, 13.0, 27.5, 12.7, 27.6);
            ctx.lineTo(12.7, 26.7);
            ctx.bezierCurveTo(12.9, 26.7, 13.3, 26.7, 14.0, 26.7);
            ctx.lineTo(14.5, 26.7);
            ctx.lineTo(14.5, 25.0);
            ctx.bezierCurveTo(14.6, 24.8, 14.2, 25.3, 13.2, 26.4);
            ctx.bezierCurveTo(13.0, 26.1, 12.7, 25.9, 12.2, 25.8);
            ctx.bezierCurveTo(13.5, 24.9, 14.5, 23.8, 15.2, 22.5);
            ctx.bezierCurveTo(15.3, 22.5, 15.4, 22.5, 15.5, 22.6);
            ctx.bezierCurveTo(16.1, 22.7, 16.3, 22.8, 16.3, 22.9);
            ctx.bezierCurveTo(16.3, 22.9, 16.3, 23.0, 16.2, 23.0);
            ctx.bezierCurveTo(16.1, 23.0, 15.9, 23.2, 15.7, 23.4);
            ctx.bezierCurveTo(15.5, 23.6, 15.4, 23.8, 15.3, 23.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(14.3, 30.7);
            ctx.bezierCurveTo(15.0, 30.9, 15.4, 31.1, 15.4, 31.1);
            ctx.bezierCurveTo(15.4, 31.2, 15.3, 31.2, 15.3, 31.3);
            ctx.bezierCurveTo(15.1, 31.4, 14.9, 31.6, 14.8, 31.8);
            ctx.bezierCurveTo(14.3, 32.4, 13.9, 33.0, 13.6, 33.5);
            ctx.bezierCurveTo(13.4, 33.4, 13.1, 33.2, 12.6, 33.2);
            ctx.bezierCurveTo(13.4, 32.4, 14.0, 31.6, 14.3, 30.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.4, 24.7);
            ctx.lineTo(15.3, 24.7);
            ctx.lineTo(15.3, 26.7);
            ctx.lineTo(16.4, 26.7);
            ctx.lineTo(16.4, 24.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.4, 27.5);
            ctx.lineTo(15.3, 27.5);
            ctx.lineTo(15.3, 29.5);
            ctx.lineTo(16.4, 29.5);
            ctx.lineTo(16.4, 27.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(17.5, 33.2);
            ctx.lineTo(16.6, 33.4);
            ctx.bezierCurveTo(16.5, 32.7, 16.3, 31.9, 16.0, 31.0);
            ctx.lineTo(16.8, 30.9);
            ctx.bezierCurveTo(17.1, 31.7, 17.4, 32.5, 17.5, 33.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(18.4, 24.7);
            ctx.lineTo(17.3, 24.7);
            ctx.lineTo(17.3, 26.7);
            ctx.lineTo(18.4, 26.7);
            ctx.lineTo(18.4, 24.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(18.4, 27.5);
            ctx.lineTo(17.3, 27.5);
            ctx.lineTo(17.3, 29.5);
            ctx.lineTo(18.4, 29.5);
            ctx.lineTo(18.4, 27.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(20.2, 33.0);
            ctx.lineTo(19.2, 33.2);
            ctx.bezierCurveTo(18.9, 32.3, 18.7, 31.6, 18.3, 31.0);
            ctx.lineTo(19.1, 30.8);
            ctx.bezierCurveTo(19.4, 31.4, 19.8, 32.1, 20.2, 33.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(20.4, 24.7);
            ctx.lineTo(19.2, 24.7);
            ctx.lineTo(19.2, 26.7);
            ctx.lineTo(20.4, 26.7);
            ctx.lineTo(20.4, 24.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(20.4, 27.5);
            ctx.lineTo(19.2, 27.5);
            ctx.lineTo(19.2, 29.5);
            ctx.lineTo(20.4, 29.5);
            ctx.lineTo(20.4, 27.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(23.0, 32.9);
            ctx.lineTo(22.0, 33.4);
            ctx.bezierCurveTo(21.4, 32.3, 20.9, 31.5, 20.5, 30.9);
            ctx.lineTo(21.4, 30.6);
            ctx.bezierCurveTo(22.2, 31.6, 22.7, 32.4, 23.0, 32.9);
            ctx.closePath();
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(28.1, 32.0);
            ctx.lineTo(28.1, 32.3);
            ctx.bezierCurveTo(28.2, 32.8, 27.6, 33.1, 26.5, 33.2);
            ctx.bezierCurveTo(26.4, 32.6, 26.3, 32.3, 26.1, 32.2);
            ctx.bezierCurveTo(27.0, 32.4, 27.4, 32.2, 27.3, 31.5);
            ctx.lineTo(27.3, 29.1);
            ctx.lineTo(26.1, 29.1);
            ctx.bezierCurveTo(26.0, 30.8, 25.6, 32.3, 25.1, 33.5);
            ctx.bezierCurveTo(24.8, 33.3, 24.5, 33.1, 24.2, 33.0);
            ctx.bezierCurveTo(25.0, 31.9, 25.3, 30.0, 25.3, 27.1);
            ctx.bezierCurveTo(25.2, 25.9, 25.2, 25.0, 25.2, 24.2);
            ctx.bezierCurveTo(25.2, 23.8, 25.2, 23.4, 25.1, 23.2);
            ctx.bezierCurveTo(25.4, 23.3, 25.8, 23.3, 26.4, 23.3);
            ctx.lineTo(26.5, 23.3);
            ctx.bezierCurveTo(27.1, 23.3, 27.7, 23.3, 28.2, 23.2);
            ctx.bezierCurveTo(28.1, 23.5, 28.1, 23.9, 28.1, 24.4);
            ctx.lineTo(28.1, 32.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(26.1, 24.0);
            ctx.lineTo(26.1, 25.9);
            ctx.lineTo(27.3, 25.9);
            ctx.lineTo(27.3, 24.0);
            ctx.lineTo(26.1, 24.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(26.1, 28.4);
            ctx.lineTo(27.3, 28.4);
            ctx.lineTo(27.3, 26.7);
            ctx.lineTo(26.1, 26.7);
            ctx.bezierCurveTo(26.1, 27.6, 26.1, 28.2, 26.1, 28.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(29.8, 27.1);
            ctx.lineTo(30.5, 27.1);
            ctx.bezierCurveTo(31.1, 27.1, 31.4, 27.1, 31.5, 27.1);
            ctx.bezierCurveTo(31.5, 27.2, 31.5, 27.6, 31.5, 28.1);
            ctx.lineTo(31.5, 29.2);
            ctx.lineTo(31.5, 30.2);
            ctx.lineTo(30.7, 30.2);
            ctx.lineTo(30.6, 30.6);
            ctx.bezierCurveTo(30.9, 30.9, 31.4, 31.2, 32.1, 31.7);
            ctx.lineTo(31.3, 32.3);
            ctx.lineTo(30.3, 31.3);
            ctx.bezierCurveTo(30.2, 31.8, 29.8, 32.4, 29.3, 33.0);
            ctx.bezierCurveTo(29.2, 33.3, 29.1, 33.4, 29.0, 33.5);
            ctx.bezierCurveTo(28.7, 33.3, 28.3, 33.2, 28.0, 33.0);
            ctx.bezierCurveTo(28.9, 32.5, 29.5, 31.6, 29.9, 30.2);
            ctx.lineTo(28.9, 30.2);
            ctx.lineTo(28.9, 29.2);
            ctx.lineTo(28.9, 28.0);
            ctx.bezierCurveTo(28.9, 27.5, 28.9, 27.2, 28.9, 27.1);
            ctx.bezierCurveTo(29.1, 27.1, 29.4, 27.1, 29.8, 27.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(33.5, 25.7);
            ctx.lineTo(33.5, 26.5);
            ctx.bezierCurveTo(33.3, 26.5, 32.7, 26.4, 31.8, 26.5);
            ctx.bezierCurveTo(30.9, 26.4, 30.3, 26.5, 30.0, 26.5);
            ctx.lineTo(30.0, 25.8);
            ctx.lineTo(28.8, 26.8);
            ctx.bezierCurveTo(28.5, 26.5, 28.3, 26.3, 28.2, 26.1);
            ctx.bezierCurveTo(29.5, 25.3, 30.5, 24.0, 31.2, 22.3);
            ctx.bezierCurveTo(32.0, 22.6, 32.4, 22.7, 32.4, 22.7);
            ctx.bezierCurveTo(32.4, 22.7, 32.4, 22.8, 32.3, 22.9);
            ctx.bezierCurveTo(32.3, 22.9, 32.2, 22.9, 32.2, 23.0);
            ctx.bezierCurveTo(33.1, 24.4, 34.2, 25.3, 35.7, 25.8);
            ctx.bezierCurveTo(35.3, 26.0, 35.1, 26.3, 34.9, 26.7);
            ctx.bezierCurveTo(34.5, 26.4, 34.1, 26.2, 33.7, 25.9);
            ctx.bezierCurveTo(33.6, 25.8, 33.5, 25.7, 33.5, 25.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(29.7, 27.9);
            ctx.lineTo(29.7, 29.5);
            ctx.lineTo(30.7, 29.5);
            ctx.lineTo(30.7, 27.9);
            ctx.lineTo(29.7, 27.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(31.2, 25.7);
            ctx.lineTo(32.3, 25.7);
            ctx.bezierCurveTo(32.8, 25.7, 33.2, 25.7, 33.4, 25.6);
            ctx.bezierCurveTo(32.6, 24.9, 32.0, 24.2, 31.7, 23.5);
            ctx.bezierCurveTo(31.7, 23.6, 31.6, 23.7, 31.4, 23.9);
            ctx.bezierCurveTo(31.0, 24.5, 30.5, 25.1, 30.1, 25.6);
            ctx.bezierCurveTo(30.2, 25.7, 30.6, 25.7, 31.2, 25.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(32.9, 27.1);
            ctx.lineTo(33.6, 27.1);
            ctx.bezierCurveTo(34.2, 27.1, 34.5, 27.1, 34.6, 27.1);
            ctx.bezierCurveTo(34.6, 27.2, 34.6, 27.6, 34.6, 28.1);
            ctx.lineTo(34.6, 29.2);
            ctx.lineTo(34.6, 30.2);
            ctx.bezierCurveTo(34.4, 30.2, 34.1, 30.2, 33.7, 30.2);
            ctx.bezierCurveTo(33.6, 30.4, 33.5, 30.7, 33.4, 30.9);
            ctx.bezierCurveTo(33.8, 31.2, 34.5, 31.7, 35.6, 32.7);
            ctx.lineTo(34.8, 33.3);
            ctx.bezierCurveTo(34.2, 32.6, 33.6, 32.1, 33.1, 31.7);
            ctx.bezierCurveTo(32.7, 32.4, 32.3, 33.1, 31.7, 33.7);
            ctx.bezierCurveTo(31.4, 33.5, 31.1, 33.3, 30.8, 33.2);
            ctx.bezierCurveTo(31.8, 32.5, 32.5, 31.4, 32.8, 30.2);
            ctx.bezierCurveTo(32.4, 30.2, 32.1, 30.2, 32.0, 30.2);
            ctx.lineTo(32.0, 29.2);
            ctx.lineTo(32.0, 28.0);
            ctx.bezierCurveTo(32.0, 27.5, 32.0, 27.2, 32.0, 27.1);
            ctx.bezierCurveTo(32.2, 27.1, 32.5, 27.1, 32.9, 27.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(32.8, 27.9);
            ctx.lineTo(32.8, 29.5);
            ctx.lineTo(33.8, 29.5);
            ctx.lineTo(33.8, 27.9);
            ctx.lineTo(32.8, 27.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(42.3, 29.4);
            ctx.lineTo(45.5, 29.4);
            ctx.bezierCurveTo(45.7, 29.4, 46.0, 29.4, 46.4, 29.4);
            ctx.lineTo(46.8, 29.4);
            ctx.bezierCurveTo(46.5, 31.3, 46.2, 32.4, 45.9, 32.8);
            ctx.bezierCurveTo(45.7, 33.1, 44.9, 33.3, 43.5, 33.4);
            ctx.bezierCurveTo(43.4, 32.9, 43.2, 32.5, 42.9, 32.2);
            ctx.bezierCurveTo(43.9, 32.3, 44.5, 32.3, 44.9, 32.2);
            ctx.bezierCurveTo(45.1, 32.1, 45.3, 31.6, 45.4, 30.8);
            ctx.bezierCurveTo(45.5, 30.5, 45.5, 30.4, 45.5, 30.2);
            ctx.lineTo(42.0, 30.2);
            ctx.bezierCurveTo(41.8, 31.1, 41.3, 31.8, 40.6, 32.2);
            ctx.bezierCurveTo(39.9, 32.7, 38.9, 33.1, 37.5, 33.4);
            ctx.bezierCurveTo(37.4, 33.0, 37.1, 32.6, 36.7, 32.3);
            ctx.bezierCurveTo(37.5, 32.4, 38.4, 32.2, 39.4, 31.8);
            ctx.bezierCurveTo(40.2, 31.5, 40.8, 31.0, 41.0, 30.2);
            ctx.lineTo(38.7, 30.2);
            ctx.bezierCurveTo(37.8, 30.2, 37.3, 30.3, 37.1, 30.3);
            ctx.lineTo(37.1, 29.4);
            ctx.bezierCurveTo(37.3, 29.4, 37.8, 29.4, 38.8, 29.4);
            ctx.lineTo(41.2, 29.4);
            ctx.bezierCurveTo(41.2, 29.1, 41.2, 28.7, 41.2, 28.4);
            ctx.bezierCurveTo(41.4, 28.4, 41.7, 28.4, 42.0, 28.5);
            ctx.bezierCurveTo(42.4, 28.5, 42.6, 28.5, 42.6, 28.6);
            ctx.bezierCurveTo(42.6, 28.6, 42.6, 28.7, 42.5, 28.8);
            ctx.bezierCurveTo(42.4, 29.0, 42.3, 29.2, 42.3, 29.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(39.3, 22.8);
            ctx.lineTo(45.4, 22.8);
            ctx.bezierCurveTo(45.8, 22.8, 46.1, 22.7, 46.5, 22.7);
            ctx.bezierCurveTo(46.6, 22.7, 46.6, 22.7, 46.7, 22.7);
            ctx.lineTo(46.6, 23.9);
            ctx.lineTo(46.6, 26.9);
            ctx.bezierCurveTo(46.6, 27.2, 46.6, 27.5, 46.7, 27.8);
            ctx.bezierCurveTo(46.7, 28.0, 46.7, 28.1, 46.7, 28.1);
            ctx.bezierCurveTo(46.3, 28.0, 45.9, 28.0, 45.4, 28.0);
            ctx.lineTo(39.4, 28.0);
            ctx.bezierCurveTo(39.0, 28.0, 38.5, 28.0, 38.1, 28.1);
            ctx.lineTo(38.1, 28.1);
            ctx.bezierCurveTo(38.2, 27.9, 38.2, 27.5, 38.2, 26.9);
            ctx.lineTo(38.2, 23.9);
            ctx.bezierCurveTo(38.2, 23.2, 38.2, 22.8, 38.1, 22.7);
            ctx.bezierCurveTo(38.5, 22.7, 38.9, 22.8, 39.3, 22.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(41.9, 23.7);
            ctx.lineTo(39.1, 23.7);
            ctx.lineTo(39.1, 25.0);
            ctx.lineTo(41.9, 25.0);
            ctx.lineTo(41.9, 23.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(39.1, 25.8);
            ctx.lineTo(39.1, 27.1);
            ctx.lineTo(41.9, 27.1);
            ctx.lineTo(41.9, 25.8);
            ctx.lineTo(39.1, 25.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(42.9, 23.7);
            ctx.lineTo(42.9, 25.0);
            ctx.lineTo(45.7, 25.0);
            ctx.lineTo(45.7, 23.7);
            ctx.lineTo(42.9, 23.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(42.9, 27.1);
            ctx.lineTo(45.7, 27.1);
            ctx.lineTo(45.7, 25.8);
            ctx.lineTo(42.9, 25.8);
            ctx.lineTo(42.9, 27.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(53.6, 24.1);
            ctx.lineTo(55.2, 24.1);
            ctx.lineTo(55.2, 25.8);
            ctx.lineTo(53.6, 25.8);
            ctx.lineTo(53.6, 24.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(53.6, 30.1);
            ctx.lineTo(55.2, 30.1);
            ctx.lineTo(55.2, 31.8);
            ctx.lineTo(53.6, 31.8);
            ctx.lineTo(53.6, 30.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(67.0, 24.1);
            ctx.lineTo(67.0, 25.9);
            ctx.lineTo(69.2, 25.9);
            ctx.bezierCurveTo(70.3, 25.9, 71.1, 25.8, 71.5, 25.7);
            ctx.lineTo(71.5, 26.9);
            ctx.bezierCurveTo(71.0, 26.9, 70.3, 26.8, 69.2, 26.8);
            ctx.lineTo(67.2, 26.8);
            ctx.bezierCurveTo(67.7, 29.7, 69.4, 31.5, 72.1, 32.1);
            ctx.bezierCurveTo(71.6, 32.3, 71.2, 32.7, 70.8, 33.3);
            ctx.bezierCurveTo(68.4, 31.9, 67.0, 30.2, 66.6, 28.1);
            ctx.bezierCurveTo(66.3, 30.5, 64.8, 32.3, 62.1, 33.4);
            ctx.bezierCurveTo(61.8, 33.1, 61.4, 32.8, 60.9, 32.5);
            ctx.bezierCurveTo(63.9, 31.7, 65.6, 29.8, 65.9, 26.8);
            ctx.lineTo(63.4, 26.8);
            ctx.bezierCurveTo(62.4, 26.8, 61.8, 26.9, 61.5, 26.9);
            ctx.lineTo(61.5, 25.7);
            ctx.bezierCurveTo(61.8, 25.8, 62.5, 25.9, 63.4, 25.9);
            ctx.lineTo(66.0, 25.9);
            ctx.lineTo(66.0, 23.8);
            ctx.bezierCurveTo(66.0, 23.3, 65.9, 23.0, 65.9, 22.7);
            ctx.bezierCurveTo(65.9, 22.7, 65.9, 22.7, 65.9, 22.6);
            ctx.bezierCurveTo(66.7, 22.6, 67.2, 22.6, 67.3, 22.8);
            ctx.bezierCurveTo(67.3, 22.8, 67.3, 22.9, 67.2, 23.0);
            ctx.bezierCurveTo(67.0, 23.3, 67.0, 23.7, 67.0, 24.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(77.2, 25.4);
            ctx.lineTo(80.0, 25.4);
            ctx.bezierCurveTo(81.0, 25.4, 81.7, 25.4, 82.1, 25.3);
            ctx.lineTo(82.1, 26.4);
            ctx.bezierCurveTo(81.4, 26.4, 80.7, 26.3, 80.0, 26.3);
            ctx.lineTo(79.2, 26.3);
            ctx.bezierCurveTo(79.2, 26.4, 79.1, 26.4, 79.0, 26.5);
            ctx.bezierCurveTo(78.8, 26.6, 78.5, 26.8, 78.1, 27.2);
            ctx.bezierCurveTo(78.6, 27.6, 79.1, 28.1, 79.4, 28.7);
            ctx.bezierCurveTo(80.2, 28.2, 81.0, 27.6, 81.7, 26.9);
            ctx.bezierCurveTo(82.3, 27.2, 82.6, 27.5, 82.7, 27.7);
            ctx.bezierCurveTo(82.7, 27.7, 82.6, 27.8, 82.5, 27.8);
            ctx.bezierCurveTo(82.3, 27.9, 82.2, 27.9, 82.0, 28.0);
            ctx.bezierCurveTo(81.9, 28.1, 81.8, 28.1, 81.7, 28.2);
            ctx.bezierCurveTo(81.4, 28.4, 81.2, 28.5, 81.1, 28.6);
            ctx.bezierCurveTo(81.5, 30.2, 82.5, 31.2, 84.0, 31.6);
            ctx.bezierCurveTo(83.5, 31.9, 83.2, 32.2, 82.9, 32.6);
            ctx.bezierCurveTo(81.5, 31.7, 80.6, 30.5, 80.3, 28.9);
            ctx.bezierCurveTo(80.1, 29.1, 79.9, 29.3, 79.7, 29.4);
            ctx.bezierCurveTo(80.1, 31.2, 79.9, 32.3, 79.1, 32.9);
            ctx.bezierCurveTo(78.8, 33.2, 78.2, 33.4, 77.3, 33.5);
            ctx.lineTo(77.3, 33.5);
            ctx.bezierCurveTo(77.3, 33.0, 77.1, 32.6, 76.9, 32.3);
            ctx.bezierCurveTo(77.8, 32.4, 78.3, 32.3, 78.4, 32.2);
            ctx.bezierCurveTo(78.9, 31.9, 79.0, 31.1, 78.9, 29.9);
            ctx.bezierCurveTo(77.8, 31.0, 76.2, 32.0, 74.0, 32.9);
            ctx.bezierCurveTo(73.9, 32.6, 73.6, 32.3, 73.1, 32.0);
            ctx.bezierCurveTo(74.9, 31.8, 76.7, 30.8, 78.6, 29.1);
            ctx.bezierCurveTo(78.5, 28.8, 78.4, 28.7, 78.3, 28.6);
            ctx.bezierCurveTo(77.0, 29.6, 75.6, 30.5, 73.9, 31.0);
            ctx.bezierCurveTo(73.8, 30.6, 73.5, 30.3, 73.2, 30.1);
            ctx.bezierCurveTo(74.6, 30.0, 76.2, 29.3, 77.8, 28.0);
            ctx.bezierCurveTo(77.7, 27.9, 77.5, 27.7, 77.4, 27.6);
            ctx.bezierCurveTo(76.2, 28.3, 75.0, 28.8, 73.9, 29.1);
            ctx.bezierCurveTo(73.7, 28.7, 73.4, 28.5, 73.2, 28.2);
            ctx.bezierCurveTo(74.9, 28.0, 76.5, 27.4, 77.9, 26.3);
            ctx.lineTo(77.2, 26.3);
            ctx.bezierCurveTo(76.5, 26.4, 75.8, 26.4, 75.2, 26.4);
            ctx.lineTo(75.2, 25.3);
            ctx.bezierCurveTo(75.9, 25.4, 76.5, 25.4, 77.2, 25.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(79.4, 23.8);
            ctx.lineTo(82.2, 23.8);
            ctx.bezierCurveTo(82.4, 23.8, 82.9, 23.8, 83.6, 23.7);
            ctx.lineTo(83.6, 24.6);
            ctx.bezierCurveTo(83.6, 25.1, 83.6, 25.5, 83.7, 25.9);
            ctx.lineTo(82.4, 25.9);
            ctx.bezierCurveTo(82.5, 25.7, 82.5, 25.3, 82.5, 24.7);
            ctx.lineTo(74.8, 24.7);
            ctx.bezierCurveTo(74.8, 25.1, 74.8, 25.5, 74.9, 25.9);
            ctx.lineTo(73.7, 25.9);
            ctx.bezierCurveTo(73.7, 25.5, 73.8, 25.1, 73.8, 24.7);
            ctx.lineTo(73.8, 23.7);
            ctx.bezierCurveTo(74.1, 23.8, 74.5, 23.8, 75.1, 23.8);
            ctx.lineTo(78.3, 23.8);
            ctx.bezierCurveTo(78.2, 23.5, 78.0, 23.1, 77.8, 22.7);
            ctx.lineTo(79.1, 22.6);
            ctx.bezierCurveTo(79.2, 22.8, 79.3, 23.2, 79.4, 23.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(88.0, 25.2);
            ctx.lineTo(88.9, 25.2);
            ctx.bezierCurveTo(89.5, 25.2, 90.0, 25.2, 90.3, 25.1);
            ctx.bezierCurveTo(90.0, 27.3, 89.6, 29.0, 89.2, 30.4);
            ctx.bezierCurveTo(89.4, 30.5, 89.6, 30.7, 89.9, 30.8);
            ctx.bezierCurveTo(90.4, 31.2, 90.8, 31.4, 90.9, 31.6);
            ctx.lineTo(90.2, 32.3);
            ctx.bezierCurveTo(89.8, 31.9, 89.3, 31.5, 88.8, 31.2);
            ctx.bezierCurveTo(88.3, 32.1, 87.4, 32.8, 86.2, 33.4);
            ctx.bezierCurveTo(86.0, 33.1, 85.7, 32.8, 85.4, 32.5);
            ctx.bezierCurveTo(86.6, 32.3, 87.5, 31.7, 88.1, 30.7);
            ctx.bezierCurveTo(87.9, 30.6, 87.2, 30.2, 86.0, 29.5);
            ctx.bezierCurveTo(86.3, 28.9, 86.6, 27.7, 86.9, 26.1);
            ctx.lineTo(86.8, 26.1);
            ctx.bezierCurveTo(86.4, 26.1, 86.0, 26.1, 85.6, 26.2);
            ctx.bezierCurveTo(85.6, 26.2, 85.6, 26.2, 85.5, 26.2);
            ctx.lineTo(85.5, 25.1);
            ctx.bezierCurveTo(85.9, 25.2, 86.4, 25.2, 86.9, 25.2);
            ctx.lineTo(87.1, 25.2);
            ctx.bezierCurveTo(87.1, 25.2, 87.1, 25.1, 87.1, 25.0);
            ctx.bezierCurveTo(87.3, 23.8, 87.4, 23.0, 87.4, 22.6);
            ctx.bezierCurveTo(88.2, 22.6, 88.6, 22.7, 88.7, 22.9);
            ctx.lineTo(88.7, 23.0);
            ctx.bezierCurveTo(88.5, 23.1, 88.4, 23.3, 88.4, 23.4);
            ctx.bezierCurveTo(88.4, 23.4, 88.4, 23.5, 88.3, 23.7);
            ctx.bezierCurveTo(88.2, 24.1, 88.1, 24.6, 88.0, 25.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(89.2, 26.1);
            ctx.lineTo(87.8, 26.1);
            ctx.bezierCurveTo(87.7, 26.3, 87.7, 26.7, 87.6, 27.3);
            ctx.bezierCurveTo(87.4, 28.1, 87.2, 28.7, 87.1, 29.1);
            ctx.bezierCurveTo(87.3, 29.2, 87.6, 29.4, 88.1, 29.7);
            ctx.bezierCurveTo(88.3, 29.8, 88.4, 29.8, 88.4, 29.8);
            ctx.bezierCurveTo(88.7, 28.9, 89.0, 27.6, 89.2, 26.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(96.2, 23.4);
            ctx.lineTo(96.2, 24.5);
            ctx.bezierCurveTo(95.8, 24.6, 95.1, 25.1, 94.0, 26.2);
            ctx.lineTo(94.0, 27.5);
            ctx.lineTo(94.8, 27.5);
            ctx.bezierCurveTo(95.5, 27.5, 96.1, 27.4, 96.5, 27.4);
            ctx.lineTo(96.5, 28.5);
            ctx.bezierCurveTo(96.0, 28.5, 95.4, 28.4, 94.8, 28.4);
            ctx.lineTo(94.0, 28.4);
            ctx.lineTo(94.0, 32.5);
            ctx.bezierCurveTo(94.0, 33.2, 93.3, 33.5, 92.0, 33.5);
            ctx.bezierCurveTo(92.0, 33.0, 91.8, 32.6, 91.3, 32.2);
            ctx.bezierCurveTo(92.5, 32.4, 93.1, 32.2, 93.0, 31.7);
            ctx.lineTo(93.0, 28.4);
            ctx.lineTo(92.0, 28.4);
            ctx.bezierCurveTo(91.3, 28.4, 90.7, 28.5, 90.2, 28.5);
            ctx.lineTo(90.2, 27.4);
            ctx.bezierCurveTo(90.6, 27.4, 91.2, 27.5, 92.1, 27.5);
            ctx.lineTo(93.0, 27.5);
            ctx.lineTo(93.0, 26.0);
            ctx.bezierCurveTo(93.3, 25.7, 93.9, 25.2, 94.8, 24.3);
            ctx.lineTo(92.0, 24.3);
            ctx.bezierCurveTo(91.2, 24.3, 90.7, 24.4, 90.5, 24.4);
            ctx.lineTo(90.5, 23.4);
            ctx.bezierCurveTo(90.5, 23.4, 90.5, 23.4, 90.6, 23.4);
            ctx.bezierCurveTo(91.0, 23.5, 91.5, 23.5, 92.0, 23.5);
            ctx.lineTo(94.6, 23.5);
            ctx.bezierCurveTo(95.3, 23.5, 95.8, 23.5, 96.2, 23.4);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(104.0, 26.1);
            ctx.lineTo(104.0, 28.1);
            ctx.bezierCurveTo(103.8, 29.2, 103.2, 29.8, 102.4, 29.8);
            ctx.lineTo(102.4, 29.0);
            ctx.bezierCurveTo(102.8, 28.9, 103.0, 28.6, 103.0, 28.1);
            ctx.lineTo(102.2, 28.1);
            ctx.lineTo(102.2, 26.1);
            ctx.lineTo(104.0, 26.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(116.5, 25.9);
            ctx.lineTo(119.0, 25.9);
            ctx.bezierCurveTo(119.8, 25.9, 120.2, 25.9, 120.4, 25.9);
            ctx.lineTo(120.4, 26.9);
            ctx.bezierCurveTo(120.3, 26.9, 119.8, 26.9, 119.0, 26.9);
            ctx.lineTo(116.5, 26.9);
            ctx.bezierCurveTo(116.6, 28.0, 116.8, 29.0, 117.0, 29.8);
            ctx.bezierCurveTo(117.7, 29.0, 118.2, 28.2, 118.5, 27.4);
            ctx.bezierCurveTo(119.2, 27.7, 119.6, 28.0, 119.6, 28.1);
            ctx.bezierCurveTo(119.6, 28.1, 119.6, 28.2, 119.5, 28.2);
            ctx.bezierCurveTo(119.3, 28.3, 119.2, 28.4, 119.1, 28.6);
            ctx.bezierCurveTo(119.1, 28.6, 119.0, 28.7, 118.9, 28.8);
            ctx.bezierCurveTo(118.4, 29.6, 117.9, 30.2, 117.4, 30.7);
            ctx.bezierCurveTo(117.8, 31.4, 118.4, 32.0, 119.2, 32.3);
            ctx.bezierCurveTo(119.3, 32.3, 119.5, 31.8, 119.5, 30.9);
            ctx.bezierCurveTo(119.9, 31.3, 120.3, 31.6, 120.6, 31.7);
            ctx.bezierCurveTo(120.3, 32.8, 120.0, 33.4, 119.6, 33.5);
            ctx.bezierCurveTo(118.6, 33.4, 117.6, 32.7, 116.7, 31.3);
            ctx.bezierCurveTo(116.1, 31.8, 115.3, 32.2, 114.3, 32.8);
            ctx.bezierCurveTo(114.1, 32.5, 113.9, 32.2, 113.6, 32.1);
            ctx.bezierCurveTo(113.5, 32.1, 113.4, 32.0, 113.4, 32.0);
            ctx.bezierCurveTo(114.4, 31.7, 115.3, 31.2, 116.2, 30.5);
            ctx.bezierCurveTo(115.9, 29.4, 115.7, 28.2, 115.6, 26.9);
            ctx.lineTo(113.2, 26.9);
            ctx.lineTo(113.2, 28.6);
            ctx.bezierCurveTo(113.6, 28.4, 114.1, 28.3, 114.5, 28.1);
            ctx.bezierCurveTo(114.7, 28.0, 114.9, 28.0, 115.0, 27.9);
            ctx.lineTo(115.0, 29.0);
            ctx.bezierCurveTo(114.3, 29.2, 113.7, 29.3, 113.2, 29.5);
            ctx.lineTo(113.2, 32.2);
            ctx.bezierCurveTo(113.3, 32.8, 112.6, 33.2, 111.2, 33.4);
            ctx.bezierCurveTo(111.2, 33.0, 111.1, 32.6, 110.9, 32.3);
            ctx.bezierCurveTo(110.8, 32.3, 110.8, 32.3, 110.8, 32.2);
            ctx.bezierCurveTo(111.8, 32.3, 112.3, 32.1, 112.3, 31.7);
            ctx.lineTo(112.3, 29.7);
            ctx.bezierCurveTo(111.3, 29.9, 110.6, 30.2, 110.1, 30.5);
            ctx.lineTo(109.7, 29.2);
            ctx.bezierCurveTo(110.3, 29.2, 110.9, 29.1, 111.6, 28.9);
            ctx.bezierCurveTo(111.9, 28.8, 112.1, 28.8, 112.3, 28.8);
            ctx.lineTo(112.3, 26.9);
            ctx.lineTo(111.2, 26.9);
            ctx.bezierCurveTo(110.5, 26.9, 110.0, 26.9, 109.9, 26.9);
            ctx.lineTo(109.9, 25.9);
            ctx.bezierCurveTo(110.0, 25.9, 110.4, 25.9, 111.2, 25.9);
            ctx.lineTo(112.3, 25.9);
            ctx.lineTo(112.3, 24.4);
            ctx.bezierCurveTo(112.3, 24.4, 112.1, 24.5, 111.7, 24.6);
            ctx.bezierCurveTo(111.2, 24.7, 110.8, 24.8, 110.4, 24.9);
            ctx.bezierCurveTo(110.4, 24.9, 110.4, 24.8, 110.4, 24.8);
            ctx.bezierCurveTo(110.2, 24.3, 110.1, 24.1, 109.9, 23.9);
            ctx.bezierCurveTo(111.4, 23.9, 112.8, 23.5, 114.2, 22.9);
            ctx.bezierCurveTo(114.3, 23.0, 114.4, 23.2, 114.6, 23.3);
            ctx.bezierCurveTo(114.9, 23.7, 115.1, 23.9, 115.0, 23.9);
            ctx.bezierCurveTo(115.0, 24.0, 114.9, 24.0, 114.7, 24.0);
            ctx.bezierCurveTo(114.3, 24.0, 113.8, 24.1, 113.2, 24.2);
            ctx.lineTo(113.2, 25.9);
            ctx.lineTo(115.6, 25.9);
            ctx.bezierCurveTo(115.6, 24.7, 115.5, 23.5, 115.4, 22.5);
            ctx.bezierCurveTo(116.3, 22.5, 116.8, 22.5, 116.8, 22.7);
            ctx.bezierCurveTo(116.8, 22.7, 116.8, 22.7, 116.7, 22.8);
            ctx.bezierCurveTo(116.6, 23.1, 116.6, 23.4, 116.5, 23.9);
            ctx.bezierCurveTo(116.5, 24.2, 116.5, 24.9, 116.5, 25.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(119.7, 24.9);
            ctx.lineTo(118.8, 25.5);
            ctx.bezierCurveTo(118.5, 24.9, 118.0, 24.4, 117.4, 23.8);
            ctx.lineTo(118.3, 23.1);
            ctx.bezierCurveTo(118.8, 23.6, 119.3, 24.2, 119.7, 24.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(124.3, 27.9);
            ctx.lineTo(130.7, 27.9);
            ctx.bezierCurveTo(131.4, 27.9, 132.1, 27.9, 132.8, 27.8);
            ctx.lineTo(132.8, 28.8);
            ctx.bezierCurveTo(132.2, 28.8, 131.5, 28.8, 130.7, 28.8);
            ctx.lineTo(128.0, 28.8);
            ctx.lineTo(128.0, 29.9);
            ctx.lineTo(129.3, 29.9);
            ctx.bezierCurveTo(130.0, 29.9, 130.7, 29.9, 131.5, 29.8);
            ctx.lineTo(131.5, 30.8);
            ctx.bezierCurveTo(130.8, 30.8, 130.1, 30.8, 129.4, 30.8);
            ctx.lineTo(128.0, 30.8);
            ctx.lineTo(128.0, 32.2);
            ctx.bezierCurveTo(129.3, 32.2, 130.2, 32.2, 130.8, 32.2);
            ctx.bezierCurveTo(131.3, 32.2, 132.0, 32.2, 133.1, 32.0);
            ctx.bezierCurveTo(132.8, 32.4, 132.5, 32.8, 132.4, 33.2);
            ctx.bezierCurveTo(129.2, 33.1, 127.2, 33.0, 126.6, 32.7);
            ctx.bezierCurveTo(125.6, 32.4, 125.0, 31.9, 124.6, 31.0);
            ctx.bezierCurveTo(124.1, 31.9, 123.6, 32.7, 123.0, 33.3);
            ctx.bezierCurveTo(122.5, 33.0, 122.1, 32.8, 121.8, 32.7);
            ctx.bezierCurveTo(123.2, 31.8, 124.0, 30.6, 124.2, 29.1);
            ctx.bezierCurveTo(125.2, 29.2, 125.7, 29.4, 125.6, 29.4);
            ctx.bezierCurveTo(125.6, 29.5, 125.5, 29.5, 125.4, 29.6);
            ctx.bezierCurveTo(125.3, 29.7, 125.3, 29.8, 125.2, 29.8);
            ctx.bezierCurveTo(125.2, 30.0, 125.1, 30.2, 125.0, 30.3);
            ctx.bezierCurveTo(125.4, 31.1, 126.0, 31.7, 127.0, 32.1);
            ctx.lineTo(127.0, 28.8);
            ctx.lineTo(124.3, 28.8);
            ctx.bezierCurveTo(123.6, 28.8, 123.0, 28.8, 122.4, 28.8);
            ctx.lineTo(122.4, 27.8);
            ctx.bezierCurveTo(123.0, 27.9, 123.6, 27.9, 124.3, 27.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(125.6, 22.8);
            ctx.lineTo(129.0, 22.8);
            ctx.bezierCurveTo(129.5, 22.8, 130.2, 22.8, 130.9, 22.7);
            ctx.bezierCurveTo(130.9, 23.2, 130.9, 23.6, 130.9, 23.8);
            ctx.lineTo(130.9, 25.8);
            ctx.bezierCurveTo(130.9, 26.3, 130.9, 26.8, 131.0, 27.1);
            ctx.bezierCurveTo(130.4, 27.0, 130.0, 27.0, 129.7, 27.0);
            ctx.lineTo(125.2, 27.0);
            ctx.bezierCurveTo(124.9, 27.0, 124.5, 27.0, 124.0, 27.1);
            ctx.bezierCurveTo(124.1, 26.8, 124.1, 26.3, 124.1, 25.9);
            ctx.lineTo(124.1, 23.9);
            ctx.bezierCurveTo(124.1, 23.6, 124.1, 23.2, 124.0, 22.7);
            ctx.bezierCurveTo(124.5, 22.8, 125.0, 22.8, 125.6, 22.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(125.1, 23.6);
            ctx.lineTo(125.1, 24.5);
            ctx.lineTo(129.9, 24.5);
            ctx.lineTo(129.9, 23.6);
            ctx.lineTo(125.1, 23.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(125.1, 25.2);
            ctx.lineTo(125.1, 26.3);
            ctx.lineTo(129.9, 26.3);
            ctx.lineTo(129.9, 25.2);
            ctx.lineTo(125.1, 25.2);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(137.1, 23.9);
            ctx.lineTo(143.4, 23.9);
            ctx.bezierCurveTo(144.0, 23.9, 144.5, 23.9, 144.7, 23.9);
            ctx.lineTo(144.7, 24.8);
            ctx.bezierCurveTo(144.5, 24.7, 144.1, 24.7, 143.4, 24.7);
            ctx.lineTo(143.0, 24.7);
            ctx.lineTo(143.0, 26.7);
            ctx.lineTo(143.3, 26.7);
            ctx.bezierCurveTo(143.9, 26.7, 144.3, 26.7, 144.5, 26.7);
            ctx.lineTo(144.5, 27.6);
            ctx.bezierCurveTo(144.3, 27.5, 143.9, 27.5, 143.3, 27.5);
            ctx.lineTo(143.0, 27.5);
            ctx.lineTo(143.0, 29.5);
            ctx.lineTo(143.7, 29.5);
            ctx.bezierCurveTo(144.4, 29.5, 144.8, 29.5, 145.1, 29.4);
            ctx.lineTo(145.1, 30.3);
            ctx.bezierCurveTo(144.9, 30.3, 144.4, 30.3, 143.7, 30.3);
            ctx.lineTo(135.4, 30.3);
            ctx.bezierCurveTo(134.7, 30.3, 134.3, 30.3, 134.0, 30.3);
            ctx.lineTo(134.0, 29.4);
            ctx.bezierCurveTo(134.2, 29.5, 134.7, 29.5, 135.4, 29.5);
            ctx.lineTo(136.2, 29.5);
            ctx.lineTo(136.2, 27.5);
            ctx.lineTo(135.8, 27.5);
            ctx.bezierCurveTo(135.2, 27.5, 134.7, 27.5, 134.5, 27.6);
            ctx.lineTo(134.5, 26.7);
            ctx.bezierCurveTo(134.7, 26.7, 135.1, 26.7, 135.8, 26.7);
            ctx.lineTo(136.2, 26.7);
            ctx.lineTo(136.2, 25.0);
            ctx.bezierCurveTo(136.4, 24.8, 135.9, 25.3, 134.9, 26.4);
            ctx.bezierCurveTo(134.8, 26.1, 134.4, 25.9, 134.0, 25.8);
            ctx.bezierCurveTo(135.3, 24.9, 136.3, 23.8, 137.0, 22.5);
            ctx.bezierCurveTo(137.1, 22.5, 137.2, 22.5, 137.3, 22.6);
            ctx.bezierCurveTo(137.9, 22.7, 138.1, 22.8, 138.1, 22.9);
            ctx.bezierCurveTo(138.1, 22.9, 138.1, 23.0, 138.0, 23.0);
            ctx.bezierCurveTo(137.8, 23.0, 137.7, 23.2, 137.5, 23.4);
            ctx.bezierCurveTo(137.3, 23.6, 137.1, 23.8, 137.1, 23.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(136.1, 30.7);
            ctx.bezierCurveTo(136.8, 30.9, 137.2, 31.1, 137.1, 31.1);
            ctx.bezierCurveTo(137.1, 31.2, 137.1, 31.2, 137.0, 31.3);
            ctx.bezierCurveTo(136.8, 31.4, 136.7, 31.6, 136.6, 31.8);
            ctx.bezierCurveTo(136.1, 32.4, 135.7, 33.0, 135.4, 33.5);
            ctx.bezierCurveTo(135.2, 33.4, 134.8, 33.2, 134.3, 33.2);
            ctx.bezierCurveTo(135.1, 32.4, 135.7, 31.6, 136.1, 30.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(138.2, 24.7);
            ctx.lineTo(137.1, 24.7);
            ctx.lineTo(137.1, 26.7);
            ctx.lineTo(138.2, 26.7);
            ctx.lineTo(138.2, 24.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(138.2, 27.5);
            ctx.lineTo(137.1, 27.5);
            ctx.lineTo(137.1, 29.5);
            ctx.lineTo(138.2, 29.5);
            ctx.lineTo(138.2, 27.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(139.3, 33.2);
            ctx.lineTo(138.4, 33.4);
            ctx.bezierCurveTo(138.3, 32.7, 138.1, 31.9, 137.8, 31.0);
            ctx.lineTo(138.6, 30.9);
            ctx.bezierCurveTo(138.9, 31.7, 139.1, 32.5, 139.3, 33.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(140.1, 24.7);
            ctx.lineTo(139.0, 24.7);
            ctx.lineTo(139.0, 26.7);
            ctx.lineTo(140.1, 26.7);
            ctx.lineTo(140.1, 24.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(140.1, 27.5);
            ctx.lineTo(139.0, 27.5);
            ctx.lineTo(139.0, 29.5);
            ctx.lineTo(140.1, 29.5);
            ctx.lineTo(140.1, 27.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(141.9, 33.0);
            ctx.lineTo(140.9, 33.2);
            ctx.bezierCurveTo(140.7, 32.3, 140.4, 31.6, 140.1, 31.0);
            ctx.lineTo(140.8, 30.8);
            ctx.bezierCurveTo(141.2, 31.4, 141.6, 32.1, 141.9, 33.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(142.1, 24.7);
            ctx.lineTo(141.0, 24.7);
            ctx.lineTo(141.0, 26.7);
            ctx.lineTo(142.1, 26.7);
            ctx.lineTo(142.1, 24.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(142.1, 27.5);
            ctx.lineTo(141.0, 27.5);
            ctx.lineTo(141.0, 29.5);
            ctx.lineTo(142.1, 29.5);
            ctx.lineTo(142.1, 27.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(144.8, 32.9);
            ctx.lineTo(143.7, 33.4);
            ctx.bezierCurveTo(143.2, 32.3, 142.7, 31.5, 142.3, 30.9);
            ctx.lineTo(143.2, 30.6);
            ctx.bezierCurveTo(143.9, 31.6, 144.5, 32.4, 144.8, 32.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(149.8, 32.0);
            ctx.lineTo(149.8, 32.3);
            ctx.bezierCurveTo(149.9, 32.8, 149.4, 33.1, 148.3, 33.2);
            ctx.bezierCurveTo(148.2, 32.6, 148.1, 32.3, 147.9, 32.2);
            ctx.bezierCurveTo(148.8, 32.4, 149.2, 32.2, 149.0, 31.5);
            ctx.lineTo(149.0, 29.1);
            ctx.lineTo(147.8, 29.1);
            ctx.bezierCurveTo(147.7, 30.8, 147.4, 32.3, 146.9, 33.5);
            ctx.bezierCurveTo(146.6, 33.3, 146.2, 33.1, 145.9, 33.0);
            ctx.bezierCurveTo(146.8, 31.9, 147.1, 30.0, 147.0, 27.1);
            ctx.bezierCurveTo(147.0, 25.9, 147.0, 25.0, 147.0, 24.2);
            ctx.bezierCurveTo(147.0, 23.8, 146.9, 23.4, 146.9, 23.2);
            ctx.bezierCurveTo(147.2, 23.3, 147.6, 23.3, 148.2, 23.3);
            ctx.lineTo(148.3, 23.3);
            ctx.bezierCurveTo(148.9, 23.3, 149.5, 23.3, 149.9, 23.2);
            ctx.bezierCurveTo(149.9, 23.5, 149.8, 23.9, 149.8, 24.4);
            ctx.lineTo(149.8, 32.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(147.8, 24.0);
            ctx.lineTo(147.8, 25.9);
            ctx.lineTo(149.0, 25.9);
            ctx.lineTo(149.0, 24.0);
            ctx.lineTo(147.8, 24.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(147.8, 28.4);
            ctx.lineTo(149.0, 28.4);
            ctx.lineTo(149.0, 26.7);
            ctx.lineTo(147.9, 26.7);
            ctx.bezierCurveTo(147.9, 27.6, 147.9, 28.2, 147.8, 28.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(151.6, 27.1);
            ctx.lineTo(152.3, 27.1);
            ctx.bezierCurveTo(152.9, 27.1, 153.2, 27.1, 153.3, 27.1);
            ctx.bezierCurveTo(153.3, 27.2, 153.3, 27.6, 153.3, 28.1);
            ctx.lineTo(153.3, 29.2);
            ctx.lineTo(153.3, 30.2);
            ctx.lineTo(152.5, 30.2);
            ctx.lineTo(152.4, 30.6);
            ctx.bezierCurveTo(152.7, 30.9, 153.2, 31.2, 153.8, 31.7);
            ctx.lineTo(153.1, 32.3);
            ctx.lineTo(152.1, 31.3);
            ctx.bezierCurveTo(151.9, 31.8, 151.6, 32.4, 151.1, 33.0);
            ctx.bezierCurveTo(150.9, 33.3, 150.8, 33.4, 150.8, 33.5);
            ctx.bezierCurveTo(150.4, 33.3, 150.1, 33.2, 149.7, 33.0);
            ctx.bezierCurveTo(150.7, 32.5, 151.3, 31.6, 151.7, 30.2);
            ctx.lineTo(150.6, 30.2);
            ctx.lineTo(150.7, 29.2);
            ctx.lineTo(150.7, 28.0);
            ctx.bezierCurveTo(150.7, 27.5, 150.7, 27.2, 150.6, 27.1);
            ctx.bezierCurveTo(150.8, 27.1, 151.1, 27.1, 151.6, 27.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(155.3, 25.7);
            ctx.lineTo(155.3, 26.5);
            ctx.bezierCurveTo(155.0, 26.5, 154.5, 26.4, 153.5, 26.5);
            ctx.bezierCurveTo(152.7, 26.4, 152.1, 26.5, 151.7, 26.5);
            ctx.lineTo(151.7, 25.8);
            ctx.lineTo(150.6, 26.8);
            ctx.bezierCurveTo(150.3, 26.5, 150.1, 26.3, 149.9, 26.1);
            ctx.bezierCurveTo(151.3, 25.3, 152.3, 24.0, 153.0, 22.3);
            ctx.bezierCurveTo(153.8, 22.6, 154.2, 22.7, 154.2, 22.7);
            ctx.bezierCurveTo(154.2, 22.7, 154.1, 22.8, 154.1, 22.9);
            ctx.bezierCurveTo(154.0, 22.9, 154.0, 22.9, 154.0, 23.0);
            ctx.bezierCurveTo(154.8, 24.4, 156.0, 25.3, 157.5, 25.8);
            ctx.bezierCurveTo(157.1, 26.0, 156.8, 26.3, 156.7, 26.7);
            ctx.bezierCurveTo(156.2, 26.4, 155.8, 26.2, 155.5, 25.9);
            ctx.bezierCurveTo(155.4, 25.8, 155.3, 25.7, 155.3, 25.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(151.5, 27.9);
            ctx.lineTo(151.5, 29.5);
            ctx.lineTo(152.4, 29.5);
            ctx.lineTo(152.4, 27.9);
            ctx.lineTo(151.5, 27.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(153.0, 25.7);
            ctx.lineTo(154.1, 25.7);
            ctx.bezierCurveTo(154.6, 25.7, 155.0, 25.7, 155.2, 25.6);
            ctx.bezierCurveTo(154.3, 24.9, 153.8, 24.2, 153.5, 23.5);
            ctx.bezierCurveTo(153.4, 23.6, 153.3, 23.7, 153.2, 23.9);
            ctx.bezierCurveTo(152.8, 24.5, 152.3, 25.1, 151.8, 25.6);
            ctx.bezierCurveTo(152.0, 25.7, 152.4, 25.7, 153.0, 25.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(154.7, 27.1);
            ctx.lineTo(155.3, 27.1);
            ctx.bezierCurveTo(156.0, 27.1, 156.3, 27.1, 156.4, 27.1);
            ctx.bezierCurveTo(156.4, 27.2, 156.3, 27.6, 156.3, 28.1);
            ctx.lineTo(156.3, 29.2);
            ctx.lineTo(156.4, 30.2);
            ctx.bezierCurveTo(156.2, 30.2, 155.9, 30.2, 155.4, 30.2);
            ctx.bezierCurveTo(155.4, 30.4, 155.3, 30.7, 155.2, 30.9);
            ctx.bezierCurveTo(155.5, 31.2, 156.3, 31.7, 157.4, 32.7);
            ctx.lineTo(156.6, 33.3);
            ctx.bezierCurveTo(156.0, 32.6, 155.4, 32.1, 154.9, 31.7);
            ctx.bezierCurveTo(154.5, 32.4, 154.0, 33.1, 153.5, 33.7);
            ctx.bezierCurveTo(153.2, 33.5, 152.9, 33.3, 152.5, 33.2);
            ctx.bezierCurveTo(153.6, 32.5, 154.3, 31.4, 154.6, 30.2);
            ctx.bezierCurveTo(154.1, 30.2, 153.9, 30.2, 153.7, 30.2);
            ctx.lineTo(153.8, 29.2);
            ctx.lineTo(153.8, 28.0);
            ctx.bezierCurveTo(153.8, 27.5, 153.8, 27.2, 153.7, 27.1);
            ctx.bezierCurveTo(154.0, 27.1, 154.3, 27.1, 154.7, 27.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(154.6, 27.9);
            ctx.lineTo(154.6, 29.5);
            ctx.lineTo(155.5, 29.5);
            ctx.lineTo(155.5, 27.9);
            ctx.lineTo(154.6, 27.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(164.1, 29.4);
            ctx.lineTo(167.2, 29.4);
            ctx.bezierCurveTo(167.5, 29.4, 167.8, 29.4, 168.1, 29.4);
            ctx.lineTo(168.5, 29.4);
            ctx.bezierCurveTo(168.3, 31.3, 168.0, 32.4, 167.7, 32.8);
            ctx.bezierCurveTo(167.4, 33.1, 166.6, 33.3, 165.2, 33.4);
            ctx.bezierCurveTo(165.2, 32.9, 165.0, 32.5, 164.7, 32.2);
            ctx.bezierCurveTo(165.7, 32.3, 166.3, 32.3, 166.6, 32.2);
            ctx.bezierCurveTo(166.8, 32.1, 167.0, 31.6, 167.2, 30.8);
            ctx.bezierCurveTo(167.2, 30.5, 167.3, 30.4, 167.3, 30.2);
            ctx.lineTo(163.8, 30.2);
            ctx.bezierCurveTo(163.6, 31.1, 163.1, 31.8, 162.4, 32.2);
            ctx.bezierCurveTo(161.7, 32.7, 160.7, 33.1, 159.3, 33.4);
            ctx.bezierCurveTo(159.2, 33.0, 158.9, 32.6, 158.5, 32.3);
            ctx.bezierCurveTo(159.3, 32.4, 160.2, 32.2, 161.2, 31.8);
            ctx.bezierCurveTo(162.0, 31.5, 162.5, 31.0, 162.8, 30.2);
            ctx.lineTo(160.5, 30.2);
            ctx.bezierCurveTo(159.6, 30.2, 159.1, 30.3, 158.9, 30.3);
            ctx.lineTo(158.9, 29.4);
            ctx.bezierCurveTo(159.1, 29.4, 159.6, 29.4, 160.5, 29.4);
            ctx.lineTo(163.0, 29.4);
            ctx.bezierCurveTo(163.0, 29.1, 163.0, 28.7, 163.0, 28.4);
            ctx.bezierCurveTo(163.2, 28.4, 163.5, 28.4, 163.8, 28.5);
            ctx.bezierCurveTo(164.2, 28.5, 164.4, 28.5, 164.4, 28.6);
            ctx.bezierCurveTo(164.4, 28.6, 164.4, 28.7, 164.3, 28.8);
            ctx.bezierCurveTo(164.2, 29.0, 164.1, 29.2, 164.1, 29.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(161.1, 22.8);
            ctx.lineTo(167.1, 22.8);
            ctx.bezierCurveTo(167.5, 22.8, 167.9, 22.7, 168.2, 22.7);
            ctx.bezierCurveTo(168.3, 22.7, 168.4, 22.7, 168.4, 22.7);
            ctx.lineTo(168.4, 23.9);
            ctx.lineTo(168.4, 26.9);
            ctx.bezierCurveTo(168.4, 27.2, 168.4, 27.5, 168.4, 27.8);
            ctx.bezierCurveTo(168.4, 28.0, 168.4, 28.1, 168.4, 28.1);
            ctx.bezierCurveTo(168.1, 28.0, 167.7, 28.0, 167.1, 28.0);
            ctx.lineTo(161.2, 28.0);
            ctx.bezierCurveTo(160.7, 28.0, 160.3, 28.0, 159.9, 28.1);
            ctx.lineTo(159.9, 28.1);
            ctx.bezierCurveTo(159.9, 27.9, 160.0, 27.5, 160.0, 26.9);
            ctx.lineTo(160.0, 23.9);
            ctx.bezierCurveTo(160.0, 23.2, 159.9, 22.8, 159.9, 22.7);
            ctx.bezierCurveTo(160.3, 22.7, 160.7, 22.8, 161.1, 22.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(163.7, 23.7);
            ctx.lineTo(160.9, 23.7);
            ctx.lineTo(160.9, 25.0);
            ctx.lineTo(163.7, 25.0);
            ctx.lineTo(163.7, 23.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(160.9, 25.8);
            ctx.lineTo(160.9, 27.1);
            ctx.lineTo(163.7, 27.1);
            ctx.lineTo(163.7, 25.8);
            ctx.lineTo(160.9, 25.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(164.6, 23.7);
            ctx.lineTo(164.6, 25.0);
            ctx.lineTo(167.4, 25.0);
            ctx.lineTo(167.4, 23.7);
            ctx.lineTo(164.6, 23.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(164.6, 27.1);
            ctx.lineTo(167.4, 27.1);
            ctx.lineTo(167.4, 25.8);
            ctx.lineTo(164.6, 25.8);
            ctx.lineTo(164.6, 27.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(176.2, 26.5);
            ctx.bezierCurveTo(177.2, 26.6, 177.7, 27.1, 177.8, 28.1);
            ctx.bezierCurveTo(177.7, 29.1, 177.2, 29.6, 176.2, 29.7);
            ctx.bezierCurveTo(175.2, 29.6, 174.7, 29.1, 174.6, 28.1);
            ctx.bezierCurveTo(174.7, 27.1, 175.2, 26.6, 176.2, 26.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(176.2, 26.9);
            ctx.bezierCurveTo(175.5, 26.9, 175.1, 27.3, 175.0, 28.1);
            ctx.bezierCurveTo(175.1, 28.8, 175.5, 29.2, 176.2, 29.3);
            ctx.bezierCurveTo(176.9, 29.2, 177.3, 28.8, 177.4, 28.1);
            ctx.bezierCurveTo(177.3, 27.3, 176.9, 26.9, 176.2, 26.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(15.4, 41.2);
            ctx.lineTo(16.3, 41.2);
            ctx.bezierCurveTo(16.4, 41.2, 16.6, 41.2, 17.0, 41.2);
            ctx.bezierCurveTo(17.4, 41.2, 17.6, 41.2, 17.7, 41.2);
            ctx.lineTo(17.8, 41.2);
            ctx.bezierCurveTo(17.8, 41.2, 17.8, 41.3, 17.8, 41.3);
            ctx.bezierCurveTo(17.5, 43.8, 17.1, 45.5, 16.7, 46.4);
            ctx.bezierCurveTo(16.9, 46.6, 17.1, 46.8, 17.5, 47.0);
            ctx.bezierCurveTo(17.8, 47.2, 18.1, 47.5, 18.3, 47.7);
            ctx.lineTo(17.5, 48.5);
            ctx.bezierCurveTo(17.1, 48.0, 16.7, 47.6, 16.2, 47.2);
            ctx.bezierCurveTo(15.5, 48.0, 14.5, 48.7, 13.4, 49.4);
            ctx.bezierCurveTo(13.0, 49.0, 12.7, 48.8, 12.3, 48.6);
            ctx.bezierCurveTo(13.4, 48.3, 14.4, 47.7, 15.4, 46.6);
            ctx.bezierCurveTo(14.8, 46.2, 14.1, 45.8, 13.5, 45.5);
            ctx.bezierCurveTo(13.8, 44.8, 14.1, 43.7, 14.3, 42.1);
            ctx.lineTo(14.0, 42.1);
            ctx.bezierCurveTo(13.7, 42.1, 13.2, 42.1, 12.6, 42.2);
            ctx.lineTo(12.6, 41.2);
            ctx.bezierCurveTo(12.7, 41.2, 12.9, 41.2, 13.2, 41.2);
            ctx.bezierCurveTo(13.6, 41.2, 13.8, 41.2, 13.9, 41.2);
            ctx.lineTo(14.4, 41.2);
            ctx.bezierCurveTo(14.4, 41.1, 14.4, 40.9, 14.5, 40.8);
            ctx.bezierCurveTo(14.5, 40.2, 14.6, 39.5, 14.7, 38.6);
            ctx.bezierCurveTo(14.8, 38.6, 14.8, 38.6, 14.9, 38.7);
            ctx.bezierCurveTo(15.7, 38.7, 16.0, 38.8, 16.0, 38.9);
            ctx.bezierCurveTo(16.0, 39.0, 15.9, 39.0, 15.9, 39.1);
            ctx.bezierCurveTo(15.8, 39.3, 15.7, 39.5, 15.7, 39.7);
            ctx.bezierCurveTo(15.6, 39.9, 15.5, 40.4, 15.4, 41.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.7, 42.1);
            ctx.lineTo(15.3, 42.1);
            ctx.bezierCurveTo(15.0, 43.2, 14.8, 44.2, 14.6, 45.1);
            ctx.bezierCurveTo(14.8, 45.2, 15.0, 45.4, 15.4, 45.6);
            ctx.bezierCurveTo(15.7, 45.8, 15.8, 45.9, 15.9, 45.9);
            ctx.bezierCurveTo(16.3, 44.9, 16.5, 43.6, 16.7, 42.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(22.9, 41.1);
            ctx.lineTo(22.9, 47.6);
            ctx.bezierCurveTo(22.8, 48.1, 22.9, 48.4, 22.9, 48.7);
            ctx.lineTo(21.8, 48.7);
            ctx.bezierCurveTo(21.9, 48.1, 21.9, 47.9, 21.9, 47.9);
            ctx.lineTo(21.9, 47.7);
            ctx.lineTo(19.5, 47.7);
            ctx.lineTo(19.5, 48.2);
            ctx.bezierCurveTo(19.5, 48.3, 19.5, 48.5, 19.5, 48.8);
            ctx.lineTo(18.5, 48.8);
            ctx.bezierCurveTo(18.5, 48.4, 18.5, 48.0, 18.5, 47.7);
            ctx.lineTo(18.5, 41.1);
            ctx.bezierCurveTo(18.5, 40.9, 18.5, 40.5, 18.5, 40.1);
            ctx.bezierCurveTo(18.7, 40.2, 19.1, 40.2, 19.6, 40.2);
            ctx.lineTo(21.8, 40.2);
            ctx.bezierCurveTo(22.0, 40.2, 22.4, 40.2, 23.0, 40.1);
            ctx.bezierCurveTo(22.9, 40.5, 22.8, 40.8, 22.9, 41.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(21.9, 41.1);
            ctx.lineTo(19.5, 41.1);
            ctx.lineTo(19.5, 46.8);
            ctx.lineTo(21.9, 46.8);
            ctx.lineTo(21.9, 41.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(34.0, 39.8);
            ctx.lineTo(34.0, 42.9);
            ctx.bezierCurveTo(34.0, 43.2, 34.0, 43.5, 34.0, 43.8);
            ctx.bezierCurveTo(33.6, 43.7, 33.3, 43.7, 33.1, 43.8);
            ctx.lineTo(30.5, 43.8);
            ctx.lineTo(30.5, 44.7);
            ctx.lineTo(33.7, 44.7);
            ctx.bezierCurveTo(34.0, 44.7, 34.5, 44.7, 35.3, 44.6);
            ctx.lineTo(35.3, 45.6);
            ctx.bezierCurveTo(34.5, 45.5, 33.9, 45.4, 33.7, 45.5);
            ctx.lineTo(31.5, 45.5);
            ctx.bezierCurveTo(32.3, 46.6, 33.6, 47.3, 35.4, 47.5);
            ctx.bezierCurveTo(35.1, 47.8, 34.8, 48.2, 34.7, 48.6);
            ctx.bezierCurveTo(32.8, 48.0, 31.5, 47.0, 30.7, 45.5);
            ctx.lineTo(30.5, 45.5);
            ctx.lineTo(30.5, 48.4);
            ctx.bezierCurveTo(30.5, 48.8, 30.6, 49.1, 30.6, 49.3);
            ctx.lineTo(29.4, 49.3);
            ctx.bezierCurveTo(29.5, 49.1, 29.5, 48.8, 29.5, 48.4);
            ctx.lineTo(29.5, 45.5);
            ctx.lineTo(29.4, 45.5);
            ctx.bezierCurveTo(28.9, 46.6, 27.6, 47.7, 25.4, 48.7);
            ctx.bezierCurveTo(25.3, 48.4, 25.0, 48.1, 24.5, 47.8);
            ctx.bezierCurveTo(26.1, 47.5, 27.4, 46.7, 28.6, 45.4);
            ctx.lineTo(26.2, 45.4);
            ctx.bezierCurveTo(26.0, 45.4, 25.5, 45.5, 24.8, 45.5);
            ctx.lineTo(24.8, 44.6);
            ctx.bezierCurveTo(25.5, 44.7, 25.9, 44.7, 26.2, 44.7);
            ctx.lineTo(29.5, 44.7);
            ctx.lineTo(29.5, 43.8);
            ctx.lineTo(26.9, 43.8);
            ctx.bezierCurveTo(26.7, 43.7, 26.5, 43.7, 26.1, 43.8);
            ctx.bezierCurveTo(26.1, 43.1, 26.2, 42.7, 26.2, 42.5);
            ctx.lineTo(26.2, 39.9);
            ctx.bezierCurveTo(26.2, 39.7, 26.1, 39.4, 26.1, 38.9);
            ctx.bezierCurveTo(26.6, 39.0, 26.9, 39.0, 27.2, 39.0);
            ctx.lineTo(32.7, 39.0);
            ctx.bezierCurveTo(33.0, 39.0, 33.5, 39.0, 34.1, 38.9);
            ctx.bezierCurveTo(34.0, 39.3, 33.9, 39.6, 34.0, 39.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(27.1, 39.8);
            ctx.lineTo(27.1, 41.0);
            ctx.lineTo(29.4, 41.0);
            ctx.lineTo(29.4, 39.8);
            ctx.lineTo(27.1, 39.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(27.1, 41.8);
            ctx.lineTo(27.1, 42.9);
            ctx.lineTo(29.4, 42.9);
            ctx.lineTo(29.4, 41.8);
            ctx.lineTo(27.1, 41.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(30.4, 39.8);
            ctx.lineTo(30.4, 41.0);
            ctx.lineTo(33.0, 41.0);
            ctx.lineTo(33.0, 39.8);
            ctx.lineTo(30.4, 39.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(30.4, 41.8);
            ctx.lineTo(30.4, 42.9);
            ctx.lineTo(33.0, 42.9);
            ctx.lineTo(33.0, 41.8);
            ctx.lineTo(30.4, 41.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(39.3, 41.0);
            ctx.lineTo(39.3, 47.7);
            ctx.bezierCurveTo(39.3, 48.7, 39.3, 49.2, 39.4, 49.3);
            ctx.lineTo(38.3, 49.3);
            ctx.bezierCurveTo(38.4, 49.2, 38.4, 48.6, 38.4, 47.7);
            ctx.lineTo(38.4, 42.5);
            ctx.bezierCurveTo(37.8, 43.5, 37.4, 44.2, 37.1, 44.5);
            ctx.bezierCurveTo(37.0, 44.3, 36.8, 44.1, 36.6, 43.9);
            ctx.bezierCurveTo(36.5, 43.8, 36.4, 43.7, 36.4, 43.7);
            ctx.bezierCurveTo(37.6, 42.6, 38.5, 40.9, 39.3, 38.6);
            ctx.bezierCurveTo(39.4, 38.6, 39.4, 38.6, 39.5, 38.6);
            ctx.bezierCurveTo(40.3, 39.0, 40.6, 39.2, 40.5, 39.3);
            ctx.bezierCurveTo(40.5, 39.3, 40.5, 39.4, 40.4, 39.4);
            ctx.bezierCurveTo(40.0, 39.7, 39.7, 40.2, 39.3, 41.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(41.5, 44.2);
            ctx.bezierCurveTo(41.6, 44.2, 41.8, 44.3, 42.1, 44.4);
            ctx.bezierCurveTo(42.5, 44.4, 42.6, 44.5, 42.6, 44.6);
            ctx.bezierCurveTo(42.6, 44.6, 42.6, 44.6, 42.5, 44.7);
            ctx.bezierCurveTo(42.3, 44.8, 42.3, 44.9, 42.2, 45.0);
            ctx.bezierCurveTo(42.1, 45.2, 42.0, 45.4, 41.9, 45.8);
            ctx.bezierCurveTo(41.6, 46.7, 41.2, 47.4, 40.8, 48.1);
            ctx.bezierCurveTo(40.7, 48.1, 40.7, 48.0, 40.6, 48.0);
            ctx.bezierCurveTo(40.2, 47.8, 40.0, 47.7, 39.8, 47.7);
            ctx.bezierCurveTo(40.6, 46.6, 41.2, 45.4, 41.5, 44.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(42.7, 40.6);
            ctx.lineTo(45.7, 40.6);
            ctx.bezierCurveTo(46.1, 40.6, 46.8, 40.6, 47.7, 40.6);
            ctx.bezierCurveTo(47.6, 40.9, 47.4, 41.3, 47.2, 41.9);
            ctx.bezierCurveTo(46.9, 42.7, 46.6, 43.3, 46.5, 43.6);
            ctx.lineTo(46.5, 43.6);
            ctx.bezierCurveTo(46.0, 43.4, 45.7, 43.4, 45.4, 43.4);
            ctx.bezierCurveTo(45.7, 43.0, 46.0, 42.4, 46.4, 41.5);
            ctx.lineTo(42.2, 41.5);
            ctx.lineTo(40.9, 43.8);
            ctx.bezierCurveTo(40.6, 43.5, 40.2, 43.3, 39.9, 43.3);
            ctx.bezierCurveTo(41.0, 42.1, 41.9, 40.6, 42.3, 38.7);
            ctx.bezierCurveTo(43.3, 39.0, 43.7, 39.2, 43.6, 39.2);
            ctx.bezierCurveTo(43.6, 39.2, 43.6, 39.3, 43.5, 39.3);
            ctx.bezierCurveTo(43.2, 39.6, 42.9, 40.0, 42.7, 40.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(44.2, 43.4);
            ctx.lineTo(44.2, 48.4);
            ctx.bezierCurveTo(44.4, 49.1, 43.8, 49.4, 42.2, 49.5);
            ctx.bezierCurveTo(42.2, 49.0, 42.0, 48.7, 41.8, 48.4);
            ctx.lineTo(41.8, 48.3);
            ctx.bezierCurveTo(42.9, 48.5, 43.4, 48.4, 43.3, 48.0);
            ctx.lineTo(43.3, 43.4);
            ctx.bezierCurveTo(43.3, 42.8, 43.2, 42.3, 43.2, 42.1);
            ctx.bezierCurveTo(44.0, 42.1, 44.5, 42.2, 44.4, 42.3);
            ctx.bezierCurveTo(44.4, 42.3, 44.4, 42.4, 44.4, 42.4);
            ctx.bezierCurveTo(44.2, 42.7, 44.2, 43.0, 44.2, 43.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(44.8, 44.7);
            ctx.lineTo(45.7, 44.2);
            ctx.bezierCurveTo(45.9, 44.5, 46.2, 45.1, 46.6, 45.8);
            ctx.bezierCurveTo(47.0, 46.5, 47.3, 47.1, 47.6, 47.6);
            ctx.bezierCurveTo(47.1, 47.8, 46.8, 48.0, 46.5, 48.1);
            ctx.bezierCurveTo(46.0, 46.6, 45.4, 45.5, 44.8, 44.7);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(50.3, 41.6);
            ctx.lineTo(53.1, 41.4);
            ctx.bezierCurveTo(53.1, 41.3, 53.0, 41.2, 52.9, 41.1);
            ctx.bezierCurveTo(52.6, 40.7, 52.4, 40.5, 52.2, 40.4);
            ctx.lineTo(53.1, 39.9);
            ctx.bezierCurveTo(53.8, 40.6, 54.4, 41.4, 54.7, 42.1);
            ctx.lineTo(53.7, 42.6);
            ctx.bezierCurveTo(53.6, 42.5, 53.6, 42.3, 53.5, 42.1);
            ctx.bezierCurveTo(52.0, 42.2, 50.7, 42.4, 49.4, 42.6);
            ctx.lineTo(49.0, 41.5);
            ctx.bezierCurveTo(49.3, 41.5, 49.6, 41.3, 49.9, 40.9);
            ctx.bezierCurveTo(50.4, 40.3, 50.8, 39.5, 51.2, 38.6);
            ctx.bezierCurveTo(52.0, 38.9, 52.4, 39.1, 52.3, 39.2);
            ctx.bezierCurveTo(52.3, 39.2, 52.3, 39.3, 52.1, 39.4);
            ctx.bezierCurveTo(52.0, 39.5, 51.9, 39.6, 51.8, 39.7);
            ctx.bezierCurveTo(51.7, 39.8, 51.5, 40.1, 51.2, 40.5);
            ctx.bezierCurveTo(50.8, 41.1, 50.5, 41.5, 50.3, 41.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(54.0, 43.9);
            ctx.lineTo(54.0, 48.7);
            ctx.bezierCurveTo(54.0, 49.1, 53.4, 49.3, 52.2, 49.5);
            ctx.bezierCurveTo(52.2, 49.0, 52.1, 48.6, 51.8, 48.3);
            ctx.bezierCurveTo(52.6, 48.4, 53.0, 48.4, 53.1, 48.3);
            ctx.lineTo(53.1, 47.3);
            ctx.lineTo(50.6, 47.3);
            ctx.lineTo(50.6, 48.2);
            ctx.bezierCurveTo(50.5, 48.5, 50.6, 48.9, 50.7, 49.4);
            ctx.lineTo(49.5, 49.4);
            ctx.bezierCurveTo(49.6, 48.8, 49.6, 48.4, 49.6, 48.2);
            ctx.lineTo(49.6, 43.9);
            ctx.bezierCurveTo(49.6, 43.5, 49.6, 43.3, 49.5, 43.0);
            ctx.bezierCurveTo(50.0, 43.1, 50.4, 43.1, 50.7, 43.1);
            ctx.lineTo(52.7, 43.1);
            ctx.bezierCurveTo(52.9, 43.1, 53.4, 43.1, 54.1, 43.0);
            ctx.bezierCurveTo(54.0, 43.4, 54.0, 43.7, 54.0, 43.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(53.1, 43.9);
            ctx.lineTo(50.6, 43.9);
            ctx.lineTo(50.6, 44.9);
            ctx.lineTo(53.1, 44.9);
            ctx.lineTo(53.1, 43.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(53.1, 45.6);
            ctx.lineTo(50.6, 45.6);
            ctx.lineTo(50.6, 46.7);
            ctx.lineTo(53.1, 46.7);
            ctx.lineTo(53.1, 45.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(56.0, 39.5);
            ctx.lineTo(56.0, 40.8);
            ctx.bezierCurveTo(56.7, 40.4, 57.5, 40.0, 58.3, 39.4);
            ctx.bezierCurveTo(58.9, 39.9, 59.2, 40.2, 59.1, 40.3);
            ctx.lineTo(58.9, 40.4);
            ctx.bezierCurveTo(58.6, 40.5, 58.4, 40.6, 58.2, 40.6);
            ctx.bezierCurveTo(57.8, 40.7, 57.3, 40.9, 56.8, 41.1);
            ctx.bezierCurveTo(56.5, 41.3, 56.3, 41.4, 56.0, 41.5);
            ctx.lineTo(56.0, 42.3);
            ctx.bezierCurveTo(56.0, 42.4, 56.3, 42.5, 56.8, 42.6);
            ctx.bezierCurveTo(57.5, 42.6, 57.9, 42.6, 58.1, 42.5);
            ctx.bezierCurveTo(58.3, 42.3, 58.5, 41.9, 58.5, 41.2);
            ctx.bezierCurveTo(58.9, 41.6, 59.2, 41.8, 59.6, 41.9);
            ctx.bezierCurveTo(59.4, 42.8, 59.0, 43.3, 58.5, 43.4);
            ctx.bezierCurveTo(58.0, 43.5, 57.2, 43.5, 56.2, 43.4);
            ctx.bezierCurveTo(55.4, 43.3, 55.1, 43.0, 55.1, 42.7);
            ctx.bezierCurveTo(55.2, 40.8, 55.1, 39.5, 55.0, 38.7);
            ctx.bezierCurveTo(55.0, 38.7, 55.0, 38.6, 55.0, 38.6);
            ctx.bezierCurveTo(55.8, 38.6, 56.2, 38.7, 56.3, 38.8);
            ctx.bezierCurveTo(56.3, 38.9, 56.2, 38.9, 56.2, 39.0);
            ctx.bezierCurveTo(56.1, 39.1, 56.0, 39.3, 56.0, 39.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(56.0, 44.5);
            ctx.lineTo(56.0, 46.0);
            ctx.bezierCurveTo(56.1, 45.9, 56.3, 45.8, 56.6, 45.7);
            ctx.bezierCurveTo(57.5, 45.2, 58.1, 44.8, 58.4, 44.6);
            ctx.bezierCurveTo(58.5, 44.7, 58.6, 44.8, 58.7, 45.0);
            ctx.bezierCurveTo(59.0, 45.3, 59.2, 45.5, 59.1, 45.5);
            ctx.bezierCurveTo(59.1, 45.5, 59.1, 45.6, 59.0, 45.6);
            ctx.bezierCurveTo(58.8, 45.7, 58.6, 45.7, 58.4, 45.8);
            ctx.bezierCurveTo(58.4, 45.8, 57.9, 46.0, 57.1, 46.3);
            ctx.bezierCurveTo(56.6, 46.5, 56.3, 46.6, 56.1, 46.7);
            ctx.lineTo(56.1, 47.9);
            ctx.bezierCurveTo(56.1, 48.1, 56.3, 48.3, 56.8, 48.3);
            ctx.bezierCurveTo(57.7, 48.2, 58.2, 48.1, 58.3, 48.1);
            ctx.bezierCurveTo(58.5, 47.9, 58.6, 47.5, 58.6, 46.8);
            ctx.bezierCurveTo(59.0, 47.2, 59.3, 47.4, 59.7, 47.5);
            ctx.bezierCurveTo(59.4, 48.3, 59.1, 48.8, 58.7, 49.0);
            ctx.bezierCurveTo(58.3, 49.1, 57.4, 49.1, 56.1, 49.1);
            ctx.bezierCurveTo(55.5, 49.0, 55.2, 48.8, 55.1, 48.3);
            ctx.lineTo(55.1, 44.9);
            ctx.bezierCurveTo(55.1, 44.4, 55.1, 44.0, 55.0, 43.7);
            ctx.bezierCurveTo(55.8, 43.8, 56.2, 43.9, 56.2, 44.0);
            ctx.bezierCurveTo(56.2, 44.0, 56.2, 44.1, 56.2, 44.1);
            ctx.bezierCurveTo(56.1, 44.3, 56.0, 44.4, 56.0, 44.5);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(66.4, 40.3);
            ctx.lineTo(69.6, 40.3);
            ctx.bezierCurveTo(70.2, 40.3, 70.8, 40.3, 71.5, 40.3);
            ctx.bezierCurveTo(71.8, 40.3, 72.0, 40.3, 72.1, 40.3);
            ctx.lineTo(72.1, 41.3);
            ctx.bezierCurveTo(71.8, 41.3, 71.0, 41.3, 69.6, 41.3);
            ctx.lineTo(66.0, 41.3);
            ctx.bezierCurveTo(65.7, 41.9, 65.2, 42.6, 64.5, 43.6);
            ctx.bezierCurveTo(64.4, 43.7, 64.3, 43.8, 64.3, 43.9);
            ctx.lineTo(64.3, 48.2);
            ctx.bezierCurveTo(64.3, 49.1, 64.4, 49.5, 64.4, 49.5);
            ctx.lineTo(63.2, 49.5);
            ctx.bezierCurveTo(63.3, 49.2, 63.3, 48.7, 63.3, 48.1);
            ctx.lineTo(63.3, 44.8);
            ctx.bezierCurveTo(62.8, 45.4, 62.2, 45.9, 61.7, 46.3);
            ctx.bezierCurveTo(61.3, 46.0, 61.0, 45.8, 60.8, 45.6);
            ctx.bezierCurveTo(61.5, 45.1, 62.4, 44.5, 63.3, 43.7);
            ctx.lineTo(63.3, 42.8);
            ctx.bezierCurveTo(63.5, 42.8, 63.7, 42.8, 63.9, 42.9);
            ctx.bezierCurveTo(64.3, 42.5, 64.6, 41.9, 65.0, 41.2);
            ctx.lineTo(63.9, 41.2);
            ctx.bezierCurveTo(63.0, 41.2, 62.2, 41.3, 61.6, 41.3);
            ctx.lineTo(61.6, 40.2);
            ctx.bezierCurveTo(62.4, 40.3, 63.1, 40.3, 63.9, 40.3);
            ctx.lineTo(65.4, 40.3);
            ctx.bezierCurveTo(65.6, 39.9, 65.8, 39.2, 66.0, 38.5);
            ctx.bezierCurveTo(66.8, 38.6, 67.3, 38.7, 67.3, 38.9);
            ctx.bezierCurveTo(67.3, 38.9, 67.3, 38.9, 67.3, 39.0);
            ctx.bezierCurveTo(67.0, 39.2, 66.7, 39.7, 66.4, 40.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(68.6, 43.0);
            ctx.lineTo(68.6, 44.2);
            ctx.lineTo(69.7, 44.2);
            ctx.bezierCurveTo(70.0, 44.2, 70.6, 44.2, 71.5, 44.1);
            ctx.lineTo(71.5, 45.1);
            ctx.lineTo(71.3, 45.1);
            ctx.bezierCurveTo(70.5, 45.1, 69.9, 45.1, 69.7, 45.1);
            ctx.lineTo(68.6, 45.1);
            ctx.lineTo(68.6, 48.0);
            ctx.lineTo(69.8, 48.0);
            ctx.bezierCurveTo(71.0, 48.0, 71.7, 48.0, 72.0, 47.9);
            ctx.lineTo(72.0, 48.9);
            ctx.bezierCurveTo(71.9, 48.9, 71.6, 48.9, 71.3, 48.9);
            ctx.bezierCurveTo(70.7, 48.9, 70.2, 48.8, 69.8, 48.8);
            ctx.lineTo(66.3, 48.8);
            ctx.bezierCurveTo(65.7, 48.8, 65.1, 48.9, 64.6, 48.9);
            ctx.lineTo(64.6, 47.9);
            ctx.bezierCurveTo(64.7, 47.9, 64.9, 47.9, 65.3, 47.9);
            ctx.bezierCurveTo(66.1, 48.0, 66.9, 48.0, 67.7, 48.0);
            ctx.lineTo(67.7, 45.1);
            ctx.bezierCurveTo(66.1, 45.1, 65.3, 45.1, 65.2, 45.1);
            ctx.lineTo(65.2, 44.1);
            ctx.bezierCurveTo(65.9, 44.2, 66.8, 44.2, 67.7, 44.2);
            ctx.bezierCurveTo(67.7, 43.3, 67.7, 42.6, 67.6, 42.0);
            ctx.bezierCurveTo(68.4, 42.0, 68.8, 42.1, 68.8, 42.2);
            ctx.bezierCurveTo(68.8, 42.2, 68.8, 42.3, 68.7, 42.4);
            ctx.bezierCurveTo(68.7, 42.6, 68.6, 42.8, 68.6, 43.0);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(74.1, 42.6);
            ctx.lineTo(75.1, 42.6);
            ctx.lineTo(75.8, 42.6);
            ctx.bezierCurveTo(75.7, 42.8, 75.7, 43.1, 75.7, 43.4);
            ctx.lineTo(75.7, 46.9);
            ctx.bezierCurveTo(75.9, 47.9, 77.0, 48.4, 78.9, 48.4);
            ctx.bezierCurveTo(81.3, 48.4, 83.1, 48.3, 84.3, 48.2);
            ctx.bezierCurveTo(84.0, 48.5, 83.9, 48.9, 84.0, 49.3);
            ctx.bezierCurveTo(80.5, 49.2, 78.7, 49.2, 78.6, 49.2);
            ctx.bezierCurveTo(77.3, 49.2, 76.2, 48.9, 75.4, 48.0);
            ctx.bezierCurveTo(75.3, 48.0, 75.3, 47.9, 75.2, 47.9);
            ctx.bezierCurveTo(74.9, 48.0, 74.4, 48.5, 73.7, 49.4);
            ctx.bezierCurveTo(73.5, 49.1, 73.3, 48.8, 73.0, 48.6);
            ctx.bezierCurveTo(74.0, 47.8, 74.6, 47.2, 74.8, 46.9);
            ctx.lineTo(74.8, 43.4);
            ctx.lineTo(74.1, 43.4);
            ctx.bezierCurveTo(73.7, 43.4, 73.4, 43.4, 73.1, 43.5);
            ctx.lineTo(73.1, 42.6);
            ctx.bezierCurveTo(73.2, 42.6, 73.6, 42.6, 74.1, 42.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(75.8, 41.4);
            ctx.lineTo(74.8, 41.8);
            ctx.bezierCurveTo(74.6, 41.0, 74.3, 40.2, 74.0, 39.6);
            ctx.lineTo(74.8, 39.2);
            ctx.bezierCurveTo(75.2, 39.8, 75.5, 40.5, 75.8, 41.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(80.8, 40.0);
            ctx.lineTo(83.0, 40.0);
            ctx.bezierCurveTo(83.3, 40.0, 83.7, 40.0, 84.0, 39.9);
            ctx.lineTo(84.0, 40.9);
            ctx.bezierCurveTo(83.7, 40.8, 83.4, 40.8, 83.0, 40.8);
            ctx.lineTo(77.9, 40.8);
            ctx.bezierCurveTo(77.0, 40.8, 76.5, 40.8, 76.5, 40.9);
            ctx.lineTo(76.5, 39.9);
            ctx.bezierCurveTo(77.0, 40.0, 77.5, 40.0, 78.0, 40.0);
            ctx.lineTo(79.9, 40.0);
            ctx.bezierCurveTo(79.7, 39.5, 79.5, 39.1, 79.3, 38.8);
            ctx.lineTo(80.4, 38.7);
            ctx.bezierCurveTo(80.5, 39.0, 80.7, 39.5, 80.8, 40.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(83.1, 43.1);
            ctx.lineTo(83.1, 44.0);
            ctx.bezierCurveTo(82.5, 44.0, 82.1, 43.9, 81.8, 43.9);
            ctx.lineTo(78.4, 43.9);
            ctx.bezierCurveTo(78.0, 43.9, 77.6, 44.0, 77.1, 44.0);
            ctx.lineTo(77.1, 43.1);
            ctx.bezierCurveTo(77.6, 43.1, 78.0, 43.1, 78.4, 43.1);
            ctx.lineTo(81.7, 43.1);
            ctx.bezierCurveTo(82.1, 43.1, 82.6, 43.1, 83.1, 43.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(78.6, 41.6);
            ctx.lineTo(82.0, 41.6);
            ctx.bezierCurveTo(82.3, 41.6, 82.7, 41.6, 83.2, 41.6);
            ctx.lineTo(83.2, 42.5);
            ctx.bezierCurveTo(82.8, 42.4, 82.4, 42.4, 82.0, 42.4);
            ctx.lineTo(78.5, 42.4);
            ctx.bezierCurveTo(77.8, 42.4, 77.4, 42.4, 77.1, 42.5);
            ctx.lineTo(77.1, 41.6);
            ctx.bezierCurveTo(77.6, 41.6, 78.1, 41.6, 78.6, 41.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(83.0, 45.6);
            ctx.lineTo(83.0, 46.8);
            ctx.bezierCurveTo(83.0, 47.0, 83.1, 47.3, 83.1, 47.6);
            ctx.bezierCurveTo(82.8, 47.6, 82.7, 47.6, 82.5, 47.6);
            ctx.lineTo(78.5, 47.6);
            ctx.bezierCurveTo(78.1, 47.6, 77.7, 47.6, 77.4, 47.6);
            ctx.bezierCurveTo(77.4, 47.3, 77.4, 46.9, 77.4, 46.5);
            ctx.lineTo(77.4, 45.7);
            ctx.bezierCurveTo(77.4, 45.3, 77.4, 45.0, 77.4, 44.7);
            ctx.lineTo(78.3, 44.7);
            ctx.lineTo(82.2, 44.7);
            ctx.bezierCurveTo(82.6, 44.7, 82.9, 44.7, 83.1, 44.7);
            ctx.bezierCurveTo(83.0, 44.9, 83.0, 45.2, 83.0, 45.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(82.1, 45.5);
            ctx.lineTo(78.3, 45.5);
            ctx.lineTo(78.3, 46.8);
            ctx.lineTo(82.1, 46.8);
            ctx.lineTo(82.1, 45.5);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(87.3, 43.6);
            ctx.bezierCurveTo(87.6, 43.9, 87.9, 44.2, 88.3, 44.5);
            ctx.bezierCurveTo(88.2, 44.7, 88.0, 45.2, 87.6, 45.8);
            ctx.bezierCurveTo(87.4, 46.3, 87.1, 46.9, 86.8, 47.6);
            ctx.bezierCurveTo(86.5, 48.1, 86.3, 48.5, 86.2, 48.8);
            ctx.bezierCurveTo(85.7, 48.4, 85.4, 48.1, 85.0, 47.9);
            ctx.bezierCurveTo(86.0, 46.9, 86.8, 45.5, 87.3, 43.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(88.2, 42.0);
            ctx.lineTo(87.0, 42.7);
            ctx.bezierCurveTo(86.7, 41.8, 86.2, 40.9, 85.5, 40.1);
            ctx.lineTo(86.6, 39.6);
            ctx.bezierCurveTo(86.9, 39.9, 87.4, 40.7, 88.2, 42.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(91.1, 42.5);
            ctx.bezierCurveTo(91.9, 42.6, 92.4, 42.6, 92.5, 42.7);
            ctx.bezierCurveTo(92.5, 42.7, 92.5, 42.8, 92.5, 42.8);
            ctx.bezierCurveTo(92.3, 43.0, 92.3, 43.3, 92.2, 43.7);
            ctx.bezierCurveTo(92.3, 46.3, 93.7, 47.8, 96.4, 48.3);
            ctx.bezierCurveTo(95.9, 48.6, 95.6, 49.1, 95.3, 49.6);
            ctx.bezierCurveTo(93.1, 48.5, 92.0, 47.1, 91.8, 45.4);
            ctx.bezierCurveTo(91.5, 47.2, 90.3, 48.6, 88.1, 49.6);
            ctx.bezierCurveTo(87.9, 49.2, 87.5, 48.9, 86.9, 48.6);
            ctx.bezierCurveTo(89.9, 48.1, 91.4, 46.0, 91.1, 42.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(90.8, 40.9);
            ctx.lineTo(94.7, 40.9);
            ctx.bezierCurveTo(95.2, 40.9, 95.6, 40.9, 95.9, 40.8);
            ctx.bezierCurveTo(95.5, 41.7, 95.2, 42.7, 94.7, 43.9);
            ctx.lineTo(93.5, 43.7);
            ctx.bezierCurveTo(93.7, 43.4, 93.9, 42.9, 94.3, 42.1);
            ctx.bezierCurveTo(94.4, 41.9, 94.4, 41.8, 94.5, 41.8);
            ctx.lineTo(90.4, 41.8);
            ctx.bezierCurveTo(90.1, 42.2, 89.7, 43.0, 89.1, 44.0);
            ctx.bezierCurveTo(88.9, 43.7, 88.5, 43.6, 88.0, 43.5);
            ctx.bezierCurveTo(89.2, 42.2, 90.0, 40.5, 90.5, 38.4);
            ctx.bezierCurveTo(91.4, 38.6, 91.9, 38.8, 92.0, 38.9);
            ctx.bezierCurveTo(92.0, 38.9, 92.0, 39.0, 91.9, 39.1);
            ctx.bezierCurveTo(91.7, 39.3, 91.5, 39.4, 91.4, 39.6);
            ctx.bezierCurveTo(91.1, 40.2, 90.9, 40.6, 90.8, 40.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(104.8, 40.9);
            ctx.lineTo(106.5, 40.9);
            ctx.lineTo(108.2, 40.8);
            ctx.bezierCurveTo(107.9, 44.9, 107.8, 47.4, 107.7, 48.1);
            ctx.bezierCurveTo(107.6, 49.0, 106.7, 49.5, 105.1, 49.5);
            ctx.bezierCurveTo(105.0, 49.0, 104.8, 48.6, 104.5, 48.3);
            ctx.bezierCurveTo(105.4, 48.5, 106.0, 48.5, 106.5, 48.3);
            ctx.bezierCurveTo(106.7, 48.3, 106.8, 46.9, 106.9, 44.0);
            ctx.bezierCurveTo(107.0, 43.0, 107.0, 42.2, 107.1, 41.6);
            ctx.lineTo(104.5, 41.6);
            ctx.bezierCurveTo(104.1, 42.2, 103.8, 42.9, 103.3, 43.7);
            ctx.bezierCurveTo(103.0, 43.5, 102.7, 43.3, 102.5, 43.3);
            ctx.lineTo(102.5, 47.6);
            ctx.bezierCurveTo(102.5, 48.4, 102.5, 48.9, 102.5, 49.1);
            ctx.lineTo(101.4, 49.1);
            ctx.bezierCurveTo(101.4, 48.8, 101.5, 48.4, 101.5, 47.9);
            ctx.lineTo(99.1, 47.9);
            ctx.bezierCurveTo(99.1, 48.4, 99.1, 48.8, 99.2, 49.2);
            ctx.lineTo(98.1, 49.2);
            ctx.bezierCurveTo(98.1, 48.9, 98.1, 48.4, 98.1, 47.7);
            ctx.lineTo(98.1, 42.5);
            ctx.bezierCurveTo(98.1, 42.4, 98.1, 42.1, 98.1, 41.6);
            ctx.bezierCurveTo(98.1, 41.2, 98.1, 40.9, 98.1, 40.9);
            ctx.bezierCurveTo(98.6, 40.9, 98.9, 40.9, 99.1, 40.9);
            ctx.lineTo(99.5, 40.9);
            ctx.bezierCurveTo(99.6, 40.3, 99.7, 39.6, 99.7, 38.6);
            ctx.bezierCurveTo(100.6, 38.7, 101.0, 38.8, 100.9, 39.0);
            ctx.bezierCurveTo(100.9, 39.0, 100.9, 39.1, 100.8, 39.1);
            ctx.bezierCurveTo(100.8, 39.2, 100.7, 39.3, 100.7, 39.4);
            ctx.bezierCurveTo(100.6, 39.6, 100.5, 39.9, 100.4, 40.3);
            ctx.bezierCurveTo(100.3, 40.6, 100.3, 40.7, 100.3, 40.9);
            ctx.lineTo(101.1, 40.9);
            ctx.bezierCurveTo(101.3, 40.9, 101.8, 40.9, 102.5, 40.9);
            ctx.bezierCurveTo(102.5, 41.1, 102.5, 41.6, 102.5, 42.4);
            ctx.lineTo(102.5, 43.1);
            ctx.bezierCurveTo(103.4, 41.9, 104.1, 40.4, 104.5, 38.5);
            ctx.bezierCurveTo(105.4, 38.7, 105.8, 38.9, 105.8, 39.0);
            ctx.bezierCurveTo(105.8, 39.0, 105.8, 39.1, 105.7, 39.1);
            ctx.bezierCurveTo(105.6, 39.2, 105.5, 39.2, 105.5, 39.3);
            ctx.bezierCurveTo(105.1, 40.0, 104.9, 40.5, 104.8, 40.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(99.1, 41.7);
            ctx.lineTo(99.1, 44.1);
            ctx.lineTo(101.5, 44.1);
            ctx.lineTo(101.5, 41.7);
            ctx.lineTo(99.1, 41.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(99.1, 44.8);
            ctx.lineTo(99.1, 47.2);
            ctx.lineTo(101.5, 47.2);
            ctx.lineTo(101.5, 44.8);
            ctx.lineTo(99.1, 44.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(105.7, 45.8);
            ctx.lineTo(104.8, 46.3);
            ctx.bezierCurveTo(104.7, 45.8, 104.3, 45.1, 103.7, 44.1);
            ctx.lineTo(104.5, 43.7);
            ctx.bezierCurveTo(104.7, 43.9, 105.0, 44.5, 105.5, 45.4);
            ctx.bezierCurveTo(105.6, 45.6, 105.7, 45.8, 105.7, 45.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(119.5, 43.1);
            ctx.lineTo(119.5, 44.4);
            ctx.bezierCurveTo(119.5, 45.0, 119.5, 45.3, 119.5, 45.5);
            ctx.bezierCurveTo(119.4, 45.5, 119.0, 45.5, 118.3, 45.5);
            ctx.lineTo(115.0, 45.5);
            ctx.bezierCurveTo(114.9, 45.8, 114.8, 46.1, 114.8, 46.3);
            ctx.bezierCurveTo(114.9, 46.3, 115.2, 46.3, 115.6, 46.3);
            ctx.lineTo(118.5, 46.3);
            ctx.bezierCurveTo(119.0, 46.3, 119.3, 46.3, 119.5, 46.3);
            ctx.bezierCurveTo(119.5, 46.5, 119.5, 46.9, 119.5, 47.4);
            ctx.lineTo(119.5, 48.6);
            ctx.bezierCurveTo(119.5, 49.1, 119.5, 49.4, 119.5, 49.6);
            ctx.lineTo(118.5, 49.6);
            ctx.bezierCurveTo(118.6, 49.4, 118.6, 49.1, 118.6, 48.8);
            ctx.lineTo(115.5, 48.8);
            ctx.bezierCurveTo(115.5, 49.1, 115.6, 49.4, 115.6, 49.6);
            ctx.lineTo(114.6, 49.6);
            ctx.bezierCurveTo(114.6, 49.3, 114.7, 48.8, 114.6, 48.1);
            ctx.lineTo(114.6, 47.5);
            ctx.bezierCurveTo(114.6, 47.1, 114.6, 46.9, 114.6, 46.7);
            ctx.bezierCurveTo(114.3, 47.6, 113.9, 48.3, 113.3, 49.0);
            ctx.bezierCurveTo(113.0, 48.8, 112.7, 48.6, 112.4, 48.5);
            ctx.bezierCurveTo(113.6, 47.4, 114.2, 46.0, 114.3, 44.4);
            ctx.lineTo(114.3, 42.3);
            ctx.lineTo(113.7, 42.8);
            ctx.bezierCurveTo(113.6, 42.8, 113.6, 42.7, 113.6, 42.7);
            ctx.bezierCurveTo(113.4, 42.5, 113.1, 42.3, 112.7, 42.2);
            ctx.lineTo(113.2, 42.0);
            ctx.bezierCurveTo(113.1, 41.9, 112.9, 41.9, 112.6, 41.9);
            ctx.lineTo(112.1, 41.9);
            ctx.lineTo(112.1, 43.9);
            ctx.bezierCurveTo(112.7, 43.7, 113.1, 43.5, 113.4, 43.4);
            ctx.bezierCurveTo(113.4, 43.7, 113.4, 44.0, 113.4, 44.3);
            ctx.bezierCurveTo(113.0, 44.4, 112.6, 44.6, 112.1, 44.8);
            ctx.lineTo(112.1, 48.3);
            ctx.bezierCurveTo(112.2, 49.0, 111.7, 49.4, 110.4, 49.5);
            ctx.bezierCurveTo(110.4, 49.0, 110.2, 48.7, 110.0, 48.4);
            ctx.bezierCurveTo(110.9, 48.7, 111.3, 48.5, 111.3, 48.0);
            ctx.lineTo(111.3, 45.1);
            ctx.bezierCurveTo(110.7, 45.3, 110.3, 45.5, 110.0, 45.7);
            ctx.bezierCurveTo(110.0, 45.3, 109.8, 45.0, 109.7, 44.6);
            ctx.bezierCurveTo(110.5, 44.5, 111.0, 44.3, 111.3, 44.2);
            ctx.lineTo(111.3, 41.9);
            ctx.lineTo(111.0, 41.9);
            ctx.bezierCurveTo(110.4, 41.9, 109.9, 42.0, 109.8, 42.0);
            ctx.lineTo(109.8, 41.0);
            ctx.bezierCurveTo(110.0, 41.1, 110.4, 41.1, 111.0, 41.1);
            ctx.lineTo(111.3, 41.1);
            ctx.lineTo(111.3, 39.7);
            ctx.bezierCurveTo(111.3, 39.2, 111.2, 38.8, 111.2, 38.5);
            ctx.bezierCurveTo(112.0, 38.6, 112.3, 38.7, 112.3, 38.7);
            ctx.bezierCurveTo(112.3, 38.7, 112.3, 38.8, 112.3, 38.9);
            ctx.bezierCurveTo(112.2, 39.1, 112.1, 39.4, 112.1, 39.6);
            ctx.lineTo(112.1, 41.1);
            ctx.lineTo(112.6, 41.1);
            ctx.bezierCurveTo(113.0, 41.1, 113.3, 41.1, 113.4, 41.0);
            ctx.lineTo(113.4, 41.8);
            ctx.bezierCurveTo(114.6, 41.1, 115.6, 40.0, 116.4, 38.4);
            ctx.bezierCurveTo(116.9, 38.5, 117.3, 38.6, 117.6, 38.7);
            ctx.bezierCurveTo(117.6, 38.7, 117.6, 38.8, 117.3, 39.0);
            ctx.bezierCurveTo(118.1, 40.3, 119.4, 41.3, 121.0, 41.7);
            ctx.bezierCurveTo(120.7, 41.9, 120.5, 42.2, 120.3, 42.6);
            ctx.bezierCurveTo(119.8, 42.3, 119.6, 42.2, 119.5, 42.3);
            ctx.bezierCurveTo(119.5, 42.4, 119.5, 42.7, 119.5, 43.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(115.8, 41.9);
            ctx.lineTo(116.6, 41.9);
            ctx.bezierCurveTo(116.5, 41.7, 116.3, 41.2, 116.1, 40.7);
            ctx.lineTo(116.8, 40.4);
            ctx.bezierCurveTo(117.0, 40.9, 117.2, 41.3, 117.4, 41.7);
            ctx.lineTo(116.9, 41.9);
            ctx.lineTo(118.0, 41.9);
            ctx.bezierCurveTo(118.5, 41.9, 118.8, 41.9, 119.1, 41.9);
            ctx.bezierCurveTo(118.1, 41.2, 117.3, 40.4, 116.8, 39.4);
            ctx.bezierCurveTo(116.1, 40.4, 115.4, 41.2, 114.7, 41.9);
            ctx.bezierCurveTo(115.0, 41.9, 115.3, 41.9, 115.8, 41.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(115.0, 44.0);
            ctx.lineTo(115.0, 44.8);
            ctx.lineTo(118.7, 44.8);
            ctx.lineTo(118.7, 44.0);
            ctx.lineTo(115.0, 44.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(115.1, 42.6);
            ctx.lineTo(115.1, 43.4);
            ctx.lineTo(118.7, 43.4);
            ctx.lineTo(118.7, 42.6);
            ctx.lineTo(115.1, 42.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(115.5, 47.1);
            ctx.lineTo(115.5, 48.1);
            ctx.lineTo(118.6, 48.1);
            ctx.lineTo(118.6, 47.1);
            ctx.lineTo(115.5, 47.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(123.4, 39.4);
            ctx.lineTo(124.1, 39.4);
            ctx.bezierCurveTo(125.0, 39.4, 125.5, 39.4, 125.9, 39.4);
            ctx.lineTo(125.9, 40.3);
            ctx.bezierCurveTo(125.6, 40.5, 125.1, 40.9, 124.5, 41.6);
            ctx.bezierCurveTo(124.4, 41.7, 124.4, 41.8, 124.3, 41.8);
            ctx.lineTo(124.3, 43.4);
            ctx.lineTo(125.7, 42.9);
            ctx.lineTo(125.7, 43.9);
            ctx.bezierCurveTo(125.3, 44.0, 124.9, 44.2, 124.3, 44.4);
            ctx.lineTo(124.3, 47.8);
            ctx.bezierCurveTo(124.5, 48.5, 123.8, 48.9, 122.4, 49.0);
            ctx.bezierCurveTo(122.3, 48.7, 122.2, 48.3, 122.0, 47.9);
            ctx.bezierCurveTo(123.0, 48.1, 123.5, 48.0, 123.4, 47.6);
            ctx.lineTo(123.4, 44.8);
            ctx.bezierCurveTo(123.5, 44.8, 123.3, 44.8, 123.0, 45.0);
            ctx.bezierCurveTo(122.5, 45.2, 122.1, 45.4, 121.9, 45.5);
            ctx.lineTo(121.6, 44.5);
            ctx.lineTo(123.4, 43.8);
            ctx.lineTo(123.4, 41.6);
            ctx.bezierCurveTo(123.7, 41.3, 124.1, 40.9, 124.6, 40.3);
            ctx.lineTo(123.4, 40.3);
            ctx.bezierCurveTo(123.3, 40.3, 123.1, 40.3, 122.7, 40.3);
            ctx.bezierCurveTo(122.3, 40.3, 122.1, 40.3, 122.0, 40.3);
            ctx.lineTo(122.0, 39.4);
            ctx.bezierCurveTo(122.2, 39.4, 122.7, 39.4, 123.4, 39.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(130.0, 40.1);
            ctx.lineTo(128.9, 40.2);
            ctx.lineTo(128.9, 44.8);
            ctx.bezierCurveTo(128.9, 46.4, 128.7, 47.4, 128.5, 47.7);
            ctx.lineTo(129.7, 47.4);
            ctx.bezierCurveTo(129.6, 47.1, 129.5, 46.7, 129.4, 46.4);
            ctx.lineTo(130.0, 46.2);
            ctx.bezierCurveTo(130.3, 47.0, 130.6, 47.7, 130.8, 48.6);
            ctx.lineTo(129.9, 48.7);
            ctx.bezierCurveTo(129.9, 48.5, 129.9, 48.3, 129.9, 48.1);
            ctx.bezierCurveTo(129.9, 48.2, 129.9, 48.1, 129.9, 48.1);
            ctx.bezierCurveTo(129.6, 48.1, 129.5, 48.2, 129.6, 48.1);
            ctx.bezierCurveTo(128.5, 48.4, 127.9, 48.6, 127.7, 48.7);
            ctx.lineTo(127.2, 47.8);
            ctx.bezierCurveTo(127.6, 47.7, 127.9, 47.6, 128.0, 47.3);
            ctx.bezierCurveTo(128.1, 46.8, 128.1, 46.0, 128.1, 44.7);
            ctx.lineTo(128.1, 40.3);
            ctx.lineTo(127.1, 40.4);
            ctx.lineTo(127.1, 43.3);
            ctx.bezierCurveTo(127.1, 44.8, 127.0, 46.0, 126.8, 46.9);
            ctx.bezierCurveTo(126.6, 47.5, 126.2, 48.3, 125.5, 49.3);
            ctx.bezierCurveTo(125.0, 49.0, 124.7, 48.8, 124.3, 48.7);
            ctx.bezierCurveTo(125.1, 48.3, 125.7, 47.5, 126.0, 46.3);
            ctx.bezierCurveTo(126.2, 45.4, 126.3, 44.2, 126.3, 42.8);
            ctx.lineTo(126.3, 41.4);
            ctx.bezierCurveTo(126.3, 41.3, 126.3, 40.7, 126.2, 39.7);
            ctx.bezierCurveTo(126.4, 39.7, 126.7, 39.7, 127.2, 39.7);
            ctx.lineTo(127.4, 39.7);
            ctx.bezierCurveTo(129.7, 39.3, 131.0, 39.0, 131.5, 38.8);
            ctx.bezierCurveTo(132.0, 39.4, 132.2, 39.8, 132.2, 39.9);
            ctx.bezierCurveTo(132.2, 39.9, 132.0, 39.9, 131.8, 39.9);
            ctx.bezierCurveTo(131.6, 39.9, 131.5, 39.9, 131.4, 39.9);
            ctx.bezierCurveTo(131.1, 39.9, 131.0, 40.0, 130.9, 40.0);
            ctx.bezierCurveTo(130.8, 40.7, 130.8, 41.6, 130.9, 42.9);
            ctx.bezierCurveTo(131.0, 44.2, 131.2, 45.2, 131.4, 45.9);
            ctx.bezierCurveTo(131.6, 46.8, 132.2, 47.6, 133.0, 48.5);
            ctx.bezierCurveTo(132.7, 48.6, 132.4, 48.8, 131.9, 49.1);
            ctx.bezierCurveTo(131.2, 48.1, 130.6, 46.8, 130.3, 45.1);
            ctx.bezierCurveTo(130.1, 43.6, 130.0, 41.9, 130.0, 40.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(140.0, 40.1);
            ctx.lineTo(140.0, 41.9);
            ctx.lineTo(142.3, 41.9);
            ctx.bezierCurveTo(143.4, 41.9, 144.2, 41.8, 144.6, 41.7);
            ctx.lineTo(144.6, 42.9);
            ctx.bezierCurveTo(144.1, 42.9, 143.3, 42.8, 142.3, 42.8);
            ctx.lineTo(140.2, 42.8);
            ctx.bezierCurveTo(140.8, 45.7, 142.4, 47.5, 145.1, 48.1);
            ctx.bezierCurveTo(144.7, 48.3, 144.3, 48.7, 143.9, 49.3);
            ctx.bezierCurveTo(141.5, 47.9, 140.1, 46.2, 139.7, 44.1);
            ctx.bezierCurveTo(139.4, 46.5, 137.9, 48.3, 135.1, 49.4);
            ctx.bezierCurveTo(134.8, 49.1, 134.5, 48.8, 133.9, 48.5);
            ctx.bezierCurveTo(137.0, 47.7, 138.6, 45.8, 139.0, 42.8);
            ctx.lineTo(136.4, 42.8);
            ctx.bezierCurveTo(135.5, 42.8, 134.9, 42.9, 134.5, 42.9);
            ctx.lineTo(134.5, 41.7);
            ctx.bezierCurveTo(134.9, 41.8, 135.5, 41.9, 136.5, 41.9);
            ctx.lineTo(139.0, 41.9);
            ctx.lineTo(139.0, 39.8);
            ctx.bezierCurveTo(139.0, 39.3, 139.0, 39.0, 138.9, 38.7);
            ctx.bezierCurveTo(138.9, 38.7, 138.9, 38.7, 138.9, 38.6);
            ctx.bezierCurveTo(139.8, 38.6, 140.3, 38.6, 140.4, 38.8);
            ctx.bezierCurveTo(140.4, 38.8, 140.3, 38.9, 140.3, 39.0);
            ctx.bezierCurveTo(140.1, 39.3, 140.0, 39.7, 140.0, 40.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(152.2, 38.3);
            ctx.lineTo(152.5, 39.3);
            ctx.lineTo(155.7, 39.3);
            ctx.bezierCurveTo(156.3, 39.3, 156.7, 39.3, 156.8, 39.2);
            ctx.bezierCurveTo(156.8, 39.4, 156.7, 39.7, 156.7, 40.1);
            ctx.bezierCurveTo(156.7, 40.5, 156.8, 40.8, 156.8, 40.9);
            ctx.lineTo(155.7, 40.9);
            ctx.bezierCurveTo(155.8, 40.8, 155.8, 40.4, 155.8, 40.0);
            ctx.lineTo(153.6, 40.0);
            ctx.lineTo(153.6, 40.6);
            ctx.lineTo(154.4, 40.6);
            ctx.bezierCurveTo(154.9, 40.6, 155.3, 40.6, 155.4, 40.5);
            ctx.lineTo(155.4, 41.3);
            ctx.bezierCurveTo(155.3, 41.2, 155.0, 41.2, 154.4, 41.2);
            ctx.lineTo(153.5, 41.2);
            ctx.lineTo(153.5, 41.7);
            ctx.lineTo(154.4, 41.7);
            ctx.bezierCurveTo(155.0, 41.7, 155.4, 41.7, 155.6, 41.6);
            ctx.lineTo(155.6, 42.3);
            ctx.bezierCurveTo(155.5, 42.3, 155.1, 42.2, 154.4, 42.2);
            ctx.lineTo(153.5, 42.2);
            ctx.lineTo(153.5, 42.8);
            ctx.lineTo(155.8, 42.8);
            ctx.bezierCurveTo(156.6, 42.8, 157.0, 42.8, 157.0, 42.8);
            ctx.lineTo(157.0, 43.5);
            ctx.bezierCurveTo(156.8, 43.5, 156.4, 43.4, 155.9, 43.4);
            ctx.lineTo(153.8, 43.4);
            ctx.bezierCurveTo(154.8, 44.2, 156.1, 44.8, 157.5, 45.0);
            ctx.bezierCurveTo(157.2, 45.3, 156.9, 45.6, 156.7, 45.9);
            ctx.bezierCurveTo(156.3, 45.7, 155.8, 45.5, 155.2, 45.1);
            ctx.bezierCurveTo(155.2, 45.3, 155.2, 45.6, 155.2, 45.9);
            ctx.lineTo(155.2, 46.7);
            ctx.bezierCurveTo(155.2, 47.5, 155.2, 48.0, 155.2, 48.0);
            ctx.bezierCurveTo(155.0, 47.9, 154.7, 47.9, 154.1, 47.9);
            ctx.lineTo(150.2, 47.9);
            ctx.bezierCurveTo(150.6, 48.2, 150.8, 48.4, 150.9, 48.5);
            ctx.lineTo(150.7, 48.5);
            ctx.bezierCurveTo(150.6, 48.5, 150.5, 48.5, 150.4, 48.6);
            ctx.bezierCurveTo(150.3, 48.6, 150.1, 48.7, 149.8, 48.8);
            ctx.bezierCurveTo(149.0, 49.1, 148.2, 49.4, 147.5, 49.7);
            ctx.bezierCurveTo(147.3, 49.4, 147.0, 49.1, 146.7, 48.9);
            ctx.bezierCurveTo(147.9, 48.7, 149.0, 48.4, 149.9, 47.9);
            ctx.lineTo(149.3, 47.9);
            ctx.bezierCurveTo(148.9, 47.9, 148.5, 47.9, 148.4, 48.0);
            ctx.bezierCurveTo(148.4, 48.0, 148.4, 47.6, 148.4, 46.8);
            ctx.lineTo(148.4, 45.6);
            ctx.bezierCurveTo(148.4, 45.1, 148.4, 44.9, 148.4, 44.8);
            ctx.bezierCurveTo(148.0, 45.1, 147.4, 45.4, 146.6, 45.7);
            ctx.bezierCurveTo(146.5, 45.5, 146.3, 45.2, 146.0, 44.9);
            ctx.bezierCurveTo(147.3, 44.6, 148.5, 44.1, 149.4, 43.4);
            ctx.lineTo(147.7, 43.4);
            ctx.bezierCurveTo(147.1, 43.4, 146.7, 43.5, 146.5, 43.5);
            ctx.lineTo(146.5, 42.7);
            ctx.bezierCurveTo(146.7, 42.8, 147.1, 42.8, 147.7, 42.8);
            ctx.lineTo(149.9, 42.8);
            ctx.lineTo(149.9, 42.2);
            ctx.lineTo(149.2, 42.2);
            ctx.bezierCurveTo(148.5, 42.2, 148.1, 42.3, 147.9, 42.3);
            ctx.lineTo(147.9, 41.6);
            ctx.bezierCurveTo(148.0, 41.7, 148.5, 41.7, 149.2, 41.7);
            ctx.lineTo(149.9, 41.7);
            ctx.lineTo(149.9, 41.2);
            ctx.lineTo(149.2, 41.2);
            ctx.bezierCurveTo(148.6, 41.2, 148.2, 41.2, 148.1, 41.2);
            ctx.lineTo(148.1, 40.5);
            ctx.bezierCurveTo(148.2, 40.6, 148.6, 40.6, 149.2, 40.6);
            ctx.lineTo(149.9, 40.6);
            ctx.lineTo(149.9, 40.0);
            ctx.lineTo(147.7, 40.0);
            ctx.bezierCurveTo(147.7, 40.6, 147.7, 40.9, 147.7, 40.9);
            ctx.lineTo(146.7, 40.9);
            ctx.lineTo(146.7, 40.9);
            ctx.bezierCurveTo(146.8, 40.7, 146.8, 40.4, 146.8, 40.1);
            ctx.bezierCurveTo(146.8, 39.7, 146.8, 39.5, 146.7, 39.2);
            ctx.bezierCurveTo(146.9, 39.3, 147.2, 39.3, 147.8, 39.3);
            ctx.lineTo(151.4, 39.3);
            ctx.lineTo(151.1, 38.3);
            ctx.lineTo(152.2, 38.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(149.3, 44.7);
            ctx.lineTo(149.3, 45.2);
            ctx.lineTo(154.3, 45.2);
            ctx.lineTo(154.3, 44.7);
            ctx.lineTo(149.3, 44.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(154.3, 45.7);
            ctx.lineTo(149.3, 45.7);
            ctx.lineTo(149.3, 46.2);
            ctx.lineTo(154.3, 46.2);
            ctx.lineTo(154.3, 45.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(154.3, 46.8);
            ctx.lineTo(149.3, 46.8);
            ctx.lineTo(149.3, 47.4);
            ctx.lineTo(154.3, 47.4);
            ctx.lineTo(154.3, 46.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(152.8, 43.4);
            ctx.lineTo(150.6, 43.4);
            ctx.bezierCurveTo(150.2, 43.7, 150.0, 43.9, 149.8, 44.0);
            ctx.bezierCurveTo(150.0, 44.1, 150.2, 44.1, 150.5, 44.1);
            ctx.lineTo(152.5, 44.1);
            ctx.bezierCurveTo(153.1, 44.1, 153.4, 44.1, 153.4, 44.0);
            ctx.lineTo(152.8, 43.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(152.7, 40.0);
            ctx.lineTo(150.8, 40.0);
            ctx.lineTo(150.8, 40.6);
            ctx.lineTo(152.7, 40.6);
            ctx.lineTo(152.7, 40.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(152.7, 41.2);
            ctx.lineTo(150.8, 41.2);
            ctx.lineTo(150.8, 41.7);
            ctx.lineTo(152.7, 41.7);
            ctx.lineTo(152.7, 41.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(152.7, 42.2);
            ctx.lineTo(150.8, 42.2);
            ctx.lineTo(150.8, 42.8);
            ctx.lineTo(152.7, 42.8);
            ctx.lineTo(152.7, 42.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(156.4, 49.0);
            ctx.lineTo(155.8, 49.7);
            ctx.bezierCurveTo(155.1, 49.3, 154.1, 48.9, 152.6, 48.5);
            ctx.lineTo(153.2, 48.0);
            ctx.bezierCurveTo(154.4, 48.3, 155.5, 48.6, 156.4, 49.0);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(164.3, 40.9);
            ctx.lineTo(165.9, 40.9);
            ctx.bezierCurveTo(166.9, 40.9, 167.7, 40.9, 168.4, 40.8);
            ctx.bezierCurveTo(168.4, 41.6, 168.3, 42.3, 168.3, 43.0);
            ctx.lineTo(168.3, 44.3);
            ctx.bezierCurveTo(168.3, 45.2, 168.4, 45.9, 168.4, 46.3);
            ctx.lineTo(167.1, 46.3);
            ctx.bezierCurveTo(167.2, 46.0, 167.2, 45.7, 167.2, 45.5);
            ctx.lineTo(164.3, 45.5);
            ctx.lineTo(164.3, 47.7);
            ctx.bezierCurveTo(164.4, 48.6, 164.4, 49.2, 164.4, 49.5);
            ctx.lineTo(163.2, 49.5);
            ctx.bezierCurveTo(163.3, 49.3, 163.3, 48.7, 163.3, 47.7);
            ctx.lineTo(163.3, 45.5);
            ctx.lineTo(160.4, 45.5);
            ctx.bezierCurveTo(160.4, 45.7, 160.4, 46.0, 160.4, 46.4);
            ctx.lineTo(159.2, 46.4);
            ctx.bezierCurveTo(159.2, 45.9, 159.3, 45.2, 159.3, 44.3);
            ctx.lineTo(159.3, 43.0);
            ctx.bezierCurveTo(159.3, 41.9, 159.3, 41.2, 159.2, 40.8);
            ctx.bezierCurveTo(159.6, 40.9, 160.4, 40.9, 161.6, 40.9);
            ctx.lineTo(163.3, 40.9);
            ctx.bezierCurveTo(163.3, 39.7, 163.3, 38.9, 163.2, 38.5);
            ctx.bezierCurveTo(164.1, 38.6, 164.6, 38.7, 164.6, 38.7);
            ctx.bezierCurveTo(164.6, 38.7, 164.6, 38.8, 164.5, 38.9);
            ctx.bezierCurveTo(164.4, 39.0, 164.4, 39.2, 164.4, 39.4);
            ctx.bezierCurveTo(164.4, 39.9, 164.3, 40.4, 164.3, 40.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(163.3, 41.8);
            ctx.lineTo(160.4, 41.8);
            ctx.lineTo(160.4, 44.7);
            ctx.lineTo(163.3, 44.7);
            ctx.lineTo(163.3, 41.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(164.3, 44.7);
            ctx.lineTo(167.2, 44.7);
            ctx.lineTo(167.2, 41.8);
            ctx.lineTo(164.3, 41.8);
            ctx.lineTo(164.3, 44.7);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(179.3, 39.1);
            ctx.lineTo(179.3, 39.6);
            ctx.lineTo(179.8, 39.6);
            ctx.bezierCurveTo(180.9, 39.6, 181.5, 39.6, 181.6, 39.5);
            ctx.lineTo(181.6, 40.4);
            ctx.bezierCurveTo(181.4, 40.3, 180.8, 40.3, 179.8, 40.3);
            ctx.lineTo(179.3, 40.3);
            ctx.bezierCurveTo(179.3, 40.6, 179.3, 40.8, 179.4, 40.9);
            ctx.lineTo(178.5, 40.9);
            ctx.bezierCurveTo(178.4, 40.9, 178.5, 41.1, 178.8, 41.5);
            ctx.lineTo(179.3, 41.5);
            ctx.bezierCurveTo(180.4, 41.5, 181.1, 41.4, 181.2, 41.4);
            ctx.lineTo(181.2, 42.1);
            ctx.bezierCurveTo(181.0, 42.1, 180.4, 42.0, 179.4, 42.0);
            ctx.lineTo(178.6, 42.0);
            ctx.lineTo(178.6, 42.7);
            ctx.lineTo(179.4, 42.7);
            ctx.bezierCurveTo(180.1, 42.7, 180.7, 42.6, 180.9, 42.6);
            ctx.lineTo(180.9, 43.3);
            ctx.bezierCurveTo(180.7, 43.2, 180.2, 43.2, 179.3, 43.2);
            ctx.lineTo(178.6, 43.2);
            ctx.lineTo(178.6, 43.8);
            ctx.lineTo(179.3, 43.8);
            ctx.bezierCurveTo(180.1, 43.8, 180.6, 43.8, 180.8, 43.7);
            ctx.lineTo(180.8, 44.4);
            ctx.bezierCurveTo(180.6, 44.4, 180.1, 44.3, 179.3, 44.4);
            ctx.lineTo(178.5, 44.4);
            ctx.lineTo(178.5, 45.0);
            ctx.lineTo(179.3, 45.0);
            ctx.bezierCurveTo(180.4, 45.0, 181.1, 45.0, 181.3, 44.9);
            ctx.lineTo(181.3, 45.7);
            ctx.bezierCurveTo(181.1, 45.6, 180.4, 45.6, 179.3, 45.6);
            ctx.lineTo(175.8, 45.6);
            ctx.lineTo(175.8, 46.2);
            ctx.lineTo(178.3, 46.2);
            ctx.bezierCurveTo(179.5, 46.2, 180.2, 46.2, 180.5, 46.1);
            ctx.bezierCurveTo(180.0, 46.9, 179.4, 47.6, 178.6, 48.1);
            ctx.bezierCurveTo(179.9, 48.4, 180.9, 48.6, 181.7, 48.6);
            ctx.bezierCurveTo(181.2, 48.8, 181.0, 49.1, 180.9, 49.6);
            ctx.bezierCurveTo(179.8, 49.3, 178.8, 48.9, 177.8, 48.5);
            ctx.bezierCurveTo(176.9, 48.9, 175.9, 49.3, 174.6, 49.6);
            ctx.lineTo(174.5, 49.5);
            ctx.bezierCurveTo(174.2, 49.2, 174.0, 49.0, 173.8, 48.8);
            ctx.bezierCurveTo(174.9, 48.7, 175.9, 48.5, 177.0, 48.1);
            ctx.bezierCurveTo(176.9, 48.0, 176.8, 47.9, 176.7, 47.8);
            ctx.bezierCurveTo(176.2, 47.4, 175.8, 47.1, 175.6, 46.8);
            ctx.bezierCurveTo(175.0, 46.8, 174.6, 46.9, 174.4, 46.9);
            ctx.lineTo(174.4, 46.1);
            ctx.bezierCurveTo(174.4, 46.2, 174.7, 46.2, 175.0, 46.2);
            ctx.lineTo(175.0, 42.9);
            ctx.bezierCurveTo(174.9, 43.1, 174.7, 43.4, 174.4, 43.8);
            ctx.lineTo(173.7, 43.3);
            ctx.bezierCurveTo(174.8, 42.5, 175.5, 41.5, 175.9, 40.5);
            ctx.lineTo(176.1, 40.6);
            ctx.bezierCurveTo(176.1, 40.6, 176.1, 40.5, 176.1, 40.3);
            ctx.lineTo(175.7, 40.3);
            ctx.bezierCurveTo(174.8, 40.3, 174.3, 40.3, 174.2, 40.4);
            ctx.lineTo(174.2, 39.5);
            ctx.bezierCurveTo(174.1, 39.6, 174.0, 39.7, 173.9, 39.9);
            ctx.bezierCurveTo(173.4, 40.4, 173.1, 40.8, 172.8, 40.9);
            ctx.bezierCurveTo(173.2, 41.7, 173.4, 42.4, 173.5, 42.9);
            ctx.bezierCurveTo(173.7, 44.0, 173.8, 45.4, 173.7, 47.1);
            ctx.lineTo(173.7, 47.2);
            ctx.bezierCurveTo(173.7, 48.2, 173.4, 48.8, 172.8, 48.9);
            ctx.bezierCurveTo(172.6, 49.0, 172.1, 49.1, 171.4, 49.3);
            ctx.bezierCurveTo(171.3, 48.9, 171.2, 48.6, 170.9, 48.3);
            ctx.bezierCurveTo(171.7, 48.3, 172.1, 48.3, 172.3, 48.2);
            ctx.bezierCurveTo(172.6, 48.1, 172.8, 47.3, 172.9, 45.9);
            ctx.bezierCurveTo(172.9, 45.4, 172.9, 44.7, 172.9, 43.9);
            ctx.bezierCurveTo(172.3, 44.7, 171.7, 45.5, 171.0, 46.2);
            ctx.bezierCurveTo(170.7, 45.9, 170.5, 45.7, 170.3, 45.6);
            ctx.bezierCurveTo(171.5, 44.4, 172.3, 43.4, 172.7, 42.7);
            ctx.bezierCurveTo(172.6, 42.5, 172.5, 42.2, 172.4, 41.9);
            ctx.bezierCurveTo(172.3, 41.7, 172.3, 41.6, 172.2, 41.5);
            ctx.bezierCurveTo(172.0, 41.7, 171.7, 42.1, 171.1, 42.7);
            ctx.bezierCurveTo(170.9, 42.5, 170.7, 42.3, 170.3, 42.1);
            ctx.bezierCurveTo(170.7, 41.9, 171.2, 41.5, 171.9, 40.9);
            ctx.bezierCurveTo(171.4, 40.3, 171.0, 39.8, 170.6, 39.6);
            ctx.lineTo(171.3, 39.0);
            ctx.bezierCurveTo(171.3, 39.1, 171.4, 39.2, 171.6, 39.3);
            ctx.bezierCurveTo(172.0, 39.8, 172.3, 40.2, 172.4, 40.4);
            ctx.bezierCurveTo(172.5, 40.3, 172.5, 40.3, 172.6, 40.2);
            ctx.bezierCurveTo(173.1, 39.6, 173.5, 39.1, 173.7, 38.7);
            ctx.bezierCurveTo(174.3, 39.0, 174.6, 39.2, 174.6, 39.2);
            ctx.bezierCurveTo(174.6, 39.3, 174.6, 39.3, 174.4, 39.4);
            ctx.bezierCurveTo(174.3, 39.4, 174.3, 39.5, 174.3, 39.5);
            ctx.bezierCurveTo(174.4, 39.6, 174.8, 39.6, 175.6, 39.6);
            ctx.lineTo(176.1, 39.6);
            ctx.lineTo(176.1, 39.1);
            ctx.bezierCurveTo(176.1, 38.9, 176.1, 38.7, 176.0, 38.5);
            ctx.bezierCurveTo(176.7, 38.5, 177.0, 38.5, 177.0, 38.6);
            ctx.lineTo(177.0, 38.7);
            ctx.bezierCurveTo(176.9, 38.9, 176.9, 39.0, 176.9, 39.1);
            ctx.lineTo(176.9, 39.6);
            ctx.lineTo(178.5, 39.6);
            ctx.lineTo(178.5, 39.2);
            ctx.bezierCurveTo(178.5, 38.8, 178.5, 38.6, 178.5, 38.5);
            ctx.bezierCurveTo(178.8, 38.4, 179.1, 38.5, 179.5, 38.6);
            ctx.bezierCurveTo(179.5, 38.6, 179.4, 38.7, 179.4, 38.7);
            ctx.bezierCurveTo(179.4, 38.9, 179.3, 39.0, 179.3, 39.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(175.9, 42.0);
            ctx.lineTo(175.9, 42.7);
            ctx.lineTo(177.8, 42.7);
            ctx.lineTo(177.8, 42.0);
            ctx.lineTo(175.9, 42.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(175.9, 43.2);
            ctx.lineTo(175.9, 43.8);
            ctx.lineTo(177.8, 43.8);
            ctx.lineTo(177.8, 43.2);
            ctx.lineTo(175.9, 43.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(177.8, 44.4);
            ctx.lineTo(175.9, 44.4);
            ctx.lineTo(175.9, 45.0);
            ctx.lineTo(177.8, 45.0);
            ctx.lineTo(177.8, 44.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(177.0, 40.8);
            ctx.lineTo(176.5, 40.8);
            ctx.bezierCurveTo(176.7, 40.9, 176.8, 41.0, 176.8, 41.0);
            ctx.bezierCurveTo(176.8, 41.0, 176.8, 41.1, 176.7, 41.1);
            ctx.bezierCurveTo(176.5, 41.2, 176.3, 41.3, 176.1, 41.5);
            ctx.lineTo(177.9, 41.5);
            ctx.bezierCurveTo(177.8, 41.3, 177.6, 41.0, 177.5, 40.8);
            ctx.lineTo(178.3, 40.6);
            ctx.lineTo(178.4, 40.8);
            ctx.bezierCurveTo(178.5, 40.7, 178.5, 40.6, 178.5, 40.3);
            ctx.lineTo(176.9, 40.3);
            ctx.bezierCurveTo(176.9, 40.6, 177.0, 40.7, 177.0, 40.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(178.8, 46.8);
            ctx.lineTo(176.5, 46.8);
            ctx.bezierCurveTo(176.5, 46.8, 176.6, 46.9, 176.9, 47.1);
            ctx.bezierCurveTo(177.3, 47.4, 177.6, 47.6, 177.8, 47.8);
            ctx.bezierCurveTo(178.5, 47.2, 178.8, 46.9, 178.8, 46.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(185.7, 47.7);
            ctx.lineTo(185.7, 45.2);
            ctx.lineTo(184.4, 45.2);
            ctx.bezierCurveTo(184.4, 46.8, 184.0, 48.2, 183.3, 49.4);
            ctx.bezierCurveTo(183.0, 49.2, 182.8, 49.1, 182.6, 49.0);
            ctx.bezierCurveTo(182.5, 49.0, 182.4, 49.0, 182.4, 49.0);
            ctx.bezierCurveTo(183.0, 48.3, 183.3, 47.3, 183.4, 46.1);
            ctx.bezierCurveTo(183.5, 45.0, 183.6, 42.7, 183.5, 39.0);
            ctx.bezierCurveTo(183.8, 39.1, 184.2, 39.1, 184.7, 39.1);
            ctx.lineTo(185.6, 39.1);
            ctx.bezierCurveTo(186.2, 39.1, 186.5, 39.1, 186.6, 39.1);
            ctx.bezierCurveTo(186.6, 39.3, 186.6, 39.7, 186.6, 40.4);
            ctx.lineTo(186.6, 48.2);
            ctx.bezierCurveTo(186.7, 48.8, 186.2, 49.2, 184.9, 49.3);
            ctx.bezierCurveTo(184.9, 48.8, 184.7, 48.4, 184.4, 48.2);
            ctx.bezierCurveTo(185.4, 48.4, 185.8, 48.2, 185.7, 47.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(184.4, 42.6);
            ctx.lineTo(184.4, 44.5);
            ctx.lineTo(185.7, 44.5);
            ctx.lineTo(185.7, 42.6);
            ctx.lineTo(184.4, 42.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(184.5, 39.9);
            ctx.lineTo(184.5, 41.9);
            ctx.lineTo(185.7, 41.9);
            ctx.lineTo(185.7, 39.9);
            ctx.lineTo(184.5, 39.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(190.3, 41.0);
            ctx.lineTo(192.0, 41.0);
            ctx.bezierCurveTo(192.7, 41.0, 193.1, 41.0, 193.3, 41.0);
            ctx.lineTo(193.3, 41.9);
            ctx.bezierCurveTo(193.1, 41.8, 192.7, 41.8, 192.0, 41.8);
            ctx.lineTo(190.2, 41.8);
            ctx.bezierCurveTo(190.1, 42.0, 190.0, 42.3, 189.8, 42.6);
            ctx.lineTo(192.1, 42.6);
            ctx.bezierCurveTo(192.9, 42.6, 193.4, 42.6, 193.5, 42.5);
            ctx.lineTo(193.5, 43.4);
            ctx.bezierCurveTo(193.3, 43.3, 192.8, 43.3, 192.1, 43.3);
            ctx.lineTo(191.5, 43.3);
            ctx.bezierCurveTo(192.2, 44.2, 193.1, 44.8, 194.1, 45.0);
            ctx.bezierCurveTo(193.8, 45.2, 193.5, 45.5, 193.2, 45.9);
            ctx.bezierCurveTo(192.8, 45.7, 192.6, 45.6, 192.5, 45.5);
            ctx.bezierCurveTo(192.4, 45.9, 192.4, 46.7, 192.3, 47.8);
            ctx.lineTo(192.3, 48.3);
            ctx.bezierCurveTo(192.3, 49.0, 191.7, 49.3, 190.5, 49.4);
            ctx.bezierCurveTo(190.3, 48.9, 190.1, 48.5, 189.9, 48.3);
            ctx.bezierCurveTo(190.9, 48.4, 191.4, 48.3, 191.4, 47.8);
            ctx.bezierCurveTo(191.5, 47.5, 191.5, 46.9, 191.5, 46.2);
            ctx.lineTo(190.0, 46.2);
            ctx.bezierCurveTo(189.6, 47.8, 188.8, 48.9, 187.4, 49.5);
            ctx.bezierCurveTo(187.2, 49.2, 186.9, 49.0, 186.5, 48.8);
            ctx.bezierCurveTo(188.0, 48.3, 188.9, 47.4, 189.2, 46.2);
            ctx.bezierCurveTo(188.4, 46.2, 187.9, 46.2, 187.6, 46.2);
            ctx.lineTo(187.6, 45.5);
            ctx.lineTo(187.2, 45.8);
            ctx.bezierCurveTo(187.1, 45.5, 186.9, 45.3, 186.6, 45.0);
            ctx.bezierCurveTo(187.4, 44.5, 188.1, 44.0, 188.6, 43.3);
            ctx.lineTo(188.3, 43.3);
            ctx.bezierCurveTo(187.7, 43.3, 187.3, 43.3, 187.0, 43.4);
            ctx.lineTo(187.0, 42.5);
            ctx.bezierCurveTo(187.3, 42.6, 187.7, 42.6, 188.3, 42.6);
            ctx.lineTo(189.0, 42.6);
            ctx.bezierCurveTo(189.1, 42.3, 189.2, 42.0, 189.3, 41.8);
            ctx.lineTo(188.6, 41.8);
            ctx.bezierCurveTo(188.0, 41.8, 187.5, 41.8, 187.3, 41.9);
            ctx.lineTo(187.3, 41.0);
            ctx.bezierCurveTo(187.5, 41.0, 187.9, 41.0, 188.6, 41.0);
            ctx.lineTo(189.5, 41.0);
            ctx.bezierCurveTo(189.6, 40.1, 189.6, 39.3, 189.6, 38.5);
            ctx.bezierCurveTo(189.7, 38.6, 189.9, 38.6, 190.2, 38.6);
            ctx.bezierCurveTo(190.6, 38.7, 190.8, 38.7, 190.8, 38.8);
            ctx.bezierCurveTo(190.8, 38.8, 190.8, 38.8, 190.7, 38.9);
            ctx.bezierCurveTo(190.6, 39.1, 190.5, 39.3, 190.5, 39.6);
            ctx.bezierCurveTo(190.5, 39.9, 190.4, 40.4, 190.3, 41.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(189.1, 40.5);
            ctx.lineTo(188.2, 40.9);
            ctx.bezierCurveTo(187.9, 40.2, 187.6, 39.7, 187.4, 39.4);
            ctx.lineTo(188.2, 39.0);
            ctx.bezierCurveTo(188.6, 39.6, 188.9, 40.0, 189.1, 40.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(190.7, 43.3);
            ctx.lineTo(189.5, 43.3);
            ctx.bezierCurveTo(189.2, 43.8, 188.6, 44.5, 187.7, 45.4);
            ctx.bezierCurveTo(188.0, 45.4, 188.5, 45.4, 189.3, 45.4);
            ctx.bezierCurveTo(189.3, 45.4, 189.3, 45.3, 189.3, 45.0);
            ctx.bezierCurveTo(189.3, 45.2, 189.3, 45.0, 189.3, 44.2);
            ctx.bezierCurveTo(189.9, 44.2, 190.2, 44.3, 190.4, 44.3);
            ctx.bezierCurveTo(190.4, 44.4, 190.3, 44.4, 190.3, 44.5);
            ctx.bezierCurveTo(190.2, 44.8, 190.2, 45.1, 190.1, 45.4);
            ctx.bezierCurveTo(191.1, 45.4, 191.8, 45.4, 192.3, 45.4);
            ctx.bezierCurveTo(191.6, 44.8, 191.1, 44.1, 190.7, 43.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(191.9, 39.0);
            ctx.bezierCurveTo(192.6, 39.3, 192.9, 39.5, 192.9, 39.5);
            ctx.lineTo(192.8, 39.6);
            ctx.bezierCurveTo(192.6, 39.7, 192.5, 39.8, 192.5, 39.9);
            ctx.bezierCurveTo(192.4, 40.0, 192.2, 40.1, 192.1, 40.3);
            ctx.bezierCurveTo(191.9, 40.6, 191.7, 40.8, 191.6, 40.9);
            ctx.bezierCurveTo(191.4, 40.6, 191.1, 40.5, 190.8, 40.4);
            ctx.bezierCurveTo(191.2, 40.0, 191.6, 39.5, 191.9, 39.0);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(202.2, 40.9);
            ctx.lineTo(204.0, 40.9);
            ctx.lineTo(205.6, 40.8);
            ctx.bezierCurveTo(205.3, 44.9, 205.2, 47.4, 205.1, 48.1);
            ctx.bezierCurveTo(205.0, 49.0, 204.1, 49.5, 202.5, 49.5);
            ctx.bezierCurveTo(202.4, 49.0, 202.2, 48.6, 201.9, 48.3);
            ctx.bezierCurveTo(202.8, 48.5, 203.4, 48.5, 203.9, 48.3);
            ctx.bezierCurveTo(204.1, 48.3, 204.2, 46.9, 204.3, 44.0);
            ctx.bezierCurveTo(204.4, 43.0, 204.5, 42.2, 204.5, 41.6);
            ctx.lineTo(201.9, 41.6);
            ctx.bezierCurveTo(201.6, 42.2, 201.2, 42.9, 200.7, 43.7);
            ctx.bezierCurveTo(200.4, 43.5, 200.2, 43.3, 199.9, 43.3);
            ctx.lineTo(199.9, 47.6);
            ctx.bezierCurveTo(199.9, 48.4, 199.9, 48.9, 199.9, 49.1);
            ctx.lineTo(198.8, 49.1);
            ctx.bezierCurveTo(198.9, 48.8, 198.9, 48.4, 198.9, 47.9);
            ctx.lineTo(196.5, 47.9);
            ctx.bezierCurveTo(196.5, 48.4, 196.6, 48.8, 196.6, 49.2);
            ctx.lineTo(195.5, 49.2);
            ctx.bezierCurveTo(195.5, 48.9, 195.5, 48.4, 195.5, 47.7);
            ctx.lineTo(195.5, 42.5);
            ctx.bezierCurveTo(195.5, 42.4, 195.5, 42.1, 195.5, 41.6);
            ctx.bezierCurveTo(195.5, 41.2, 195.5, 40.9, 195.5, 40.9);
            ctx.bezierCurveTo(196.0, 40.9, 196.3, 40.9, 196.5, 40.9);
            ctx.lineTo(196.9, 40.9);
            ctx.bezierCurveTo(197.0, 40.3, 197.1, 39.6, 197.1, 38.6);
            ctx.bezierCurveTo(198.0, 38.7, 198.4, 38.8, 198.4, 39.0);
            ctx.bezierCurveTo(198.4, 39.0, 198.3, 39.1, 198.3, 39.1);
            ctx.bezierCurveTo(198.2, 39.2, 198.1, 39.3, 198.1, 39.4);
            ctx.bezierCurveTo(198.0, 39.6, 197.9, 39.9, 197.8, 40.3);
            ctx.bezierCurveTo(197.8, 40.6, 197.7, 40.7, 197.7, 40.9);
            ctx.lineTo(198.5, 40.9);
            ctx.bezierCurveTo(198.7, 40.9, 199.2, 40.9, 199.9, 40.9);
            ctx.bezierCurveTo(199.9, 41.1, 199.9, 41.6, 199.9, 42.4);
            ctx.lineTo(199.9, 43.1);
            ctx.bezierCurveTo(200.9, 41.9, 201.5, 40.4, 201.9, 38.5);
            ctx.bezierCurveTo(202.8, 38.7, 203.2, 38.9, 203.2, 39.0);
            ctx.bezierCurveTo(203.2, 39.0, 203.2, 39.1, 203.1, 39.1);
            ctx.bezierCurveTo(203.0, 39.2, 202.9, 39.2, 202.9, 39.3);
            ctx.bezierCurveTo(202.6, 40.0, 202.3, 40.5, 202.2, 40.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(196.5, 41.7);
            ctx.lineTo(196.5, 44.1);
            ctx.lineTo(198.9, 44.1);
            ctx.lineTo(198.9, 41.7);
            ctx.lineTo(196.5, 41.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(196.5, 44.8);
            ctx.lineTo(196.5, 47.2);
            ctx.lineTo(198.9, 47.2);
            ctx.lineTo(198.9, 44.8);
            ctx.lineTo(196.5, 44.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(203.2, 45.8);
            ctx.lineTo(202.3, 46.3);
            ctx.bezierCurveTo(202.1, 45.8, 201.7, 45.1, 201.1, 44.1);
            ctx.lineTo(201.9, 43.7);
            ctx.bezierCurveTo(202.1, 43.9, 202.4, 44.5, 202.9, 45.4);
            ctx.bezierCurveTo(203.0, 45.6, 203.1, 45.8, 203.2, 45.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(17.1, 56.0);
            ctx.lineTo(17.1, 57.0);
            ctx.bezierCurveTo(16.8, 57.0, 16.3, 57.0, 15.5, 56.9);
            ctx.lineTo(13.9, 56.9);
            ctx.bezierCurveTo(13.1, 56.9, 12.6, 57.0, 12.3, 57.0);
            ctx.lineTo(12.3, 56.0);
            ctx.bezierCurveTo(12.8, 56.1, 13.4, 56.1, 13.9, 56.1);
            ctx.lineTo(15.5, 56.1);
            ctx.bezierCurveTo(16.3, 56.1, 16.8, 56.1, 17.1, 56.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.7, 59.3);
            ctx.lineTo(16.7, 60.3);
            ctx.bezierCurveTo(16.6, 60.2, 16.2, 60.2, 15.5, 60.2);
            ctx.lineTo(14.0, 60.2);
            ctx.bezierCurveTo(13.4, 60.2, 13.0, 60.2, 12.7, 60.3);
            ctx.lineTo(12.7, 59.3);
            ctx.bezierCurveTo(12.9, 59.4, 13.4, 59.4, 14.0, 59.4);
            ctx.lineTo(15.5, 59.4);
            ctx.bezierCurveTo(15.9, 59.4, 16.3, 59.4, 16.7, 59.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.7, 57.8);
            ctx.lineTo(16.7, 58.7);
            ctx.lineTo(15.6, 58.6);
            ctx.lineTo(14.0, 58.6);
            ctx.lineTo(12.7, 58.7);
            ctx.lineTo(12.7, 57.8);
            ctx.lineTo(14.0, 57.8);
            ctx.lineTo(15.6, 57.8);
            ctx.lineTo(16.7, 57.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.6, 65.2);
            ctx.lineTo(15.6, 65.2);
            ctx.bezierCurveTo(15.6, 65.1, 15.7, 64.8, 15.7, 64.4);
            ctx.lineTo(13.9, 64.4);
            ctx.bezierCurveTo(13.9, 65.0, 13.9, 65.4, 13.9, 65.6);
            ctx.lineTo(12.9, 65.6);
            ctx.bezierCurveTo(12.9, 65.4, 12.9, 65.0, 12.9, 64.4);
            ctx.lineTo(12.9, 62.3);
            ctx.bezierCurveTo(12.9, 61.7, 12.9, 61.3, 12.9, 61.0);
            ctx.bezierCurveTo(13.1, 61.1, 13.6, 61.1, 14.2, 61.1);
            ctx.lineTo(15.3, 61.1);
            ctx.bezierCurveTo(16.0, 61.1, 16.4, 61.1, 16.6, 61.0);
            ctx.bezierCurveTo(16.6, 61.2, 16.6, 61.7, 16.6, 62.3);
            ctx.lineTo(16.6, 64.4);
            ctx.bezierCurveTo(16.6, 64.8, 16.6, 65.1, 16.6, 65.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(13.8, 61.9);
            ctx.lineTo(13.8, 63.8);
            ctx.lineTo(15.7, 63.8);
            ctx.lineTo(15.7, 61.9);
            ctx.lineTo(13.8, 61.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(15.5, 55.8);
            ctx.lineTo(14.6, 56.0);
            ctx.bezierCurveTo(14.4, 55.5, 14.2, 55.1, 13.9, 54.6);
            ctx.lineTo(14.8, 54.3);
            ctx.bezierCurveTo(15.1, 54.8, 15.3, 55.3, 15.5, 55.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(20.6, 56.0);
            ctx.lineTo(20.6, 57.9);
            ctx.lineTo(22.4, 57.9);
            ctx.bezierCurveTo(22.6, 57.9, 23.0, 57.9, 23.4, 57.9);
            ctx.lineTo(23.4, 58.8);
            ctx.bezierCurveTo(23.4, 58.8, 23.2, 58.8, 23.0, 58.8);
            ctx.bezierCurveTo(22.7, 58.8, 22.5, 58.8, 22.4, 58.8);
            ctx.lineTo(20.6, 58.8);
            ctx.lineTo(20.6, 60.6);
            ctx.lineTo(21.2, 60.6);
            ctx.bezierCurveTo(21.9, 60.6, 22.3, 60.5, 22.6, 60.5);
            ctx.bezierCurveTo(22.6, 60.8, 22.5, 61.3, 22.5, 61.9);
            ctx.lineTo(22.5, 63.9);
            ctx.bezierCurveTo(22.5, 64.5, 22.5, 65.0, 22.6, 65.6);
            ctx.lineTo(21.5, 65.6);
            ctx.bezierCurveTo(21.5, 65.4, 21.6, 65.1, 21.6, 64.6);
            ctx.lineTo(18.6, 64.6);
            ctx.bezierCurveTo(18.6, 65.0, 18.7, 65.4, 18.7, 65.6);
            ctx.lineTo(17.6, 65.6);
            ctx.bezierCurveTo(17.7, 65.2, 17.7, 64.6, 17.7, 63.8);
            ctx.lineTo(17.7, 62.0);
            ctx.bezierCurveTo(17.7, 61.3, 17.7, 60.8, 17.6, 60.5);
            ctx.bezierCurveTo(17.9, 60.5, 18.4, 60.6, 19.1, 60.6);
            ctx.lineTo(19.6, 60.6);
            ctx.lineTo(19.6, 58.8);
            ctx.lineTo(18.2, 58.8);
            ctx.bezierCurveTo(18.1, 58.8, 17.9, 58.8, 17.6, 58.8);
            ctx.bezierCurveTo(17.3, 58.8, 17.1, 58.8, 17.0, 58.8);
            ctx.lineTo(17.0, 57.9);
            ctx.bezierCurveTo(17.5, 57.9, 18.0, 57.9, 18.2, 57.9);
            ctx.lineTo(19.6, 57.9);
            ctx.lineTo(19.6, 56.2);
            ctx.bezierCurveTo(19.2, 56.2, 18.5, 56.3, 17.7, 56.5);
            ctx.bezierCurveTo(17.6, 56.2, 17.5, 55.9, 17.2, 55.5);
            ctx.bezierCurveTo(18.8, 55.5, 20.5, 55.3, 22.3, 54.8);
            ctx.bezierCurveTo(22.8, 55.3, 23.1, 55.7, 23.0, 55.8);
            ctx.bezierCurveTo(22.9, 55.8, 22.9, 55.8, 22.8, 55.8);
            ctx.bezierCurveTo(22.1, 55.8, 21.4, 55.9, 20.6, 56.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(18.6, 61.4);
            ctx.lineTo(18.6, 63.9);
            ctx.lineTo(21.6, 63.9);
            ctx.lineTo(21.6, 61.4);
            ctx.lineTo(18.6, 61.4);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(31.0, 58.1);
            ctx.lineTo(31.0, 60.1);
            ctx.bezierCurveTo(30.7, 61.2, 30.2, 61.8, 29.3, 61.8);
            ctx.lineTo(29.3, 61.0);
            ctx.bezierCurveTo(29.7, 60.9, 29.9, 60.6, 29.9, 60.1);
            ctx.lineTo(29.2, 60.1);
            ctx.lineTo(29.2, 58.1);
            ctx.lineTo(31.0, 58.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(37.9, 61.6);
            ctx.lineTo(38.8, 62.0);
            ctx.bezierCurveTo(38.3, 62.9, 37.8, 63.7, 37.3, 64.3);
            ctx.bezierCurveTo(37.0, 64.2, 36.7, 64.0, 36.4, 63.9);
            ctx.bezierCurveTo(36.8, 63.4, 37.3, 62.6, 37.9, 61.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(40.5, 56.1);
            ctx.lineTo(39.8, 56.5);
            ctx.lineTo(40.8, 56.5);
            ctx.bezierCurveTo(41.3, 56.5, 41.9, 56.4, 42.5, 56.4);
            ctx.lineTo(42.5, 57.5);
            ctx.bezierCurveTo(42.2, 57.4, 41.6, 57.4, 40.8, 57.4);
            ctx.lineTo(38.6, 57.4);
            ctx.bezierCurveTo(37.8, 57.4, 37.3, 57.4, 36.8, 57.5);
            ctx.lineTo(36.8, 56.4);
            ctx.bezierCurveTo(37.1, 56.4, 37.7, 56.5, 38.5, 56.5);
            ctx.lineTo(39.5, 56.5);
            ctx.bezierCurveTo(39.3, 56.1, 39.1, 55.6, 38.7, 55.1);
            ctx.lineTo(39.8, 54.7);
            ctx.bezierCurveTo(40.0, 55.2, 40.3, 55.7, 40.5, 56.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(38.6, 58.2);
            ctx.lineTo(40.7, 58.2);
            ctx.bezierCurveTo(41.0, 58.2, 41.4, 58.2, 41.9, 58.1);
            ctx.bezierCurveTo(41.8, 58.4, 41.8, 58.7, 41.8, 58.9);
            ctx.lineTo(41.8, 60.2);
            ctx.bezierCurveTo(41.8, 60.5, 41.8, 60.7, 41.9, 61.1);
            ctx.bezierCurveTo(41.6, 61.0, 41.2, 61.0, 40.9, 61.0);
            ctx.lineTo(40.1, 61.0);
            ctx.lineTo(40.1, 64.5);
            ctx.bezierCurveTo(40.1, 65.0, 39.6, 65.2, 38.5, 65.3);
            ctx.bezierCurveTo(38.4, 64.9, 38.3, 64.5, 38.0, 64.3);
            ctx.bezierCurveTo(38.7, 64.3, 39.2, 64.3, 39.3, 64.2);
            ctx.lineTo(39.3, 61.0);
            ctx.lineTo(38.5, 61.0);
            ctx.bezierCurveTo(38.2, 61.0, 37.8, 61.0, 37.4, 61.1);
            ctx.bezierCurveTo(37.5, 60.7, 37.5, 60.5, 37.5, 60.2);
            ctx.lineTo(37.5, 59.0);
            ctx.bezierCurveTo(37.5, 58.8, 37.5, 58.5, 37.5, 58.1);
            ctx.bezierCurveTo(37.9, 58.2, 38.3, 58.2, 38.6, 58.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(38.4, 58.9);
            ctx.lineTo(38.4, 60.3);
            ctx.lineTo(40.9, 60.3);
            ctx.lineTo(40.9, 58.9);
            ctx.lineTo(38.4, 58.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(44.2, 57.9);
            ctx.lineTo(45.8, 57.9);
            ctx.bezierCurveTo(46.3, 57.9, 46.9, 57.9, 47.5, 57.9);
            ctx.lineTo(47.5, 58.9);
            ctx.bezierCurveTo(46.9, 58.8, 46.3, 58.8, 45.8, 58.8);
            ctx.lineTo(45.6, 58.8);
            ctx.lineTo(45.6, 64.0);
            ctx.bezierCurveTo(45.9, 64.3, 46.3, 64.3, 46.7, 63.9);
            ctx.bezierCurveTo(46.7, 63.8, 46.7, 63.6, 46.8, 63.4);
            ctx.bezierCurveTo(46.8, 63.2, 46.8, 63.1, 46.8, 62.9);
            ctx.bezierCurveTo(47.2, 63.2, 47.5, 63.4, 47.8, 63.5);
            ctx.bezierCurveTo(47.6, 64.4, 47.4, 64.9, 47.1, 65.0);
            ctx.bezierCurveTo(46.8, 65.1, 46.2, 65.1, 45.4, 65.1);
            ctx.bezierCurveTo(44.8, 65.1, 44.6, 64.8, 44.7, 64.3);
            ctx.lineTo(44.7, 58.8);
            ctx.lineTo(44.2, 58.8);
            ctx.bezierCurveTo(44.0, 61.9, 43.2, 64.1, 41.7, 65.4);
            ctx.bezierCurveTo(41.4, 65.1, 41.0, 64.9, 40.6, 64.8);
            ctx.bezierCurveTo(41.3, 64.4, 41.8, 63.8, 42.2, 63.2);
            ctx.lineTo(41.3, 63.5);
            ctx.bezierCurveTo(41.1, 62.8, 40.9, 62.3, 40.6, 61.9);
            ctx.lineTo(41.4, 61.6);
            ctx.bezierCurveTo(41.5, 61.7, 41.7, 62.0, 41.9, 62.4);
            ctx.bezierCurveTo(42.1, 62.7, 42.2, 62.9, 42.3, 63.0);
            ctx.bezierCurveTo(42.9, 62.2, 43.2, 60.8, 43.3, 58.8);
            ctx.bezierCurveTo(42.9, 58.8, 42.5, 58.8, 42.1, 58.8);
            ctx.lineTo(42.1, 57.9);
            ctx.bezierCurveTo(42.5, 57.9, 42.9, 57.9, 43.4, 57.9);
            ctx.bezierCurveTo(43.4, 57.8, 43.4, 57.6, 43.4, 57.3);
            ctx.bezierCurveTo(43.4, 56.0, 43.4, 55.1, 43.3, 54.7);
            ctx.bezierCurveTo(44.2, 54.7, 44.6, 54.7, 44.6, 54.9);
            ctx.bezierCurveTo(44.6, 54.9, 44.6, 55.0, 44.6, 55.1);
            ctx.bezierCurveTo(44.5, 55.3, 44.4, 55.5, 44.4, 55.7);
            ctx.bezierCurveTo(44.3, 55.8, 44.3, 56.2, 44.3, 56.9);
            ctx.bezierCurveTo(44.2, 57.4, 44.2, 57.8, 44.2, 57.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(47.0, 57.2);
            ctx.lineTo(45.9, 57.6);
            ctx.bezierCurveTo(45.7, 57.0, 45.4, 56.5, 44.9, 55.9);
            ctx.lineTo(45.8, 55.5);
            ctx.bezierCurveTo(46.1, 55.8, 46.5, 56.4, 47.0, 57.2);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(51.1, 55.2);
            ctx.lineTo(58.2, 55.2);
            ctx.bezierCurveTo(58.3, 55.2, 58.6, 55.2, 59.1, 55.2);
            ctx.bezierCurveTo(59.5, 55.2, 59.8, 55.1, 59.9, 55.1);
            ctx.lineTo(59.9, 56.2);
            ctx.bezierCurveTo(59.4, 56.2, 58.8, 56.1, 58.2, 56.1);
            ctx.lineTo(57.7, 56.1);
            ctx.lineTo(57.7, 64.4);
            ctx.bezierCurveTo(57.6, 65.0, 56.9, 65.3, 55.5, 65.2);
            ctx.bezierCurveTo(55.5, 64.8, 55.3, 64.4, 55.0, 64.0);
            ctx.bezierCurveTo(56.1, 64.2, 56.7, 64.1, 56.6, 63.8);
            ctx.lineTo(56.6, 56.1);
            ctx.lineTo(51.1, 56.1);
            ctx.bezierCurveTo(49.9, 56.1, 49.1, 56.2, 48.8, 56.2);
            ctx.lineTo(48.8, 55.1);
            ctx.bezierCurveTo(49.0, 55.1, 49.3, 55.2, 49.9, 55.2);
            ctx.bezierCurveTo(50.5, 55.2, 50.9, 55.2, 51.1, 55.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(51.6, 57.6);
            ctx.lineTo(53.7, 57.6);
            ctx.bezierCurveTo(54.1, 57.6, 54.6, 57.6, 54.9, 57.6);
            ctx.bezierCurveTo(54.9, 58.0, 54.9, 58.3, 54.9, 58.6);
            ctx.lineTo(54.9, 61.8);
            ctx.bezierCurveTo(54.9, 62.2, 54.9, 62.5, 54.9, 62.8);
            ctx.lineTo(53.7, 62.8);
            ctx.bezierCurveTo(53.8, 62.4, 53.8, 62.1, 53.8, 61.7);
            ctx.lineTo(51.6, 61.7);
            ctx.lineTo(51.6, 62.1);
            ctx.bezierCurveTo(51.6, 62.6, 51.6, 63.0, 51.7, 63.3);
            ctx.lineTo(50.4, 63.3);
            ctx.bezierCurveTo(50.4, 63.0, 50.5, 62.7, 50.5, 62.3);
            ctx.lineTo(50.5, 58.6);
            ctx.bezierCurveTo(50.5, 58.3, 50.5, 57.9, 50.4, 57.6);
            ctx.bezierCurveTo(50.9, 57.6, 51.2, 57.6, 51.6, 57.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(51.6, 58.5);
            ctx.lineTo(51.6, 60.8);
            ctx.lineTo(53.8, 60.8);
            ctx.lineTo(53.8, 58.5);
            ctx.lineTo(51.6, 58.5);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(62.4, 64.6);
            ctx.lineTo(61.5, 63.6);
            ctx.bezierCurveTo(61.5, 63.5, 61.6, 63.5, 61.6, 63.5);
            ctx.bezierCurveTo(61.8, 63.2, 62.0, 62.9, 61.9, 62.6);
            ctx.bezierCurveTo(61.9, 62.6, 61.9, 61.6, 62.0, 59.6);
            ctx.lineTo(62.0, 56.5);
            ctx.bezierCurveTo(62.1, 56.2, 62.0, 55.8, 61.9, 55.3);
            ctx.bezierCurveTo(62.8, 55.4, 63.2, 55.5, 63.3, 55.6);
            ctx.bezierCurveTo(63.3, 55.6, 63.2, 55.7, 63.2, 55.9);
            ctx.bezierCurveTo(63.1, 56.1, 63.1, 56.2, 63.1, 56.3);
            ctx.bezierCurveTo(63.0, 56.9, 63.0, 57.9, 63.0, 59.4);
            ctx.bezierCurveTo(62.9, 60.8, 62.9, 61.8, 62.9, 62.5);
            ctx.bezierCurveTo(63.3, 62.1, 63.8, 61.5, 64.4, 60.8);
            ctx.bezierCurveTo(64.6, 60.5, 64.8, 60.4, 64.9, 60.2);
            ctx.bezierCurveTo(65.0, 60.6, 65.2, 61.0, 65.5, 61.2);
            ctx.bezierCurveTo(64.4, 62.2, 63.4, 63.3, 62.4, 64.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(71.8, 63.9);
            ctx.lineTo(70.8, 64.8);
            ctx.bezierCurveTo(70.7, 64.7, 70.7, 64.6, 70.6, 64.5);
            ctx.bezierCurveTo(70.6, 64.4, 70.5, 64.4, 70.5, 64.3);
            ctx.bezierCurveTo(70.5, 64.3, 70.4, 64.2, 70.1, 63.9);
            ctx.bezierCurveTo(69.4, 63.1, 69.0, 62.6, 68.8, 62.4);
            ctx.bezierCurveTo(67.9, 63.7, 66.5, 64.6, 64.6, 65.3);
            ctx.bezierCurveTo(64.4, 64.9, 64.0, 64.6, 63.6, 64.3);
            ctx.bezierCurveTo(65.7, 63.9, 67.2, 63.1, 68.1, 61.7);
            ctx.bezierCurveTo(68.7, 60.6, 69.1, 58.5, 69.1, 55.3);
            ctx.bezierCurveTo(69.1, 55.2, 69.1, 55.0, 69.1, 54.9);
            ctx.bezierCurveTo(69.0, 54.8, 69.0, 54.8, 69.0, 54.8);
            ctx.bezierCurveTo(70.1, 54.9, 70.6, 55.0, 70.5, 55.1);
            ctx.bezierCurveTo(70.5, 55.2, 70.5, 55.2, 70.4, 55.3);
            ctx.bezierCurveTo(70.3, 55.5, 70.3, 55.7, 70.3, 55.9);
            ctx.bezierCurveTo(70.1, 58.6, 69.7, 60.5, 69.3, 61.7);
            ctx.bezierCurveTo(70.7, 62.9, 71.6, 63.7, 71.8, 63.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(67.4, 58.4);
            ctx.lineTo(66.4, 59.1);
            ctx.bezierCurveTo(65.8, 58.1, 65.1, 57.3, 64.4, 56.7);
            ctx.lineTo(65.3, 55.9);
            ctx.bezierCurveTo(66.0, 56.6, 66.7, 57.4, 67.4, 58.4);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(81.9, 55.1);
            ctx.lineTo(81.9, 55.6);
            ctx.lineTo(82.4, 55.6);
            ctx.bezierCurveTo(83.5, 55.6, 84.1, 55.6, 84.2, 55.5);
            ctx.lineTo(84.2, 56.4);
            ctx.bezierCurveTo(84.0, 56.3, 83.4, 56.3, 82.4, 56.3);
            ctx.lineTo(81.9, 56.3);
            ctx.bezierCurveTo(81.9, 56.6, 81.9, 56.8, 82.0, 56.9);
            ctx.lineTo(81.0, 56.9);
            ctx.bezierCurveTo(81.0, 56.9, 81.1, 57.1, 81.4, 57.5);
            ctx.lineTo(81.9, 57.5);
            ctx.bezierCurveTo(83.0, 57.5, 83.6, 57.4, 83.8, 57.4);
            ctx.lineTo(83.8, 58.1);
            ctx.bezierCurveTo(83.6, 58.1, 83.0, 58.0, 82.0, 58.0);
            ctx.lineTo(81.1, 58.0);
            ctx.lineTo(81.1, 58.7);
            ctx.lineTo(82.0, 58.7);
            ctx.bezierCurveTo(82.7, 58.7, 83.2, 58.6, 83.5, 58.6);
            ctx.lineTo(83.5, 59.3);
            ctx.bezierCurveTo(83.3, 59.2, 82.8, 59.2, 81.9, 59.2);
            ctx.lineTo(81.1, 59.2);
            ctx.lineTo(81.1, 59.8);
            ctx.lineTo(81.9, 59.8);
            ctx.bezierCurveTo(82.7, 59.8, 83.2, 59.8, 83.4, 59.7);
            ctx.lineTo(83.4, 60.4);
            ctx.bezierCurveTo(83.2, 60.4, 82.7, 60.3, 81.9, 60.4);
            ctx.lineTo(81.1, 60.4);
            ctx.lineTo(81.1, 61.0);
            ctx.lineTo(81.9, 61.0);
            ctx.bezierCurveTo(83.0, 61.0, 83.7, 61.0, 83.9, 60.9);
            ctx.lineTo(83.9, 61.7);
            ctx.bezierCurveTo(83.6, 61.6, 83.0, 61.6, 81.9, 61.6);
            ctx.lineTo(78.4, 61.6);
            ctx.lineTo(78.4, 62.2);
            ctx.lineTo(80.9, 62.2);
            ctx.bezierCurveTo(82.0, 62.2, 82.8, 62.2, 83.1, 62.1);
            ctx.bezierCurveTo(82.6, 62.9, 81.9, 63.6, 81.1, 64.1);
            ctx.bezierCurveTo(82.5, 64.4, 83.5, 64.6, 84.2, 64.6);
            ctx.bezierCurveTo(83.8, 64.8, 83.6, 65.1, 83.5, 65.6);
            ctx.bezierCurveTo(82.4, 65.3, 81.4, 64.9, 80.4, 64.5);
            ctx.bezierCurveTo(79.5, 64.9, 78.5, 65.3, 77.2, 65.6);
            ctx.lineTo(77.1, 65.5);
            ctx.bezierCurveTo(76.8, 65.2, 76.6, 65.0, 76.4, 64.8);
            ctx.bezierCurveTo(77.5, 64.7, 78.5, 64.5, 79.6, 64.1);
            ctx.bezierCurveTo(79.5, 64.0, 79.4, 63.9, 79.2, 63.8);
            ctx.bezierCurveTo(78.7, 63.4, 78.4, 63.1, 78.1, 62.8);
            ctx.bezierCurveTo(77.6, 62.8, 77.2, 62.9, 77.0, 62.9);
            ctx.lineTo(77.0, 62.1);
            ctx.bezierCurveTo(77.0, 62.2, 77.2, 62.2, 77.6, 62.2);
            ctx.lineTo(77.6, 58.9);
            ctx.bezierCurveTo(77.5, 59.1, 77.3, 59.4, 77.0, 59.8);
            ctx.lineTo(76.3, 59.3);
            ctx.bezierCurveTo(77.4, 58.5, 78.1, 57.5, 78.4, 56.5);
            ctx.lineTo(78.7, 56.6);
            ctx.bezierCurveTo(78.7, 56.6, 78.7, 56.5, 78.7, 56.3);
            ctx.lineTo(78.2, 56.3);
            ctx.bezierCurveTo(77.4, 56.3, 76.9, 56.3, 76.8, 56.4);
            ctx.lineTo(76.8, 55.5);
            ctx.bezierCurveTo(76.7, 55.6, 76.6, 55.7, 76.5, 55.9);
            ctx.bezierCurveTo(76.0, 56.4, 75.6, 56.8, 75.4, 56.9);
            ctx.bezierCurveTo(75.7, 57.7, 76.0, 58.4, 76.1, 58.9);
            ctx.bezierCurveTo(76.3, 60.0, 76.4, 61.4, 76.3, 63.1);
            ctx.lineTo(76.3, 63.2);
            ctx.bezierCurveTo(76.3, 64.2, 76.0, 64.8, 75.3, 64.9);
            ctx.bezierCurveTo(75.2, 65.0, 74.7, 65.1, 74.0, 65.3);
            ctx.bezierCurveTo(73.9, 64.9, 73.8, 64.6, 73.5, 64.3);
            ctx.bezierCurveTo(74.2, 64.3, 74.7, 64.3, 74.9, 64.2);
            ctx.bezierCurveTo(75.2, 64.1, 75.4, 63.3, 75.5, 61.9);
            ctx.bezierCurveTo(75.5, 61.4, 75.5, 60.7, 75.4, 59.9);
            ctx.bezierCurveTo(74.9, 60.7, 74.2, 61.5, 73.6, 62.2);
            ctx.bezierCurveTo(73.3, 61.9, 73.1, 61.7, 72.9, 61.6);
            ctx.bezierCurveTo(74.1, 60.4, 74.9, 59.4, 75.2, 58.7);
            ctx.bezierCurveTo(75.2, 58.5, 75.1, 58.2, 75.0, 57.9);
            ctx.bezierCurveTo(74.9, 57.7, 74.8, 57.6, 74.8, 57.5);
            ctx.bezierCurveTo(74.6, 57.7, 74.2, 58.1, 73.7, 58.7);
            ctx.bezierCurveTo(73.5, 58.5, 73.3, 58.3, 72.9, 58.1);
            ctx.bezierCurveTo(73.3, 57.9, 73.8, 57.5, 74.4, 56.9);
            ctx.bezierCurveTo(74.0, 56.3, 73.6, 55.8, 73.2, 55.6);
            ctx.lineTo(73.9, 55.0);
            ctx.bezierCurveTo(73.9, 55.1, 74.0, 55.2, 74.2, 55.3);
            ctx.bezierCurveTo(74.6, 55.8, 74.8, 56.2, 75.0, 56.4);
            ctx.bezierCurveTo(75.0, 56.3, 75.1, 56.3, 75.2, 56.2);
            ctx.bezierCurveTo(75.7, 55.6, 76.1, 55.1, 76.2, 54.7);
            ctx.bezierCurveTo(76.9, 55.0, 77.2, 55.2, 77.2, 55.2);
            ctx.bezierCurveTo(77.2, 55.3, 77.1, 55.3, 77.0, 55.4);
            ctx.bezierCurveTo(76.9, 55.4, 76.9, 55.5, 76.9, 55.5);
            ctx.bezierCurveTo(77.0, 55.6, 77.4, 55.6, 78.1, 55.6);
            ctx.lineTo(78.7, 55.6);
            ctx.lineTo(78.7, 55.1);
            ctx.bezierCurveTo(78.7, 54.9, 78.7, 54.7, 78.6, 54.5);
            ctx.bezierCurveTo(79.3, 54.5, 79.6, 54.5, 79.6, 54.6);
            ctx.lineTo(79.6, 54.7);
            ctx.bezierCurveTo(79.5, 54.9, 79.5, 55.0, 79.5, 55.1);
            ctx.lineTo(79.5, 55.6);
            ctx.lineTo(81.1, 55.6);
            ctx.lineTo(81.1, 55.2);
            ctx.bezierCurveTo(81.1, 54.8, 81.1, 54.6, 81.0, 54.5);
            ctx.bezierCurveTo(81.4, 54.4, 81.7, 54.5, 82.0, 54.6);
            ctx.bezierCurveTo(82.0, 54.6, 82.0, 54.7, 82.0, 54.7);
            ctx.bezierCurveTo(81.9, 54.9, 81.9, 55.0, 81.9, 55.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(78.4, 58.0);
            ctx.lineTo(78.4, 58.7);
            ctx.lineTo(80.4, 58.7);
            ctx.lineTo(80.4, 58.0);
            ctx.lineTo(78.4, 58.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(78.4, 59.2);
            ctx.lineTo(78.4, 59.8);
            ctx.lineTo(80.4, 59.8);
            ctx.lineTo(80.4, 59.2);
            ctx.lineTo(78.4, 59.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(80.4, 60.4);
            ctx.lineTo(78.4, 60.4);
            ctx.lineTo(78.4, 61.0);
            ctx.lineTo(80.4, 61.0);
            ctx.lineTo(80.4, 60.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(79.6, 56.8);
            ctx.lineTo(79.1, 56.8);
            ctx.bezierCurveTo(79.3, 56.9, 79.4, 57.0, 79.4, 57.0);
            ctx.bezierCurveTo(79.4, 57.0, 79.3, 57.1, 79.2, 57.1);
            ctx.bezierCurveTo(79.1, 57.2, 78.9, 57.3, 78.7, 57.5);
            ctx.lineTo(80.5, 57.5);
            ctx.bezierCurveTo(80.4, 57.3, 80.2, 57.0, 80.1, 56.8);
            ctx.lineTo(80.9, 56.6);
            ctx.lineTo(81.0, 56.8);
            ctx.bezierCurveTo(81.1, 56.7, 81.1, 56.6, 81.1, 56.3);
            ctx.lineTo(79.5, 56.3);
            ctx.bezierCurveTo(79.5, 56.6, 79.5, 56.7, 79.6, 56.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(81.4, 62.8);
            ctx.lineTo(79.1, 62.8);
            ctx.bezierCurveTo(79.1, 62.8, 79.2, 62.9, 79.5, 63.1);
            ctx.bezierCurveTo(79.9, 63.4, 80.2, 63.6, 80.4, 63.8);
            ctx.bezierCurveTo(81.1, 63.2, 81.4, 62.9, 81.4, 62.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(87.9, 59.5);
            ctx.lineTo(87.9, 63.2);
            ctx.bezierCurveTo(87.9, 64.0, 87.9, 64.7, 88.0, 65.2);
            ctx.bezierCurveTo(88.0, 65.4, 88.0, 65.4, 88.0, 65.5);
            ctx.lineTo(86.9, 65.5);
            ctx.bezierCurveTo(86.9, 65.4, 86.9, 65.4, 86.9, 65.3);
            ctx.bezierCurveTo(87.0, 64.8, 87.0, 64.1, 87.0, 63.3);
            ctx.lineTo(87.0, 60.7);
            ctx.bezierCurveTo(86.9, 60.8, 86.8, 60.9, 86.6, 61.1);
            ctx.bezierCurveTo(86.2, 61.5, 85.9, 61.8, 85.7, 61.9);
            ctx.bezierCurveTo(85.6, 61.6, 85.4, 61.3, 85.1, 61.0);
            ctx.bezierCurveTo(86.3, 60.2, 87.3, 58.9, 88.1, 57.3);
            ctx.bezierCurveTo(88.5, 57.6, 88.8, 57.8, 89.1, 58.1);
            ctx.bezierCurveTo(89.1, 58.2, 89.1, 58.2, 89.0, 58.3);
            ctx.bezierCurveTo(88.9, 58.3, 88.8, 58.4, 88.7, 58.6);
            ctx.bezierCurveTo(88.5, 58.7, 88.3, 59.0, 88.1, 59.3);
            ctx.bezierCurveTo(88.0, 59.4, 87.9, 59.5, 87.9, 59.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(87.9, 54.4);
            ctx.bezierCurveTo(88.5, 54.8, 88.9, 55.1, 89.0, 55.3);
            ctx.bezierCurveTo(89.0, 55.3, 89.0, 55.4, 88.8, 55.4);
            ctx.bezierCurveTo(88.6, 55.5, 88.5, 55.5, 88.5, 55.6);
            ctx.bezierCurveTo(88.4, 55.7, 88.2, 55.9, 87.9, 56.2);
            ctx.bezierCurveTo(87.1, 57.3, 86.5, 58.0, 86.0, 58.4);
            ctx.bezierCurveTo(85.8, 58.2, 85.6, 57.9, 85.2, 57.6);
            ctx.bezierCurveTo(86.3, 56.9, 87.2, 55.9, 87.9, 54.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(90.8, 59.6);
            ctx.lineTo(94.6, 59.6);
            ctx.bezierCurveTo(95.3, 59.6, 95.8, 59.5, 96.1, 59.5);
            ctx.lineTo(96.2, 59.5);
            ctx.lineTo(96.2, 60.5);
            ctx.lineTo(96.1, 60.5);
            ctx.bezierCurveTo(95.8, 60.5, 95.3, 60.4, 94.7, 60.4);
            ctx.lineTo(94.7, 61.3);
            ctx.bezierCurveTo(95.4, 61.3, 95.9, 61.3, 96.3, 61.2);
            ctx.bezierCurveTo(96.3, 61.2, 96.4, 61.2, 96.4, 61.2);
            ctx.lineTo(96.4, 62.2);
            ctx.bezierCurveTo(96.4, 62.2, 96.3, 62.2, 96.3, 62.2);
            ctx.bezierCurveTo(96.0, 62.2, 95.4, 62.1, 94.7, 62.1);
            ctx.lineTo(94.7, 64.6);
            ctx.bezierCurveTo(94.9, 65.2, 94.2, 65.6, 92.6, 65.6);
            ctx.bezierCurveTo(92.5, 65.1, 92.3, 64.7, 92.1, 64.4);
            ctx.bezierCurveTo(93.3, 64.5, 93.9, 64.4, 93.7, 64.0);
            ctx.lineTo(93.7, 62.1);
            ctx.lineTo(90.2, 62.1);
            ctx.bezierCurveTo(89.6, 62.1, 89.1, 62.2, 88.5, 62.2);
            ctx.bezierCurveTo(88.4, 62.2, 88.4, 62.2, 88.3, 62.2);
            ctx.lineTo(88.3, 61.2);
            ctx.bezierCurveTo(88.4, 61.2, 88.4, 61.2, 88.5, 61.2);
            ctx.bezierCurveTo(89.0, 61.3, 89.6, 61.3, 90.2, 61.3);
            ctx.lineTo(93.7, 61.3);
            ctx.lineTo(93.7, 60.4);
            ctx.lineTo(90.8, 60.4);
            ctx.bezierCurveTo(90.2, 60.4, 89.6, 60.5, 89.1, 60.5);
            ctx.bezierCurveTo(89.0, 60.5, 89.0, 60.5, 88.9, 60.5);
            ctx.lineTo(88.9, 59.5);
            ctx.bezierCurveTo(89.0, 59.5, 89.1, 59.5, 89.2, 59.5);
            ctx.bezierCurveTo(89.7, 59.5, 90.3, 59.6, 90.8, 59.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(91.2, 54.9);
            ctx.lineTo(93.9, 54.9);
            ctx.bezierCurveTo(94.7, 54.9, 95.2, 54.9, 95.5, 54.8);
            ctx.bezierCurveTo(95.4, 55.0, 95.4, 55.5, 95.4, 56.2);
            ctx.lineTo(95.4, 57.6);
            ctx.bezierCurveTo(95.4, 58.3, 95.4, 58.8, 95.5, 58.9);
            ctx.bezierCurveTo(95.3, 58.9, 94.9, 58.9, 94.0, 58.9);
            ctx.lineTo(91.1, 58.9);
            ctx.bezierCurveTo(90.3, 58.9, 89.8, 58.9, 89.7, 58.9);
            ctx.bezierCurveTo(89.7, 58.7, 89.8, 58.2, 89.8, 57.4);
            ctx.lineTo(89.8, 56.0);
            ctx.bezierCurveTo(89.8, 55.4, 89.7, 55.0, 89.7, 54.8);
            ctx.bezierCurveTo(90.0, 54.9, 90.5, 54.9, 91.2, 54.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(91.8, 64.1);
            ctx.lineTo(90.8, 64.3);
            ctx.bezierCurveTo(90.5, 63.6, 90.3, 63.1, 90.1, 62.7);
            ctx.lineTo(91.2, 62.4);
            ctx.bezierCurveTo(91.4, 62.8, 91.6, 63.4, 91.8, 64.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(90.7, 55.7);
            ctx.lineTo(90.7, 56.5);
            ctx.lineTo(94.4, 56.5);
            ctx.lineTo(94.4, 55.7);
            ctx.lineTo(90.7, 55.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(90.7, 57.2);
            ctx.lineTo(90.7, 58.1);
            ctx.lineTo(94.4, 58.1);
            ctx.lineTo(94.4, 57.2);
            ctx.lineTo(90.7, 57.2);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(99.1, 56.9);
            ctx.lineTo(100.5, 56.9);
            ctx.bezierCurveTo(100.8, 56.9, 101.2, 56.9, 101.7, 56.9);
            ctx.bezierCurveTo(101.2, 57.9, 100.7, 58.9, 100.2, 59.6);
            ctx.lineTo(100.2, 64.0);
            ctx.bezierCurveTo(100.2, 64.8, 100.2, 65.2, 100.3, 65.4);
            ctx.lineTo(99.2, 65.4);
            ctx.bezierCurveTo(99.3, 65.2, 99.3, 64.8, 99.3, 64.0);
            ctx.lineTo(99.3, 60.7);
            ctx.bezierCurveTo(99.3, 60.7, 99.1, 60.8, 99.0, 61.0);
            ctx.bezierCurveTo(98.6, 61.5, 98.3, 61.8, 97.9, 62.1);
            ctx.lineTo(97.4, 61.0);
            ctx.bezierCurveTo(98.4, 60.5, 99.4, 59.4, 100.3, 57.8);
            ctx.lineTo(99.0, 57.8);
            ctx.bezierCurveTo(98.3, 57.8, 97.8, 57.8, 97.7, 57.9);
            ctx.lineTo(97.7, 56.9);
            ctx.bezierCurveTo(97.8, 56.9, 98.3, 56.9, 99.1, 56.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(100.9, 56.3);
            ctx.lineTo(99.8, 56.7);
            ctx.bezierCurveTo(99.7, 56.1, 99.4, 55.6, 99.0, 55.0);
            ctx.lineTo(100.0, 54.6);
            ctx.bezierCurveTo(100.2, 54.8, 100.5, 55.3, 100.9, 56.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(100.2, 60.2);
            ctx.lineTo(100.8, 59.6);
            ctx.bezierCurveTo(100.9, 59.7, 101.0, 59.8, 101.3, 60.0);
            ctx.bezierCurveTo(101.6, 60.4, 101.9, 60.6, 102.0, 60.8);
            ctx.lineTo(101.2, 61.5);
            ctx.bezierCurveTo(101.1, 61.2, 100.7, 60.7, 100.2, 60.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(105.5, 55.5);
            ctx.lineTo(105.5, 56.6);
            ctx.lineTo(106.8, 56.6);
            ctx.bezierCurveTo(107.3, 56.6, 107.8, 56.5, 108.2, 56.5);
            ctx.bezierCurveTo(108.2, 56.5, 108.2, 56.6, 108.2, 56.6);
            ctx.bezierCurveTo(108.1, 57.0, 108.1, 57.3, 108.1, 57.6);
            ctx.lineTo(108.1, 62.0);
            ctx.bezierCurveTo(108.1, 62.6, 108.1, 63.0, 108.2, 63.2);
            ctx.lineTo(108.2, 63.3);
            ctx.lineTo(107.1, 63.3);
            ctx.bezierCurveTo(107.1, 63.0, 107.2, 62.7, 107.2, 62.4);
            ctx.lineTo(105.5, 62.4);
            ctx.lineTo(105.5, 64.1);
            ctx.bezierCurveTo(105.5, 64.8, 105.6, 65.2, 105.6, 65.5);
            ctx.lineTo(104.5, 65.5);
            ctx.bezierCurveTo(104.6, 65.4, 104.6, 64.9, 104.6, 64.1);
            ctx.lineTo(104.6, 62.4);
            ctx.lineTo(103.1, 62.4);
            ctx.bezierCurveTo(103.1, 62.7, 103.1, 63.0, 103.2, 63.3);
            ctx.lineTo(102.1, 63.3);
            ctx.bezierCurveTo(102.1, 63.1, 102.2, 62.6, 102.2, 61.8);
            ctx.lineTo(102.2, 57.6);
            ctx.bezierCurveTo(102.2, 56.9, 102.1, 56.6, 102.1, 56.5);
            ctx.bezierCurveTo(102.5, 56.5, 102.9, 56.6, 103.4, 56.6);
            ctx.lineTo(104.6, 56.6);
            ctx.lineTo(104.6, 55.3);
            ctx.bezierCurveTo(104.6, 54.9, 104.6, 54.6, 104.5, 54.5);
            ctx.bezierCurveTo(105.3, 54.5, 105.7, 54.5, 105.7, 54.7);
            ctx.bezierCurveTo(105.7, 54.7, 105.7, 54.8, 105.7, 54.9);
            ctx.bezierCurveTo(105.6, 55.1, 105.5, 55.3, 105.5, 55.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(103.1, 57.4);
            ctx.lineTo(103.1, 59.1);
            ctx.lineTo(104.6, 59.1);
            ctx.lineTo(104.6, 57.4);
            ctx.lineTo(103.1, 57.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(103.1, 59.9);
            ctx.lineTo(103.1, 61.6);
            ctx.lineTo(104.6, 61.6);
            ctx.lineTo(104.6, 59.9);
            ctx.lineTo(103.1, 59.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(105.5, 57.4);
            ctx.lineTo(105.5, 59.1);
            ctx.lineTo(107.2, 59.1);
            ctx.lineTo(107.2, 57.4);
            ctx.lineTo(105.5, 57.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(105.5, 59.9);
            ctx.lineTo(105.5, 61.6);
            ctx.lineTo(107.2, 61.6);
            ctx.lineTo(107.2, 59.9);
            ctx.lineTo(105.5, 59.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(112.4, 55.9);
            ctx.lineTo(112.4, 57.8);
            ctx.bezierCurveTo(113.1, 57.8, 113.6, 57.7, 113.8, 57.7);
            ctx.lineTo(113.8, 58.6);
            ctx.bezierCurveTo(113.7, 58.6, 113.5, 58.6, 113.2, 58.6);
            ctx.bezierCurveTo(112.8, 58.5, 112.6, 58.5, 112.4, 58.5);
            ctx.lineTo(112.4, 59.9);
            ctx.lineTo(113.0, 59.5);
            ctx.bezierCurveTo(113.3, 59.9, 113.7, 60.4, 114.0, 60.8);
            ctx.bezierCurveTo(114.1, 59.7, 114.2, 58.9, 114.2, 58.4);
            ctx.lineTo(115.2, 58.5);
            ctx.bezierCurveTo(115.1, 59.8, 115.0, 61.0, 114.7, 62.0);
            ctx.bezierCurveTo(114.4, 61.9, 114.0, 61.9, 113.6, 62.0);
            ctx.bezierCurveTo(113.8, 61.6, 113.9, 61.2, 114.0, 60.8);
            ctx.lineTo(113.2, 61.3);
            ctx.bezierCurveTo(112.9, 60.8, 112.7, 60.4, 112.4, 60.0);
            ctx.lineTo(112.4, 63.7);
            ctx.bezierCurveTo(112.4, 63.8, 112.4, 64.1, 112.4, 64.5);
            ctx.bezierCurveTo(112.4, 64.9, 112.4, 65.2, 112.4, 65.3);
            ctx.lineTo(111.5, 65.3);
            ctx.bezierCurveTo(111.5, 65.1, 111.5, 64.6, 111.5, 63.7);
            ctx.lineTo(111.5, 60.3);
            ctx.bezierCurveTo(111.2, 61.3, 110.8, 62.2, 110.3, 63.0);
            ctx.bezierCurveTo(110.2, 62.5, 110.0, 62.2, 109.7, 61.9);
            ctx.bezierCurveTo(110.6, 60.8, 111.2, 59.6, 111.5, 58.5);
            ctx.lineTo(111.1, 58.5);
            ctx.bezierCurveTo(110.5, 58.5, 110.1, 58.5, 109.9, 58.6);
            ctx.lineTo(109.9, 57.7);
            ctx.bezierCurveTo(110.1, 57.7, 110.5, 57.8, 111.1, 57.8);
            ctx.lineTo(111.5, 57.8);
            ctx.lineTo(111.5, 56.1);
            ctx.bezierCurveTo(111.0, 56.2, 110.6, 56.3, 110.2, 56.3);
            ctx.lineTo(109.8, 55.4);
            ctx.bezierCurveTo(111.5, 55.3, 112.8, 55.0, 113.5, 54.7);
            ctx.bezierCurveTo(114.0, 55.3, 114.2, 55.7, 114.1, 55.8);
            ctx.lineTo(113.9, 55.8);
            ctx.bezierCurveTo(113.7, 55.8, 113.5, 55.8, 113.3, 55.8);
            ctx.bezierCurveTo(113.3, 55.8, 113.2, 55.8, 113.1, 55.9);
            ctx.bezierCurveTo(112.8, 55.9, 112.6, 55.9, 112.4, 55.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(115.6, 62.9);
            ctx.lineTo(115.6, 57.3);
            ctx.bezierCurveTo(116.4, 57.3, 116.8, 57.4, 116.8, 57.5);
            ctx.bezierCurveTo(116.8, 57.6, 116.8, 57.6, 116.7, 57.7);
            ctx.bezierCurveTo(116.7, 57.8, 116.6, 58.0, 116.6, 58.1);
            ctx.bezierCurveTo(116.5, 58.7, 116.5, 60.1, 116.4, 62.2);
            ctx.bezierCurveTo(117.5, 60.8, 118.1, 58.3, 118.3, 54.8);
            ctx.bezierCurveTo(119.2, 54.9, 119.6, 55.0, 119.5, 55.0);
            ctx.bezierCurveTo(119.6, 55.1, 119.5, 55.2, 119.4, 55.3);
            ctx.bezierCurveTo(119.3, 55.3, 119.3, 55.4, 119.3, 55.5);
            ctx.bezierCurveTo(119.3, 55.6, 119.2, 56.0, 119.1, 56.7);
            ctx.bezierCurveTo(118.9, 57.6, 118.8, 58.3, 118.7, 58.5);
            ctx.bezierCurveTo(118.4, 60.6, 117.6, 62.2, 116.5, 63.2);
            ctx.bezierCurveTo(116.5, 63.3, 116.5, 63.3, 116.5, 63.3);
            ctx.bezierCurveTo(116.5, 63.7, 116.6, 64.0, 116.8, 64.0);
            ctx.bezierCurveTo(117.2, 64.1, 117.7, 64.1, 118.2, 63.9);
            ctx.bezierCurveTo(118.5, 63.8, 118.7, 63.4, 118.7, 62.6);
            ctx.bezierCurveTo(118.7, 62.5, 118.7, 62.5, 118.7, 62.5);
            ctx.bezierCurveTo(119.2, 62.8, 119.5, 63.0, 119.8, 63.1);
            ctx.bezierCurveTo(119.5, 64.1, 119.2, 64.6, 118.9, 64.7);
            ctx.bezierCurveTo(118.1, 65.0, 117.3, 65.0, 116.4, 64.8);
            ctx.bezierCurveTo(115.9, 64.6, 115.6, 64.3, 115.7, 63.8);
            ctx.bezierCurveTo(115.2, 64.3, 114.6, 64.6, 114.1, 64.9);
            ctx.bezierCurveTo(113.8, 64.5, 113.6, 64.3, 113.2, 64.2);
            ctx.bezierCurveTo(114.0, 63.9, 114.8, 63.5, 115.6, 62.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(117.7, 56.4);
            ctx.lineTo(117.0, 57.1);
            ctx.bezierCurveTo(116.4, 56.4, 115.9, 55.9, 115.3, 55.5);
            ctx.lineTo(116.0, 54.8);
            ctx.bezierCurveTo(116.5, 55.2, 117.1, 55.7, 117.7, 56.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(120.8, 61.2);
            ctx.lineTo(119.7, 61.5);
            ctx.bezierCurveTo(119.5, 60.4, 119.2, 59.4, 118.8, 58.6);
            ctx.lineTo(119.8, 58.3);
            ctx.bezierCurveTo(120.1, 59.0, 120.4, 60.0, 120.8, 61.2);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(124.1, 57.4);
            ctx.bezierCurveTo(125.0, 57.6, 125.5, 57.7, 125.5, 57.8);
            ctx.bezierCurveTo(125.5, 57.8, 125.5, 57.9, 125.4, 58.0);
            ctx.bezierCurveTo(125.2, 58.2, 125.1, 58.5, 125.0, 58.8);
            ctx.bezierCurveTo(124.6, 60.0, 123.9, 61.5, 123.1, 63.3);
            ctx.bezierCurveTo(122.8, 63.1, 122.3, 63.0, 121.8, 62.9);
            ctx.bezierCurveTo(122.7, 61.8, 123.5, 60.0, 124.1, 57.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(128.0, 56.5);
            ctx.lineTo(128.0, 64.3);
            ctx.bezierCurveTo(128.3, 64.8, 127.5, 65.1, 125.7, 65.3);
            ctx.bezierCurveTo(125.7, 64.8, 125.5, 64.4, 125.1, 64.0);
            ctx.bezierCurveTo(126.4, 64.2, 127.0, 64.1, 126.9, 63.7);
            ctx.lineTo(126.9, 56.6);
            ctx.bezierCurveTo(126.9, 55.7, 126.8, 55.1, 126.7, 54.7);
            ctx.bezierCurveTo(127.8, 54.7, 128.3, 54.8, 128.3, 54.9);
            ctx.lineTo(128.3, 55.0);
            ctx.bezierCurveTo(128.1, 55.3, 128.0, 55.8, 128.0, 56.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(132.9, 62.5);
            ctx.lineTo(131.6, 63.0);
            ctx.bezierCurveTo(130.9, 61.2, 130.1, 59.5, 129.1, 57.9);
            ctx.lineTo(130.2, 57.4);
            ctx.bezierCurveTo(131.2, 59.1, 132.1, 60.8, 132.9, 62.5);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(137.4, 55.7);
            ctx.lineTo(137.4, 57.4);
            ctx.bezierCurveTo(137.6, 57.4, 137.9, 57.4, 138.2, 57.3);
            ctx.bezierCurveTo(138.2, 57.3, 138.3, 57.3, 138.3, 57.3);
            ctx.lineTo(138.3, 58.3);
            ctx.lineTo(138.2, 58.3);
            ctx.bezierCurveTo(137.9, 58.2, 137.7, 58.1, 137.4, 58.1);
            ctx.lineTo(137.4, 60.4);
            ctx.lineTo(138.7, 59.8);
            ctx.lineTo(138.9, 60.7);
            ctx.lineTo(137.4, 61.4);
            ctx.lineTo(137.4, 63.8);
            ctx.bezierCurveTo(137.4, 64.3, 137.4, 64.8, 137.5, 65.2);
            ctx.lineTo(137.5, 65.3);
            ctx.lineTo(136.4, 65.3);
            ctx.lineTo(136.4, 65.2);
            ctx.bezierCurveTo(136.4, 64.7, 136.5, 64.3, 136.5, 63.8);
            ctx.lineTo(136.5, 61.8);
            ctx.lineTo(134.6, 62.7);
            ctx.lineTo(134.0, 61.8);
            ctx.lineTo(136.5, 60.8);
            ctx.lineTo(136.5, 58.1);
            ctx.lineTo(135.5, 58.1);
            ctx.bezierCurveTo(135.4, 58.5, 135.3, 58.9, 135.3, 59.3);
            ctx.bezierCurveTo(135.2, 59.7, 135.2, 59.9, 135.1, 60.0);
            ctx.bezierCurveTo(134.8, 59.9, 134.5, 59.9, 134.1, 59.9);
            ctx.bezierCurveTo(134.5, 58.6, 134.7, 57.3, 134.8, 56.0);
            ctx.bezierCurveTo(135.5, 56.1, 135.9, 56.2, 136.0, 56.3);
            ctx.bezierCurveTo(136.0, 56.4, 136.0, 56.4, 135.9, 56.5);
            ctx.bezierCurveTo(135.8, 56.7, 135.7, 57.0, 135.6, 57.4);
            ctx.lineTo(136.5, 57.4);
            ctx.lineTo(136.5, 55.9);
            ctx.bezierCurveTo(136.5, 55.3, 136.5, 54.9, 136.5, 54.7);
            ctx.bezierCurveTo(137.2, 54.7, 137.6, 54.8, 137.7, 54.9);
            ctx.bezierCurveTo(137.7, 54.9, 137.6, 54.9, 137.6, 55.0);
            ctx.bezierCurveTo(137.4, 55.2, 137.4, 55.4, 137.4, 55.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(140.2, 56.9);
            ctx.lineTo(142.9, 56.9);
            ctx.bezierCurveTo(143.8, 56.9, 144.3, 56.8, 144.7, 56.8);
            ctx.bezierCurveTo(144.4, 61.1, 144.1, 63.7, 143.7, 64.4);
            ctx.bezierCurveTo(143.4, 64.8, 142.7, 65.0, 141.7, 65.0);
            ctx.bezierCurveTo(141.7, 64.6, 141.5, 64.2, 141.2, 63.8);
            ctx.bezierCurveTo(142.1, 64.0, 142.6, 63.9, 142.6, 63.8);
            ctx.bezierCurveTo(143.0, 63.9, 143.3, 61.8, 143.6, 57.7);
            ctx.lineTo(142.9, 57.7);
            ctx.bezierCurveTo(142.6, 61.5, 141.3, 63.9, 139.2, 64.9);
            ctx.bezierCurveTo(139.0, 64.7, 138.7, 64.5, 138.1, 64.3);
            ctx.bezierCurveTo(140.3, 63.6, 141.7, 61.4, 142.0, 57.6);
            ctx.lineTo(141.3, 57.6);
            ctx.bezierCurveTo(140.8, 60.0, 140.1, 61.8, 139.0, 62.8);
            ctx.bezierCurveTo(138.8, 62.7, 138.5, 62.5, 137.9, 62.4);
            ctx.bezierCurveTo(139.2, 61.6, 140.0, 60.1, 140.4, 57.7);
            ctx.lineTo(139.8, 57.7);
            ctx.lineTo(139.5, 58.2);
            ctx.bezierCurveTo(139.1, 58.8, 138.9, 59.2, 138.8, 59.3);
            ctx.bezierCurveTo(138.7, 59.2, 138.4, 59.0, 137.9, 58.9);
            ctx.bezierCurveTo(138.8, 57.8, 139.5, 56.4, 140.0, 54.7);
            ctx.bezierCurveTo(140.7, 54.9, 141.1, 55.0, 141.3, 55.2);
            ctx.lineTo(141.3, 55.3);
            ctx.bezierCurveTo(140.9, 55.5, 140.6, 56.1, 140.2, 56.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(151.8, 58.5);
            ctx.bezierCurveTo(152.8, 58.6, 153.4, 59.1, 153.4, 60.1);
            ctx.bezierCurveTo(153.4, 61.1, 152.8, 61.6, 151.8, 61.7);
            ctx.bezierCurveTo(150.8, 61.6, 150.3, 61.1, 150.2, 60.1);
            ctx.bezierCurveTo(150.3, 59.1, 150.8, 58.6, 151.8, 58.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(151.8, 58.9);
            ctx.bezierCurveTo(151.1, 58.9, 150.7, 59.3, 150.6, 60.1);
            ctx.bezierCurveTo(150.7, 60.8, 151.1, 61.2, 151.8, 61.3);
            ctx.bezierCurveTo(152.6, 61.2, 153.0, 60.8, 153.0, 60.1);
            ctx.bezierCurveTo(153.0, 59.3, 152.6, 58.9, 151.8, 58.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(17.6, 72.2);
            ctx.lineTo(17.6, 73.1);
            ctx.bezierCurveTo(17.1, 73.1, 16.6, 73.0, 16.2, 73.0);
            ctx.lineTo(13.4, 73.0);
            ctx.bezierCurveTo(13.0, 73.0, 12.6, 73.1, 12.1, 73.1);
            ctx.lineTo(12.1, 72.2);
            ctx.lineTo(12.3, 72.2);
            ctx.bezierCurveTo(12.8, 72.2, 13.1, 72.2, 13.3, 72.2);
            ctx.lineTo(16.1, 72.2);
            ctx.bezierCurveTo(16.8, 72.2, 17.3, 72.2, 17.6, 72.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(13.7, 73.9);
            ctx.lineTo(16.0, 73.9);
            ctx.bezierCurveTo(16.3, 73.9, 16.6, 73.9, 17.0, 73.9);
            ctx.lineTo(17.0, 74.8);
            ctx.bezierCurveTo(16.6, 74.7, 16.2, 74.7, 15.8, 74.7);
            ctx.lineTo(13.7, 74.7);
            ctx.bezierCurveTo(13.4, 74.7, 13.1, 74.7, 12.6, 74.8);
            ctx.lineTo(12.6, 73.9);
            ctx.lineTo(12.7, 73.9);
            ctx.bezierCurveTo(13.1, 73.9, 13.4, 73.9, 13.7, 73.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(13.6, 75.6);
            ctx.lineTo(15.6, 75.6);
            ctx.bezierCurveTo(16.3, 75.6, 16.7, 75.5, 17.0, 75.5);
            ctx.lineTo(17.0, 76.4);
            ctx.bezierCurveTo(16.6, 76.3, 16.2, 76.3, 15.7, 76.3);
            ctx.lineTo(13.6, 76.3);
            ctx.bezierCurveTo(13.3, 76.3, 12.9, 76.3, 12.6, 76.4);
            ctx.lineTo(12.6, 75.5);
            ctx.bezierCurveTo(13.1, 75.5, 13.4, 75.6, 13.6, 75.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.7, 78.6);
            ctx.lineTo(16.7, 80.3);
            ctx.lineTo(16.8, 81.5);
            ctx.lineTo(15.8, 81.5);
            ctx.bezierCurveTo(15.9, 81.2, 15.9, 80.8, 15.9, 80.5);
            ctx.lineTo(13.8, 80.5);
            ctx.bezierCurveTo(13.8, 81.0, 13.9, 81.4, 13.9, 81.6);
            ctx.lineTo(12.9, 81.6);
            ctx.bezierCurveTo(13.0, 81.3, 13.0, 80.9, 13.0, 80.6);
            ctx.lineTo(13.0, 78.6);
            ctx.bezierCurveTo(13.0, 78.2, 13.0, 77.7, 12.9, 77.2);
            ctx.bezierCurveTo(13.3, 77.2, 13.7, 77.2, 14.0, 77.2);
            ctx.lineTo(15.6, 77.2);
            ctx.bezierCurveTo(16.1, 77.2, 16.5, 77.2, 16.8, 77.2);
            ctx.bezierCurveTo(16.8, 77.7, 16.7, 78.1, 16.7, 78.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(15.9, 78.0);
            ctx.lineTo(13.8, 78.0);
            ctx.lineTo(13.8, 79.8);
            ctx.lineTo(15.9, 79.8);
            ctx.lineTo(15.9, 78.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(15.7, 71.9);
            ctx.lineTo(14.7, 72.1);
            ctx.bezierCurveTo(14.6, 71.6, 14.4, 71.2, 14.0, 70.7);
            ctx.lineTo(14.9, 70.4);
            ctx.bezierCurveTo(15.2, 70.7, 15.4, 71.2, 15.7, 71.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(19.0, 71.5);
            ctx.lineTo(21.3, 71.5);
            ctx.bezierCurveTo(21.6, 71.5, 22.0, 71.5, 22.4, 71.5);
            ctx.bezierCurveTo(22.4, 71.8, 22.4, 72.2, 22.4, 72.7);
            ctx.lineTo(22.4, 74.6);
            ctx.bezierCurveTo(22.4, 75.0, 22.4, 75.5, 22.4, 76.0);
            ctx.bezierCurveTo(22.1, 76.0, 21.7, 76.0, 21.3, 76.0);
            ctx.lineTo(19.0, 76.0);
            ctx.lineTo(19.0, 79.7);
            ctx.bezierCurveTo(18.9, 80.3, 19.1, 80.6, 19.8, 80.5);
            ctx.lineTo(21.0, 80.5);
            ctx.bezierCurveTo(21.9, 80.6, 22.3, 80.1, 22.3, 79.0);
            ctx.bezierCurveTo(22.3, 79.0, 22.3, 79.1, 22.4, 79.1);
            ctx.bezierCurveTo(22.6, 79.4, 22.9, 79.6, 23.4, 79.6);
            ctx.bezierCurveTo(23.1, 80.7, 22.6, 81.3, 21.8, 81.3);
            ctx.lineTo(19.7, 81.3);
            ctx.bezierCurveTo(18.4, 81.5, 17.8, 81.0, 18.1, 80.0);
            ctx.lineTo(18.1, 76.4);
            ctx.bezierCurveTo(18.1, 75.9, 18.1, 75.5, 18.0, 75.1);
            ctx.bezierCurveTo(18.5, 75.1, 19.0, 75.1, 19.5, 75.1);
            ctx.lineTo(21.4, 75.1);
            ctx.lineTo(21.4, 72.4);
            ctx.lineTo(19.0, 72.4);
            ctx.bezierCurveTo(18.7, 72.4, 18.4, 72.4, 17.9, 72.4);
            ctx.lineTo(17.9, 71.5);
            ctx.bezierCurveTo(18.4, 71.5, 18.8, 71.5, 19.0, 71.5);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(27.0, 75.5);
            ctx.lineTo(27.0, 79.2);
            ctx.bezierCurveTo(27.0, 80.0, 27.0, 80.7, 27.1, 81.2);
            ctx.bezierCurveTo(27.1, 81.4, 27.1, 81.4, 27.1, 81.5);
            ctx.lineTo(26.0, 81.5);
            ctx.bezierCurveTo(26.0, 81.4, 26.0, 81.4, 26.0, 81.3);
            ctx.bezierCurveTo(26.1, 80.8, 26.1, 80.1, 26.1, 79.3);
            ctx.lineTo(26.1, 76.7);
            ctx.bezierCurveTo(26.0, 76.8, 25.9, 76.9, 25.7, 77.1);
            ctx.bezierCurveTo(25.3, 77.5, 25.0, 77.8, 24.8, 77.9);
            ctx.bezierCurveTo(24.7, 77.6, 24.5, 77.3, 24.2, 77.0);
            ctx.bezierCurveTo(25.4, 76.2, 26.4, 74.9, 27.2, 73.3);
            ctx.bezierCurveTo(27.6, 73.6, 27.9, 73.8, 28.2, 74.1);
            ctx.bezierCurveTo(28.2, 74.2, 28.2, 74.2, 28.1, 74.3);
            ctx.bezierCurveTo(28.0, 74.3, 27.9, 74.4, 27.8, 74.6);
            ctx.bezierCurveTo(27.6, 74.7, 27.5, 75.0, 27.2, 75.3);
            ctx.bezierCurveTo(27.1, 75.4, 27.0, 75.5, 27.0, 75.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(27.1, 70.4);
            ctx.bezierCurveTo(27.7, 70.8, 28.0, 71.1, 28.2, 71.3);
            ctx.bezierCurveTo(28.2, 71.3, 28.1, 71.4, 27.9, 71.4);
            ctx.bezierCurveTo(27.8, 71.5, 27.7, 71.5, 27.6, 71.6);
            ctx.bezierCurveTo(27.5, 71.7, 27.3, 71.9, 27.1, 72.2);
            ctx.bezierCurveTo(26.2, 73.3, 25.6, 74.0, 25.1, 74.4);
            ctx.bezierCurveTo(25.0, 74.2, 24.7, 73.9, 24.3, 73.6);
            ctx.bezierCurveTo(25.4, 72.9, 26.3, 71.9, 27.1, 70.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(29.9, 75.6);
            ctx.lineTo(33.7, 75.6);
            ctx.bezierCurveTo(34.4, 75.6, 34.9, 75.5, 35.2, 75.5);
            ctx.lineTo(35.3, 75.5);
            ctx.lineTo(35.3, 76.5);
            ctx.lineTo(35.2, 76.5);
            ctx.bezierCurveTo(34.9, 76.5, 34.4, 76.4, 33.9, 76.4);
            ctx.lineTo(33.9, 77.3);
            ctx.bezierCurveTo(34.5, 77.3, 35.0, 77.3, 35.4, 77.2);
            ctx.bezierCurveTo(35.4, 77.2, 35.5, 77.2, 35.5, 77.2);
            ctx.lineTo(35.5, 78.2);
            ctx.bezierCurveTo(35.5, 78.2, 35.4, 78.2, 35.4, 78.2);
            ctx.bezierCurveTo(35.1, 78.2, 34.6, 78.1, 33.9, 78.1);
            ctx.lineTo(33.9, 80.6);
            ctx.bezierCurveTo(34.0, 81.2, 33.3, 81.6, 31.7, 81.6);
            ctx.bezierCurveTo(31.6, 81.1, 31.4, 80.7, 31.2, 80.4);
            ctx.bezierCurveTo(32.4, 80.5, 33.0, 80.4, 32.8, 80.0);
            ctx.lineTo(32.8, 78.1);
            ctx.lineTo(29.3, 78.1);
            ctx.bezierCurveTo(28.7, 78.1, 28.2, 78.2, 27.6, 78.2);
            ctx.bezierCurveTo(27.5, 78.2, 27.5, 78.2, 27.4, 78.2);
            ctx.lineTo(27.4, 77.2);
            ctx.bezierCurveTo(27.5, 77.2, 27.5, 77.2, 27.6, 77.2);
            ctx.bezierCurveTo(28.1, 77.3, 28.7, 77.3, 29.3, 77.3);
            ctx.lineTo(32.8, 77.3);
            ctx.lineTo(32.8, 76.4);
            ctx.lineTo(29.9, 76.4);
            ctx.bezierCurveTo(29.3, 76.4, 28.7, 76.5, 28.2, 76.5);
            ctx.bezierCurveTo(28.2, 76.5, 28.1, 76.5, 28.1, 76.5);
            ctx.lineTo(28.1, 75.5);
            ctx.bezierCurveTo(28.1, 75.5, 28.2, 75.5, 28.3, 75.5);
            ctx.bezierCurveTo(28.8, 75.5, 29.4, 75.6, 29.9, 75.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(30.3, 70.9);
            ctx.lineTo(33.1, 70.9);
            ctx.bezierCurveTo(33.8, 70.9, 34.3, 70.9, 34.6, 70.8);
            ctx.bezierCurveTo(34.5, 71.0, 34.5, 71.5, 34.5, 72.2);
            ctx.lineTo(34.5, 73.6);
            ctx.bezierCurveTo(34.5, 74.3, 34.5, 74.8, 34.6, 74.9);
            ctx.bezierCurveTo(34.4, 74.9, 34.0, 74.9, 33.1, 74.9);
            ctx.lineTo(30.2, 74.9);
            ctx.bezierCurveTo(29.4, 74.9, 29.0, 74.9, 28.8, 74.9);
            ctx.bezierCurveTo(28.8, 74.7, 28.9, 74.2, 28.9, 73.4);
            ctx.lineTo(28.9, 72.0);
            ctx.bezierCurveTo(28.9, 71.4, 28.8, 71.0, 28.8, 70.8);
            ctx.bezierCurveTo(29.1, 70.9, 29.6, 70.9, 30.3, 70.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(31.0, 80.1);
            ctx.lineTo(29.9, 80.3);
            ctx.bezierCurveTo(29.6, 79.6, 29.4, 79.1, 29.2, 78.7);
            ctx.lineTo(30.3, 78.4);
            ctx.bezierCurveTo(30.5, 78.8, 30.7, 79.4, 31.0, 80.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(29.8, 71.7);
            ctx.lineTo(29.8, 72.5);
            ctx.lineTo(33.5, 72.5);
            ctx.lineTo(33.5, 71.7);
            ctx.lineTo(29.8, 71.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(29.8, 73.2);
            ctx.lineTo(29.8, 74.1);
            ctx.lineTo(33.5, 74.1);
            ctx.lineTo(33.5, 73.2);
            ctx.lineTo(29.8, 73.2);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(43.1, 74.1);
            ctx.lineTo(43.1, 76.1);
            ctx.bezierCurveTo(42.9, 77.2, 42.4, 77.8, 41.5, 77.8);
            ctx.lineTo(41.5, 77.0);
            ctx.bezierCurveTo(41.9, 76.9, 42.1, 76.6, 42.1, 76.1);
            ctx.lineTo(41.3, 76.1);
            ctx.lineTo(41.3, 74.1);
            ctx.lineTo(43.1, 74.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(61.3, 74.5);
            ctx.lineTo(61.3, 75.9);
            ctx.bezierCurveTo(60.8, 75.9, 59.9, 75.8, 58.8, 75.8);
            ctx.lineTo(51.9, 75.8);
            ctx.bezierCurveTo(50.7, 75.8, 49.8, 75.9, 49.2, 75.9);
            ctx.lineTo(49.2, 74.5);
            ctx.bezierCurveTo(49.9, 74.6, 50.7, 74.6, 51.8, 74.6);
            ctx.lineTo(58.7, 74.6);
            ctx.bezierCurveTo(59.9, 74.6, 60.8, 74.6, 61.3, 74.5);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(74.0, 69.9);
            ctx.lineTo(74.0, 71.1);
            ctx.bezierCurveTo(73.6, 71.1, 72.9, 71.0, 71.9, 71.0);
            ctx.lineTo(69.7, 71.0);
            ctx.bezierCurveTo(69.7, 71.8, 69.7, 72.6, 69.6, 73.7);
            ctx.bezierCurveTo(69.6, 73.6, 69.6, 73.7, 69.6, 73.9);
            ctx.lineTo(72.8, 73.9);
            ctx.bezierCurveTo(73.7, 73.9, 74.4, 73.8, 75.0, 73.8);
            ctx.lineTo(75.0, 75.0);
            ctx.bezierCurveTo(74.5, 74.9, 73.8, 74.9, 72.8, 74.9);
            ctx.lineTo(70.0, 74.9);
            ctx.bezierCurveTo(71.0, 77.8, 72.8, 79.3, 75.6, 79.3);
            ctx.bezierCurveTo(75.1, 79.8, 74.8, 80.2, 74.5, 80.7);
            ctx.bezierCurveTo(71.6, 79.8, 69.8, 78.0, 69.3, 75.3);
            ctx.bezierCurveTo(69.0, 77.9, 67.2, 79.7, 64.0, 81.0);
            ctx.bezierCurveTo(63.6, 80.5, 63.2, 80.1, 62.7, 79.9);
            ctx.bezierCurveTo(65.8, 79.4, 67.6, 77.8, 68.3, 74.9);
            ctx.lineTo(65.6, 74.9);
            ctx.bezierCurveTo(64.5, 74.9, 63.8, 74.9, 63.5, 75.0);
            ctx.lineTo(63.5, 73.8);
            ctx.bezierCurveTo(63.9, 73.9, 64.6, 73.9, 65.5, 73.9);
            ctx.lineTo(68.4, 73.9);
            ctx.bezierCurveTo(68.4, 73.6, 68.5, 73.1, 68.5, 72.5);
            ctx.bezierCurveTo(68.5, 71.8, 68.5, 71.4, 68.6, 71.0);
            ctx.lineTo(66.4, 71.0);
            ctx.bezierCurveTo(65.7, 71.0, 65.0, 71.1, 64.3, 71.1);
            ctx.lineTo(64.3, 69.9);
            ctx.bezierCurveTo(64.9, 70.0, 65.6, 70.0, 66.4, 70.0);
            ctx.lineTo(71.8, 70.0);
            ctx.bezierCurveTo(72.9, 70.0, 73.6, 70.0, 74.0, 69.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(81.1, 77.0);
            ctx.bezierCurveTo(81.2, 77.1, 81.4, 77.2, 81.7, 77.3);
            ctx.bezierCurveTo(82.3, 77.5, 82.6, 77.7, 82.6, 77.8);
            ctx.bezierCurveTo(82.6, 77.8, 82.5, 77.9, 82.4, 77.9);
            ctx.bezierCurveTo(82.1, 78.0, 81.9, 78.1, 81.8, 78.2);
            ctx.bezierCurveTo(80.7, 79.3, 79.5, 80.4, 78.2, 81.4);
            ctx.bezierCurveTo(77.9, 81.1, 77.6, 80.9, 77.3, 80.6);
            ctx.bezierCurveTo(77.1, 80.5, 77.0, 80.4, 77.0, 80.4);
            ctx.bezierCurveTo(78.6, 79.8, 79.9, 78.7, 81.1, 77.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(81.1, 69.9);
            ctx.lineTo(85.9, 69.9);
            ctx.bezierCurveTo(87.0, 69.9, 87.6, 69.8, 87.6, 69.8);
            ctx.bezierCurveTo(87.6, 70.2, 87.5, 70.8, 87.5, 71.4);
            ctx.lineTo(87.5, 74.6);
            ctx.bezierCurveTo(87.5, 75.5, 87.6, 76.1, 87.6, 76.3);
            ctx.bezierCurveTo(87.2, 76.3, 86.6, 76.2, 85.8, 76.2);
            ctx.lineTo(81.6, 76.2);
            ctx.bezierCurveTo(80.3, 76.2, 79.6, 76.3, 79.3, 76.3);
            ctx.bezierCurveTo(79.4, 75.8, 79.4, 75.2, 79.4, 74.4);
            ctx.lineTo(79.4, 71.2);
            ctx.bezierCurveTo(79.4, 70.4, 79.4, 69.9, 79.3, 69.8);
            ctx.lineTo(79.4, 69.8);
            ctx.bezierCurveTo(80.0, 69.8, 80.5, 69.9, 81.1, 69.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(80.6, 71.0);
            ctx.lineTo(80.6, 75.2);
            ctx.lineTo(86.4, 75.2);
            ctx.lineTo(86.4, 71.0);
            ctx.lineTo(80.6, 71.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(84.5, 77.8);
            ctx.lineTo(85.5, 77.0);
            ctx.bezierCurveTo(86.3, 77.7, 87.7, 78.8, 89.6, 80.4);
            ctx.bezierCurveTo(89.0, 80.7, 88.6, 81.0, 88.4, 81.3);
            ctx.bezierCurveTo(87.6, 80.2, 86.3, 79.1, 84.5, 77.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(92.6, 72.6);
            ctx.lineTo(95.8, 72.3);
            ctx.bezierCurveTo(95.8, 72.3, 95.7, 72.2, 95.6, 72.0);
            ctx.bezierCurveTo(95.3, 71.6, 95.0, 71.3, 94.8, 71.2);
            ctx.lineTo(95.8, 70.6);
            ctx.bezierCurveTo(96.6, 71.5, 97.3, 72.3, 97.7, 73.2);
            ctx.lineTo(96.5, 73.8);
            ctx.bezierCurveTo(96.4, 73.6, 96.3, 73.4, 96.2, 73.2);
            ctx.bezierCurveTo(94.6, 73.3, 93.0, 73.5, 91.5, 73.8);
            ctx.lineTo(91.1, 72.5);
            ctx.bezierCurveTo(91.5, 72.5, 91.8, 72.3, 92.1, 71.8);
            ctx.bezierCurveTo(92.7, 71.1, 93.2, 70.2, 93.6, 69.2);
            ctx.bezierCurveTo(94.6, 69.5, 95.0, 69.7, 94.9, 69.8);
            ctx.bezierCurveTo(94.9, 69.9, 94.8, 69.9, 94.7, 70.0);
            ctx.bezierCurveTo(94.6, 70.2, 94.4, 70.3, 94.3, 70.4);
            ctx.bezierCurveTo(94.2, 70.5, 94.0, 70.8, 93.7, 71.3);
            ctx.bezierCurveTo(93.1, 72.0, 92.8, 72.4, 92.6, 72.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(96.8, 75.2);
            ctx.lineTo(96.8, 80.7);
            ctx.bezierCurveTo(96.8, 81.2, 96.1, 81.5, 94.8, 81.6);
            ctx.bezierCurveTo(94.8, 81.1, 94.6, 80.7, 94.3, 80.3);
            ctx.bezierCurveTo(95.2, 80.4, 95.7, 80.4, 95.8, 80.3);
            ctx.lineTo(95.8, 79.2);
            ctx.lineTo(92.9, 79.2);
            ctx.lineTo(92.9, 80.2);
            ctx.bezierCurveTo(92.9, 80.6, 92.9, 81.0, 93.0, 81.6);
            ctx.lineTo(91.7, 81.6);
            ctx.bezierCurveTo(91.8, 80.9, 91.8, 80.4, 91.8, 80.2);
            ctx.lineTo(91.8, 75.2);
            ctx.bezierCurveTo(91.8, 74.8, 91.8, 74.5, 91.7, 74.3);
            ctx.bezierCurveTo(92.3, 74.3, 92.7, 74.4, 93.1, 74.4);
            ctx.lineTo(95.3, 74.4);
            ctx.bezierCurveTo(95.6, 74.4, 96.2, 74.3, 96.9, 74.3);
            ctx.bezierCurveTo(96.9, 74.7, 96.8, 75.0, 96.8, 75.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(95.8, 75.2);
            ctx.lineTo(92.9, 75.2);
            ctx.lineTo(92.9, 76.4);
            ctx.lineTo(95.8, 76.4);
            ctx.lineTo(95.8, 75.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(95.8, 77.2);
            ctx.lineTo(92.9, 77.2);
            ctx.lineTo(92.9, 78.5);
            ctx.lineTo(95.8, 78.5);
            ctx.lineTo(95.8, 77.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(99.2, 70.2);
            ctx.lineTo(99.2, 71.6);
            ctx.bezierCurveTo(99.9, 71.3, 100.8, 70.7, 101.8, 70.0);
            ctx.bezierCurveTo(102.5, 70.6, 102.8, 71.0, 102.7, 71.1);
            ctx.lineTo(102.5, 71.2);
            ctx.bezierCurveTo(102.1, 71.3, 101.9, 71.4, 101.6, 71.5);
            ctx.bezierCurveTo(101.2, 71.6, 100.7, 71.8, 100.1, 72.1);
            ctx.bezierCurveTo(99.7, 72.2, 99.4, 72.3, 99.2, 72.4);
            ctx.lineTo(99.2, 73.4);
            ctx.bezierCurveTo(99.2, 73.5, 99.5, 73.6, 100.1, 73.7);
            ctx.bezierCurveTo(100.8, 73.7, 101.3, 73.7, 101.6, 73.6);
            ctx.bezierCurveTo(101.8, 73.4, 102.0, 73.0, 102.0, 72.2);
            ctx.bezierCurveTo(102.4, 72.5, 102.9, 72.8, 103.3, 73.0);
            ctx.bezierCurveTo(103.0, 74.0, 102.6, 74.5, 102.0, 74.6);
            ctx.bezierCurveTo(101.5, 74.7, 100.6, 74.8, 99.3, 74.7);
            ctx.bezierCurveTo(98.5, 74.5, 98.1, 74.3, 98.1, 73.8);
            ctx.bezierCurveTo(98.2, 71.7, 98.1, 70.2, 98.0, 69.3);
            ctx.bezierCurveTo(98.0, 69.2, 98.0, 69.1, 98.0, 69.1);
            ctx.bezierCurveTo(98.9, 69.2, 99.4, 69.3, 99.5, 69.4);
            ctx.bezierCurveTo(99.5, 69.5, 99.4, 69.5, 99.3, 69.6);
            ctx.bezierCurveTo(99.2, 69.7, 99.2, 69.9, 99.2, 70.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(99.2, 75.9);
            ctx.lineTo(99.2, 77.6);
            ctx.bezierCurveTo(99.3, 77.6, 99.5, 77.5, 99.8, 77.3);
            ctx.bezierCurveTo(100.8, 76.7, 101.5, 76.3, 101.9, 76.0);
            ctx.bezierCurveTo(102.0, 76.1, 102.1, 76.3, 102.3, 76.5);
            ctx.bezierCurveTo(102.6, 76.9, 102.8, 77.1, 102.7, 77.1);
            ctx.bezierCurveTo(102.7, 77.1, 102.7, 77.2, 102.6, 77.2);
            ctx.bezierCurveTo(102.4, 77.3, 102.1, 77.4, 101.9, 77.4);
            ctx.bezierCurveTo(101.9, 77.4, 101.4, 77.6, 100.4, 78.0);
            ctx.bezierCurveTo(99.8, 78.2, 99.5, 78.3, 99.2, 78.4);
            ctx.lineTo(99.2, 79.8);
            ctx.bezierCurveTo(99.2, 80.1, 99.5, 80.3, 100.1, 80.3);
            ctx.bezierCurveTo(101.1, 80.2, 101.6, 80.1, 101.8, 80.0);
            ctx.bezierCurveTo(102.0, 79.9, 102.2, 79.4, 102.1, 78.6);
            ctx.bezierCurveTo(102.6, 79.0, 103.0, 79.2, 103.4, 79.4);
            ctx.bezierCurveTo(103.1, 80.3, 102.7, 80.9, 102.3, 81.1);
            ctx.bezierCurveTo(101.8, 81.2, 100.7, 81.2, 99.2, 81.2);
            ctx.bezierCurveTo(98.5, 81.1, 98.2, 80.8, 98.1, 80.3);
            ctx.lineTo(98.1, 76.4);
            ctx.bezierCurveTo(98.1, 75.8, 98.1, 75.3, 98.0, 75.0);
            ctx.bezierCurveTo(98.9, 75.2, 99.4, 75.3, 99.4, 75.3);
            ctx.bezierCurveTo(99.4, 75.4, 99.4, 75.4, 99.3, 75.5);
            ctx.bezierCurveTo(99.2, 75.7, 99.2, 75.8, 99.2, 75.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(114.9, 69.8);
            ctx.lineTo(114.9, 70.3);
            ctx.lineTo(115.5, 70.3);
            ctx.bezierCurveTo(116.8, 70.3, 117.4, 70.3, 117.6, 70.2);
            ctx.lineTo(117.6, 71.2);
            ctx.bezierCurveTo(117.3, 71.2, 116.6, 71.1, 115.5, 71.1);
            ctx.lineTo(114.9, 71.1);
            ctx.bezierCurveTo(114.9, 71.5, 115.0, 71.7, 115.0, 71.8);
            ctx.lineTo(113.9, 71.8);
            ctx.bezierCurveTo(113.9, 71.8, 114.0, 72.0, 114.3, 72.4);
            ctx.lineTo(114.9, 72.4);
            ctx.bezierCurveTo(116.2, 72.4, 116.9, 72.4, 117.1, 72.3);
            ctx.lineTo(117.1, 73.2);
            ctx.bezierCurveTo(116.9, 73.1, 116.2, 73.1, 115.0, 73.1);
            ctx.lineTo(114.1, 73.1);
            ctx.lineTo(114.1, 73.8);
            ctx.lineTo(115.0, 73.8);
            ctx.bezierCurveTo(115.9, 73.8, 116.5, 73.8, 116.8, 73.7);
            ctx.lineTo(116.8, 74.5);
            ctx.bezierCurveTo(116.5, 74.5, 115.9, 74.4, 114.9, 74.4);
            ctx.lineTo(114.1, 74.4);
            ctx.lineTo(114.1, 75.1);
            ctx.lineTo(114.9, 75.1);
            ctx.bezierCurveTo(115.8, 75.2, 116.4, 75.1, 116.7, 75.0);
            ctx.lineTo(116.7, 75.8);
            ctx.bezierCurveTo(116.4, 75.8, 115.8, 75.7, 114.9, 75.8);
            ctx.lineTo(114.0, 75.8);
            ctx.lineTo(114.0, 76.5);
            ctx.lineTo(114.9, 76.5);
            ctx.bezierCurveTo(116.2, 76.5, 117.0, 76.5, 117.2, 76.4);
            ctx.lineTo(117.2, 77.3);
            ctx.bezierCurveTo(116.9, 77.2, 116.2, 77.2, 114.9, 77.2);
            ctx.lineTo(110.9, 77.2);
            ctx.lineTo(110.9, 77.9);
            ctx.lineTo(113.8, 77.9);
            ctx.bezierCurveTo(115.1, 77.9, 115.9, 77.8, 116.3, 77.8);
            ctx.bezierCurveTo(115.7, 78.7, 115.0, 79.4, 114.1, 80.1);
            ctx.bezierCurveTo(115.6, 80.5, 116.8, 80.6, 117.6, 80.6);
            ctx.bezierCurveTo(117.1, 80.9, 116.8, 81.3, 116.7, 81.7);
            ctx.bezierCurveTo(115.5, 81.5, 114.3, 81.0, 113.2, 80.5);
            ctx.bezierCurveTo(112.2, 81.0, 111.0, 81.4, 109.5, 81.8);
            ctx.lineTo(109.4, 81.7);
            ctx.bezierCurveTo(109.1, 81.4, 108.8, 81.1, 108.6, 80.9);
            ctx.bezierCurveTo(109.8, 80.8, 111.0, 80.5, 112.3, 80.0);
            ctx.bezierCurveTo(112.2, 80.0, 112.1, 79.9, 111.9, 79.7);
            ctx.bezierCurveTo(111.3, 79.3, 110.9, 78.9, 110.6, 78.6);
            ctx.bezierCurveTo(110.0, 78.6, 109.5, 78.7, 109.2, 78.7);
            ctx.lineTo(109.2, 77.8);
            ctx.bezierCurveTo(109.3, 77.8, 109.6, 77.9, 110.0, 77.9);
            ctx.lineTo(110.0, 74.1);
            ctx.bezierCurveTo(109.9, 74.3, 109.6, 74.6, 109.2, 75.1);
            ctx.lineTo(108.5, 74.6);
            ctx.bezierCurveTo(109.7, 73.6, 110.5, 72.5, 110.9, 71.3);
            ctx.lineTo(111.2, 71.4);
            ctx.bezierCurveTo(111.2, 71.4, 111.3, 71.3, 111.3, 71.1);
            ctx.lineTo(110.7, 71.1);
            ctx.bezierCurveTo(109.8, 71.1, 109.2, 71.1, 109.0, 71.2);
            ctx.lineTo(109.0, 70.2);
            ctx.bezierCurveTo(109.0, 70.3, 108.8, 70.4, 108.7, 70.6);
            ctx.bezierCurveTo(108.2, 71.2, 107.7, 71.6, 107.4, 71.8);
            ctx.bezierCurveTo(107.8, 72.8, 108.1, 73.5, 108.3, 74.1);
            ctx.bezierCurveTo(108.5, 75.3, 108.6, 76.9, 108.5, 79.0);
            ctx.lineTo(108.5, 79.0);
            ctx.bezierCurveTo(108.5, 80.1, 108.1, 80.8, 107.4, 81.0);
            ctx.bezierCurveTo(107.2, 81.1, 106.6, 81.3, 105.8, 81.4);
            ctx.bezierCurveTo(105.8, 81.0, 105.6, 80.6, 105.3, 80.3);
            ctx.bezierCurveTo(106.1, 80.3, 106.7, 80.3, 106.9, 80.2);
            ctx.bezierCurveTo(107.3, 80.0, 107.5, 79.2, 107.5, 77.6);
            ctx.bezierCurveTo(107.5, 77.0, 107.5, 76.2, 107.5, 75.2);
            ctx.bezierCurveTo(106.8, 76.2, 106.1, 77.1, 105.4, 77.9);
            ctx.bezierCurveTo(105.1, 77.5, 104.8, 77.3, 104.6, 77.2);
            ctx.bezierCurveTo(106.0, 75.8, 106.9, 74.7, 107.3, 73.9);
            ctx.bezierCurveTo(107.2, 73.6, 107.1, 73.2, 106.9, 72.9);
            ctx.bezierCurveTo(106.9, 72.7, 106.8, 72.6, 106.8, 72.5);
            ctx.bezierCurveTo(106.6, 72.8, 106.1, 73.2, 105.5, 73.8);
            ctx.bezierCurveTo(105.3, 73.6, 105.0, 73.4, 104.6, 73.2);
            ctx.bezierCurveTo(105.0, 72.9, 105.6, 72.5, 106.3, 71.8);
            ctx.bezierCurveTo(105.8, 71.1, 105.3, 70.6, 104.9, 70.3);
            ctx.lineTo(105.7, 69.6);
            ctx.bezierCurveTo(105.8, 69.7, 105.9, 69.8, 106.0, 70.0);
            ctx.bezierCurveTo(106.5, 70.6, 106.8, 71.0, 107.0, 71.2);
            ctx.bezierCurveTo(107.0, 71.2, 107.1, 71.1, 107.2, 71.0);
            ctx.bezierCurveTo(107.8, 70.3, 108.2, 69.7, 108.4, 69.3);
            ctx.bezierCurveTo(109.2, 69.6, 109.5, 69.8, 109.5, 69.9);
            ctx.bezierCurveTo(109.5, 69.9, 109.4, 70.0, 109.3, 70.0);
            ctx.bezierCurveTo(109.2, 70.1, 109.1, 70.2, 109.1, 70.2);
            ctx.bezierCurveTo(109.2, 70.2, 109.7, 70.3, 110.6, 70.3);
            ctx.lineTo(111.2, 70.3);
            ctx.lineTo(111.2, 69.8);
            ctx.bezierCurveTo(111.2, 69.4, 111.2, 69.2, 111.2, 69.1);
            ctx.bezierCurveTo(111.9, 69.1, 112.3, 69.1, 112.3, 69.1);
            ctx.lineTo(112.3, 69.2);
            ctx.bezierCurveTo(112.2, 69.4, 112.1, 69.6, 112.1, 69.8);
            ctx.lineTo(112.1, 70.3);
            ctx.lineTo(114.0, 70.3);
            ctx.lineTo(114.0, 69.8);
            ctx.bezierCurveTo(114.0, 69.4, 114.0, 69.1, 113.9, 69.0);
            ctx.bezierCurveTo(114.3, 69.0, 114.7, 69.0, 115.1, 69.1);
            ctx.bezierCurveTo(115.1, 69.1, 115.1, 69.2, 115.0, 69.3);
            ctx.bezierCurveTo(115.0, 69.5, 114.9, 69.6, 114.9, 69.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(110.9, 73.1);
            ctx.lineTo(110.9, 73.8);
            ctx.lineTo(113.2, 73.8);
            ctx.lineTo(113.2, 73.1);
            ctx.lineTo(110.9, 73.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(110.9, 74.4);
            ctx.lineTo(110.9, 75.1);
            ctx.lineTo(113.2, 75.1);
            ctx.lineTo(113.2, 74.4);
            ctx.lineTo(110.9, 74.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(113.2, 75.8);
            ctx.lineTo(110.9, 75.8);
            ctx.lineTo(110.9, 76.5);
            ctx.lineTo(113.2, 76.5);
            ctx.lineTo(113.2, 75.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(112.3, 71.7);
            ctx.lineTo(111.7, 71.7);
            ctx.bezierCurveTo(111.9, 71.8, 112.0, 71.9, 112.0, 71.9);
            ctx.bezierCurveTo(112.0, 71.9, 112.0, 72.0, 111.9, 72.0);
            ctx.bezierCurveTo(111.7, 72.1, 111.5, 72.3, 111.3, 72.4);
            ctx.lineTo(113.3, 72.4);
            ctx.bezierCurveTo(113.1, 72.2, 113.0, 71.9, 112.8, 71.7);
            ctx.lineTo(113.7, 71.4);
            ctx.lineTo(113.9, 71.7);
            ctx.bezierCurveTo(114.0, 71.6, 114.0, 71.4, 114.0, 71.1);
            ctx.lineTo(112.2, 71.1);
            ctx.bezierCurveTo(112.2, 71.4, 112.2, 71.6, 112.3, 71.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(114.3, 78.6);
            ctx.lineTo(111.7, 78.6);
            ctx.bezierCurveTo(111.7, 78.6, 111.9, 78.7, 112.1, 79.0);
            ctx.bezierCurveTo(112.6, 79.3, 113.0, 79.5, 113.2, 79.7);
            ctx.bezierCurveTo(114.0, 79.0, 114.4, 78.7, 114.3, 78.6);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(121.8, 74.8);
            ctx.lineTo(121.8, 79.1);
            ctx.bezierCurveTo(121.8, 79.9, 121.9, 80.7, 121.9, 81.4);
            ctx.bezierCurveTo(121.9, 81.5, 121.9, 81.6, 121.9, 81.6);
            ctx.lineTo(120.7, 81.6);
            ctx.bezierCurveTo(120.7, 81.6, 120.7, 81.5, 120.7, 81.5);
            ctx.bezierCurveTo(120.7, 80.9, 120.8, 80.1, 120.8, 79.1);
            ctx.lineTo(120.8, 76.1);
            ctx.bezierCurveTo(120.7, 76.2, 120.5, 76.4, 120.3, 76.7);
            ctx.bezierCurveTo(119.8, 77.1, 119.5, 77.4, 119.3, 77.6);
            ctx.bezierCurveTo(119.2, 77.2, 118.9, 76.9, 118.6, 76.5);
            ctx.bezierCurveTo(120.0, 75.5, 121.2, 74.1, 122.0, 72.3);
            ctx.bezierCurveTo(122.5, 72.5, 122.9, 72.8, 123.2, 73.2);
            ctx.bezierCurveTo(123.2, 73.3, 123.2, 73.3, 123.1, 73.4);
            ctx.bezierCurveTo(122.9, 73.4, 122.8, 73.5, 122.7, 73.7);
            ctx.bezierCurveTo(122.6, 73.9, 122.3, 74.2, 122.0, 74.5);
            ctx.bezierCurveTo(121.9, 74.6, 121.9, 74.7, 121.8, 74.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(121.9, 68.9);
            ctx.bezierCurveTo(122.6, 69.3, 123.0, 69.7, 123.1, 69.9);
            ctx.bezierCurveTo(123.1, 70.0, 123.0, 70.1, 122.9, 70.1);
            ctx.bezierCurveTo(122.7, 70.2, 122.6, 70.2, 122.5, 70.3);
            ctx.bezierCurveTo(122.4, 70.4, 122.2, 70.7, 121.9, 71.0);
            ctx.bezierCurveTo(120.9, 72.2, 120.2, 73.0, 119.6, 73.5);
            ctx.bezierCurveTo(119.5, 73.2, 119.1, 72.9, 118.7, 72.6);
            ctx.bezierCurveTo(119.9, 71.8, 121.0, 70.6, 121.9, 68.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(125.2, 74.9);
            ctx.lineTo(129.5, 74.9);
            ctx.bezierCurveTo(130.3, 74.9, 130.9, 74.8, 131.3, 74.7);
            ctx.lineTo(131.3, 74.7);
            ctx.lineTo(131.3, 75.9);
            ctx.lineTo(131.2, 75.9);
            ctx.bezierCurveTo(130.9, 75.9, 130.4, 75.8, 129.7, 75.8);
            ctx.lineTo(129.7, 76.9);
            ctx.bezierCurveTo(130.4, 76.9, 131.0, 76.8, 131.4, 76.7);
            ctx.bezierCurveTo(131.5, 76.7, 131.6, 76.7, 131.6, 76.7);
            ctx.lineTo(131.6, 77.9);
            ctx.bezierCurveTo(131.6, 77.9, 131.5, 77.9, 131.4, 77.9);
            ctx.bezierCurveTo(131.1, 77.8, 130.5, 77.8, 129.7, 77.8);
            ctx.lineTo(129.7, 80.6);
            ctx.bezierCurveTo(129.9, 81.4, 129.0, 81.8, 127.2, 81.8);
            ctx.bezierCurveTo(127.1, 81.2, 126.9, 80.7, 126.6, 80.4);
            ctx.bezierCurveTo(128.1, 80.6, 128.7, 80.4, 128.5, 79.9);
            ctx.lineTo(128.5, 77.8);
            ctx.lineTo(124.5, 77.8);
            ctx.bezierCurveTo(123.8, 77.8, 123.2, 77.8, 122.5, 77.9);
            ctx.bezierCurveTo(122.4, 77.9, 122.4, 77.9, 122.3, 77.9);
            ctx.lineTo(122.3, 76.8);
            ctx.bezierCurveTo(122.4, 76.8, 122.4, 76.8, 122.5, 76.8);
            ctx.bezierCurveTo(123.1, 76.8, 123.8, 76.9, 124.4, 76.9);
            ctx.lineTo(128.5, 76.9);
            ctx.lineTo(128.5, 75.8);
            ctx.lineTo(125.1, 75.8);
            ctx.bezierCurveTo(124.4, 75.8, 123.8, 75.9, 123.2, 75.9);
            ctx.bezierCurveTo(123.1, 75.9, 123.1, 75.9, 123.0, 75.9);
            ctx.lineTo(123.0, 74.7);
            ctx.bezierCurveTo(123.1, 74.7, 123.2, 74.7, 123.3, 74.7);
            ctx.bezierCurveTo(123.9, 74.8, 124.5, 74.9, 125.2, 74.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(125.6, 69.5);
            ctx.lineTo(128.8, 69.5);
            ctx.bezierCurveTo(129.6, 69.5, 130.2, 69.5, 130.5, 69.4);
            ctx.bezierCurveTo(130.4, 69.6, 130.4, 70.2, 130.4, 71.0);
            ctx.lineTo(130.4, 72.6);
            ctx.bezierCurveTo(130.4, 73.4, 130.4, 73.9, 130.5, 74.1);
            ctx.bezierCurveTo(130.4, 74.1, 129.8, 74.0, 128.9, 74.0);
            ctx.lineTo(125.5, 74.0);
            ctx.bezierCurveTo(124.6, 74.0, 124.1, 74.1, 123.8, 74.1);
            ctx.bezierCurveTo(123.9, 73.9, 124.0, 73.2, 124.0, 72.3);
            ctx.lineTo(124.0, 70.8);
            ctx.bezierCurveTo(124.0, 70.1, 123.9, 69.6, 123.8, 69.4);
            ctx.bezierCurveTo(124.2, 69.5, 124.8, 69.5, 125.6, 69.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(126.4, 80.0);
            ctx.lineTo(125.1, 80.3);
            ctx.bezierCurveTo(124.8, 79.5, 124.6, 78.9, 124.4, 78.5);
            ctx.lineTo(125.6, 78.1);
            ctx.bezierCurveTo(125.9, 78.6, 126.1, 79.2, 126.4, 80.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(125.0, 70.4);
            ctx.lineTo(125.0, 71.4);
            ctx.lineTo(129.3, 71.4);
            ctx.lineTo(129.3, 70.4);
            ctx.lineTo(125.0, 70.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(125.0, 72.2);
            ctx.lineTo(125.0, 73.2);
            ctx.lineTo(129.3, 73.2);
            ctx.lineTo(129.3, 72.2);
            ctx.lineTo(125.0, 72.2);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(145.3, 74.5);
            ctx.lineTo(145.3, 75.9);
            ctx.bezierCurveTo(144.8, 75.9, 143.9, 75.8, 142.8, 75.8);
            ctx.lineTo(135.9, 75.8);
            ctx.bezierCurveTo(134.7, 75.8, 133.8, 75.9, 133.2, 75.9);
            ctx.lineTo(133.2, 74.5);
            ctx.bezierCurveTo(133.9, 74.6, 134.7, 74.6, 135.8, 74.6);
            ctx.lineTo(142.7, 74.6);
            ctx.bezierCurveTo(143.9, 74.6, 144.8, 74.6, 145.3, 74.5);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(149.2, 74.9);
            ctx.bezierCurveTo(149.5, 75.2, 149.9, 75.6, 150.3, 75.9);
            ctx.bezierCurveTo(150.2, 76.2, 149.9, 76.7, 149.5, 77.5);
            ctx.bezierCurveTo(149.3, 78.0, 148.9, 78.7, 148.5, 79.5);
            ctx.bezierCurveTo(148.2, 80.1, 148.0, 80.6, 147.9, 80.9);
            ctx.bezierCurveTo(147.3, 80.4, 146.9, 80.1, 146.5, 79.8);
            ctx.bezierCurveTo(147.6, 78.7, 148.5, 77.1, 149.2, 74.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(150.2, 73.1);
            ctx.lineTo(148.8, 73.8);
            ctx.bezierCurveTo(148.4, 72.8, 147.8, 71.8, 147.0, 70.9);
            ctx.lineTo(148.3, 70.3);
            ctx.bezierCurveTo(148.7, 70.7, 149.3, 71.6, 150.2, 73.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(153.5, 73.7);
            ctx.bezierCurveTo(154.5, 73.7, 155.0, 73.8, 155.1, 73.9);
            ctx.bezierCurveTo(155.1, 73.9, 155.1, 73.9, 155.1, 74.0);
            ctx.bezierCurveTo(154.9, 74.2, 154.8, 74.5, 154.8, 75.0);
            ctx.bezierCurveTo(154.9, 78.0, 156.5, 79.8, 159.6, 80.3);
            ctx.bezierCurveTo(159.0, 80.7, 158.6, 81.2, 158.3, 81.8);
            ctx.bezierCurveTo(155.8, 80.6, 154.5, 78.9, 154.3, 76.9);
            ctx.bezierCurveTo(153.9, 79.0, 152.5, 80.7, 150.1, 81.7);
            ctx.bezierCurveTo(149.8, 81.3, 149.4, 80.9, 148.7, 80.7);
            ctx.bezierCurveTo(152.2, 80.0, 153.8, 77.7, 153.5, 73.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(153.2, 71.8);
            ctx.lineTo(157.6, 71.8);
            ctx.bezierCurveTo(158.2, 71.8, 158.7, 71.8, 159.0, 71.7);
            ctx.bezierCurveTo(158.6, 72.7, 158.2, 73.9, 157.7, 75.2);
            ctx.lineTo(156.2, 75.0);
            ctx.bezierCurveTo(156.4, 74.6, 156.7, 74.1, 157.2, 73.2);
            ctx.bezierCurveTo(157.3, 73.0, 157.3, 72.8, 157.4, 72.8);
            ctx.lineTo(152.7, 72.8);
            ctx.bezierCurveTo(152.3, 73.3, 151.9, 74.2, 151.2, 75.3);
            ctx.bezierCurveTo(150.9, 75.1, 150.5, 74.9, 150.0, 74.7);
            ctx.bezierCurveTo(151.3, 73.3, 152.2, 71.4, 152.8, 68.9);
            ctx.bezierCurveTo(153.9, 69.2, 154.5, 69.3, 154.6, 69.5);
            ctx.bezierCurveTo(154.6, 69.5, 154.5, 69.6, 154.4, 69.7);
            ctx.bezierCurveTo(154.2, 69.9, 154.0, 70.1, 153.9, 70.3);
            ctx.bezierCurveTo(153.5, 71.0, 153.3, 71.5, 153.2, 71.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(163.5, 74.7);
            ctx.lineTo(163.5, 75.2);
            ctx.lineTo(164.1, 74.7);
            ctx.lineTo(165.1, 75.8);
            ctx.lineTo(165.1, 75.2);
            ctx.bezierCurveTo(165.2, 75.3, 165.8, 75.3, 166.8, 75.3);
            ctx.lineTo(171.6, 75.3);
            ctx.bezierCurveTo(172.6, 75.3, 173.3, 75.2, 173.7, 75.2);
            ctx.lineTo(173.7, 76.1);
            ctx.bezierCurveTo(173.4, 76.1, 172.7, 76.1, 171.5, 76.1);
            ctx.lineTo(166.7, 76.1);
            ctx.bezierCurveTo(166.6, 76.1, 166.4, 76.1, 166.2, 76.1);
            ctx.bezierCurveTo(165.7, 76.0, 165.4, 76.0, 165.3, 76.1);
            ctx.lineTo(165.4, 76.3);
            ctx.lineTo(164.5, 76.8);
            ctx.bezierCurveTo(164.2, 76.1, 163.9, 75.6, 163.5, 75.3);
            ctx.lineTo(163.5, 79.2);
            ctx.bezierCurveTo(163.5, 80.7, 163.5, 81.6, 163.6, 81.7);
            ctx.lineTo(162.4, 81.7);
            ctx.bezierCurveTo(162.5, 81.6, 162.5, 80.9, 162.5, 79.4);
            ctx.lineTo(162.5, 75.9);
            ctx.bezierCurveTo(162.4, 76.2, 162.0, 76.7, 161.5, 77.3);
            ctx.bezierCurveTo(161.1, 77.0, 160.8, 76.8, 160.5, 76.7);
            ctx.bezierCurveTo(162.0, 75.5, 163.0, 74.1, 163.6, 72.7);
            ctx.lineTo(162.4, 72.7);
            ctx.bezierCurveTo(161.5, 72.7, 160.9, 72.7, 160.7, 72.8);
            ctx.lineTo(160.7, 71.7);
            ctx.bezierCurveTo(160.9, 71.8, 161.5, 71.8, 162.7, 71.8);
            ctx.bezierCurveTo(163.9, 71.8, 164.7, 71.8, 165.0, 71.7);
            ctx.bezierCurveTo(164.8, 72.4, 164.3, 73.4, 163.5, 74.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(164.0, 71.1);
            ctx.lineTo(162.9, 71.3);
            ctx.bezierCurveTo(162.9, 71.2, 162.9, 71.1, 162.8, 70.9);
            ctx.bezierCurveTo(162.5, 70.2, 162.3, 69.7, 162.1, 69.4);
            ctx.lineTo(163.1, 69.2);
            ctx.bezierCurveTo(163.2, 69.3, 163.4, 69.8, 163.7, 70.5);
            ctx.bezierCurveTo(163.9, 70.8, 164.0, 71.0, 164.0, 71.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(167.4, 76.7);
            ctx.lineTo(170.7, 76.7);
            ctx.bezierCurveTo(171.6, 76.7, 172.2, 76.6, 172.4, 76.6);
            ctx.bezierCurveTo(172.4, 76.8, 172.3, 77.2, 172.3, 77.9);
            ctx.bezierCurveTo(172.3, 78.4, 172.3, 78.9, 172.4, 79.1);
            ctx.bezierCurveTo(172.2, 79.1, 171.8, 79.1, 171.0, 79.1);
            ctx.lineTo(170.5, 79.1);
            ctx.bezierCurveTo(171.2, 79.4, 171.5, 79.5, 171.4, 79.6);
            ctx.bezierCurveTo(171.4, 79.6, 171.3, 79.7, 171.3, 79.7);
            ctx.bezierCurveTo(171.0, 79.8, 170.7, 80.0, 170.5, 80.3);
            ctx.lineTo(172.1, 80.3);
            ctx.bezierCurveTo(172.0, 80.3, 172.4, 80.3, 173.1, 80.3);
            ctx.bezierCurveTo(173.4, 80.3, 173.5, 80.3, 173.6, 80.3);
            ctx.lineTo(173.6, 81.3);
            ctx.bezierCurveTo(173.5, 81.2, 173.0, 81.2, 172.1, 81.2);
            ctx.lineTo(166.7, 81.2);
            ctx.bezierCurveTo(166.5, 81.2, 166.3, 81.2, 166.0, 81.2);
            ctx.bezierCurveTo(165.8, 81.2, 165.6, 81.2, 165.5, 81.2);
            ctx.bezierCurveTo(165.2, 81.2, 165.0, 81.2, 164.9, 81.3);
            ctx.lineTo(164.9, 80.3);
            ctx.bezierCurveTo(165.1, 80.4, 165.6, 80.4, 166.4, 80.3);
            ctx.lineTo(167.6, 80.3);
            ctx.bezierCurveTo(167.4, 80.1, 167.2, 79.8, 166.9, 79.4);
            ctx.lineTo(167.9, 79.2);
            ctx.bezierCurveTo(168.1, 79.7, 168.3, 80.0, 168.5, 80.3);
            ctx.lineTo(169.7, 80.3);
            ctx.bezierCurveTo(169.8, 80.2, 169.9, 80.0, 170.1, 79.7);
            ctx.bezierCurveTo(170.2, 79.4, 170.3, 79.2, 170.3, 79.1);
            ctx.lineTo(167.4, 79.1);
            ctx.bezierCurveTo(166.6, 79.1, 166.1, 79.1, 165.7, 79.2);
            ctx.bezierCurveTo(165.8, 78.9, 165.8, 78.4, 165.8, 77.8);
            ctx.bezierCurveTo(165.8, 77.2, 165.8, 76.8, 165.8, 76.6);
            ctx.bezierCurveTo(166.0, 76.6, 166.5, 76.7, 167.4, 76.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(168.5, 69.8);
            ctx.lineTo(168.5, 70.4);
            ctx.lineTo(169.7, 70.4);
            ctx.lineTo(169.7, 69.8);
            ctx.bezierCurveTo(169.7, 69.4, 169.6, 69.1, 169.6, 68.9);
            ctx.bezierCurveTo(169.7, 68.9, 169.9, 69.0, 170.2, 69.0);
            ctx.bezierCurveTo(170.6, 69.0, 170.7, 69.0, 170.7, 69.1);
            ctx.bezierCurveTo(170.7, 69.1, 170.7, 69.1, 170.7, 69.2);
            ctx.bezierCurveTo(170.6, 69.4, 170.5, 69.6, 170.5, 69.9);
            ctx.lineTo(170.5, 70.4);
            ctx.lineTo(171.6, 70.4);
            ctx.bezierCurveTo(172.3, 70.4, 172.7, 70.4, 172.8, 70.3);
            ctx.bezierCurveTo(172.8, 70.5, 172.8, 70.9, 172.8, 71.5);
            ctx.lineTo(172.8, 73.2);
            ctx.bezierCurveTo(172.8, 73.9, 172.8, 74.4, 172.8, 74.6);
            ctx.bezierCurveTo(172.5, 74.6, 171.9, 74.6, 171.1, 74.6);
            ctx.lineTo(166.9, 74.6);
            ctx.bezierCurveTo(166.1, 74.6, 165.6, 74.6, 165.4, 74.6);
            ctx.bezierCurveTo(165.4, 74.5, 165.4, 74.1, 165.4, 73.4);
            ctx.lineTo(165.4, 71.5);
            ctx.bezierCurveTo(165.4, 71.0, 165.4, 70.6, 165.4, 70.3);
            ctx.bezierCurveTo(165.5, 70.4, 166.0, 70.4, 166.8, 70.4);
            ctx.lineTo(167.6, 70.4);
            ctx.lineTo(167.6, 69.8);
            ctx.bezierCurveTo(167.6, 69.4, 167.5, 69.1, 167.4, 68.9);
            ctx.bezierCurveTo(168.2, 69.0, 168.6, 69.1, 168.6, 69.1);
            ctx.bezierCurveTo(168.6, 69.1, 168.6, 69.2, 168.6, 69.3);
            ctx.bezierCurveTo(168.5, 69.5, 168.5, 69.7, 168.5, 69.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(166.4, 71.1);
            ctx.lineTo(166.4, 72.2);
            ctx.lineTo(167.6, 72.2);
            ctx.lineTo(167.6, 71.1);
            ctx.lineTo(166.4, 71.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(166.4, 72.8);
            ctx.lineTo(166.4, 73.8);
            ctx.lineTo(167.6, 73.8);
            ctx.lineTo(167.6, 72.8);
            ctx.lineTo(166.4, 72.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(166.9, 77.4);
            ctx.lineTo(166.9, 78.3);
            ctx.lineTo(171.2, 78.3);
            ctx.lineTo(171.2, 77.4);
            ctx.lineTo(166.9, 77.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(168.5, 71.2);
            ctx.lineTo(168.5, 72.2);
            ctx.lineTo(169.7, 72.2);
            ctx.lineTo(169.7, 71.2);
            ctx.lineTo(168.5, 71.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(168.5, 72.8);
            ctx.lineTo(168.5, 73.8);
            ctx.lineTo(169.7, 73.8);
            ctx.lineTo(169.7, 72.8);
            ctx.lineTo(168.5, 72.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(170.6, 71.2);
            ctx.lineTo(170.6, 72.2);
            ctx.lineTo(171.8, 72.2);
            ctx.lineTo(171.8, 71.2);
            ctx.lineTo(170.6, 71.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(170.6, 72.8);
            ctx.lineTo(170.6, 73.8);
            ctx.lineTo(171.8, 73.8);
            ctx.lineTo(171.8, 72.8);
            ctx.lineTo(170.6, 72.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(178.7, 70.4);
            ctx.lineTo(178.7, 72.4);
            ctx.bezierCurveTo(179.0, 72.4, 179.3, 72.4, 179.6, 72.3);
            ctx.bezierCurveTo(179.7, 72.3, 179.8, 72.3, 179.8, 72.3);
            ctx.lineTo(179.8, 73.4);
            ctx.lineTo(179.7, 73.4);
            ctx.bezierCurveTo(179.4, 73.3, 179.0, 73.2, 178.7, 73.2);
            ctx.lineTo(178.7, 75.8);
            ctx.lineTo(180.2, 75.1);
            ctx.lineTo(180.5, 76.1);
            ctx.lineTo(178.7, 76.9);
            ctx.lineTo(178.7, 79.7);
            ctx.bezierCurveTo(178.7, 80.3, 178.7, 80.9, 178.8, 81.4);
            ctx.lineTo(178.8, 81.5);
            ctx.lineTo(177.5, 81.5);
            ctx.lineTo(177.5, 81.3);
            ctx.bezierCurveTo(177.6, 80.8, 177.7, 80.3, 177.7, 79.7);
            ctx.lineTo(177.7, 77.4);
            ctx.lineTo(175.5, 78.4);
            ctx.lineTo(174.9, 77.4);
            ctx.lineTo(177.7, 76.2);
            ctx.lineTo(177.7, 73.2);
            ctx.lineTo(176.5, 73.2);
            ctx.bezierCurveTo(176.4, 73.6, 176.4, 74.0, 176.3, 74.6);
            ctx.bezierCurveTo(176.2, 75.0, 176.2, 75.3, 176.1, 75.4);
            ctx.bezierCurveTo(175.8, 75.3, 175.4, 75.3, 174.9, 75.3);
            ctx.bezierCurveTo(175.4, 73.8, 175.7, 72.3, 175.7, 70.8);
            ctx.bezierCurveTo(176.5, 70.9, 177.0, 71.0, 177.1, 71.1);
            ctx.bezierCurveTo(177.1, 71.2, 177.1, 71.2, 177.1, 71.3);
            ctx.bezierCurveTo(176.9, 71.6, 176.8, 71.9, 176.7, 72.4);
            ctx.lineTo(177.7, 72.4);
            ctx.lineTo(177.7, 70.6);
            ctx.bezierCurveTo(177.7, 70.0, 177.7, 69.5, 177.7, 69.2);
            ctx.bezierCurveTo(178.5, 69.3, 178.9, 69.4, 179.0, 69.4);
            ctx.bezierCurveTo(179.0, 69.5, 179.0, 69.5, 179.0, 69.5);
            ctx.bezierCurveTo(178.8, 69.8, 178.7, 70.1, 178.7, 70.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(181.9, 71.7);
            ctx.lineTo(185.1, 71.7);
            ctx.bezierCurveTo(186.0, 71.7, 186.7, 71.7, 187.1, 71.6);
            ctx.bezierCurveTo(186.8, 76.6, 186.4, 79.6, 186.0, 80.4);
            ctx.bezierCurveTo(185.6, 80.9, 184.9, 81.1, 183.7, 81.1);
            ctx.bezierCurveTo(183.7, 80.7, 183.5, 80.2, 183.1, 79.7);
            ctx.bezierCurveTo(184.1, 79.9, 184.7, 79.9, 184.8, 79.7);
            ctx.bezierCurveTo(185.1, 79.8, 185.5, 77.5, 185.9, 72.7);
            ctx.lineTo(185.1, 72.7);
            ctx.bezierCurveTo(184.7, 77.1, 183.2, 79.9, 180.8, 81.0);
            ctx.bezierCurveTo(180.6, 80.8, 180.2, 80.5, 179.5, 80.3);
            ctx.bezierCurveTo(182.1, 79.5, 183.6, 76.9, 184.1, 72.6);
            ctx.lineTo(183.2, 72.6);
            ctx.bezierCurveTo(182.7, 75.4, 181.8, 77.4, 180.6, 78.6);
            ctx.bezierCurveTo(180.4, 78.4, 180.0, 78.2, 179.4, 78.1);
            ctx.bezierCurveTo(180.8, 77.2, 181.7, 75.4, 182.2, 72.7);
            ctx.lineTo(181.5, 72.7);
            ctx.lineTo(181.1, 73.3);
            ctx.bezierCurveTo(180.7, 74.0, 180.4, 74.4, 180.3, 74.6);
            ctx.bezierCurveTo(180.2, 74.4, 179.8, 74.3, 179.3, 74.1);
            ctx.bezierCurveTo(180.3, 72.8, 181.1, 71.2, 181.7, 69.3);
            ctx.bezierCurveTo(182.5, 69.5, 183.0, 69.6, 183.2, 69.8);
            ctx.lineTo(183.2, 69.9);
            ctx.bezierCurveTo(182.8, 70.2, 182.4, 70.8, 181.9, 71.7);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(196.4, 73.2);
            ctx.lineTo(196.4, 75.5);
            ctx.bezierCurveTo(196.1, 76.7, 195.5, 77.4, 194.4, 77.5);
            ctx.lineTo(194.4, 76.5);
            ctx.bezierCurveTo(195.0, 76.4, 195.2, 76.0, 195.2, 75.5);
            ctx.lineTo(194.3, 75.5);
            ctx.lineTo(194.3, 73.2);
            ctx.lineTo(196.4, 73.2);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(15.0, 91.5);
            ctx.lineTo(15.0, 95.6);
            ctx.bezierCurveTo(15.0, 96.1, 15.0, 96.7, 15.1, 97.2);
            ctx.lineTo(15.1, 97.4);
            ctx.lineTo(13.9, 97.4);
            ctx.lineTo(13.9, 97.2);
            ctx.bezierCurveTo(14.0, 96.7, 14.0, 96.2, 14.0, 95.6);
            ctx.lineTo(14.0, 92.7);
            ctx.bezierCurveTo(13.3, 93.6, 12.8, 94.2, 12.6, 94.4);
            ctx.lineTo(12.0, 93.5);
            ctx.bezierCurveTo(13.2, 92.5, 14.1, 91.3, 14.7, 89.9);
            ctx.lineTo(13.9, 89.9);
            ctx.bezierCurveTo(13.6, 89.9, 13.2, 90.0, 12.7, 90.0);
            ctx.bezierCurveTo(12.6, 90.0, 12.5, 90.0, 12.5, 90.0);
            ctx.lineTo(12.5, 89.0);
            ctx.bezierCurveTo(12.5, 89.0, 12.6, 89.0, 12.7, 89.0);
            ctx.bezierCurveTo(13.3, 89.1, 13.9, 89.1, 14.3, 89.1);
            ctx.bezierCurveTo(14.7, 89.1, 15.2, 89.1, 15.8, 89.0);
            ctx.bezierCurveTo(16.0, 89.0, 16.2, 89.0, 16.2, 89.0);
            ctx.bezierCurveTo(16.0, 89.6, 15.6, 90.4, 15.0, 91.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(15.5, 88.5);
            ctx.lineTo(14.4, 88.9);
            ctx.bezierCurveTo(14.3, 88.3, 14.0, 87.6, 13.6, 87.0);
            ctx.lineTo(14.5, 86.7);
            ctx.bezierCurveTo(14.8, 87.0, 15.2, 87.6, 15.5, 88.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(22.3, 88.7);
            ctx.lineTo(22.3, 90.4);
            ctx.bezierCurveTo(22.3, 90.9, 22.3, 91.4, 22.3, 91.9);
            ctx.bezierCurveTo(22.3, 91.9, 22.3, 92.0, 22.3, 92.0);
            ctx.bezierCurveTo(22.2, 92.0, 21.7, 91.9, 20.8, 91.9);
            ctx.lineTo(20.8, 95.6);
            ctx.bezierCurveTo(20.8, 96.1, 21.0, 96.3, 21.4, 96.3);
            ctx.bezierCurveTo(22.0, 96.3, 22.3, 95.9, 22.3, 94.9);
            ctx.bezierCurveTo(22.7, 95.2, 23.1, 95.4, 23.4, 95.5);
            ctx.bezierCurveTo(23.2, 96.7, 22.8, 97.2, 22.1, 97.1);
            ctx.lineTo(21.0, 97.1);
            ctx.bezierCurveTo(20.2, 97.2, 19.8, 96.9, 19.9, 96.2);
            ctx.lineTo(19.9, 91.9);
            ctx.lineTo(19.0, 91.9);
            ctx.bezierCurveTo(19.0, 94.5, 18.1, 96.3, 16.2, 97.2);
            ctx.bezierCurveTo(16.0, 97.0, 15.6, 96.7, 15.2, 96.4);
            ctx.bezierCurveTo(17.0, 95.9, 18.0, 94.5, 18.1, 91.9);
            ctx.bezierCurveTo(17.5, 91.9, 17.2, 92.0, 17.0, 92.0);
            ctx.bezierCurveTo(17.0, 91.9, 17.0, 91.4, 17.0, 90.6);
            ctx.lineTo(17.0, 88.7);
            ctx.bezierCurveTo(17.0, 87.7, 17.0, 87.3, 17.0, 87.2);
            ctx.bezierCurveTo(17.1, 87.3, 17.6, 87.3, 18.5, 87.3);
            ctx.lineTo(20.9, 87.3);
            ctx.bezierCurveTo(21.3, 87.3, 21.7, 87.3, 22.2, 87.2);
            ctx.lineTo(22.3, 87.2);
            ctx.bezierCurveTo(22.3, 87.3, 22.3, 87.3, 22.3, 87.4);
            ctx.bezierCurveTo(22.3, 87.8, 22.3, 88.3, 22.3, 88.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(15.2, 92.2);
            ctx.lineTo(15.9, 91.7);
            ctx.bezierCurveTo(16.3, 92.1, 16.7, 92.6, 17.1, 93.1);
            ctx.lineTo(16.2, 93.7);
            ctx.bezierCurveTo(16.0, 93.3, 15.7, 92.8, 15.2, 92.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(18.0, 88.1);
            ctx.lineTo(18.0, 91.0);
            ctx.lineTo(21.3, 91.0);
            ctx.lineTo(21.3, 88.1);
            ctx.lineTo(18.0, 88.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(27.2, 89.0);
            ctx.lineTo(27.2, 95.7);
            ctx.bezierCurveTo(27.2, 96.7, 27.2, 97.2, 27.2, 97.3);
            ctx.lineTo(26.2, 97.3);
            ctx.bezierCurveTo(26.2, 97.2, 26.2, 96.6, 26.2, 95.7);
            ctx.lineTo(26.2, 90.5);
            ctx.bezierCurveTo(25.6, 91.5, 25.2, 92.2, 24.9, 92.5);
            ctx.bezierCurveTo(24.8, 92.3, 24.7, 92.1, 24.4, 91.9);
            ctx.bezierCurveTo(24.3, 91.8, 24.2, 91.7, 24.2, 91.7);
            ctx.bezierCurveTo(25.4, 90.6, 26.4, 88.9, 27.2, 86.6);
            ctx.bezierCurveTo(27.2, 86.6, 27.2, 86.6, 27.3, 86.6);
            ctx.bezierCurveTo(28.1, 87.0, 28.4, 87.2, 28.3, 87.3);
            ctx.bezierCurveTo(28.3, 87.3, 28.3, 87.4, 28.2, 87.4);
            ctx.bezierCurveTo(27.9, 87.7, 27.5, 88.2, 27.2, 89.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(29.3, 92.2);
            ctx.bezierCurveTo(29.5, 92.2, 29.7, 92.3, 29.9, 92.4);
            ctx.bezierCurveTo(30.3, 92.4, 30.5, 92.5, 30.4, 92.6);
            ctx.bezierCurveTo(30.4, 92.6, 30.4, 92.6, 30.3, 92.7);
            ctx.bezierCurveTo(30.2, 92.8, 30.1, 92.9, 30.0, 93.0);
            ctx.bezierCurveTo(29.9, 93.2, 29.9, 93.4, 29.7, 93.8);
            ctx.bezierCurveTo(29.4, 94.7, 29.0, 95.4, 28.6, 96.1);
            ctx.bezierCurveTo(28.6, 96.1, 28.5, 96.0, 28.4, 96.0);
            ctx.bezierCurveTo(28.0, 95.8, 27.8, 95.7, 27.6, 95.7);
            ctx.bezierCurveTo(28.4, 94.6, 29.0, 93.4, 29.3, 92.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(30.5, 88.6);
            ctx.lineTo(33.5, 88.6);
            ctx.bezierCurveTo(33.9, 88.6, 34.6, 88.6, 35.5, 88.6);
            ctx.bezierCurveTo(35.4, 88.9, 35.2, 89.3, 35.1, 89.9);
            ctx.bezierCurveTo(34.7, 90.7, 34.5, 91.3, 34.3, 91.6);
            ctx.lineTo(34.3, 91.6);
            ctx.bezierCurveTo(33.8, 91.4, 33.5, 91.4, 33.2, 91.4);
            ctx.bezierCurveTo(33.5, 91.0, 33.8, 90.4, 34.2, 89.5);
            ctx.lineTo(30.0, 89.5);
            ctx.lineTo(28.7, 91.8);
            ctx.bezierCurveTo(28.4, 91.5, 28.1, 91.3, 27.7, 91.3);
            ctx.bezierCurveTo(28.9, 90.1, 29.7, 88.6, 30.2, 86.7);
            ctx.bezierCurveTo(31.1, 87.0, 31.6, 87.2, 31.4, 87.2);
            ctx.bezierCurveTo(31.4, 87.2, 31.4, 87.3, 31.3, 87.3);
            ctx.bezierCurveTo(31.1, 87.6, 30.8, 88.0, 30.5, 88.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(32.0, 91.4);
            ctx.lineTo(32.0, 96.4);
            ctx.bezierCurveTo(32.2, 97.1, 31.6, 97.4, 30.1, 97.5);
            ctx.bezierCurveTo(30.0, 97.0, 29.9, 96.7, 29.6, 96.4);
            ctx.lineTo(29.6, 96.3);
            ctx.bezierCurveTo(30.7, 96.5, 31.2, 96.4, 31.1, 96.0);
            ctx.lineTo(31.1, 91.4);
            ctx.bezierCurveTo(31.1, 90.8, 31.1, 90.3, 31.0, 90.1);
            ctx.bezierCurveTo(31.9, 90.1, 32.3, 90.2, 32.2, 90.3);
            ctx.bezierCurveTo(32.2, 90.3, 32.2, 90.4, 32.2, 90.4);
            ctx.bezierCurveTo(32.1, 90.7, 32.0, 91.0, 32.0, 91.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(32.6, 92.7);
            ctx.lineTo(33.5, 92.2);
            ctx.bezierCurveTo(33.7, 92.5, 34.0, 93.1, 34.4, 93.8);
            ctx.bezierCurveTo(34.8, 94.5, 35.1, 95.1, 35.4, 95.6);
            ctx.bezierCurveTo(35.0, 95.8, 34.6, 96.0, 34.3, 96.1);
            ctx.bezierCurveTo(33.8, 94.6, 33.2, 93.5, 32.6, 92.7);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(39.3, 89.2);
            ctx.lineTo(40.2, 89.2);
            ctx.bezierCurveTo(40.8, 89.2, 41.3, 89.2, 41.6, 89.1);
            ctx.bezierCurveTo(41.3, 91.3, 40.9, 93.0, 40.5, 94.4);
            ctx.bezierCurveTo(40.7, 94.5, 40.9, 94.7, 41.2, 94.8);
            ctx.bezierCurveTo(41.7, 95.2, 42.1, 95.4, 42.2, 95.6);
            ctx.lineTo(41.5, 96.3);
            ctx.bezierCurveTo(41.0, 95.9, 40.6, 95.5, 40.1, 95.2);
            ctx.bezierCurveTo(39.6, 96.1, 38.7, 96.8, 37.5, 97.4);
            ctx.bezierCurveTo(37.3, 97.1, 37.0, 96.8, 36.7, 96.5);
            ctx.bezierCurveTo(37.9, 96.3, 38.8, 95.7, 39.4, 94.7);
            ctx.bezierCurveTo(39.2, 94.6, 38.5, 94.2, 37.3, 93.5);
            ctx.bezierCurveTo(37.6, 92.9, 37.9, 91.7, 38.2, 90.1);
            ctx.lineTo(38.0, 90.1);
            ctx.bezierCurveTo(37.7, 90.1, 37.3, 90.1, 36.9, 90.2);
            ctx.bezierCurveTo(36.9, 90.2, 36.9, 90.2, 36.8, 90.2);
            ctx.lineTo(36.8, 89.1);
            ctx.bezierCurveTo(37.2, 89.2, 37.7, 89.2, 38.1, 89.2);
            ctx.lineTo(38.4, 89.2);
            ctx.bezierCurveTo(38.4, 89.2, 38.4, 89.1, 38.4, 89.0);
            ctx.bezierCurveTo(38.6, 87.8, 38.7, 87.0, 38.7, 86.6);
            ctx.bezierCurveTo(39.5, 86.6, 39.9, 86.7, 40.0, 86.9);
            ctx.lineTo(40.0, 87.0);
            ctx.bezierCurveTo(39.8, 87.1, 39.7, 87.3, 39.7, 87.4);
            ctx.bezierCurveTo(39.7, 87.4, 39.6, 87.5, 39.6, 87.7);
            ctx.bezierCurveTo(39.5, 88.1, 39.4, 88.6, 39.3, 89.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(40.5, 90.1);
            ctx.lineTo(39.1, 90.1);
            ctx.bezierCurveTo(39.0, 90.3, 39.0, 90.7, 38.9, 91.3);
            ctx.bezierCurveTo(38.7, 92.1, 38.5, 92.7, 38.4, 93.1);
            ctx.bezierCurveTo(38.6, 93.2, 38.9, 93.4, 39.4, 93.7);
            ctx.bezierCurveTo(39.6, 93.8, 39.7, 93.8, 39.7, 93.8);
            ctx.bezierCurveTo(40.0, 92.9, 40.3, 91.6, 40.5, 90.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(47.5, 87.4);
            ctx.lineTo(47.5, 88.5);
            ctx.bezierCurveTo(47.1, 88.6, 46.4, 89.1, 45.3, 90.2);
            ctx.lineTo(45.3, 91.5);
            ctx.lineTo(46.1, 91.5);
            ctx.bezierCurveTo(46.8, 91.5, 47.4, 91.4, 47.8, 91.4);
            ctx.lineTo(47.8, 92.5);
            ctx.bezierCurveTo(47.3, 92.5, 46.7, 92.4, 46.1, 92.4);
            ctx.lineTo(45.3, 92.4);
            ctx.lineTo(45.3, 96.5);
            ctx.bezierCurveTo(45.2, 97.2, 44.6, 97.5, 43.3, 97.5);
            ctx.bezierCurveTo(43.3, 97.0, 43.1, 96.6, 42.6, 96.2);
            ctx.bezierCurveTo(43.8, 96.4, 44.4, 96.2, 44.3, 95.7);
            ctx.lineTo(44.3, 92.4);
            ctx.lineTo(43.3, 92.4);
            ctx.bezierCurveTo(42.6, 92.4, 42.0, 92.5, 41.5, 92.5);
            ctx.lineTo(41.5, 91.4);
            ctx.bezierCurveTo(41.9, 91.4, 42.5, 91.5, 43.4, 91.5);
            ctx.lineTo(44.3, 91.5);
            ctx.lineTo(44.3, 90.0);
            ctx.bezierCurveTo(44.6, 89.7, 45.2, 89.2, 46.1, 88.3);
            ctx.lineTo(43.3, 88.3);
            ctx.bezierCurveTo(42.5, 88.3, 41.9, 88.4, 41.8, 88.4);
            ctx.lineTo(41.8, 87.4);
            ctx.bezierCurveTo(41.8, 87.4, 41.8, 87.4, 41.9, 87.4);
            ctx.bezierCurveTo(42.3, 87.5, 42.8, 87.5, 43.3, 87.5);
            ctx.lineTo(45.8, 87.5);
            ctx.bezierCurveTo(46.6, 87.5, 47.1, 87.5, 47.5, 87.4);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(49.8, 90.3);
            ctx.lineTo(50.2, 90.3);
            ctx.bezierCurveTo(50.7, 90.3, 51.1, 90.2, 51.3, 90.2);
            ctx.bezierCurveTo(51.2, 90.4, 51.2, 90.8, 51.2, 91.5);
            ctx.lineTo(51.2, 94.7);
            ctx.bezierCurveTo(51.6, 95.6, 52.7, 96.2, 54.6, 96.3);
            ctx.bezierCurveTo(56.2, 96.3, 58.0, 96.2, 59.9, 96.0);
            ctx.bezierCurveTo(59.7, 96.2, 59.5, 96.6, 59.5, 97.0);
            ctx.bezierCurveTo(58.0, 97.0, 56.5, 97.0, 54.9, 97.0);
            ctx.bezierCurveTo(53.3, 97.0, 52.0, 96.6, 51.1, 95.8);
            ctx.bezierCurveTo(50.9, 95.7, 50.8, 95.6, 50.7, 95.6);
            ctx.bezierCurveTo(50.3, 95.7, 49.9, 96.2, 49.5, 97.1);
            ctx.lineTo(48.6, 96.3);
            ctx.bezierCurveTo(49.5, 95.6, 50.1, 95.1, 50.3, 94.9);
            ctx.lineTo(50.3, 91.1);
            ctx.lineTo(49.9, 91.1);
            ctx.bezierCurveTo(49.6, 91.1, 49.3, 91.1, 49.1, 91.1);
            ctx.bezierCurveTo(48.9, 91.1, 48.7, 91.2, 48.6, 91.2);
            ctx.lineTo(48.6, 90.1);
            ctx.bezierCurveTo(48.7, 90.2, 49.1, 90.3, 49.8, 90.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(51.5, 89.0);
            ctx.lineTo(50.5, 89.4);
            ctx.bezierCurveTo(50.2, 88.7, 49.8, 88.0, 49.3, 87.3);
            ctx.lineTo(50.2, 87.0);
            ctx.bezierCurveTo(50.7, 87.6, 51.1, 88.3, 51.5, 89.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(59.4, 88.9);
            ctx.lineTo(58.4, 88.9);
            ctx.bezierCurveTo(58.4, 88.7, 58.4, 88.3, 58.4, 87.7);
            ctx.lineTo(56.1, 87.7);
            ctx.lineTo(56.1, 88.5);
            ctx.lineTo(56.8, 88.5);
            ctx.bezierCurveTo(57.6, 88.5, 58.0, 88.5, 58.1, 88.4);
            ctx.lineTo(58.1, 89.3);
            ctx.bezierCurveTo(57.9, 89.2, 57.5, 89.2, 56.7, 89.2);
            ctx.lineTo(56.1, 89.2);
            ctx.lineTo(56.1, 89.9);
            ctx.lineTo(57.6, 89.9);
            ctx.bezierCurveTo(58.1, 89.9, 58.5, 89.8, 58.8, 89.8);
            ctx.bezierCurveTo(58.7, 90.0, 58.7, 90.4, 58.7, 90.8);
            ctx.lineTo(58.7, 92.4);
            ctx.bezierCurveTo(58.7, 92.8, 58.7, 93.2, 58.8, 93.5);
            ctx.bezierCurveTo(58.6, 93.4, 58.2, 93.4, 57.6, 93.4);
            ctx.lineTo(56.1, 93.4);
            ctx.lineTo(56.1, 94.1);
            ctx.lineTo(57.6, 94.1);
            ctx.bezierCurveTo(58.5, 94.1, 59.0, 94.1, 59.3, 94.0);
            ctx.lineTo(59.3, 94.9);
            ctx.bezierCurveTo(59.0, 94.9, 58.5, 94.8, 57.6, 94.8);
            ctx.lineTo(56.1, 94.8);
            ctx.bezierCurveTo(56.1, 95.5, 56.2, 95.9, 56.2, 96.0);
            ctx.lineTo(55.2, 96.0);
            ctx.bezierCurveTo(55.3, 95.9, 55.3, 95.5, 55.3, 94.8);
            ctx.lineTo(53.7, 94.8);
            ctx.bezierCurveTo(52.8, 94.8, 52.2, 94.9, 52.0, 94.9);
            ctx.lineTo(52.0, 94.0);
            ctx.bezierCurveTo(52.2, 94.1, 52.8, 94.1, 53.9, 94.1);
            ctx.lineTo(55.3, 94.1);
            ctx.lineTo(55.3, 93.4);
            ctx.lineTo(53.8, 93.4);
            ctx.bezierCurveTo(53.3, 93.4, 52.9, 93.4, 52.7, 93.5);
            ctx.bezierCurveTo(52.7, 93.3, 52.7, 92.9, 52.7, 92.3);
            ctx.lineTo(52.7, 90.8);
            ctx.bezierCurveTo(52.7, 90.2, 52.7, 89.9, 52.7, 89.8);
            ctx.bezierCurveTo(52.8, 89.8, 53.3, 89.9, 54.1, 89.9);
            ctx.lineTo(55.3, 89.9);
            ctx.lineTo(55.3, 89.2);
            ctx.lineTo(54.7, 89.2);
            ctx.bezierCurveTo(54.0, 89.2, 53.5, 89.3, 53.3, 89.3);
            ctx.lineTo(53.3, 88.4);
            ctx.bezierCurveTo(53.5, 88.5, 54.0, 88.5, 54.7, 88.5);
            ctx.lineTo(55.3, 88.5);
            ctx.lineTo(55.3, 87.7);
            ctx.lineTo(53.0, 87.7);
            ctx.bezierCurveTo(53.0, 88.3, 53.0, 88.7, 53.1, 88.9);
            ctx.lineTo(52.0, 88.9);
            ctx.bezierCurveTo(52.1, 88.7, 52.1, 88.3, 52.1, 87.8);
            ctx.bezierCurveTo(52.1, 87.9, 52.1, 87.7, 52.1, 87.2);
            ctx.bezierCurveTo(52.1, 87.1, 52.1, 87.0, 52.0, 87.0);
            ctx.bezierCurveTo(52.2, 87.0, 52.6, 87.0, 53.3, 87.0);
            ctx.lineTo(58.2, 87.0);
            ctx.bezierCurveTo(58.9, 87.0, 59.2, 87.0, 59.4, 87.0);
            ctx.bezierCurveTo(59.3, 87.0, 59.3, 87.3, 59.3, 87.9);
            ctx.bezierCurveTo(59.3, 88.3, 59.3, 88.7, 59.4, 88.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(55.3, 90.6);
            ctx.lineTo(53.6, 90.6);
            ctx.lineTo(53.6, 91.3);
            ctx.lineTo(55.3, 91.3);
            ctx.lineTo(55.3, 90.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(55.3, 92.0);
            ctx.lineTo(53.6, 92.0);
            ctx.lineTo(53.6, 92.7);
            ctx.lineTo(55.3, 92.7);
            ctx.lineTo(55.3, 92.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(57.9, 90.6);
            ctx.lineTo(56.1, 90.6);
            ctx.lineTo(56.1, 91.3);
            ctx.lineTo(57.9, 91.3);
            ctx.lineTo(57.9, 90.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(56.1, 92.0);
            ctx.lineTo(56.1, 92.7);
            ctx.lineTo(57.9, 92.7);
            ctx.lineTo(57.9, 92.0);
            ctx.lineTo(56.1, 92.0);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(62.5, 94.2);
            ctx.lineTo(61.9, 94.2);
            ctx.lineTo(61.6, 90.5);
            ctx.lineTo(61.6, 87.6);
            ctx.lineTo(62.8, 87.6);
            ctx.lineTo(62.8, 90.5);
            ctx.lineTo(62.5, 94.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(62.8, 95.1);
            ctx.lineTo(62.8, 96.3);
            ctx.lineTo(61.6, 96.3);
            ctx.lineTo(61.6, 95.1);
            ctx.lineTo(62.8, 95.1);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
            ctx.restore();

            // 1/
            ctx.save();
            ctx.restore();
        }
        else {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(146.0, 105.8);
            ctx.lineTo(8.7, 105.8);
            ctx.bezierCurveTo(3.9, 105.8, 0.0, 101.9, 0.0, 97.1);
            ctx.lineTo(0.0, 22.5);
            ctx.bezierCurveTo(0.0, 17.7, 3.9, 13.8, 8.7, 13.8);
            ctx.lineTo(146.0, 13.8);
            ctx.bezierCurveTo(150.8, 13.8, 154.7, 17.7, 154.7, 22.5);
            ctx.lineTo(154.7, 97.1);
            ctx.bezierCurveTo(154.7, 101.9, 150.8, 105.8, 146.0, 105.8);
            ctx.closePath();
            ctx.fillStyle = "rgb(241, 226, 113)";
            ctx.fill();

            // 2/
            ctx.beginPath();
            ctx.moveTo(64.7, 13.7);
            ctx.lineTo(50.9, 27.4);
            ctx.lineTo(37.2, 13.7);
            ctx.lineTo(50.9, 0.0);
            ctx.lineTo(64.7, 13.7);
            ctx.closePath();
            ctx.fill();

            // 2/

            // 2//
            ctx.save();
            ctx.beginPath();

            // 2///
            ctx.moveTo(23.7, 35.1);
            ctx.lineTo(23.7, 36.3);
            ctx.bezierCurveTo(22.8, 36.3, 21.9, 36.2, 21.2, 36.2);
            ctx.lineTo(19.6, 36.2);
            ctx.bezierCurveTo(19.4, 36.6, 19.2, 37.2, 18.9, 37.8);
            ctx.lineTo(18.9, 43.3);
            ctx.bezierCurveTo(18.9, 44.5, 18.9, 45.3, 19.0, 45.7);
            ctx.lineTo(17.7, 45.7);
            ctx.bezierCurveTo(17.7, 45.0, 17.8, 44.2, 17.8, 43.2);
            ctx.lineTo(17.8, 39.2);
            ctx.bezierCurveTo(16.8, 40.6, 15.4, 42.0, 13.5, 43.5);
            ctx.bezierCurveTo(13.2, 43.1, 12.7, 42.8, 12.2, 42.6);
            ctx.bezierCurveTo(14.9, 41.3, 17.0, 39.2, 18.5, 36.2);
            ctx.lineTo(15.3, 36.2);
            ctx.bezierCurveTo(14.6, 36.2, 13.8, 36.3, 12.8, 36.3);
            ctx.lineTo(12.8, 35.1);
            ctx.bezierCurveTo(13.6, 35.2, 14.5, 35.2, 15.3, 35.2);
            ctx.lineTo(21.2, 35.2);
            ctx.bezierCurveTo(22.2, 35.2, 23.1, 35.2, 23.7, 35.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(24.0, 42.4);
            ctx.lineTo(22.8, 43.2);
            ctx.bezierCurveTo(21.9, 41.7, 20.8, 40.4, 19.7, 39.3);
            ctx.lineTo(20.6, 38.6);
            ctx.bezierCurveTo(21.8, 39.7, 22.9, 41.0, 24.0, 42.4);
            ctx.closePath();
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(34.0, 36.3);
            ctx.lineTo(34.0, 38.7);
            ctx.lineTo(36.0, 38.7);
            ctx.bezierCurveTo(36.6, 38.7, 37.0, 38.7, 37.2, 38.6);
            ctx.lineTo(37.2, 39.5);
            ctx.bezierCurveTo(36.8, 39.5, 36.4, 39.5, 36.0, 39.5);
            ctx.lineTo(36.0, 44.6);
            ctx.bezierCurveTo(36.0, 45.4, 36.0, 45.9, 36.1, 46.2);
            ctx.lineTo(34.9, 46.2);
            ctx.bezierCurveTo(35.0, 46.0, 35.0, 45.4, 35.0, 44.6);
            ctx.lineTo(35.0, 39.5);
            ctx.lineTo(34.0, 39.5);
            ctx.bezierCurveTo(33.9, 41.5, 33.8, 42.9, 33.6, 43.7);
            ctx.bezierCurveTo(33.5, 44.4, 33.1, 45.3, 32.5, 46.3);
            ctx.bezierCurveTo(32.2, 46.1, 31.8, 46.0, 31.2, 45.8);
            ctx.bezierCurveTo(31.3, 45.8, 31.5, 45.6, 31.7, 45.4);
            ctx.bezierCurveTo(31.5, 45.4, 31.0, 45.4, 30.2, 45.4);
            ctx.lineTo(27.7, 45.4);
            ctx.bezierCurveTo(26.8, 45.4, 26.1, 45.4, 25.8, 45.5);
            ctx.bezierCurveTo(25.8, 45.1, 25.9, 44.3, 25.9, 43.2);
            ctx.lineTo(25.9, 36.7);
            ctx.bezierCurveTo(25.8, 36.1, 25.8, 35.6, 25.8, 35.3);
            ctx.bezierCurveTo(26.6, 35.4, 27.1, 35.5, 27.0, 35.5);
            ctx.bezierCurveTo(27.0, 35.6, 27.0, 35.6, 27.0, 35.7);
            ctx.bezierCurveTo(26.8, 35.9, 26.8, 36.1, 26.8, 36.4);
            ctx.lineTo(26.8, 39.5);
            ctx.lineTo(31.0, 39.5);
            ctx.bezierCurveTo(31.6, 39.5, 32.1, 39.5, 32.5, 39.4);
            ctx.lineTo(32.5, 40.4);
            ctx.bezierCurveTo(32.2, 40.3, 31.8, 40.3, 31.1, 40.3);
            ctx.lineTo(30.8, 40.3);
            ctx.bezierCurveTo(31.3, 40.5, 31.5, 40.6, 31.5, 40.7);
            ctx.lineTo(31.5, 40.7);
            ctx.bezierCurveTo(31.4, 40.7, 31.2, 40.8, 31.1, 40.9);
            ctx.bezierCurveTo(31.1, 40.9, 31.0, 41.0, 30.9, 41.2);
            ctx.bezierCurveTo(30.7, 41.4, 30.6, 41.6, 30.5, 41.6);
            ctx.lineTo(31.2, 41.6);
            ctx.bezierCurveTo(31.4, 41.4, 31.5, 41.2, 31.6, 41.0);
            ctx.bezierCurveTo(32.1, 41.2, 32.4, 41.4, 32.4, 41.5);
            ctx.bezierCurveTo(32.2, 41.6, 32.0, 41.7, 31.8, 42.0);
            ctx.bezierCurveTo(31.7, 42.1, 31.5, 42.4, 31.2, 42.7);
            ctx.bezierCurveTo(30.9, 43.1, 30.7, 43.3, 30.6, 43.3);
            ctx.lineTo(31.6, 43.3);
            ctx.lineTo(31.3, 42.9);
            ctx.lineTo(31.8, 42.7);
            ctx.bezierCurveTo(32.2, 43.1, 32.4, 43.5, 32.5, 44.0);
            ctx.lineTo(31.9, 44.3);
            ctx.bezierCurveTo(31.9, 44.1, 31.8, 44.0, 31.8, 43.9);
            ctx.bezierCurveTo(31.3, 43.8, 30.7, 43.9, 30.1, 44.1);
            ctx.bezierCurveTo(30.0, 43.8, 29.9, 43.6, 29.8, 43.3);
            ctx.bezierCurveTo(30.1, 43.3, 30.6, 42.8, 31.0, 42.0);
            ctx.bezierCurveTo(30.6, 42.1, 30.2, 42.2, 29.9, 42.3);
            ctx.bezierCurveTo(29.8, 42.2, 29.7, 42.0, 29.6, 41.7);
            ctx.bezierCurveTo(30.0, 41.8, 30.3, 41.3, 30.6, 40.3);
            ctx.lineTo(28.5, 40.3);
            ctx.bezierCurveTo(28.8, 40.4, 28.9, 40.5, 28.9, 40.6);
            ctx.lineTo(28.8, 40.6);
            ctx.bezierCurveTo(28.7, 40.7, 28.6, 40.8, 28.5, 40.9);
            ctx.bezierCurveTo(28.3, 41.2, 28.0, 41.4, 27.8, 41.7);
            ctx.lineTo(28.7, 41.6);
            ctx.bezierCurveTo(28.8, 41.4, 28.9, 41.1, 29.1, 40.8);
            ctx.bezierCurveTo(29.6, 41.0, 29.9, 41.2, 29.8, 41.3);
            ctx.lineTo(29.8, 41.3);
            ctx.bezierCurveTo(29.6, 41.5, 29.4, 41.6, 29.3, 41.7);
            ctx.bezierCurveTo(29.0, 42.2, 28.5, 42.8, 27.9, 43.4);
            ctx.lineTo(29.0, 43.3);
            ctx.bezierCurveTo(29.0, 43.4, 28.9, 43.2, 28.7, 42.7);
            ctx.lineTo(29.3, 42.5);
            ctx.bezierCurveTo(29.5, 43.0, 29.7, 43.5, 29.8, 44.1);
            ctx.lineTo(29.2, 44.3);
            ctx.lineTo(29.1, 43.9);
            ctx.bezierCurveTo(28.1, 43.9, 27.5, 44.0, 27.2, 44.2);
            ctx.bezierCurveTo(27.1, 43.9, 27.0, 43.7, 26.9, 43.3);
            ctx.bezierCurveTo(27.3, 43.4, 27.8, 43.0, 28.4, 42.1);
            ctx.bezierCurveTo(28.0, 42.1, 27.5, 42.2, 27.2, 42.4);
            ctx.lineTo(27.0, 41.7);
            ctx.bezierCurveTo(27.4, 41.6, 27.8, 41.1, 28.1, 40.3);
            ctx.lineTo(26.8, 40.3);
            ctx.lineTo(26.8, 44.7);
            ctx.lineTo(30.2, 44.7);
            ctx.bezierCurveTo(31.1, 44.7, 31.7, 44.6, 32.0, 44.6);
            ctx.lineTo(32.0, 45.0);
            ctx.bezierCurveTo(32.5, 44.4, 32.8, 43.5, 32.9, 42.5);
            ctx.bezierCurveTo(33.0, 41.6, 33.1, 39.5, 33.1, 36.2);
            ctx.lineTo(33.1, 36.0);
            ctx.bezierCurveTo(33.0, 35.7, 33.0, 35.6, 33.0, 35.6);
            ctx.bezierCurveTo(33.9, 35.6, 34.9, 35.4, 36.1, 34.9);
            ctx.bezierCurveTo(36.1, 35.0, 36.2, 35.1, 36.3, 35.3);
            ctx.bezierCurveTo(36.7, 35.7, 36.9, 36.0, 36.8, 36.0);
            ctx.bezierCurveTo(36.7, 36.0, 36.7, 36.0, 36.6, 36.0);
            ctx.bezierCurveTo(36.3, 36.0, 36.0, 36.0, 35.7, 36.0);
            ctx.bezierCurveTo(35.4, 36.1, 35.3, 36.1, 35.4, 36.1);
            ctx.bezierCurveTo(34.7, 36.2, 34.2, 36.3, 34.0, 36.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(27.9, 36.7);
            ctx.lineTo(28.6, 36.7);
            ctx.bezierCurveTo(28.7, 36.6, 28.8, 36.5, 28.9, 36.2);
            ctx.bezierCurveTo(29.0, 36.0, 29.0, 35.9, 29.1, 35.8);
            ctx.bezierCurveTo(29.6, 36.1, 29.9, 36.2, 29.9, 36.3);
            ctx.bezierCurveTo(29.9, 36.3, 29.9, 36.4, 29.8, 36.4);
            ctx.bezierCurveTo(29.6, 36.5, 29.5, 36.6, 29.4, 36.7);
            ctx.bezierCurveTo(29.3, 36.8, 29.1, 37.1, 28.8, 37.6);
            ctx.bezierCurveTo(28.5, 38.0, 28.3, 38.3, 28.1, 38.5);
            ctx.lineTo(29.0, 38.4);
            ctx.bezierCurveTo(29.0, 38.2, 28.9, 38.1, 28.8, 37.9);
            ctx.lineTo(29.4, 37.7);
            ctx.bezierCurveTo(29.6, 38.3, 29.8, 38.7, 29.9, 39.1);
            ctx.lineTo(29.3, 39.3);
            ctx.lineTo(29.2, 38.9);
            ctx.bezierCurveTo(28.3, 38.9, 27.7, 39.1, 27.3, 39.2);
            ctx.bezierCurveTo(27.2, 39.0, 27.1, 38.7, 27.0, 38.5);
            ctx.bezierCurveTo(27.4, 38.5, 27.8, 38.2, 28.3, 37.3);
            ctx.bezierCurveTo(27.9, 37.3, 27.5, 37.4, 27.3, 37.5);
            ctx.lineTo(27.0, 36.8);
            ctx.bezierCurveTo(27.4, 36.8, 27.8, 36.1, 28.2, 34.6);
            ctx.bezierCurveTo(28.8, 34.7, 29.1, 34.9, 29.1, 35.0);
            ctx.bezierCurveTo(29.1, 35.0, 29.1, 35.0, 29.0, 35.1);
            ctx.bezierCurveTo(28.9, 35.2, 28.8, 35.3, 28.7, 35.5);
            ctx.bezierCurveTo(28.3, 36.1, 28.1, 36.5, 27.9, 36.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(30.5, 36.7);
            ctx.lineTo(31.2, 36.7);
            ctx.bezierCurveTo(31.4, 36.4, 31.5, 36.1, 31.6, 35.7);
            ctx.bezierCurveTo(31.8, 35.7, 32.0, 35.8, 32.2, 35.9);
            ctx.bezierCurveTo(32.5, 36.1, 32.6, 36.1, 32.6, 36.1);
            ctx.bezierCurveTo(32.5, 36.2, 32.5, 36.3, 32.4, 36.3);
            ctx.bezierCurveTo(32.2, 36.5, 32.1, 36.6, 32.0, 36.6);
            ctx.bezierCurveTo(31.9, 36.7, 31.8, 36.9, 31.6, 37.3);
            ctx.bezierCurveTo(31.2, 37.9, 30.9, 38.3, 30.7, 38.5);
            ctx.lineTo(31.7, 38.4);
            ctx.bezierCurveTo(31.7, 38.2, 31.6, 38.0, 31.5, 37.8);
            ctx.lineTo(32.1, 37.7);
            ctx.bezierCurveTo(32.3, 38.0, 32.5, 38.4, 32.7, 39.1);
            ctx.lineTo(32.0, 39.3);
            ctx.bezierCurveTo(32.0, 39.2, 31.9, 39.0, 31.8, 38.8);
            ctx.bezierCurveTo(31.0, 38.9, 30.4, 39.0, 30.1, 39.2);
            ctx.bezierCurveTo(30.1, 38.9, 30.0, 38.7, 29.9, 38.4);
            ctx.bezierCurveTo(30.1, 38.4, 30.4, 38.2, 30.7, 37.7);
            ctx.bezierCurveTo(30.8, 37.5, 30.9, 37.4, 30.9, 37.3);
            ctx.bezierCurveTo(30.5, 37.3, 30.1, 37.4, 29.9, 37.5);
            ctx.lineTo(29.6, 36.8);
            ctx.bezierCurveTo(30.0, 36.7, 30.4, 36.0, 30.7, 34.6);
            ctx.bezierCurveTo(31.3, 34.7, 31.6, 34.9, 31.6, 35.0);
            ctx.bezierCurveTo(31.6, 35.0, 31.6, 35.0, 31.5, 35.1);
            ctx.bezierCurveTo(31.4, 35.2, 31.3, 35.3, 31.2, 35.5);
            ctx.bezierCurveTo(31.1, 35.7, 30.8, 36.1, 30.5, 36.7);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(39.2, 43.5);
            ctx.lineTo(40.0, 43.7);
            ctx.lineTo(39.2, 46.2);
            ctx.lineTo(38.2, 45.9);
            ctx.bezierCurveTo(38.7, 45.3, 39.0, 44.5, 39.2, 43.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(39.0, 35.1);
            ctx.lineTo(40.2, 35.1);
            ctx.lineTo(43.0, 35.1);
            ctx.lineTo(44.6, 35.1);
            ctx.lineTo(44.5, 36.3);
            ctx.lineTo(44.5, 38.7);
            ctx.lineTo(44.6, 39.9);
            ctx.lineTo(43.2, 39.9);
            ctx.lineTo(42.2, 39.9);
            ctx.lineTo(42.2, 40.7);
            ctx.lineTo(43.1, 40.7);
            ctx.lineTo(44.3, 40.7);
            ctx.lineTo(44.3, 41.5);
            ctx.lineTo(43.1, 41.5);
            ctx.lineTo(42.1, 41.5);
            ctx.lineTo(42.1, 42.2);
            ctx.bezierCurveTo(42.5, 42.2, 43.3, 42.1, 44.4, 42.0);
            ctx.lineTo(44.4, 42.9);
            ctx.bezierCurveTo(44.3, 42.9, 44.1, 42.9, 43.9, 42.9);
            ctx.bezierCurveTo(41.7, 43.0, 39.9, 43.1, 38.7, 43.3);
            ctx.lineTo(38.5, 42.3);
            ctx.bezierCurveTo(39.4, 42.4, 40.4, 42.4, 41.3, 42.3);
            ctx.lineTo(41.3, 41.5);
            ctx.lineTo(40.2, 41.5);
            ctx.lineTo(38.9, 41.5);
            ctx.lineTo(38.9, 40.7);
            ctx.lineTo(40.2, 40.7);
            ctx.lineTo(41.3, 40.7);
            ctx.lineTo(41.3, 39.9);
            ctx.lineTo(40.3, 39.9);
            ctx.lineTo(39.0, 39.9);
            ctx.lineTo(39.0, 38.6);
            ctx.lineTo(39.0, 36.3);
            ctx.lineTo(39.0, 35.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(41.3, 35.9);
            ctx.lineTo(39.9, 35.9);
            ctx.lineTo(39.9, 36.8);
            ctx.lineTo(40.6, 36.6);
            ctx.bezierCurveTo(40.8, 36.9, 41.0, 37.5, 41.2, 38.3);
            ctx.lineTo(40.5, 38.5);
            ctx.bezierCurveTo(40.3, 37.8, 40.1, 37.3, 39.9, 37.0);
            ctx.lineTo(39.9, 39.2);
            ctx.lineTo(41.3, 39.2);
            ctx.lineTo(41.3, 35.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(40.4, 43.7);
            ctx.lineTo(41.2, 43.7);
            ctx.bezierCurveTo(41.4, 44.4, 41.5, 45.0, 41.5, 45.5);
            ctx.lineTo(40.5, 45.6);
            ctx.bezierCurveTo(40.5, 45.1, 40.5, 44.4, 40.4, 43.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(43.1, 45.2);
            ctx.lineTo(42.2, 45.4);
            ctx.bezierCurveTo(42.2, 44.9, 42.1, 44.3, 41.8, 43.6);
            ctx.lineTo(42.5, 43.5);
            ctx.bezierCurveTo(42.8, 44.1, 43.0, 44.7, 43.1, 45.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(43.6, 36.0);
            ctx.lineTo(42.2, 36.0);
            ctx.lineTo(42.2, 38.1);
            ctx.bezierCurveTo(42.5, 37.5, 42.7, 37.0, 42.8, 36.7);
            ctx.lineTo(43.6, 37.0);
            ctx.lineTo(43.6, 36.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(42.8, 38.6);
            ctx.lineTo(42.2, 38.4);
            ctx.lineTo(42.2, 39.2);
            ctx.lineTo(43.6, 39.2);
            ctx.lineTo(43.6, 37.2);
            ctx.bezierCurveTo(43.4, 37.2, 43.2, 37.7, 42.8, 38.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(44.8, 45.1);
            ctx.lineTo(43.8, 45.2);
            ctx.bezierCurveTo(43.6, 44.6, 43.4, 43.9, 43.2, 43.4);
            ctx.lineTo(43.9, 43.2);
            ctx.bezierCurveTo(44.3, 44.0, 44.6, 44.6, 44.8, 45.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(47.6, 35.3);
            ctx.lineTo(47.6, 37.2);
            ctx.lineTo(49.1, 37.2);
            ctx.lineTo(50.3, 37.1);
            ctx.lineTo(50.3, 38.0);
            ctx.lineTo(49.2, 38.0);
            ctx.lineTo(47.6, 38.0);
            ctx.lineTo(47.6, 40.5);
            ctx.lineTo(48.5, 40.5);
            ctx.lineTo(49.6, 40.5);
            ctx.lineTo(49.5, 41.6);
            ctx.lineTo(49.5, 45.1);
            ctx.lineTo(49.6, 46.3);
            ctx.lineTo(48.6, 46.3);
            ctx.lineTo(48.6, 45.3);
            ctx.lineTo(46.0, 45.3);
            ctx.lineTo(46.0, 46.4);
            ctx.lineTo(45.0, 46.4);
            ctx.lineTo(45.0, 45.3);
            ctx.lineTo(45.0, 41.7);
            ctx.lineTo(45.0, 40.5);
            ctx.lineTo(46.2, 40.5);
            ctx.lineTo(46.6, 40.5);
            ctx.lineTo(46.6, 35.9);
            ctx.bezierCurveTo(46.6, 35.9, 46.6, 35.4, 46.6, 34.4);
            ctx.bezierCurveTo(47.4, 34.4, 47.8, 34.5, 47.8, 34.6);
            ctx.bezierCurveTo(47.8, 34.6, 47.8, 34.6, 47.8, 34.7);
            ctx.bezierCurveTo(47.7, 34.9, 47.6, 35.1, 47.6, 35.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(46.0, 41.4);
            ctx.lineTo(46.0, 44.7);
            ctx.lineTo(48.6, 44.7);
            ctx.lineTo(48.6, 41.4);
            ctx.lineTo(46.0, 41.4);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(55.4, 35.1);
            ctx.lineTo(56.6, 35.1);
            ctx.bezierCurveTo(57.2, 35.0, 57.6, 35.0, 57.9, 35.0);
            ctx.lineTo(57.9, 35.8);
            ctx.bezierCurveTo(57.6, 35.7, 57.2, 35.7, 56.6, 35.7);
            ctx.lineTo(55.3, 35.7);
            ctx.lineTo(55.3, 36.2);
            ctx.lineTo(56.5, 36.2);
            ctx.bezierCurveTo(57.1, 36.2, 57.5, 36.2, 57.6, 36.2);
            ctx.bezierCurveTo(57.6, 36.3, 57.5, 36.6, 57.5, 36.9);
            ctx.lineTo(57.5, 38.2);
            ctx.bezierCurveTo(57.5, 38.6, 57.6, 38.9, 57.6, 39.0);
            ctx.bezierCurveTo(57.5, 39.0, 57.1, 39.0, 56.6, 39.0);
            ctx.lineTo(55.3, 39.0);
            ctx.lineTo(55.3, 39.4);
            ctx.lineTo(56.8, 39.4);
            ctx.bezierCurveTo(57.6, 39.4, 58.0, 39.4, 58.2, 39.4);
            ctx.lineTo(58.2, 40.1);
            ctx.bezierCurveTo(58.0, 40.1, 57.6, 40.0, 56.9, 40.0);
            ctx.lineTo(55.3, 40.0);
            ctx.lineTo(55.3, 40.8);
            ctx.lineTo(56.8, 40.8);
            ctx.bezierCurveTo(56.8, 40.5, 56.8, 40.3, 56.7, 40.2);
            ctx.bezierCurveTo(57.0, 40.2, 57.3, 40.2, 57.6, 40.3);
            ctx.bezierCurveTo(57.6, 40.4, 57.6, 40.5, 57.6, 40.7);
            ctx.lineTo(57.6, 41.4);
            ctx.bezierCurveTo(57.6, 41.4, 57.4, 41.4, 57.2, 41.4);
            ctx.bezierCurveTo(57.0, 41.4, 56.8, 41.4, 56.7, 41.4);
            ctx.lineTo(53.2, 41.4);
            ctx.bezierCurveTo(53.1, 41.4, 52.9, 41.4, 52.6, 41.4);
            ctx.bezierCurveTo(52.4, 41.4, 52.3, 41.4, 52.2, 41.4);
            ctx.bezierCurveTo(52.2, 41.4, 52.2, 41.3, 52.2, 41.2);
            ctx.bezierCurveTo(52.2, 41.0, 52.3, 40.9, 52.3, 40.8);
            ctx.bezierCurveTo(52.3, 40.7, 52.3, 40.6, 52.3, 40.5);
            ctx.bezierCurveTo(52.2, 40.4, 52.2, 40.3, 52.2, 40.3);
            ctx.bezierCurveTo(52.5, 40.3, 52.8, 40.3, 53.2, 40.3);
            ctx.lineTo(53.1, 40.4);
            ctx.bezierCurveTo(53.1, 40.5, 53.1, 40.6, 53.1, 40.6);
            ctx.bezierCurveTo(53.1, 40.7, 53.1, 40.7, 53.1, 40.8);
            ctx.lineTo(54.5, 40.8);
            ctx.lineTo(54.5, 40.0);
            ctx.lineTo(53.1, 40.0);
            ctx.bezierCurveTo(52.1, 40.0, 51.6, 40.1, 51.5, 40.1);
            ctx.lineTo(51.5, 39.4);
            ctx.bezierCurveTo(51.7, 39.4, 52.2, 39.4, 53.1, 39.4);
            ctx.lineTo(54.5, 39.4);
            ctx.lineTo(54.5, 39.0);
            ctx.lineTo(53.4, 39.0);
            ctx.bezierCurveTo(52.8, 39.0, 52.5, 39.0, 52.4, 39.0);
            ctx.bezierCurveTo(52.4, 38.9, 52.4, 38.6, 52.4, 38.1);
            ctx.lineTo(52.4, 37.0);
            ctx.bezierCurveTo(52.4, 36.8, 52.4, 36.5, 52.4, 36.2);
            ctx.bezierCurveTo(52.5, 36.2, 52.8, 36.2, 53.4, 36.2);
            ctx.lineTo(54.5, 36.2);
            ctx.lineTo(54.5, 35.7);
            ctx.lineTo(53.3, 35.7);
            ctx.bezierCurveTo(52.8, 35.7, 52.3, 35.7, 51.8, 35.8);
            ctx.lineTo(51.8, 35.0);
            ctx.bezierCurveTo(52.2, 35.0, 52.7, 35.1, 53.3, 35.1);
            ctx.lineTo(54.5, 35.1);
            ctx.bezierCurveTo(54.5, 34.8, 54.5, 34.6, 54.4, 34.3);
            ctx.bezierCurveTo(55.2, 34.3, 55.6, 34.4, 55.6, 34.5);
            ctx.bezierCurveTo(55.6, 34.5, 55.5, 34.6, 55.5, 34.6);
            ctx.bezierCurveTo(55.4, 34.7, 55.4, 34.9, 55.4, 35.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(58.0, 42.4);
            ctx.lineTo(58.0, 43.0);
            ctx.lineTo(59.9, 43.0);
            ctx.bezierCurveTo(60.9, 43.0, 61.5, 43.0, 61.8, 42.9);
            ctx.lineTo(61.8, 43.8);
            ctx.bezierCurveTo(61.3, 43.7, 60.7, 43.7, 59.9, 43.7);
            ctx.lineTo(58.0, 43.7);
            ctx.lineTo(58.0, 44.3);
            ctx.lineTo(61.1, 44.3);
            ctx.bezierCurveTo(62.0, 44.3, 62.7, 44.2, 63.1, 44.2);
            ctx.lineTo(63.1, 45.0);
            ctx.bezierCurveTo(62.5, 45.0, 61.9, 44.9, 61.2, 44.9);
            ctx.lineTo(58.0, 44.9);
            ctx.lineTo(58.0, 45.7);
            ctx.bezierCurveTo(58.1, 46.3, 57.5, 46.6, 56.0, 46.5);
            ctx.bezierCurveTo(56.1, 46.2, 56.0, 45.8, 55.6, 45.4);
            ctx.bezierCurveTo(56.5, 45.6, 57.0, 45.5, 57.0, 45.2);
            ctx.lineTo(57.0, 44.9);
            ctx.lineTo(53.6, 44.9);
            ctx.bezierCurveTo(52.6, 44.9, 52.0, 45.0, 51.7, 45.0);
            ctx.lineTo(51.7, 44.2);
            ctx.bezierCurveTo(52.1, 44.2, 52.7, 44.3, 53.5, 44.3);
            ctx.lineTo(57.0, 44.3);
            ctx.lineTo(57.0, 43.7);
            ctx.lineTo(54.8, 43.7);
            ctx.bezierCurveTo(54.3, 43.7, 53.7, 43.7, 53.0, 43.8);
            ctx.lineTo(53.0, 42.9);
            ctx.bezierCurveTo(53.1, 42.9, 53.3, 43.0, 53.6, 43.0);
            ctx.bezierCurveTo(54.0, 43.0, 54.4, 43.0, 54.8, 43.0);
            ctx.lineTo(57.0, 43.0);
            ctx.lineTo(57.0, 42.4);
            ctx.bezierCurveTo(56.5, 42.4, 55.1, 42.5, 52.8, 42.6);
            ctx.bezierCurveTo(52.7, 42.3, 52.6, 42.0, 52.4, 41.7);
            ctx.bezierCurveTo(53.4, 41.8, 54.8, 41.8, 56.7, 41.7);
            ctx.bezierCurveTo(58.8, 41.6, 60.3, 41.5, 61.3, 41.3);
            ctx.bezierCurveTo(61.8, 41.8, 62.0, 42.2, 62.0, 42.3);
            ctx.bezierCurveTo(62.0, 42.3, 61.9, 42.3, 61.8, 42.3);
            ctx.bezierCurveTo(61.5, 42.2, 61.2, 42.2, 60.8, 42.2);
            ctx.bezierCurveTo(59.9, 42.3, 58.9, 42.4, 58.0, 42.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(53.2, 36.8);
            ctx.lineTo(53.2, 37.4);
            ctx.lineTo(54.5, 37.4);
            ctx.lineTo(54.5, 36.8);
            ctx.lineTo(53.2, 36.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(54.5, 37.9);
            ctx.lineTo(53.2, 37.9);
            ctx.lineTo(53.2, 38.4);
            ctx.lineTo(54.5, 38.4);
            ctx.lineTo(54.5, 37.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(55.3, 36.8);
            ctx.lineTo(55.3, 37.4);
            ctx.lineTo(56.7, 37.4);
            ctx.lineTo(56.7, 36.8);
            ctx.lineTo(55.3, 36.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(55.3, 37.9);
            ctx.lineTo(55.3, 38.4);
            ctx.lineTo(56.7, 38.4);
            ctx.lineTo(56.7, 37.9);
            ctx.lineTo(55.3, 37.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(60.8, 36.6);
            ctx.lineTo(60.8, 35.5);
            ctx.lineTo(59.6, 35.5);
            ctx.bezierCurveTo(59.7, 36.5, 59.4, 37.2, 58.7, 37.7);
            ctx.bezierCurveTo(58.4, 37.5, 58.1, 37.4, 57.7, 37.3);
            ctx.bezierCurveTo(58.6, 36.9, 58.9, 36.1, 58.7, 34.8);
            ctx.bezierCurveTo(58.9, 34.9, 59.3, 34.9, 59.8, 34.9);
            ctx.lineTo(60.6, 34.9);
            ctx.bezierCurveTo(61.1, 34.9, 61.5, 34.9, 61.8, 34.8);
            ctx.bezierCurveTo(61.7, 35.0, 61.6, 35.3, 61.6, 35.8);
            ctx.bezierCurveTo(61.6, 35.9, 61.6, 36.0, 61.6, 36.1);
            ctx.bezierCurveTo(61.6, 36.6, 62.1, 36.6, 63.0, 36.3);
            ctx.bezierCurveTo(62.8, 36.6, 62.7, 37.0, 62.7, 37.4);
            ctx.bezierCurveTo(62.3, 37.4, 61.9, 37.4, 61.5, 37.4);
            ctx.bezierCurveTo(61.0, 37.4, 60.7, 37.1, 60.8, 36.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(58.4, 39.1);
            ctx.lineTo(59.3, 38.7);
            ctx.bezierCurveTo(59.4, 39.0, 59.7, 39.4, 60.2, 39.7);
            ctx.bezierCurveTo(60.6, 39.4, 60.9, 39.0, 61.2, 38.5);
            ctx.lineTo(59.9, 38.5);
            ctx.bezierCurveTo(59.8, 38.5, 59.4, 38.5, 58.8, 38.5);
            ctx.bezierCurveTo(58.4, 38.6, 58.2, 38.6, 58.1, 38.6);
            ctx.lineTo(58.1, 37.7);
            ctx.bezierCurveTo(58.4, 37.7, 59.0, 37.8, 60.0, 37.8);
            ctx.lineTo(61.0, 37.8);
            ctx.bezierCurveTo(61.9, 37.8, 62.4, 37.7, 62.6, 37.7);
            ctx.bezierCurveTo(62.1, 38.6, 61.6, 39.5, 60.9, 40.1);
            ctx.bezierCurveTo(61.5, 40.5, 62.3, 40.6, 63.2, 40.6);
            ctx.bezierCurveTo(62.9, 40.9, 62.7, 41.2, 62.6, 41.6);
            ctx.bezierCurveTo(61.8, 41.4, 61.0, 41.1, 60.2, 40.7);
            ctx.bezierCurveTo(59.7, 41.1, 59.1, 41.4, 58.5, 41.6);
            ctx.bezierCurveTo(58.3, 41.3, 58.1, 41.1, 57.7, 40.9);
            ctx.bezierCurveTo(58.7, 40.7, 59.3, 40.5, 59.6, 40.3);
            ctx.bezierCurveTo(59.0, 39.7, 58.6, 39.3, 58.4, 39.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(110.5, 35.5);
            ctx.lineTo(110.5, 37.5);
            ctx.lineTo(110.7, 37.5);
            ctx.bezierCurveTo(110.8, 37.5, 111.0, 37.4, 111.3, 37.4);
            ctx.bezierCurveTo(111.5, 37.4, 111.6, 37.4, 111.7, 37.4);
            ctx.lineTo(111.7, 38.4);
            ctx.bezierCurveTo(111.6, 38.4, 111.5, 38.4, 111.3, 38.4);
            ctx.bezierCurveTo(111.0, 38.4, 110.8, 38.4, 110.7, 38.4);
            ctx.lineTo(110.5, 38.4);
            ctx.lineTo(110.5, 40.6);
            ctx.lineTo(111.7, 40.0);
            ctx.lineTo(111.7, 41.1);
            ctx.bezierCurveTo(111.4, 41.2, 111.0, 41.3, 110.5, 41.5);
            ctx.lineTo(110.5, 45.3);
            ctx.bezierCurveTo(110.5, 45.8, 109.9, 46.1, 108.7, 46.2);
            ctx.bezierCurveTo(108.6, 45.7, 108.4, 45.3, 108.2, 45.0);
            ctx.bezierCurveTo(109.0, 45.1, 109.4, 45.1, 109.5, 44.9);
            ctx.lineTo(109.5, 41.9);
            ctx.bezierCurveTo(108.7, 42.4, 108.1, 42.7, 107.8, 42.8);
            ctx.lineTo(107.6, 41.6);
            ctx.lineTo(109.5, 40.9);
            ctx.lineTo(109.5, 38.4);
            ctx.lineTo(109.3, 38.4);
            ctx.bezierCurveTo(109.2, 38.4, 108.9, 38.4, 108.5, 38.4);
            ctx.bezierCurveTo(108.1, 38.4, 107.8, 38.4, 107.7, 38.4);
            ctx.lineTo(107.7, 37.4);
            ctx.bezierCurveTo(107.8, 37.4, 108.0, 37.4, 108.4, 37.4);
            ctx.bezierCurveTo(108.9, 37.4, 109.2, 37.5, 109.3, 37.5);
            ctx.lineTo(109.5, 37.5);
            ctx.lineTo(109.5, 35.6);
            ctx.bezierCurveTo(109.5, 35.4, 109.5, 35.1, 109.4, 34.7);
            ctx.bezierCurveTo(110.3, 34.8, 110.7, 34.9, 110.7, 34.9);
            ctx.bezierCurveTo(110.7, 35.0, 110.7, 35.0, 110.7, 35.1);
            ctx.bezierCurveTo(110.6, 35.2, 110.5, 35.4, 110.5, 35.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(114.9, 40.4);
            ctx.lineTo(117.8, 40.4);
            ctx.bezierCurveTo(118.4, 40.4, 118.9, 40.3, 119.4, 40.3);
            ctx.lineTo(119.4, 41.3);
            ctx.bezierCurveTo(119.0, 41.2, 118.5, 41.2, 117.8, 41.2);
            ctx.lineTo(117.6, 41.2);
            ctx.bezierCurveTo(117.3, 42.1, 116.9, 43.0, 116.4, 43.8);
            ctx.bezierCurveTo(117.1, 44.1, 117.9, 44.5, 118.9, 45.0);
            ctx.bezierCurveTo(119.0, 45.1, 119.1, 45.1, 119.1, 45.1);
            ctx.lineTo(118.2, 46.1);
            ctx.bezierCurveTo(117.6, 45.5, 116.8, 45.0, 115.9, 44.5);
            ctx.bezierCurveTo(114.9, 45.3, 113.6, 45.9, 111.9, 46.3);
            ctx.bezierCurveTo(111.8, 45.8, 111.6, 45.5, 111.2, 45.2);
            ctx.bezierCurveTo(112.7, 45.1, 113.9, 44.7, 114.9, 44.1);
            ctx.bezierCurveTo(114.0, 43.6, 113.2, 43.2, 112.4, 43.0);
            ctx.bezierCurveTo(112.9, 42.4, 113.3, 41.8, 113.7, 41.2);
            ctx.lineTo(113.4, 41.2);
            ctx.bezierCurveTo(113.1, 41.2, 112.6, 41.2, 111.9, 41.3);
            ctx.lineTo(111.9, 40.3);
            ctx.bezierCurveTo(112.5, 40.3, 113.0, 40.4, 113.5, 40.4);
            ctx.lineTo(114.0, 40.4);
            ctx.bezierCurveTo(114.3, 39.8, 114.5, 39.0, 114.7, 38.1);
            ctx.bezierCurveTo(115.6, 38.4, 116.0, 38.6, 115.9, 38.8);
            ctx.bezierCurveTo(115.9, 38.8, 115.9, 38.9, 115.8, 38.9);
            ctx.bezierCurveTo(115.7, 39.0, 115.6, 39.2, 115.5, 39.3);
            ctx.bezierCurveTo(115.4, 39.5, 115.2, 39.8, 115.1, 40.1);
            ctx.bezierCurveTo(115.0, 40.4, 114.9, 40.4, 114.9, 40.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(113.3, 36.5);
            ctx.lineTo(117.8, 36.5);
            ctx.bezierCurveTo(117.9, 36.5, 118.2, 36.5, 118.6, 36.5);
            ctx.bezierCurveTo(118.8, 36.5, 119.0, 36.5, 119.0, 36.5);
            ctx.bezierCurveTo(119.0, 36.6, 119.0, 36.7, 119.0, 37.0);
            ctx.bezierCurveTo(119.0, 37.3, 119.0, 37.5, 119.0, 37.6);
            ctx.lineTo(119.0, 37.8);
            ctx.bezierCurveTo(119.0, 38.2, 119.0, 38.6, 119.1, 38.9);
            ctx.lineTo(117.9, 38.9);
            ctx.bezierCurveTo(118.0, 38.4, 118.0, 37.9, 118.0, 37.5);
            ctx.lineTo(113.0, 37.5);
            ctx.bezierCurveTo(113.0, 37.8, 113.0, 38.1, 113.0, 38.5);
            ctx.bezierCurveTo(113.1, 38.8, 113.1, 38.9, 113.1, 39.0);
            ctx.lineTo(112.0, 39.0);
            ctx.bezierCurveTo(112.1, 38.6, 112.1, 38.2, 112.1, 37.8);
            ctx.lineTo(112.1, 37.6);
            ctx.bezierCurveTo(112.1, 37.5, 112.1, 37.3, 112.1, 36.9);
            ctx.bezierCurveTo(112.1, 36.7, 112.1, 36.5, 112.1, 36.4);
            ctx.bezierCurveTo(112.5, 36.5, 112.9, 36.5, 113.3, 36.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(116.6, 41.2);
            ctx.lineTo(114.6, 41.2);
            ctx.bezierCurveTo(114.4, 41.5, 114.2, 42.0, 113.9, 42.5);
            ctx.bezierCurveTo(114.2, 42.7, 114.6, 42.9, 115.0, 43.0);
            ctx.bezierCurveTo(115.2, 43.2, 115.5, 43.3, 115.6, 43.3);
            ctx.bezierCurveTo(115.9, 42.8, 116.2, 42.1, 116.6, 41.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(116.1, 36.2);
            ctx.lineTo(115.0, 36.4);
            ctx.bezierCurveTo(114.9, 35.7, 114.8, 35.2, 114.5, 34.8);
            ctx.lineTo(115.6, 34.6);
            ctx.bezierCurveTo(115.8, 34.9, 115.9, 35.4, 116.1, 36.2);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(126.2, 36.7);
            ctx.lineTo(126.2, 35.9);
            ctx.bezierCurveTo(126.6, 36.0, 127.1, 36.0, 127.8, 36.0);
            ctx.lineTo(130.0, 36.0);
            ctx.bezierCurveTo(130.7, 36.0, 131.3, 36.0, 131.7, 35.9);
            ctx.bezierCurveTo(131.7, 36.0, 131.7, 36.1, 131.7, 36.2);
            ctx.bezierCurveTo(131.6, 36.6, 131.6, 36.9, 131.5, 37.2);
            ctx.lineTo(131.2, 40.1);
            ctx.bezierCurveTo(131.8, 40.1, 132.1, 40.1, 132.2, 40.0);
            ctx.lineTo(132.2, 41.1);
            ctx.bezierCurveTo(132.3, 41.0, 131.9, 41.0, 131.1, 41.0);
            ctx.lineTo(130.7, 44.9);
            ctx.lineTo(131.1, 44.9);
            ctx.bezierCurveTo(131.7, 44.9, 132.1, 44.9, 132.5, 44.8);
            ctx.lineTo(132.5, 45.8);
            ctx.bezierCurveTo(131.9, 45.7, 131.5, 45.7, 131.2, 45.7);
            ctx.lineTo(126.6, 45.7);
            ctx.bezierCurveTo(126.0, 45.7, 125.4, 45.7, 125.0, 45.8);
            ctx.lineTo(125.0, 45.0);
            ctx.bezierCurveTo(123.2, 45.4, 122.0, 45.7, 121.3, 45.9);
            ctx.bezierCurveTo(121.1, 45.6, 121.0, 45.3, 120.9, 45.0);
            ctx.bezierCurveTo(121.1, 45.0, 121.3, 44.9, 121.7, 44.9);
            ctx.bezierCurveTo(122.5, 44.8, 123.1, 44.7, 123.4, 44.6);
            ctx.lineTo(123.4, 41.1);
            ctx.lineTo(122.4, 41.1);
            ctx.bezierCurveTo(121.8, 41.1, 121.3, 41.1, 121.1, 41.1);
            ctx.lineTo(121.1, 40.2);
            ctx.bezierCurveTo(121.5, 40.2, 121.9, 40.3, 122.4, 40.3);
            ctx.lineTo(123.4, 40.3);
            ctx.lineTo(123.4, 38.9);
            ctx.lineTo(123.1, 38.9);
            ctx.bezierCurveTo(122.4, 38.9, 122.0, 38.9, 121.8, 39.0);
            ctx.lineTo(121.8, 38.7);
            ctx.bezierCurveTo(121.6, 38.8, 121.5, 39.0, 121.3, 39.2);
            ctx.bezierCurveTo(121.2, 39.0, 120.9, 38.8, 120.4, 38.6);
            ctx.bezierCurveTo(121.8, 37.5, 122.8, 36.1, 123.6, 34.6);
            ctx.bezierCurveTo(124.3, 34.8, 124.7, 35.0, 124.7, 35.0);
            ctx.bezierCurveTo(124.7, 35.1, 124.7, 35.1, 124.6, 35.1);
            ctx.bezierCurveTo(124.5, 35.2, 124.4, 35.2, 124.3, 35.4);
            ctx.bezierCurveTo(124.7, 35.6, 125.2, 36.0, 125.8, 36.4);
            ctx.bezierCurveTo(126.0, 36.5, 126.1, 36.6, 126.2, 36.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(122.9, 43.9);
            ctx.lineTo(122.0, 44.1);
            ctx.bezierCurveTo(121.9, 43.4, 121.7, 42.6, 121.3, 41.9);
            ctx.lineTo(122.2, 41.6);
            ctx.bezierCurveTo(122.5, 42.2, 122.7, 43.0, 122.9, 43.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(126.6, 44.9);
            ctx.lineTo(127.1, 44.9);
            ctx.lineTo(127.6, 41.0);
            ctx.bezierCurveTo(127.4, 41.0, 127.2, 41.0, 127.1, 41.1);
            ctx.bezierCurveTo(126.9, 41.1, 126.8, 41.1, 126.6, 41.1);
            ctx.lineTo(126.6, 40.0);
            ctx.bezierCurveTo(126.7, 40.0, 126.8, 40.1, 126.9, 40.1);
            ctx.bezierCurveTo(127.0, 40.1, 127.3, 40.1, 127.7, 40.1);
            ctx.lineTo(128.1, 36.8);
            ctx.lineTo(127.8, 36.8);
            ctx.bezierCurveTo(127.2, 36.8, 126.7, 36.9, 126.5, 36.9);
            ctx.bezierCurveTo(126.6, 37.1, 126.7, 37.1, 126.7, 37.2);
            ctx.lineTo(125.9, 37.9);
            ctx.bezierCurveTo(125.5, 37.3, 124.8, 36.7, 123.9, 36.0);
            ctx.bezierCurveTo(123.8, 36.1, 123.7, 36.3, 123.5, 36.5);
            ctx.bezierCurveTo(123.0, 37.3, 122.6, 37.8, 122.3, 38.1);
            ctx.bezierCurveTo(122.5, 38.1, 122.7, 38.1, 123.1, 38.1);
            ctx.lineTo(124.4, 38.1);
            ctx.bezierCurveTo(125.2, 38.1, 125.6, 38.1, 125.8, 38.1);
            ctx.lineTo(125.8, 39.0);
            ctx.bezierCurveTo(125.6, 38.9, 125.1, 38.9, 124.4, 38.9);
            ctx.lineTo(124.2, 38.9);
            ctx.lineTo(124.2, 40.3);
            ctx.lineTo(124.7, 40.3);
            ctx.bezierCurveTo(125.4, 40.3, 125.8, 40.2, 126.0, 40.2);
            ctx.lineTo(126.0, 41.2);
            ctx.bezierCurveTo(125.7, 41.1, 125.3, 41.1, 124.7, 41.1);
            ctx.lineTo(124.2, 41.1);
            ctx.lineTo(124.2, 44.5);
            ctx.bezierCurveTo(124.3, 44.4, 124.5, 44.4, 124.7, 44.4);
            ctx.bezierCurveTo(125.2, 44.3, 125.7, 44.1, 126.2, 44.0);
            ctx.bezierCurveTo(126.2, 44.2, 126.2, 44.4, 126.2, 44.7);
            ctx.bezierCurveTo(126.0, 44.8, 125.8, 44.8, 125.5, 44.9);
            ctx.bezierCurveTo(125.6, 44.9, 125.8, 44.9, 126.0, 44.9);
            ctx.bezierCurveTo(126.2, 44.9, 126.4, 44.9, 126.6, 44.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(125.2, 41.6);
            ctx.bezierCurveTo(125.8, 41.8, 126.2, 41.9, 126.2, 42.0);
            ctx.bezierCurveTo(126.2, 42.0, 126.2, 42.0, 126.1, 42.1);
            ctx.bezierCurveTo(126.0, 42.1, 125.9, 42.3, 125.8, 42.5);
            ctx.bezierCurveTo(125.8, 42.6, 125.7, 42.9, 125.6, 43.2);
            ctx.bezierCurveTo(125.5, 43.5, 125.4, 43.8, 125.3, 43.9);
            ctx.bezierCurveTo(125.1, 43.8, 124.8, 43.7, 124.5, 43.7);
            ctx.bezierCurveTo(124.8, 43.0, 125.0, 42.2, 125.2, 41.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(130.2, 41.0);
            ctx.lineTo(128.5, 41.0);
            ctx.lineTo(128.1, 44.9);
            ctx.lineTo(129.7, 44.9);
            ctx.lineTo(130.2, 41.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(129.0, 36.8);
            ctx.lineTo(128.6, 40.1);
            ctx.lineTo(130.3, 40.1);
            ctx.lineTo(130.6, 36.8);
            ctx.lineTo(129.0, 36.8);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(140.5, 38.4);
            ctx.lineTo(140.5, 40.6);
            ctx.bezierCurveTo(140.3, 41.7, 139.7, 42.3, 138.7, 42.4);
            ctx.lineTo(138.7, 41.5);
            ctx.bezierCurveTo(139.2, 41.4, 139.4, 41.0, 139.4, 40.5);
            ctx.lineTo(138.6, 40.5);
            ctx.lineTo(138.6, 38.4);
            ctx.lineTo(140.5, 38.4);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(16.3, 72.2);
            ctx.lineTo(16.3, 73.2);
            ctx.bezierCurveTo(16.1, 73.2, 15.7, 73.2, 15.0, 73.2);
            ctx.lineTo(13.6, 73.2);
            ctx.bezierCurveTo(13.0, 73.2, 12.5, 73.2, 12.2, 73.2);
            ctx.lineTo(12.2, 72.2);
            ctx.bezierCurveTo(12.8, 72.3, 13.2, 72.3, 13.6, 72.3);
            ctx.lineTo(15.0, 72.3);
            ctx.bezierCurveTo(15.6, 72.3, 16.1, 72.3, 16.3, 72.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.0, 75.8);
            ctx.lineTo(16.0, 76.8);
            ctx.bezierCurveTo(15.9, 76.7, 15.5, 76.7, 14.9, 76.7);
            ctx.lineTo(13.7, 76.7);
            ctx.bezierCurveTo(13.1, 76.7, 12.7, 76.7, 12.5, 76.8);
            ctx.lineTo(12.5, 75.8);
            ctx.bezierCurveTo(12.7, 75.8, 13.1, 75.8, 13.7, 75.8);
            ctx.lineTo(14.9, 75.8);
            ctx.bezierCurveTo(15.5, 75.8, 15.8, 75.8, 16.0, 75.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.0, 74.1);
            ctx.lineTo(16.0, 75.1);
            ctx.lineTo(15.0, 75.0);
            ctx.lineTo(13.6, 75.0);
            ctx.lineTo(12.6, 75.0);
            ctx.lineTo(12.6, 74.1);
            ctx.lineTo(13.6, 74.1);
            ctx.lineTo(15.0, 74.1);
            ctx.lineTo(16.0, 74.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(16.1, 81.9);
            ctx.lineTo(15.0, 81.9);
            ctx.bezierCurveTo(15.1, 81.7, 15.1, 81.3, 15.1, 80.9);
            ctx.lineTo(13.7, 80.9);
            ctx.bezierCurveTo(13.7, 81.5, 13.7, 81.8, 13.7, 82.0);
            ctx.lineTo(12.7, 82.0);
            ctx.bezierCurveTo(12.7, 81.9, 12.7, 81.5, 12.8, 80.9);
            ctx.lineTo(12.8, 78.7);
            ctx.bezierCurveTo(12.7, 78.1, 12.7, 77.6, 12.7, 77.4);
            ctx.bezierCurveTo(12.9, 77.4, 13.4, 77.5, 14.0, 77.5);
            ctx.lineTo(14.7, 77.5);
            ctx.bezierCurveTo(15.4, 77.4, 15.9, 77.4, 16.1, 77.4);
            ctx.bezierCurveTo(16.0, 77.6, 16.0, 78.0, 16.0, 78.8);
            ctx.lineTo(16.0, 80.9);
            ctx.bezierCurveTo(16.0, 81.4, 16.0, 81.7, 16.1, 81.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(15.1, 71.9);
            ctx.lineTo(14.2, 72.2);
            ctx.bezierCurveTo(14.0, 71.6, 13.8, 71.1, 13.6, 70.7);
            ctx.lineTo(14.4, 70.4);
            ctx.bezierCurveTo(14.5, 70.7, 14.8, 71.2, 15.1, 71.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(13.6, 78.3);
            ctx.lineTo(13.6, 80.1);
            ctx.lineTo(15.1, 80.1);
            ctx.lineTo(15.1, 78.3);
            ctx.lineTo(13.6, 78.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(19.8, 73.6);
            ctx.lineTo(19.8, 74.1);
            ctx.bezierCurveTo(19.8, 74.6, 19.8, 74.8, 19.9, 75.0);
            ctx.bezierCurveTo(19.8, 74.9, 19.6, 74.9, 19.3, 74.9);
            ctx.lineTo(19.3, 75.5);
            ctx.lineTo(20.8, 75.5);
            ctx.lineTo(20.8, 74.9);
            ctx.lineTo(20.4, 74.9);
            ctx.lineTo(20.4, 74.2);
            ctx.lineTo(20.4, 73.7);
            ctx.bezierCurveTo(20.4, 73.2, 20.4, 72.9, 20.4, 72.7);
            ctx.bezierCurveTo(20.5, 72.8, 20.9, 72.8, 21.5, 72.8);
            ctx.lineTo(22.3, 72.8);
            ctx.bezierCurveTo(22.8, 72.8, 23.2, 72.8, 23.4, 72.7);
            ctx.bezierCurveTo(23.3, 72.9, 23.3, 73.2, 23.3, 73.6);
            ctx.lineTo(23.3, 74.0);
            ctx.bezierCurveTo(23.4, 74.5, 23.4, 74.8, 23.4, 74.9);
            ctx.bezierCurveTo(23.3, 74.9, 22.9, 74.9, 22.4, 74.9);
            ctx.lineTo(21.6, 74.9);
            ctx.lineTo(21.6, 75.5);
            ctx.lineTo(22.5, 75.5);
            ctx.lineTo(23.6, 75.4);
            ctx.lineTo(23.6, 76.3);
            ctx.lineTo(22.5, 76.2);
            ctx.lineTo(21.6, 76.2);
            ctx.lineTo(21.6, 76.8);
            ctx.lineTo(22.2, 76.8);
            ctx.bezierCurveTo(22.6, 76.8, 22.9, 76.8, 23.1, 76.7);
            ctx.lineTo(23.1, 77.6);
            ctx.bezierCurveTo(23.0, 77.5, 22.7, 77.5, 22.2, 77.5);
            ctx.lineTo(21.6, 77.5);
            ctx.lineTo(21.6, 78.1);
            ctx.lineTo(22.4, 78.1);
            ctx.bezierCurveTo(23.1, 78.1, 23.5, 78.1, 23.8, 78.0);
            ctx.lineTo(23.8, 78.8);
            ctx.bezierCurveTo(23.6, 78.8, 23.1, 78.7, 22.4, 78.7);
            ctx.lineTo(20.4, 78.7);
            ctx.bezierCurveTo(20.7, 79.3, 21.0, 79.7, 21.2, 80.0);
            ctx.bezierCurveTo(21.8, 79.6, 22.3, 79.3, 22.5, 79.0);
            ctx.bezierCurveTo(22.6, 79.1, 22.7, 79.2, 22.8, 79.3);
            ctx.bezierCurveTo(23.2, 79.6, 23.3, 79.7, 23.2, 79.7);
            ctx.bezierCurveTo(23.2, 79.7, 23.1, 79.8, 23.0, 79.8);
            ctx.bezierCurveTo(22.5, 79.9, 22.1, 80.1, 21.6, 80.4);
            ctx.bezierCurveTo(22.2, 80.8, 23.0, 81.0, 24.0, 81.2);
            ctx.bezierCurveTo(23.7, 81.5, 23.5, 81.8, 23.3, 82.1);
            ctx.bezierCurveTo(21.6, 81.4, 20.4, 80.4, 19.8, 79.1);
            ctx.bezierCurveTo(19.7, 79.2, 19.4, 79.4, 19.1, 79.8);
            ctx.lineTo(19.1, 81.2);
            ctx.lineTo(20.1, 80.5);
            ctx.bezierCurveTo(20.1, 80.8, 20.2, 81.0, 20.3, 81.3);
            ctx.bezierCurveTo(19.6, 81.6, 19.0, 82.0, 18.5, 82.4);
            ctx.lineTo(18.0, 81.7);
            ctx.bezierCurveTo(18.2, 81.6, 18.4, 81.4, 18.4, 81.0);
            ctx.lineTo(18.4, 80.2);
            ctx.bezierCurveTo(17.7, 80.8, 17.1, 81.1, 16.8, 81.2);
            ctx.bezierCurveTo(16.6, 81.0, 16.3, 80.8, 16.1, 80.6);
            ctx.bezierCurveTo(17.4, 80.2, 18.4, 79.6, 19.1, 78.7);
            ctx.lineTo(17.8, 78.7);
            ctx.bezierCurveTo(17.2, 78.7, 16.7, 78.8, 16.4, 78.8);
            ctx.lineTo(16.4, 78.0);
            ctx.bezierCurveTo(16.6, 78.1, 17.1, 78.1, 17.8, 78.1);
            ctx.lineTo(18.5, 78.1);
            ctx.lineTo(18.5, 77.5);
            ctx.lineTo(17.8, 77.5);
            ctx.bezierCurveTo(17.3, 77.5, 16.9, 77.5, 16.8, 77.5);
            ctx.lineTo(16.8, 76.8);
            ctx.bezierCurveTo(17.0, 76.8, 17.3, 76.8, 17.8, 76.8);
            ctx.lineTo(18.5, 76.8);
            ctx.lineTo(18.5, 76.2);
            ctx.lineTo(17.7, 76.2);
            ctx.bezierCurveTo(17.1, 76.2, 16.8, 76.2, 16.6, 76.3);
            ctx.lineTo(16.6, 75.4);
            ctx.bezierCurveTo(16.8, 75.5, 17.1, 75.5, 17.7, 75.5);
            ctx.lineTo(18.5, 75.5);
            ctx.lineTo(18.5, 74.9);
            ctx.lineTo(18.1, 74.9);
            ctx.bezierCurveTo(17.5, 74.9, 17.2, 74.9, 17.0, 74.9);
            ctx.bezierCurveTo(17.0, 74.8, 17.1, 74.5, 17.0, 74.0);
            ctx.lineTo(17.0, 73.6);
            ctx.bezierCurveTo(17.0, 73.2, 17.0, 72.9, 17.0, 72.7);
            ctx.bezierCurveTo(17.1, 72.8, 17.5, 72.8, 18.1, 72.8);
            ctx.lineTo(18.8, 72.8);
            ctx.bezierCurveTo(19.4, 72.8, 19.7, 72.8, 19.9, 72.7);
            ctx.bezierCurveTo(19.8, 72.9, 19.8, 73.2, 19.8, 73.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(20.7, 71.6);
            ctx.lineTo(22.3, 71.6);
            ctx.bezierCurveTo(23.1, 71.6, 23.6, 71.5, 23.9, 71.5);
            ctx.lineTo(23.9, 72.4);
            ctx.bezierCurveTo(23.6, 72.4, 23.1, 72.4, 22.3, 72.4);
            ctx.lineTo(18.1, 72.4);
            ctx.bezierCurveTo(17.3, 72.4, 16.8, 72.4, 16.5, 72.4);
            ctx.lineTo(16.5, 71.5);
            ctx.bezierCurveTo(16.8, 71.5, 17.4, 71.6, 18.1, 71.6);
            ctx.lineTo(19.7, 71.6);
            ctx.bezierCurveTo(19.5, 71.2, 19.4, 70.9, 19.2, 70.7);
            ctx.lineTo(20.2, 70.5);
            ctx.bezierCurveTo(20.4, 70.7, 20.5, 71.1, 20.7, 71.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(17.8, 73.5);
            ctx.lineTo(17.8, 74.2);
            ctx.lineTo(19.1, 74.2);
            ctx.lineTo(19.1, 73.5);
            ctx.lineTo(17.8, 73.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(19.3, 76.2);
            ctx.lineTo(19.3, 76.8);
            ctx.lineTo(20.8, 76.8);
            ctx.lineTo(20.8, 76.2);
            ctx.lineTo(19.3, 76.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(19.3, 77.5);
            ctx.lineTo(19.3, 78.1);
            ctx.lineTo(20.8, 78.1);
            ctx.lineTo(20.8, 77.5);
            ctx.lineTo(19.3, 77.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(21.2, 73.5);
            ctx.lineTo(21.2, 74.2);
            ctx.lineTo(22.6, 74.2);
            ctx.lineTo(22.6, 73.5);
            ctx.lineTo(21.2, 73.5);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(28.2, 73.2);
            ctx.lineTo(28.2, 80.4);
            ctx.bezierCurveTo(28.2, 81.4, 28.2, 82.0, 28.2, 82.1);
            ctx.lineTo(27.1, 82.1);
            ctx.bezierCurveTo(27.2, 81.9, 27.2, 81.3, 27.2, 80.4);
            ctx.lineTo(27.2, 74.8);
            ctx.bezierCurveTo(26.5, 75.9, 26.1, 76.6, 25.8, 77.0);
            ctx.bezierCurveTo(25.7, 76.8, 25.5, 76.5, 25.3, 76.3);
            ctx.bezierCurveTo(25.2, 76.2, 25.1, 76.1, 25.0, 76.0);
            ctx.bezierCurveTo(26.3, 74.9, 27.3, 73.1, 28.2, 70.6);
            ctx.bezierCurveTo(28.2, 70.6, 28.3, 70.6, 28.3, 70.7);
            ctx.bezierCurveTo(29.2, 71.1, 29.6, 71.3, 29.5, 71.4);
            ctx.bezierCurveTo(29.5, 71.4, 29.4, 71.5, 29.3, 71.5);
            ctx.bezierCurveTo(28.9, 71.8, 28.6, 72.4, 28.2, 73.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(30.5, 76.6);
            ctx.bezierCurveTo(30.6, 76.7, 30.9, 76.7, 31.1, 76.8);
            ctx.bezierCurveTo(31.5, 76.9, 31.7, 76.9, 31.7, 77.0);
            ctx.bezierCurveTo(31.7, 77.0, 31.6, 77.1, 31.5, 77.2);
            ctx.bezierCurveTo(31.4, 77.3, 31.3, 77.4, 31.2, 77.5);
            ctx.bezierCurveTo(31.2, 77.7, 31.1, 77.9, 30.9, 78.3);
            ctx.bezierCurveTo(30.6, 79.3, 30.2, 80.1, 29.8, 80.8);
            ctx.bezierCurveTo(29.7, 80.7, 29.6, 80.7, 29.5, 80.7);
            ctx.bezierCurveTo(29.1, 80.5, 28.9, 80.4, 28.7, 80.4);
            ctx.bezierCurveTo(29.5, 79.1, 30.1, 77.9, 30.5, 76.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(31.7, 72.8);
            ctx.lineTo(34.9, 72.8);
            ctx.bezierCurveTo(35.4, 72.8, 36.1, 72.8, 37.1, 72.7);
            ctx.bezierCurveTo(37.0, 73.1, 36.8, 73.5, 36.6, 74.1);
            ctx.bezierCurveTo(36.3, 75.0, 36.0, 75.6, 35.9, 75.9);
            ctx.lineTo(35.8, 75.9);
            ctx.bezierCurveTo(35.3, 75.8, 35.0, 75.8, 34.7, 75.8);
            ctx.bezierCurveTo(35.0, 75.4, 35.3, 74.7, 35.7, 73.8);
            ctx.lineTo(31.2, 73.8);
            ctx.lineTo(29.8, 76.1);
            ctx.bezierCurveTo(29.5, 75.9, 29.2, 75.7, 28.8, 75.6);
            ctx.bezierCurveTo(30.0, 74.4, 30.9, 72.7, 31.4, 70.8);
            ctx.bezierCurveTo(32.4, 71.1, 32.9, 71.2, 32.8, 71.3);
            ctx.bezierCurveTo(32.8, 71.3, 32.7, 71.4, 32.7, 71.4);
            ctx.bezierCurveTo(32.4, 71.7, 32.1, 72.2, 31.7, 72.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(33.4, 75.7);
            ctx.lineTo(33.4, 81.1);
            ctx.bezierCurveTo(33.6, 81.8, 32.9, 82.2, 31.3, 82.2);
            ctx.bezierCurveTo(31.2, 81.8, 31.1, 81.4, 30.8, 81.1);
            ctx.lineTo(30.8, 81.0);
            ctx.bezierCurveTo(32.0, 81.2, 32.5, 81.1, 32.4, 80.7);
            ctx.lineTo(32.4, 75.8);
            ctx.bezierCurveTo(32.4, 75.1, 32.4, 74.6, 32.3, 74.4);
            ctx.bezierCurveTo(33.2, 74.4, 33.7, 74.5, 33.6, 74.6);
            ctx.bezierCurveTo(33.6, 74.6, 33.6, 74.7, 33.6, 74.7);
            ctx.bezierCurveTo(33.4, 75.0, 33.4, 75.4, 33.4, 75.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(34.0, 77.1);
            ctx.lineTo(35.0, 76.7);
            ctx.bezierCurveTo(35.2, 77.0, 35.5, 77.6, 36.0, 78.3);
            ctx.bezierCurveTo(36.4, 79.1, 36.7, 79.7, 37.0, 80.3);
            ctx.bezierCurveTo(36.5, 80.5, 36.1, 80.7, 35.8, 80.8);
            ctx.bezierCurveTo(35.3, 79.2, 34.7, 78.0, 34.0, 77.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(46.1, 73.1);
            ctx.lineTo(47.9, 73.1);
            ctx.lineTo(49.7, 73.0);
            ctx.bezierCurveTo(49.4, 77.4, 49.2, 80.0, 49.2, 80.8);
            ctx.bezierCurveTo(49.0, 81.8, 48.1, 82.3, 46.4, 82.3);
            ctx.bezierCurveTo(46.3, 81.8, 46.1, 81.4, 45.8, 81.0);
            ctx.bezierCurveTo(46.7, 81.2, 47.4, 81.2, 47.8, 81.0);
            ctx.bezierCurveTo(48.1, 81.0, 48.3, 79.5, 48.4, 76.5);
            ctx.bezierCurveTo(48.4, 75.4, 48.5, 74.5, 48.5, 73.9);
            ctx.lineTo(45.7, 73.9);
            ctx.bezierCurveTo(45.4, 74.5, 45.0, 75.2, 44.5, 76.0);
            ctx.bezierCurveTo(44.2, 75.8, 43.9, 75.7, 43.6, 75.6);
            ctx.lineTo(43.6, 80.2);
            ctx.bezierCurveTo(43.6, 81.1, 43.6, 81.6, 43.6, 81.9);
            ctx.lineTo(42.5, 81.9);
            ctx.bezierCurveTo(42.5, 81.5, 42.5, 81.1, 42.5, 80.6);
            ctx.lineTo(40.0, 80.6);
            ctx.bezierCurveTo(40.0, 81.1, 40.0, 81.6, 40.1, 81.9);
            ctx.lineTo(38.9, 81.9);
            ctx.bezierCurveTo(38.9, 81.7, 39.0, 81.1, 39.0, 80.3);
            ctx.lineTo(39.0, 74.8);
            ctx.bezierCurveTo(39.0, 74.7, 38.9, 74.4, 38.9, 73.9);
            ctx.bezierCurveTo(38.9, 73.4, 38.9, 73.2, 38.9, 73.1);
            ctx.bezierCurveTo(39.4, 73.1, 39.8, 73.1, 40.0, 73.1);
            ctx.lineTo(40.4, 73.1);
            ctx.bezierCurveTo(40.5, 72.5, 40.6, 71.7, 40.6, 70.7);
            ctx.bezierCurveTo(41.6, 70.8, 42.0, 70.9, 42.0, 71.0);
            ctx.bezierCurveTo(42.0, 71.1, 41.9, 71.2, 41.9, 71.2);
            ctx.bezierCurveTo(41.8, 71.3, 41.7, 71.4, 41.7, 71.5);
            ctx.bezierCurveTo(41.6, 71.7, 41.5, 72.1, 41.4, 72.5);
            ctx.bezierCurveTo(41.3, 72.7, 41.3, 72.9, 41.2, 73.1);
            ctx.lineTo(42.1, 73.1);
            ctx.bezierCurveTo(42.4, 73.1, 42.9, 73.1, 43.6, 73.1);
            ctx.bezierCurveTo(43.6, 73.3, 43.6, 73.8, 43.6, 74.7);
            ctx.lineTo(43.6, 75.4);
            ctx.bezierCurveTo(44.6, 74.2, 45.4, 72.5, 45.8, 70.5);
            ctx.bezierCurveTo(46.7, 70.8, 47.1, 71.0, 47.1, 71.1);
            ctx.bezierCurveTo(47.1, 71.1, 47.1, 71.1, 47.0, 71.2);
            ctx.bezierCurveTo(46.9, 71.2, 46.8, 71.3, 46.8, 71.4);
            ctx.bezierCurveTo(46.4, 72.1, 46.2, 72.6, 46.1, 73.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(40.0, 73.9);
            ctx.lineTo(40.0, 76.6);
            ctx.lineTo(42.5, 76.6);
            ctx.lineTo(42.5, 73.9);
            ctx.lineTo(40.0, 73.9);
            ctx.closePath();

            // 2///
            ctx.moveTo(40.0, 77.3);
            ctx.lineTo(40.0, 79.8);
            ctx.lineTo(42.5, 79.8);
            ctx.lineTo(42.5, 77.3);
            ctx.lineTo(40.0, 77.3);
            ctx.closePath();

            // 2///
            ctx.moveTo(47.1, 78.4);
            ctx.lineTo(46.1, 78.9);
            ctx.bezierCurveTo(46.0, 78.4, 45.6, 77.6, 44.9, 76.6);
            ctx.lineTo(45.8, 76.0);
            ctx.bezierCurveTo(46.0, 76.3, 46.3, 76.9, 46.8, 77.9);
            ctx.bezierCurveTo(47.0, 78.1, 47.0, 78.3, 47.1, 78.4);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(57.7, 71.9);
            ctx.lineTo(57.7, 73.6);
            ctx.bezierCurveTo(58.1, 77.2, 60.0, 79.6, 63.3, 80.8);
            ctx.lineTo(63.2, 80.9);
            ctx.bezierCurveTo(62.8, 81.0, 62.5, 81.4, 62.1, 81.9);
            ctx.bezierCurveTo(59.3, 80.4, 57.6, 78.1, 57.2, 75.2);
            ctx.bezierCurveTo(57.0, 78.0, 55.4, 80.3, 52.7, 82.3);
            ctx.bezierCurveTo(52.3, 82.0, 51.9, 81.7, 51.5, 81.4);
            ctx.lineTo(51.4, 81.4);
            ctx.bezierCurveTo(53.2, 80.6, 54.5, 79.3, 55.5, 77.6);
            ctx.bezierCurveTo(56.4, 75.8, 56.7, 73.5, 56.5, 70.6);
            ctx.bezierCurveTo(56.6, 70.6, 56.7, 70.6, 56.9, 70.6);
            ctx.bezierCurveTo(57.8, 70.7, 58.2, 70.7, 58.2, 70.8);
            ctx.bezierCurveTo(58.2, 70.9, 58.1, 71.0, 58.1, 71.1);
            ctx.bezierCurveTo(57.8, 71.3, 57.7, 71.6, 57.7, 71.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(67.9, 71.8);
            ctx.lineTo(67.9, 73.7);
            ctx.bezierCurveTo(68.1, 73.7, 68.4, 73.6, 68.7, 73.6);
            ctx.bezierCurveTo(68.8, 73.6, 68.8, 73.6, 68.9, 73.6);
            ctx.lineTo(68.9, 74.6);
            ctx.lineTo(68.8, 74.6);
            ctx.bezierCurveTo(68.5, 74.5, 68.2, 74.4, 67.9, 74.4);
            ctx.lineTo(67.9, 76.8);
            ctx.lineTo(69.3, 76.2);
            ctx.lineTo(69.5, 77.1);
            ctx.lineTo(67.9, 77.9);
            ctx.lineTo(67.9, 80.5);
            ctx.bezierCurveTo(67.9, 81.0, 67.9, 81.5, 68.0, 82.0);
            ctx.lineTo(68.0, 82.1);
            ctx.lineTo(66.8, 82.1);
            ctx.lineTo(66.8, 81.9);
            ctx.bezierCurveTo(66.9, 81.5, 66.9, 81.0, 66.9, 80.5);
            ctx.lineTo(66.9, 78.3);
            ctx.lineTo(64.9, 79.2);
            ctx.lineTo(64.3, 78.3);
            ctx.lineTo(66.9, 77.2);
            ctx.lineTo(66.9, 74.4);
            ctx.lineTo(65.8, 74.4);
            ctx.bezierCurveTo(65.8, 74.8, 65.7, 75.2, 65.6, 75.7);
            ctx.bezierCurveTo(65.6, 76.1, 65.5, 76.4, 65.5, 76.5);
            ctx.bezierCurveTo(65.2, 76.4, 64.8, 76.3, 64.3, 76.4);
            ctx.bezierCurveTo(64.8, 75.0, 65.0, 73.6, 65.1, 72.2);
            ctx.bezierCurveTo(65.8, 72.3, 66.3, 72.4, 66.4, 72.5);
            ctx.bezierCurveTo(66.4, 72.5, 66.4, 72.6, 66.3, 72.6);
            ctx.bezierCurveTo(66.2, 72.9, 66.1, 73.2, 66.0, 73.7);
            ctx.lineTo(66.9, 73.7);
            ctx.lineTo(66.9, 72.0);
            ctx.bezierCurveTo(66.9, 71.4, 66.9, 71.0, 66.9, 70.7);
            ctx.bezierCurveTo(67.6, 70.8, 68.1, 70.9, 68.2, 70.9);
            ctx.bezierCurveTo(68.2, 71.0, 68.1, 71.0, 68.1, 71.0);
            ctx.bezierCurveTo(67.9, 71.3, 67.9, 71.5, 67.9, 71.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(70.8, 73.1);
            ctx.lineTo(73.8, 73.1);
            ctx.bezierCurveTo(74.7, 73.1, 75.3, 73.0, 75.7, 72.9);
            ctx.bezierCurveTo(75.4, 77.6, 75.0, 80.3, 74.6, 81.1);
            ctx.bezierCurveTo(74.3, 81.5, 73.6, 81.7, 72.5, 81.7);
            ctx.bezierCurveTo(72.5, 81.3, 72.3, 80.9, 72.0, 80.5);
            ctx.bezierCurveTo(72.9, 80.6, 73.4, 80.6, 73.5, 80.4);
            ctx.bezierCurveTo(73.8, 80.6, 74.2, 78.4, 74.6, 73.9);
            ctx.lineTo(73.8, 73.9);
            ctx.bezierCurveTo(73.4, 78.0, 72.1, 80.6, 69.8, 81.7);
            ctx.bezierCurveTo(69.6, 81.4, 69.2, 81.2, 68.6, 81.0);
            ctx.bezierCurveTo(71.0, 80.3, 72.4, 77.9, 72.8, 73.9);
            ctx.lineTo(72.1, 73.9);
            ctx.bezierCurveTo(71.6, 76.4, 70.7, 78.3, 69.6, 79.4);
            ctx.bezierCurveTo(69.4, 79.2, 69.0, 79.1, 68.5, 78.9);
            ctx.bezierCurveTo(69.8, 78.2, 70.7, 76.5, 71.1, 73.9);
            ctx.lineTo(70.4, 73.9);
            ctx.lineTo(70.1, 74.5);
            ctx.bezierCurveTo(69.7, 75.1, 69.5, 75.5, 69.4, 75.7);
            ctx.bezierCurveTo(69.2, 75.5, 68.9, 75.4, 68.4, 75.3);
            ctx.bezierCurveTo(69.4, 74.0, 70.1, 72.5, 70.6, 70.8);
            ctx.bezierCurveTo(71.4, 70.9, 71.9, 71.1, 72.1, 71.3);
            ctx.lineTo(72.0, 71.4);
            ctx.bezierCurveTo(71.6, 71.6, 71.3, 72.2, 70.8, 73.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(80.1, 75.7);
            ctx.lineTo(80.1, 79.9);
            ctx.bezierCurveTo(80.1, 80.0, 80.1, 80.4, 80.1, 81.0);
            ctx.bezierCurveTo(80.2, 81.6, 80.2, 82.0, 80.2, 82.2);
            ctx.lineTo(79.0, 82.2);
            ctx.bezierCurveTo(79.1, 81.3, 79.1, 80.6, 79.1, 79.9);
            ctx.lineTo(79.1, 76.9);
            ctx.bezierCurveTo(78.8, 77.3, 78.3, 77.8, 77.8, 78.3);
            ctx.bezierCurveTo(77.7, 78.0, 77.5, 77.7, 77.2, 77.4);
            ctx.bezierCurveTo(78.5, 76.2, 79.6, 74.8, 80.3, 73.4);
            ctx.bezierCurveTo(81.1, 73.9, 81.5, 74.2, 81.5, 74.3);
            ctx.bezierCurveTo(81.4, 74.3, 81.4, 74.4, 81.3, 74.5);
            ctx.bezierCurveTo(81.1, 74.6, 81.0, 74.7, 80.9, 74.8);
            ctx.bezierCurveTo(80.7, 75.1, 80.6, 75.2, 80.7, 75.1);
            ctx.bezierCurveTo(80.4, 75.4, 80.2, 75.6, 80.1, 75.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(80.1, 70.7);
            ctx.bezierCurveTo(80.8, 71.0, 81.1, 71.3, 81.2, 71.6);
            ctx.bezierCurveTo(81.1, 71.6, 81.1, 71.6, 81.0, 71.7);
            ctx.bezierCurveTo(80.8, 71.7, 80.6, 71.9, 80.3, 72.2);
            ctx.bezierCurveTo(80.1, 72.4, 79.5, 73.1, 78.6, 74.1);
            ctx.bezierCurveTo(78.3, 74.4, 78.2, 74.6, 78.1, 74.7);
            ctx.bezierCurveTo(77.9, 74.4, 77.7, 74.1, 77.3, 73.8);
            ctx.bezierCurveTo(78.5, 72.9, 79.4, 71.8, 80.1, 70.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(88.7, 72.7);
            ctx.lineTo(88.7, 73.9);
            ctx.bezierCurveTo(88.1, 73.8, 87.3, 73.8, 86.3, 73.8);
            ctx.lineTo(85.4, 73.8);
            ctx.lineTo(85.4, 76.4);
            ctx.lineTo(86.0, 76.4);
            ctx.bezierCurveTo(86.4, 76.4, 87.0, 76.3, 88.1, 76.3);
            ctx.lineTo(88.1, 77.4);
            ctx.bezierCurveTo(87.7, 77.3, 87.1, 77.3, 86.1, 77.3);
            ctx.lineTo(85.4, 77.3);
            ctx.lineTo(85.4, 80.6);
            ctx.lineTo(86.8, 80.6);
            ctx.bezierCurveTo(87.7, 80.6, 88.4, 80.6, 88.9, 80.5);
            ctx.lineTo(88.9, 81.6);
            ctx.bezierCurveTo(88.3, 81.5, 87.7, 81.5, 86.8, 81.5);
            ctx.lineTo(82.9, 81.5);
            ctx.bezierCurveTo(82.3, 81.5, 81.7, 81.5, 81.1, 81.6);
            ctx.lineTo(81.1, 80.5);
            ctx.bezierCurveTo(81.8, 80.6, 82.4, 80.6, 83.0, 80.6);
            ctx.lineTo(84.4, 80.6);
            ctx.lineTo(84.4, 77.3);
            ctx.lineTo(83.8, 77.3);
            ctx.bezierCurveTo(83.1, 77.3, 82.5, 77.4, 81.9, 77.4);
            ctx.lineTo(81.9, 76.3);
            ctx.bezierCurveTo(82.2, 76.3, 82.8, 76.4, 83.8, 76.4);
            ctx.lineTo(84.4, 76.4);
            ctx.lineTo(84.4, 73.8);
            ctx.lineTo(83.7, 73.8);
            ctx.bezierCurveTo(83.0, 73.8, 82.3, 73.8, 81.6, 73.9);
            ctx.lineTo(81.6, 72.7);
            ctx.bezierCurveTo(82.4, 72.8, 83.1, 72.8, 83.7, 72.8);
            ctx.lineTo(86.4, 72.8);
            ctx.bezierCurveTo(87.1, 72.8, 87.9, 72.8, 88.7, 72.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(85.6, 72.3);
            ctx.lineTo(84.6, 72.7);
            ctx.bezierCurveTo(84.4, 72.1, 84.1, 71.5, 83.8, 71.0);
            ctx.lineTo(84.9, 70.7);
            ctx.bezierCurveTo(85.1, 71.2, 85.4, 71.7, 85.6, 72.3);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(96.4, 71.9);
            ctx.lineTo(96.4, 74.7);
            ctx.lineTo(98.5, 74.7);
            ctx.bezierCurveTo(99.7, 74.7, 100.6, 74.7, 101.0, 74.6);
            ctx.lineTo(101.0, 75.7);
            ctx.bezierCurveTo(100.5, 75.7, 99.6, 75.7, 98.5, 75.7);
            ctx.lineTo(96.4, 75.7);
            ctx.lineTo(96.4, 80.8);
            ctx.lineTo(99.8, 80.8);
            ctx.bezierCurveTo(101.0, 80.8, 101.8, 80.8, 102.1, 80.7);
            ctx.lineTo(102.1, 81.8);
            ctx.bezierCurveTo(101.8, 81.8, 101.0, 81.7, 99.8, 81.7);
            ctx.lineTo(92.4, 81.7);
            ctx.bezierCurveTo(92.1, 81.7, 91.7, 81.8, 91.2, 81.8);
            ctx.bezierCurveTo(90.8, 81.8, 90.5, 81.8, 90.3, 81.8);
            ctx.lineTo(90.3, 80.7);
            ctx.bezierCurveTo(90.8, 80.8, 91.5, 80.8, 92.4, 80.8);
            ctx.lineTo(95.3, 80.8);
            ctx.lineTo(95.3, 72.1);
            ctx.bezierCurveTo(95.3, 72.1, 95.3, 72.1, 95.3, 71.9);
            ctx.bezierCurveTo(95.2, 71.4, 95.2, 71.1, 95.2, 70.9);
            ctx.bezierCurveTo(96.1, 70.9, 96.6, 71.0, 96.6, 71.1);
            ctx.bezierCurveTo(96.6, 71.2, 96.6, 71.3, 96.5, 71.4);
            ctx.bezierCurveTo(96.5, 71.5, 96.4, 71.7, 96.4, 71.9);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(109.8, 71.6);
            ctx.lineTo(113.3, 71.6);
            ctx.bezierCurveTo(113.7, 71.6, 114.1, 71.6, 114.5, 71.5);
            ctx.bezierCurveTo(114.5, 71.8, 114.4, 72.2, 114.4, 72.5);
            ctx.lineTo(114.4, 75.1);
            ctx.bezierCurveTo(114.4, 75.9, 114.5, 76.5, 114.5, 76.8);
            ctx.lineTo(113.5, 76.8);
            ctx.bezierCurveTo(113.5, 76.8, 113.5, 76.7, 113.5, 76.6);
            ctx.bezierCurveTo(113.5, 76.4, 113.6, 76.2, 113.6, 76.0);
            ctx.lineTo(110.7, 76.0);
            ctx.lineTo(110.7, 78.0);
            ctx.bezierCurveTo(110.6, 78.4, 110.8, 78.6, 111.4, 78.6);
            ctx.bezierCurveTo(112.2, 78.6, 112.8, 78.6, 113.2, 78.6);
            ctx.bezierCurveTo(113.5, 78.6, 113.8, 78.2, 113.9, 77.4);
            ctx.bezierCurveTo(114.3, 77.7, 114.6, 78.0, 114.9, 78.0);
            ctx.bezierCurveTo(114.7, 79.0, 114.4, 79.5, 114.0, 79.5);
            ctx.bezierCurveTo(113.3, 79.6, 112.3, 79.6, 110.9, 79.5);
            ctx.bezierCurveTo(110.1, 79.5, 109.7, 79.1, 109.8, 78.5);
            ctx.lineTo(109.8, 71.9);
            ctx.bezierCurveTo(109.6, 71.8, 109.2, 71.8, 108.7, 71.9);
            ctx.bezierCurveTo(108.7, 72.1, 108.7, 72.4, 108.7, 72.7);
            ctx.bezierCurveTo(108.6, 76.7, 109.0, 79.0, 109.7, 79.6);
            ctx.bezierCurveTo(110.7, 80.6, 112.5, 81.0, 115.2, 80.8);
            ctx.bezierCurveTo(114.8, 81.3, 114.6, 81.8, 114.4, 82.2);
            ctx.bezierCurveTo(110.8, 81.9, 108.7, 80.8, 108.3, 79.0);
            ctx.bezierCurveTo(108.1, 78.5, 108.0, 77.7, 108.0, 76.7);
            ctx.bezierCurveTo(107.9, 76.2, 107.9, 75.7, 107.9, 75.0);
            ctx.bezierCurveTo(107.9, 74.4, 107.9, 73.4, 107.9, 72.0);
            ctx.bezierCurveTo(107.6, 72.0, 107.3, 72.1, 107.1, 72.1);
            ctx.lineTo(107.1, 78.9);
            ctx.bezierCurveTo(107.1, 80.4, 107.1, 81.4, 107.2, 81.9);
            ctx.lineTo(106.1, 81.9);
            ctx.bezierCurveTo(106.2, 81.0, 106.2, 80.0, 106.2, 78.8);
            ctx.lineTo(106.2, 72.1);
            ctx.lineTo(105.3, 72.2);
            ctx.bezierCurveTo(105.4, 74.7, 105.3, 76.7, 105.1, 78.0);
            ctx.bezierCurveTo(104.9, 79.4, 104.5, 80.7, 103.9, 82.0);
            ctx.bezierCurveTo(103.7, 81.6, 103.4, 81.2, 103.0, 81.0);
            ctx.bezierCurveTo(103.0, 80.9, 103.1, 80.9, 103.1, 80.8);
            ctx.bezierCurveTo(103.5, 80.2, 103.8, 79.7, 103.9, 79.1);
            ctx.bezierCurveTo(104.4, 77.2, 104.6, 74.6, 104.3, 71.4);
            ctx.bezierCurveTo(106.1, 71.5, 107.7, 71.3, 109.1, 70.6);
            ctx.bezierCurveTo(109.4, 70.9, 109.6, 71.3, 109.8, 71.6);
            ctx.closePath();

            // 2///
            ctx.moveTo(110.7, 72.4);
            ctx.lineTo(110.7, 75.2);
            ctx.lineTo(111.7, 75.2);
            ctx.lineTo(111.7, 72.4);
            ctx.lineTo(110.7, 72.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(113.6, 72.4);
            ctx.lineTo(112.6, 72.4);
            ctx.lineTo(112.6, 75.2);
            ctx.lineTo(113.6, 75.2);
            ctx.lineTo(113.6, 72.4);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(120.2, 72.7);
            ctx.lineTo(120.2, 77.6);
            ctx.bezierCurveTo(120.2, 78.3, 120.2, 78.9, 120.3, 79.3);
            ctx.lineTo(119.1, 79.3);
            ctx.bezierCurveTo(119.2, 79.0, 119.2, 78.7, 119.2, 78.4);
            ctx.lineTo(117.8, 78.4);
            ctx.bezierCurveTo(117.8, 79.1, 117.8, 79.7, 117.9, 80.0);
            ctx.lineTo(116.7, 80.0);
            ctx.bezierCurveTo(116.8, 79.4, 116.8, 78.6, 116.8, 77.4);
            ctx.lineTo(116.8, 72.7);
            ctx.bezierCurveTo(116.8, 72.3, 116.8, 71.9, 116.7, 71.5);
            ctx.bezierCurveTo(117.3, 71.6, 117.9, 71.6, 118.4, 71.6);
            ctx.bezierCurveTo(119.2, 71.6, 119.9, 71.6, 120.3, 71.5);
            ctx.bezierCurveTo(120.2, 71.9, 120.2, 72.3, 120.2, 72.7);
            ctx.closePath();

            // 2///
            ctx.moveTo(119.2, 72.5);
            ctx.lineTo(117.8, 72.5);
            ctx.lineTo(117.8, 74.0);
            ctx.lineTo(117.8, 77.5);
            ctx.lineTo(119.2, 77.5);
            ctx.lineTo(119.2, 72.5);
            ctx.closePath();

            // 2///
            ctx.moveTo(122.6, 71.2);
            ctx.lineTo(125.5, 71.2);
            ctx.bezierCurveTo(125.9, 71.2, 126.4, 71.2, 127.0, 71.1);
            ctx.bezierCurveTo(127.0, 71.6, 127.0, 72.0, 127.0, 72.5);
            ctx.lineTo(127.0, 75.8);
            ctx.bezierCurveTo(127.0, 76.6, 127.0, 77.2, 127.1, 77.5);
            ctx.lineTo(125.8, 77.5);
            ctx.bezierCurveTo(125.9, 77.2, 125.9, 76.9, 125.9, 76.6);
            ctx.lineTo(122.1, 76.6);
            ctx.lineTo(122.1, 80.0);
            ctx.bezierCurveTo(121.9, 80.6, 122.5, 80.8, 123.8, 80.7);
            ctx.lineTo(125.1, 80.7);
            ctx.bezierCurveTo(126.4, 80.9, 127.0, 80.3, 126.9, 78.9);
            ctx.bezierCurveTo(127.2, 79.3, 127.6, 79.6, 128.1, 79.8);
            ctx.bezierCurveTo(127.9, 81.2, 127.0, 81.9, 125.6, 81.7);
            ctx.lineTo(123.5, 81.7);
            ctx.bezierCurveTo(121.6, 81.9, 120.9, 81.4, 121.2, 80.3);
            ctx.lineTo(121.2, 77.9);
            ctx.lineTo(121.2, 72.5);
            ctx.bezierCurveTo(121.2, 72.2, 121.2, 71.7, 121.1, 71.1);
            ctx.bezierCurveTo(121.7, 71.2, 122.2, 71.2, 122.6, 71.2);
            ctx.closePath();

            // 2///
            ctx.moveTo(122.1, 72.1);
            ctx.lineTo(122.1, 74.6);
            ctx.lineTo(122.1, 75.7);
            ctx.lineTo(123.5, 75.7);
            ctx.lineTo(123.5, 72.1);
            ctx.lineTo(122.1, 72.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(125.9, 72.1);
            ctx.lineTo(124.5, 72.1);
            ctx.lineTo(124.5, 75.7);
            ctx.lineTo(125.9, 75.7);
            ctx.lineTo(125.9, 72.1);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(130.9, 78.8);
            ctx.lineTo(130.3, 78.8);
            ctx.lineTo(130.0, 74.8);
            ctx.lineTo(130.0, 71.7);
            ctx.lineTo(131.2, 71.7);
            ctx.lineTo(131.2, 74.8);
            ctx.lineTo(130.9, 78.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(131.2, 79.7);
            ctx.lineTo(131.2, 81.0);
            ctx.lineTo(130.0, 81.0);
            ctx.lineTo(130.0, 79.7);
            ctx.lineTo(131.2, 79.7);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(134.5, 78.8);
            ctx.lineTo(133.9, 78.8);
            ctx.lineTo(133.6, 74.8);
            ctx.lineTo(133.6, 71.7);
            ctx.lineTo(134.8, 71.7);
            ctx.lineTo(134.8, 74.8);
            ctx.lineTo(134.5, 78.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(134.8, 79.7);
            ctx.lineTo(134.8, 81.0);
            ctx.lineTo(133.6, 81.0);
            ctx.lineTo(133.6, 79.7);
            ctx.lineTo(134.8, 79.7);
            ctx.closePath();
            ctx.fill();

            // 2//
            ctx.beginPath();

            // 2///
            ctx.moveTo(138.1, 78.8);
            ctx.lineTo(137.5, 78.8);
            ctx.lineTo(137.2, 74.8);
            ctx.lineTo(137.2, 71.7);
            ctx.lineTo(138.4, 71.7);
            ctx.lineTo(138.4, 74.8);
            ctx.lineTo(138.1, 78.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(138.4, 79.7);
            ctx.lineTo(138.4, 81.0);
            ctx.lineTo(137.2, 81.0);
            ctx.lineTo(137.2, 79.7);
            ctx.lineTo(138.4, 79.7);
            ctx.closePath();
            ctx.fill();

            // 2/
            ctx.restore();

            // 2//
            ctx.save();
            ctx.beginPath();

            // 2///
            ctx.moveTo(85.2, 28.8);
            ctx.bezierCurveTo(82.5, 29.7, 79.5, 30.5, 76.2, 31.0);
            ctx.lineTo(76.2, 37.9);
            ctx.bezierCurveTo(76.2, 41.2, 76.0, 44.0, 75.8, 46.2);
            ctx.bezierCurveTo(75.5, 48.4, 74.8, 50.6, 73.8, 52.9);
            ctx.lineTo(71.6, 51.4);
            ctx.bezierCurveTo(73.0, 48.2, 73.7, 43.7, 73.7, 37.9);
            ctx.lineTo(73.7, 28.8);
            ctx.bezierCurveTo(77.8, 28.2, 81.1, 27.5, 83.7, 26.5);
            ctx.lineTo(85.2, 28.8);
            ctx.closePath();

            // 2///
            ctx.moveTo(80.2, 53.0);
            ctx.lineTo(77.8, 53.0);
            ctx.lineTo(77.8, 31.6);
            ctx.lineTo(80.2, 31.6);
            ctx.lineTo(80.2, 53.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(98.1, 50.4);
            ctx.lineTo(97.2, 52.9);
            ctx.bezierCurveTo(92.2, 52.5, 88.8, 52.0, 87.0, 51.3);
            ctx.bezierCurveTo(85.1, 50.5, 83.8, 49.3, 83.0, 47.4);
            ctx.bezierCurveTo(82.3, 45.6, 81.9, 42.9, 81.9, 39.3);
            ctx.lineTo(81.9, 31.6);
            ctx.lineTo(84.3, 31.6);
            ctx.lineTo(84.3, 39.9);
            ctx.bezierCurveTo(84.3, 42.6, 84.6, 44.6, 85.1, 46.0);
            ctx.bezierCurveTo(85.6, 47.3, 86.7, 48.4, 88.2, 49.0);
            ctx.bezierCurveTo(89.8, 49.7, 93.1, 50.2, 98.1, 50.4);
            ctx.closePath();

            // 2///
            ctx.moveTo(97.9, 42.1);
            ctx.bezierCurveTo(97.9, 43.5, 97.7, 44.6, 97.3, 45.3);
            ctx.bezierCurveTo(97.0, 46.1, 96.5, 46.6, 95.9, 46.8);
            ctx.bezierCurveTo(95.3, 47.0, 94.0, 47.1, 91.9, 47.1);
            ctx.bezierCurveTo(89.8, 47.1, 88.4, 47.1, 87.9, 46.9);
            ctx.bezierCurveTo(87.3, 46.8, 86.9, 46.5, 86.6, 46.0);
            ctx.bezierCurveTo(86.2, 45.5, 86.0, 44.9, 86.0, 44.1);
            ctx.lineTo(86.0, 28.2);
            ctx.lineTo(96.7, 28.2);
            ctx.lineTo(96.7, 38.6);
            ctx.lineTo(88.6, 38.6);
            ctx.lineTo(88.6, 43.8);
            ctx.bezierCurveTo(88.6, 44.3, 88.8, 44.5, 89.3, 44.5);
            ctx.bezierCurveTo(89.7, 44.6, 91.4, 44.6, 94.2, 44.6);
            ctx.bezierCurveTo(94.5, 44.6, 94.8, 44.4, 95.0, 44.1);
            ctx.bezierCurveTo(95.2, 43.7, 95.4, 42.7, 95.5, 41.1);
            ctx.lineTo(97.9, 42.1);
            ctx.closePath();

            // 2///
            ctx.moveTo(90.3, 36.0);
            ctx.lineTo(90.3, 30.8);
            ctx.lineTo(88.6, 30.8);
            ctx.lineTo(88.6, 36.0);
            ctx.lineTo(90.3, 36.0);
            ctx.closePath();

            // 2///
            ctx.moveTo(94.2, 36.0);
            ctx.lineTo(94.2, 30.8);
            ctx.lineTo(92.5, 30.8);
            ctx.lineTo(92.5, 36.0);
            ctx.lineTo(94.2, 36.0);
            ctx.closePath();
            ctx.fillStyle = "rgb(86, 108, 144)";
            ctx.fill();
            ctx.restore();
            ctx.restore();

            // 1/
            ctx.save();
            ctx.restore();
        }
    } else if (role == 2) { }
}

function createFlag(x, y) {
    ctx.save();
    ctx.translate(x, y);
    // 2//
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(1.4, 1.3);
    ctx.bezierCurveTo(1.4, 1.4, 1.3, 1.4, 1.2, 1.5);
    ctx.lineTo(1.2, 1.2);
    ctx.lineTo(1.4, 1.3);
    ctx.closePath();
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = "rgb(61, 56, 65)";
    ctx.stroke();

    // 2//
    ctx.beginPath();
    ctx.moveTo(46.1, 10.1);
    ctx.bezierCurveTo(46.0, 10.6, 45.6, 11.1, 44.6, 11.5);
    ctx.bezierCurveTo(43.0, 12.1, 43.2, 12.6, 42.6, 13.5);
    ctx.bezierCurveTo(42.3, 14.0, 41.7, 14.8, 41.3, 15.0);
    ctx.bezierCurveTo(40.7, 15.4, 40.1, 15.5, 39.4, 15.4);
    ctx.bezierCurveTo(38.5, 15.4, 37.6, 15.7, 36.9, 16.3);
    ctx.bezierCurveTo(36.7, 16.5, 36.6, 16.6, 36.3, 16.7);
    ctx.bezierCurveTo(35.7, 17.1, 35.1, 17.2, 34.4, 17.1);
    ctx.bezierCurveTo(33.5, 17.1, 32.6, 17.4, 31.9, 18.0);
    ctx.bezierCurveTo(31.7, 18.2, 31.5, 18.3, 31.3, 18.4);
    ctx.bezierCurveTo(30.7, 18.8, 30.1, 18.9, 29.4, 18.8);
    ctx.bezierCurveTo(28.5, 18.7, 27.6, 19.1, 26.9, 19.7);
    ctx.bezierCurveTo(26.7, 19.9, 26.5, 20.0, 26.3, 20.1);
    ctx.bezierCurveTo(25.7, 20.4, 25.0, 20.6, 24.4, 20.5);
    ctx.bezierCurveTo(23.5, 20.4, 22.6, 20.8, 21.9, 21.4);
    ctx.bezierCurveTo(21.7, 21.6, 21.5, 21.7, 21.3, 21.8);
    ctx.bezierCurveTo(20.7, 22.1, 20.0, 22.3, 19.4, 22.2);
    ctx.bezierCurveTo(18.5, 22.1, 17.6, 22.5, 16.9, 23.1);
    ctx.bezierCurveTo(16.7, 23.2, 16.5, 23.4, 16.3, 23.5);
    ctx.bezierCurveTo(15.7, 23.8, 15.0, 24.0, 14.4, 23.9);
    ctx.bezierCurveTo(13.4, 23.8, 12.6, 24.2, 11.9, 24.8);
    ctx.bezierCurveTo(11.7, 24.9, 11.5, 25.1, 11.3, 25.2);
    ctx.bezierCurveTo(10.7, 25.5, 10.1, 25.6, 9.5, 25.6);
    ctx.bezierCurveTo(8.6, 25.6, 7.6, 25.8, 6.9, 26.4);
    ctx.bezierCurveTo(6.5, 26.8, 6.0, 27.1, 5.4, 27.2);
    ctx.bezierCurveTo(4.4, 27.5, 3.3, 27.2, 2.4, 26.5);
    ctx.bezierCurveTo(1.5, 25.7, 1.2, 24.7, 1.2, 23.7);
    ctx.lineTo(1.2, 1.9);
    ctx.bezierCurveTo(1.2, 1.6, 1.3, 1.4, 1.5, 1.2);
    ctx.bezierCurveTo(2.2, 0.5, 3.0, 0.1, 4.0, 0.1);
    ctx.bezierCurveTo(4.8, 0.1, 5.6, 0.4, 6.2, 0.9);
    ctx.bezierCurveTo(6.7, 1.3, 7.5, 1.4, 8.1, 1.2);
    ctx.bezierCurveTo(8.5, 1.1, 8.8, 1.0, 9.2, 1.0);
    ctx.bezierCurveTo(10.2, 1.0, 11.1, 1.4, 11.7, 2.1);
    ctx.bezierCurveTo(12.0, 2.4, 12.5, 2.5, 12.9, 2.3);
    ctx.bezierCurveTo(13.4, 2.1, 13.9, 2.0, 14.5, 2.0);
    ctx.bezierCurveTo(15.4, 2.0, 16.1, 2.5, 16.7, 3.1);
    ctx.bezierCurveTo(17.1, 3.5, 17.6, 3.6, 18.0, 3.3);
    ctx.bezierCurveTo(18.5, 3.1, 19.0, 2.9, 19.6, 2.9);
    ctx.bezierCurveTo(20.6, 2.9, 21.6, 3.4, 22.2, 4.1);
    ctx.bezierCurveTo(22.4, 4.4, 22.9, 4.5, 23.2, 4.3);
    ctx.bezierCurveTo(23.7, 4.1, 24.4, 3.8, 24.8, 3.8);
    ctx.bezierCurveTo(26.1, 3.8, 27.1, 4.5, 27.7, 5.4);
    ctx.bezierCurveTo(27.8, 5.5, 27.9, 5.5, 28.0, 5.5);
    ctx.bezierCurveTo(28.6, 5.0, 29.3, 4.8, 30.0, 4.8);
    ctx.bezierCurveTo(31.0, 4.8, 31.8, 5.2, 32.4, 5.8);
    ctx.bezierCurveTo(32.7, 6.1, 33.1, 6.2, 33.5, 6.1);
    ctx.bezierCurveTo(34.0, 5.9, 34.8, 5.7, 35.3, 5.7);
    ctx.bezierCurveTo(36.2, 5.7, 37.0, 6.1, 37.6, 6.7);
    ctx.bezierCurveTo(37.9, 6.9, 38.2, 7.0, 38.5, 7.0);
    ctx.bezierCurveTo(39.1, 6.8, 40.0, 6.7, 40.5, 6.7);
    ctx.bezierCurveTo(41.4, 6.7, 42.2, 7.0, 42.8, 7.6);
    ctx.bezierCurveTo(42.8, 7.6, 42.8, 7.6, 42.8, 7.6);
    ctx.bezierCurveTo(43.0, 7.8, 43.5, 8.2, 44.0, 8.2);
    ctx.bezierCurveTo(45.6, 8.1, 46.2, 9.4, 46.1, 10.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(236, 85, 73)";
    ctx.fill();

    // 2//
    ctx.beginPath();
    ctx.moveTo(1.2, 1.2);
    ctx.lineTo(1.2, 53.1);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "rgb(231, 177, 25)";
    ctx.lineCap = "round";
    ctx.stroke();

    // 2//
    ctx.beginPath();
    ctx.moveTo(1.2, 2.9);
    ctx.lineTo(37.9, 9.1);
    ctx.bezierCurveTo(39.3, 9.4, 39.5, 11.3, 38.1, 11.8);
    ctx.lineTo(2.3, 24.7);
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = "rgb(223, 183, 74)";
    ctx.lineCap = "butt";
    ctx.stroke();
    ctx.restore();
    ctx.restore();

    // 1/
    ctx.save();
    ctx.restore();
}

function finishBg(ctx) {
    var gradient;

    // 1/
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(1024.0, 550.0);
    ctx.lineTo(0.0, 550.0);
    ctx.lineTo(0.0, 0.0);
    ctx.lineTo(1024.0, 0.0);
    ctx.lineTo(1024.0, 550.0);
    ctx.closePath();
    gradient = ctx.createLinearGradient(964.1, 23.5, 321.5, 381.0);
    gradient.addColorStop(0.00, "rgb(27, 125, 139)");
    gradient.addColorStop(0.23, "rgb(64, 126, 152)");
    gradient.addColorStop(1.00, "rgb(100, 126, 164)");
    ctx.fillStyle = gradient;
    ctx.fill();

    // 1/
    ctx.beginPath();
    ctx.moveTo(1024.0, 550.0);
    ctx.lineTo(0.0, 550.0);
    ctx.lineTo(0.0, 0.0);
    ctx.lineTo(1024.0, 0.0);
    ctx.lineTo(1024.0, 550.0);
    ctx.closePath();
    ctx.restore();
    if (canvasFinishBg.width < 768) {
        rewardGhost(ctx, 40, 550 - 505.9, 0.5, 40 * Math.PI / 180);
        ctx.save()
        finishStar(ctx, 280, -300, 1)
        ctx.restore()
    } else {
        rewardGhost(ctx, 20, 550 - 492.2, 1, 0);
        finishStar(ctx, 1024 / 2 - 80, 20, 1)
    }
}

function rewardGhost(ctx, x, y, rate, deg) {

    var alpha = ctx.globalAlpha;
    var gradient;
    ctx.translate(x, y);
    ctx.scale(rate, rate);
    ctx.rotate(deg);
    // 1/
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(372.2, 492.2);
    ctx.lineTo(0.0, 492.2);
    ctx.lineTo(0.0, 0.0);
    ctx.lineTo(372.2, 0.0);
    ctx.lineTo(372.2, 492.2);
    ctx.closePath();
    ctx.clip();

    // 1//

    // 1///
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(72.9, 244.0);
    ctx.bezierCurveTo(72.9, 244.0, 42.5, 229.1, 32.9, 184.4);
    ctx.bezierCurveTo(23.8, 141.7, 5.2, 158.1, 5.0, 193.8);
    ctx.bezierCurveTo(4.8, 229.5, 26.9, 290.2, 57.9, 304.9);
    ctx.bezierCurveTo(88.8, 319.6, 72.9, 244.0, 72.9, 244.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(61, 56, 65)";
    ctx.fill();

    // 1///

    // 1////
    ctx.save();

    // 1/////
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(367.0, 8.1);
    ctx.bezierCurveTo(367.5, 9.6, 367.6, 11.6, 365.3, 14.5);
    ctx.bezierCurveTo(361.9, 18.9, 363.2, 19.9, 363.3, 23.4);
    ctx.bezierCurveTo(363.4, 25.4, 363.0, 28.7, 362.4, 29.8);
    ctx.bezierCurveTo(361.3, 31.8, 359.6, 33.3, 357.8, 34.2);
    ctx.bezierCurveTo(355.1, 35.6, 353.2, 38.0, 352.3, 40.9);
    ctx.bezierCurveTo(352.0, 41.7, 351.7, 42.4, 351.4, 43.1);
    ctx.bezierCurveTo(350.2, 45.1, 348.6, 46.5, 346.7, 47.5);
    ctx.bezierCurveTo(344.0, 48.9, 342.2, 51.3, 341.3, 54.2);
    ctx.bezierCurveTo(341.0, 55.0, 340.7, 55.7, 340.4, 56.4);
    ctx.bezierCurveTo(339.2, 58.4, 337.6, 59.8, 335.8, 60.8);
    ctx.bezierCurveTo(333.0, 62.2, 331.2, 64.6, 330.3, 67.5);
    ctx.bezierCurveTo(330.0, 68.3, 329.7, 69.0, 329.3, 69.7);
    ctx.bezierCurveTo(328.2, 71.6, 326.6, 73.1, 324.7, 74.1);
    ctx.bezierCurveTo(322.0, 75.5, 320.2, 77.9, 319.3, 80.8);
    ctx.bezierCurveTo(319.0, 81.6, 318.7, 82.3, 318.3, 83.0);
    ctx.bezierCurveTo(317.2, 84.9, 315.6, 86.4, 313.7, 87.4);
    ctx.bezierCurveTo(311.0, 88.8, 309.2, 91.2, 308.2, 94.1);
    ctx.bezierCurveTo(308.0, 94.9, 307.7, 95.6, 307.3, 96.3);
    ctx.bezierCurveTo(306.2, 98.2, 304.6, 99.7, 302.7, 100.7);
    ctx.bezierCurveTo(300.0, 102.1, 298.1, 104.5, 297.2, 107.4);
    ctx.bezierCurveTo(297.0, 108.2, 296.7, 108.9, 296.3, 109.6);
    ctx.bezierCurveTo(295.3, 111.4, 293.8, 112.8, 292.1, 113.8);
    ctx.bezierCurveTo(289.4, 115.3, 287.1, 117.5, 286.3, 120.4);
    ctx.bezierCurveTo(285.9, 122.1, 284.9, 123.8, 283.5, 125.2);
    ctx.bezierCurveTo(281.1, 127.7, 277.5, 128.9, 274.1, 128.4);
    ctx.bezierCurveTo(270.1, 127.8, 267.3, 125.4, 265.8, 122.5);
    ctx.lineTo(228.5, 62.1);
    ctx.bezierCurveTo(228.1, 61.3, 227.9, 60.4, 228.1, 59.6);
    ctx.bezierCurveTo(228.7, 56.7, 230.4, 54.0, 233.1, 52.3);
    ctx.bezierCurveTo(235.4, 50.9, 238.1, 50.4, 240.6, 50.8);
    ctx.bezierCurveTo(242.8, 51.1, 245.0, 50.2, 246.4, 48.4);
    ctx.bezierCurveTo(247.2, 47.5, 248.1, 46.7, 249.2, 46.0);
    ctx.bezierCurveTo(251.9, 44.3, 255.1, 44.0, 257.9, 44.7);
    ctx.bezierCurveTo(259.4, 45.1, 260.9, 44.5, 261.7, 43.2);
    ctx.bezierCurveTo(262.6, 41.8, 263.9, 40.5, 265.4, 39.6);
    ctx.bezierCurveTo(267.9, 38.1, 270.9, 38.2, 273.7, 38.9);
    ctx.bezierCurveTo(275.1, 39.3, 276.7, 38.7, 277.5, 37.4);
    ctx.bezierCurveTo(278.3, 35.8, 279.7, 34.4, 281.3, 33.4);
    ctx.bezierCurveTo(284.1, 31.6, 287.4, 31.3, 290.4, 32.2);
    ctx.bezierCurveTo(291.6, 32.6, 293.0, 32.2, 293.8, 31.1);
    ctx.bezierCurveTo(294.7, 29.7, 296.1, 27.9, 297.4, 27.1);
    ctx.bezierCurveTo(300.8, 25.0, 304.8, 24.9, 308.1, 26.6);
    ctx.bezierCurveTo(308.3, 26.7, 308.8, 26.4, 308.9, 26.2);
    ctx.bezierCurveTo(309.8, 24.0, 311.3, 22.1, 313.4, 20.7);
    ctx.bezierCurveTo(316.0, 19.1, 319.0, 18.7, 321.8, 19.4);
    ctx.bezierCurveTo(323.0, 19.7, 324.3, 19.4, 325.2, 18.4);
    ctx.bezierCurveTo(326.5, 17.0, 328.3, 15.2, 329.5, 14.4);
    ctx.bezierCurveTo(332.0, 12.9, 335.0, 12.5, 337.6, 13.0);
    ctx.bezierCurveTo(338.7, 13.3, 339.9, 13.0, 340.7, 12.2);
    ctx.bezierCurveTo(342.2, 10.9, 344.4, 8.8, 345.6, 8.1);
    ctx.bezierCurveTo(348.1, 6.6, 350.9, 6.1, 353.6, 6.7);
    ctx.bezierCurveTo(353.6, 6.7, 353.6, 6.7, 353.7, 6.7);
    ctx.bezierCurveTo(354.4, 6.8, 356.7, 7.2, 357.9, 6.4);
    ctx.bezierCurveTo(362.3, 3.4, 366.2, 5.7, 367.0, 8.1);
    ctx.closePath();
    gradient = ctx.createLinearGradient(228.0, 66.7, 367.3, 66.7);
    gradient.addColorStop(0.09, "rgb(236, 85, 73)");
    gradient.addColorStop(1.00, "rgb(189, 99, 104)");
    ctx.fillStyle = gradient;
    ctx.fill();

    // 1////
    ctx.restore();

    // 1/////
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(332.7, 230.7);
    ctx.bezierCurveTo(330.8, 231.9, 328.3, 231.3, 327.1, 229.4);
    ctx.lineTo(224.0, 62.4);
    ctx.bezierCurveTo(222.8, 60.5, 223.4, 58.0, 225.3, 56.8);
    ctx.bezierCurveTo(227.2, 55.6, 229.7, 56.2, 230.9, 58.1);
    ctx.lineTo(334.0, 225.1);
    ctx.bezierCurveTo(335.2, 227.0, 334.6, 229.5, 332.7, 230.7);
    ctx.closePath();
    gradient = ctx.createLinearGradient(270.2, 148.9, 286.2, 139.5);
    gradient.addColorStop(0.00, "rgb(203, 125, 78)");
    gradient.addColorStop(0.58, "rgb(231, 177, 25)");
    gradient.addColorStop(1.00, "rgb(207, 132, 70)");
    ctx.fillStyle = gradient;
    ctx.fill();

    // 1////
    ctx.restore();

    // 1/////
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(271.4, 124.3);
    ctx.lineTo(268.2, 121.7);
    ctx.lineTo(346.7, 25.6);
    ctx.bezierCurveTo(347.6, 24.5, 347.4, 23.3, 346.8, 22.6);
    ctx.bezierCurveTo(346.3, 21.8, 345.2, 21.2, 343.9, 21.7);
    ctx.lineTo(231.0, 65.9);
    ctx.lineTo(229.5, 62.1);
    ctx.lineTo(342.4, 17.9);
    ctx.bezierCurveTo(345.2, 16.8, 348.3, 17.7, 350.1, 20.2);
    ctx.bezierCurveTo(351.9, 22.6, 351.8, 25.8, 349.9, 28.2);
    ctx.lineTo(271.4, 124.3);
    ctx.closePath();
    gradient = ctx.createLinearGradient(229.5, 70.9, 351.4, 70.9);
    gradient.addColorStop(0.00, "rgb(231, 177, 25)");
    gradient.addColorStop(1.00, "rgb(207, 132, 70)");
    ctx.fillStyle = gradient;
    ctx.fill();

    // 1///
    ctx.restore();
    ctx.restore();

    // 1////
    ctx.save();

    // 1/////
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(269.1, 535.2);
    ctx.lineTo(23.6, 520.2);
    ctx.bezierCurveTo(17.8, 519.8, 13.5, 514.6, 14.1, 508.7);
    ctx.lineTo(42.8, 226.9);
    ctx.bezierCurveTo(52.9, 139.0, 102.1, 77.3, 183.6, 87.7);
    ctx.bezierCurveTo(241.6, 95.1, 285.0, 164.2, 282.7, 256.1);
    ctx.lineTo(292.7, 511.8);
    ctx.bezierCurveTo(294.2, 534.5, 286.1, 536.2, 269.1, 535.2);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(252.3, 203.3);
    ctx.bezierCurveTo(249.3, 252.6, 208.7, 290.3, 161.7, 287.4);
    ctx.bezierCurveTo(114.6, 284.5, 78.9, 242.2, 81.9, 192.8);
    ctx.bezierCurveTo(84.9, 143.5, 125.5, 105.9, 172.6, 108.7);
    ctx.bezierCurveTo(219.6, 111.6, 255.3, 153.9, 252.3, 203.3);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(138.5, 193.2);
    ctx.bezierCurveTo(138.2, 199.4, 131.6, 204.0, 123.9, 203.5);
    ctx.bezierCurveTo(116.3, 203.0, 110.3, 197.7, 110.7, 191.5);
    ctx.bezierCurveTo(111.1, 185.4, 117.6, 180.8, 125.3, 181.2);
    ctx.bezierCurveTo(133.0, 181.7, 138.9, 187.1, 138.5, 193.2);
    ctx.closePath();
    ctx.fillStyle = "rgb(61, 56, 65)";
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(221.3, 198.3);
    ctx.bezierCurveTo(220.9, 204.4, 214.4, 209.0, 206.7, 208.6);
    ctx.bezierCurveTo(199.0, 208.1, 193.1, 202.7, 193.4, 196.6);
    ctx.bezierCurveTo(193.8, 190.4, 200.3, 185.8, 208.0, 186.3);
    ctx.bezierCurveTo(215.7, 186.8, 221.6, 192.1, 221.3, 198.3);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(190.6, 240.5);
    ctx.bezierCurveTo(190.1, 249.2, 177.1, 260.6, 162.7, 259.8);
    ctx.bezierCurveTo(148.4, 258.9, 138.1, 246.0, 138.6, 237.4);
    ctx.bezierCurveTo(139.2, 228.7, 150.3, 233.9, 164.7, 234.8);
    ctx.bezierCurveTo(179.0, 235.6, 191.1, 231.9, 190.6, 240.5);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(133.6, 207.0);
    ctx.bezierCurveTo(133.9, 206.3, 132.9, 205.7, 132.1, 206.1);
    ctx.bezierCurveTo(130.5, 206.8, 128.7, 207.3, 126.7, 207.6);
    ctx.bezierCurveTo(124.0, 207.9, 121.4, 207.7, 119.2, 207.1);
    ctx.bezierCurveTo(118.5, 206.9, 117.7, 207.3, 117.6, 207.9);
    ctx.bezierCurveTo(116.5, 222.7, 122.7, 231.4, 126.3, 235.2);
    ctx.bezierCurveTo(127.1, 236.0, 128.9, 235.5, 128.9, 234.5);
    ctx.bezierCurveTo(129.1, 220.2, 131.8, 211.4, 133.6, 207.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(205, 85, 208)";
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(198.3, 211.3);
    ctx.bezierCurveTo(198.1, 210.5, 199.1, 210.0, 199.9, 210.5);
    ctx.bezierCurveTo(201.4, 211.3, 203.2, 211.9, 205.1, 212.3);
    ctx.bezierCurveTo(207.8, 212.9, 210.5, 212.9, 212.7, 212.4);
    ctx.bezierCurveTo(213.4, 212.2, 214.2, 212.7, 214.2, 213.3);
    ctx.bezierCurveTo(214.2, 228.2, 207.3, 236.4, 203.4, 239.9);
    ctx.bezierCurveTo(202.6, 240.7, 200.9, 240.0, 201.0, 239.0);
    ctx.bezierCurveTo(201.8, 224.7, 199.8, 215.8, 198.3, 211.3);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(198.8, 182.7);
    ctx.bezierCurveTo(198.4, 183.4, 199.4, 184.0, 200.3, 183.7);
    ctx.bezierCurveTo(201.9, 183.1, 203.7, 182.7, 205.7, 182.5);
    ctx.bezierCurveTo(208.5, 182.3, 211.0, 182.7, 213.2, 183.4);
    ctx.bezierCurveTo(213.9, 183.7, 214.7, 183.3, 214.8, 182.7);
    ctx.bezierCurveTo(216.7, 168.0, 211.0, 158.9, 207.6, 154.9);
    ctx.bezierCurveTo(206.9, 154.1, 205.1, 154.5, 205.0, 155.5);
    ctx.bezierCurveTo(204.0, 169.8, 200.9, 178.4, 198.8, 182.7);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(135.2, 178.9);
    ctx.bezierCurveTo(135.5, 179.6, 134.5, 180.1, 133.6, 179.7);
    ctx.bezierCurveTo(132.1, 178.8, 130.3, 178.2, 128.4, 177.8);
    ctx.bezierCurveTo(125.7, 177.2, 123.1, 177.3, 120.9, 177.7);
    ctx.bezierCurveTo(120.1, 177.9, 119.4, 177.4, 119.3, 176.8);
    ctx.bezierCurveTo(119.3, 162.0, 126.2, 153.7, 130.1, 150.2);
    ctx.bezierCurveTo(130.9, 149.5, 132.6, 150.1, 132.6, 151.1);
    ctx.bezierCurveTo(131.7, 165.4, 133.7, 174.4, 135.2, 178.9);
    ctx.closePath();
    ctx.fill();

    // 1////
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(236.5, 295.7);
    ctx.bezierCurveTo(241.0, 277.3, 249.4, 264.8, 265.7, 253.6);
    ctx.bezierCurveTo(276.4, 246.1, 289.6, 233.4, 299.1, 212.1);
    ctx.bezierCurveTo(317.4, 171.3, 332.4, 191.7, 325.0, 227.4);
    ctx.bezierCurveTo(317.6, 263.2, 288.5, 320.7, 253.4, 320.5);
    ctx.bezierCurveTo(238.8, 320.4, 232.7, 311.3, 236.5, 295.7);
    ctx.closePath();
    gradient = ctx.createLinearGradient(235.4, 255.0, 327.0, 255.0);
    gradient.addColorStop(0.38, "rgb(61, 56, 65)");
    gradient.addColorStop(1.00, "rgb(55, 73, 115)");
    ctx.fillStyle = gradient;
    ctx.fill();

    // 1///
    ctx.restore();
    ctx.globalAlpha = alpha * 0.75;

    // 1////
    ctx.save();
    ctx.globalAlpha = alpha * 1.00;

    // 1/////
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(155.5, 13.4);
    ctx.bezierCurveTo(144.4, 15.3, 136.5, 24.1, 135.7, 41.1);
    ctx.bezierCurveTo(134.1, 72.6, 151.2, 86.8, 163.5, 83.4);
    ctx.bezierCurveTo(164.5, 83.2, 166.4, 83.5, 167.3, 84.1);
    ctx.bezierCurveTo(177.5, 91.7, 202.0, 84.0, 210.9, 57.3);
    ctx.bezierCurveTo(215.5, 43.4, 213.1, 28.5, 201.5, 22.1);
    ctx.bezierCurveTo(194.7, 18.2, 186.7, 19.9, 179.3, 18.3);
    ctx.bezierCurveTo(170.6, 16.4, 166.4, 11.6, 155.5, 13.4);
    ctx.closePath();
    ctx.fillStyle = "rgb(248, 215, 148)";
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(181.9, 22.9);
    ctx.bezierCurveTo(184.0, 17.3, 188.7, 14.6, 187.6, 13.1);
    ctx.bezierCurveTo(186.5, 11.5, 184.0, 9.8, 183.1, 10.4);
    ctx.bezierCurveTo(181.5, 11.5, 178.4, 15.4, 176.5, 20.7);
    ctx.bezierCurveTo(174.7, 25.7, 179.1, 30.3, 181.9, 22.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(160, 121, 63)";
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(183.9, 79.6);
    ctx.bezierCurveTo(183.8, 80.2, 184.1, 80.8, 184.7, 80.9);
    ctx.bezierCurveTo(185.3, 81.0, 185.9, 80.6, 186.0, 80.1);
    ctx.bezierCurveTo(186.1, 79.5, 185.8, 78.9, 185.2, 78.8);
    ctx.bezierCurveTo(184.6, 78.7, 184.0, 79.0, 183.9, 79.6);
    ctx.closePath();
    ctx.fillStyle = "rgb(231, 190, 118)";
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(181.5, 74.4);
    ctx.bezierCurveTo(181.3, 75.0, 181.7, 75.6, 182.3, 75.7);
    ctx.bezierCurveTo(182.9, 75.8, 183.4, 75.5, 183.6, 74.9);
    ctx.bezierCurveTo(183.7, 74.3, 183.3, 73.7, 182.7, 73.6);
    ctx.bezierCurveTo(182.2, 73.5, 181.6, 73.8, 181.5, 74.4);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(177.3, 78.5);
    ctx.bezierCurveTo(177.2, 79.1, 177.6, 79.7, 178.2, 79.8);
    ctx.bezierCurveTo(178.8, 80.0, 179.3, 79.6, 179.5, 79.0);
    ctx.bezierCurveTo(179.6, 78.4, 179.2, 77.8, 178.6, 77.7);
    ctx.bezierCurveTo(178.0, 77.6, 177.5, 78.0, 177.3, 78.5);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(172.2, 71.6);
    ctx.bezierCurveTo(172.1, 72.2, 172.5, 72.8, 173.1, 72.9);
    ctx.bezierCurveTo(173.7, 73.0, 174.2, 72.6, 174.4, 72.0);
    ctx.bezierCurveTo(174.5, 71.5, 174.1, 70.9, 173.5, 70.8);
    ctx.bezierCurveTo(172.9, 70.6, 172.4, 71.0, 172.2, 71.6);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(168.3, 75.8);
    ctx.bezierCurveTo(168.2, 76.4, 168.5, 77.0, 169.1, 77.1);
    ctx.bezierCurveTo(169.7, 77.3, 170.3, 76.9, 170.4, 76.3);
    ctx.bezierCurveTo(170.5, 75.7, 170.2, 75.1, 169.6, 75.0);
    ctx.bezierCurveTo(169.0, 74.9, 168.4, 75.3, 168.3, 75.8);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(165.7, 70.5);
    ctx.bezierCurveTo(165.6, 71.1, 165.9, 71.7, 166.5, 71.8);
    ctx.bezierCurveTo(167.1, 71.9, 167.7, 71.6, 167.8, 71.0);
    ctx.bezierCurveTo(167.9, 70.4, 167.6, 69.8, 167.0, 69.7);
    ctx.bezierCurveTo(166.4, 69.6, 165.8, 69.9, 165.7, 70.5);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(150.2, 71.0);
    ctx.bezierCurveTo(150.1, 71.6, 150.4, 72.2, 151.0, 72.3);
    ctx.bezierCurveTo(151.6, 72.4, 152.2, 72.0, 152.3, 71.5);
    ctx.bezierCurveTo(152.4, 70.9, 152.1, 70.3, 151.5, 70.2);
    ctx.bezierCurveTo(150.9, 70.0, 150.3, 70.4, 150.2, 71.0);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(157.1, 68.3);
    ctx.bezierCurveTo(156.9, 68.8, 157.3, 69.4, 157.9, 69.5);
    ctx.bezierCurveTo(158.5, 69.7, 159.0, 69.3, 159.2, 68.7);
    ctx.bezierCurveTo(159.3, 68.1, 158.9, 67.6, 158.3, 67.4);
    ctx.bezierCurveTo(157.8, 67.3, 157.2, 67.7, 157.1, 68.3);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(160.1, 73.6);
    ctx.bezierCurveTo(160.0, 74.2, 160.4, 74.8, 160.9, 74.9);
    ctx.bezierCurveTo(161.5, 75.0, 162.1, 74.6, 162.2, 74.1);
    ctx.bezierCurveTo(162.4, 73.5, 162.0, 72.9, 161.4, 72.8);
    ctx.bezierCurveTo(160.8, 72.6, 160.2, 73.0, 160.1, 73.6);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(146.6, 65.6);
    ctx.bezierCurveTo(146.5, 66.2, 146.9, 66.7, 147.5, 66.9);
    ctx.bezierCurveTo(148.1, 67.0, 148.6, 66.6, 148.8, 66.0);
    ctx.bezierCurveTo(148.9, 65.4, 148.5, 64.9, 147.9, 64.7);
    ctx.bezierCurveTo(147.3, 64.6, 146.8, 65.0, 146.6, 65.6);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(143.4, 52.3);
    ctx.bezierCurveTo(143.2, 52.9, 143.6, 53.5, 144.2, 53.6);
    ctx.bezierCurveTo(144.8, 53.8, 145.4, 53.4, 145.5, 52.8);
    ctx.bezierCurveTo(145.6, 52.2, 145.2, 51.6, 144.7, 51.5);
    ctx.bezierCurveTo(144.1, 51.4, 143.5, 51.8, 143.4, 52.3);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(148.8, 58.5);
    ctx.bezierCurveTo(148.6, 59.1, 149.0, 59.7, 149.6, 59.8);
    ctx.bezierCurveTo(150.2, 60.0, 150.8, 59.6, 150.9, 59.0);
    ctx.bezierCurveTo(151.0, 58.4, 150.6, 57.8, 150.0, 57.7);
    ctx.bezierCurveTo(149.5, 57.6, 148.9, 58.0, 148.8, 58.5);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(142.5, 60.1);
    ctx.bezierCurveTo(142.4, 60.6, 142.7, 61.2, 143.3, 61.3);
    ctx.bezierCurveTo(143.9, 61.5, 144.5, 61.1, 144.6, 60.5);
    ctx.bezierCurveTo(144.7, 59.9, 144.4, 59.3, 143.8, 59.2);
    ctx.bezierCurveTo(143.2, 59.1, 142.6, 59.5, 142.5, 60.1);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(151.4, 64.1);
    ctx.bezierCurveTo(151.3, 64.7, 151.7, 65.3, 152.3, 65.4);
    ctx.bezierCurveTo(152.9, 65.5, 153.4, 65.2, 153.6, 64.6);
    ctx.bezierCurveTo(153.7, 64.0, 153.3, 63.4, 152.7, 63.3);
    ctx.bezierCurveTo(152.2, 63.2, 151.6, 63.5, 151.4, 64.1);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(147.3, 49.3);
    ctx.bezierCurveTo(147.2, 49.9, 147.5, 50.5, 148.1, 50.6);
    ctx.bezierCurveTo(148.7, 50.7, 149.3, 50.4, 149.4, 49.8);
    ctx.bezierCurveTo(149.5, 49.2, 149.2, 48.6, 148.6, 48.5);
    ctx.bezierCurveTo(148.0, 48.4, 147.4, 48.8, 147.3, 49.3);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(189.9, 74.9);
    ctx.bezierCurveTo(189.8, 75.4, 190.1, 76.0, 190.7, 76.1);
    ctx.bezierCurveTo(191.3, 76.3, 191.9, 75.9, 192.0, 75.3);
    ctx.bezierCurveTo(192.1, 74.7, 191.8, 74.1, 191.2, 74.0);
    ctx.bezierCurveTo(190.6, 73.9, 190.0, 74.3, 189.9, 74.9);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(191.0, 62.6);
    ctx.bezierCurveTo(190.9, 63.2, 191.3, 63.7, 191.9, 63.9);
    ctx.bezierCurveTo(192.5, 64.0, 193.0, 63.6, 193.2, 63.0);
    ctx.bezierCurveTo(193.3, 62.5, 192.9, 61.9, 192.3, 61.8);
    ctx.bezierCurveTo(191.7, 61.6, 191.2, 62.0, 191.0, 62.6);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(192.0, 67.8);
    ctx.bezierCurveTo(191.9, 68.4, 192.2, 69.0, 192.8, 69.1);
    ctx.bezierCurveTo(193.4, 69.2, 194.0, 68.9, 194.1, 68.3);
    ctx.bezierCurveTo(194.2, 67.7, 193.9, 67.1, 193.3, 67.0);
    ctx.bezierCurveTo(192.7, 66.9, 192.1, 67.2, 192.0, 67.8);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(185.7, 69.3);
    ctx.bezierCurveTo(185.6, 69.9, 186.0, 70.5, 186.6, 70.6);
    ctx.bezierCurveTo(187.1, 70.7, 187.7, 70.4, 187.8, 69.8);
    ctx.bezierCurveTo(188.0, 69.2, 187.6, 68.6, 187.0, 68.5);
    ctx.bezierCurveTo(186.4, 68.4, 185.8, 68.8, 185.7, 69.3);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(199.1, 64.7);
    ctx.bezierCurveTo(198.9, 65.3, 199.3, 65.9, 199.9, 66.0);
    ctx.bezierCurveTo(200.5, 66.1, 201.1, 65.7, 201.2, 65.2);
    ctx.bezierCurveTo(201.3, 64.6, 200.9, 64.0, 200.3, 63.9);
    ctx.bezierCurveTo(199.8, 63.7, 199.2, 64.1, 199.1, 64.7);
    ctx.closePath();
    ctx.fill();

    // 1/////
    ctx.beginPath();
    ctx.moveTo(190.0, 22.8);
    ctx.bezierCurveTo(185.7, 29.3, 173.8, 31.2, 168.1, 18.6);
    ctx.bezierCurveTo(169.8, 20.9, 178.7, 28.0, 190.0, 22.8);
    ctx.closePath();
    ctx.fill();

    // 1/////
    // This artwork uses an unsupported "Multiply" blending mode
    ctx.globalAlpha = alpha * 0.17;
    ctx.beginPath();
    ctx.moveTo(187.3, 19.2);
    ctx.bezierCurveTo(187.3, 19.2, 209.6, 21.9, 204.5, 49.8);
    ctx.bezierCurveTo(198.9, 79.4, 176.5, 88.6, 167.7, 84.4);
    ctx.bezierCurveTo(167.7, 84.4, 178.2, 92.2, 194.7, 80.4);
    ctx.bezierCurveTo(211.2, 68.6, 217.7, 42.8, 210.0, 30.8);
    ctx.bezierCurveTo(210.0, 30.8, 205.9, 18.8, 187.3, 19.2);
    ctx.closePath();
    ctx.fillStyle = "rgb(152, 152, 152)";
    ctx.fill();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
}

function finishStar(ctx, x, y, rate) {

    var alpha = ctx.globalAlpha;
    ctx.translate(x, y);
    ctx.scale(rate, rate);
    // 2/
    ctx.save();
    ctx.restore();

    // 1/
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(463.2, 0.0);
    ctx.lineTo(463.2, 505.9);
    ctx.lineTo(0.0, 505.9);
    ctx.lineTo(0.0, 0.0);
    ctx.lineTo(463.2, 0.0);
    ctx.closePath();

    // 1/
    ctx.globalAlpha = alpha * 0.80;

    // 1//
    ctx.save();
    ctx.globalAlpha = alpha * 1.00;
    ctx.beginPath();
    ctx.moveTo(520.1, 62.1);
    ctx.bezierCurveTo(520.1, 62.1, 514.3, 64.7, 508.5, 69.9);
    ctx.bezierCurveTo(502.7, 64.7, 496.8, 62.1, 496.8, 62.1);
    ctx.bezierCurveTo(496.8, 62.1, 499.5, 67.9, 504.7, 73.8);
    ctx.bezierCurveTo(499.5, 79.6, 496.8, 85.4, 496.8, 85.4);
    ctx.bezierCurveTo(496.8, 85.4, 502.7, 82.8, 508.5, 77.6);
    ctx.bezierCurveTo(514.3, 82.8, 520.1, 85.4, 520.1, 85.4);
    ctx.bezierCurveTo(520.1, 85.4, 517.5, 79.6, 512.3, 73.8);
    ctx.bezierCurveTo(517.5, 67.9, 520.1, 62.1, 520.1, 62.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // 1//
    ctx.beginPath();
    ctx.moveTo(45.6, 103.9);
    ctx.bezierCurveTo(40.0, 99.0, 34.5, 96.5, 34.5, 96.5);
    ctx.bezierCurveTo(34.5, 96.5, 37.0, 102.0, 41.9, 107.6);
    ctx.bezierCurveTo(37.0, 113.2, 34.5, 118.7, 34.5, 118.7);
    ctx.bezierCurveTo(34.5, 118.7, 40.0, 116.2, 45.6, 111.3);
    ctx.bezierCurveTo(51.2, 116.2, 56.7, 118.7, 56.7, 118.7);
    ctx.bezierCurveTo(56.7, 118.7, 54.2, 113.2, 49.3, 107.6);
    ctx.bezierCurveTo(54.2, 102.0, 56.7, 96.5, 56.7, 96.5);
    ctx.bezierCurveTo(56.7, 96.5, 51.2, 99.0, 45.6, 103.9);
    ctx.closePath();
    ctx.fill();

    // 1//
    ctx.beginPath();
    ctx.moveTo(432.8, 29.1);
    ctx.bezierCurveTo(432.8, 29.1, 431.4, 32.7, 431.1, 37.3);
    ctx.bezierCurveTo(426.5, 37.6, 422.9, 38.9, 422.9, 38.9);
    ctx.bezierCurveTo(422.9, 38.9, 426.5, 40.3, 431.1, 40.6);
    ctx.bezierCurveTo(431.4, 45.2, 432.8, 48.8, 432.8, 48.8);
    ctx.bezierCurveTo(432.8, 48.8, 434.1, 45.2, 434.4, 40.6);
    ctx.bezierCurveTo(439.0, 40.3, 442.6, 38.9, 442.6, 38.9);
    ctx.bezierCurveTo(442.6, 38.9, 439.0, 37.6, 434.4, 37.3);
    ctx.bezierCurveTo(434.1, 32.7, 432.8, 29.1, 432.8, 29.1);
    ctx.closePath();
    ctx.fill();

    // 1//
    ctx.beginPath();
    ctx.moveTo(84.2, 50.7);
    ctx.bezierCurveTo(88.6, 50.2, 91.6, 49.0, 91.6, 49.0);
    ctx.bezierCurveTo(91.6, 49.0, 88.6, 47.9, 84.2, 47.4);
    ctx.bezierCurveTo(86.9, 43.9, 88.3, 40.9, 88.3, 40.9);
    ctx.bezierCurveTo(88.3, 40.9, 85.3, 42.3, 81.8, 45.0);
    ctx.bezierCurveTo(81.3, 40.6, 80.2, 37.6, 80.2, 37.6);
    ctx.bezierCurveTo(80.2, 37.6, 79.0, 40.6, 78.5, 45.0);
    ctx.bezierCurveTo(75.0, 42.3, 72.0, 40.9, 72.0, 40.9);
    ctx.bezierCurveTo(72.0, 40.9, 73.4, 43.9, 76.1, 47.4);
    ctx.bezierCurveTo(71.7, 47.9, 68.7, 49.0, 68.7, 49.0);
    ctx.bezierCurveTo(68.7, 49.0, 71.7, 50.2, 76.1, 50.7);
    ctx.bezierCurveTo(73.4, 54.2, 72.0, 57.2, 72.0, 57.2);
    ctx.bezierCurveTo(72.0, 57.2, 75.0, 55.8, 78.5, 53.1);
    ctx.bezierCurveTo(79.0, 57.5, 80.2, 60.5, 80.2, 60.5);
    ctx.bezierCurveTo(80.2, 60.5, 81.3, 57.5, 81.8, 53.1);
    ctx.bezierCurveTo(85.3, 55.8, 88.3, 57.2, 88.3, 57.2);
    ctx.bezierCurveTo(88.3, 57.2, 86.9, 54.2, 84.2, 50.7);
    ctx.closePath();
    ctx.fill();

    // 1//
    ctx.beginPath();
    ctx.moveTo(472.4, 117.1);
    ctx.bezierCurveTo(474.7, 114.2, 475.8, 111.7, 475.8, 111.7);
    ctx.bezierCurveTo(475.8, 111.7, 473.3, 112.8, 470.4, 115.1);
    ctx.bezierCurveTo(470.0, 111.5, 469.0, 108.9, 469.0, 108.9);
    ctx.bezierCurveTo(469.0, 108.9, 468.0, 111.5, 467.6, 115.1);
    ctx.bezierCurveTo(464.7, 112.8, 462.2, 111.7, 462.2, 111.7);
    ctx.bezierCurveTo(462.2, 111.7, 463.3, 114.2, 465.6, 117.1);
    ctx.bezierCurveTo(462.0, 117.5, 459.4, 118.5, 459.4, 118.5);
    ctx.bezierCurveTo(459.4, 118.5, 462.0, 119.5, 465.6, 119.9);
    ctx.bezierCurveTo(463.3, 122.8, 462.2, 125.3, 462.2, 125.3);
    ctx.bezierCurveTo(462.2, 125.3, 464.7, 124.2, 467.6, 121.9);
    ctx.bezierCurveTo(468.0, 125.5, 469.0, 128.1, 469.0, 128.1);
    ctx.bezierCurveTo(469.0, 128.1, 470.0, 125.5, 470.4, 121.9);
    ctx.bezierCurveTo(473.3, 124.2, 475.8, 125.3, 475.8, 125.3);
    ctx.bezierCurveTo(475.8, 125.3, 474.7, 122.8, 472.4, 119.9);
    ctx.bezierCurveTo(476.0, 119.5, 478.6, 118.5, 478.6, 118.5);
    ctx.bezierCurveTo(478.6, 118.5, 476.0, 117.5, 472.4, 117.1);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.restore();
}