document.addEventListener("corru_entered", () => {
  env.dialogues["menu_hub"] = {
    start: {
      name: "start",
      body: [
        {
          actor: "sys",
          text: "USER REQUEST::'intention'",
        },
      ],

      responses: [
        {
          name: "self",
          replies: [
            {
              name: "return to hub",
              destination: "EXEC::endDialogue()",
              hideRead: true,
              exec: () => {
                cutscene(true);
                corruRefresh("/hub/", 3000);
                if (env.e3a2) env.e3a2.clearWarningListener();
                setTimeout(() => {
                  readoutAdd({
                    message: `EXECUTING::'retrace';'localhost'`,
                    name: "sys",
                  });
                }, 1000);
              },
            },
            {
              name: "jokzi ozo",
              destination: "EXEC::endDialogue()",
              hideRead: true,
              exec: () => {
                cutscene(true);
                corruRefresh("/local/ozo", 3000);
                if (env.e3a2) env.e3a2.clearWarningListener();
                setTimeout(() => {
                  readoutAdd({
                    message: `EXECUTING::'navigate';'jokzi-ozo'`,
                    name: "sys",
                  });
                }, 1000);
              },
            },
            {
              name: "eject",
              destination: "EXEC::endDialogue()",
              hideRead: true,
              exec: () => {
                cutscene(true);
                corruRefresh("/", 3000);
                if (env.e3a2) env.e3a2.clearWarningListener();
                setTimeout(() => {
                  readoutAdd({ message: `EXECUTING::'eject'`, name: "sys" });
                }, 1000);
              },
            },
            {
              name: `nevermind`,
              destination: "END",
              exec: () => {
                endDialogue();
                setTimeout(
                  () => readoutAdd({ message: `NOTE::'aborted'`, name: "sys" }),
                  1000
                );
              },
            },
          ],
        },
      ],
    },
  };
});
