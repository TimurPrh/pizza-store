const initialState = {
  y: 0,
  anchors: []
}

const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSITION': 
      return {...state, y: action.payload}
    case 'SET_ANCHOR': 
      let newAnchors = state.anchors.filter(item => item.id !== action.payload.id)
      newAnchors.push(action.payload)

      return {...state, anchors: newAnchors}
    default: 
      return state
  }
}

const setPositionAction = (payload) => ({type: 'SET_POSITION', payload})
const setAnchorAction = (payload) => ({type: 'SET_ANCHOR', payload})

export {positionReducer, setPositionAction, setAnchorAction}