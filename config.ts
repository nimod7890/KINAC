import { AttackCaseType, CharacterType, PathWayType } from "./types/index";
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
  "Multi-function Relay With serial DNP",
];

export const attackCase: AttackCaseType = {
  PS: [
    [
      "Changing configuration, environment values, etc. to unintended values due to a connection of contaminated Maintenance during maintenance",
      "Transmitting manipulated configuration values/ Misperceiving safety components environment values",
    ],
    [
      "Changing configuration, etc. to unintended values due to a connection of contaminated Maintenance during maintenance",
      "Changing to an unintended configuration value",
    ],
    [
      "An insider with access intentionally changing incorrect Configuration, Environment values, etc.",
      "Changing to an unintended configuration value/misperceiving safety components environment value",
    ],
    [
      "Stealing storage data by accessing with untrusted device",
      "Critical data leaking",
    ],
    [
      "Accessing through a physical access protection mechanism shared by the insider who violated the policy",
      "",
    ],
  ],
  PM: [
    [
      "Changing configuration, environment values to unintended values, etc. as a result of having maintenance tool communication firmware containing attack code during supply",
      "Transmitting manipulated configuration values/ Misperceiving safety components environment values",
    ],
    [
      "Manipulating a controller view by sending a tainted value to display an attacker-manipulated screen image",
      "Result in inadequate controls",
    ],
  ],
  SC: [
    [
      "An insider with access intentionally changing incorrect Configuration, Environment values, etc.",
      "Changing to an unintended configuration value/misperceiving safety components environment value",
    ],
    [
      "Physical removal of equipment with insider access (extortion)",
      "Starting up safety components and shutting down the system",
    ],
    [
      "Power supply disconnection",
      "Running emergency power grid and shutting down the system",
    ],
  ],
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
        ["Access Restriction", "x", ["PS"]],
      ],
    ],
    [
      "Configuration Setting",

      [
        ["Storage", "체계 벗어날 시 가능", ["PS"]],
        ["변경", "CDA 서비스 중단 시 가능", ["WN", "PM"]],
      ],
    ],
    [
      "Communication",
      [
        ["LAN (IEEE 802.3)", "x", ["WN/E"]],
        ["Serial Port (RS-232)", "x", ["WN/S"]],
      ],
    ],
    ["Audit/Event Log", [["All", "x", ["PS", "WN", "PM"]]]],
    [
      "Connector",
      [["Analog, Contact, Parse I/O Signal", "있을 수 있음", ["PS", "PM"]]],
    ],
    ["Interface", [["Console", "x", ["PS", "PM"]]]],
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
          ["WN"],
        ],
        ["Operational Parameter 변경", "x", ["WN"]],
        ["Multi-users & individual authentication", "x", ["WN"]],
      ],
    ],
    ["File system", [["Externally accessible file system", "x", ["SW"]]]],
    ["Data Extraction", [["USB/Memory Card Interface", "있음", ["PM"]]]],
    ["Firmware", [["Firmware Update", "x", ["SW/F"]]]],
    ["3rd party software", [["추가/삭제", "x", ["SW/F"]]]],
    ["Communication", [["통신기능", "x", ["WN", "WL"]]]],
    [
      "Audit/Event Log",
      [["Audit/Event Log 저장 기능", "x", ["PS", "WN", "PM"]]],
    ],
  ],
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
export const prefix =
  process.env.NODE_ENV === "production"
    ? "http://nimod7890.github.io/KINAC"
    : "";

export const pathWay: PathWayType = {
  PS: "Physical Access",
  WN: "Wired Network",
  "WN/D": "Wired Network - DNS",
  "WN/E": "Wired Network - Ethernet",
  PM: "Portable Media",
  "PM/D": "Portable Media - Device Connect",
  "PM/S": "Portable Media - Storage Connect",
  SC: "Supply Chain",
  SW: "Software",
  "SW/F": "Software - Firmware",
};
