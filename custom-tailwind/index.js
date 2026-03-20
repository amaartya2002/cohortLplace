

const stylesObj = {

  p: ["padding", 4],
  m: ["margin", 4],
  mx: [["margin-left", "margin-right"], 4],
  bg: "background-color",
  font: "font",
  color: "color",
  br: ["border-radius", 4]

}


const staticStyles = {
  flex: { property: "display", value: "flex" },
  grid: { property: "display", value: "grid" },
}


const elements = document.querySelectorAll(".chai")
console.log('====================================');
console.log(elements);
console.log('====================================');

elements.forEach((element) => {

  const classes = element.classList

  classes.forEach((myClass) => {

    const classArr = myClass.split("-")


    if (staticStyles[classArr[1]]) {

      console.log('Hi')

      const property = staticStyles[classArr[1]].property
      const value = staticStyles[classArr[1]].value

      element.style.setProperty(property, value)

    }

    if (!(classArr[1] && classArr[2])) {
      return
    }




    if (Array.isArray(stylesObj[classArr[1]]) && typeof stylesObj[classArr[1]] !== "string") {

      if (Array.isArray(stylesObj[classArr[1]][0])) {
        stylesObj[classArr[1]].forEach((sty) => {
          const value = `${stylesObj[classArr[1]][1]}*${classArr[2]}px`
          element.style.setProperty(sty, value)
        })
      }

      const firstProperty = stylesObj[classArr[1]][0]
      const value = `${stylesObj[classArr[1]][1] * classArr[2]}px`

      // myClass.remove()
      element.style.setProperty(firstProperty, value)

    } else {

      const firstProperty = stylesObj[classArr[1]]
      const value = classArr[2]

      element.style.setProperty(firstProperty, value)

    }




  })
})