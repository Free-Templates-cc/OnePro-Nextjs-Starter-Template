import React from 'react'

type Props = {}

const Progress = (props: Props) => {
  return (
    <div className="waraper skills-member wow fadeInLeft mb50">
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  style={{width: "78%"}}
                  aria-valuenow={78}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >HTML 5</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar color-2"
                  role="progressbar"
                  style={{width: "91%"}}
                  aria-valuenow={91}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >CSS 4</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar color-3"
                  role="progressbar"
                  style={{width: "58%"}}
                  aria-valuenow={58}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >jQuery</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar color-4"
                  role="progressbar"
                  style={{width: "63%"}}
                  aria-valuenow={63}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >PHP</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar color-5"
                  role="progressbar"
                  style={{width: "100%"}}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >Photoshop</div>
              </div>
              
            </div>
  )
}

export default Progress