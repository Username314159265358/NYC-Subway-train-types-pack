(function () {
  const api = window.SubwayBuilderAPI;
  if (!api) {
    console.error("[NYC Subway Divisions Mod] SubwayBuilderAPI not found!");
    return;
  }

  api.trains.registerTrainType({
    id: "nyc-a-division",
    name: "NYC A Division (IRT)",
    description: "Narrower 51ft cars modeled after NYC Subway R142A/R62A (Lines 1-7 & 42 St Shuttle). Tighter turns, 3 to 11 cars.",
    stats: {
      maxAcceleration: 1.15,
      maxDeceleration: 1.34,
      maxSpeed: 24.72,
      maxSpeedLocalStation: 13,
      capacityPerCar: 185,
      carLength: 15.54,
      minCars: 3,
      maxCars: 11,
      carsPerCarSet: 1,
      carCost: 2200000,
      trainWidth: 2.67,
      minStationLength: 52.62,
      maxStationLength: 176.94,
      baseTrackCost: 26000,
      baseStationCost: 52000000,
      trainOperationalCostPerHour: 220,
      carOperationalCostPerHour: 21,
      stopTimeSeconds: 25,
      turnaroundTimeSeconds: 60,
      parallelTrackSpacing: 3.43,
      trackClearance: 0.9,
      maxLateralAcceleration: 1,
      maxCantMm: 150,
      maxCantDeficiencyMm: 110,
      minTurnRadius: 24,
      minStationTurnRadius: 135,
      maxSlopePercentage: 5.5,
      trackMaintenanceCostPerMeter: 310,
      stationMaintenanceCostPerYear: 280000,
      tphLimit: 42,
      crossoverSpeed: 6.7
    },
    compatibleTrackTypes: ["nyc-a-division"],
    appearance: {
      color: "#ee352e"
    },
    allowGradeCrossing: false,
    portalCost: 13000000,
    rampCost: 4500000,
    maxOverpassSpan: 65
  });

  api.trains.registerTrainType({
    id: "nyc-b-division",
    name: "NYC B Division (IND/BMT)",
    description: "Wider 60ft cars modeled after NYC Subway R211/R160 (Lines A-Z & Shuttles). Supports 3 to 10 car trains.",
    stats: {
      maxAcceleration: 1.12,
      maxDeceleration: 1.34,
      maxSpeed: 24.72,
      maxSpeedLocalStation: 13,
      capacityPerCar: 240,
      carLength: 18.35,
      minCars: 3,
      maxCars: 10,
      carsPerCarSet: 1,
      carCost: 2700000,
      trainWidth: 3.05,
      minStationLength: 61.05,
      maxStationLength: 189.5,
      baseTrackCost: 30000,
      baseStationCost: 60000000,
      trainOperationalCostPerHour: 250,
      carOperationalCostPerHour: 25,
      stopTimeSeconds: 25,
      turnaroundTimeSeconds: 60,
      parallelTrackSpacing: 3.81,
      trackClearance: 1,
      maxLateralAcceleration: 1,
      maxCantMm: 150,
      maxCantDeficiencyMm: 110,
      minTurnRadius: 29,
      minStationTurnRadius: 150,
      maxSlopePercentage: 5.5,
      trackMaintenanceCostPerMeter: 360,
      stationMaintenanceCostPerYear: 320000,
      tphLimit: 42,
      crossoverSpeed: 6.7
    },
    compatibleTrackTypes: ["nyc-b-division"],
    appearance: {
      color: "#ff6319"
    },
    allowGradeCrossing: false,
    portalCost: 15000000,
    rampCost: 5000000,
    maxOverpassSpan: 65
  });

  console.log("[NYC Subway Divisions Mod] Loaded standalone A & B Divisions!");
})();
