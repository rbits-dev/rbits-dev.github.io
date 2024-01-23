var cacheName = 'hoppa-rbits-v1.5';
var cacheWhiteList = [ "hoppa-rbits-v1.5" ];

var filesToCache = [
'/hoppa/assets/01_main_screen_trailer.m4a',
'/hoppa/assets/01_main_screen_trailer.mp3',
'/hoppa/assets/02_level_grass.m4a',
'/hoppa/assets/02_level_grass.mp3',
'/hoppa/assets/03_level_forest.m4a',
'/hoppa/assets/03_level_forest.mp3',
'/hoppa/assets/04_level_rain.m4a',
'/hoppa/assets/04_level_rain.mp3',
'/hoppa/assets/05_level_desert.m4a',
'/hoppa/assets/05_level_desert.mp3',
'/hoppa/assets/100coins.m4a',
'/hoppa/assets/100coins.mp3',
'/hoppa/assets/angel-eyes.m4a',
'/hoppa/assets/angel-eyes.mp3',
'/hoppa/assets/8bitmetal.m4a',
'/hoppa/assets/8bitmetal.mp3',
'/hoppa/assets/ape.webp',
'/hoppa/assets/arrow.webp',
'/hoppa/assets/back1.webp',
'/hoppa/assets/back2.webp',
'/hoppa/assets/back3.webp',
'/hoppa/assets/back4.webp',
'/hoppa/assets/back5.webp',
'/hoppa/assets/back6.webp',
'/hoppa/assets/back7.webp',
'/hoppa/assets/grave5.webp',
'/hoppa/assets/grave2.webp',
'/hoppa/assets/grave3.webp',
'/hoppa/assets/grave4.webp',
'/hoppa/assets/bg-battery.webp',
'/hoppa/assets/barrel1.webp',
'/hoppa/assets/bat.json',
'/hoppa/assets/bat.webp',
'/hoppa/assets/bear.json',
'/hoppa/assets/bear.webp',
'/hoppa/assets/berry.m4a',
'/hoppa/assets/berry.mp3',
'/hoppa/assets/berry.webp',
'/hoppa/assets/beware.webp',
'/hoppa/assets/bg-mushrooms.jpeg',
'/hoppa/assets/bg-ui.webp',
'/hoppa/assets/bg.jpeg',
'/hoppa/assets/bgm_alpha.m4a',
'/hoppa/assets/bgm_alpha.mp3',
'/hoppa/assets/bgm_beta.m4a',
'/hoppa/assets/bgm_beta.mp3',
'/hoppa/assets/bgm_delta.m4a',
'/hoppa/assets/bgm_delta.mp3',
'/hoppa/assets/bgm_epsilon.m4a',
'/hoppa/assets/bgm_epsilon.mp3',
'/hoppa/assets/bgm_gamma.m4a',
'/hoppa/assets/bgm_gamma.mp3',
'/hoppa/assets/bgm_menu.m4a',
'/hoppa/assets/bgm_menu.mp3',
'/hoppa/assets/bgm_omega.m4a',
'/hoppa/assets/bgm_omega.mp3',
'/hoppa/assets/bgtiles.json',
'/hoppa/assets/bgtiles.webp',
'/hoppa/assets/bg_cocoons.webp',
'/hoppa/assets/billboards.json',
'/hoppa/assets/billboards.webp',
'/hoppa/assets/bird.json',
'/hoppa/assets/bird.webp',
'/hoppa/assets/blip.m4a',
'/hoppa/assets/blip.mp3',
'/hoppa/assets/bomb.json',
'/hoppa/assets/bomb.webp',
'/hoppa/assets/bonustile.m4a',
'/hoppa/assets/bonustile.mp3',
'/hoppa/assets/boss.m4a',
'/hoppa/assets/boss.mp3',
'/hoppa/assets/boss.webp',
'/hoppa/assets/boss.json',
'/hoppa/assets/plof.json',
'/hoppa/assets/plof.webp',
'/hoppa/assets/boss6.mp3',
'/hoppa/assets/boss6.m4a',
'/hoppa/assets/bottomlesspitman.m4a',
'/hoppa/assets/bottomlesspitman.mp3',
'/hoppa/assets/breakingtile.m4a',
'/hoppa/assets/breakingtile.mp3',
'/hoppa/assets/brick1-2.webp',
'/hoppa/assets/brick2-2.webp',
'/hoppa/assets/carrot.json',
'/hoppa/assets/carrot.webp',
'/hoppa/assets/ch-ay-na.m4a',
'/hoppa/assets/ch-ay-na.mp3',
'/hoppa/assets/changeskin.m4a',
'/hoppa/assets/changeskin.mp3',
'/hoppa/assets/changeskin.webp',
'/hoppa/assets/click2.m4a',
'/hoppa/assets/click2.mp3',
'/hoppa/assets/cocoons.json',
'/hoppa/assets/cocoons.webp',
'/hoppa/assets/coin.json',
'/hoppa/assets/coin.webp',
'/hoppa/assets/coinpickup.m4a',
'/hoppa/assets/coinpickup.mp3',
'/hoppa/assets/crab.json',
'/hoppa/assets/crab.webp',
'/hoppa/assets/cracks.json',
'/hoppa/assets/cracks.webp',
'/hoppa/assets/crate.webp',
'/hoppa/assets/crow.json',
'/hoppa/assets/crow.webp',
'/hoppa/assets/dawn_of_hope_low.m4a',
'/hoppa/assets/dawn_of_hope_low.mp3',
'/hoppa/assets/diamond.webp',
'/hoppa/assets/dragon.json',
'/hoppa/assets/dragon.webp',
'/hoppa/assets/dropping-splash.json',
'/hoppa/assets/dropping-splash.webp',
'/hoppa/assets/dropping.webp',
'/hoppa/assets/droppingbounces.m4a',
'/hoppa/assets/droppingbounces.mp3',
'/hoppa/assets/droppinghits.m4a',
'/hoppa/assets/droppinghits.mp3',
'/hoppa/assets/explosion1.m4a',
'/hoppa/assets/explosion1.mp3',
'/hoppa/assets/explosion2.m4a',
'/hoppa/assets/explosion2.mp3',
'/hoppa/assets/explosion3.m4a',
'/hoppa/assets/explosion3.mp3',
'/hoppa/assets/explosion4.m4a',
'/hoppa/assets/explosion4.mp3',
'/hoppa/assets/explosion5.m4a',
'/hoppa/assets/explosion5.mp3',
'/hoppa/assets/explosion6.m4a',
'/hoppa/assets/explosion6.mp3',
'/hoppa/assets/fire.json',
'/hoppa/assets/fire.webp',
'/hoppa/assets/fireball.json',
'/hoppa/assets/fireball.webp',
'/hoppa/assets/firewalk.json',
'/hoppa/assets/firewalk.webp',
'/hoppa/assets/flares.json',
'/hoppa/assets/flares.webp',
'/hoppa/assets/flower.json',
'/hoppa/assets/flower.webp',
'/hoppa/assets/fly.json',
'/hoppa/assets/fly.webp',
'/hoppa/assets/freejump.m4a',
'/hoppa/assets/freejump.mp3',
'/hoppa/assets/frog.json',
'/hoppa/assets/frog.webp',
'/hoppa/assets/gameover.m4a',
'/hoppa/assets/gameover.mp3',
'/hoppa/assets/gras.json',
'/hoppa/assets/gras.webp',
'/hoppa/assets/gras-purple.webp',
'/hoppa/assets/greengray.m4a',
'/hoppa/assets/greengray.mp3',
'/hoppa/assets/ground-extruded.json',
'/hoppa/assets/ground-extruded.webp',
'/hoppa/assets/health.json',
'/hoppa/assets/health.webp',
'/hoppa/assets/heart.webp',
'/hoppa/assets/heroimmortal.m4a',
'/hoppa/assets/heroimmortal.mp3',
'/hoppa/assets/hit.m4a',
'/hoppa/assets/hit.mp3',
'/hoppa/assets/hit1.m4a',
'/hoppa/assets/hit1.mp3',
'/hoppa/assets/hit2.m4a',
'/hoppa/assets/hit2.mp3',
'/hoppa/assets/juhanijunkala.m4a',
'/hoppa/assets/juhanijunkala.mp3',
'/hoppa/assets/juhanjunkala2.m4a',
'/hoppa/assets/juhanjunkala2.mp3',
'/hoppa/assets/juice.webp',
'/hoppa/assets/jump.flac',
'/hoppa/assets/jump.m4a',
'/hoppa/assets/jump.mp3',
'/hoppa/assets/junglegroove.m4a',
'/hoppa/assets/junglegroove.mp3',
'/hoppa/assets/key.webp',
'/hoppa/assets/lava-top.json',
'/hoppa/assets/lava-top.webp',
'/hoppa/assets/lava-center.json',
'/hoppa/assets/lava-center.webp',
'/hoppa/assets/lab.json',
'/hoppa/assets/lab.webp',
'/hoppa/assets/label-mushyroom.webp',
'/hoppa/assets/lava.m4a',
'/hoppa/assets/lava.mp3',
'/hoppa/assets/lightswitch.json',
'/hoppa/assets/lightswitch.m4a',
'/hoppa/assets/lightswitch.mp3',
'/hoppa/assets/lightswitch.webp',
'/hoppa/assets/loading.webp',
'/hoppa/assets/logo.webp',
'/hoppa/assets/map1.json',
'/hoppa/assets/minira8bits.json',
'/hoppa/assets/minira8bits.webp',
'/hoppa/assets/monster.json',
'/hoppa/assets/monster.webp',
'/hoppa/assets/rbits.webp',
'/hoppa/assets/nothrow.m4a',
'/hoppa/assets/nothrow.mp3',
'/hoppa/assets/objects.json',
'/hoppa/assets/objects.webp',
'/hoppa/assets/onmyway.m4a',
'/hoppa/assets/onmyway.mp3',
'/hoppa/assets/particles.json',
'/hoppa/assets/particles.webp',
'/hoppa/assets/pickupcarrot.m4a',
'/hoppa/assets/pickupcarrot.mp3',
'/hoppa/assets/pickupdropping.m4a',
'/hoppa/assets/pickupdropping.mp3',
'/hoppa/assets/pickuphealth.m4a',
'/hoppa/assets/pickuphealth.mp3',
'/hoppa/assets/plant.json',
'/hoppa/assets/plant.webp',
'/hoppa/assets/platform.webp',
'/hoppa/assets/mushroom.webp',
'/hoppa/assets/player1-win.json',
'/hoppa/assets/player1-win.webp',
'/hoppa/assets/player2-win.json',
'/hoppa/assets/player2-win.webp',
'/hoppa/assets/pokeball.webp',
'/hoppa/assets/pow.m4a',
'/hoppa/assets/pow.mp3',
'/hoppa/assets/pow.webp',
'/hoppa/assets/press-start-2p.ttf',
'/hoppa/assets/press_start_2p.fnt',
'/hoppa/assets/press_start_2p.webp',
'/hoppa/assets/ra8bit1-map.json',
'/hoppa/assets/ra8bit2-map.json',
'/hoppa/assets/ra8bittiles128-bg.webp',
'/hoppa/assets/ra8bittiles2.json',
'/hoppa/assets/ra8bittiles2.webp',
'/hoppa/assets/ra8bittiles64.webp',
'/hoppa/assets/rabbit.json',
'/hoppa/assets/rabbit.webp',
'/hoppa/assets/redheels.m4a',
'/hoppa/assets/redheels.mp3',
'/hoppa/assets/rubber1.m4a',
'/hoppa/assets/rubber1.mp3',
'/hoppa/assets/rubber_1.webp',
'/hoppa/assets/rubber_2.webp',
'/hoppa/assets/rubber_3.webp',
'/hoppa/assets/saw.json',
'/hoppa/assets/saw.webp',
'/hoppa/assets/screenshot.webp',
'/hoppa/assets/screenshot2.webp',
'/hoppa/assets/screenshot3.webp',
'/hoppa/assets/screenshot4.webp',
'/hoppa/assets/sky.webp',
'/hoppa/assets/spectacle.m4a',
'/hoppa/assets/spectacle.mp3',
'/hoppa/assets/spikes.webp',
'/hoppa/assets/splash.m4a',
'/hoppa/assets/splash.mp3',
'/hoppa/assets/spritesheet_ground.webp',
'/hoppa/assets/spritesheet_ground_extruded.webp',
'/hoppa/assets/spritesheet_props.webp',
'/hoppa/assets/spritesheet_props_extruded.webp',
'/hoppa/assets/spy.m4a',
'/hoppa/assets/spy.mp3',
'/hoppa/assets/star.m4a',
'/hoppa/assets/star.mp3',
'/hoppa/assets/star.webp',
'/hoppa/assets/start.json',
'/hoppa/assets/start.m4a',
'/hoppa/assets/start.mp3',
'/hoppa/assets/stomped.m4a',
'/hoppa/assets/stomped.mp3',
'/hoppa/assets/stomped2.m4a',
'/hoppa/assets/stomped2.mp3',
'/hoppa/assets/story1.webp',
'/hoppa/assets/story2.webp',
'/hoppa/assets/story3.webp',
'/hoppa/assets/story4.webp',
'/hoppa/assets/story5.webp',
'/hoppa/assets/storyx.webp',
'/hoppa/assets/terrainv3.json',
'/hoppa/assets/terrainv3.webp',
'/hoppa/assets/thecreeper.m4a',
'/hoppa/assets/thecreeper.mp3',
'/hoppa/assets/thevillage.m4a',
'/hoppa/assets/thevillage.mp3',
'/hoppa/assets/tnt.json',
'/hoppa/assets/tnt.webp',
'/hoppa/assets/toad.webp',
'/hoppa/assets/trap.json',
'/hoppa/assets/trap.webp',
'/hoppa/assets/valve.webp',
'/hoppa/assets/weed.webp',
'/hoppa/assets/zeppelin1.webp',
'/hoppa/assets/zeppelin2.webp',
'/hoppa/assets/beginatthebeginning.m4a',
'/hoppa/assets/blowitoutofyourass.m4a',
'/hoppa/assets/breakmybed.m4a',
'/hoppa/assets/donttellmewhattodo.m4a',
'/hoppa/assets/drunktoomuch.m4a',
'/hoppa/assets/equalopportunity.m4a',
'/hoppa/assets/hailtotheking.m4a',
'/hoppa/assets/idontseehow.m4a',
'/hoppa/assets/imsothirsty.m4a',
'/hoppa/assets/mymomcandothattoo.m4a',
'/hoppa/assets/offtoday.m4a',
'/hoppa/assets/strongboysnevergiveup.m4a',
'/hoppa/assets/takeitslow.m4a',
'/hoppa/assets/therightmaninthewrong.m4a',
'/hoppa/assets/timetokickass.m4a',
'/hoppa/assets/titanic.m4a',
'/hoppa/assets/todo.m4a',
'/hoppa/assets/uber.m4a',
'/hoppa/assets/underneath.m4a',
'/hoppa/assets/weareallmadhere.m4a',
'/hoppa/assets/whatareyou.m4a',
'/hoppa/assets/wishtogoanywhere.m4a',
'/hoppa/assets/wrongbutton.m4a',
'/hoppa/assets/youcametooquick.m4a',
'/hoppa/assets/youcanstaybut.m4a',
'/hoppa/assets/yourfaceyourass.m4a',
'/hoppa/assets/beginatthebeginning.mp3',
'/hoppa/assets/blowitoutofyourass.mp3',
'/hoppa/assets/breakmybed.mp3',
'/hoppa/assets/donttellmewhattodo.mp3',
'/hoppa/assets/drunktoomuch.mp3',
'/hoppa/assets/equalopportunity.mp3',
'/hoppa/assets/hailtotheking.mp3',
'/hoppa/assets/idontseehow.mp3',
'/hoppa/assets/imsothirsty.mp3',
'/hoppa/assets/mymomcandothattoo.mp3',
'/hoppa/assets/offtoday.mp3',
'/hoppa/assets/strongboysnevergiveup.mp3',
'/hoppa/assets/takeitslow.mp3',
'/hoppa/assets/therightmaninthewrong.mp3',
'/hoppa/assets/timetokickass.mp3',
'/hoppa/assets/titanic.mp3',
'/hoppa/assets/todo.mp3',
'/hoppa/assets/uber.mp3',
'/hoppa/assets/underneath.mp3',
'/hoppa/assets/weareallmadhere.mp3',
'/hoppa/assets/whatareyou.mp3',
'/hoppa/assets/wishtogoanywhere.mp3',
'/hoppa/assets/wrongbutton.mp3',
'/hoppa/assets/youcametooquick.mp3',
'/hoppa/assets/youcanstaybut.mp3',
'/hoppa/assets/yourfaceyourass.mp3',
'/hoppa/assets/catchy.mp3',
'/hoppa/assets/catchy.m4a',
'/hoppa/assets/swinginglevel.m4a',
'/hoppa/assets/swinginglevel.mp3',
'/hoppa/assets/happylevel.m4a',
'/hoppa/assets/happylevel.mp3',
'/hoppa/assets/longawayhome.m4a',
'/hoppa/assets/longawayhome.mp3',
'/hoppa/assets/beginatthebeginning-cs.m4a',
'/hoppa/assets/breakmybed-cs.m4a',
'/hoppa/assets/donttellmewhattodo-cs.m4a',
'/hoppa/assets/drunktoomuch-cs.m4a',
'/hoppa/assets/equalopportunity-cs.m4a',
'/hoppa/assets/hailtotheking-cs.m4a',
'/hoppa/assets/idontseehow-cs.m4a',
'/hoppa/assets/imsothirsty-cs.m4a',
'/hoppa/assets/mymomcandothattoo-cs.m4a',
'/hoppa/assets/offtoday-cs.m4a',
'/hoppa/assets/strongboysnevergiveup-cs.m4a',
'/hoppa/assets/takeitslow-cs.m4a',
'/hoppa/assets/therightmaninthewrong-cs.m4a',
'/hoppa/assets/titanic-cs.m4a',
'/hoppa/assets/todo-cs.m4a',
'/hoppa/assets/uber-cs.m4a',
'/hoppa/assets/underneath-cs.m4a',
'/hoppa/assets/weareallmadhere-cs.m4a',
'/hoppa/assets/whatareyou-cs.m4a',
'/hoppa/assets/wishtogoanywhere-cs.m4a',
'/hoppa/assets/wrongbutton-cs.m4a',
'/hoppa/assets/youcametooquick-cs.m4a',
'/hoppa/assets/youcanstaybut-cs.m4a',
'/hoppa/assets/yourfaceyourass-cs.m4a',
'/hoppa/assets/beginatthebeginning-cs.mp3',
'/hoppa/assets/breakmybed-cs.mp3',
'/hoppa/assets/donttellmewhattodo-cs.mp3',
'/hoppa/assets/drunktoomuch-cs.mp3',
'/hoppa/assets/equalopportunity-cs.mp3',
'/hoppa/assets/hailtotheking-cs.mp3',
'/hoppa/assets/idontseehow-cs.mp3',
'/hoppa/assets/imsothirsty-cs.mp3',
'/hoppa/assets/mymomcandothattoo-cs.mp3',
'/hoppa/assets/offtoday-cs.mp3',
'/hoppa/assets/strongboysnevergiveup-cs.mp3',
'/hoppa/assets/takeitslow-cs.mp3',
'/hoppa/assets/therightmaninthewrong-cs.mp3',
'/hoppa/assets/titanic-cs.mp3',
'/hoppa/assets/todo-cs.mp3',
'/hoppa/assets/uber-cs.mp3',
'/hoppa/assets/underneath-cs.mp3',
'/hoppa/assets/weareallmadhere-cs.mp3',
'/hoppa/assets/whatareyou-cs.mp3',
'/hoppa/assets/wishtogoanywhere-cs.mp3',
'/hoppa/assets/wrongbutton-cs.mp3',
'/hoppa/assets/youcametooquick-cs.mp3',
'/hoppa/assets/youcanstaybut-cs.mp3',
'/hoppa/assets/yourfaceyourass-cs.mp3',
'/hoppa/assets/demon_1.m4a',
'/hoppa/assets/demon_1.mp3',
'/hoppa/assets/demon_2.m4a',
'/hoppa/assets/demon_2.mp3',
'/hoppa/assets/demon_3.m4a',
'/hoppa/assets/demon_3.mp3',
'/hoppa/assets/demon_4.m4a',
'/hoppa/assets/demon_4.mp3',
'/hoppa/assets/stoplight.json',
'/hoppa/assets/stoplight.webp',
'/hoppa/assets/neon.json',
'/hoppa/assets/neon.webp',
'/hoppa/assets/doors.json',
'/hoppa/assets/doors.webp',
'/hoppa/assets/trashcan.webp',
'/hoppa/assets/bar.webp',
'/hoppa/assets/beginatthebeginning-vd.m4a',
'/hoppa/assets/beginatthebeginning-vd.mp3',
'/hoppa/assets/blowitoutofyourass-vd.m4a',
'/hoppa/assets/blowitoutofyourass-vd.mp3',
'/hoppa/assets/breakmybed-vd.m4a',
'/hoppa/assets/breakmybed-vd.mp3',
'/hoppa/assets/donttellmewhattodo-vd.m4a',
'/hoppa/assets/donttellmewhattodo-vd.mp3',
'/hoppa/assets/drunktoomuch-vd.m4a',
'/hoppa/assets/drunktoomuch-vd.mp3',
'/hoppa/assets/equalopportunity-vd.m4a',
'/hoppa/assets/equalopportunity-vd.mp3',
'/hoppa/assets/hailtotheking-vd.m4a',
'/hoppa/assets/hailtotheking-vd.mp3',
'/hoppa/assets/idontseehow-vd.m4a',
'/hoppa/assets/idontseehow-vd.mp3',
'/hoppa/assets/imsothirsty-vd.m4a',
'/hoppa/assets/imsothirsty-vd.mp3',
'/hoppa/assets/mymomcandothattoo-vd.m4a',
'/hoppa/assets/mymomcandothattoo-vd.mp3',
'/hoppa/assets/offtoday-vd.m4a',
'/hoppa/assets/offtoday-vd.mp3',
'/hoppa/assets/strongboysnevergiveup-vd.m4a',
'/hoppa/assets/strongboysnevergiveup-vd.mp3',
'/hoppa/assets/takeitslow-vd.m4a',
'/hoppa/assets/takeitslow-vd.mp3',
'/hoppa/assets/therightmaninthewrong-vd.m4a',
'/hoppa/assets/therightmaninthewrong-vd.mp3',
'/hoppa/assets/timetokickass-vd.m4a',
'/hoppa/assets/timetokickass-vd.mp3',
'/hoppa/assets/titanic-vd.m4a',
'/hoppa/assets/titanic-vd.mp3',
'/hoppa/assets/todo-vd.m4a',
'/hoppa/assets/todo-vd.mp3',
'/hoppa/assets/uber-vd.m4a',
'/hoppa/assets/uber-vd.mp3',
'/hoppa/assets/underneath-vd.m4a',
'/hoppa/assets/underneath-vd.mp3',
'/hoppa/assets/weareallmadhere-vd.m4a',
'/hoppa/assets/weareallmadhere-vd.mp3',
'/hoppa/assets/whatareyou-vd.m4a',
'/hoppa/assets/whatareyou-vd.mp3',
'/hoppa/assets/wishtogoanywhere-vd.m4a',
'/hoppa/assets/wishtogoanywhere-vd.mp3',
'/hoppa/assets/wrongbutton-vd.m4a',
'/hoppa/assets/wrongbutton-vd.mp3',
'/hoppa/assets/youcametooquick-vd.m4a',
'/hoppa/assets/youcametooquick-vd.mp3',
'/hoppa/assets/youcanstaybut-vd.m4a',
'/hoppa/assets/youcanstaybut-vd.mp3',
'/hoppa/assets/yourfaceyourass-vd.m4a',
'/hoppa/assets/yourfaceyourass-vd.mp3',
'/hoppa/assets/inventory.webp',
'/hoppa/assets/moonshot-splash.webp',
'/hoppa/assets/moonshot-splash.json',
'/hoppa/assets/moonshot-ball.webp',
'/hoppa/assets/card-1.m4a',
'/hoppa/assets/card-1.mp3',
'/hoppa/assets/card-2.m4a',
'/hoppa/assets/card-2.mp3',
'/hoppa/assets/card-3.m4a',
'/hoppa/assets/card-3.mp3',
'/hoppa/assets/card-4.m4a',
'/hoppa/assets/card-4.mp3',
'/hoppa/assets/card-5.m4a',
'/hoppa/assets/card-5.mp3',
'/hoppa/assets/card-6.m4a',
'/hoppa/assets/card-6.mp3',
'/hoppa/assets/card-8.m4a',
'/hoppa/assets/card-8.mp3',
'/hoppa/assets/card-7.m4a',
'/hoppa/assets/card-7.mp3',
'/hoppa/assets/card-9.m4a',
'/hoppa/assets/card-9.mp3',
'/hoppa/assets/hand.cur',
'/hoppa/assets/chiptune-stage1.mp3',
'/hoppa/assets/chiptune-stage1.m4a',
'/hoppa/assets/chiptune-stage2.mp3',
'/hoppa/assets/chiptune-stage2.m4a',
'/hoppa/assets/x-pixeladventures.mp3',
'/hoppa/assets/x-pixeladventures.m4a',
'/hoppa/assets/proper_summer.mp3',
'/hoppa/assets/proper_summer.m4a',
'/hoppa/assets/galaticfunk.mp3',
'/hoppa/assets/galaticfunk.m4a',
'/hoppa/assets/enchantedwoods.mp3',
'/hoppa/assets/enchantedwoods.m4a',
'/hoppa/assets/winneris.mp3',
'/hoppa/assets/winneris.m4a',
'/hoppa/assets/hiscore.mp3',
'/hoppa/assets/hiscore.m4a',
'/hoppa/assets/finalbossbattle.mp3',
'/hoppa/assets/finalbossbattle.m4a', 
];

self.addEventListener('install', function(e) {
e.waitUntil(
    caches.open(cacheName).then(function(cache) {
    return cache.addAll(filesToCache);
    })
);
self.skipWaiting();
});

self.addEventListener('fetch', event => {
    event.respondWith(
       caches.match(event.request, { ignoreSearch: true })
      .then(function(response) {
        if (response) {
          return response;
        }
        var requestToCache = event.request.clone();
  
        return fetch(requestToCache).then(
          function(response) {
            if(!response || response.status !== 200) {
              return response;
            }
  
            var responseToCache = response.clone();
            caches.open(cacheName)
            .then(function(cache) {
              cache.put(requestToCache, responseToCache);
            });
            return response;
          });
      })
    );
  });

  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhiteList.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });