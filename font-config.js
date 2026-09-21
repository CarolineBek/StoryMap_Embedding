function generateScriptConfig() {
  window.storyMapsEmbedConfig = {
    storyId: "9fe2df47047848b5a6d27bfb9d39383b",
    rootSelector: ".storymaps-root",

    font: {
      title: {
        fontFamily: "Oslo Sans",
        weight: {
          normal: 400,
          bold: 700
        }
      },
      body: {
        fontFamily: "Oslo Sans",
        weight: {
          normal: 400,
          bold: 700
        }
      }
    }
  };
}

function createScriptedEmbed() {
  const script = document.createElement("script");
  script.id = "embed-script";
  script.src = "https://storymaps.arcgis.com/embed/view";
  document.body.appendChild(script);
}



generateScriptConfig();
createScriptedEmbed();

