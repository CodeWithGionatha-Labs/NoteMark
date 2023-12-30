declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
    }
  }
}
