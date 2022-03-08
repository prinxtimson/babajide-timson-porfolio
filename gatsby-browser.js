import React from "react"

import SimpleReactLightbox from "simple-react-lightbox"
//import loadable from "@loadable/component"

// eslint-disable-next-line react/prop-types

// const MainComponent

export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)
