class level4 extends Phaser.Scene {
    constructor() {
      super({ key: "level4" });
    }
   
    preload() {
      // Step 1, load JSON
      this.load.tilemapTiledJSON("level4", "assets/level4.tmj");
   
      // Step 2 : Preload any images here
      this.load.image("RoomBuilderIMG", "assets/Room_Builder_32x32.png");
      this.load.image("PipoyaIMG", "assets/pipoya.png");

    this.load.spritesheet('MC','assets/mage.png',{ frameWidth:64,frameHeight:64});
    } // end of preload //
   
    create() {
      console.log("animationScene");
   
      //Step 3 - Create the map from main
      let map = this.make.tilemap({ key: "level4" });
   
      // Step 4 Load the game tiles
      // 1st parameter is name in Tiled,
      // 2nd parameter is key in Preload
      let RoomBuildertiles = map.addTilesetImage("Room_Builder_32x32", "RoomBuilderIMG");
      let pipoyatiles = map.addTilesetImage("pipoya", "PipoyaIMG");
   
      //Step 5  create an array of tiles
      let tilesArray = [
          RoomBuildertiles,
          pipoyatiles
      ];
   
      // Step 6  Load in layers by layers
      this.floorlayer = map.createLayer("floor", tilesArray, 0, 0);
      this.walllayer = map.createLayer("walls", tilesArray, 0, 0);
      this.deco2layer = map.createLayer("deco", tilesArray, 0, 0);
      this.decolayer = map.createLayer("deco2", tilesArray, 0, 0);
  
      var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(51);
    var key4Down = this.input.keyboard.addKey(52);

    key2Down.on('down', function(){
        console.log("Key 2 pressed");
            this.scene.start("level3");
        }, this );  
     
      key3Down.on('down', function(){
        console.log("Key 3 pressed");
            this.scene.start("level4");
        }, this );  

        key4Down.on('down', function(){
            console.log("Key 4 pressed");
                this.scene.start("level5");
            }, this );  
   
      this.cursors = this.input.keyboard.createCursorKeys();
   
 
      this.anims.create({
        key:'MC-up',
        frames:this.anims.generateFrameNumbers('MC',
        { start:105, end:112 }),
        frameRate:5,
        repeat:-1
    });
   
    this.anims.create({
        key:'MC-left',
        frames:this.anims.generateFrameNumbers('MC',
        { start:118, end:125 }),
        frameRate:5,
        repeat:-1
    });
   
    this.anims.create({
        key:'MC-down',
        frames:this.anims.generateFrameNumbers('MC',
        { start:131, end:138 }),
        frameRate:5,
        repeat:-1
    });
   
    this.anims.create({
        key:'MC-right',
        frames:this.anims.generateFrameNumbers('MC',
        { start:144, end:151 }),
        frameRate:5,
        repeat:-1
    });
           
    
    this.player = this.physics.add.sprite(809, 1545, 'MC');
    window.player = this.player
    this.player.body.setSize(this.player.width * 0.3, this.player.height * 0.5)

    this.walllayer.setCollisionByExclusion(-1, true);
    this.deco2layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.walllayer)
    this.physics.add.collider(this.player, this.deco2layer)
     
      // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    
    // // camera follow player
    this.cameras.main.startFollow(this.player);


    } // end of create //
   
    update() {
      if (this.cursors.left.isDown)
      {
          this.player.setVelocityX(-320);
          this.player.anims.play('MC-left', true);
      }
      else if (this.cursors.right.isDown)
      {
          this.player.setVelocityX(320);
          this.player.anims.play('MC-right', true);
      } else if (this.cursors.up.isDown)
      {
          this.player.setVelocityY(-320);
          this.player.anims.play('MC-up', true);
      } else if (this.cursors.down.isDown)
      {
          this.player.setVelocityY(320);
          this.player.anims.play('MC-down', true);
      } else {
          this.player.setVelocity(0);
          this.player.anims.stop();
      }
      
      if (
      
        this.player.x < 1022 &&
        this.player.x > 958 &&
        this.player.y < 282
        )
        
        {
        console.log("level5");
        this.level5();
      }
    } // end of update //

    level5(player, tile) {
      console.log("level5 function");
      this.scene.start("level5");
    }
  }

   
