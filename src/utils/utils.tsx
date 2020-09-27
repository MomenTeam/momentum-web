import { ParsedIcon } from 'bumbag'

export const Utils = {
  getReactIconMetadata: (icon: any): ParsedIcon => {
    return {
      viewBoxWidth: icon.props.attr.viewBox.split(' ')[2],
      viewBoxHeight: icon.props.attr.viewBox.split(' ')[3],
      paths: [icon.props.children[0].props.d],
    }
  },
}
