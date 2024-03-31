function adapter(){
    const dpWidth = document.documentElement.clientWidth;
    console.log("Xin Xin")

    const rootFontSize = dpWidth/10

    document.documentElement.style.fontSize = rootFontSize + 'px'
}

adapter()
window.onresize = adapter
