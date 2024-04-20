class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

            my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueA.png");
            my.sprite.rightleg = this.add.sprite(this.bodyX+50, this.bodyY+120, "monsterParts", "leg_yellowC.png");
            my.sprite.leftleg = this.add.sprite(this.bodyX-50, this.bodyY+120, "monsterParts", "leg_yellowC.png");
            my.sprite.leftleg.flipX = true;
            my.sprite.rightarm = this.add.sprite(this.bodyX+80, this.bodyY+60, "monsterParts", "arm_redE.png");
            my.sprite.leftarm = this.add.sprite(this.bodyX-80, this.bodyY+60, "monsterParts", "arm_redE.png");
            my.sprite.leftarm.flipX = true;
            my.sprite.eye1 = this.add.sprite(this.bodyX-100, this.bodyY-20, "monsterParts", "eye_psycho_light.png");
            my.sprite.eye2 = this.add.sprite(this.bodyX+100, this.bodyY-20, "monsterParts", "eye_psycho_light.png");
            my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "mouthC.png");
            my.sprite.mouth2 = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "mouthF.png");
            my.sprite.mouth2.visible = false;
            my.sprite.snot = this.add.sprite(this.bodyX-30, this.bodyY-15, "monsterParts", "snot_large.png");
            my.sprite.earright = this.add.sprite(this.bodyX+75, this.bodyY-75, "monsterParts", "detail_red_ear.png");
            my.sprite.earleft = this.add.sprite(this.bodyX-75, this.bodyY-75, "monsterParts", "detail_red_ear.png");
            my.sprite.earleft.flipX = true;
            my.sprite.horn = this.add.sprite(this.bodyX, this.bodyY-75, "monsterParts", "detail_yellow_horn_small.png");
        }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        this.input.keyboard.on('keydown-S', () => {
            my.sprite.mouth.visible = true;
            my.sprite.mouth2.visible = false;
        });
        this.input.keyboard.on('keydown-F', () => {
            my.sprite.mouth.visible = false;
            my.sprite.mouth2.visible = true;
        });
        this.input.keyboard.on('keydown-A', () => {
            my.sprite.body.x -= .05;
            my.sprite.rightleg.x -= .05;
            my.sprite.leftleg.x -= .05;
            my.sprite.rightarm.x -= .05;
            my.sprite.leftarm.x -= .05;
            my.sprite.eye1.x -= .05;
            my.sprite.eye2.x -= .05;
            my.sprite.mouth.x -= .05;
            my.sprite.mouth2.x -= .05;
            my.sprite.snot.x -= .05;
            my.sprite.earright.x -= .05;
            my.sprite.earleft.x -= .05;
            my.sprite.horn.x -= .05;

            this.bodyX = my.sprite.body.x;
            this.bodyX = my.sprite.rightleg.x;
            this.bodyX = my.sprite.leftleg.x;
            this.bodyX = my.sprite.rightarm.x;
            this.bodyX = my.sprite.leftarm.x;
            this.bodyX = my.sprite.eye1.x;
            this.bodyX = my.sprite.eye2.x;
            this.bodyX = my.sprite.mouth.x;
            this.bodyX = my.sprite.mouth2.x;
            this.bodyX = my.sprite.snot.x;
            this.bodyX = my.sprite.earright.x;
            this.bodyX = my.sprite.earleft.x;
            this.bodyX = my.sprite.horn.x;
        });
        this.input.keyboard.on('keydown-D', () => {
            my.sprite.body.x += .05;
            my.sprite.rightleg.x += .05;
            my.sprite.leftleg.x += .05;
            my.sprite.rightarm.x += .05;
            my.sprite.leftarm.x += .05;
            my.sprite.eye1.x += .05;
            my.sprite.eye2.x += .05;
            my.sprite.mouth.x += .05;
            my.sprite.mouth2.x += .05;
            my.sprite.snot.x += .05;
            my.sprite.earright.x += .05;
            my.sprite.earleft.x += .05;
            my.sprite.horn.x += .05;

            this.bodyX = my.sprite.body.x;
            this.bodyX = my.sprite.rightleg.x;
            this.bodyX = my.sprite.leftleg.x;
            this.bodyX = my.sprite.rightarm.x;
            this.bodyX = my.sprite.leftarm.x;
            this.bodyX = my.sprite.eye1.x;
            this.bodyX = my.sprite.eye2.x;
            this.bodyX = my.sprite.mouth.x;
            this.bodyX = my.sprite.mouth2.x;
            this.bodyX = my.sprite.snot.x;
            this.bodyX = my.sprite.earright.x;
            this.bodyX = my.sprite.earleft.x;
            this.bodyX = my.sprite.horn.x;
        });
       
    }

}