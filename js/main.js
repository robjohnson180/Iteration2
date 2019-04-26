console.log("loaded");

var config = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    scene: {

    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: { y: 0.5 }
        }
    },

    plugins: {
        scene: [{
            plugin: PhaserMatterCollisionPlugin,
            key: 'matterCollision',
            mapping: 'matterCollision'
        }]
    },

    scene: [TutScene, Level1],
    callbacks: {
        postBoot: function () {
            resize();
        }
    },
    input: {
        activePointers: 4
    },
    pixelArt: true
}

var game = new Phaser.Game(config);

window.addEventListener('resize', resize, false);
function resize() {
    var canvas = document.querySelector('canvas');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;

    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + 'px';
        canvas.style.height = (windowWidth / gameRatio) + 'px';
    } else {
        canvas.style.width = (windowHeight * gameRatio) + 'px';
        canvas.style.height = windowHeight + 'px';
    }
}