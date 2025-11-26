import { useState, useEffect } from 'react'
import './LoadingScreen.css'

function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1.25
      })
    }, 100) // Update every 100ms to complete in ~8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-grid"></div>
      
      {/* Corner brackets */}
      <div className="corner-bracket top-left"></div>
      <div className="corner-bracket top-right"></div>
      <div className="corner-bracket bottom-left"></div>
      <div className="corner-bracket bottom-right"></div>

      {/* Icons */}
      <div className="loading-icon padlock-icon">🔒</div>
      <div className="loading-icon database-icon">🗄️</div>
      <div className="loading-icon wifi-icon">📶</div>

      {/* Main content */}
      <div className="loading-content">
        <div className="loading-shield">
          <div className="shield-circle">
            <div className="shield-icon">🛡️</div>
          </div>
        </div>
        
        <div className="loading-text">
          <span>ENCRYPTING DATA</span>
          <span className="blink-cursor">_</span>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{progress}% COMPLETE</div>
        </div>

        <div className="status-indicators">
          <div className="status-item">
            <span className="status-dot green"></span>
            <span>SSL</span>
          </div>
          <div className="status-item">
            <span className="status-dot blue"></span>
            <span>ENCRYPTED</span>
          </div>
          <div className="status-item">
            <span className="status-dot green"></span>
            <span>SECURE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

