import { reactive, readonly } from "vue"

export interface PrintModeState {
  printMode: undefined | boolean
}

interface Setters {
  enablePrintMode(): boolean | Error
  disablePrintMode(): boolean | Error
  togglePrintMode(): boolean | Error
}

export interface PrintModeStore {
  state: PrintModeState
  setters: Setters
}

const state: PrintModeState = reactive({
  printMode: undefined
})

const setters: Setters = {
  enablePrintMode(): boolean | Error {
    if (state.printMode !== undefined) {
      throw new Error(`(NOT_UNDEFINED) state.printMode is already set: ${typeof state.printMode}`)
    }
    state.printMode = true
    return true
  },
  disablePrintMode(): boolean | Error {
    if (state.printMode !== undefined) {
      throw new Error(`(NOT_UNDEFINED) state.printMode is already set: ${typeof state.printMode}`)
    }
    state.printMode = false
    return true
  },
  togglePrintMode(): boolean | Error {
    if (state.printMode === undefined) {
      throw new Error("(UNDEFINED) state.printMode is undefined!")
    }
    state.printMode = !state.printMode
    return true
  }
}

export default {
  state: readonly(state),
  setters
}
