env.dialogueActors["other"] = {
  type: "thoughtform portrait-contain bright portrait-dark",
  image: "/img/textures/weyetran.gif",
};

env.dialogueActors["broken"] = {
  type: "thoughtform portrait-contain bright portrait-dark",
  image: "/img/textures/yeyetran.gif",
  player: true,
};

env.dialogues["spire"] = generateDialogueObject(`
start
    sys
        NOTICE::'memory stream override loaded'
        NOTICE::'repairing context'
            EXEC::__setup()

    sourceless
        i stand
        it is the only thing that i know how to do at this point
        as i stand, i watch
        i watch as they move past me
        each one with so much speed
        so much mass
        if one were to step out into the way of them
        ...
        would...
        would any of them care?
        would anyone anywhere care?
        if i were to...
        ...

    other
        Hey?
            EXEC::ratween(env.bgm, 0.25)

    broken
        wh-huh?
    
    other
        Hey, you doing okay?

    broken
        i...

    sourceless
        i take a second to recollect myself
        i should stop staring at the cars passing by
        i must be worrying them...

    broken
        give...
        give me a minute

    other
        Okay, dear.
        
    sourceless
        we sit in silence for longer
            EXEC::ratween(env.bgm, 0.1)
        i instead focus my efforts into fighting the previous thoughts
        i could never do that to them...
        i could never do that to anyone...
        why do i...

    other
        Hey, it's okay
            EXEC::ratween(env.bgm, 0.25)
            
    sourceless
        i feel an arm wrap around me
        they pull my body into their embrace
            EXEC::ratween(env.bgm, 0.5)

    other
        We can go somewhere a bit quieter if you want, okay?

    broken
        ...
        that would...
        be...
        ...

    other
        I need to get back to the cafe soon for my shift, anyway.
        You can sit in the storeroom again, and I'll make you a hot chocolate.
        Does that sound good?

    broken
        ...
        yes, please...

    other
        Alright, let's go then.

    sourceless
        They start to walk, their arm still wrapped around my back.
        They're always so patient...
        ...
        That's why I'm glad that I have them...

    sys
        NOTICE::'memory stream terminated'

    RESPONSES::sys
        return<+>END
            EXEC::moveTo("/local/depths/")
`);

function __setup() {
  changeBgm(
    new Howl({
      src: ["/audio/citystreet demo3.ogg"],
      preload: true,
      loop: true,

      rate: 0.1,
    })
  );
}
