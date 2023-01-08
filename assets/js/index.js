
function test() {
    const hillSVG = document.querySelector('#hill-1');
    const hillPath = document.querySelector('#hill-1 path');
    let randomPercent = Math.floor((Math.random()) * 100);
    let randomPoint = hillPath.getPointAtLength(randomPercent);
    let angleCoordinatesA = hillPath.getPointAtLength(randomPercent - 1);
    let angleCoordinatesB = hillPath.getPointAtLength(randomPercent + 1);

    let currentAngle = Math.atan2(angleCoordinatesA.y - angleCoordinatesB.y, angleCoordinatesA.x - angleCoordinatesB.x) * 180 / Math.PI;

    // marmot.style.transform = `rotate(${currentAngle}deg)`;
    // const marmot = document.getElementById('marmot')
    // console.log(marmot);
    // marmot.setAttribute('transform', `translate(${randomPoint.x}, ${randomPoint.y})`);
    // hillSVG.appendChild(marmot);
    // console.log(randomPoint, currentAngle);
}

test()

