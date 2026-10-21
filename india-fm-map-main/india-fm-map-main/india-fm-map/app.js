
"use strict";

/*
 * India FM
 * Frontend-only implementation using HTML, CSS and JavaScript.
 *
 * Replace the demo stream URLs with verified regional radio streams
 * before presenting this as a real regional radio service.
 */

const STATES = [
    ["andhra-pradesh", "Andhra Pradesh", "IN-AP"],
    ["arunachal-pradesh", "Arunachal Pradesh", "IN-AR"],
    ["assam", "Assam", "IN-AS"],
    ["bihar", "Bihar", "IN-BR"],
    ["chhattisgarh", "Chhattisgarh", "IN-CT"],
    ["goa", "Goa", "IN-GA"],
    ["gujarat", "Gujarat", "IN-GJ"],
    ["haryana", "Haryana", "IN-HR"],
    ["himachal-pradesh", "Himachal Pradesh", "IN-HP"],
    ["jharkhand", "Jharkhand", "IN-JH"],
    ["karnataka", "Karnataka", "IN-KA"],
    ["kerala", "Kerala", "IN-KL"],
    ["madhya-pradesh", "Madhya Pradesh", "IN-MP"],
    ["maharashtra", "Maharashtra", "IN-MH"],
    ["manipur", "Manipur", "IN-MN"],
    ["meghalaya", "Meghalaya", "IN-ML"],
    ["mizoram", "Mizoram", "IN-MZ"],
    ["nagaland", "Nagaland", "IN-NL"],
    ["odisha", "Odisha", "IN-OR"],
    ["punjab", "Punjab", "IN-PB"],
    ["rajasthan", "Rajasthan", "IN-RJ"],
    ["sikkim", "Sikkim", "IN-SK"],
    ["tamil-nadu", "Tamil Nadu", "IN-TN"],
    ["telangana", "Telangana", "IN-TG"],
    ["tripura", "Tripura", "IN-TR"],
    ["uttar-pradesh", "Uttar Pradesh", "IN-UP"],
    ["uttarakhand", "Uttarakhand", "IN-UT"],
    ["west-bengal", "West Bengal", "IN-WB"],

    ["andaman-and-nicobar-islands", "Andaman and Nicobar Islands", "IN-AN"],
    ["chandigarh", "Chandigarh", "IN-CH"],
    ["dadra-and-nagar-haveli-and-daman-and-diu",
        "Dadra and Nagar Haveli and Daman and Diu", "IN-DH"],
    ["delhi", "Delhi", "IN-DL"],
    ["jammu-and-kashmir", "Jammu and Kashmir", "IN-JK"],
    ["ladakh", "Ladakh", "IN-LA"],
    ["lakshadweep", "Lakshadweep", "IN-LD"],
    ["puducherry", "Puducherry", "IN-PY"]
];

const DEMO_STREAMS = {
    // These are generic demonstration streams, NOT verified regional FM.
    karnataka: "https://listen.181fm.com/181-indie_128k.mp3",
    "tamil-nadu": "https://listen.181fm.com/181-power_128k.mp3"
};
const AKASHVANI_STATIONS = {
    "andhra-pradesh": [
                {
                    id: "Daaku Maharaj",
                    name: "Balakrishna",
                    description: "Local MP3",
                    streamUrl: "./audio/DaakuMaharaj-telugu.mp3"
                }
    ],

    "assam": [
        {
            id: "air-guwahati",
            name: "AIR Guwahati",
            description: "Akashvani Guwahati",
            streamUrl: ""
        }
    ],

    "bihar": [
        {
            id: "air-patna",
            name: "AIR Patna",
            description: "Akashvani Patna",
            streamUrl: ""
        }
    ],

    "chhattisgarh": [
        {
            id: "air-chhattisgarh",
            name: "AIR Chhattisgarh",
            description: "Akashvani Chhattisgarh",
            streamUrl: ""
            }
    ],

    "goa": [
        {
            id: "air-panaji",
            name: "AIR Mhadei Panaji",
            description: "Akashvani Goa",
            streamUrl: ""
        }
    ],

    "gujarat": [
        {
            id: "air-gujarati",
            name: "Akashvani Gujarati",
            description: "Gujarati Service",
            streamUrl: ""
        },
        {
            id: "air-ahmedabad",
            name: "Vividh Bharati Ahmedabad",
            description: "Vividh Bharati",
            streamUrl: ""
        }
    ],

    "haryana": [
        {
            id: "air-hisar",
            name: "AIR Hisar",
            description: "Akashvani Hisar",
            streamUrl: ""
        },
        {
            id: "air-rohtak",
            name: "AIR Rohtak",
            description: "Akashvani Rohtak",
            streamUrl: ""
        }
    ],

    "himachal-pradesh": [
        {
            id: "air-shimla",
            name: "AIR Shimla",
            description: "Akashvani Shimla",
            streamUrl: ""
        },
        {
            id: "air-shimla-fm",
            name: "AIR Shimla FM",
            description: "FM Channel",
            streamUrl: ""
        }
    ],

    "jharkhand": [
        {
            id: "air-ranchi",
            name: "AIR Ranchi",
            description: "Akashvani Ranchi",
            streamUrl: ""
        },
        {
            id: "fm-rainbow-ranchi",
            name: "FM Rainbow Ranchi",
            description: "FM Rainbow",
            streamUrl: ""
        }
    ],

    "karnataka": [

        {
            id: "kannadave",
            name: "Kannadave Nammamma",
            description: "Local MP3",
            streamUrl: "./audio/Kannadave-Nammamma.mp3"
        }

    ],

    "kerala": [
        {
            id: "kerala-kalayani",
            name: "Kerala",
            description: "Akashvani Kerala",
            streamUrl: "./audio/Kalyani-malayalam.mp3"
        }
    ],

    "madhya-pradesh": [
        {
            id: "air-bhopal",
            name: "AIR Madhya Pradesh",
            description: "Akashvani MP",
            streamUrl: ""
        },
        {
            id: "air-gwalior",
            name: "AIR Gwalior",
            description: "Akashvani Gwalior",
            streamUrl: ""
        }
    ],

    "maharashtra": [
        {
            id: "air-mumbai-asmita",
            name: "AIR Mumbai Asmita",
            description: "Mumbai Asmita",
            streamUrl: ""
        },
        {
            id: "fm-rainbow-mumbai",
            name: "FM Rainbow Mumbai",
            description: "FM Rainbow",
            streamUrl: ""
        },
        {
            id: "air-pune",
            name: "AIR Pune",
            description: "Akashvani Pune",
            streamUrl: ""
        },
        {
            id: "air-nagpur",
            name: "AIR Nagpur",
            description: "Akashvani Nagpur",
            streamUrl: ""
        }
    ],

    "odisha": [
        {
            id: "air-odisha",
            name: "AIR Odisha",
            description: "Akashvani Odisha",
            streamUrl: ""
        }
    ],

    "punjab": [
        {
            id: "air-jalandhar",
            name: "AIR Jalandhar",
            description: "Akashvani Punjab",
            streamUrl: ""
        }
    ],

    "rajasthan": [
        {
            id: "air-rajasthan",
            name: "AIR Rajasthan",
            description: "Akashvani Rajasthan",
            streamUrl: ""
        }
    ],

    "tamil-nadu": [
        {
            id: "Jailer-2",
            name: "Rajanikanth",
            description: "Local MP3",
            streamUrl: "./audio/jailer-tamil.mp3"
        }
    ],

    "telangana": [
        {
            id: "Daaku Maharaj",
            name: "Balakrishna",
            description: "Local MP3",
            streamUrl: "./audio/DaakuMaharaj-telugu.mp3"
        }
    ],

    "uttar-pradesh": [
        {
            id: "air-lucknow",
            name: "AIR Lucknow",
            description: "Akashvani Lucknow",
            streamUrl: ""
        },
        {
            id: "air-varanasi",
            name: "AIR Varanasi",
            description: "Akashvani Varanasi",
            streamUrl: ""
        }
    ],

    "west-bengal": [
        {
            id: "air-kolkata",
            name: "AIR Kolkata",
            description: "Akashvani Kolkata",
            streamUrl: ""
        },
        {
            id: "fm-rainbow-kolkata",
            name: "FM Rainbow Kolkata",
            description: "FM Rainbow",
            streamUrl: ""
        }
    ],

    "delhi": [
        {
            id: "fm-gold-delhi",
            name: "FM Gold Delhi",
            description: "FM Gold",
            streamUrl: ""
        },
        {
            id: "fm-rainbow-delhi",
            name: "FM Rainbow Delhi",
            description: "FM Rainbow",
            streamUrl: ""
        },
        {
            id: "vividh-bharati-delhi",
            name: "Vividh Bharati Delhi",
            description: "Vividh Bharati",
            streamUrl: ""
        }
    ]
};

const mapContainer = document.getElementById("mapContainer");
const mapLoading = document.getElementById("mapLoading");
const stateSelect = document.getElementById("stateSelect");
const selectedState = document.getElementById("selectedState");
const regionDescription = document.getElementById("regionDescription");
const stationList = document.getElementById("stationList");
const stationCount = document.getElementById("stationCount");
const audioPlayer = document.getElementById("audioPlayer");
const nowPlaying = document.getElementById("nowPlaying");
const playerStatus = document.getElementById("playerStatus");

const equalizer = document.querySelector(".equalizer");

let selectedStateSlug = "";
let activeStationId = "";
let currentMapElement = null;
let stationSequence = 0;

const stateBySlug = new Map(STATES.map(([slug, name, code]) => [
    slug,
    { slug, name, code }
]));

const stateByCode = new Map(STATES.map(([slug, name, code]) => [
    code.toLowerCase(),
    { slug, name, code }
]));

function normalize(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function setStatus(message, isError = false) {
    playerStatus.textContent = message;
    playerStatus.classList.toggle("error", isError);
}

function stopCurrentAudio() {
    audioPlayer.pause();
    audioPlayer.removeAttribute("src");
    audioPlayer.load();

    equalizer.classList.remove("playing");
    activeStationId = "";
}

function getStateFromValue(value) {
    const key = normalize(value);

    if (stateBySlug.has(key)) {
        return stateBySlug.get(key);
    }

    if (stateByCode.has(key)) {
        return stateByCode.get(key);
    }

    // Some map assets use IDs such as IN-KA or KA.
    const shortCode = key.match(/^in-([a-z]{2})$/);
    if (shortCode) {
        return stateByCode.get(`in-${shortCode[1]}`);
    }

    const aliases = {
        "tamilnadu": "tamil-nadu",
        "orissa": "odisha",
        "nct-of-delhi": "delhi",
        "national-capital-territory-of-delhi": "delhi",
        "jammu-kashmir": "jammu-and-kashmir",
        "andaman-nicobar": "andaman-and-nicobar-islands",
        "dadra-nagar-haveli-daman-diu":
            "dadra-and-nagar-haveli-and-daman-and-diu"
    };

    const alias = aliases[key];
    return alias ? stateBySlug.get(alias) : undefined;
}

function populateStateSelector() {
    STATES
        .slice()
        .sort((a, b) => a[1].localeCompare(b[1]))
        .forEach(([slug, name]) => {
            const option = document.createElement("option");
            option.value = slug;
            option.textContent = name;
            stateSelect.appendChild(option);
        });
}

function getStationsForState1(state) {
    const demoUrl = DEMO_STREAMS[state.slug];

    return [{
        id: `${state.slug}-station`,
        name: demoUrl
            ? `${state.name} demo stream`
            : `${state.name} radio station`,
        description: demoUrl
            ? "Demo stream · Not region-specific"
            : "Add a verified regional stream URL",
        streamUrl: demoUrl || ""
    }];
}
function getStationsForState(state) {
    return AKASHVANI_STATIONS[state.slug] || [];
}
function clearSelectedMapRegion() {
    if (currentMapElement) {
        currentMapElement.classList.remove("state-selected");
    }

    currentMapElement = null;
}

function selectState(slug, mapElement = null) {
    const state = stateBySlug.get(slug);
    if (!state) return;

    selectedStateSlug = slug;
    clearSelectedMapRegion();

    if (mapElement) {
        currentMapElement = mapElement;
        mapElement.classList.add("state-selected");
    }

    stateSelect.value = slug;
    selectedState.textContent = state.name;
    regionDescription.textContent =
        `Explore radio options for ${state.name}.`;

    stopCurrentAudio();
    nowPlaying.textContent = "Nothing playing";
    setStatus("Choose a station to begin.");

    renderStations(state);
}

function renderStations(state) {
    const stations = getStationsForState(state);

    stationCount.textContent =
        `${stations.length} station${stations.length === 1 ? "" : "s"}`;

    stationList.replaceChildren();

    stations.forEach(station => {
        const card = document.createElement("div");
        card.className = "station-card";

        const info = document.createElement("div");
        info.className = "station-info";

        const title = document.createElement("h4");
        title.textContent = station.name;

        const description = document.createElement("p");
        description.textContent = station.description;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "play-button";
        button.textContent = station.streamUrl ? "▶ Play" : "Unavailable";
        button.disabled = !station.streamUrl;
        button.setAttribute(
            "aria-label",
            station.streamUrl
                ? `Play ${station.name}`
                : `${station.name} has no configured stream`
        );

        button.addEventListener("click", () => playStation(station, card));

        info.append(title, description);
        card.append(info, button);
        stationList.appendChild(card);
    });
}

async function playStation(station, card) {
    if (!station.streamUrl) {
        setStatus("No stream URL is configured for this station.", true);
        return;
    }

    // Avoid accepting insecure HTTP streams on HTTPS-hosted websites.
    if (location.protocol === "https:" &&
        new URL(station.streamUrl).protocol !== "https:") {
        setStatus("This website requires an HTTPS audio stream.", true);
        return;
    }

    stopCurrentAudio();
    activeStationId = station.id;

    document.querySelectorAll(".station-card.active")
        .forEach(element => element.classList.remove("active"));

    card.classList.add("active");
    nowPlaying.textContent = station.name;
    setStatus("Connecting to radio…");

    audioPlayer.src = station.streamUrl;
    audioPlayer.load();

    try {
        await audioPlayer.play();
        setStatus("Connected. Enjoy listening!");
    } catch (error) {
        if (error.name === "NotAllowedError") {
            setStatus(
                "Playback was blocked. Press Play in the audio controls.",
                true
            );
        } else {
            setStatus(
                "Unable to start the stream. Check the URL or try another station.",
                true
            );
        }
    }
}

function getMapElementLabel(element) {
    const titleElement = element.querySelector("title");
    const parentTitle = element.parentElement?.querySelector(":scope > title");

    return [
        element.getAttribute("data-state"),
        element.getAttribute("data-name"),
        element.getAttribute("aria-label"),
        element.getAttribute("name"),
        element.id,
        titleElement?.textContent,
        parentTitle?.textContent
    ].filter(Boolean);
}

function makeMapElementInteractive(element, state) {
    element.setAttribute("role", "button");
    element.setAttribute("tabindex", "0");
    element.setAttribute("aria-label", state.name);

    element.addEventListener("click", () => {
        selectState(state.slug, element);
    });

    element.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectState(state.slug, element);
        }
    });
}

function attachMapInteractions(svg) {
    const candidates = svg.querySelectorAll(
        "path[id], polygon[id], [data-state], [data-name]"
    );

    let matchedRegions = 0;

    candidates.forEach(element => {
        const labels = getMapElementLabel(element);

        let matchedState;

        for (const label of labels) {
            matchedState = getStateFromValue(label);
            if (matchedState) break;
        }

        if (!matchedState) return;

        makeMapElementInteractive(element, matchedState);
        matchedRegions++;
    });

    if (matchedRegions === 0) {
        setStatus(
            "The SVG loaded, but state IDs could not be identified. " +
            "Use the selector or check the map's SVG IDs.",
            true
        );
    }

    mapLoading?.remove();
}

async function loadIndiaMap() {
    try {
        const response = await fetch("assets/india-states.svg");

        if (!response.ok) {
            throw new Error(`Map request failed: ${response.status}`);
        }

        const svgText = await response.text();

        // Parse SVG as XML, reject malformed documents.
        const parsed = new DOMParser().parseFromString(
            svgText,
            "image/svg+xml"
        );

        if (parsed.querySelector("parsererror") ||
            parsed.documentElement.localName !== "svg") {
            throw new Error("The map file is not a valid SVG.");
        }

        const svg = document.importNode(parsed.documentElement, true);
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.setAttribute("role", "group");
        svg.setAttribute("aria-label", "Map of India");

        mapContainer.replaceChildren(svg);
        attachMapInteractions(svg);
    } catch (error) {
        console.error("Unable to load the India map:", error);

        mapContainer.innerHTML =
            '<p class="empty-state">' +
            'Unable to load the map. Confirm that ' +
            '<code>assets/india-states.svg</code> exists and run the ' +
            'project using a local web server.' +
            '</p>';
    }
}

stateSelect.addEventListener("change", () => {
    if (stateSelect.value) {
        selectState(stateSelect.value);
    }
});

audioPlayer.addEventListener("playing", () => {
    equalizer.classList.add("playing");
    setStatus("Radio is playing.");
});

audioPlayer.addEventListener("pause", () => {
    equalizer.classList.remove("playing");

    if (audioPlayer.currentSrc) {
        setStatus("Playback paused.");
    }
});

audioPlayer.addEventListener("waiting", () => {
    setStatus("Buffering audio…");
});

audioPlayer.addEventListener("error", () => {
    equalizer.classList.remove("playing");
    setStatus(
        "Audio could not be loaded. The stream may be offline or unsupported.",
        true
    );
});

populateStateSelector();
loadIndiaMap();
