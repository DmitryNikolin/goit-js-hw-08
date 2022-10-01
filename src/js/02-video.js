import vimeoPlayer from '@vimeo/player';
import lodashThrottle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);
const KEY = 'videoplayer-current-time';

afterReboot();

const onPlay = function (data) {
  localStorage.setItem(KEY, data.seconds);
};

player.on('timeupdate', lodashThrottle(onPlay, 1000));

function afterReboot() {
  const currentTime = localStorage.getItem(KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
