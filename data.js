var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre",
      "name": "Entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4545672620302579,
          "pitch": 0.30400466217875177,
          "rotation": 0,
          "target": "1-kche"
        },
        {
          "yaw": -0.005776467104803729,
          "pitch": 0.18900900900414008,
          "rotation": 0,
          "target": "2-wohnen-essen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4745347502055495,
          "pitch": 0.06751955483784045,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": -0.27888626010507167,
          "pitch": 0.2054035201921458,
          "rotation": 0,
          "target": "2-wohnen-essen"
        },
        {
          "yaw": 2.152785533465204,
          "pitch": 0.46358926234791653,
          "rotation": 0,
          "target": "3-korridor"
        },
        {
          "yaw": 2.2579385781199264,
          "pitch": 0.01834008239000795,
          "rotation": 0,
          "target": "4-zimmer-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wohnen-essen",
      "name": "Wohnen-Essen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3304433774297095,
          "pitch": 0.27148841034682647,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 2.4072694266155388,
          "pitch": 0.25415391382861685,
          "rotation": 0,
          "target": "1-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-korridor",
      "name": "Korridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.391272215693739,
          "pitch": 0.3836364126588059,
          "rotation": 0,
          "target": "1-kche"
        },
        {
          "yaw": -2.7210471201851636,
          "pitch": 0.19478921658675574,
          "rotation": 0,
          "target": "4-zimmer-1"
        },
        {
          "yaw": -0.20925187756493813,
          "pitch": 0.14720289709071466,
          "rotation": 0,
          "target": "5-zimmer-2"
        },
        {
          "yaw": 0.21713156525979294,
          "pitch": 0.07806252534915892,
          "rotation": 0,
          "target": "6-bad"
        },
        {
          "yaw": -0.5304713969796921,
          "pitch": 0.12116266424674116,
          "rotation": 0,
          "target": "7-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-zimmer-1",
      "name": "Zimmer 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6191216710628282,
          "pitch": 0.2535305785099915,
          "rotation": 0,
          "target": "3-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-zimmer-2",
      "name": "Zimmer 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9359257881935541,
          "pitch": 0.2865538335773685,
          "rotation": 0,
          "target": "3-korridor"
        },
        {
          "yaw": -0.8929310567687061,
          "pitch": -0.06185018018148192,
          "rotation": 0,
          "target": "7-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bad",
      "name": "Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.334998556118217,
          "pitch": 0.6031416403143197,
          "rotation": 0,
          "target": "3-korridor"
        },
        {
          "yaw": -1.0898138717984835,
          "pitch": 0.14340111947721113,
          "rotation": 0,
          "target": "7-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-vorraum",
      "name": "Vorraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2715279925263197,
          "pitch": 0.3994630936905086,
          "rotation": 0,
          "target": "3-korridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Zum Näfbach",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
