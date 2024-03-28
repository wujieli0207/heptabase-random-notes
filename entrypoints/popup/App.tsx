import { Button, TextField } from '@radix-ui/themes'
import { useState } from 'react'

function App() {
  const [shareUrl, setShareUrl] = useState('')

  return (
    // hrn-fixed hrn-top-0 hrn-right-0
    <div className="w-32 h-32 hrn-p-4 hrn-z-[9999]">
      {shareUrl}
      <TextField.Root
        value={shareUrl}
        onInput={(e) => setShareUrl(e.currentTarget.value)}
      />
      <Button>data</Button>
    </div>
  )
}

export default App
