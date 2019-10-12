export default (draw, width, height) => {

    var group = draw.group()
    group.path('M10,20L30,40')

    group
        .rect(width, height)
        .fill("transparent")
        .stroke("#60f");

    const itemCount = 250;

    for (var i = 0; i < itemCount; i++) {
        group.rect(10, 10)
            .fill("transparent")
            .stroke("#60f")
            .move((width - 10) * Math.random(), (height - 10) * Math.random())
    }

    return group
}