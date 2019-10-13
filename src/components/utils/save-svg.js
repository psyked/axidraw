import FileSaver from "file-saver";

export default ({ width = 640, height = 640, selector } = {}) => {
    var svgString = new XMLSerializer().serializeToString(document.querySelector(selector));
    var DOMURL = self.URL || self.webkitURL || self;
    var img = new Image(width, height);
    var svg = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svg);
    img.onload = function () {
        FileSaver.saveAs(svg, "download.svg");
    };
    img.src = url;
}