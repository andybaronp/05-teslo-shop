import { FC, useReducer } from 'react'
import { UiContext as UiContext, uiReducer } from './'

export interface UiState {
  isMenuOpen: boolean
}

const UI_INITIAL_STATE: UiState = {
  isMenuOpen: false,
}
interface Props {
  children?: React.ReactNode | undefined
}
export const UIProvider: FC<Props> = ({ children }) => {
  //reducer
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  // Methods
  const toggleSideMenu = () => {
    dispatch({ type: '[UI] - ToogleMenu' })
  }

  return (
    //ContextProvider
    <UiContext.Provider
      value={{
        ...state,

        // Methods
        toggleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}
