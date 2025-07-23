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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06446897385754724,
          "pitch": 0.186370493782416,
          "rotation": 0,
          "target": "3-wohnen-essen"
        },
        {
          "yaw": 0.2456577441675627,
          "pitch": 0.07755235623417889,
          "rotation": 0,
          "target": "2-bad-1"
        },
        {
          "yaw": 1.441332082853009,
          "pitch": 0.2777409782456175,
          "rotation": 0,
          "target": "1-kche"
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18543951922957902,
          "pitch": 0.18464913725875398,
          "rotation": 0,
          "target": "3-wohnen-essen"
        },
        {
          "yaw": -2.5071732749615716,
          "pitch": 0.09487704566230448,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 2.218947453317048,
          "pitch": 0.4292739640439951,
          "rotation": 0,
          "target": "4-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bad-1",
      "name": "Bad 1",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.821267715021081,
          "pitch": 0.08879755279764723,
          "rotation": 0,
          "target": "0-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wohnen-essen",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.353835313810821,
          "pitch": 0.26890186906702773,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 2.42208712529974,
          "pitch": 0.20952824940045467,
          "rotation": 0,
          "target": "1-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-korridor",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.397689877544332,
          "pitch": 0.4746625990344988,
          "rotation": 0,
          "target": "1-kche"
        },
        {
          "yaw": -2.6563807819405643,
          "pitch": 0.1055271709828638,
          "rotation": 0,
          "target": "5-zimmer-1"
        },
        {
          "yaw": -0.18062725548456626,
          "pitch": 0.23654205117853877,
          "rotation": 0,
          "target": "6-zimmer-2"
        },
        {
          "yaw": 0.24670972171822925,
          "pitch": 0.0899378778537816,
          "rotation": 0,
          "target": "7-bad-2"
        },
        {
          "yaw": -0.546359278445177,
          "pitch": 0.006113128126758127,
          "rotation": 0,
          "target": "8-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-zimmer-1",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4996510516244541,
          "pitch": 0.23281243065175872,
          "rotation": 0,
          "target": "4-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-zimmer-2",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8624703734531831,
          "pitch": -0.11683382047422697,
          "rotation": 0,
          "target": "8-vorraum"
        },
        {
          "yaw": -0.9631893538668077,
          "pitch": 0.38382184872468983,
          "rotation": 0,
          "target": "4-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bad-2",
      "name": "Bad 2",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.407032172758388,
          "pitch": 0.0907234273966413,
          "rotation": 0,
          "target": "4-korridor"
        },
        {
          "yaw": -1.1400735097180537,
          "pitch": -0.003161201699910521,
          "rotation": 0,
          "target": "8-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-vorraum",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17303222108173344,
          "pitch": 0.24033397342055096,
          "rotation": 0,
          "target": "9-zimmer-3"
        },
        {
          "yaw": -2.867731263507366,
          "pitch": 0.004451939952424766,
          "rotation": 0,
          "target": "10-zimmer-4"
        },
        {
          "yaw": -2.084250737910782,
          "pitch": 0.7336706126211272,
          "rotation": 0,
          "target": "4-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-zimmer-3",
      "name": "Zimmer 3",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8719778274728718,
          "pitch": 0.21204636077827388,
          "rotation": 0,
          "target": "8-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-zimmer-4",
      "name": "Zimmer 4",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8565109688498165,
          "pitch": 0.29404769230799843,
          "rotation": 0,
          "target": "8-vorraum"
        }
      ],
      "infoHotspots": []
    }
  ],
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
