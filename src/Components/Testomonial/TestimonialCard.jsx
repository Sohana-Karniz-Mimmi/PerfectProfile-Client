<div className="absolute z-0 bottom-0 left-0 w-full premium-container">
<svg
  // viewBox="0 0 600 320" 
  viewBox="0 0 1000 200"
  className="w-full h-auto your-element-class">
  <defs>
    <linearGradient
      id="svgGradient"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop
        offset="0%"
        style={{ stopColor: "##51e2c2", stopOpacity: 1 }}
      />
      <stop
        offset="100%"
        style={{ stopColor: "#4bccef", stopOpacity: 1 }}
      />
    </linearGradient>

    {/* <linearGradient id="svgGradient" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" style="stop-color: #51e2c2; stop-opacity: 1"></stop> <stop offset="100%" style="stop-color: #4bccef; stop-opacity: 1"></stop> </linearGradient> */}
  </defs>
  <path
    fill="url(#svgGradient)"
    fillOpacity="1"
    // d="M0,160 C320,240 500,1 1440,160 L1440,320 L0,320Z"
    //  d="M0,140 C320,240 50,10 700,180 L1440,320 L0,320Z"
    d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"
  ></path>
</svg>
</div>