import { attackCaseType, CharacterType, pathWayType } from "../types/index";
export const assets: string[] = [
  "Limit/Alarm Switch Module",
  "Pressure Transmitters",
  "PID Controller",
  "Digital Temperature Indicator",
  "A3",
  "B1",
  "필수계통 RTU",
  "PLC",
  "RT",
  "Multi-function Relay With serial DNP"
];

export const pathWay: pathWayType = {
  PS: "Physical Access",
  WN: "Wired Network",
  "WN/D": "Wired Network - DNS",
  "WN/E": "Wired Network - Ethernet",
  PM: "Portable Media",
  "PM/D": "Portable Media - Device Connect",
  "PM/S": "Portable Media - Storage Connect",
  SC: "Supply Chain",
  SW: "Software",
  "SW/F": "Software - Firmware"
};

export const attackCase: attackCaseType = {
  PS: [
    [
      "유지보수 중 오염된 Maintenance가 연결되어 의도하지 않는 값으로  Configuration/Environment value 등 변경",
      "조작된 Configuration Value를 전송/safety components 환경 값 오인"
    ],
    [
      "유지보수 중 오염된 Maintenance가 연결되어 의도하지 않는 값으로 Configuration 등 변경",
      "의도하지 않은 Configuration Value로 변경"
    ],
    [
      "접속 권한을 가진 내부자가 의도적으로 잘못된 Configuration 등 변경",
      "의도하지 않은 Configuration Value로 변경"
    ],
    ["신뢰할 수 없는 기기 접근으로 저장소 데이터 탈취", "중요 데이터 유출"],
    ["정책을 위반한 내부자가 공유한 물리적 접근 보호 매커니즘을 통해 접근", ""]
  ],
  PM: [
    [
      "공급 중 공격코드가 포함된 Maintenance tool 통신 펌웨어 탑재하여 의도하지 않은 값으로 Configuration/Environment value 등 변경",
      "조작된 Configuration Value를 전송/safety components 환경 값 오인"
    ],
    [
      "공격자가 조작한 화면 이미지를 화면에 띄우도록 오염된 값을 전송하여 컨트롤러 뷰 조작 ",
      "부적절한 제어 행위 초래"
    ]
  ],
  SC: [
    [
      "접속 권한을 가진 내부자가 의도적으로 잘못된  Configuration/Environment value 등 변경",
      "의도하지 않은 Configuration Value로 변경/safety components 환경 값 오인"
    ],
    [
      "내부자의 접근으로 장비를 물리적 삭제(갈취)",
      "safety components 가동 및 시스템 정지"
    ],
    [
      "Disconnect power supply로 인한 전원 공급 차단",
      "비상전력망 가동 및 시스템 정지"
    ]
  ]
};

export const LASM: CharacterType[] = [
  [
    ["Firmware Code", [["Storage", "x", ["PM/D", "PM/S"]]]],
    [
      "HMI",
      [
        ["Local Integral", "x", ["PS"]],
        ["Remote", "x", ["PS"]],
        ["Maintenance tool connection", "가능", ["PS"]],
        ["Access Restriction", "x", ["PS"]]
      ]
    ],
    [
      "Configuration Setting",

      [
        ["Storage", "체계 벗어날 시 가능", ["PS"]],
        ["변경", "CDA 서비스 중단 시 가능", ["WN", "PM"]]
      ]
    ],
    [
      "Communication",
      [
        ["LAN (IEEE 802.3)", "x", ["WN/E"]],
        ["Serial Port (RS-232)", "x", ["WN/S"]]
      ]
    ],
    ["Audit/Event Log", [["All", "x", ["PS", "WN", "PM"]]]],
    [
      "Connector",
      [["Analog, Contact, Parse I/O Signal", "있을 수 있음", ["PS", "PM"]]]
    ],
    ["Interface", [["Console", "x", ["PS", "PM"]]]]
  ],
  [
    ["Port", [["All", "x", ["WN"]]]],
    [
      "HMI",
      [
        ["Software Access Enforcement", "x", ["WN"]],
        [
          "Configuration Setting 변경",
          "Local integral HMI를 통해 가능",
          ["WN"]
        ],
        ["Operational Parameter 변경", "x", ["WN"]],
        ["Multi-users & individual authentication", "x", ["WN"]]
      ]
    ],
    ["File system", [["Externally accessible file system", "x", ["SW"]]]],
    ["Data Extraction", [["USB/Memory Card Interface", "있음", ["PM"]]]],
    ["Firmware", [["Firmware Update", "x", ["SW/F"]]]],
    ["3rd party software", [["추가/삭제", "x", ["SW/F"]]]],
    ["Communication", [["통신기능", "x", ["WN", "WL"]]]],
    [
      "Audit/Event Log",
      [["Audit/Event Log 저장 기능", "x", ["PS", "WN", "PM"]]]
    ]
  ]
];

// export const PT: CharacterType[] = [
//   [
//     ["Program Code", ["Storage"]],
//     [
//       "HMI",
//       [
//         "Local Integral",
//         "Remote",
//         "Maintenance tool connection",
//         "Access Restriction"
//       ]
//     ],
//     ["Configuration Setting", ["Storage", "변경"]],
//     ["Communication", ["LAN (IEEE 802.3)", "Serial Port (RS-232)"]],
//     ["Audit/Event Log", ["All"]],
//     ["Connector", ["Analog, Contact, Parse I/O Signal"]],
//     ["Interface", ["Console"]]
//   ],
//   [
//     ["Port", ["All"]],
//     [
//       "HMI",
//       [
//         "Software Access Enforcement",
//         "Configuration Setting 변경",
//         "Operational Parameter 변경",
//         "Multi-users & individual authentication"
//       ]
//     ],
//     ["File system", ["Externally accessible file system"]],
//     ["Data Extraction", ["USB/Memory Card Interface"]],
//     ["Firmware", ["Firmware Update"]],
//     ["3rd party software", ["추가/삭제"]],
//     ["Communication", ["통신기능"]],
//     ["Audit/Event Log", ["Audit/Event Log 저장 기능"]]
//   ]
// ];

// export const ETC: CharacterType[] = [
//   [
//     ["Program Code", ["Storage"]],
//     ["Storage", ["Large Capacity"]],
//     [
//       "HMI",
//       [
//         "Local Integral",
//         "Built-in",
//         "Remote",
//         "Maintenance tool connection",
//         "Access Restriction"
//       ]
//     ],
//     ["Configuration Setting", ["Storage"]],
//     ["Communication", ["LAN (IEEE 802.3)", "Serial Port (RS-232)"]],
//     ["Audit/Event Log", ["All"]],
//     ["Connector", ["Analog, Contact, Parse I/O Signal"]],
//     ["Console", ["All"]],
//     ["Protect mechanism", ["Key, password"]]
//   ],
//   [
//     ["Port", ["All"]],
//     [
//       "HMI",
//       [
//         "Software Access Enforcement",
//         "Configuration Setting 변경",
//         "Operational Parameter 변경",
//         "Multi-users & individual authentication"
//       ]
//     ],
//     ["File system", ["Externally accessible file system"]],
//     ["Firmware", ["Firmware Update"]],
//     ["3rd party software", ["추가/삭제"]],
//     ["Communication", ["통신기능"]],
//     ["Audit/Event Log", ["Audit/Event Log 저장 기능"]]
//   ]
// ];
