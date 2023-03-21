
const app = new PIXI.Application();
document.body.appendChild(app.view);

app.loader.add('goblins', 'https://goclack.github.io/PixiJS_Study/goblins.json').load(goblinsLoad);

function goblinsLoad( loader, resources) 
{
    const goblin = new PIXI.spine.Spine(resources.goblins.spineData);

    // set current skin
    goblin.skeleton.setSkinByName('goblin');
    goblin.skeleton.setSlotsToSetupPose();

    // set the position
    goblin.x = 400;
    goblin.y = 600;

    goblin.scale.set(1.5);

    // play animation
    goblin.state.setAnimation(0, 'walk', true);

    app.stage.addChild(goblin);
}