import React , {useState} from 'react';
import LoadingBar from 'react-top-loading-bar';

function TopLoadingbar() {
    const [progress, setProgress] = useState(100)
  return (
  <>
    <LoadingBar
        color="red"
        progress={progress} 
      />
  </>

  )
}

export default TopLoadingbar;