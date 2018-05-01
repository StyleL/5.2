const appData = {
  autoRefresh: true,
  refreshInterval: 1000,
  gsTime: 0,
  me: [-1, -1, 0, 0],
  meGuid: -1,
  safe: [-1, -1, 0],
  poison: [-1, -1, 0],

  showingPlayers: new Map(), // guid -> obj { loc: team: kills: name: guid: friend: dead: }, replicate the server data.
  playerFeatures: new Map(), // guid -> ol.Feature

  showingAPawns: new Map(), // guid -> obj { loc, guid, owner, T }, replicate server data
  apawnFeatures: new Map(), // guid -> ol.Feature

  showingItems: new Map(), // itemguid -> obj { loc: name: FT:}
  itemFeatures: new Map(), // itemguid -> olFeature
}

// vue app just for html map option control
vapp = new Vue({
  el: '#app',
  data: {
    gameStartTime: '',
    lastPacketTime: '',
    mapType: 'erangel',
    followMe: true,
    isDesert: false,
    showBox: false,
    showAirDrop: true,
    showCar: true,

    showItemTop: true,
    showItemDuoDuo: true,
    showItemBasic: true,
    showItemAR: false,
    showItemSR: false,
    showItemHealth: false,
    showItemThrow: false,
    showItemAmmo: false,
    showItemAll: false,

    // --------------------------------------------------------------------------

    showBack: true,
    showArmor2: false,
    showHead2: false,
    showArmor3: true,
    showHead3: true,
    showFirstAid: true,
    showMedKit: true,
    showDrink: false,
    showGrenade: true,
    showSmokeBomb: false,
    showAmmo556: false,
    showAmmo762: false,
    showForeGrip: false,
    showLowST: false,
    showHighST: true,

      }
      if (this.showSRExtended) {
        flags |= 0b00000100000000000000000000000000
      }
      if (this.showSRStock) {
        flags |= 0b00000000100000000000000000000000
      }

})
var meLayer = new ol.layer.Vector({
  source: meSource
})
const mePoint = new ol.Feature({
  geometry: new ol.geom.Point([appData.me[0], appData.me[1]])
