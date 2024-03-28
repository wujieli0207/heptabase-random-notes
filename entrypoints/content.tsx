import './popup/style.css'
import ReactDOM from 'react-dom/client'
import App from './popup/App'

export default defineContentScript({
  matches: ['<all_urls>'],

  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      onMount: (container) => {
        // Append children to the container
        const app = document.createElement('div')
        container.append(app)

        const root = ReactDOM.createRoot(app)
        root.render(<App />)

        return root
      },
    })

    // Call mount to add the UI to the DOM
    ui.mount()
  },
})

// export default defineContentScript({
//   matches: ['<all_urls>'],
//   // 2. Set cssInjectionMode
//   cssInjectionMode: 'ui',

//   async main(ctx) {
//     // 3. Define your UI
//     const ui = await createShadowRootUi(ctx, {
//       name: 'example-ui',
//       position: 'inline',
//       onMount: (container) => {
//         // Container is a body, and React warns when creating a root on the body, so create a wrapper div
//         const app = document.createElement('div')
//         container.append(app)

//         // Create a root on the UI container and render a component
//         const root = ReactDOM.createRoot(app)
//         root.render(<App />)
//         return root
//       },
//       onRemove: (root) => {
//         // Unmount the root when the UI is removed
//         root?.unmount()
//       },
//     })

//     // 4. Mount the UI
//     ui.mount()
//   },
// })
