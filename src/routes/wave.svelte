<script>
  import { onMount, onDestroy } from "svelte";
  import { initialised } from "../stores";

  const config = {
    width: 210,
    height: 270
  };

  let isInitialised;
  let gui;

  initialised.subscribe(value => {
    isInitialised = value;
  });

  onMount(async () => {
    if (!isInitialised) {
      initialised.set(true);

      const dat = await import("dat.gui");

      gui = new dat.GUI({ autoPlace: false });

      var GUIContainer = document.getElementById("controls-container");
      GUIContainer.appendChild(gui.domElement);

      gui.add(config, "width").onChange(value => {
        console.log(value);
      });
      gui.add(config, "height").onChange(value => {
        console.log(value);
      });
    }
  });

  onDestroy(async () => {
    gui.destroy();
  });
</script>

<style>
  .page-container {
    width: 100vw;
    height: calc(100vh - 57px);
    display: flex;
    align-items: stretch;
    flex-direction: row;
    background-color: black;
    justify-content: stretch;
  }

  .svg-container {
    /* width: 100%;
    height: 100%; */
    /* margin: 2em; */
    /* font-size: 0; */
    background-color: darkslategrey;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex: 1;
  }

  .svg-container svg {
    background: white;
    width: calc(((210 / 297) * 100vh) - (57px + 32px));
    height: calc(100vh - (57px + 32px));
  }

  /* main {
    position: relative;
    max-width: 56em;
    margin: 0 auto;
    box-sizing: border-box;
  } */

  #controls-container {
    width: 245px;
  }
</style>

<svelte:head>
  <title>Waves</title>
</svelte:head>

<div class="page-container">
  <div class="svg-container">
    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      width="210mm"
      height="297mm"
      viewBox="0 0 210 297"
      version="1.1"
      id="svg16"
      preserveAspectRatio="none"
      inkscape:version="0.92.2 5c3e80d, 2017-08-06"
      sodipodi:docname="template.svg">
      <defs id="defs10" />
      <sodipodi:namedview
        id="base"
        pagecolor="#ffffff"
        bordercolor="#666666"
        borderopacity="1.0"
        inkscape:pageopacity="0.0"
        inkscape:pageshadow="2"
        inkscape:zoom="0.35"
        inkscape:cx="198.57143"
        inkscape:cy="674.28571"
        inkscape:document-units="mm"
        inkscape:current-layer="layer1"
        showgrid="false"
        inkscape:window-width="1440"
        inkscape:window-height="856"
        inkscape:window-x="0"
        inkscape:window-y="0"
        inkscape:window-maximized="1" />
      <metadata id="metadata13">
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title />
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" />
    </svg>
  </div>
  <div id="controls-container" />
</div>
