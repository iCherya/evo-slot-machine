import { makeAutoObservable } from 'mobx';

import { DOMAIN } from '@/config';
import { handleError } from '@/utils';

type SoundKey = keyof typeof DOMAIN.audio;

export class AudioStore {
  public isMuted = false;
  private audio = DOMAIN.audio;

  public constructor() {
    makeAutoObservable(this);
  }

  public stopAllAudio(): void {
    const audioFiles = Object.keys(this.audio) as SoundKey[];

    audioFiles.forEach((key) => {
      this.pauseSound(key);
      this.setCurrentTime(key, 0);
    });
  }

  public playSound(soundKey: SoundKey): void {
    this.audio[soundKey].play().catch(handleError);
  }

  public pauseSound(soundKey: SoundKey): void {
    this.audio[soundKey].pause();
  }

  public setCurrentTime(soundKey: SoundKey, time = 0): void {
    this.audio[soundKey].currentTime = time;
  }

  public toggleMute(): void {
    this.isMuted = !this.isMuted;
    const audioFiles = Object.keys(this.audio) as SoundKey[];

    audioFiles.forEach((key) => {
      this.audio[key].muted = !this.audio[key].muted;
    });
  }
}
