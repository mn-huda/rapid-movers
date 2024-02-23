// local imports
import '@/styles/logo.css'

// Logo
export default function Logo({ side }: { side: number }) {
  return (
    <svg
      className='logo'
      width={`${side}rem`}
      height={`${Math.floor((side * 427.9) / 6) / 100}rem`}
      viewBox='0 0 600 427.9'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g transform='matrix(1.7926,0,0,1.7926,-247.267,-321.955)'>
        <path
          className='fill-secondary dark:fill-secondary-foreground'
          d='M354.52,245.181C354.52,245.181 349.182,247.412 347.652,247.279C346.424,247.173 346.39,245.709 345.344,244.387L345.847,243.949L346.492,244.446C346.529,244.475 346.574,244.49 346.62,244.488L347.366,244.439C347.366,244.439 347.831,245.213 347.831,245.213C347.874,245.288 347.97,245.314 348.045,245.271C348.12,245.228 348.145,245.132 348.102,245.057L347.613,244.17C347.58,244.114 347.519,244.08 347.453,244.083L346.678,244.105L346.161,243.676L346.227,243.619L346.48,243.643C346.499,243.656 346.522,243.667 346.547,243.673C346.593,243.685 346.64,243.68 346.681,243.662L347.331,243.723C347.391,243.729 347.449,243.705 347.486,243.658L348.182,242.74C348.235,242.672 348.223,242.573 348.155,242.52C348.087,242.467 347.988,242.479 347.935,242.547L347.276,243.37L346.844,243.317L346.953,242.812C346.967,242.758 346.956,242.701 346.922,242.657L346.413,242.021C346.361,241.951 346.263,241.937 346.194,241.989C346.124,242.041 346.11,242.139 346.162,242.208L346.574,242.8L346.439,243.268L346.185,243.237C346.134,243.232 346.083,243.248 346.044,243.281L345.788,243.491C345.75,243.503 345.715,243.526 345.689,243.56C345.681,243.569 345.674,243.58 345.668,243.59L345.089,244.067C344.488,243.321 343.759,242.456 342.921,241.54L343.734,241.496C343.826,241.493 343.902,241.42 343.906,241.327L343.909,241.198L344.093,241.253L344.278,242.33C344.29,242.416 344.369,242.475 344.455,242.463C344.54,242.451 344.6,242.372 344.588,242.286L344.453,241.075C344.443,241.003 344.392,240.943 344.323,240.92L343.919,240.774L343.925,240.535C343.93,240.448 343.863,240.375 343.777,240.37C343.69,240.366 343.617,240.432 343.612,240.519L343.591,240.797C343.573,240.817 343.559,240.841 343.55,240.868C343.53,240.929 343.54,240.993 343.572,241.044L343.564,241.141L342.578,241.142C342.57,241.142 342.562,241.142 342.555,241.144C341.782,240.317 340.926,239.459 340.002,238.616L340.582,237.389L341.257,237.549C341.272,237.553 341.288,237.555 341.304,237.555C341.304,237.555 341.339,237.553 341.393,237.536L341.774,237.415L341.736,237.419L341.691,237.112L341.312,237.2L340.752,237.019C340.756,236.996 340.757,236.972 340.752,236.948L340.573,236.084C340.573,236.084 341.132,235.562 341.132,235.562C341.196,235.504 341.201,235.405 341.143,235.341C341.085,235.277 340.985,235.272 340.921,235.33L340.275,235.901C340.232,235.94 340.212,236 340.223,236.058L340.384,236.954L340.369,236.984C340.331,237.01 340.302,237.05 340.289,237.097C340.284,237.117 340.281,237.137 340.281,237.157L339.686,238.331C339.202,237.899 338.701,237.473 338.185,237.06L338.194,236.953L338.41,236.891C338.423,236.896 338.438,236.9 338.453,236.902C338.531,236.914 338.606,236.88 338.651,236.821L338.913,236.745C338.997,236.723 339.047,236.638 339.025,236.554C339.003,236.47 338.917,236.42 338.834,236.442L338.721,236.469L338.806,235.747L338.725,235.816C338.775,235.759 338.814,235.675 338.751,235.585L338.496,235.22C338.393,235.073 338.362,235.458 338.362,235.458C338.275,235.145 338.205,235.215 338.205,235.301C338.205,235.335 338.215,235.366 338.233,235.391L338.45,235.753L338.296,236.57L337.983,236.644C337.913,236.663 337.861,236.723 337.852,236.796C337.526,236.542 337.195,236.294 336.858,236.052L337.166,235.899C337.235,235.865 337.277,235.793 337.273,235.717L337.24,235.26C337.246,235.246 337.251,235.232 337.254,235.217C337.265,235.162 337.254,235.108 337.226,235.064L337.223,235.013C337.241,235.012 337.259,235.009 337.277,235.004L337.872,234.809C337.876,234.807 337.88,234.806 337.884,234.805L338.734,234.465C338.734,234.465 339.102,235.026 339.102,235.026C339.148,235.099 339.244,235.122 339.318,235.076C339.391,235.03 339.413,234.933 339.367,234.86L338.948,234.159C338.904,234.089 338.817,234.059 338.74,234.088L337.756,234.435L337.259,234.576L337.348,234.109C337.348,234.109 337.425,234.084 337.52,234.053C337.547,234.047 337.574,234.038 337.599,234.026C337.736,233.981 337.877,233.934 337.877,233.934C337.915,233.922 337.947,233.897 337.968,233.863L338.485,233.011C338.53,232.937 338.508,232.841 338.434,232.795C338.361,232.75 338.264,232.772 338.219,232.846L337.719,233.635L337.676,233.649L337.57,232.967L337.817,232.402C337.854,232.324 337.821,232.23 337.743,232.193C337.665,232.156 337.571,232.189 337.534,232.267L337.225,232.867C337.21,232.897 337.204,232.931 337.208,232.965L337.28,233.772L337.145,233.814C337.086,233.833 337.042,233.883 337.029,233.944L336.851,234.787C336.848,234.802 336.847,234.818 336.848,234.833L336.853,234.927L336.457,234.854C336.457,234.854 336.19,234.071 336.19,234.071C336.182,234.047 336.169,234.024 336.152,234.005L335.99,233.837L336.54,233.219C336.568,233.189 336.585,233.151 336.589,233.111L336.651,232.16C336.659,232.074 336.595,231.997 336.509,231.989C336.423,231.981 336.347,232.045 336.339,232.131L336.234,233.01L335.707,233.542L335.49,233.316C335.431,233.253 335.332,233.249 335.269,233.308C335.205,233.366 335.201,233.466 335.26,233.529L335.526,233.829C335.531,233.878 335.552,233.927 335.591,233.963C335.62,233.991 335.655,234.008 335.692,234.015L335.866,234.212L336.126,235.083C336.148,235.15 336.203,235.2 336.272,235.214L336.875,235.349L336.889,235.612C336.889,235.612 336.536,235.778 336.536,235.778C336.524,235.784 336.512,235.791 336.502,235.8C335.746,235.274 334.965,234.784 334.164,234.348L335.087,233.27C335.143,233.207 335.149,233.113 335.101,233.044L334.315,231.922L334.74,231.368C334.793,231.3 334.781,231.202 334.713,231.148C334.645,231.095 334.547,231.107 334.493,231.175L333.978,231.815C333.933,231.872 333.93,231.952 333.971,232.012L334.714,233.131L333.795,234.152C333.545,234.022 333.293,233.897 333.04,233.778L333.396,232.761L333.913,232.76C333.999,232.762 334.071,232.694 334.073,232.607C334.075,232.521 334.007,232.449 333.92,232.447L333.423,232.422L333.037,231.638C333.014,231.589 332.97,231.552 332.917,231.537L331.572,231.194C331.489,231.171 331.402,231.22 331.379,231.303C331.356,231.386 331.405,231.473 331.488,231.496L332.731,231.871L333.066,232.635L332.667,233.608C332.667,233.608 332.509,233.539 332.429,233.505C332.372,233.481 332.316,233.457 332.263,233.436C331.728,233.165 331.127,232.849 330.571,232.531C329.91,232.154 329.314,231.777 328.988,231.471C328.934,231.42 328.888,231.373 328.854,231.328C328.835,231.304 328.811,231.263 328.811,231.263C328.795,231.098 328.652,230.973 328.485,230.98C328.312,230.988 328.178,231.135 328.186,231.308C328.19,231.448 328.269,231.631 328.441,231.827C328.681,232.1 329.132,232.444 329.676,232.803C330.45,233.313 331.416,233.858 332.183,234.273C333.123,235.016 336.45,237.714 338.788,240.46L337.549,240.559L336.558,240.012C336.483,239.969 336.387,239.995 336.344,240.07C336.301,240.145 336.327,240.241 336.402,240.284L337.421,240.897C337.451,240.914 337.486,240.922 337.521,240.92L339.114,240.851C339.678,241.538 340.198,242.246 340.64,242.958L340.296,242.932C340.284,242.917 340.269,242.903 340.252,242.891L338.77,241.914C338.699,241.864 338.602,241.881 338.552,241.952C338.502,242.023 338.519,242.121 338.59,242.17L339.536,242.876L338.449,242.795C338.407,242.791 338.366,242.803 338.333,242.828L337.709,243.315C337.64,243.368 337.627,243.466 337.679,243.535C337.731,243.604 337.83,243.617 337.899,243.565L338.482,243.135L340.893,243.381C341.088,243.721 341.264,244.062 341.417,244.401L340.143,245.194L338.542,245.899C338.462,245.933 338.425,246.025 338.459,246.105C338.492,246.184 338.584,246.222 338.664,246.188L340.294,245.524L340.452,246.158L339.862,247.162C339.843,247.193 339.834,247.229 339.837,247.265L339.92,248.19C339.926,248.276 340.001,248.341 340.088,248.334C340.174,248.328 340.239,248.253 340.233,248.167L340.184,247.298L340.824,246.289C340.851,246.246 340.859,246.194 340.848,246.145L340.671,245.314C340.67,245.311 340.67,245.309 340.669,245.307L341.576,244.777C342.096,246.078 342.17,247.748 341.657,248.858C341.172,249.907 339.117,250.304 339.117,250.304C339.117,250.304 333.053,245.246 331.398,244.284C329.744,243.322 325.022,240.351 318.621,238.473C312.22,236.595 305.353,234.747 291.08,235.747C276.806,236.746 264.96,244.942 256.14,252.134C247.319,259.327 238.547,279.641 238.547,279.641L223.225,283.191L245.559,230.733C245.559,230.733 296.312,219.387 320.904,212.372C350.779,203.85 424.808,179.602 424.808,179.602L334.658,219.709L354.52,245.181ZM336.543,242.242C336.488,242.242 336.443,242.286 336.443,242.342C336.443,242.397 336.488,242.442 336.543,242.442C336.598,242.442 336.643,242.397 336.643,242.342C336.643,242.286 336.598,242.242 336.543,242.242ZM335.407,240.47C335.352,240.47 335.307,240.515 335.307,240.57C335.307,240.625 335.352,240.67 335.407,240.67C335.462,240.67 335.507,240.625 335.507,240.57C335.507,240.515 335.462,240.47 335.407,240.47ZM340.755,238.682C340.7,238.682 340.655,238.727 340.655,238.782C340.655,238.838 340.7,238.882 340.755,238.882C340.81,238.882 340.855,238.838 340.855,238.782C340.855,238.727 340.81,238.682 340.755,238.682ZM342.018,239.682C341.963,239.682 341.918,239.726 341.918,239.782C341.918,239.837 341.963,239.882 342.018,239.882C342.073,239.882 342.118,239.837 342.118,239.782C342.118,239.726 342.073,239.682 342.018,239.682ZM341.755,239.098C341.7,239.098 341.655,239.143 341.655,239.198C341.655,239.253 341.7,239.298 341.755,239.298C341.81,239.298 341.855,239.253 341.855,239.198C341.855,239.143 341.81,239.098 341.755,239.098ZM329.271,229.205L327.982,229.422C327.896,229.433 327.835,229.511 327.846,229.597C327.857,229.683 327.936,229.743 328.022,229.732L329.324,229.618C329.438,229.603 329.519,229.499 329.504,229.385C329.49,229.271 329.385,229.19 329.271,229.205ZM338.451,242.363C338.396,242.363 338.351,242.408 338.351,242.463C338.351,242.518 338.396,242.563 338.451,242.563C338.506,242.563 338.551,242.518 338.551,242.463C338.551,242.408 338.506,242.363 338.451,242.363ZM338.337,242.12C338.282,242.12 338.237,242.164 338.237,242.22C338.237,242.275 338.282,242.32 338.337,242.32C338.392,242.32 338.437,242.275 338.437,242.22C338.437,242.164 338.392,242.12 338.337,242.12ZM338.494,241.693C338.438,241.693 338.394,241.738 338.394,241.793C338.394,241.848 338.438,241.893 338.494,241.893C338.549,241.893 338.594,241.848 338.594,241.793C338.594,241.738 338.549,241.693 338.494,241.693ZM330.797,231.27C330.687,231.27 330.597,231.36 330.597,231.47C330.597,231.58 330.687,231.67 330.797,231.67C330.907,231.67 330.997,231.58 330.997,231.47C330.997,231.36 330.907,231.27 330.797,231.27ZM327.835,231.644C327.724,231.644 327.635,231.733 327.635,231.844C327.635,231.954 327.724,232.044 327.835,232.044C327.945,232.044 328.035,231.954 328.035,231.844C328.035,231.733 327.945,231.644 327.835,231.644ZM328.58,232.929C328.47,232.929 328.38,233.019 328.38,233.129C328.38,233.24 328.47,233.329 328.58,233.329C328.691,233.329 328.78,233.24 328.78,233.129C328.78,233.019 328.691,232.929 328.58,232.929ZM337.22,244.451C337.11,244.451 337.02,244.541 337.02,244.651C337.02,244.762 337.11,244.851 337.22,244.851C337.331,244.851 337.42,244.762 337.42,244.651C337.42,244.541 337.331,244.451 337.22,244.451ZM345.006,243.055C344.895,243.055 344.806,243.145 344.806,243.255C344.806,243.365 344.895,243.455 345.006,243.455C345.116,243.455 345.206,243.365 345.206,243.255C345.206,243.145 345.116,243.055 345.006,243.055ZM345.089,240.987C344.978,240.987 344.889,241.076 344.889,241.187C344.889,241.297 344.978,241.387 345.089,241.387C345.199,241.387 345.289,241.297 345.289,241.187C345.289,241.076 345.199,240.987 345.089,240.987ZM343.257,239.69C343.147,239.69 343.057,239.78 343.057,239.89C343.057,240.001 343.147,240.09 343.257,240.09C343.367,240.09 343.457,240.001 343.457,239.89C343.457,239.78 343.367,239.69 343.257,239.69ZM339.547,236.585C339.436,236.585 339.347,236.675 339.347,236.785C339.347,236.896 339.436,236.985 339.547,236.985C339.657,236.985 339.747,236.896 339.747,236.785C339.747,236.675 339.657,236.585 339.547,236.585ZM336.982,231.619C336.872,231.619 336.782,231.709 336.782,231.819C336.782,231.929 336.872,232.019 336.982,232.019C337.093,232.019 337.182,231.929 337.182,231.819C337.182,231.709 337.093,231.619 336.982,231.619ZM335.336,232.001C335.226,232.001 335.136,232.091 335.136,232.201C335.136,232.312 335.226,232.401 335.336,232.401C335.446,232.401 335.536,232.312 335.536,232.201C335.536,232.091 335.446,232.001 335.336,232.001ZM333.755,233.011C333.644,233.011 333.555,233.101 333.555,233.211C333.555,233.321 333.644,233.411 333.755,233.411C333.865,233.411 333.955,233.321 333.955,233.211C333.955,233.101 333.865,233.011 333.755,233.011ZM337.871,235.709C337.816,235.709 337.771,235.754 337.771,235.809C337.771,235.864 337.816,235.909 337.871,235.909C337.926,235.909 337.971,235.864 337.971,235.809C337.971,235.754 337.926,235.709 337.871,235.709ZM339.307,235.759C339.252,235.759 339.207,235.803 339.207,235.859C339.207,235.914 339.252,235.959 339.307,235.959C339.363,235.959 339.407,235.914 339.407,235.859C339.407,235.803 339.363,235.759 339.307,235.759ZM341.246,236.674C341.191,236.674 341.146,236.719 341.146,236.774C341.146,236.829 341.191,236.874 341.246,236.874C341.302,236.874 341.346,236.829 341.346,236.774C341.346,236.719 341.302,236.674 341.246,236.674ZM347.131,242.048C347.076,242.048 347.031,242.093 347.031,242.148C347.031,242.203 347.076,242.248 347.131,242.248C347.186,242.248 347.231,242.203 347.231,242.148C347.231,242.093 347.186,242.048 347.131,242.048ZM336.352,240.743C336.297,240.743 336.252,240.788 336.252,240.843C336.252,240.899 336.297,240.943 336.352,240.943C336.408,240.943 336.452,240.899 336.452,240.843C336.452,240.788 336.408,240.743 336.352,240.743ZM337.545,240.101C337.49,240.101 337.445,240.146 337.445,240.201C337.445,240.256 337.49,240.301 337.545,240.301C337.601,240.301 337.645,240.256 337.645,240.201C337.645,240.146 337.601,240.101 337.545,240.101ZM336.31,239.51C336.254,239.51 336.21,239.555 336.21,239.61C336.21,239.666 336.254,239.71 336.31,239.71C336.365,239.71 336.41,239.666 336.41,239.61C336.41,239.555 336.365,239.51 336.31,239.51ZM337.548,241.981C337.493,241.981 337.448,242.025 337.448,242.081C337.448,242.136 337.493,242.181 337.548,242.181C337.604,242.181 337.648,242.136 337.648,242.081C337.648,242.025 337.604,241.981 337.548,241.981ZM337.521,239.324C337.466,239.324 337.421,239.369 337.421,239.424C337.421,239.48 337.466,239.524 337.521,239.524C337.576,239.524 337.621,239.48 337.621,239.424C337.621,239.369 337.576,239.324 337.521,239.324ZM335.349,234.337C335.294,234.337 335.249,234.382 335.249,234.437C335.249,234.492 335.294,234.537 335.349,234.537C335.404,234.537 335.449,234.492 335.449,234.437C335.449,234.382 335.404,234.337 335.349,234.337ZM336.604,234.089C336.549,234.089 336.504,234.134 336.504,234.189C336.504,234.244 336.549,234.289 336.604,234.289C336.66,234.289 336.704,234.244 336.704,234.189C336.704,234.134 336.66,234.089 336.604,234.089ZM327.484,228.701C327.484,228.701 326.884,228.717 326.47,228.926C326.197,229.064 326.002,229.278 326.012,229.587C326.022,229.855 326.183,230.111 326.41,230.323C326.799,230.687 327.363,230.93 327.363,230.93C327.442,230.965 327.534,230.929 327.569,230.85C327.605,230.771 327.569,230.678 327.49,230.643C327.49,230.643 326.99,230.412 326.65,230.074C326.502,229.927 326.381,229.761 326.38,229.58C326.38,229.426 326.501,229.339 326.639,229.275C326.988,229.111 327.489,229.117 327.489,229.117C327.604,229.116 327.696,229.022 327.695,228.907C327.694,228.792 327.599,228.7 327.484,228.701ZM336.152,238.46C336.097,238.46 336.052,238.504 336.052,238.56C336.052,238.615 336.097,238.66 336.152,238.66C336.207,238.66 336.252,238.615 336.252,238.56C336.252,238.504 336.207,238.46 336.152,238.46ZM334.908,238.29C334.853,238.29 334.808,238.335 334.808,238.39C334.808,238.445 334.853,238.49 334.908,238.49C334.964,238.49 335.008,238.445 335.008,238.39C335.008,238.335 334.964,238.29 334.908,238.29ZM333.91,236.822C333.855,236.822 333.81,236.867 333.81,236.922C333.81,236.978 333.855,237.022 333.91,237.022C333.965,237.022 334.01,236.978 334.01,236.922C334.01,236.867 333.965,236.822 333.91,236.822ZM333.473,236.018C333.418,236.018 333.373,236.063 333.373,236.118C333.373,236.173 333.418,236.218 333.473,236.218C333.528,236.218 333.573,236.173 333.573,236.118C333.573,236.063 333.528,236.018 333.473,236.018ZM334.671,240.084C334.615,240.084 334.571,240.129 334.571,240.184C334.571,240.239 334.615,240.284 334.671,240.284C334.726,240.284 334.771,240.239 334.771,240.184C334.771,240.129 334.726,240.084 334.671,240.084ZM330.8,230.289L329.422,230.34C329.335,230.34 329.265,230.41 329.265,230.497C329.265,230.583 329.335,230.654 329.422,230.654L330.8,230.705C330.915,230.705 331.008,230.612 331.008,230.497C331.008,230.382 330.915,230.289 330.8,230.289ZM337.306,241.158C337.196,241.158 337.106,241.248 337.106,241.358C337.106,241.468 337.196,241.558 337.306,241.558C337.417,241.558 337.506,241.468 337.506,241.358C337.506,241.248 337.417,241.158 337.306,241.158ZM339.896,243.712C339.786,243.712 339.696,243.802 339.696,243.912C339.696,244.022 339.786,244.112 339.896,244.112C340.007,244.112 340.096,244.022 340.096,243.912C340.096,243.802 340.007,243.712 339.896,243.712ZM338.689,244.133C338.579,244.133 338.489,244.223 338.489,244.333C338.489,244.444 338.579,244.533 338.689,244.533C338.799,244.533 338.889,244.444 338.889,244.333C338.889,244.223 338.799,244.133 338.689,244.133ZM334.755,236.979C334.645,236.979 334.555,237.069 334.555,237.179C334.555,237.29 334.645,237.379 334.755,237.379C334.865,237.379 334.955,237.29 334.955,237.179C334.955,237.069 334.865,236.979 334.755,236.979ZM331.189,234.512C331.079,234.512 330.989,234.602 330.989,234.712C330.989,234.823 331.079,234.912 331.189,234.912C331.3,234.912 331.389,234.823 331.389,234.712C331.389,234.602 331.3,234.512 331.189,234.512ZM331.569,230.045C331.458,230.045 331.369,230.135 331.369,230.245C331.369,230.356 331.458,230.445 331.569,230.445C331.679,230.445 331.769,230.356 331.769,230.245C331.769,230.135 331.679,230.045 331.569,230.045ZM334.195,238.749C334.14,238.749 334.095,238.794 334.095,238.849C334.095,238.904 334.14,238.949 334.195,238.949C334.25,238.949 334.295,238.904 334.295,238.849C334.295,238.794 334.25,238.749 334.195,238.749ZM348.252,245.998C348.142,245.998 348.052,246.087 348.052,246.198C348.052,246.308 348.142,246.398 348.252,246.398C348.363,246.398 348.452,246.308 348.452,246.198C348.452,246.087 348.363,245.998 348.252,245.998ZM333.328,237.032C333.273,237.032 333.228,237.077 333.228,237.132C333.228,237.187 333.273,237.232 333.328,237.232C333.383,237.232 333.428,237.187 333.428,237.132C333.428,237.077 333.383,237.032 333.328,237.032ZM332.345,235.623C332.29,235.623 332.245,235.668 332.245,235.723C332.245,235.778 332.29,235.823 332.345,235.823C332.4,235.823 332.445,235.778 332.445,235.723C332.445,235.668 332.4,235.623 332.345,235.623ZM330.397,233.564C330.342,233.564 330.297,233.609 330.297,233.664C330.297,233.72 330.342,233.764 330.397,233.764C330.452,233.764 330.497,233.72 330.497,233.664C330.497,233.609 330.452,233.564 330.397,233.564ZM330.366,231.686C330.311,231.686 330.266,231.73 330.266,231.786C330.266,231.841 330.311,231.886 330.366,231.886C330.421,231.886 330.466,231.841 330.466,231.786C330.466,231.73 330.421,231.686 330.366,231.686ZM332.067,232.478C332.012,232.478 331.967,232.522 331.967,232.578C331.967,232.633 332.012,232.678 332.067,232.678C332.122,232.678 332.167,232.633 332.167,232.578C332.167,232.522 332.122,232.478 332.067,232.478ZM333.003,231.076C332.948,231.076 332.903,231.121 332.903,231.176C332.903,231.231 332.948,231.276 333.003,231.276C333.058,231.276 333.103,231.231 333.103,231.176C333.103,231.121 333.058,231.076 333.003,231.076ZM334.798,231.686C334.743,231.686 334.698,231.73 334.698,231.786C334.698,231.841 334.743,231.886 334.798,231.886C334.853,231.886 334.898,231.841 334.898,231.786C334.898,231.73 334.853,231.686 334.798,231.686ZM367.337,293.256C367.697,293.256 367.989,293.546 367.989,293.902C367.989,294.259 367.697,294.549 367.337,294.549C366.978,294.549 366.686,294.259 366.686,293.902C366.686,293.546 366.978,293.256 367.337,293.256ZM367.986,295.428C368.262,295.428 368.486,295.651 368.486,295.925C368.486,296.199 368.262,296.421 367.986,296.421C367.71,296.421 367.486,296.199 367.486,295.925C367.486,295.651 367.71,295.428 367.986,295.428ZM366.07,294.325C366.208,294.325 366.32,294.436 366.32,294.573C366.32,294.71 366.208,294.821 366.07,294.821C365.932,294.821 365.82,294.71 365.82,294.573C365.82,294.436 365.932,294.325 366.07,294.325ZM366.075,295.844C366.24,295.844 366.375,295.978 366.375,296.142C366.375,296.306 366.24,296.44 366.075,296.44C365.909,296.44 365.775,296.306 365.775,296.142C365.775,295.978 365.909,295.844 366.075,295.844ZM367.955,298.268C368.175,298.268 368.355,298.446 368.355,298.665C368.355,298.885 368.175,299.062 367.955,299.062C367.734,299.062 367.555,298.885 367.555,298.665C367.555,298.446 367.734,298.268 367.955,298.268ZM368.294,299.939C368.57,299.939 368.794,300.161 368.794,300.435C368.794,300.709 368.57,300.931 368.294,300.931C368.018,300.931 367.794,300.709 367.794,300.435C367.794,300.161 368.018,299.939 368.294,299.939ZM365.802,297.94C365.885,297.94 365.952,298.007 365.952,298.089C365.952,298.171 365.885,298.238 365.802,298.238C365.719,298.238 365.652,298.171 365.652,298.089C365.652,298.007 365.719,297.94 365.802,297.94ZM367.072,297.541C367.183,297.541 367.272,297.63 367.272,297.739C367.272,297.849 367.183,297.938 367.072,297.938C366.962,297.938 366.872,297.849 366.872,297.739C366.872,297.63 366.962,297.541 367.072,297.541ZM364.919,296.968C365.029,296.968 365.119,297.057 365.119,297.166C365.119,297.276 365.029,297.365 364.919,297.365C364.809,297.365 364.719,297.276 364.719,297.166C364.719,297.057 364.809,296.968 364.919,296.968ZM363.176,295.013C363.286,295.013 363.376,295.102 363.376,295.212C363.376,295.321 363.286,295.41 363.176,295.41C363.065,295.41 362.976,295.321 362.976,295.212C362.976,295.102 363.065,295.013 363.176,295.013ZM364.545,294.844C364.711,294.844 364.845,294.977 364.845,295.142C364.845,295.306 364.711,295.439 364.545,295.439C364.38,295.439 364.245,295.306 364.245,295.142C364.245,294.977 364.38,294.844 364.545,294.844ZM363.832,296.331C363.86,296.331 363.882,296.354 363.882,296.381C363.882,296.408 363.86,296.431 363.832,296.431C363.805,296.431 363.782,296.408 363.782,296.381C363.782,296.354 363.805,296.331 363.832,296.331ZM367.564,291.247C367.752,291.244 368.265,290.916 368.419,290.796C368.662,290.607 368.927,290.556 369.216,290.658C369.335,290.7 369.549,290.791 369.703,291.072C369.762,291.181 369.866,291.44 369.955,291.817C370.084,292.373 370.241,293.242 370.357,294.167C370.529,295.542 370.62,297.019 370.559,297.748C370.559,297.972 370.378,298.153 370.154,298.153C369.93,298.153 369.749,297.972 369.749,297.748C369.691,297.057 369.332,295.702 368.994,294.432C368.834,293.831 368.675,293.254 368.539,292.784C368.301,292.836 367.982,292.868 367.549,292.854C367.095,292.826 366.357,293.082 365.582,293.378C364.017,293.976 362.361,294.79 362.361,294.79C362.17,294.906 361.92,294.845 361.804,294.654C361.688,294.463 361.748,294.214 361.939,294.098C361.939,294.098 363.889,292.678 365.569,291.857C366.34,291.481 367.074,291.266 367.564,291.247ZM245.499,277.638C254.063,255.602 275.569,239.956 300.718,239.956C313.761,239.956 325.824,244.165 335.61,251.29C333.032,252.025 329.876,252.933 326.281,253.973C318.456,248.976 309.217,246.088 299.324,246.088C279.242,246.088 261.853,257.99 253.522,275.276C250.72,276.101 248.034,276.892 245.499,277.638ZM359.251,293.843C359.268,294.064 364.875,323.719 348.341,342.209C330.29,362.393 313.979,366.358 297.632,366.326C276.693,366.285 260.257,353.739 260.257,353.739C260.257,353.739 272.31,366.917 282.991,369.479C295.851,372.562 303.755,371.622 289.713,373.654C273.91,375.942 263.406,365.044 258.185,359.523C252.963,354.002 238.234,334.97 238.234,334.97C238.234,334.97 255.413,329.388 257.724,328.642C266.981,341.948 282.17,350.633 299.324,350.633C305.075,350.633 310.604,349.199 315.763,347.4C322.254,344.528 328.113,340.229 331.786,335.927C340.479,325.745 347.08,313.195 345.866,298.843C345.866,298.843 356.538,294.784 359.251,293.843ZM156.129,417.801C156.129,417.801 253.743,378.869 253.722,372.749C253.717,371.424 227.447,337.562 227.447,337.562L235.126,335.375C235.126,335.375 268.376,379.111 271.338,379.589C274.301,380.066 345.302,366.431 348.689,362.391C352.075,358.352 376,297.383 375.731,294.508C375.463,291.633 373.155,290.626 372.852,289.678C372.549,288.729 374.338,288.255 374.986,288.129C375.634,288.003 387.221,283.999 387.678,284.295C388.134,284.592 386.026,289.7 386.026,289.7C386.026,289.7 354.073,367.462 353.112,368.034C348.192,370.964 278.283,385.631 271.714,386.806C257.834,389.287 161.329,415.305 156.956,418.225C156.396,418.598 156.129,417.801 156.129,417.801Z'
        />
      </g>
      <g transform='matrix(1.7926,0,0,1.7926,-247.267,-321.955)'>
        <path
          className='fill-primary'
          d='M467.493,254.665C467.328,254.803 457.741,262.788 450.026,265.675C442.243,268.586 435.869,271.482 420.982,267.271L420.891,267.245C415.497,264.721 411.77,261.137 409.225,257.151C402.55,246.696 403.944,233.592 404.484,230.035C406.558,227.295 407.632,224.791 410.615,222.846C415.402,219.725 419.151,218.654 431.212,217.446C443.272,216.238 455.393,219.964 456.301,221.883C457.209,223.803 458.533,229.611 456.071,232.39C453.608,235.168 427.698,238.693 426.683,240.261C425.423,242.205 427.963,248.577 434.177,252.692C440.178,256.667 463.289,247.94 465.651,247.647C468.013,247.354 473.741,250.112 472.462,255.278C471.184,260.443 459.176,268.994 451.612,273.272C444.047,277.55 434.194,279.002 424.802,278.419C415.409,277.836 410.324,271.853 393.664,272.986C377.004,274.119 244.219,319.017 232.213,323.857C220.206,328.698 222.754,326.842 204.858,344.25C186.962,361.658 168.675,359.144 156.427,357.102C144.179,355.059 136.023,345.539 138.327,340.106C140.631,334.672 161.933,334.852 169.062,333.373C176.191,331.893 177.18,326.99 177.761,324.836C178.342,322.682 176.403,312.578 176.403,312.578L175.542,302.254C175.542,302.254 145.391,306.017 141.295,312.448C140.862,313.129 140.795,314.683 141.712,313.857C147.877,308.309 166.139,306.382 170.182,305.94C174.224,305.497 172.58,306.892 172.58,306.892C172.58,306.892 141.503,311.492 145.949,313.436C149.449,314.967 171.399,311.058 173.739,311.102C175.258,311.13 176.314,312.362 176.403,312.578C176.403,312.578 149.351,316.756 144.972,316.323C140.592,315.89 137.218,309.283 141.809,305.058C146.4,300.832 162.853,288.289 180.392,286.668C197.931,285.046 199.393,292.672 220.618,291.646C241.843,290.62 376.488,245.969 380.912,244.346C385.337,242.724 392.007,239.857 398.982,235.192C400.026,234.493 400.912,233.797 401.678,233.108C401.508,235.738 401.478,239.312 402.006,243.246C401.947,243.231 401.885,243.224 401.82,243.227C401.243,243.226 400.477,243.515 399.727,243.91C398.977,244.305 398.242,244.806 397.77,245.146C397.417,244.991 396.997,245.001 396.638,245.209C394.362,246.534 342.368,263.741 296.833,278.181C264.407,288.465 235.256,297.346 229.656,298.046C226.077,298.493 222.902,298.645 219.953,298.654C211.778,298.678 205.31,297.626 196.883,298.622C192.077,299.19 189.22,300.275 187.512,301.343C184.494,303.231 184.655,305.231 184.655,305.231C184.656,305.257 184.657,305.282 184.659,305.307C184.669,306.139 184.768,313.142 185.367,317.206C185.529,318.302 185.736,319.2 185.971,319.755C186.164,320.21 186.413,320.503 186.638,320.663C187.087,320.981 187.744,321.159 188.651,321.166C190.087,321.178 192.357,320.774 195.594,320.533C196.739,321.886 197.565,324.857 197.805,331.186C198.059,337.884 193.43,341.841 189.937,344.124C186.444,346.407 181.638,349.399 165.771,348.047C149.904,346.695 141.734,341.669 141.734,341.669C160.74,354.15 182.653,349.007 181.668,349.336C161.697,356.012 141.786,347.586 142.348,347.869C188.298,371.079 206.95,337.628 207.686,335.658C208.423,333.688 205.395,332.38 206.586,331.5C210.096,328.906 211.185,324.181 211.185,324.181C211.185,324.181 211.142,322.926 211.005,321.914C211.536,321.874 212.144,321.797 212.848,321.681C214.297,321.443 216.179,321.038 218.691,320.458C219.146,320.353 219.55,320.279 219.878,320.228C219.928,320.283 219.976,320.327 220.016,320.361C220.195,320.514 220.565,320.735 221.09,320.582C221.271,320.529 221.564,320.358 221.797,320.152C222.037,320.049 222.367,319.911 222.698,319.786C225.103,318.874 230.188,317.172 237.174,314.91C270.793,304.021 348.281,280.208 383.441,268.985C391.242,266.495 396.966,264.622 399.68,263.644C400.566,263.324 401.161,263.085 401.442,262.945C401.87,262.733 402.078,262.495 402.166,262.384C402.734,261.66 402.607,260.611 401.883,260.044C401.737,259.929 401.577,259.843 401.411,259.784C400.885,258.496 400.449,256.975 400.087,255.428C399.211,251.689 398.781,247.792 398.656,246.522C399.05,246.19 399.742,245.634 400.459,245.193C400.962,244.883 401.463,244.604 401.865,244.577C401.984,244.573 402.094,244.538 402.19,244.481C402.925,249.013 404.433,253.928 407.322,258.376C408.933,260.856 412.013,264.058 414.363,265.962C416.445,267.651 418.737,268.72 421.419,269.804C426.161,272.004 432.945,274.211 440.375,273.552C442.651,273.35 425.694,275.67 419.805,271.664C418.013,270.445 423.978,277.913 440.717,275.026C457.159,272.19 471.699,255.759 469.513,251.971C469.093,251.242 469.056,251.348 468.898,253.077C468.671,255.572 467.783,256.877 467.665,256.06C467.49,254.843 467.488,254.684 467.493,254.665ZM426.22,239.369C426.255,240.592 426.319,241.436 426.319,241.436L426.22,239.369ZM426.22,239.369C427.965,237.096 453.652,232.264 454.403,230.776C454.821,229.95 455.119,224.464 454.464,224.173C453.81,223.882 429.552,228.97 427.587,230.594C426.216,231.726 426.14,236.551 426.22,239.369ZM209.351,321.831C209.521,321.892 209.733,321.933 210.016,321.945C209.979,322.093 209.942,322.256 209.903,322.435C208.06,330.895 200.415,331.496 200.415,331.496C200.415,331.496 199.391,324.914 200.022,325.024C203.729,325.672 202.861,323.642 203.268,323.557C204.652,323.269 203.731,321.793 204.999,321.658C206.141,321.537 208.831,321.781 209.351,321.831ZM206.517,336.128C205.63,340.004 199.607,339.947 200.126,337.405C201.256,331.873 206.517,336.128 206.517,336.128ZM226.482,300.4L216.037,303.633L215.829,300.57C217.166,300.619 218.535,300.652 219.956,300.652C222.006,300.651 224.162,300.584 226.482,300.4ZM397.135,247.705C397.375,249.5 397.865,252.695 398.652,255.779C399.025,257.242 399.466,258.68 399.977,259.938C399.953,259.953 399.93,259.968 399.907,259.984C399.753,260.049 399.237,260.266 398.718,260.458C396.309,261.351 391.228,263.054 384.251,265.334C350.66,276.312 273.316,300.59 238.259,312.133C230.486,314.693 224.787,316.628 222.091,317.657C221.778,317.777 221.502,317.886 221.265,317.983C221.206,317.97 221.143,317.959 221.077,317.951C220.697,317.901 219.857,317.948 218.196,318.342C216.635,318.712 215.324,319.012 214.211,319.244L213.234,300.457C213.545,300.472 213.857,300.487 214.17,300.501L215.797,317.375C215.823,317.697 216.107,317.938 216.429,317.911C216.752,317.885 216.993,317.601 216.966,317.279L216.153,305.326L233.955,299.223C244.387,296.695 269.754,289.01 297.499,280.294C340.92,266.653 390.166,250.484 397.135,247.705ZM211.569,300.375L212.968,319.489C211.775,319.709 210.874,319.823 210.159,319.825C210.152,319.825 210.145,319.825 210.137,319.825C210.078,319.765 209.998,319.688 209.931,319.631C209.835,319.55 209.72,319.464 209.575,319.377C209.202,319.155 208.566,318.889 207.293,318.688C206.215,318.518 204.611,318.377 202.184,318.316C200.508,318.275 198.982,318.303 197.598,318.37C193.717,318.558 190.974,319.055 189.203,319.158C188.622,319.192 188.186,319.231 187.894,319.106C188.186,318.93 189.195,318.35 190.668,317.795C191.552,317.462 192.599,317.137 193.759,316.914C195.456,316.587 197.125,316.426 198.711,316.357C201.646,316.23 204.293,316.411 206.304,316.43C207.455,316.44 209.03,316.873 210.199,316.435C210.967,316.147 211.605,315.53 211.86,314.23C211.9,314.047 211.784,313.867 211.601,313.827C211.418,313.787 211.238,313.904 211.198,314.087C210.971,315.043 210.519,315.512 209.941,315.704C208.841,316.069 207.398,315.561 206.33,315.51C204.305,315.413 201.644,315.13 198.682,315.144C197.033,315.152 195.294,315.253 193.519,315.525C192.26,315.717 191.119,316.024 190.154,316.345C188.895,316.765 187.935,317.215 187.403,317.486C187.326,317.062 187.256,316.591 187.193,316.086C187.475,315.907 188.475,315.305 189.944,314.751C190.825,314.419 191.87,314.102 193.031,313.903C194.446,313.661 196.201,313.536 197.998,313.472C200.805,313.373 203.708,313.421 205.597,313.413C207.421,313.405 208.41,313.645 209.205,313.44C209.86,313.27 210.416,312.842 211.132,311.761C211.238,311.607 211.2,311.395 211.046,311.289C210.892,311.183 210.681,311.222 210.574,311.376C209.972,312.212 209.552,312.577 209.027,312.691C208.266,312.856 207.34,312.566 205.611,312.506C203.714,312.439 200.801,312.277 197.979,312.266C196.117,312.259 194.295,312.321 192.821,312.514C191.551,312.681 190.401,312.981 189.43,313.304C188.395,313.649 187.562,314.025 187.003,314.305C186.994,314.213 186.986,314.121 186.978,314.028C186.957,313.786 186.937,313.541 186.917,313.296C186.971,313.284 187.024,313.263 187.074,313.234C187.074,313.234 190.427,311.222 197.399,310.641C200.359,310.394 203.962,310.404 208.229,310.93C208.46,310.96 208.672,310.796 208.702,310.565C208.731,310.334 208.567,310.122 208.336,310.093C202.882,309.371 198.49,309.49 195.122,309.923C190.426,310.526 187.698,311.743 186.837,312.179C186.808,311.74 186.782,311.302 186.758,310.872C187.281,310.67 191.486,309.082 197.048,308.231C200.293,307.734 204,307.486 207.707,307.912C207.938,307.94 208.148,307.775 208.176,307.544C208.204,307.312 208.038,307.102 207.807,307.074C204.022,306.604 200.231,306.82 196.909,307.298C191.867,308.023 187.908,309.351 186.702,309.784C186.689,309.515 186.678,309.251 186.667,308.995C187.342,308.74 191.67,307.166 197.668,306.369C201.062,305.917 204.989,305.714 209.092,306.139C209.417,306.174 209.709,305.94 209.744,305.616C209.78,305.292 209.545,304.999 209.221,304.964C205.018,304.478 200.988,304.638 197.501,305.059C192.129,305.708 188.047,306.981 186.609,307.471C186.602,307.258 186.596,307.056 186.591,306.866C187.3,306.584 191.364,305.051 197.875,304.284C201.213,303.89 205.187,303.697 209.68,303.974C210.052,303.999 210.374,303.718 210.4,303.346C210.425,302.974 210.143,302.651 209.772,302.626C205.186,302.283 201.123,302.428 197.708,302.784C192.017,303.379 188.114,304.568 186.573,305.102C186.658,304.757 187.127,303.537 189.606,302.383C191.228,301.629 193.611,300.948 197.108,300.545C202.401,299.934 206.912,300.141 211.569,300.375Z'
        />
      </g>
    </svg>
  )
}
