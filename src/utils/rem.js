function adapter(){
    const dpWidth = document.documentElement.clientWidth;
    console.log("Xin Xin")
    console.log(document.documentElement.style.fontSize)

    const rootFontSize = dpWidth/10

    document.documentElement.style.fontSize = rootFontSize + 'px'
    console.log(document.documentElement.style.fontSize)
}

adapter()
window.onresize = adapter
