function test() {
    // const hillSVG = document.querySelector('#hill-1');
    const hillPath = document.querySelector('#wave-example path');
    let randomPercent = Math.floor((Math.random()) * 100);
    const hillPathLength = Math.floor(hillPath.getTotalLength());

    /*Get percentage for path*/
    randomPercent = randomPercent * hillPathLength / 100;
    let randomPoint = hillPath.getPointAtLength(randomPercent);
    // let angleCoordinatesA = hillPath.getPointAtLength(randomPercent - 1);
    // let angleCoordinatesB = hillPath.getPointAtLength(randomPercent + 1);

    // let currentAngle = Math.atan2(angleCoordinatesA.y - angleCoordinatesB.y, angleCoordinatesA.x - angleCoordinatesB.x) * 180 / Math.PI;
    // console.log(randomPoint.x, randomPoint.y)
    const red = document.querySelector('div.red');
    red.style.transform = `translate3d(${randomPoint.x}px, ${randomPoint.y}px, 0)`

    red.addEventListener('click', function () {
        // console.log('clicked me')
    })
    // marmot.style.transform = `rotate(${currentAngle}deg)`;
    // const marmot = document.getElementById('marmot')
    // console.log(marmot);
    // marmot.setAttribute('transform', `translate(${randomPoint.x}, ${randomPoint.y})`);
    // hillSVG.appendChild(marmot);
    // console.log(randomPoint, currentAngle);
}

test()

