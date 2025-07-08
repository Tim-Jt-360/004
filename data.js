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
          "yaw": 1.4728920863872474,
          "pitch": 0.31503105813614063,
          "rotation": 0,
          "target": "1-kche"
        },
        {
          "yaw": -0.006363945551424166,
          "pitch": 0.3369320278433232,
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
          "yaw": -0.21672588522348413,
          "pitch": 0.16793515228283162,
          "rotation": 0,
          "target": "2-wohnen-essen"
        },
        {
          "yaw": -2.462695244028616,
          "pitch": 0.46475512407441855,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 2.1891204159709776,
          "pitch": 0.4542696991402053,
          "rotation": 0,
          "target": "3-korridor"
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
          "yaw": -2.302961385206398,
          "pitch": 0.296037285628433,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 2.3958917165036375,
          "pitch": 0.22892297276761653,
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
          "yaw": -2.4138473039242037,
          "pitch": 0.5314415643926456,
          "rotation": 0,
          "target": "1-kche"
        },
        {
          "yaw": -2.7289123917320683,
          "pitch": 0.3299004778443244,
          "rotation": 0,
          "target": "4-zimmer-1"
        },
        {
          "yaw": -0.2459815072370919,
          "pitch": 0.3525257215913804,
          "rotation": 0,
          "target": "5-zimmer-2"
        },
        {
          "yaw": -0.5169726240095045,
          "pitch": 0.12400572449862679,
          "rotation": 0,
          "target": "7-vorraum"
        },
        {
          "yaw": 0.22021633772078886,
          "pitch": 0.17642920674660445,
          "rotation": 0,
          "target": "6-bad"
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
          "yaw": -1.4979696420450903,
          "pitch": 0.22318491364955761,
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
          "yaw": -0.8795643087239533,
          "pitch": -0.015008091868129014,
          "rotation": 0,
          "target": "7-vorraum"
        },
        {
          "yaw": -0.9339099137632001,
          "pitch": 0.3882997385570164,
          "rotation": 0,
          "target": "3-korridor"
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
          "yaw": -1.2719862116646468,
          "pitch": 0.5707619446700072,
          "rotation": 0,
          "target": "3-korridor"
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
          "yaw": -0.23162550704532237,
          "pitch": 0.4380801260410152,
          "rotation": 0,
          "target": "8-zimmer-3"
        },
        {
          "yaw": -2.413631886114594,
          "pitch": 0.0912798444423899,
          "rotation": 0,
          "target": "3-korridor"
        },
        {
          "yaw": -2.870028670940858,
          "pitch": 0.3334437695550836,
          "rotation": 0,
          "target": "9-zimmer-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-zimmer-3",
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
          "yaw": -0.8575367746085742,
          "pitch": 0.3718553958820845,
          "rotation": 0,
          "target": "7-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-zimmer-4",
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
          "yaw": 0.8529195802175025,
          "pitch": 0.13279187936988635,
          "rotation": 0,
          "target": "7-vorraum"
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
