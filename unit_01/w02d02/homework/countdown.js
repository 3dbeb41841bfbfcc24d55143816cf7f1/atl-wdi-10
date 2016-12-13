// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

window.onload = function(){
  var timerVal = 100;
  console.log(timerUI);

  var countDown = function(){
    if (timerVal >= 0) {
      // Trigger All TimerUI Methods //
      for (var key in timerUI) {
        timerUI[key](timerVal);
      }
      console.log(timerVal);
      timerVal -= 1;
      setTimeout(countDown, 1000);
    }
  };
  countDown();
};
