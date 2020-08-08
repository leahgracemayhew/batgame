function doSomething () {
    if (0 == 0) {
    	
    } else {
        scene.setTileMap(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `)
        scene.setTile(15, img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `, true)
        scene.setTile(2, img`
            5 5 4 2 2 2 2 2 4 2 2 2 2 4 4 5 
            5 4 2 2 2 2 2 4 4 4 4 4 4 4 5 5 
            4 2 2 4 2 4 4 4 5 5 5 5 5 5 4 4 
            2 2 2 2 4 4 5 5 4 4 4 5 4 5 4 4 
            4 4 2 4 4 5 5 4 4 2 2 4 5 4 4 2 
            4 4 2 4 5 4 4 2 2 2 2 4 5 4 4 2 
            2 2 4 5 4 4 2 2 2 4 4 2 5 5 4 2 
            4 4 5 5 4 2 2 2 2 4 4 2 4 5 5 4 
            5 5 5 4 2 2 4 2 2 2 2 2 4 5 5 5 
            4 5 4 4 2 2 2 2 2 2 2 2 4 5 4 4 
            4 5 5 2 2 4 2 2 2 4 2 2 4 5 5 4 
            5 5 4 2 4 2 4 2 2 2 2 4 5 5 5 5 
            4 5 5 4 2 4 2 2 2 2 2 4 5 4 4 4 
            4 5 5 5 2 2 2 4 4 4 5 5 5 4 2 2 
            4 5 5 4 5 5 5 5 5 5 5 4 4 2 2 2 
            4 5 5 4 4 4 4 4 4 4 4 2 2 2 4 4 
            `, true)
        scene.setTile(5, img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, true)
        scene.setTile(3, img`
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            `, false)
        scene.placeOnRandomTile(mySprite, 3)
        scene.setBackgroundColor(12)
        scene.cameraFollowSprite(mySprite)
        info.startCountdown(10)
    }
}
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    game.splash("you beet the level!!")
    doSomething()
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(false)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f c c f f c c f f f f f f f f 
    f f c 3 c c 3 c c c f f f f f f 
    f c b 3 b c 3 b c c c f f f f f 
    f c b b b b b b b b f f f f f f 
    c c b b b b b b b b f f f f f f 
    c b 1 b b b 1 b b c f f f f f f 
    c b b b b b b b b f f f f f f f 
    f b c b b b c b c c b b b f f f 
    f b 1 f f f 1 b f c c c c f f f 
    f f b b b b b b f b b c c f f f 
    c c f b b b b b c c b b c f f f 
    c c c f f f f f f c c b b c f f 
    f c c c f f f f f f c c c c c f 
    f f c c c f f f f f f f c c c c 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let list = [
img`
    f f f f f f f f f f f f f f f f 
    f c c c c c c c f a a a a a a f 
    f c 3 c c c c c f c c c c c c f 
    f c c c c c c c f c c c 5 c c f 
    f c c c c c c c f c c c c c c f 
    f c c c c c c c f c c c c c c f 
    f f c f c c f f f f f f c f f f 
    f c c c c c c c c c f c c c c f 
    f c c c c c c c c c f c c c c f 
    f c c c c c c c c c f c c c c f 
    f c c c c c c c c c f c c c c f 
    f f c f c c f f f f f c c c c f 
    f c c f c c c c c c c c c c c f 
    f c c f c c c c c c f c c c c f 
    f 5 5 f c c c c c c f c c c c f 
    f f f f f f f f f f f f f f f f 
    `,
img`
    e e e e e f f f f f f e e e e e 
    e e e e e f e e e e f f e e e e 
    e e e e f f e e e e e f e e e e 
    e e 3 e f e 5 e f f e f e e e e 
    e e e e f f f f f f e f e e e e 
    f f e e 2 f f e e f e f e e e e 
    f e e e e e f e e f e f e e e e 
    f e e e e e f f f f e f e e e e 
    f e e e e e e e e e e f e e e e 
    f e e e e e e e e e e f e e e e 
    f e e e e e f f f f f f e e e e 
    f e e f f e f e e e e e e e e e 
    f e f e f f f f e e e e e e e e 
    f f e e f e e e e e e e e e e e 
    f e f f e e e e e e e e e e e e 
    f f e e e e e e e e e e e e e e 
    `,
img`
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c f f f f c f f f f f c c c c c 
    c f 3 c f c 5 c c c f c c c c c 
    c f c c f c f f f c f c c c c c 
    c f c c f c c c f c f c c c c c 
    c f c c f f c c f c f c c c c c 
    c f c c c f f f f c f c c c c c 
    c f c c c c c c c c f c c c c c 
    c f f f f f f f f f f c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    `,
img`
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c f 3 f f c 5 c c c c c c c c c 
    c f c c f c f f c c c c c c c c 
    c f c c f c f f c c c c c c c c 
    c f c c f f f f c c c c c c c c 
    c f c c f f f f c c c c c c c c 
    c f c c c f c f f f f c c c c c 
    c f f c c f c f c 5 f c c c c c 
    c c f c c f c f c c f c c c c c 
    c c f c f f c f c c f c c c c c 
    c f f c f f c f c c f c c c c c 
    f f f c f f f f f c f c c c c c 
    2 2 2 2 2 2 c c c c f c c c c c 
    2 2 2 2 2 2 c c c c f c c c c c 
    `,
img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 c c 9 9 c c 9 9 9 9 9 9 9 9 
    9 9 c 3 c c 3 c c c 9 9 9 9 9 9 
    9 c b 3 b c 3 b c c c 9 9 9 9 9 
    9 c b b b b b b b b f f 9 9 9 9 
    c c b b b b b b b b f f 9 9 9 9 
    c b 1 b b b 1 b b c f f f 9 9 9 
    c b b b b b b b b f f f f 9 9 9 
    f b c b b b c b c c b b b 9 9 9 
    f b 1 f f f 1 b f c c c c 9 9 9 
    9 f b b b b b b f b b c c 9 9 9 
    c c f b b b b b c c b b c 9 9 9 
    c c c f f f f f f c c b b c 9 9 
    9 c c c 9 9 9 9 9 9 c c c c c 9 
    9 9 c c c 9 9 9 9 9 9 9 c c c c 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `,
img`
    9 9 9 9 9 5 f f f f 9 9 9 9 9 9 
    9 9 9 9 f f e e e e f f 9 9 9 9 
    9 9 9 f e e e f f e e e f 9 9 9 
    9 9 f f f f f 2 2 f f f f f 9 9 
    9 9 f f e 2 e 2 2 e 2 e f f 9 9 
    9 9 f e 2 f 2 f f 2 f 2 e f 9 9 
    9 9 f f f 2 2 e e 2 2 f f f 9 9 
    9 f f e f 2 f e e f 2 f e f f 9 
    9 f e e f f e e e e f e e e f 9 
    9 9 f e e e e e e e e e e f 9 9 
    9 9 9 f e e e e e e e e f 9 9 9 
    9 9 e 4 f f f f f f f f 4 e 9 9 
    9 9 4 d f 2 2 2 2 2 2 f d 4 9 9 
    9 9 4 4 f 4 4 4 4 4 4 f 4 4 9 9 
    9 9 9 9 9 f f f f f f 9 9 9 9 9 
    3 9 9 9 9 f f 9 9 f f 9 9 9 9 9 
    `,
img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 f f 4 4 f f 2 2 2 2 2 
    2 2 2 2 f 5 4 5 5 4 5 f 2 2 2 2 
    2 2 2 f e 3 3 3 3 3 3 e f 2 2 2 
    2 2 f b 3 3 3 3 3 3 3 3 b f 2 2 
    2 2 f 3 3 3 3 3 3 3 3 3 3 f 2 2 
    2 f b 3 3 3 3 3 3 3 3 3 3 b f 2 
    2 f b b 3 3 3 3 3 3 3 3 b b f 2 
    2 f b b b b b b b b b b b b f 2 
    f c b b b b b b b b b b b b f 2 
    f b b b b b b b b b b b b c f 2 
    f f b b b b b b b b b b c f 2 2 
    2 f c c c f f f f f f f e c 2 2 
    2 2 2 f b b d b d d e 4 4 e 2 2 
    2 2 2 f f 1 1 d 1 d e e f 2 2 2 
    2 2 2 2 2 f b b f f f 2 2 2 2 2 
    `,
0,
img`
    5 f f f 5 5 5 5 5 5 5 5 f f f 5 
    f f c 5 5 5 5 5 5 5 f c b b c 5 
    f c c 5 5 5 5 5 5 f c b b c 5 5 
    c f 5 5 5 5 5 5 5 f b c c c 5 5 
    c f f 5 5 5 5 5 f f b b c c 5 5 
    f f f c c 5 c c f b c b b c 5 5 
    f f f c c c c c f b c c b c 5 5 
    5 f c 3 c c 3 b c b c c c 5 5 5 
    5 c b 3 b c 3 b b c c c c 5 5 5 
    c c b b b b b b b b c c 5 5 5 5 
    c 1 1 b b b 1 1 b b b f c 5 5 5 
    f b b b b b b b b b b f c c 5 5 
    f b c b b b c b b b b f 5 5 5 5 
    5 f 1 f f f 1 b b b c f 5 5 5 5 
    5 5 f b b b b b b c f 5 5 5 5 5 
    5 5 5 f f f f f f f 5 5 5 5 5 5 
    `
]
doSomething()
